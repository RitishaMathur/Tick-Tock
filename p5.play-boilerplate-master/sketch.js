var hr,min,sec;


function setup() {
  createCanvas(400,400);
 
  angleMode(DEGREES)
}

function draw() {
  background(0,0,0);
  fill("white")
  strokeWeight(5)
  textSize(15)
  text(hr+":"+min+":"+sec,30,50)
  hr=hour();
  min=minute();
  sec=second();
  translate(200,200)
  rotate(-90)
  secAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)

  push()
  rotate(minAngle)
  strokeWeight(7)
  stroke("green")
  line(0,0,100,0)
  pop()
 
 push()
  rotate(secAngle)
  strokeWeight(7)
  stroke("red")
  line(0,0,150,0)
  pop()
 
  push()
  rotate(hrAngle)
  strokeWeight(7)
  stroke("blue")
  line(0,0,50,0)
  pop()

  strokeWeight(6)
  stroke("red")
  noFill()
  arc(0,0,350,350,0,secAngle)


 strokeWeight(6)
 stroke("green")
 noFill()
 arc(0,0,330,330,0,minAngle)


 strokeWeight(6)
 stroke("blue")
 noFill()
 arc(0,0,310,310,0,hrAngle)


  drawSprites();
}