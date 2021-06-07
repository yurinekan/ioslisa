(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historical-tab1-historical-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/historical-tab1/historical-tab1.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/historical-tab1/historical-tab1.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<style>\n    ion-card-content {\n      margin-top: 3%;\n      margin-left: 3%;\n      margin-right: 3%;\n      color: white;\n      background-color: #31bcd4;\n      text-align: center;\n      padding-left: 0%;\n      padding-bottom: 4px;\n      padding-top: 4px;\n    }\n  </style>\n\n\n<ion-content>\n  \n    <ion-card-content>\n        Café da Manhã -&nbsp;{{date}} \n    </ion-card-content>\n\n      <ion-card *ngIf=\"keepCafe\" tappable (click)=\"changePage(id_cafe, keepImageCafe, description_cafe)\">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src= \"{{keepImageCafe}}\">\n        </ion-thumbnail>\n        <h2>Refeição&nbsp;{{id_cafe}}</h2>\n        <input type=\"hidden\" [(ngModel)]=\"id_cafe\">\n        <input type=\"hidden\" [(ngModel)]=\"keepImageCafe\">\n        <input type=\"hidden\" [(ngModel)]=\"description_cafe\">\n      </ion-item>\n      </ion-card>\n\n      <ion-card-content>\n          Almoço -&nbsp;{{date}} \n      </ion-card-content>\n  \n        <ion-card *ngIf=\"keepAlmoco\" tappable (click)=\"changePage(id_almoco, keepImageAlmoco, description_almoco)\">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src=\"{{keepImageAlmoco}}\">\n          </ion-thumbnail>\n          <h2>Refeição 2</h2>\n          <input type=\"hidden\" [(ngModel)]=\"id_almoco\">\n          <input type=\"hidden\" [(ngModel)]=\"keepImageAlmoco\">\n          <input type=\"hidden\" [(ngModel)]=\"description_almoco\">\n        </ion-item>\n        </ion-card>\n\n        <ion-card-content>\n            Jantar -&nbsp;{{date}} \n        </ion-card-content>\n    \n          <ion-card *ngIf=\"keepJantar\" tappable (click)=\"changePage(id_jantar, keepImageJantar, description_jantar)\">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src=\"{{keepImageJantar}}\">\n            </ion-thumbnail>\n            <h2>Refeição 3</h2>\n            <input type=\"hidden\" [(ngModel)]=\"id_jantar\">\n            <input type=\"hidden\" [(ngModel)]=\"keepImageJantar\">\n            <input type=\"hidden\" [(ngModel)]=\"description_jantar\">\n          </ion-item>\n          </ion-card>\n\n          <ion-card-content>\n              Ceia -&nbsp;{{date}} \n          </ion-card-content>\n      \n            <ion-card *ngIf=\"keepCeia\" tappable (click)=\"changePage(id_ceia, keepImageCeia, description_ceia)\">\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src=\"{{keepImageCeia}}\">\n              </ion-thumbnail>\n              <h2>Refeição 4</h2>\n              <input type=\"hidden\" [(ngModel)]=\"id_ceia\">\n              <input type=\"hidden\" [(ngModel)]=\"keepImageCeia\">\n              <input type=\"hidden\" [(ngModel)]=\"description_ceia\">\n            </ion-item>\n            </ion-card>\n\n\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/historical-tab1/historical-tab1.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/historical-tab1/historical-tab1.module.ts ***!
  \*****************************************************************/
/*! exports provided: HistoricalTab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricalTab1PageModule", function() { return HistoricalTab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _historical_tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historical-tab1.page */ "./src/app/pages/historical-tab1/historical-tab1.page.ts");







var routes = [
    {
        path: '',
        component: _historical_tab1_page__WEBPACK_IMPORTED_MODULE_6__["HistoricalTab1Page"]
    }
];
var HistoricalTab1PageModule = /** @class */ (function () {
    function HistoricalTab1PageModule() {
    }
    HistoricalTab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_historical_tab1_page__WEBPACK_IMPORTED_MODULE_6__["HistoricalTab1Page"]]
        })
    ], HistoricalTab1PageModule);
    return HistoricalTab1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/historical-tab1/historical-tab1.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/historical-tab1/historical-tab1.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy9oaXN0b3JpY2FsLXRhYjEvaGlzdG9yaWNhbC10YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlzdG9yaWNhbC10YWIxL2hpc3RvcmljYWwtdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxpQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yaWNhbC10YWIxL2hpc3RvcmljYWwtdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudC1jYXJke1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4vLyAgICAgbWFyZ2luOiBhdXRvO1xuLy8gICAgIHBhZGRpbmctbGVmdDogMTZweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMGVtIDEwZW0gMCUgMCU7XG4vLyB9XG5oMntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn0iLCJoMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/historical-tab1/historical-tab1.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/historical-tab1/historical-tab1.page.ts ***!
  \***************************************************************/
/*! exports provided: HistoricalTab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricalTab1Page", function() { return HistoricalTab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_http_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/fesm5/ngx-image-compress.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _historical_tab_historical_tab_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../historical-tab/historical-tab.page */ "./src/app/pages/historical-tab/historical-tab.page.ts");








var HistoricalTab1Page = /** @class */ (function () {
    function HistoricalTab1Page(h, router, service, imageCompress) {
        this.h = h;
        this.router = router;
        this.service = service;
        this.imageCompress = imageCompress;
        this.window = false;
    }
    HistoricalTab1Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.keepImageCafe = null;
        this.keepImageAlmoco = null;
        this.keepImageJantar = null;
        this.keepImageCeia = null;
        this.keepCafe = null;
        this.keepAlmoco = null;
        this.keepJantar = null;
        this.keepCeia = null;
        this.id_cafe = null;
        this.id_almoco = null;
        this.id_jantar = null;
        this.id_ceia = null;
        this.description_cafe = null;
        this.description_almoco = null;
        this.description_jantar = null;
        this.description_ceia = null;
        window.sessionStorage.setItem('id_meal', "");
        window.sessionStorage.setItem('image_file_name', "");
        window.sessionStorage.setItem('description', "");
        this.header1 = window.sessionStorage.getItem('uid');
        this.header2 = window.sessionStorage.getItem('access-token');
        this.header3 = window.sessionStorage.getItem('client');
        this.date = moment__WEBPACK_IMPORTED_MODULE_3__(this.h.initDate).format('DD/MM/YYYY');
        this.service.getUserData("api/v1/get-meals/" + moment__WEBPACK_IMPORTED_MODULE_3__(this.h.initDate).format('YYYY-MM-DD'), this.header1, this.header2, this.header3).subscribe(function (data) {
            console.log("CAFÉ DA MANHÃ É" + JSON.stringify(data.body));
            //debugger
            data.body.forEach(function (element) {
                if (element.meal_type == "Café da Manhã") {
                    _this.keepCafe = true;
                    _this.keepImageCafe = "" + _constants_constants__WEBPACK_IMPORTED_MODULE_6__["constants"].baseUrlProd + element.image_url;
                    _this.id_cafe = element.id;
                    _this.description_cafe = element.description;
                }
                else if (element.meal_type == "Almoço") {
                    _this.keepAlmoco = true;
                    _this.keepImageAlmoco = "" + _constants_constants__WEBPACK_IMPORTED_MODULE_6__["constants"].baseUrlProd + element.image_url;
                    _this.id_almoco = element.id;
                    _this.description_almoco = element.description;
                }
                else if (element.meal_type == "Janta") {
                    _this.keepJantar = true;
                    _this.keepImageJantar = "" + _constants_constants__WEBPACK_IMPORTED_MODULE_6__["constants"].baseUrlProd + element.image_url;
                    _this.id_jantar = element.id;
                    _this.description_jantar = element.description;
                }
                else if (element.meal_type == "Ceia") {
                    _this.keepCeia = true;
                    _this.keepImageCeia = "" + _constants_constants__WEBPACK_IMPORTED_MODULE_6__["constants"].baseUrlProd + element.image_url;
                    _this.id_ceia = element.id;
                    _this.description_ceia = element.description;
                }
            });
        });
    };
    HistoricalTab1Page.prototype.changePage = function (id, keepImage, description) {
        window.sessionStorage.setItem('id_meal', id);
        window.sessionStorage.setItem('image_file_name', keepImage);
        window.sessionStorage.setItem('description', description);
        this.router.navigateByUrl('user-meal-history');
    };
    HistoricalTab1Page.prototype.ngOnInit = function () {
    };
    HistoricalTab1Page.ctorParameters = function () { return [
        { type: _historical_tab_historical_tab_page__WEBPACK_IMPORTED_MODULE_7__["HistoricalTabPage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_http_test_service__WEBPACK_IMPORTED_MODULE_2__["HttpTestService"] },
        { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_5__["NgxImageCompressService"] }
    ]; };
    HistoricalTab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-historical-tab1',
            template: __webpack_require__(/*! raw-loader!./historical-tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/historical-tab1/historical-tab1.page.html"),
            styles: [__webpack_require__(/*! ./historical-tab1.page.scss */ "./src/app/pages/historical-tab1/historical-tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_historical_tab_historical_tab_page__WEBPACK_IMPORTED_MODULE_7__["HistoricalTabPage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_http_test_service__WEBPACK_IMPORTED_MODULE_2__["HttpTestService"], ngx_image_compress__WEBPACK_IMPORTED_MODULE_5__["NgxImageCompressService"]])
    ], HistoricalTab1Page);
    return HistoricalTab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=historical-tab1-historical-tab1-module-es5.js.map