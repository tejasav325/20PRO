var tom , jerry,bg;
var cat1,cat2,cat4,mouse1,mouse2,mouse4;
function preload() {
    //load the images here
    bg= loadImage("images/garden.png");
    cat1= loadAnimation("images/cat1.png");
    cat2= loadAnimation("images/cat2.png","images/cat3.png");
    cat4= loadAnimation("images/cat4.png");
    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,700);
    tom.addAnimation("TOM",cat1);
    tom.scale=0.2
   
   jerry=createSprite(200,700)
   jerry.addAnimation("JERRY",mouse1);
   jerry.scale=0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<tom.width/2-jerry.width/2){
        tom.velocityX=0
        tom.addAnimation("TOMIMAGE",cat4);
        tom.x=300;
        tom.scale=0.2;
        tom.changeAnimation("TOMIMAGE")
        jerry.addAnimation("JERRYIMAGE",mouse4);
        jerry.scale=0.2
        jerry.changeAnimation("JERRYIMAGE")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===RIGHT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("cat",cat2)
    tom.changeAnimation("cat");
    jerry.addAnimation("mouse",mouse2);
    jerry.changeAnimation("mouse")
}

}
