const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg();

}

function draw(){
    if(backgroundImg)
    background(backgroundImg)

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var rjson=await response.json();
 // write code slice the datetime
    var dt=rjson.datetime;
// add conditions to change the background images from sunrise to sunset
    var hour=dt.slice(11,13);
    if(hour>=04 && hour<=06){
      bg = "sunrise1.png"  ;
    }
    else if(hour>=6 && hour<=08){
        bg="sunrise2.png";
    }
    else if(hour>=23 && hour<=0){
        bg="sunset10.png";
    }
    else if(hour==0 && hour<=03){
        bg="sunset11.png";
    }
    else{
        bg='sunset12.png';
    }
 //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
    console.log(dt)
    

}
