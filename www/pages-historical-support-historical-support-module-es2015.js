(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-historical-support-historical-support-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/historical-support/historical-support.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/historical-support/historical-support.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    ion-card-content {\n      margin-top: 3%;\n      margin-left: 3%;\n      margin-right: 3%;\n      color: white;\n      background-color: #31bcd4;\n      text-align: center;\n      padding-left: 0%;\n    }\n\n    ion-card {\n      margin-top: 0%;\n      margin-bottom: 0%;\n\n    }\n\n    ion-list {\n      padding-top: 3px;\n      padding-bottom: 3px;\n    }\n  </style>\n\n<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n      <ion-title>Histórico de Avaliações</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n\n<ion-content>\n\n    <ion-card-content>\n        Avaliações em Andamento\n    </ion-card-content>\n    <div *ngIf=\"evaluationDoing\">\n    <ion-list *ngFor=\"let item of toDoList\">\n      <ion-card tappable (click)=\"changePage(item.id, constantUrl+item.image_url, item.description)\">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src= \"{{constantUrl}}{{item.image_url}}\">\n          </ion-thumbnail>\n          <h2>&nbsp; {{item.meal_type}} </h2>\n        </ion-item>\n        </ion-card>\n      </ion-list>\n    </div>\n  \n        <ion-card-content>\n            Avaliações Finalizadas\n        </ion-card-content>\n        <div *ngIf=\"evaluationDone\">\n        <ion-list *ngFor=\"let item of doneList\">\n          <ion-card tappable (click)=\"changePage(item.id, constantUrl+item.image_url, item.description)\">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src=\"{{constantUrl}}{{item.image_url}}\">\n            </ion-thumbnail>\n            <h2>&nbsp; {{item.meal_type}} </h2>\n          </ion-item>\n          </ion-card>\n        </ion-list>\n       </div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/historical-support/historical-support.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/historical-support/historical-support.module.ts ***!
  \***********************************************************************/
/*! exports provided: HistoricalSupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricalSupportPageModule", function() { return HistoricalSupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _historical_support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historical-support.page */ "./src/app/pages/historical-support/historical-support.page.ts");







const routes = [
    {
        path: '',
        component: _historical_support_page__WEBPACK_IMPORTED_MODULE_6__["HistoricalSupportPage"]
    }
];
let HistoricalSupportPageModule = class HistoricalSupportPageModule {
};
HistoricalSupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_historical_support_page__WEBPACK_IMPORTED_MODULE_6__["HistoricalSupportPage"]]
    })
], HistoricalSupportPageModule);



/***/ }),

/***/ "./src/app/pages/historical-support/historical-support.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/historical-support/historical-support.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --overflow: scroll !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy9oaXN0b3JpY2FsLXN1cHBvcnQvaGlzdG9yaWNhbC1zdXBwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlzdG9yaWNhbC1zdXBwb3J0L2hpc3RvcmljYWwtc3VwcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yaWNhbC1zdXBwb3J0L2hpc3RvcmljYWwtc3VwcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLW92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IHNjcm9sbCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/historical-support/historical-support.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/historical-support/historical-support.page.ts ***!
  \*********************************************************************/
/*! exports provided: HistoricalSupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricalSupportPage", function() { return HistoricalSupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_http_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");





let HistoricalSupportPage = class HistoricalSupportPage {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.toDoList = [];
        this.doneList = [];
        this.constantUrl = `${src_constants_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].baseUrlProd}`;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.toDoList = [];
        this.doneList = [];
        this.header1 = window.sessionStorage.getItem('uid');
        this.header2 = window.sessionStorage.getItem('access-token');
        this.header3 = window.sessionStorage.getItem('client');
        console.log("ESSES SÃO OS HEADERS!" + this.header1, this.header2, this.header3);
        this.service.getUserData("api/v1/get-all-meals-by-user", this.header1, this.header2, this.header3).subscribe(resp => {
            console.log("CAFÉ DA MANHÃ É" + JSON.stringify(resp.body));
            if (resp.body.meals_ongoing != undefined) {
                this.evaluationDoing = true;
                resp.body.meals_ongoing.forEach(element => {
                    this.toDoList.push(element);
                });
            }
            if (resp.body.meals_finalized != undefined) {
                this.evaluationDone = true;
                resp.body.meals_finalized.forEach(element => {
                    this.doneList.push(element);
                });
            }
        });
    }
    ;
    changePage(id, keepImage, description) {
        window.sessionStorage.setItem('id_meal', id);
        window.sessionStorage.setItem('image_file_name', keepImage);
        window.sessionStorage.setItem('description', description);
        this.router.navigate(['support-meal-history']);
    }
};
HistoricalSupportPage.ctorParameters = () => [
    { type: src_app_http_test_service__WEBPACK_IMPORTED_MODULE_2__["HttpTestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HistoricalSupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historical-support',
        template: __webpack_require__(/*! raw-loader!./historical-support.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/historical-support/historical-support.page.html"),
        styles: [__webpack_require__(/*! ./historical-support.page.scss */ "./src/app/pages/historical-support/historical-support.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_http_test_service__WEBPACK_IMPORTED_MODULE_2__["HttpTestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HistoricalSupportPage);



/***/ })

}]);
//# sourceMappingURL=pages-historical-support-historical-support-module-es2015.js.map