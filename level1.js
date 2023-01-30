//level 1
//click in the box adds to the score
//click outside of box takes away
//win screen at 20 points

let x, y; //variables for position
let rectSize = 30;
let score = 0;
let lives = 3;
let goal = 20; //where are we playing too.

function setup() {
  createCanvas(800, 600);
  noLoop();
  noStroke();
}

function draw() {
  background(255);

  //info
  fill(0);
  text("score: " + score, 20, 20);
  text("lives: " + lives, 20, 40); 

  //draw the rectangle at a random position
  x = random(width - rectSize);
  y = random(height - rectSize);

  fill(random(255), random(255), random(255));
  rect(x, y, rectSize, rectSize);

  //
  if (score >= goal) {
    background(220);
    fill(0);
    text("Good Job! You Win", 20, 20);
  } else if(lives < 0){
    background(220);
    fill(0);
    text("You Lose!", 20, 20);
  }
}

function mousePressed() {
  if (score < goal) {
    //check to see if the mouse is in the box
    if (
      mouseX > x &&
      mouseX < x + rectSize &&
      mouseY > y &&
      mouseY < y + rectSize
    ) {
      console.log("inside");
      score++;
    
    } else {
      console.log("outside");
      lives--;
    }
      redraw();
  }
}

