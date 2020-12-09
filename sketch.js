
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var tree;
var mango1, mango2, mango3, mango4, mango5, mango6;
var boy;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,480,1200,20);
	tree = new Tree(800,150,350,350);
	mango1 = new Mango(900,200,40);
	mango2 = new Mango(950,200,40);
	mango3 = new Mango(980,230,40);
	mango4 = new Mango(930,240,40);
	mango5 = new Mango(960,260,40);
	mango6 = new Mango(1070,230,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(80, 152, 252);

  image(boy,250,200,300,300);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  drawSprites();
 
} 

