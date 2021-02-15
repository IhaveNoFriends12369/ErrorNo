


//1. PC
var play1,play1Dmg,play1Idle
//2. sound eff
var stepVeg
//3. View


function preload()
{
play1Dmg = loadAnimation("pics/Oooh0.png","pics/Oooh1.png");
play1Idle = loadImage("pics/Oooh0.png");
stepVeg = loadSound("sound1/gravel1.mp3");



}

function setup() {
	createCanvas(800, 700);


	 play1=createSprite(200,200,10,10);
	
	 
	 play1.addImage("Idle",play1Idle);

	  



  
}


function draw() {
  rectMode(CENTER);
  background(320);

if(keyDown("d")){
	play1.x = play1.x + 2;
 stepVeg.play();
}





  
  drawSprites();
 
}



