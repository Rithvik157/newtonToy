
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var bar;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	ball1 = new Balls(300,400);
	ball2 = new Balls(340,400);
	ball3 = new Balls(380,400);
	ball4 = new Balls(420,400);
	ball5 = new Balls(460,400);
	bar = new Rod(380,100);
	rope1 = new Rope(ball1.body,bar.body,-80,0);
	rope2 = new Rope(ball2.body,bar.body,-40,0);
    rope3 = new Rope(ball3.body,bar.body,0,0);
    rope4 = new Rope(ball4.body,bar.body,40,0);
    rope5 = new Rope(ball5.body,bar.body,80,0);
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bar.display();
  drawSprites();
 
}
function keyPressed() {

  if(keyCode === UP_ARROW){

    Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-19})
  }
}


