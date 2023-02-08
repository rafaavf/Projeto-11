var sea; 
var ship;
var ShipAnimation;

function preload(){
SeaImg = loadImage ("sea.png");
ShipAnimation = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite (200,200,200,200);
  sea.addImage(SeaImg);
  sea.scale = 0.3;

  ship = createSprite (200, 250, 100, 100);
  ship.addAnimation("movingship",ShipAnimation);
ship.scale = 0.2;
}

function draw() {
  background ("blue");
  sea.velocityX = -3;
    if (sea.x < 0){
      sea.x = sea.width/8;
    }
    drawSprites();
}