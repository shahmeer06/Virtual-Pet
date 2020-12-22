//Create variables here

var dogImg, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  
  dogImg = loadImage('Dog.png')
  happyDog = loadImage('happyDog.png')


}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250, 250, 10, 10)
  dog.addImage(dogImg)
  

  database = firebase.database()

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  //add styles here
  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
  }

}

function readStock(data){
  foodS = data.val()
}

function writeStock(x){

  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



