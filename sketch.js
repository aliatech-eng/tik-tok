const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,wold;
var hour,minute,seconds;
var hr = hour();
var mn = minute();
var sc = seconds();
 
function setup() {
  createCanvas(800,400);
  noStroke();
}

function draw() {
  background("black");
  
  c = map(mouseX, 0, width, 0, 175);

d = map(mouseX, 0, width, 40, 175);
fill(255,c,0);
ellipse(width/2,height/2,d,d);

scAngle = map(sc,0,60,0,360);

arc (50,55,50,50,0, HALF_PI);
noFill();
arc (50,55,60,60,HALF_PI,PI);
arc (50,55,70,70,PI,PI+QUARTER_PI);
arc (50,55,80,80,PI+QUARTER_PI,TWO_PI);

push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7)
line(0,0,100,0);
pop();
  drawSprites();
}


function hour(){
 h = hour();
text('Current hour:\n'+ h,5,50);
}

function minute(){
m = minute();
text('Current hour:\n'+ m, 5,50);
}

function second(){
s = second();
text('Current hour:\n'+s, 5,50);
}