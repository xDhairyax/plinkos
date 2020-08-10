const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var division;
var ar=[];
var ar1=[];
var ar2=[];
var ar3=[];
var plinko,plinko1,plinko2;

var particles=[];


function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(500,800);
 ground = new Ground(250,780,500,10);


 for(var i=100;i<500;i=i+100){
  division=new Division(i,600,10,350);
 ar.push(division);
  }

 for(var i=50;i<500;i=i+50){
   plinko=new Plinko(i,130);
   ar1.push(plinko);
 }

 for(var j=40;j<400;j=j+50){
  // plinko1=new Plinko(j,170);
   ar2.push(new Plinko(j,170));
 }

 for(var k=50;k<500;k=k+50){
   plinko2=new Plinko(k,210);
   ar3.push(plinko2);
 }

 


}

function draw() {
  Engine.update(engine);
  background(0);  
ground.display();

for(var i=0;i<4;i++){
  ar[i].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(50,350),10));
}
for(var i=0;i<particles.length;i++){

particles[i].display();
} 

 for(var i=0;i<10;i++){
   ar1[i].display();
   ar2[i].display();
   ar3[i].display();
 }
  drawSprites();
}