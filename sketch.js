let rectY;
let rectWidth;
let rectHeight;
let blackRectWidth;
let blackRectHeight;
let snowflakes = [];
let r;
let g;
let b;

//Sounds
let cSound;
let dSound;
let eSound;
let fSound;
let gSound;
let aSound;
let bSound;
let c3Sound;
let d3Sound;
let e3Sound;
let f3Sound;
let g3Sound;
let a3Sound;
let b3Sound;

function preload(){
 cSound = loadSound("C.wav");
 dSound = loadSound("D.wav");
 eSound = loadSound("E.wav");
 fSound = loadSound("F.wav");
 gSound = loadSound("G.wav");
 aSound = loadSound("A.wav");
 bSound = loadSound("B.wav");
 c3Sound = loadSound("C3.wav"); 
 d3Sound = loadSound("D3.wav");
 e3Sound = loadSound("E3.wav");
 f3Sound = loadSound("F3.wav");
 g3Sound = loadSound("G3.wav");
 a3Sound = loadSound("A3.wav");
 b3Sound = loadSound("B3.wav");

}

function setup() {
  createCanvas(990, 600);
  rectY = 300;
  rectWidth = 70;
  rectHeight = 400;
  blackRectWidth = 38;
  blackRectHeight = 180;
  r=random(255);
  g=random(255);
  b=random(255);
}

function draw() {
  background(0);
  fill(255);
  rect(0, rectY, rectWidth, rectHeight);
  rect(70, rectY, rectWidth, rectHeight);
  rect(140, rectY, rectWidth, rectHeight);
  rect(210, rectY, rectWidth, rectHeight);
  rect(280, rectY, rectWidth, rectHeight);
  rect(350, rectY, rectWidth, rectHeight);
  rect(420, rectY, rectWidth, rectHeight);
  rect(490, rectY, rectWidth, rectHeight);
  rect(560, rectY, rectWidth, rectHeight);
  rect(630, rectY, rectWidth, rectHeight);
  rect(700, rectY, rectWidth, rectHeight);
  rect(770, rectY, rectWidth, rectHeight);
  rect(840, rectY, rectWidth, rectHeight);
  rect(910, rectY, rectWidth, rectHeight);
  fill(0);
  rect(50, rectY, blackRectWidth, blackRectHeight);
  rect(120, rectY, blackRectWidth, blackRectHeight);
  rect(260, rectY, blackRectWidth, blackRectHeight);
  rect(330, rectY, blackRectWidth, blackRectHeight);
  rect(400, rectY, blackRectWidth, blackRectHeight);
  rect(540, rectY, blackRectWidth, blackRectHeight);
  rect(610, rectY, blackRectWidth, blackRectHeight);
  rect(750, rectY, blackRectWidth, blackRectHeight);
  rect(820, rectY, blackRectWidth, blackRectHeight);
  rect(890, rectY, blackRectWidth, blackRectHeight);
  
 
  
  if (mouseX > 0 && mouseX < 0 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
    if (mouseIsPressed) {
  	fill(34, 230, 82);
    rect(0, rectY, rectWidth, rectHeight);
    fill(0);
  	rect(50, rectY, blackRectWidth, blackRectHeight);
    rect(120, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    c3Sound.play();
  
  }
  else {
    fill(220);
    rect(0, rectY, rectWidth, rectHeight);
    fill(0);
  	rect(50, rectY, blackRectWidth, blackRectHeight);
    rect(120, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
    
  }
  if (mouseX > 70 && mouseX < 70 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(255,105,180);
    rect(70, rectY, rectWidth, rectHeight);
    fill(0);
    rect(120, rectY, blackRectWidth, blackRectHeight);
  	rect(50, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    d3Sound.play();
  }
  else {
    fill(220);
    rect(70, rectY, rectWidth, rectHeight);
    fill(0);
    rect(120, rectY, blackRectWidth, blackRectHeight);
  	rect(50, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  if (mouseX > 140 && mouseX < 140 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(37, 105, 248);
    rect(140, rectY, rectWidth, rectHeight);
    fill(0);
    rect(120, rectY, blackRectWidth, blackRectHeight);
    rect(260, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    e3Sound.play();
  }
  else {
    fill(220);
    rect(140, rectY, rectWidth, rectHeight);
    fill(0);
    rect(120, rectY, blackRectWidth, blackRectHeight);
    rect(260, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  if (mouseX > 210 && mouseX < 210 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(255, 255, 0);
    rect(210, rectY, rectWidth, rectHeight);
    fill(0);
    rect(260, rectY, blackRectWidth, blackRectHeight);
    rect(330, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    f3Sound.play();
  }
  else {
    fill(220);
    rect(210, rectY, rectWidth, rectHeight);
    fill(0);
    rect(260, rectY, blackRectWidth, blackRectHeight);
    rect(330, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  if (mouseX > 280 && mouseX < 280 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(138,43,226);
    rect(280, rectY, rectWidth, rectHeight);
    fill(0);
    rect(330, rectY, blackRectWidth, blackRectHeight);
    rect(260, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    g3Sound.play();
  }
  else {
    fill(220);
    rect(280, rectY, rectWidth, rectHeight);
    fill(0);
    rect(330, rectY, blackRectWidth, blackRectHeight);
    rect(260, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  if (mouseX > 350 && mouseX < 350 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(34, 230, 82);
    rect(350, rectY, rectWidth, rectHeight);
    fill(0);
    rect(400, rectY, blackRectWidth, blackRectHeight);
    rect(330, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    a3Sound.play();
  }
  else {
    fill(220);
    rect(350, rectY, rectWidth, rectHeight);
    fill(0);
    rect(400, rectY, blackRectWidth, blackRectHeight);
    rect(330, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  if (mouseX > 420 && mouseX < 420 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(255,105,180);
    rect(420, rectY, rectWidth, rectHeight);
    fill(0);
    rect(610, rectY, blackRectWidth, blackRectHeight);
    rect(400, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    b3Sound.play();
  }
  else {
    fill(220);
    rect(420, rectY, rectWidth, rectHeight);
    fill(0);
    rect(610, rectY, blackRectWidth, blackRectHeight);
    rect(400, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  if (mouseX > 490 && mouseX < 490 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(37, 105, 248);
    rect(490, rectY, rectWidth, rectHeight);
    fill(0);
    rect(750, rectY, blackRectWidth, blackRectHeight);
    rect(540, rectY, blackRectWidth, blackRectHeight); 
    snowflakeAnim();
    cSound.play();
  }
  else {
    fill(220);
    rect(490, rectY, rectWidth, rectHeight);
    fill(0);
    rect(750, rectY, blackRectWidth, blackRectHeight);
    rect(540, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  if (mouseX > 560 && mouseX < 560 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(255, 255, 0);
    rect(560, rectY, rectWidth, rectHeight);
    fill(0);
    rect(610, rectY, blackRectWidth, blackRectHeight);
    rect(540, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    dSound.play();
  }
  else {
    fill(220);
    rect(560, rectY, rectWidth, rectHeight);
    fill(0);
    rect(610, rectY, blackRectWidth, blackRectHeight);
    rect(540, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  if (mouseX > 630 && mouseX < 630 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(138,43,226);
    rect(630, rectY, rectWidth, rectHeight);
    fill(0);
    rect(610, rectY, blackRectWidth, blackRectHeight);
    rect(750, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    eSound.play();
  }
  else {
    fill(220);
    rect(630, rectY, rectWidth, rectHeight);
    fill(0);
    rect(610, rectY, blackRectWidth, blackRectHeight);
    rect(750, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  if (mouseX > 700 && mouseX < 700 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(34, 230, 82);
    rect(700, rectY, rectWidth, rectHeight);
    fill(0);
    rect(820, rectY, blackRectWidth, blackRectHeight);
    rect(750, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    fSound.play();
  }
  else {
    fill(220);
    rect(700, rectY, rectWidth, rectHeight);
    fill(0);
    rect(820, rectY, blackRectWidth, blackRectHeight);
    rect(750, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  if (mouseX > 770 && mouseX < 770 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(255,105,180);
    rect(770, rectY, rectWidth, rectHeight);
    fill(0);
    rect(820, rectY, blackRectWidth, blackRectHeight);
    rect(750, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    gSound.play();
  }
  else {
    fill(220);
    rect(770, rectY, rectWidth, rectHeight);
    fill(0);
    rect(820, rectY, blackRectWidth, blackRectHeight);
    rect(750, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  if (mouseX > 840 && mouseX < 840 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      if (mouseIsPressed) {
  	fill(37, 105, 248);
    rect(840, rectY, rectWidth, rectHeight);
    fill(0);
    rect(820, rectY, blackRectWidth, blackRectHeight);
    rect(890, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    aSound.play();
  }
  else {
    fill(220);
    rect(840, rectY, rectWidth, rectHeight);
    fill(0);
    rect(820, rectY, blackRectWidth, blackRectHeight);
    rect(890, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
   if (mouseX > 910 && mouseX < 910 + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
    if (mouseIsPressed) {
  	fill(255, 255, 0);
    rect(910, rectY, rectWidth, rectHeight);
    fill(0);
    rect(820, rectY, blackRectWidth, blackRectHeight);
    rect(890, rectY, blackRectWidth, blackRectHeight);
    snowflakeAnim();
    bSound.play(); 
  }
  else {
    fill(220);
    rect(910, rectY, rectWidth, rectHeight);
    fill(0);
    rect(820, rectY, blackRectWidth, blackRectHeight);
    rect(890, rectY, blackRectWidth, blackRectHeight);
  }
  }else {
    fill(255);
  }
  
  // text("mouse x: "+mouseX+" mouse y:"+mouseY, width/2,height-30);
}

function mousePressed() {
  cursor(HAND);
  
  
}

function mouseReleased() {
    cursor(ARROW);

  
}

function snowflakeAnim() {
  let t = frameCount / 60; 
 
  for (var i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); 
  }

  
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
}  
  

function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 8);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > 290) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
    fill(r,g,b);
  };

}