//import { start } from 'repl';


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var session = require('express-session');
app.use(session({secret: 'game13'}));
var mongoose = require('mongoose');


app.use(express.static(path.join(__dirname, '/game13/dist')));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/my_first_db')
mongoose.Promise = global.Promise;

var PlayerSchema = new mongoose.Schema({
    name: {type: String, require: true}},
    {timestamps:true}
);

mongoose.model('Player', PlayerSchema);
var Player = mongoose.model('Player')


class Game {
    constructor(){
        this.players = []
    }
}
class Deck{
    constructor(){
        this.names = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
        this.suits = ['\u2665','\u2666','\u2660','\u2663'];
        this.deck = [];
        this.savedeck = []
        
        this.makedeck()
       
        // this.savedeck = this.deck;
        this.shuffle()
        
    }

    makedeck(){
        for(let i = 0; i<this.names.length; i++){
            
            for(let x = 0; x<this.suits.length; x++){
                var card = [];
                card.push(this.names[i]);
                card.push(this.suits[x]);
                this.deck.push(card);
                //this.savedeck.push(card);
            }
        }
    }
    
    shuffle(deck){
         var m = this.deck.length, t, i;

          // While there remain elements to shuffle…
          while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
          }

          return deck;
        }

    reset(Game){
        this.deck = [];
        this.makedeck();
		this.shuffle(this.deck)

        for(var i = 0; i < Game.players.length;i++){
            Game.players[i].hand = [];
        }
        console.log(this.deck.length, this.deck)
        
        return this;
        // console.log("oooooooooooooooooooooo")
        // console.log("this is the saved deck before", this.savedeck)
        // console.log("this is the leftover deck",this.deck)
    
        // this.deck = this.savedeck;
        // console.log("this is the reset deck",this.deck)
        // console.log("this is the reset saved deck",this.savedeck)
        // console.log("oooooooooooooooooooooo")
       // return this;
    }
    

    dealcard(Game){

        for (var x = 0; x < Game.players.length; x++){

           for (var i = 0; i < 2; i++) {
                //console.log("in the dealcard fuction", Game.players[x].hand)
            Game.players[x].hand.push(this.deck.pop());
            //for testing purposes
            // Game.players[x].hand.push(["Ace", '\u2665'])
            // Game.players[x].hand.push(["Ace", '\u2666'])
            // Game.players[x].hand.push([8, '\u2666'])
            }
            Game.players[x].totalValue()
        }
        return this;
    }

    passcard(Game, idx){
        
        Game.players[idx].hand.push(this.deck.pop())
        Game.players[idx].totalValue()
    }
    
} 

class Playeruser{
    constructor(name, id){
        this.name = name;
        this.hand = [];
        this.socketid = id;
        this.total = 0;
        this.addtolist();
    }
    
    addtolist(){
        game.players.push(this)
    }	

    
    totalValue(){ //this is for counting total value for 21
        this.total = 0;
        var Ace = 0; 
        for(var i = 0; i < this.hand.length; i++){
            if(this.hand[i][0] == "J" || this.hand[i][0] == "Q" || this.hand[i][0] == "K"){
                this.total += 10;
            }
            else if(this.hand[i][0] == "A"){
                this.total += 11;
                Ace += 1;
            }
            else{
                this.total += this.hand[i][0];
            }
        }
        if (Ace > 0 && this.total > 21){
            for(var i = 0; i < Ace; i++){
                if(this.total > 21){
                    this.total -= 10;
                }
                
            }
            

        }
        // else if (Ace == true && (this.total += 11 > 21) ){
        //     this.total -= 10;
        // }
    }


    pickcards(num){ //this is for 13 to pick a card or cards to play
        return this.hand.splice(num, 1);

    }
}

var game = null;
var newdeck = null;


function newgame(){
    newdeck = new Deck()
    game = new Game()  
   
    
    
}

function cleargame(game){
    for(var i = 0; i < game.players.length; i++){
        
        
        game.players[i].hand = []
        //console.log(game.players[i].hand)
    }
    newdeck.reset(game)
    // console.log("in server clear game")
    // console.log(newdeck.deck)

}

function clearPlayersHand(game){
    for(var i = 0; i < game.players.length; i++){
        game.players[i].hand = [];
    }
    if(newdeck.deck.length > (game.players.length * 2)){
       newdeck.dealcard(game);
    }
    else{
        return false
    }
    

}

 newgame()

 

function startgame(){
    newdeck.dealcard(game)
    
}


//registering or logging in player
app.post('/player', function(req, res){
    console.log('POST DATA');
    Player.findOne({name: req.body.name}, function(err, player){
        // console.log("[[[[[[[[[[[[[[[[[[[[[")
        // console.log(req.body)
        // console.log("]]]]]]]]]]]]]]]]")
        if(player){
            console.log("player exists")
            
            res.json({message:'Success', data: player})

        }
        else{
            console.log("new player")
            var player = new Player();
            //console.log("12312412312", req.body)
            player.name = req.body.name;
            
            player.save(function(err){
                if (err) {
                    res.json({message:'Error', error: player.errors})
                }
                else {
                    res.json({message:'Success', data: player})
                }
            })
        }

        
       // console.log(req.body)
        if(game.players.length == 0){
            //console.log("++++++++++++++++++")
            console.log("Player 1 is:",player.name)
            const player1 = new Playeruser(player.name, req.body.socketid)
            //console.log("[[[[[[[[[[[[[")
            //console.log(player1)
            //console.log("[[[[[[[[[[[[[")
            
        }
        else if(game.players.length == 1){
            //console.log("=====================")
            console.log("Player 2 is:",player.name)
            const player2 = new Playeruser(player.name, req.body.socketid)
            
        }
        else if(game.players.length == 2){
            //console.log("=====================")
            console.log("Player 3 is:",player.name)
            const player3 = new Playeruser(player.name,req.body.socketid)
            
        }
        else if(game.players.length == 3){
            //console.log("=====================")
            console.log("Player 4 is:",player.name)
            const player4 = new Playeruser(player.name, req.body.socketid)
            
        }
        
    })
    
   
})

// app.get('/startgame', function(req, res){
//     startgame();
//     res.json({message:'Success', data: game.players})
//     for(var i = 0; i < game.players.length; i++){
//         console.log("============")
//         console.log(game.players[i].name)
//         console.log(game.players[i].hand)
//     }

// })



// // const player1 = new Player("Thinh")
// // const player2 = new Player("Ian")
// // const player3 = new Player("Johnnie")
// // const player4 = new Player("Vince")


// //console.log(player4.hand)


app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./game13/dist/index.html"))
});




let port = 8000
let server = app.listen(port, function() {
    console.log("Now listening on port: ",port);
})



let io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {

    socket.emit('initial', {socketid: socket.id});
    console.log("Socket has connected at ", socket.id);

    socket.broadcast.emit('other:connection', {message:'hello friends!'});

    socket.on('message', function(data){
       console.log(data)
    })

    
    socket.on("disconnect", function(){
        console.log("a player has discconected")
    })

    socket.on("broadcasting", function(){
        // console.log("here in server broadcasting")
        // console.log(game.players)
        startgame();
        io.emit('broadcast', {allplayers: game.players})
    })

    socket.on("clear", function(){
        cleargame(game);
        io.emit("current_round", {current_turn: 0})
    })

    socket.on("addcard", function(data){
        //console.log("in addcard socket addcard")
        //console.log(data), data is only the player's index 
        newdeck.passcard(game, data)
        io.emit("broadcast", {allplayers: game.players})
    })

    socket.on("player_stay", function(data){
        console.log("current turn is:",data.current_turn);
        newturn = data.current_turn + 1;
        io.emit("current_round", {current_turn: newturn})
    })

    socket.on("dealcards", function(){
        if(clearPlayersHand(game) != false){ 
            io.emit("broadcast", {allplayers: game.players})
        }
        else if(clearPlayersHand(game) == false){
            io.emit("broadcast", {allplayers: "No More Cards"})
        }
        
    })


})



