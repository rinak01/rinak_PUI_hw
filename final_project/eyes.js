const eyeSketch = (p) => {
    p.setup = () => {
      let canvas = p.createCanvas(400, 400);
      canvas.parent('eyes-container'); // Attach canvas to a specific HTML container
      p.colorMode(p.HSB);
  
      // Set angle mode so that atan2() returns angles in degrees
      p.angleMode(p.DEGREES);
    };
  
    p.draw = () => {
      // Clear the canvas for redrawing
      p.clear();
  
      // Left eye position
      let leftX = 155;
      let leftY = 100;
  
      // Calculate angle between left eye and mouse
      let leftAngle = p.atan2(p.mouseY - leftY, p.mouseX - leftX);
  
      p.push();
      p.translate(leftX, leftY);
      p.fill(255);
      p.ellipse(0, 0, 40, 40); // Left eye white
      p.rotate(leftAngle);
      p.fill(0);
      p.ellipse(7, 0, 25, 25); // Left eye pupil
      p.pop();
  
      // Right eye position
      let rightX = 250;
      let rightY = 100;
  
      // Calculate angle between right eye and mouse
      let rightAngle = p.atan2(p.mouseY - rightY, p.mouseX - rightX);
  
      p.push();
      p.translate(rightX, rightY);
      p.fill(255);
      p.ellipse(0, 0, 40, 40); // Right eye white
      p.rotate(rightAngle);
      p.fill(0);
      p.ellipse(7, 0, 25, 25); // Right eye pupil
      p.pop();
    };
  };
  
  // Initialize the p5 instance
  new p5(eyeSketch);
  