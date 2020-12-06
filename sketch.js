var car,wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50, 50, 30, 30);
  car.shapeColor = "white"
  wall=createSprite(1200, 50, 30, height/2)
  wall.shapeColor =color(80, 80, 80)
}

function draw() {
  background(0); 
  car.velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
     car.velocityX=0;
     var deformation=0.5 * weight * speed * speed/22509;
     if(deformation>180)
     {
         car.shapeColor=color("red")
     }

     if(deformation<180 && deformation>100)
     {
         car.shapeColor=color("green")
     }
     
     if(deformation<180)
     {
         car.shapeColor=color("blue")
     }


  }
  drawSprites();
}
