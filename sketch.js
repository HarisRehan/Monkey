//MATTER.js implementation by Haris

//Declare variables for game objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var userEngine, userWorld, userBody;
var ground;

//define the intial environment of the software(before it is used) 
//by defining the declared variables with initial values and executed only once at the start of the program
function setup() {
  createCanvas(800,400);

  userEngine = Engine.create();
  userWorld  = userEngine.world;
 
  
  //construction of a body with rectangle shape
  var ball_options={
    'restitution': 1
  }
  userBody   = Bodies.circle(315,0,20,ball_options);
  World.add(userWorld,userBody);
  console.log(userBody);
  //construction of ground
  var ground_options={
    'isStatic': true
  }
  ground=Bodies.rectangle(400,350,400,30,ground_options);
  World.add(userWorld, ground);
  

}

//All changes, conditions, actions, commands to be executed, checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program till the program is stopped.
function draw() {
  background(300,155,455);  

  Engine.update(userEngine);
  
  text(mouseX+", " + mouseY,mouseX,mouseY);
  
  //display of body created using matter.js
  

  //display ground
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,30);

  //display user body
  ellipseMode(CENTER);
  ellipse(userBody.position.x,userBody.position.y,60,60);
  

  //draw a simple shape
}