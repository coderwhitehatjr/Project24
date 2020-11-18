
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3
var paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = createSprite(630,690,90,10)
	bin2 = createSprite(595,690,10,75)
	bin3 = createSprite(680,690,10,75)
	
	
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper = ellipse(200,600, 55, 55);
  keyPressed();
  drawSprites();
}
function keyPressed(){
if(keyCode=== UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}


}

