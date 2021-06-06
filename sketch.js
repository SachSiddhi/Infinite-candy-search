const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var bg,chocImg,lollyImg,gorImg;
var ground;

function preload(){
  bg = loadImage("jungle bg.png");
  chocImg = loadImage("chocolate.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
}
function draw() {
  background(bg); 
 
  
}


