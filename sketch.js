const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;
var umbrella,umbrella1;
var maxDrops = 100;
var drops = []
var thundercreatedFrame = 0,thunder;

function preload()
{
    thunder0 = loadImage("1.png");
    thunder1 = loadImage("2.png");
    thunder2 = loadImage("3.png");
    thunder3 = loadImage("4.png");
   }

function setup()
{
   engine = Engine.create();
   world = engine.world;

   createCanvas(500,500);  
   umbrella = new Umbrella(100,100,30,30);

   if(frameCount%10===0)
   {
      for(var i=0; i<maxDrops; i++)
      {
         drops.push(new Drop(random(0,400), random(0,400)));
      }
   }
}

function draw(){
   Engine.update(engine);
   background(0);           

   rand = Math.round(random(1,4));
   if(frameCount%120===0){
      thundercreatedFrame=frameCount;
      thunder = createSprite(random(10,370),random(10,30),10,10);
      

      switch(rand){
         case 1: thunder.addImage(thunder0);
                 break;
         case 2: thunder.addImage(thunder1);
                 break;
         case 3: thunder.addImage(thunder2);
                 break;
         case 4: thunder.addImage(thunder3);
                 break;
         default: break;
     }
   thunder.scale = random(0.3,0.6);
   }   

if(thundercreatedFrame + 10 === frameCount && thunder)
{
   thunder.visible = false;
}

umbrella.display();

for(var i=0; i<maxDrops; i++)
{
   drops[i].display();
   drops[i].update();
}
   drawSprites();
}