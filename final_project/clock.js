const clockSketch = (p) => {
    let secondsRadius;
    let minutesRadius;
    let hoursRadius;
    let clockDiameter;
  
    p.setup = () => {
      let canvas = p.createCanvas(200, 200);
      canvas.parent('clock-container'); // Attach canvas to a specific HTML container
      p.stroke(255);
      p.angleMode(p.DEGREES);
  
      let radius = p.min(p.width, p.height) / 2;
      secondsRadius = radius * 0.71;
      minutesRadius = radius * 0.6;
      hoursRadius = radius * 0.5;
      clockDiameter = radius * 1.7;
  
      p.describe('Functioning pink clock on a transparent background.');
    };
  
    p.draw = () => {
      p.clear(); // Clear the background for transparency
      p.translate(p.width / 2, p.height / 2); // Center the clock
  
      // Clock face
      p.noStroke();
      p.fill(244, 122, 158);
      p.ellipse(0, 0, clockDiameter + 25, clockDiameter + 25); // Outer circle
      p.fill(1, 34, 93);
      p.ellipse(0, 0, clockDiameter, clockDiameter); // Inner circle
  
      // Calculate angles for hands
      let secondAngle = p.map(p.second(), 0, 60, 0, 360);
      let minuteAngle = p.map(p.minute() + p.norm(p.second(), 0, 60), 0, 60, 0, 360);
      let hourAngle = p.map(p.hour() + p.norm(p.minute(), 0, 60), 0, 12, 0, 360);
  
      p.stroke(255);
  
      // Second hand
      p.push();
      p.rotate(secondAngle);
      p.strokeWeight(1);
      p.line(0, 0, 0, -secondsRadius);
      p.pop();
  
      // Minute hand
      p.push();
      p.rotate(minuteAngle);
      p.strokeWeight(2);
      p.line(0, 0, 0, -minutesRadius);
      p.pop();
  
      // Hour hand
      p.push();
      p.rotate(hourAngle);
      p.strokeWeight(4);
      p.line(0, 0, 0, -hoursRadius);
      p.pop();
    };
  };
  
  // Initialize the p5 instance
  new p5(clockSketch);
  