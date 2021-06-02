
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;
var world;


function setup() {
	//1600,700
	createCanvas(1250, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new groundClass(width/2,570,width,20);
	//width-400
	dustbinObj=new dustbin(width-200,550);
	//paperObject=new paper(300,300,100,100);
	paperObject=new paper(80,494,120,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:900,y:-900})
	}
}