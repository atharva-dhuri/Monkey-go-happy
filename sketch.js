var monkey , monkey_running;
var banana ,bananaImage;
var ground, groundImage;
var invisibleGround;
var FoodGroup, obstacleGroup;
var score = 0;

var Play = 1;
var End = 0;
var gameState = Play;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
}



function setup() {
createCanvas(400, 400);
  
  ground = createSprite(200, 315, 400, 10);
  ground.scale = 2.4;

  invisibleGround = createSprite(200, 300, 400, 20);
  
  monkey = createSprite(80, 200, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  }
  



function draw() {
background("white");
  
if(gameState === Play) {
  ground.velocityX = -4;
    if(ground.x /2 <35) {
    ground = createSprite(200, 315, 400, 10);
  ground.scale = 2.4;
  }
  
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);
  
  if(keyDown("space")) { 
    monkey.velocityY = -13;
  }
}
  
  else if(gameState === End) {
    
  }
  
  if(frameCount %300 ===0) {
    spawnObstacle();
  }
  
  if(frameCount %80 ===0) {
    spawnBanana();
  }
  drawSprites();
}

function spawnObstacle() {
  var obstacleImage = loadImage("obstacle.png");
  var obstacle = createSprite(420, 290, 20, 20);
  obstacle.addImage("obstacle", obstacleImage); 
  obstacle.velocityX = -4;
  obstacle.scale = 0.1;
  obstacle.depth = ground.depth +1;
  obstacle.depth = invisibleGround.depth +1;
}

function spawnBanana() {
  
  var rand =Math.round(random(1, 3));
  switch(rand) {
    case 1: banana = createSprite(420, 70, 20, 20);
      break;
    case 2: banana = createSprite(420, 50, 20, 20);
      break;
    case 3: banana = createSprite(420, 90, 20, 20);
      break;
    default: break;
  }
  
 
  banana.addImage("banana", bananaImage);
  banana.velocityX = -4;
  banana.scale = 0.1;
  banana.lifetime = 290;
}