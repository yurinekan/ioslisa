(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-additional-data-additional-data-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/additional-data/additional-data.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/additional-data/additional-data.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>additional_data</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/additional-data/additional-data.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/additional-data/additional-data.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdditionalDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalDataPageModule", function() { return AdditionalDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _additional_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./additional-data.page */ "./src/app/pages/additional-data/additional-data.page.ts");







var routes = [
    {
        path: '',
        component: _additional_data_page__WEBPACK_IMPORTED_MODULE_6__["AdditionalDataPage"]
    }
];
var AdditionalDataPageModule = /** @class */ (function () {
    function AdditionalDataPageModule() {
    }
    AdditionalDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_additional_data_page__WEBPACK_IMPORTED_MODULE_6__["AdditionalDataPage"]]
        })
    ], AdditionalDataPageModule);
    return AdditionalDataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/additional-data/additional-data.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/additional-data/additional-data.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGl0aW9uYWwtZGF0YS9hZGRpdGlvbmFsLWRhdGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/additional-data/additional-data.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/additional-data/additional-data.page.ts ***!
  \***************************************************************/
/*! exports provided: AdditionalDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalDataPage", function() { return AdditionalDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdditionalDataPage = /** @class */ (function () {
    function AdditionalDataPage() {
    }
    AdditionalDataPage.prototype.ngOnInit = function () {
    };
    AdditionalDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-additional-data',
            template: __webpack_require__(/*! raw-loader!./additional-data.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/additional-data/additional-data.page.html"),
            styles: [__webpack_require__(/*! ./additional-data.page.scss */ "./src/app/pages/additional-data/additional-data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdditionalDataPage);
    return AdditionalDataPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-additional-data-additional-data-module-es5.js.map