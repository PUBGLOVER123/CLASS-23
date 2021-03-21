const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box (200,200,20,20)
    box2 = new Box (100,100,20,20)
    ground = new Ground (200,390,400,20)
    box3 = new Box (200,100,20,20)
    
    bird1 = new Bird (100,200)
    pig1 = new Pig (200,100)
    log1 = new Log (200,300,80,PI/4)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display ()
    box2.display ()
    box3.display ()
    bird1.display ()
    pig1.display ()
    log1.display ()
    ground.display ()
    
}