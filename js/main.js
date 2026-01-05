        let circleX, circleY, squareX, squareY;
        let circleRadius = 120;
        let h;
        let angle = 0;


let speed = 0.01;

        

        function setup() {
            let container = document.getElementById('abstract');
            let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
            canvas.parent('abstract');
            circleX = width / 2;
            circleY = height / 2;
            squareX = width / 2;
            squareY = height / 2;
            h = height / 2;
        }

        function draw() {
            // background(105, 105, 105);
            // angleMode(DEGREES);
            rotation_speed = 0;
            // for (y = 0; y < width / 2; y += 6) {
            //      c = lerpColor(color("#007"), color("#4BB"), y / width / 2);
            //     fill(c);
            //     square(y, y, width - 2 * y);
            //     }
            fill("#22efe8ff");
            stroke("#407cd0ff");
            for (let i = 6000; i > 0; i--) {
                let x = width / 2 + sin(i + angle) * sin(i * i) * 100;
                let y = height / 2 + 100 * cos(i * i);
                circle(x, y, 2);
                }
  angle += speed;

                
                
            


    //           for (let angle=0; angle <= 90; angle += 30) {
    //   // Save current coordinate system
    //                 push(); 
    //                 noFill();
    //                 strokeWeight(15)
    //                 stroke("#667eea");
    //                 translate(width/2, height/2);
    //                 rotate(frameCount * 0.5);
    //                 square(squareX-(width/2)-100,squareY-(height/2)-200,300);
    //                 pop(); }
            

    //          for (let angle=0; angle <= 90; angle += 30) {
    //   // Save current coordinate system
    //                 push(); 
    //                 noFill();
    //                 strokeWeight(15);           
    //                 stroke("#D5FAFF");
    //                 translate(width/2, height/2);
    //                 rotate(frameCount * 0.5);
    //                 square(squareX-(width/2)-200,squareY-(height/2)-100,300);
    //                 pop(); }

            // Calculate distance from mouse to circle center
            let d = dist(mouseX, mouseY, circleX, circleY);
            
            // Map distance to glow intensity (closer = brighter)
            // When mouse is at center (d=0), intensity is maximum
            // When mouse is far away (d>300), intensity is minimum
            let mouseIntensity = map(d, 0, 250, 1, 0.5);
            mouseIntensity = constrain(mouseIntensity, 0, 1);
            
            // Base pulsing animation
            let pulse = sin(frameCount * .05) * 0.3 + 1.2;
            
            // Combine pulse with mouse proximity
            let finalIntensity = pulse * (0.3 + mouseIntensity * .7);
            
            // Calculate glow blur and color alpha
            let glowBlur = finalIntensity * 60;
            let colorBrightness = 100 + finalIntensity * 155;
            
            // Apply glow effect
            drawingContext.shadowBlur = glowBlur;
            drawingContext.shadowColor = `rgba(102, 204, 255, ${finalIntensity * 0.9})`;
            
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
            gradient.addColorStop(0.3, `rgba(202, 230, 255, ${intensity * 0.8})`);
            
            // Outer color (darker edge)
            gradient.addColorStop(0.7, `rgba(102, 204, 255, ${intensity * 0.6})`);
            gradient.addColorStop(1, `rgba(230, 247, 255,  ${intensity * 0.1})`);
            
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
        