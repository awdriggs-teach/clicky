//level 3
//with a timer

let x, y; //variables for position
let rectSize = 30;
let score = 0;
let timeLeft = 30;
let c;

function setup() {
  createCanvas(800, 600);
  noStroke();
  //set a start location
  x = random(width - rectSize);
  y = random(height - rectSize);
  
  c = color(random(255), random(255), random(255));
}

function draw() {
  if (timeLeft > 0) {
    background(255);

    //info
    fill(0);
    text(score, 20, 20);
    text(timeLeft, 20, 40);

    //update the time
    if (frameCount % 60 == 0) {
      timeLeft--;
    }

//     if (frameCount % 120 == 0) {
//       //change location
//       x = random(width - rectSize);
//       y = random(height - rectSize);
      
//       //update fill
//       c = color(random(255), random(255), random(255));
//     }
    
    //draw the rect
    fill(c);
    rect(x, y, rectSize, rectSize);
  } else {
    //display the final splash screen
    background(220);
    fill(0);
    textAlign(CENTER);
    text("Time's up!", width / 2, height / 2);
    text(score, width / 2, height / 2 + 20);
  }

  //draw the rectangle at a random position
}

function mousePressed() {
  
    //check to see if the mouse is in the box
    if (
      mouseX > x &&
      mouseX < x + rectSize &&
      mouseY > y &&
      mouseY < y + rectSize
    ) {
      console.log("inside");
      score++;
      //change location
      x = random(width - rectSize);
      y = random(height - rectSize);
      
      //update fill
      c = color(random(255), random(255), random(255));
    } else {
      console.log("outside");
      //score--;
    }
  
}

