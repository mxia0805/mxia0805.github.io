let bubbles = [];
let flowDirection;

function setup() {
  createCanvas(600, 500);
  flowDirection = createVector(1, 1); // Initial flow direction
}

function draw() {
  background(255);
  moveBubbles();
  displayBubbles();
  generateBubbleOnHover();
}

function moveBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];

    // Move bubbles
    bubble.x += bubble.speedX * flowDirection.x;
    bubble.y += bubble.speedY * flowDirection.y;

    // Bounce off the walls
    if (bubble.x > width - bubble.radius || bubble.x < bubble.radius) {
      bubble.speedX *= -1;
    }
    if (bubble.y > height - bubble.radius || bubble.y < bubble.radius) {
      bubble.speedY *= -1;
    }
  }
}

function displayBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];

    // Draw bubbles
    noStroke();
    let bubbleColor = color(red(bubble.color), green(bubble.color), blue(bubble.color), 150);
    fill(bubbleColor);
    ellipse(bubble.x, bubble.y, bubble.radius * 2, bubble.radius * 2);

    // User interaction (mouse click)
    let d = dist(mouseX, mouseY, bubble.x, bubble.y);
    if (d < bubble.radius && mouseIsPressed) {
      bubble.clicked = true;
    } else {
      bubble.clicked = false;
    }
  }
}

function generateBubbleOnHover() {
  let hoverDiameter = 50;

  // Check if the mouse is over an empty space
  let isHovering = true;
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];
    let d = dist(mouseX, mouseY, bubble.x, bubble.y);
    if (d < bubble.radius) {
      isHovering = false;
      break;
    }
  }

  // Generate a new bubble when hovering over an empty space
  if (isHovering) {
    fill(200, 200, 255, 100); // Semi-transparent blue
    ellipse(mouseX, mouseY, hoverDiameter, hoverDiameter);
  }
}

function mousePressed() {
  // Generate a new bubble when the mouse is pressed
  let newBubble = {
    x: mouseX,
    y: mouseY,
    radius: random(20, 50),
    color: generateRandomColor(),
    speedX: random(2, 5),
    speedY: random(2, 5),
    clicked: false,
  };
  bubbles.push(newBubble);
}

function generateRandomColor() {
  return color(random(255), random(255), random(255));
}

function keyPressed() {
  // Change the flow direction when a key is pressed
  flowDirection = createVector(random(-1, 1), random(-1, 1));
  flowDirection.normalize(); // Normalize to maintain consistent speed
}