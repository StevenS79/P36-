//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  background(46, 139, 87);
}


function draw() {  

if (keyWentDown(UP_ARROW)){
  writestock(9foodS);
  DOMStringList.addImage(dogHappy);
}

  drawSprites();
  //add styles here

  text ("Press Up Arrow Key To Feed Drago Milk!");
  textSize(20);


}

function addFood(){
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  })
}

function readStock(data){
  foodS=data.val();

}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
