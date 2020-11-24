
var gameObject1, gameObject2, gameObject3,gameObject4 , gameObject5 , gameObject6;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor="cyan";

  fixedRect = createSprite(500,200,60,70);
  fixedRect.shapeColor="orange";

  gameObject1 = createSprite(100,200,50,50);
  gameObject1.shapeColor = "purple";

  gameObject2 = createSprite(200,200,50,50);
  gameObject2.shapeColor = "yellow";

  gameObject3 = createSprite(300,200,50,50);
  gameObject3.shapeColor = "darkblue";

  gameObject4 = createSprite(400,200,50,50);
  gameObject4.shapeColor = "brown";

  gameObject5 = createSprite(600,50,50,50);
  gameObject5.shapeColor = "green";
  gameObject5.velocityY = 3;

  gameObject6 = createSprite(600,350,50,50);
  gameObject6.shapeColor = "white";
  gameObject6.velocityY = -3;
}

function draw() {
  background(0);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  // m-f = 5+3 or f-m = 3+5
if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor ="red";
}
else{
  movingRect.shapeColor = "cyan";
  gameObject1.shapeColor = "purple";
}
if(isTouching(movingRect,gameObject2)){
  movingRect.shapeColor = "red";
  gameObject2.shapeColor ="red";
}
else{
  movingRect.shapeColor = "cyan";
  gameObject2.shapeColor = "yellow";
}

if(isTouching(movingRect,gameObject3)){
  movingRect.shapeColor = "red";
  gameObject3.shapeColor ="red";
}
else{
  movingRect.shapeColor = "cyan";
  gameObject3.shapeColor = "darkblue";
}

if(isTouching(movingRect,gameObject4)){
  movingRect.shapeColor = "red";
  gameObject4.shapeColor ="red";
}
else{
  movingRect.shapeColor = "cyan";
  gameObject4.shapeColor = "brown";
}
 bounceOff(gameObject5 , gameObject6);

drawSprites();
  
}

function isTouching(object1,object2){
if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
   object2.x - object1.x < object1.width/2 + object2.width/2 &&
   object1.y - object2.y < object2.height/2 + object1.height/2 &&
   object2.y - object1.y < object2.height/2 + object1.height/2 ){
   return true;
 }

 else{
  return false;
 }
}

function bounceOff(object1 , object2) {
  if(object1.x - object2.x < object1.width/2 + object2.width/2 && 
    object2.x - object1.x < object2.width/2 + object1.width/2)
    {
object1.velocityX = object1.velocityX * (-1);
object2.velocityX = object2.velocityX * (-1);
    }

    if(object1.y - object2.y < object1.height/2 + object2.height/2 && 
      object2.y - object1.y < object2.height/2 + object1.height/2)
      {
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
      }

}
