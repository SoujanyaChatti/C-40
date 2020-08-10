class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
play(){
  form.hide();
  textSize(35);
  text("The Game Has Started",20,100);
  Player.playerdata();
  player.readrank();
  if(playerdata!=undefined){
  var index=0;
  background("#c68767");
  image(track,0,-displayHeight*5,displayWidth,displayHeight*6);
  var x=180;
  var y;
  for(var plr in playerdata){
  index=index+1;
  x=x+230;
  y=displayHeight-playerdata[plr].distance;
  cars[index-1].x=x;
  cars[index-1].y=y;
  if(index==player.index){
    stroke(20);
    fill("blue");
    ellipse(x,y,70,70);
  cars[index-1].shapeColor="blue";
  camera.position.x=displayWidth/2;
  camera.position.y=cars[index-1].y;
  }
  }
    
  }
  if(keyIsDown(UP_ARROW)&&player.index!=null){
    player.distance+=60;
    player.update();
  }
  if(player.distance>5500){
    gameState=2;

    player.rank=player.rank+1;
    Player.updaterank(player.rank);
    fill("black");
    textSize(30);
    text("Your rank is : "+player.rank,displayWidth-750,y-60);
    
  }
  drawSprites();
}
end(){
  console.log("Game ended");
  console.log(player.rank);
}
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
    car1=createSprite(200,400);
    car2=createSprite(400,400);
    car3=createSprite(600,400);
    car4=createSprite(620,400);
    car1.addImage(im1)
    car2.addImage(im2)
    car3.addImage(im3)
    car4.addImage(im4)
    cars=[car1,car2,car3,car4];
  }
  
}
