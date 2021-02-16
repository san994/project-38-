
var START = 0;
var PLAY = 1;

 var gameState = START;

var spaceShip;
var ufo,astroides,bullet;
var sun;

var score = 0;
var rules = ""

function setup() {
  createCanvas(400,600);

  spaceShip = createSprite(200, 600, 30, 30);
  spaceShip.shapeColor = ("lightBlue")

  sun = createSprite(200,1000,700,500);
  sun.shapeColor = ("yellow");

  astroideGroup = new Group();
  bulletGroup = new Group();
  ufoGroup = new Group();

}

function draw() {
  background(0); 
  
 if(gameState === START){

  
  textSize(20)
  text(" 1.press space to fire lassers " + rules,10,100 )

  textSize(20)
  text("2.if you touch the green block or brown  " + rules,10,150 )

  textSize(20)
  text("you will die  " + rules,25,170 )

  textSize(20)
  text("3.if you score 10 you get an upgrade " + rules,10,200 )

  textSize(20)
  text("4.you cannnot break green block with leaser " + rules,10,250 )

  textSize(20)  
  text("untill you get an upgrade " + rules,25,270 )

  textSize(20)  
  text("5.use mouse to move the ship " + rules,10,300 )

  textSize(20)  
  fill("red");
  text("press S to start the game => " + rules,25,350 )

  textSize(24)
  fill("lightBlue")
  text(" RULES READ BEFORE PLAYING " + rules,10,50 )


  if(keyDown("s")){

  gameState = PLAY;

  }

 }else if(gameState === PLAY){
  
  if(keyDown(UP_ARROW)){

 spaceShip.velocityY = -2

 }

 if(keyDown(DOWN_ARROW)){

  spaceShip.velocityY = +2
 
  }
if(keyDown(RIGHT_ARROW)){

  spaceShip.velocityX = +2
   
  }

  if(keyDown(LEFT_ARROW)){

  spaceShip.velocityX = -2
     
  }

  SpawnBullets();
  SpawnAstroides();
  SpawnUfo();

  if(ufoGroup.isTouching(spaceShip)){

    spaceShip.destroy();
    ufoGroup.destroyEach();

  }

  if(astroideGroup.isTouching(spaceShip)){

    astroideGroup.destroyEach();
    spaceShip.destroy();
  
  }

  if(astroideGroup.isTouching(bulletGroup)){

    astroideGroup.destroyEach();
    bulletGroup.destroyEach();

    score = score+1;

  }

  
  if(score >= 10){

    spaceShip.shapeColor = ("blue");

    if(ufoGroup.isTouching(bulletGroup)){

      ufoGroup.destroyEach();
      bulletGroup.destroyEach();
    
      score = score+2;
    
    }

  }

  camera.position.x = spaceShip.x;
  camera.position.y = spaceShip.y;

  
  drawSprites();

  textSize(20);
  fill("red");
  text("kILLS: " + score,spaceShip.x-20,spaceShip.y);

  

}

}

function SpawnAstroides(){

if(frameCount %60===0){

 var astroides = createSprite(200,spaceShip.y-300,20,20);
 astroides.shapeColor = ("brown");

 astroides.velocityY = 4
 astroides.x = Math.round(random(30,350));
 astroides.lifeTime = 150;
 astroideGroup.add(astroides);

}

}

function SpawnBullets(){

if(keyDown("space")){
   var bullet = createSprite(spaceShip.x,spaceShip.y,10,50)
   bullet.shapeColor = ("red");

   bullet.velocityY = -8
   bullet.lifeTime = 150;
   bulletGroup.add(bullet);
  
}
}

function SpawnUfo(){

  if(frameCount %80===0){
  
   var ufo = createSprite(200,spaceShip.y-300,30,30)
   ufo.shapeColor = ("green");
  
   ufo.velocityY = 4
   ufo.x = Math.round(random(30,350))
   ufo.lifeTime = 150;
   ufoGroup.add(ufo);
  
  }


}



