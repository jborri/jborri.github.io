const lotusImage = document.getElementById("lotus");
const lotusModal = document.getElementById("lotus-modal");
const closeLotus = document.getElementById("close-lotus");

// Open the modal when the lotus image is clicked
lotusImage.addEventListener("click", () => {
  lotusModal.classList.remove("hidden");
});

// Close the modal when the close button is clicked
closeLotus.addEventListener("click", () => {
  lotusModal.classList.add("hidden");
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === lotusModal) {
    lotusModal.classList.add("hidden");
  }
});

let caustics = [];
let time = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('caustics-canvas');
    
    // Create caustic light sources
    for (let i = 0; i < 15; i++) {
        caustics.push({
            x: random(width),
            y: random(height),
            size: random(150, 400),
            speedX: random(-0.3, 0.3),
            speedY: random(-0.3, 0.3),
            phase: random(TWO_PI),
            waveSpeed: random(0.01, 0.03)
        });
    }
}

function draw() {
    // Base background gradient
    setGradient(0, 0, width, height);
    
    time += 0.01;
    
    // Draw caustic patterns
    for (let caustic of caustics) {
        // Update position with sine wave motion
        caustic.x += caustic.speedX + sin(time + caustic.phase) * 5.5;
        caustic.y += caustic.speedY + cos(time + caustic.phase) * 5.5;
        
        // Wrap around edges
        if (caustic.x < -200) caustic.x = width + 200;
        if (caustic.x > width + 200) caustic.x = -200;
        if (caustic.y < -200) caustic.y = height + 200;
        if (caustic.y > height + 200) caustic.y = -200;
        
        // Pulsing size
        let pulseSize = caustic.size + sin(time * caustic.waveSpeed + caustic.phase) * 50;
        
        // Draw caustic with multiple layers for depth
        drawingContext.filter = 'blur(40px)';
        
        // Outer glow
        let outerColor = color(220, 240, 235, 25);
        fill(outerColor);
        noStroke();
        ellipse(caustic.x, caustic.y, pulseSize * 1.5);
        
        // Middle layer
        let middleColor = color(200, 235, 225, 35);
        fill(middleColor);
        ellipse(caustic.x, caustic.y, pulseSize * 1.1);
        
        // Inner bright spot
        let innerColor = color(255, 255, 255, 45);
        fill(innerColor);
        ellipse(caustic.x, caustic.y, pulseSize * 0.7);
        
        drawingContext.filter = 'none';
    }
}

function setGradient(x, y, w, h) {
    noFill();
    
    // Create gradient background
    for (let i = 0; i <= h; i++) {
        let inter = map(i, 0, h, 0, 1);
        let c = lerpColor(
            color(245, 249, 248),
            color(240, 250, 246),
            inter
        );
        stroke(c);
        line(x, y + i, x + w, y + i);
    }
    
    // Add subtle green gradient overlay
    for (let i = 0; i <= h; i++) {
        let inter = map(i, 0, h, 0, 1);
        let alpha = map(inter, 0, 1, 40, 10);
        let c = color(200, 230, 220, alpha);
        stroke(c);
        line(x, y + i, x + w, y + i);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    
    // Redistribute caustics
    for (let caustic of caustics) {
        if (caustic.x > width) caustic.x = width;
        if (caustic.y > height) caustic.y = height;
    }
}