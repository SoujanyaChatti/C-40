class Player {
  constructor(){
    this.name=null;
    this.rank=null;
    this.distance=0;
    this.index=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  readrank(){
    database.ref('Carrank').on("value",(data)=>{
      this.rank=data.val();
    });
  }
  static updaterank(x){
database.ref('/').update({
  Carrank:x
})
  }
  update(){
    var playerIndex = "players/player" +this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static playerdata(){
    var players=database.ref('players');
    players.on("value",(data)=>{
      playerdata=data.val();
    })
  }
  static deleteplayers(){
    var playersnode="players"
    database.ref(playersnode).set("");
}
}