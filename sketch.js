
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof1 = new Roof(400,150,500,30)

     bob1 = new Bob (210,350)
	 bob2 = new Bob (250,350)
	 bob3 = new Bob (310,350)
	 bob4 = new Bob (360,350)
	 bob5 = new Bob (410,350)
	 bob6 = new Bob (450,350)

	 rope1 = new Rope(210,350,200,150)
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  
  roof1.display();


  drawSprites();
 
}



