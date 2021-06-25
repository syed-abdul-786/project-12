var bomb,bombImg
var coin,coinImg
var energyDrink, energyDrinkImg
var Path,pathImg
var power,powerImg
var runner,runner1Img,runner2Img
function preload(){
  bombImg=loadImage("bomb.png");
  coinImg=loadImage("coin.png");
  energyDrinkImg=loadImage("energyDrink.png");
  powerImg=loadImage("power.png");
  pathImg=loadImage("path.png");
  runnerImg=loadImage("Runner-1.png","runner2Img");
  
  
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  runner = createSprite(10,10)
  runner.addAnimation("running");
  

}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  
drawSprite();

} 


