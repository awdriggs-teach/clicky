//Challenge Level 2
//Click to increase the score
//misses lose lives
//box moves every two seconds

let x, y; //variables for position
let rectSize = 30;
let score = 0;
let lives = 3;

function setup() {
  createCanvas(800, 600);
  //noLoop(); //stop draw from looping
    x = random(width - rectSize);
    y = random(height - rectSize);
  noStroke();
}

function draw() {
  background(255);

  if(lives > 0){ //still playing
     //info
    fill(0);
    text("score: " + score, 20, 20);
    text("lives: " + lives, 20, 40);
    
    if(frameCount % 120 == 0){
      //update x and y
      x = random(width - rectSize);
      y = random(height - rectSize);
    }
    
    
    fill("lightgreen");
    rect(x, y, rectSize, rectSize);
  } else { //game over!
    textAlign(CENTER);
    text("game over!", width/2, height/2);
    text("Final score:" + score, width/2, height/2 + 20);
  }  
}

function mousePressed() {
  //check to see if the mouse is in the box
  if(mouseX > x && mouseX < x + rectSize && mouseY > y && mouseY < y + rectSize){
    console.log("inside");
    score++;
    x = random(width - rectSize);
    y = random(height - rectSize);
    frameCount = 1; //reset the framecount
  } else {
    console.log("outside");
    lives--;
  } 
}

//Extensions, replace the box with an image!
//Set a Time Limit, example you can only play for one minute.
