var start,startImg,rules,rulesImg,corona,coronaImg,coronaGroup,bgImg,Super,SuperImg,sanitizer,sanitizerImg,mask,maskImg,bg2;
var bgScreen2,sanitizerGroup,maskGroup
var Play = 1
var End = 0
var gameState;
var Life = 0
var Score = 0


function preload(){
startImg = loadImage("button.png")
rulesImg = loadImage("Rules.png")
coronaImg = loadImage("Carona.png")
bgImg = loadImage("GO cARONA GO.png")
SuperImg = loadImage("Human.png")
sanitizerImg = loadImage("Sanitizer.png")
bg2 = loadImage("bg2.jpg")
maskImg = loadImage("Mask.png")
}

function setup() {
  createCanvas(1500,900);

  start = createSprite(750, 300, 50, 50);
  start.addImage(startImg)
  start.scale = 2

  rules = createSprite(750,490,50,50)
  rules.addImage(rulesImg)
  rules.scale = 1.6

coronaGroup = new Group();
sanitizerGroup = new Group()
maskGroup = new Group();

Corona();
Sanitizer();
Mask();

}

function draw() {
  background(bgImg); 
  
  
  Corona();
  Sanitizer();
  Mask();

start.onMousePressed =function(){
 
  bgScreen2 = createSprite(750,450)
  bgScreen2.addImage(bg2)
  bgScreen2.scale = 1.3
  bgScreen2.velocityX = -3
  start.visible= false;
  //bgScreen2.x = bgScreen2.width/2

  /*if(bgScreen2.x >width *0.2){
    bgScreen2-=5
    //bgScreen2.x = bgScreen2.width/2
  }*/
 

}





 /* if(mousePressedOver(start)){
    gameState = Play
  }*/


 /* if(gameState === Play){
   // clear()
    bgScreen2 = createSprite(750,450)
    bgScreen2.addImage(bg2)
    bgScreen2.scale = 1.3
    bgScreen2.velocityX = -2
    if(bgScreen2)
    start.remove()
    rules.remove()
  Super = createSprite(750,700)
  Super.addImage(SuperImg)
  Super.scale = 0.8
  textSize(35)
  fill(234,32,123)
  text("Score = "+Score,750,50)
text("Life = "+Life,50,50)
  if(keyDown("left")){
    Super.x = Super.x-5
  }

  }*/



  drawSprites();
}

function Corona(){

if(frameCount % 50===0){
  corona = createSprite(random(-1,1300),0,50,50)
  corona.addImage(coronaImg)
  corona.scale = 0.2
  corona.velocityY = 8
coronaGroup.add(corona)
corona.depth = start.depth;
start.depth = start.depth + 1

/*bgScreen2.depth = corona.depth
corona.depth = corona.depth + 1;*/

}

}

function Sanitizer(){

  if(frameCount % 80===0){
    sanitizer = createSprite(random(1,1300),0,50,50)
    sanitizer.addImage(sanitizerImg)
    sanitizer.scale = 0.3
    sanitizer.velocityY = 8
    sanitizerGroup.add(sanitizer)
    sanitizer.depth = start.depth;
start.depth = start.depth + 1
  }
  
  
  }

  function Mask(){

    if(frameCount % 80===0){
      mask = createSprite(random(1,1300),0,50,50)
      mask.addImage(maskImg)
      mask.scale = 0.2
      mask.velocityY = 8
maskGroup.add(mask)
mask.depth = start.depth;
start.depth = start.depth + 1
    }
    
    }