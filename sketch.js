const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, ball1;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    
    ground = Bodies.rectangle(750,700,1500,20,ground_options);
    World.add(world,ground);

   ball1= new ball(100,200,30);

   sling1=new slingshot(ball1.body,{x:600,y:100});

   box1=new box(730,100);
   box2=new box(730,100);
   box3=new box(730,100);
   box4=new box(730,100);
   box5=new box(730,100);
   box6=new box(730,100);
   box7=new box(730,100);
   box8=new box(730,100);
   box9=new box(730,100);
   box10=new box(730,100);

   box11=new box(790,100);
   box12=new box(790,100);
   box13=new box(790,100);
   box14=new box(790,100);
   box15=new box(790,100);
   box16=new box(790,100);
   box17=new box(790,100);
   box18=new box(790,100);
   box19=new box(790,100);
   box20=new box(790,100);


    console.log(ground);
}

function draw(){
    background(255);
    Engine.update(engine);
    rectMode(CENTER);
    fill("green");
    rect(ground.position.x,ground.position.y,1500,20);
    ball1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

   sling1.display();


    
    
}

function mouseDragged(){
   Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}