import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router, 
    private _route: ActivatedRoute
  ) { this.initToConnection() }

  newPlayer: any;
  ioConnection: any;
  io;
  socketid:any;

  ngOnInit() {
    this.newPlayer = {name: "", socketid: this.socketid}
    //this._httpService.on("initial")
    
  }
  addNewPlayer(){
    console.log("in home component")
    
    // this.newPlayer.name = name //need this line to get name from the html
    let observable = this._httpService.addNewPlayer(this.newPlayer)
    observable.subscribe(data =>{
      //console.log("123123123", data)
      this._router.navigate(['/gameroom'])
      //return false;
    })
  }
  
  private initToConnection() {
    this._httpService.initSocket();

    this._httpService.onEvent('connect').subscribe(() => {
      console.log('You are connected!');
    });

    this._httpService.onEvent('other:connection').subscribe(() => {
      console.log('Somebody else connected!');
    });

    
    // this._httpService.onEvent('initial').subscribe(()=> {
    //   console.log("a new instance was made")
      
    // });

    this.ioConnection = this._httpService.oninitial().subscribe((data) => {
      console.log(data)
      //this.socketid = data['socketid']
      this.newPlayer.socketid = data['socketid']
      console.log(this.newPlayer)
    });

    // this._httpService.onEvent('disconnect').subscribe(() => {
    //   console.log('Somebody disconnected!');
    //   this._httpService.send({message: "a socket has disconnected"})
    // });

  }
}
