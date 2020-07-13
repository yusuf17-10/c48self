var database,timetable,homepage;
var form,user;
var userCount=0;
var gameState=0;
var writeProgress;

var flag2=0;
var allUsers=[],flag=0;

function setup() {
  createCanvas(1500,800);
  database=firebase.database();

  game= new Game();

  game.start();
}

function draw() {
   clear();
   

   if(gameState===1){
      game.signup();
   }

   if(gameState===2){
      game.home();
      if(flag2===0){
         flag2=1;
         getTime();
      }
      
   }

   async function getTime(){

      var response =  await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
      var responseJSON=await response.json();
      var hour = responseJSON.datetime.slice(11,13);
      console.log(hour);
  
      if(hour>=17 && hour<=21){
           alert("study time");
     }

      }
}