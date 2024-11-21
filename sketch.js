function setup() {
    createCanvas(400, 400);
    noStroke(); // Remove bordas dos desenhos
  }
  
  function draw() {
    background(220);
  
    // Corpo do rosto
    fill(255, 220, 150);
    ellipse(width / 2, height / 2, 200); // Cabeça redonda
  
    // Olhos
    fill(0);
    let eyeOffset = 50;
    let eyeSize = 20;
  
    // O olho direito segue o mouse
    let rightEyeX = constrain(mouseX, width / 2 - 10, width / 2 + 10);
    let rightEyeY = constrain(mouseY, height / 2 - 10, height / 2 + 10);
    ellipse(width / 2 - eyeOffset, height / 2 - 30, eyeSize); // Olho fixo
    ellipse(rightEyeX, rightEyeY, eyeSize); // Olho que segue o mouse
  
    // Boca
    if (mouseIsPressed) {
      // Piscando (boca pequena e risonha)
      fill(255, 80, 80);
      ellipse(width / 2, height / 2 + 40, 10, 10);
    } else {
      // Boca normal (um sorriso)
      fill(255, 80, 80);
      arc(width / 2, height / 2 + 40, 50, 20, 0, PI);
    }
  }
  