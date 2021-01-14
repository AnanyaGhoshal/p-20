var garden, gardenImg;
var tom, tomwalking, tomstanding, tomresting;
var jerry, jerryewalking, jerrystanding, jerryresting;

function preload() {
    
  tomresting = loadAnimation("tomOne.png");
  tomwalking = loadAnimation("tomTwo.png","tomThree.png");
  tomstanding = loadAnimation("tomFour.png");
  gardenImg = loadImage("garden.png");

  jerryresting = loadAnimation("jerryOne.png");
  jerryewalking = loadAnimation("jerryTwo.png","jerryThree.png");
  jerrystanding = loadAnimation("jerryFour.png")

}

function setup(){

    createCanvas(1000,800);
   
    
    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenImg);
    garden.scale = 1.3;
    
    tom = createSprite(850,400,10,10);
    tom.addAnimation("resting",tomresting);
    tom.addAnimation("walking",tomwalking);
    tom.addAnimation("standing",tomstanding);
    

    //tom.scale = 0.3;

    jerry = createSprite(150,600,10,10);
    jerry.addAnimation("resting",jerryresting);
    jerry.addAnimation("walking",jerryewalking);
    jerry.addAnimation("standing",jerrystanding);
    

    //jerry.scale = 0.3;

}

function draw() {

    //background("blue");
  
  
  var w = tom.width/2+jerry.width/2;
  
  var h = tom.height/2+jerry.height/2;

  if(tom.x-jerry.x<w && jerry.x-tom.x<w && tom.y-jerry.y<h && jerry.y-tom.y<h){
    tom.changeAnimation("standing",tomstanding);
    jerry.changeAnimation("standing",jerrystanding);
    tom.velocityX = 0;
    tom.velocityY = 0;

  }else{
    tom.changeAnimation("walking",tomwalking);
    jerry.changeAnimation("walking",jerryewalking);
    //tom.velocityX = 2;
    //tom.velocityY = -2;
  }

  
  

  keyPressed();
  drawSprites();
}


function keyPressed(){

  if(keyDown("Left_Arrow")){

    tom.x = tom.x-5;
    tom.changeAnimation("walking",tomwalking);
    jerry.changeAnimation("walking",jerryewalking);
    tom.velocityX = -1;

}else if(keyDown("Right_Arrow")){

  tom.x = tom.x+5;

  tom.changeAnimation("walking",tomwalking);
  jerry.changeAnimation("walking",jerryewalking);
  tom.velocityX = 1;


}if(keyDown("Up_Arrow")){

    tom.y = tom.y-5;

    tom.changeAnimation("walking",tomwalking);
    jerry.changeAnimation("walking",jerryewalking);
    tom.velocityY = -1;


}else if(keyDown("Down_Arrow")){

    tom.y = tom.y+5;

    tom.changeAnimation("walking",tomwalking);
    jerry.changeAnimation("walking",jerryewalking);
    tom.velocityY = 1;


}



}
