webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoulettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roulette_details_roulette_details__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as locations from "../../assets/data/restaurants.json"
/**
 * Generated class for the RoulettePage page.../
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoulettePage = /** @class */ (function () {
    function RoulettePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.locationsData = [
            {
                "name": "Blue Sky",
                "rating": "4.4",
                "address": "3216 4th St, Lubbock, TX 79415",
                "type": ["American", "Burgers"],
                "price": "$$$",
                "imgURL": "http://www.blueskytexas.com/4th.jpg"
            },
            {
                "name": "Chipotle",
                "rating": "4.4",
                "address": "2411 Glenna Goodacre Blvd, Lubbock, TX 79401",
                "type": ["Mexican Grill"],
                "price": "$$",
                "imgURL": "https://fastly.4sqi.net/img/general/600x600/66898335_5isfU_CQ9R3YW9ieXc7cOVFl28fYdnn_7Ac1z89abz8.jpg"
            },
            {
                "name": "Thai Pepper",
                "rating": "4.5",
                "address": "3702 20th St, Lubbock, TX 79410",
                "type": ["Thai", "Asian"],
                "price": "$$",
                "imgURL": "https://lh5.googleusercontent.com/p/AF1QipP-jUMmDnc8kFCUMrB4pNd83aW6a0gkHZwWCITz=w600-h321-p-k-no"
            }
        ];
        console.log(this.locationsData);
    }
    RoulettePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoulettePage');
    };
    RoulettePage.prototype.openRouletteDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__roulette_details_roulette_details__["a" /* RouletteDetailsPage */], { locations: this.getRandom() });
    };
    RoulettePage.prototype.getRandom = function () {
        return this.locationsData[Math.floor(Math.random() * Math.floor(this.locationsData.length))];
    };
    RoulettePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roulette',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\roulette\roulette.html"*/'<!--\n  Generated template for the RoulettePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color = "nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Quick Eats</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n      <ion-icon name="aperture" style="font-size: 360px; text-align: center"></ion-icon>\n  </div>\n  <div text-center class = "roulette"> \n      <button ion-button (click)="openRouletteDetails()"> Roulette! </button>\n  </div>\n\n</ion-content> \n'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\roulette\roulette.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RoulettePage);
    return RoulettePage;
}());

//# sourceMappingURL=roulette.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/roulette-details/roulette-details.module": [
		271,
		1
	],
	"../pages/roulette/roulette.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roulette_details_roulette_details__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.locationsData = [
            {
                "name": "Blue Sky",
                "rating": "4.4",
                "address": "3216 4th St, Lubbock, TX 79415",
                "type": ["American", "Burgers"],
                "price": "$$$",
                "imgURL": "http://www.blueskytexas.com/4th.jpg"
            },
            {
                "name": "Chipotle",
                "rating": "4.4",
                "address": "2411 Glenna Goodacre Blvd, Lubbock, TX 79401",
                "type": ["Mexican Grill"],
                "price": "$$",
                "imgURL": "https://fastly.4sqi.net/img/general/600x600/66898335_5isfU_CQ9R3YW9ieXc7cOVFl28fYdnn_7Ac1z89abz8.jpg"
            },
            {
                "name": "Thai Pepper",
                "rating": "4.5",
                "address": "3702 20th St, Lubbock, TX 79410",
                "type": ["Thai", "Asian"],
                "price": "$$",
                "imgURL": "https://lh5.googleusercontent.com/p/AF1QipP-jUMmDnc8kFCUMrB4pNd83aW6a0gkHZwWCITz=w600-h321-p-k-no"
            }
        ];
    }
    ListPage.prototype.goToDetails = function (location) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__roulette_details_roulette_details__["a" /* RouletteDetailsPage */], { locations: location });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar color = "nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Quick Eats</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item ion-item *ngFor="let location of this.locationsData" (click)="goToDetails(location)">\n      <ion-thumbnail item-left>\n        <ion-img src=\'{{location.imgURL}}\'></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>{{location.name}}</h3>\n        <p>{{location.rating}} Stars</p>\n        <p>{{location.price}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_roulette_roulette__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_roulette_details_roulette_details__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_roulette_details_roulette_details__["a" /* RouletteDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/roulette/roulette.module#RoulettePageModule', name: 'RoulettePage', segment: 'roulette', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roulette-details/roulette-details.module#RouletteDetailsPageModule', name: 'RouletteDetailsPage', segment: 'roulette-details', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_roulette_details_roulette_details__["a" /* RouletteDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_roulette_roulette__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */] },
            { title: 'Roulette', component: __WEBPACK_IMPORTED_MODULE_5__pages_roulette_roulette__["a" /* RoulettePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar color = "nav">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouletteDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
/**
 * Generated class for the RouletteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RouletteDetailsPage = /** @class */ (function () {
    function RouletteDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.locationsData = navParams.get('locations');
        this.tags = this.locationsData.type.join(", ");
        console.log(this.tags);
    }
    RouletteDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RouletteDetailsPage');
    };
    RouletteDetailsPage.prototype.goToNavigation = function () {
        // let options: LaunchNavigatorOptions = {
        //   start: 'London, ON',
        //   app: LaunchNavigator.getSupportedPlatforms.
        // }
        // this.launchNavigator.navigate('Toronto, ON', options)
        //   .then(
        //     success => console.log('Launched navigator'),
        //     error => console.log('Error launching navigator', error)
        //   );
        //this.launchNavigator.navigate(this.locationsData.address);
    };
    RouletteDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roulette-details',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\roulette-details\roulette-details.html"*/'<!--\n  Generated template for the RouletteDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="nav">\n    <ion-title>Roulette</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <img src ="{{this.locationsData.imgURL}}" >\n        <ion-card-content>\n          <ion-card-title>\n            {{this.locationsData.name}}\n          </ion-card-title>\n          <p>{{this.tags}}</p>\n          <p>{{this.locationsData.price}}</p>\n          <p>{{this.locationsData.rating}} Stars</p>\n        </ion-card-content>\n      </ion-card>\n      <br>\n      <div text-center> \n          <button ion-button (click)="goToNavigation()"> Directions </button>\n      </div>\n      <br>\n      <div text-center> \n          <button ion-button> Menu </button>\n      </div>\n    </ion-content>\n'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\roulette-details\roulette-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RouletteDetailsPage);
    return RouletteDetailsPage;
}());

//# sourceMappingURL=roulette-details.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map