var  bg
var sleep
var brush
var gym1,gym2,gym11,gym12
var eat
var drink,drink2
var move,move1
var bath1,bath2

function setup() {
  createCanvas(800,400);

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(255,255,255);
  
  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("Bathing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.veleocityX= 0;
    astronaut.veleocityY= 0;
  }
  
  drawSprites();
}
function preload() {
bg=loadImage("iss.png");
sleep=loadAnimation("sleep.png");
brush=loadImage("brush.png");
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
eat1=loadAnimation("eat1.png","eat2.png");
drink1=loadAnimation("drink1.png","drink2.png");
move=loadAnimation("move.png","move1.png");
bath1=loadAnimation("bath1.png","bath2.png");
}
