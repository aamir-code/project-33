const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];

var particle;
var divisionHeight=300;
var score = 0;
var count = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


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
  text("500",32,545);
  text("500",106,545);
  text("500",188,546);
  text("500",270,546);
  text("500",349,545);
  text("200",431,544);
  text("200",511,544);
  text("200",589,544);
  text("200",671,544);
  text("200",749,544);
  
  Engine.update(engine);

  if(gameState=="end") {
    fill("red");
    textSize(65);
    text("GAME OVER",280,365);

  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


   
    if(particle!=null) {
      particle.display();
      
  
      if(particle.body.position.y > 700) {
  
       if(particle.body.position.x < 400){
         score = score+500;
         particle = null;
         if(count >= 4)gameState = "end";
  
       
       
      
  
      }
      else if(particle.body.position.x > 400) {
        score = score+200;
        particle = null;
        if(count >= 4)gameState = "end";

      }
      count = count+1;
  }
  
  }
  
      
  
  }
function mousePressed()
{
  if(gameState!=="end") {
    particle = new Particle(mouseX,10,10,10);

  }
}

