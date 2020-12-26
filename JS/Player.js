class Player{
    constructor(){

    }

    getCount(){
        var countRef = database.ref("playerCount");
        countRef.on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    update(name){
        var playerIndex = "player" + playerCount;
            //player1 = player + 1
        database.ref(playerIndex).set({
            name: name
        })
    }
}