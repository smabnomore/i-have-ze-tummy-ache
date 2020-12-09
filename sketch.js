var f1,m1;






function setup() {
  createCanvas(1200,800);
 f1=createSprite(600, 400, 50, 80);
f1.shapeColor="black";
 m1=createSprite(400, 200, 80, 30);
m1.shapeColor="black";



}




function draw() {
  background(255,255,255);  
  m1.x=World.mouseX;
  m1.y=World.mouseY;
if(m1.x-f1.x<f1.width/2+m1.width/2&&f1.x-m1.x<f1.width/2+m1.width/2&&m1.y-f1.y<f1.width/2+m1.width/2&&f1.y-m1.y
<f1.width/2+m1.width/2){
m1.shapeColor="darkblue";
f1.shapeColor="darkblue";
}

else{
m1.shapeColor="black";
f1.shapeColor="black";


}


  drawSprites();
}