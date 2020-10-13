
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, dustbinPart1, dustbinPart2, dustbinPart3;

function preload()
{
	
}

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
paper1 = new Paper(100,630,50);



	
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  drawSprites();
 
}



