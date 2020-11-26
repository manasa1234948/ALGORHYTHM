var mrect,frect,rect1,rect2;






function setup() {
  createCanvas(800,400);
  mrect=createSprite(400, 200, 50, 50);
  mrect.shapeColor='green';
  
  frect=createSprite(150,100,50,20);
  frect.shapeColor='green';

  rect1 = createSprite(250,100,50,20);
  rect1.shapeColor='yellow';
  rect2 = createSprite(250,300,50,20);
  rect2.shapeColor='yellow';

  rect1.velocityY=+2;
  rect2.velocityY=-2;
}


function draw() {
  background(255,255,255);  
  drawSprites();
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;


  if(mrect.x-frect.x<frect.width/2+mrect.width/2 && frect.x-mrect.x<frect.width/2&mrect.width/2
    && mrect.y-frect.y<frect.width/2+mrect.width/2
    && frect.y-mrect.y<frect.width/2+frect.width/2){
    mrect.shapeColor='pink';
    frect.shapeColor='orange';
  }
  else{
    mrect.shapeColor='green';
    frect.shapeColor='green';
  }
  if(rect1.y-rect2.y<rect2.width/2+rect1.width/2 && rect2.y-rect1.y<rect2.width/2&rect1.width/2
   ){
    rect1.velocityY= rect1.velocityY *-1;
    rect2.velocityY = rect2.velocityY * -1;

    
   
  }

}