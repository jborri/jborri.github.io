
        
        // First cube - mouse controlled
        new p5(function(p) {
            p.setup = function() {
                p.createCanvas(windowWidth, windowHeight, p.WEBGL);
               
            };

            p.draw = function() {
                p.background(20 ,0, 40, 0.0);
                p.ambientLight(300);
                p.pointLight(255, 255, 255, 200, -200, 200);
                
                // let rotY = p.map(p.mouseX, 0, p.width, -p.PI, p.PI);
                // let rotX = p.map(p.mouseY, 0, p.height, -p.PI, p.PI);
                
                // p.rotateX(rotX);
                // p.rotateY(rotY);

                  // Enable orbiting with the mouse.
                p.orbitControl();

                p.specularMaterial(255);
                
                p.fill('rgba(20, 245, 234, 0.25)');
                // p.noFill();
                p.shininess(100);
                p.strokeWeight(2);
                p.noStroke();
                // p.stroke("#a410c9");
                p.ellipsoid(230, 140, 150, 4, 2);


            
            };
        }, 'sketch1');

        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);

        }

        // Second cube - auto rotating
//         new p5(function(p) {
//             p.setup = function() {
//                 p.createCanvas(300, 300, p.WEBGL);
//                 p.angleMode(DEGREES);
//                 p.colorMode(RGBA);
//                 p.strokeWeight(1);
//                 p.noFill();
//                 p.stroke("#8ce6daff");
              
//                 p.describe(
//     'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a sphere of dark purple cubes on a light pink background.'
//                 );
//             };

// p.draw = function() {
//   p.background(250, 180, 200, 0.0);

//   // Call every frame to adjust camera based on mouse/touch
//   p.orbitControl();
//   // Rotate rings in a half circle to create a sphere of cubes
//   for (let zAngle = 0; zAngle < 180; zAngle += 30) {
//     // Rotate cubes in a full circle to create a ring of cubes
//     for (let xAngle = 0; xAngle < 360; xAngle += 30) {
//       p.push();

//       // Rotate from center of sphere
//       p.rotateZ(zAngle);
//       p.rotateX(xAngle);

//       // Then translate down 400 units
//       p.translate(0, 100, 0);
//       p.cylinder(20,1);
//       p.pop();
//     }
//   }
// }
//         }, 'sketch2');

        // // Third cube - oscillating
        new p5(function(p) {
            p.setup = function() {
                p.createCanvas(600, 600, p.WEBGL);
            };

            p.draw = function() {
                p.background(20, 40, 20);
                p.ambientLight(60);
                p.pointLight(255, 255, 255, 200, -200, 200);
                
                p.rotateX(p.sin(p.frameCount * 0.02) * p.PI);
                p.rotateY(p.cos(p.frameCount * 0.03) * p.PI);
                p.fill(150, 255, 100);
                p.box(120);
            };
        }, 'sketch3');
