class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset=createButton('Reset');
    this.greeting = createElement('h3');
    
  }
hide(){
  this.input.hide();
  this.button.hide();
  this.greeting.hide();

}
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2, 10);
    
  
    
    this.input.position(displayWidth/2,displayHeight/3);
    this.button.position(displayWidth/2+70,displayHeight/3+30);
  
    this.reset.position(displayWidth-200,20);
    
    this.button.mousePressed(()=>{
     this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update()
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2,displayHeight/3);
    });
    this.reset.mousePressed(()=>{
   player.updateCount(0);
  Player.updaterank(0);
   game.update(0);
  Player.deleteplayers();
      })
  
      
  }
}