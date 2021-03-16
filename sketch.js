const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dog2, dog1;
var dog;


function preload() {
    backgroundImg = loadImage("images/dogImg1.png");
}

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
}
    
function draw() {  
fedTime = database.ref('FeedTime');
fedTime.on("value", function(data));
  lastFed = data.val();
}
  drawSprites();
    Engine.update(engine);
    dog.display();

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg.png);
}

foodStock = database.ref('Food');
foodStock.on("value", readStock);

function readStock(data){
  foods = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



