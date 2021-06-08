(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-photo-register-photo-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/photo-register/photo-register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/photo-register/photo-register.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n  <ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n      <ion-title>Registrar refeição</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<!-- <ion-content>\n  <div style=\"display:inline;\">\n    <div class=\"plate_demo\">\n        <div class=\"sentence\"><h5>ENQUADRE SEU PRATO NO CÍRCULO E TIRE A FOTO</h5>  </div>\n          \n      <img src=\"../../../assets/imgs/foto comida.png\">\n    </div>\n    <div class=\"frame_fab_camera\">\n      <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n            <ion-fab-button (click)=\"initCamera()\">\n              <ion-icon name=\"camera\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab>\n    </div>\n  </div>\n  \n       \n</ion-content>  -->\n\n\n \n\n<ion-content>\n   \n  <div *ngIf=\"!photo_meal\" style=\"display:inline;\">\n    <div class=\"plate_demo\">\n      <div class=\"sentence\">\n        <h5>ENQUADRE SEU PRATO NO CÍRCULO E TIRE A FOTO</h5> \n      </div>  \n      <img src=\"../../../assets/imgs/foto comida.png\">\n    </div>\n    <div class=\"frame_fab_camera\" *ngIf=\"botao\">\n      <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n        <ion-fab-button (click)=\"initCamera()\">\n          <ion-icon name=\"camera\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </div>\n  </div>\n  <div *ngIf=\"photo_meal\" style=\"display:inline;\">\n    <form [formGroup]=\"sendMeal\" (ngSubmit)=\"submitForm()\">  \n      <div class=\"frame_plate\">           \n        <img class=\"plate\" src=\"{{photo_meal}}\" >\n        <input type=\"hidden\" formControlName=\"image\" [(ngModel)] = \"image\">\n      </div>      \n      <div class=\"ion-text-center\" class=\"form_photo\">\n        <h6 style=\"text-align: center; margin-top: 1px;\">MARQUE A REFEIÇÃO</h6>\n        <ion-list lines=\"none\">\n          <ion-radio-group formControlName=\"meal_type\">    \n            <ion-item>          \n              <ion-radio value=0></ion-radio>\n              <ion-label>Café da manhã</ion-label>\n            </ion-item>    \n            <ion-item>          \n              <ion-radio value=1></ion-radio>\n              <ion-label>Almoço</ion-label>\n            </ion-item>\n            <ion-item>          \n              <ion-radio value=2></ion-radio>\n              <ion-label>Jantar</ion-label>\n            </ion-item>\n            <ion-item>          \n              <ion-radio value=3></ion-radio>\n              <ion-label>Ceia</ion-label>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n      </div>\n      <div class = \"central\" text-center style=\"margin-left: 45%;\"> \n        <ion-button type=\"submit\" color=\"secondary\" style=\"position: absolute;margin-top: 55%;width: 86px; height: 26px;\">Enviar</ion-button> \n      </div>\n    </form>    \n  </div>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/photo-register/photo-register.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/photo-register/photo-register.module.ts ***!
  \***************************************************************/
/*! exports provided: PhotoRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoRegisterPageModule", function() { return PhotoRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _photo_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photo-register.page */ "./src/app/pages/photo-register/photo-register.page.ts");







var routes = [
    {
        path: '',
        component: _photo_register_page__WEBPACK_IMPORTED_MODULE_6__["PhotoRegisterPage"]
    }
];
var PhotoRegisterPageModule = /** @class */ (function () {
    function PhotoRegisterPageModule() {
    }
    PhotoRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_photo_register_page__WEBPACK_IMPORTED_MODULE_6__["PhotoRegisterPage"]]
        })
    ], PhotoRegisterPageModule);
    return PhotoRegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/photo-register/photo-register.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/photo-register/photo-register.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  height: 100vh;\n  overflow-y: hidden;\n}\n\nion-icon {\n  height: 70%;\n  width: 70%;\n}\n\nion-fab {\n  margin-left: -12%;\n  align-self: center;\n  position: absolute;\n}\n\nion-fab-button {\n  --border-style: solid;\n  --border-width: 3px;\n  --border-color: rgb(170, 168, 168);\n  --background:var(--ion-toolbar-background);\n  height: 15vh;\n  width: 15vh;\n}\n\nion-label {\n  margin-left: 3%;\n}\n\n.plate_demo {\n  margin-top: 5vh;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\n.plate {\n  width: 100%;\n  height: 100%;\n}\n\n.frame_plate {\n  margin-top: 2vh;\n  margin-left: 2%;\n  margin-right: 2%;\n  border-style: solid !important;\n  border-width: 10px !important;\n  border-color: #00b3b1 !important;\n  border-radius: 10px !important;\n  height: 50vh !important;\n  min-height: 50vh !important;\n  max-height: 50vh !important;\n}\n\n.form_photo {\n  color: #003d7a;\n  border-style: solid;\n  border-color: #EEEEEE;\n  margin-bottom: 20px;\n  font-size: -webkit-xxx-large;\n  margin-top: 2%;\n  margin-left: 2%;\n  margin-right: 2%;\n  position: absolute;\n  width: 96%;\n}\n\nh5 {\n  font-size: 18px;\n  color: white;\n}\n\n.sentence {\n  z-index: 100;\n  position: absolute;\n  padding-top: 10%;\n  margin: 20%;\n}\n\n.frame_fab_camera {\n  position: relative;\n  height: 24%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\nhtml.camera-open ion-app,\nhtml.camera-open ion-content {\n  height: 70px !important;\n}\n\nhtml.camera-open ion-content {\n  --overflow: hidden !important;\n}\n\nhtml.camera-open ion-header,\nhtml.camera-open ion-footer,\nhtml.camera-open ion-content > *:not(#close-scanner-button) {\n  display: none;\n}\n\nhtml.camera-open #close-scanner-button {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC9uZWthbi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy9waG90by1yZWdpc3Rlci9waG90by1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bob3RvLXJlZ2lzdGVyL3Bob3RvLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0csV0FBQTtFQUNBLFVBQUE7QUNFSDs7QURBQTtFQUNJLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBRUksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lKOztBRERBO0VBQ0ssV0FBQTtFQUNELFlBQUE7QUNJSjs7QUREQTtFQUVJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0lKOztBREZBO0VBRUksZUFBQTtFQUNBLFlBQUE7QUNJSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0tKOztBRERJOztFQUVJLHVCQUFBO0FDSVI7O0FEREk7RUFDSSw2QkFBQTtBQ0dSOztBREFJOzs7RUFHSSxhQUFBO0FDRVI7O0FEQ0k7RUFDSSxjQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9waG90by1yZWdpc3Rlci9waG90by1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbmlvbi1pY29ue1xuICAgaGVpZ2h0OiA3MCU7XG4gICB3aWR0aDogNzAlO1xufVxuaW9uLWZhYntcbiAgICBtYXJnaW4tbGVmdDogLTEyJTtcbiAgICAvL21hcmdpbi1ib3R0b206IDIwJTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuaW9uLWZhYi1idXR0b257XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYigxNzAsIDE2OCwgMTY4KTtcbiAgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLXRvb2xiYXItYmFja2dyb3VuZCk7XG4gICAgaGVpZ2h0OiAxNXZoO1xuICAgIHdpZHRoOiAxNXZoOyBcbn1cbmlvbi1sYWJlbHtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG59XG4ucGxhdGVfZGVtb3tcbiAgICBcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5wbGF0ZXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG5cbi5mcmFtZV9wbGF0ZXtcbiAgIFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDBiM2IxICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTB2aCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG59XG4uZm9ybV9waG90b3tcbiAgICBjb2xvcjogIzAwM2Q3YTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI0VFRUVFRTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogLXdlYmtpdC14eHgtbGFyZ2U7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA5NiU7XG59XG5oNXtcbiAgICBcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgXG59XG4uc2VudGVuY2V7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIG1hcmdpbjogMjAlO1xufVxuLmZyYW1lX2ZhYl9jYW1lcmF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjQlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5odG1sLmNhbWVyYS1vcGVuIHtcblxuICAgIGlvbi1hcHAsXG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIsXG4gICAgaW9uLWZvb3RlcixcbiAgICBpb24tY29udGVudCA+ICo6bm90KCNjbG9zZS1zY2FubmVyLWJ1dHRvbikge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNjbG9zZS1zY2FubmVyLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuIiwiaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbmlvbi1pY29uIHtcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiA3MCU7XG59XG5cbmlvbi1mYWIge1xuICBtYXJnaW4tbGVmdDogLTEyJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogM3B4O1xuICAtLWJvcmRlci1jb2xvcjogcmdiKDE3MCwgMTY4LCAxNjgpO1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGhlaWdodDogMTV2aDtcbiAgd2lkdGg6IDE1dmg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cblxuLnBsYXRlX2RlbW8ge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLnBsYXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZyYW1lX3BsYXRlIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwYjNiMSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTB2aCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcbn1cblxuLmZvcm1fcGhvdG8ge1xuICBjb2xvcjogIzAwM2Q3YTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjRUVFRUVFO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IC13ZWJraXQteHh4LWxhcmdlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5NiU7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZW50ZW5jZSB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBtYXJnaW46IDIwJTtcbn1cblxuLmZyYW1lX2ZhYl9jYW1lcmEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjQlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaHRtbC5jYW1lcmEtb3BlbiBpb24tYXBwLFxuaHRtbC5jYW1lcmEtb3BlbiBpb24tY29udGVudCB7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xufVxuaHRtbC5jYW1lcmEtb3BlbiBpb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuaHRtbC5jYW1lcmEtb3BlbiBpb24taGVhZGVyLFxuaHRtbC5jYW1lcmEtb3BlbiBpb24tZm9vdGVyLFxuaHRtbC5jYW1lcmEtb3BlbiBpb24tY29udGVudCA+ICo6bm90KCNjbG9zZS1zY2FubmVyLWJ1dHRvbikge1xuICBkaXNwbGF5OiBub25lO1xufVxuaHRtbC5jYW1lcmEtb3BlbiAjY2xvc2Utc2Nhbm5lci1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/photo-register/photo-register.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/photo-register/photo-register.page.ts ***!
  \*************************************************************/
/*! exports provided: PhotoRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoRegisterPage", function() { return PhotoRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "./node_modules/@ionic-native/camera-preview/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_http_test_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/fesm5/ngx-image-compress.js");








var PhotoRegisterPage = /** @class */ (function () {
    function PhotoRegisterPage(service, route, platform, cameraPreview, router, fBuilder, loadingController, toastController, imageCompress) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.platform = platform;
        this.cameraPreview = cameraPreview;
        this.router = router;
        this.fBuilder = fBuilder;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.imageCompress = imageCompress;
        this.picture = "";
        this.cameraState = false;
        this.confirm_photo = false;
        // variaveis para troca de tela
        this.prato1 = false;
        this.prato2 = true;
        this.botao = true;
        this.form = false;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.photo) {
                _this.photo_meal = JSON.parse(params.photo);
                _this.image = _this.photo_meal;
                _this.imgResultBeforeCompress = _this.photo_meal;
                _this.imageCompress.compressFile(_this.photo_meal, 50, 40).then(function (result) {
                    _this.photo_meal = result;
                    _this.image = _this.photo_meal;
                });
            }
        });
    }
    PhotoRegisterPage.prototype.ngOnInit = function () {
        this.header1 = window.sessionStorage.getItem('uid');
        this.header2 = window.sessionStorage.getItem('access-token');
        this.header3 = window.sessionStorage.getItem('client');
        this.user_id = parseInt(sessionStorage.getItem('id'));
        console.log("ESSE É O ID" + this.user_id);
        //this.image_file_name = "https://cdn-img.health.com/sites/default/files/styles/large_16_9/public/1479761250/GettyImages-588978788.jpg?itok=-dDMVKmG"
        this.sendMeal = this.fBuilder.group({
            meal_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            /*       user_id: new FormControl(''), */
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
    };
    PhotoRegisterPage.prototype.ionViewDidEnter = function () {
        // let photo = this.route.snapshot.paramMap.get('picture');
        // if (photo){
        //   console.log(photo);
        //   this.prato1 = false;
        //   this.prato2 = true;
        //   this.botao = false;
        //   this.form = true;
        // }
    };
    PhotoRegisterPage.prototype.initCamera = function () {
        this.router.navigateByUrl('camera-view');
    };
    //metodo para abrir a tela 2, por enquanto ao apertar o botão de tirar a foto para teste
    PhotoRegisterPage.prototype.submitForm = function () {
        var _this = this;
        this.sendMeal.value.meal_type = parseInt(this.sendMeal.value.meal_type);
        /*Criação do loading e toast*/
        this.loadingController.create({
            message: 'Enviado refeição...'
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
        });
        this.toastController.create({
            message: 'Refeição enviado com sucesso.',
            duration: 4000,
            color: 'success'
        }).then(function (overlay) {
            _this.toast = overlay;
        });
        this.toastController.create({
            message: 'Ocorreu um erro ao enviar sua refeição, tente novamente mais tarde.',
            duration: 4000,
            color: 'warning'
        }).then(function (overlay) {
            _this.toastFail = overlay;
        });
        /*Fim da criação do loading e toast*/
        this.service.sendMeal("api/v1/meals", this.sendMeal, this.header1, this.header2, this.header3).subscribe(function (data) {
            console.log("BODY" + JSON.stringify(data));
            if (data.status === 200 || data.status === 201) {
                _this.loading.dismiss();
                _this.toast.present();
                _this.router.navigate(['home']);
            }
            else {
                _this.loading.dismiss();
                _this.toastFail.present();
                alert("ERRO NO UPDATE");
            }
        }, function (error) {
            //console.log("teste valendo junior");
            _this.loading.dismiss();
            _this.toastFail.present();
        });
    };
    PhotoRegisterPage.prototype.onTela = function () {
        // this.prato1 = false;
        // this.prato2 = true;
        // this.botao = false;
        // this.form = true;
    };
    PhotoRegisterPage.ctorParameters = function () { return [
        { type: src_app_http_test_service__WEBPACK_IMPORTED_MODULE_6__["HttpTestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PhotoRegisterPage.prototype, "canvasEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], PhotoRegisterPage.prototype, "content", void 0);
    PhotoRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-register',
            template: __webpack_require__(/*! raw-loader!./photo-register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/photo-register/photo-register.page.html"),
            styles: [__webpack_require__(/*! ./photo-register.page.scss */ "./src/app/pages/photo-register/photo-register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_http_test_service__WEBPACK_IMPORTED_MODULE_6__["HttpTestService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"]])
    ], PhotoRegisterPage);
    return PhotoRegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-photo-register-photo-register-module-es5.js.map