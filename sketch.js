var canvas, database;
var form,game,player;
var gameState=0;
var playerCount;


function setup(){
  database = firebase.database();
  console.log(database);
  canvas=createCanvas(500,500);
game=new Game();
 game.start();
 game.getState();
 
}

function draw(){
  background("white");
  
    drawSprites();
  
}



