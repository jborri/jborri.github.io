        let circleX, circleY, squareX, squareY;
        let circleRadius = 120;

        function setup() {
            let container = document.getElementById('abstract');
            let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
            canvas.parent('abstract');
            circleX = width / 2;
            circleY = height / 2;
            squareX = width / 2;
            squareY = height / 2;
        }

        function draw() {
            background(0, 10, 10);
          
            noFill();
            strokeWeight(6)
            stroke("#a410c9");
            square(squareX-100,squareY-200,300);

  
            noFill();
            strokeWeight(6)
            stroke("#a410c9");
            square(squareX-200,squareY-100,300);
            noStroke();

            // Calculate distance from mouse to circle center
            let d = dist(mouseX, mouseY, circleX, circleY);
            
            // Map distance to glow intensity (closer = brighter)
            // When mouse is at center (d=0), intensity is maximum
            // When mouse is far away (d>300), intensity is minimum
            let mouseIntensity = map(d, 0, 150, 1, 0.5);
            mouseIntensity = constrain(mouseIntensity, 0, 1);
            
            // Base pulsing animation
            let pulse = sin(frameCount * 0.08) * 0.3 + 1.2;
            
            // Combine pulse with mouse proximity
            let finalIntensity = pulse * (0.3 + mouseIntensity * .7);
            
            // Calculate glow blur and color alpha
            let glowBlur = finalIntensity * 60;
            let colorBrightness = 100 + finalIntensity * 155;
            
            // Apply glow effect
            drawingContext.shadowBlur = glowBlur;
            drawingContext.shadowColor = `rgba(18, 212, 124, ${finalIntensity * 0.9})`;
            
            // Draw circle with radial gradient
            drawRadialGradientCircle(circleX, circleY, circleRadius * 2, colorBrightness, finalIntensity);
            
            // Add a brighter core when mouse is close
            if (mouseIntensity > 0.3) {
                
            }
            
            // Reset shadow
            drawingContext.shadowBlur = 0;
        }

        function drawRadialGradientCircle(x, y, diameter, brightness, intensity) {
            // Create radial gradient using HTML5 Canvas API
            let gradient = drawingContext.createRadialGradient(x, y, 0, x, y, diameter / 2);
            
            // Base color: #12d47c (rgb: 18, 212, 124)
            // Inner color (bright center)
            gradient.addColorStop(0, `rgba(255, 255, 255, ${intensity * 0.9})`);
            gradient.addColorStop(0.3, `rgba(120, 255, 200, ${intensity * 0.8})`);
            
            // Outer color (darker edge)
            gradient.addColorStop(0.7, `rgba(18, 212, 124, ${intensity * 0.6})`);
            gradient.addColorStop(1, `rgba(10, 150, 80, ${intensity * 0.1})`);
            
            // Apply gradient and draw
            drawingContext.fillStyle = gradient;
            drawingContext.beginPath();
            drawingContext.arc(x, y, diameter / 2, 0, Math.PI * 2);
            drawingContext.fill();
        }

        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);
            circleX = width / 2;
            circleY = height / 2;
            squareX = width / 2;
            squareY = height / 2;
        }
        