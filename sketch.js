var Mar,Barco  ;
var Olas,Ship;  

function preload(){
Olas = loadImage("sea.png");
Ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}



function setup() {
  createCanvas(400,400);
  Mar = createSprite (200,200,400,400); 
  Mar.addImage(Olas) 
  Mar.scale=0.5
  Mar.velocityX= -3;

  Barco = createSprite(100,200,30,30);
  Barco.addAnimation("movimiento", Ship);
  Barco.scale=0.3;
}





function draw() {
  background("blue");
  if (Mar.x< 0) {
    Mar.x=Mar.width/8;
}
drawSprites();

}
