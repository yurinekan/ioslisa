(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-meal-history-user-meal-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-meal-history/user-meal-history.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-meal-history/user-meal-history.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<style>\n  ion-icon {\n    zoom: 1.2;\n    margin-left: 0%;\n  }\n  ion-button {\n    zoom: 1.2;\n  }\n\n  img {\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0px;\n    max-width: 60%;\n    height: auto;\n    margin-bottom: 10px;\n\n  }\n</style>\n\n\n\n<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button ion-button icon-only (click)=\"return()\">\n              <ion-icon name=\"arrow-back\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    <ion-title>Visualização de Refeição</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <div class=\"plate_demo\">           \n        <img class=\"photo\" src=\"{{photo_meal}}\">      \n      </div>\n      <div class=\"ion-text-center\" style=\"height: 40vh;color: #003d7a;border-style: solid; border-color:rgb(211, 211, 211); border-width: 1px;  margin-bottom: 0vh; font-size: -webkit-xxx-large; width: 92%;\n      margin-left: 14px;padding-left: 10px; padding-right: 10px;border-radius: 10px;\">\n      <h6 style=\"color:#00b3b1;text-align: left; margin-top: 1px;margin-bottom: 1px\">COMENTÁRIO</h6>\n      <ion-item >\n          <ion-textarea disabled='disabled' [(ngModel)]=\"desc\" placeholder=\"Refeição ainda não possui comentário.\" rows=\"30\" cols=\"20\" value=\"{{desc}}\"></ion-textarea>\n        </ion-item>\n      <ion-row justify-content-center>\n          <div class = \"central\" text-center style=\"margin-left: 185px;\"> \n         </div>\n     </ion-row>\n      </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/user-meal-history/user-meal-history.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-meal-history/user-meal-history.module.ts ***!
  \*********************************************************************/
/*! exports provided: UserMealHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMealHistoryPageModule", function() { return UserMealHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_meal_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-meal-history.page */ "./src/app/pages/user-meal-history/user-meal-history.page.ts");







const routes = [
    {
        path: '',
        component: _user_meal_history_page__WEBPACK_IMPORTED_MODULE_6__["UserMealHistoryPage"]
    }
];
let UserMealHistoryPageModule = class UserMealHistoryPageModule {
};
UserMealHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_meal_history_page__WEBPACK_IMPORTED_MODULE_6__["UserMealHistoryPage"]]
    })
], UserMealHistoryPageModule);



/***/ }),

/***/ "./src/app/pages/user-meal-history/user-meal-history.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-meal-history/user-meal-history.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.plate_demo {\n  padding: 5%;\n  padding-top: 8%;\n  padding-bottom: 8%;\n}\ndiv.text {\n  height: 20vh;\n}\nion-item {\n  height: 35vh;\n}\nion-item ion-textarea {\n  height: 35vh;\n}\nh6 {\n  font-size: 0.25em;\n}\n.photo {\n  border-style: solid;\n  border-color: #3db6c5;\n  border-width: 10px;\n  border-radius: 20px;\n  top: 0;\n  bottom: 10vh;\n  left: 0;\n  right: 0;\n  min-width: 100%;\n  max-width: 100%;\n  max-height: 40vh;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 40vh;\n  margin: auto;\n  overflow: auto;\n  orientation: portrait;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy91c2VyLW1lYWwtaGlzdG9yeS91c2VyLW1lYWwtaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXItbWVhbC1oaXN0b3J5L3VzZXItbWVhbC1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRztFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBUDtBREdHO0VBQ0ksWUFBQTtBQ0RQO0FEWUE7RUFDSSxZQUFBO0FDVEo7QURVSTtFQUNJLFlBQUE7QUNSUjtBRGNBO0VBQ0ksaUJBQUE7QUNYSjtBRGFBO0VBRUcsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ1pIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1tZWFsLWhpc3RvcnkvdXNlci1tZWFsLWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgJi5wbGF0ZV9kZW1ve1xuICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgIHBhZGRpbmctdG9wOiA4JTtcbiAgICAgICBwYWRkaW5nLWJvdHRvbTogOCU7XG5cbiAgIH1cbiAgICYudGV4dHtcbiAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICB9XG59XG4vLyB0ZXh0YXJlYXtcbi8vICAgICAtLXBhZGRpbmc6IDA7XG4vLyAgICAgJi5uYXRpdmUtdGV4dGFyZWF7XG4vLyAgICAgICAgIGhlaWdodDogMjB2aCAhaW1wb3J0YW50O1xuLy8gICAgICAgICBtYXgtaGVpZ2h0OiAyNnZoO1xuXG4vLyAgICAgfVxuLy8gfVxuaW9uLWl0ZW17XG4gICAgaGVpZ2h0OjM1dmg7XG4gICAgJiBpb24tdGV4dGFyZWF7XG4gICAgICAgIGhlaWdodDogMzV2aDtcbiAgICAgICAgXG5cbiAgICB9XG59XG5cbmg2e1xuICAgIGZvbnQtc2l6ZTogMC4yNWVtO1xufVxuLnBob3Rve1xuICAgLy9ib3JkZXIgZWZmZWN0XG4gICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgYm9yZGVyLWNvbG9yOiAjM2RiNmM1O1xuICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgIC8vcG9zaXRpb246IGZpeGVkO1xuICAgdG9wOiAwO1xuICAgYm90dG9tOiAxMHZoO1xuICAgbGVmdDogMDtcbiAgIHJpZ2h0OjA7XG4gICBtaW4td2lkdGg6IDEwMCU7XG4gICBtYXgtd2lkdGg6IDEwMCU7XG4gICBtYXgtaGVpZ2h0OiA0MHZoO1xuICAgaGVpZ2h0OmZpdC1jb250ZW50O1xuICAgbWluLWhlaWdodDogNDB2aDtcbiAgIG1hcmdpbjogYXV0bztcbiAgIG92ZXJmbG93OiBhdXRvO1xuICAgb3JpZW50YXRpb246IHBvcnRyYWl0O1xufSIsImRpdi5wbGF0ZV9kZW1vIHtcbiAgcGFkZGluZzogNSU7XG4gIHBhZGRpbmctdG9wOiA4JTtcbiAgcGFkZGluZy1ib3R0b206IDglO1xufVxuZGl2LnRleHQge1xuICBoZWlnaHQ6IDIwdmg7XG59XG5cbmlvbi1pdGVtIHtcbiAgaGVpZ2h0OiAzNXZoO1xufVxuaW9uLWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiAzNXZoO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMC4yNWVtO1xufVxuXG4ucGhvdG8ge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMzZGI2YzU7XG4gIGJvcmRlci13aWR0aDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDEwdmg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNDB2aDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWluLWhlaWdodDogNDB2aDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3JpZW50YXRpb246IHBvcnRyYWl0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user-meal-history/user-meal-history.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user-meal-history/user-meal-history.page.ts ***!
  \*******************************************************************/
/*! exports provided: UserMealHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMealHistoryPage", function() { return UserMealHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let UserMealHistoryPage = class UserMealHistoryPage {
    constructor(service, router, _location) {
        this.service = service;
        this.router = router;
        this._location = _location;
    }
    ionViewWillEnter() {
        this.desc = sessionStorage.getItem('description');
        if (this.desc == "null" || this.desc == null) {
            this.desc = "";
        }
        this.id_meal = sessionStorage.getItem('id_meal');
        this.photo_meal = sessionStorage.getItem("image_file_name");
    }
    ngOnInit() {
        console.log("ESSE É A DESCRICCCC " + this.desc);
        console.log("ESSE É A ID MEAL " + window.sessionStorage.getItem('id_meal'));
    }
    return() {
        window.sessionStorage.setItem('description', '');
        this.router.navigateByUrl('historical');
    }
};
UserMealHistoryPage.ctorParameters = () => [
    { type: src_app_http_test_service__WEBPACK_IMPORTED_MODULE_3__["HttpTestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
UserMealHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-meal-history',
        template: __webpack_require__(/*! raw-loader!./user-meal-history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-meal-history/user-meal-history.page.html"),
        styles: [__webpack_require__(/*! ./user-meal-history.page.scss */ "./src/app/pages/user-meal-history/user-meal-history.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_http_test_service__WEBPACK_IMPORTED_MODULE_3__["HttpTestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], UserMealHistoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-meal-history-user-meal-history-module-es2015.js.map