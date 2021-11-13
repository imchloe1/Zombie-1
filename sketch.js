const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world
var ground, bridge
var leftWall,rightWall
var jointPoint
var jointLink

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Base(0,height-10,width*2,20,"orange",true)
  leftWall = new Base(300,height/2+50,600,100,"blue",true)
  rightWall = new Base(width-300,height/2+50,600,100,"pink",true)


}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show()
  leftWall.show(
  rigthWall.show()
  )

}
