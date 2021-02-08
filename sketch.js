var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


particles= new Particle(100,300,10);

plinkos1= new Plinko(50,200,10);
plinkos2= new Plinko(100,200,10);
plinkos3= new Plinko(150,200,10);
plinkos4= new Plinko(200,200,10);

divisions= new Divisions(100,600,5,400);
divisions1= new Divisions(200,600,5,400);
divisions2= new Divisions(300,600,5,400);
divisions3= new Divisions(400,600,5,400);
divisions4= new Divisions(500,600,5,400);
divisions5= new Divisions(600,600,5,400);
divisions6= new Divisions(700,600,5,400);


plinkos.push(plinkos4);
plinkos.push(plinkos3);
plinkos.push(plinkos2);
plinkos.push(plinkos1);
   

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   plinkos1.display();
   plinkos2.display();
   plinkos3.display();
   plinkos4.display();
   particles.display();
   divisions.display();
   divisions1.display();
   divisions2.display();
   divisions3.display();
   divisions4.display();
   divisions5.display();
   divisions6.display();
}