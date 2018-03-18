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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n\n<div class=\"row\">\n    <div class=\"col-md-3 dapp\">\n        <p class=\"dapp-h1\">DAIRY APP</p>\n        <p class=\"no-sence-comments\">Comment with no sence</p>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"items-container\">\n            <p class=\"tog\">Items</p>\n            <div class=\"row\">\n                <div class=\"col-md-7\">\n                    <input type=\"text\" placeholder=\"Type name here...\" class=\"item-name\" id=\"item-name-id\" />\n                </div>\n                <div class=\"col-md-1\"></div>\n                <div class=\"col-md-4\">\n                    <input type=\"button\" class=\"add-new\" value=\"Add New\" (click)=\"addItem()\"/>\n                </div>\n            </div>\n            <br/>\n\n            <app-items></app-items>\n        </div>\n\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"items-container\">\n            <p class=\"tog\">Comments #2</p>\n            <app-comments></app-comments>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"add-comment-square\"></div>\n                </div>\n                <div class=\"col-md-9\">\n                    <div class=\"comment-text\">\n                        <textarea id=\"add-new-com\" class=\"add-new-comment\" cols=\"40\" rows=\"4\" placeholder=\"Press Ctrl+Enter to add a comment\"></textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-1\"></div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_items__ = __webpack_require__("./src/app/mock-items.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.addItem = function () {
        var item_elem = document.getElementById('item-name-id');
        var item_name = item_elem.value;
        if (item_name !== '') {
            this.updateItems(item_name);
            localStorage.setItem('items', JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */]));
            // ITEMS.push({count: 2, name: document.querySelector('.item-name').value});
        }
    };
    AppComponent.prototype.updateItems = function (item_name) {
        var updated = false;
        for (var i in __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */]) {
            if (__WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */][i].name === item_name) {
                __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */][i].count += 1;
                updated = true;
            }
        }
        if (updated === false) {
            __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */].push({ count: 1, name: item_name });
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_items_component__ = __webpack_require__("./src/app/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comments_comments_component__ = __webpack_require__("./src/app/comments/comments.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__items_items_component__["a" /* ItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__comments_comments_component__["a" /* CommentsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let comment of comments\" class=\"row\">\n  <br/>\n  <div class=\"col-md-3\">\n    <div class=\"square\" class=\"blue-square\"></div>\n  </div>\n  <div class=\"col-md-9\">\n    <div class=\"comment-text\">\n     {{comment.text}}\n     </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_comments__ = __webpack_require__("./src/app/mock-comments.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsComponent = /** @class */ (function () {
    function CommentsComponent() {
        this.comments = __WEBPACK_IMPORTED_MODULE_1__mock_comments__["a" /* COMMENTS */];
        var self = this;
        document.onkeyup = function (e) {
            if (e.ctrlKey && e.which === 13) {
                var item_elem = document.getElementById('add-new-com');
                var item_name = item_elem.value;
                if (item_name !== '') {
                    self.updateComments(item_name);
                    localStorage.setItem('comments', JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__mock_comments__["a" /* COMMENTS */]));
                    // ITEMS.push({count: 2, name: document.querySelector('.item-name').value});
                }
            }
        };
    }
    CommentsComponent.prototype.updateComments = function (item_name) {
        __WEBPACK_IMPORTED_MODULE_1__mock_comments__["a" /* COMMENTS */].push({ color: '   ', text: item_name });
        localStorage.setItem('comments', JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__mock_comments__["a" /* COMMENTS */]));
    };
    CommentsComponent.prototype.ngOnInit = function () {
    };
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-comments',
            template: __webpack_require__("./src/app/comments/comments.component.html"),
            styles: [__webpack_require__("./src/app/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/items/items.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/items/items.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of items\" class=\"row item\">\n  <div class=\"col-md-8\">\n    {{item.name}}<span class=\"item-count\">{{item.count}}</span>\n  </div>\n  <div class=\"col-md-4\">\n    <input class=\"delete-button\" type=\"button\" value=\"Delete\" (click)= 'deleteItem(item)'/>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/items/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_items__ = __webpack_require__("./src/app/mock-items.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.items = __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */];
    }
    ItemsComponent.prototype.deleteItem = function (item) {
        for (var i in __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */]) {
            if (__WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */][i].name === item.name) {
                if (__WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */][i].count > 1) {
                    __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */][i].count -= 1;
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */].splice(+i, 1);
                }
            }
        }
        localStorage.setItem('items', JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */]));
    };
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-items',
            template: __webpack_require__("./src/app/items/items.component.html"),
            styles: [__webpack_require__("./src/app/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/mock-comments.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMMENTS; });
var downloadedComments = localStorage.getItem('comments');
var downloadedCommentsArr = JSON.parse(downloadedComments);
var downloadedCommentsArr2 = [];
console.log(downloadedComments);
if (typeof downloadedCommentsArr === 'object' && downloadedComments !== null) {
    downloadedCommentsArr2 = downloadedCommentsArr;
}
else {
    downloadedCommentsArr2 = [
        { color: 'rgb(71, 86, 140)', text: 'May indulgence difficulty ham can put especially. Bringing remember for .' },
        { color: 'rgb(255, 138, 0)', text: 'May indulgence difficulty ham can put especially. Bringing rememberofmy front.' }
    ];
}
console.log(downloadedCommentsArr2);
var COMMENTS = downloadedCommentsArr2;


/***/ }),

/***/ "./src/app/mock-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEMS; });
var downloadedItems = localStorage.getItem('items');
var downloadedItemsArr = JSON.parse(downloadedItems);
var downloadedItemsArr2;
if (typeof downloadedItemsArr === 'object' && downloadedItems !== null) {
    downloadedItemsArr2 = downloadedItemsArr;
}
else {
    downloadedItemsArr2 = [
        { count: 2, name: 'first itam with custom name' },
        { count: 130, name: 'Second item is active' }
    ];
}
var ITEMS = downloadedItemsArr2;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map