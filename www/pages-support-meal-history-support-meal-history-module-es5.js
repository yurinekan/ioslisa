(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-meal-history-support-meal-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/support-meal-history/support-meal-history.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/support-meal-history/support-meal-history.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<style>\n    ion-icon {\n      zoom: 1.2;\n      margin-left: 0%;\n    }\n    ion-button {\n      zoom: 1.2;\n    }\n\n    img {\n\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      margin-top: 0px;\n      max-width: 60%;\n      height: auto;\n      margin-bottom: 10px;\n\n    }\n  </style>\n  \n  <ion-header>\n      <ion-toolbar>\n          <ion-buttons slot=\"start\">\n              <ion-back-button></ion-back-button>\n            </ion-buttons>\n        <ion-title>Visualizar Avaliações</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n  <ion-content>\n    <div class=\"plate_demo\">           \n      <img class=\"photo\" src=\"{{photo_meal}}\">      \n    </div>\n    <div class=\"ion-text-center\" style=\"color: #003d7a;border-style: solid; border-color:rgb(211, 211, 211); border-width: 1px;  margin-bottom: 0vh; font-size: -webkit-xxx-large; width: 92%;\n    margin-left: 14px;padding-left: 10px; padding-right: 10px;border-radius: 10px;\">\n      <h6 style=\"color:#00b3b1;text-align: left; margin-top: 1px;margin-bottom: 1px\">COMENTÁRIO</h6>\n      <ion-item >\n        <ion-textarea disabled='disabled' [(ngModel)]=\"desc\" placeholder=\"Refeição ainda não possui comentário.\" rows=\"30\" cols=\"20\" value=\"{{desc}}\"></ion-textarea>\n      </ion-item>\n      <ion-row justify-content-center>\n        <div class = \"central\" text-center style=\"margin-left: 185px;\"> \n        </div>\n      </ion-row>\n    </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/support-meal-history/support-meal-history.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/support-meal-history/support-meal-history.module.ts ***!
  \***************************************************************************/
/*! exports provided: SupportMealHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportMealHistoryPageModule", function() { return SupportMealHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _support_meal_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support-meal-history.page */ "./src/app/pages/support-meal-history/support-meal-history.page.ts");







var routes = [
    {
        path: '',
        component: _support_meal_history_page__WEBPACK_IMPORTED_MODULE_6__["SupportMealHistoryPage"]
    }
];
var SupportMealHistoryPageModule = /** @class */ (function () {
    function SupportMealHistoryPageModule() {
    }
    SupportMealHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_support_meal_history_page__WEBPACK_IMPORTED_MODULE_6__["SupportMealHistoryPage"]]
        })
    ], SupportMealHistoryPageModule);
    return SupportMealHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/support-meal-history/support-meal-history.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/support-meal-history/support-meal-history.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.plate_demo {\n  padding: 5%;\n  padding-top: 8%;\n  padding-bottom: 8%;\n}\ndiv.text {\n  height: 20vh;\n}\nh6 {\n  font-size: 0.33em;\n}\nion-item {\n  height: 30vh;\n}\nion-item ion-textarea {\n  height: 30vh;\n}\n.photo {\n  border-style: solid;\n  border-color: #3db6c5;\n  border-width: 10px;\n  border-radius: 20px;\n  top: 0;\n  bottom: 10vh;\n  left: 0;\n  right: 0;\n  min-width: 100%;\n  max-width: 100%;\n  max-height: 40vh;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 40vh;\n  margin: auto;\n  overflow: auto;\n  orientation: portrait;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy9zdXBwb3J0LW1lYWwtaGlzdG9yeS9zdXBwb3J0LW1lYWwtaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1cHBvcnQtbWVhbC1oaXN0b3J5L3N1cHBvcnQtbWVhbC1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREdJO0VBQ0ksWUFBQTtBQ0RSO0FESUE7RUFDSSxpQkFBQTtBQ0RKO0FER0E7RUFDSSxZQUFBO0FDQUo7QURDSTtFQUNJLFlBQUE7QUNDUjtBREdBO0VBRUksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VwcG9ydC1tZWFsLWhpc3Rvcnkvc3VwcG9ydC1tZWFsLWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgICYucGxhdGVfZGVtb3tcbiAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4JTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDglO1xuIFxuICAgIH1cbiAgICAmLnRleHR7XG4gICAgICAgIGhlaWdodDogMjB2aDtcbiAgICB9XG59XG5oNntcbiAgICBmb250LXNpemU6IDAuMzNlbTtcbn1cbmlvbi1pdGVte1xuICAgIGhlaWdodDozMHZoO1xuICAgICYgaW9uLXRleHRhcmVhe1xuICAgICAgICBoZWlnaHQ6IDMwdmg7XG5cbiAgICB9XG59XG4ucGhvdG97XG4gICAgLy9ib3JkZXIgZWZmZWN0XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICMzZGI2YzU7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLy9wb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMTB2aDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OjA7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA0MHZoO1xuICAgIGhlaWdodDpmaXQtY29udGVudDtcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvcmllbnRhdGlvbjogcG9ydHJhaXQ7XG59IiwiZGl2LnBsYXRlX2RlbW8ge1xuICBwYWRkaW5nOiA1JTtcbiAgcGFkZGluZy10b3A6IDglO1xuICBwYWRkaW5nLWJvdHRvbTogOCU7XG59XG5kaXYudGV4dCB7XG4gIGhlaWdodDogMjB2aDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDAuMzNlbTtcbn1cblxuaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDMwdmg7XG59XG5pb24taXRlbSBpb24tdGV4dGFyZWEge1xuICBoZWlnaHQ6IDMwdmg7XG59XG5cbi5waG90byB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzNkYjZjNTtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMTB2aDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA0MHZoO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtaW4taGVpZ2h0OiA0MHZoO1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvcmllbnRhdGlvbjogcG9ydHJhaXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/support-meal-history/support-meal-history.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/support-meal-history/support-meal-history.page.ts ***!
  \*************************************************************************/
/*! exports provided: SupportMealHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportMealHistoryPage", function() { return SupportMealHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_http_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var SupportMealHistoryPage = /** @class */ (function () {
    function SupportMealHistoryPage(service, router, _location) {
        this.service = service;
        this.router = router;
        this._location = _location;
    }
    SupportMealHistoryPage.prototype.ionViewWillEnter = function () {
        this.desc = window.sessionStorage.getItem('description');
        if (this.desc == "null" || this.desc == null) {
            this.desc = "";
        }
        this.id_meal = window.sessionStorage.getItem('id_meal');
        this.photo_meal = window.sessionStorage.getItem("image_file_name");
    };
    SupportMealHistoryPage.prototype.ngOnInit = function () {
    };
    SupportMealHistoryPage.ctorParameters = function () { return [
        { type: src_app_http_test_service__WEBPACK_IMPORTED_MODULE_2__["HttpTestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    SupportMealHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support-meal-history',
            template: __webpack_require__(/*! raw-loader!./support-meal-history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/support-meal-history/support-meal-history.page.html"),
            styles: [__webpack_require__(/*! ./support-meal-history.page.scss */ "./src/app/pages/support-meal-history/support-meal-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_http_test_service__WEBPACK_IMPORTED_MODULE_2__["HttpTestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], SupportMealHistoryPage);
    return SupportMealHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-support-meal-history-support-meal-history-module-es5.js.map