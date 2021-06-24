const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var canvas,tower;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    tower = new Tower(150,350,160,310);

    
}

function draw(){
    background(189);
    Engine.update(engine);
    tower.display();
    
}