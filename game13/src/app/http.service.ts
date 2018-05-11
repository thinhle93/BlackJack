import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import * as io from 'socket.io-client';
const SERVER_URL = 'http://localhost:8000';


@Injectable()
export class HttpService {
  player: any;
  socketid:any;
  private socket;

  

  constructor(private _http: HttpClient) { }
  
  addNewPlayer(player){
    console.log("in addnewplayer service ====",player)
    
    return this._http.post('/player', player)
  }

  startgame(){
    return this._http.get('/startgame')
  }


  broadcast(){
    //console.log(message)
    this.socket.emit("broadcasting")
    
  }

  onBroadcast(){
    return new Observable<object>(observer => {
      this.socket.on('broadcast', (data) => {observer.next(data) 
      //console.log("in broadcast service", data)
      });
    });
  }

  // onPassedCard(){
  //   return new Observable<object>(observer => {
  //     this.socket.on('passedcard', (data) => {observer.next(data) 
  //     console.log("in passedCard service", data)
  //     });
  //   });
  // }
  dealCards(){
    this.socket.emit("dealcards")

  }

  clear(){
    this.socket.emit("clear")
  }

  player_stay(turn){
    this.socket.emit("player_stay", {current_turn: turn})
  }

  listener_round(){
    return new Observable<object>(observer => {
      this.socket.on("current_round", (data) => {observer.next(data)
        console.log("in service and watching for turn", data)
      })
    })
    
  }

  addCard(idx){
    this.socket.emit('addcard', idx)
    //console.log("in addCard service")
  }
  initSocket() {
    this.socket = io(SERVER_URL);
  }

  send(message) {
    this.socket.emit('message', message);
  }

  onMessage() {
    return new Observable<object>(observer => {
      this.socket.on('message', (data) => observer.next(data));
    });
  }

  onEvent(event) {
    return new Observable<object>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }

  oninitial(){
    return new Observable<object>(observer => {
      this.socket.on('initial', (data) => {observer.next(data) 
        console.log("12342q353545", data)
        this.socketid = data['socketid']
      });
     
    });
  }
}


