webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var gameroom_component_1 = __webpack_require__("./src/app/gameroom/gameroom.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'gameroom', component: gameroom_component_1.GameroomComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to the Game!\n  </h1>\n  \n</div>\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.goHome()
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var gameroom_component_1 = __webpack_require__("./src/app/gameroom/gameroom.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                gameroom_component_1.GameroomComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/gameroom/gameroom.component.css":
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    padding-left: 100px;\r\n}\r\n\r\n.players{\r\n    border: 2px solid black;\r\n    margin: 10px 0;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\r\n\r\n.playerhand{\r\n    border: 1px solid red;\r\n    width: 34px; \r\n    height: 60px; \r\n    padding: 0 0 5px 2px; \r\n    display: inline-block; \r\n    margin-right: 2px;\r\n}"

/***/ }),

/***/ "./src/app/gameroom/gameroom.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"errors\">\n{{errors}}\n</p>\n\n<div class=\"wrapper\">\n\n    <button *ngIf=\"!allPlayers\" (click)=\"play()\">DealCard</button>\n    <button *ngIf=\"allPlayers && turn >= allPlayers.length\" (click)=\"clear()\">New game</button>\n    \n    <!-- <button *ngIf=\"allPlayers\" (click)=\"deal()\">Deal Game (This is for playing new round without reshuffling whole deck)</button> -->\n    \n    \n    \n    <div class=\"players\" *ngFor=\"let player of allPlayers; let idx = index\">\n      <div *ngIf=\"player.socketid == sktid\">\n          <button *ngIf=\"player.total < 21 && turn == idx\" (click)=\"plyr_idx(idx)\">Hit</button>\n          <button *ngIf=\"turn == idx\" (click)=\"stay()\" >Stay</button>\n      </div>\n      \n      <p *ngIf=\"player.total > 21\">Bust! Please press stay</p>\n      <p *ngIf=\"player.total == 21\">Winner Winner Chicken Dinner! Please press stay</p>\n      <p>{{idx}} {{player.name}} - Total: {{player.total}}</p>\n      <div class=\"playerhand\" *ngFor=\"let i of player.hand\">\n          <div style=\"font-size: 30px;\">{{i[0]}}</div>\n          <div style=\"font-size: 30px;\">{{i[1]}}</div>\n        \n      </div>\n    \n    </div>\n\n    <div *ngIf=\"turn >= allPlayers.length\">\n        <p>Round Over!</p>\n\n    </div>\n\n</div>\n\n\n<!-- <div *ngFor=\"let player of allPlayers\">\n  //this part is for displaying individual hands for each socket instead of every hand\n  <div *ngIf=\"player.socketid == sktid\">\n  <p>{{player.name}}</p>\n  <div *ngFor=\"let i of player.hand\">\n      <p>{{i[0]}}-{{i[1]}}</p>  \n  </div> \n</div>\n</div> -->"

/***/ }),

/***/ "./src/app/gameroom/gameroom.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
//import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } from 'constants';
var GameroomComponent = /** @class */ (function () {
    function GameroomComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.initToConnection();
    }
    GameroomComponent.prototype.ngOnInit = function () {
        this.player = this._httpService.player;
        //console.log(this.player)
        //console.log(this._httpService.player)
        this.sktid = this._httpService.socketid;
        //console.log("in the nginit of gameroom",this.sktid)
    };
    //how to do if statements in ts files
    GameroomComponent.prototype.initToConnection = function () {
        //this._httpService.initSocket();
        var _this = this;
        //listens to the broadcast to deal cards to everyone
        this.listenbroadcast = this._httpService.onBroadcast().subscribe(function (data) {
            console.log("in gameroom component and listenbroadcast");
            //console.log("=================")
            //console.log(data['allplayers'])
            if (data['allplayers'] == "No More Cards") {
                _this.errors = data['allplayers'];
            }
            else {
                _this.errors = null;
                _this.allPlayers = data['allplayers'];
            }
            //console.log("=================")
        });
        this.turnlistener = this._httpService.listener_round().subscribe(function (data) {
            console.log("in gameroomcomonent turn listener", data['current_turn']);
            _this.turn = data['current_turn'];
        });
        //for adding cards to each player hand
        // this.listenpassedcard = this._httpService.onPassedCard().subscribe((data) => {
        // })
        // this.ioConnection = this._httpService.oninitial().subscribe((data) => {
        //   console.log(data)
        //   // this.socketid = data['socketid']
        //   this.newPlayer.socketid = data['socketid']
        //   console.log(this.newPlayer)
        // });
    };
    GameroomComponent.prototype.clear = function () {
        var observable = this._httpService.clear();
        console.log("in gameroom component clear");
        this.play();
    };
    // startgame(){
    //   let observable = this._httpService.startgame()
    //   observable.subscribe(data =>{
    //     console.log("in gameroom component")
    //     this.allPlayers = data["data"]
    //     console.log("123asdfasdfa12312312",this.allPlayers)
    //   })
    // }
    GameroomComponent.prototype.play = function () {
        this.turn = 0;
        console.log(this.turn);
        var play = this._httpService.broadcast();
    };
    GameroomComponent.prototype.plyr_idx = function (idx) {
        //can also be used for taking player out of game if they want to leave
        var observable = this._httpService.addCard(idx);
        //console.log("pressing plyr_idx")
        //console.log(typeof this.allPlayers[0].hand[0][0])
    };
    GameroomComponent.prototype.stay = function () {
        // this.turn += 1;
        var observable = this._httpService.player_stay(this.turn);
    };
    GameroomComponent.prototype.deal = function () {
        var observable = this._httpService.dealCards();
    };
    GameroomComponent = __decorate([
        core_1.Component({
            selector: 'app-gameroom',
            template: __webpack_require__("./src/app/gameroom/gameroom.component.html"),
            styles: [__webpack_require__("./src/app/gameroom/gameroom.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], GameroomComponent);
    return GameroomComponent;
}());
exports.GameroomComponent = GameroomComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".signin{\r\n    text-align: center;\r\n    margin-top: 50px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"signin\">\n    <p>Enter your ingame name</p>\n    <form (submit)=\"addNewPlayer()\">\n\n    <input type=\"text\" name=\"newPlayer.name\" [(ngModel)]=\"newPlayer.name\">\n    <p *ngIf=\"newPlayer.name.length > 0\"><button>Submit Name</button></p>\n\n    </form>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.initToConnection();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.newPlayer = { name: "", socketid: this.socketid };
        //this._httpService.on("initial")
    };
    HomeComponent.prototype.addNewPlayer = function () {
        var _this = this;
        console.log("in home component");
        // this.newPlayer.name = name //need this line to get name from the html
        var observable = this._httpService.addNewPlayer(this.newPlayer);
        observable.subscribe(function (data) {
            //console.log("123123123", data)
            _this._router.navigate(['/gameroom']);
            //return false;
        });
    };
    HomeComponent.prototype.initToConnection = function () {
        var _this = this;
        this._httpService.initSocket();
        this._httpService.onEvent('connect').subscribe(function () {
            console.log('You are connected!');
        });
        this._httpService.onEvent('other:connection').subscribe(function () {
            console.log('Somebody else connected!');
        });
        // this._httpService.onEvent('initial').subscribe(()=> {
        //   console.log("a new instance was made")
        // });
        this.ioConnection = this._httpService.oninitial().subscribe(function (data) {
            console.log(data);
            //this.socketid = data['socketid']
            _this.newPlayer.socketid = data['socketid'];
            console.log(_this.newPlayer);
        });
        // this._httpService.onEvent('disconnect').subscribe(() => {
        //   console.log('Somebody disconnected!');
        //   this._httpService.send({message: "a socket has disconnected"})
        // });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var io = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
var SERVER_URL = 'http://localhost:8000';
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.addNewPlayer = function (player) {
        console.log("in addnewplayer service ====", player);
        return this._http.post('/player', player);
    };
    HttpService.prototype.startgame = function () {
        return this._http.get('/startgame');
    };
    HttpService.prototype.broadcast = function () {
        //console.log(message)
        this.socket.emit("broadcasting");
    };
    HttpService.prototype.onBroadcast = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('broadcast', function (data) {
                observer.next(data);
                //console.log("in broadcast service", data)
            });
        });
    };
    // onPassedCard(){
    //   return new Observable<object>(observer => {
    //     this.socket.on('passedcard', (data) => {observer.next(data) 
    //     console.log("in passedCard service", data)
    //     });
    //   });
    // }
    HttpService.prototype.dealCards = function () {
        this.socket.emit("dealcards");
    };
    HttpService.prototype.clear = function () {
        this.socket.emit("clear");
    };
    HttpService.prototype.player_stay = function (turn) {
        this.socket.emit("player_stay", { current_turn: turn });
    };
    HttpService.prototype.listener_round = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on("current_round", function (data) {
                observer.next(data);
                console.log("in service and watching for turn", data);
            });
        });
    };
    HttpService.prototype.addCard = function (idx) {
        this.socket.emit('addcard', idx);
        //console.log("in addCard service")
    };
    HttpService.prototype.initSocket = function () {
        this.socket = io(SERVER_URL);
    };
    HttpService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    HttpService.prototype.onMessage = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    HttpService.prototype.onEvent = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    HttpService.prototype.oninitial = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('initial', function (data) {
                observer.next(data);
                console.log("12342q353545", data);
                _this.socketid = data['socketid'];
            });
        });
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map