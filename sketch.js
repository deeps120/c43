
function preload(){
  groundImage= loadImage("ground.jpg");
}
function setup() {
canvas= createCanvas(displayWidth-30,displayHeight-30);
  ground= createSprite(displayWidth/2,displayHeight/2,displayWidth*3,displayHeight*4);
  ground.addImage("ground",groundImage);
  ground.scale=5;
  player= createSprite(displayWidth/2,displayHeight/2);
}

function draw() {
  background(0);
  if(keyIsDown(LEFT_ARROW)){
    player.velocityX=-3;
  }
  camera.position.x=player.x;
  drawSprites();
}

