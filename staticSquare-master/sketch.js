const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    myengine = Engine.create();
    myworld = myengine.myworld;

    var ground_options ={
        isStatic: true
    }
   // var ball_options={
     //   restitution:1.0
    //}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(myworld,ground);
    //ball=Bodies.circle(200,100,20,ball_options);
    //World.add(myworld,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(myengine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
   // ellipseMode(RADIUS);
    //ellipse(ball.position.x,ball.position.y,20,20);
}