import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } from 'constants';

@Component({
  selector: 'app-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrls: ['./gameroom.component.css']
})
export class GameroomComponent implements OnInit {
  player: any;
  allPlayers: any;
  listenbroadcast: any;
  listenpassedcard: any;
  newPlayer: any;
  ioConnection: any;
  io;
  socketid:any;
  sktid: any;
  errors: any;
  turn: any;
  turnlistener:any;
  constructor(private _httpService: HttpService,
    private _router: Router, 
    private _route: ActivatedRoute
  ) {
    this.initToConnection();
   }


  

  ngOnInit() {
    this.player = this._httpService.player;
    //console.log(this.player)
    //console.log(this._httpService.player)
    this.sktid = this._httpService.socketid;
    //console.log("in the nginit of gameroom",this.sktid)

    
   
  }

  //how to do if statements in ts files
    
  

  private initToConnection() {
    //this._httpService.initSocket();

    //listens to the broadcast to deal cards to everyone
    this.listenbroadcast = this._httpService.onBroadcast().subscribe((data) => {
      console.log("in gameroom component and listenbroadcast")
      //console.log("=================")
      //console.log(data['allplayers'])
      if(data['allplayers'] == "No More Cards"){
        this.errors = data['allplayers']
      }
      else{
        this.errors = null;
        this.allPlayers = data['allplayers']
      }
      
      //console.log("=================")
    });


    this.turnlistener = this._httpService.listener_round().subscribe((data) => {
      console.log("in gameroomcomonent turn listener",data['current_turn'])
      this.turn = data['current_turn']
    })
    //for adding cards to each player hand
    // this.listenpassedcard = this._httpService.onPassedCard().subscribe((data) => {

    // })

    // this.ioConnection = this._httpService.oninitial().subscribe((data) => {
    //   console.log(data)
    //   // this.socketid = data['socketid']
    //   this.newPlayer.socketid = data['socketid']
    //   console.log(this.newPlayer)
    // });

  }

  clear(){
    let observable = this._httpService.clear()
    console.log("in gameroom component clear")
    this.play()
  }
  // startgame(){
  //   let observable = this._httpService.startgame()
  //   observable.subscribe(data =>{
  //     console.log("in gameroom component")
  //     this.allPlayers = data["data"]
  //     console.log("123asdfasdfa12312312",this.allPlayers)
  //   })
    
  // }

  play(){
    this.turn = 0;
    console.log(this.turn)
    let play = this._httpService.broadcast();
    
  }

  plyr_idx(idx){ //used for telling which player to deal card to
    //can also be used for taking player out of game if they want to leave
    let observable = this._httpService.addCard(idx)
    //console.log("pressing plyr_idx")
    //console.log(typeof this.allPlayers[0].hand[0][0])
  }
  
  stay(){
    // this.turn += 1;
    let observable = this._httpService.player_stay(this.turn)
  }

  deal(){ //this is for dealing remaning cards in deck without reshuffle
    let observable = this._httpService.dealCards()
    
  }



  //implement leave game feature that removes the player from the list of players in the game 
  // by using splice on their index

  // private initToConnection() {
  //   this._httpService.initSocket();

  //   this._httpService.onEvent('connect').subscribe(() => {
  //     console.log('You are connected!');
  //   });

  //   this._httpService.onEvent('other:connection').subscribe(() => {
  //     console.log('Somebody else connected!');
  //   });

  //   this._httpService.onEvent('disconnect').subscribe(() => {
  //     console.log('Somebody disconnected!');
  //   });

  // }
}
