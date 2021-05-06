
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  ground=createSprite(470,350,900,15);
ground.velocityX=-4;
  ground.x=ground.width/2
  
  monkey=createSprite(40,310,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  foodGroup=new Group();
  obstacleGroup=new Group();
   score=0
  var st=0;
}

function spwanfood() {
  
  if(frameCount%80===0){
    
   banana=createSprite(600,250,40,10);
    banana.y=random(120,200);
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.lifetime=300; 
    foodGroup.add(banana)
    banana.scale=0.1
  }
  
}


function spwanobstacle(){
  
  if(frameCount%300===0){
    
    obstacle=createSprite(800,320,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
    
  }
  
}

function draw() {
  background("white")
  if(keyDown("space")){
    monkey.velocityY= -12; 
  }
  
  if(ground.x<0){
    
    ground.x=ground.width/2
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground)
  
  textSize(20);
  fill("black");
  text("score"+score,500,50);
  if(obstacleGroup.isTouching(monkey)){
    
    ground.velocityX=0;
    monkey.velocity=0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
  
  textSize(20);
  fill("black");
  st=Math.ceil(frameCount/frameRate())
  text("svrvival Time"+st,100,50);
  
  
  spwanfood();
  
  spwanobstacle()  
  
  drawSprites();
  
   
  
}






