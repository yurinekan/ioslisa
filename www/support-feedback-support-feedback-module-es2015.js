(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-feedback-support-feedback-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/support-feedback/support-feedback.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/support-feedback/support-feedback.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <style>\n  \n  img {\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0px;\n    max-width: 60%;\n    height: auto;\n    margin-bottom: 10px;\n\n  }\n\n</style>\n\n<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>Feedback</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"position: relative;\">  \n    <div class=\"id_div\">\n        <div class=\"id_data\">\n          <ion-avatar class=\"ion-margin-start ion-margin-end\" slot=\"start\" (click)=\"changePicture()\">\n              <img *ngIf=\"profile_picture_url == null\" class=\"avatar\" src=\"../../../assets/imgs/unknown_user.png\">\n              <img *ngIf=\"profile_picture_url != null\" class=\"avatar\" src={{profile_picture_url}}>\n              <!--  <img src=\"../../../assets/icon/edit.png\" >   ##PARADO NO ICONE DE ADD OU CANETA -->\n          </ion-avatar>\n          <div class=\"id_data_desc\">\n             <ion-label class=\"my_label name\" [(ngModel)]=\"nome\" ngDefaultControl>{{nome}}</ion-label><br>\n             <br><ion-label class=\"top last data\" [(ngModel)]=\"refeicao\" ngDefaultControl>Refeição:<ion-label class=\"refeicao\">{{ meal_type }}</ion-label></ion-label>\n          </div>\n          <ion-label class=\"ion-text-end size-last update\" [(ngModel)]=\"ultimamedicao\" ngDefaultControl><ion-label class=\"date-time\">Data e Hora</ion-label><br> <ion-label class=\"last\">{{ created_at_date }}<br>{{ created_at_time}} </ion-label></ion-label>  \n        </div>\n            <!-- <ion-label>Última medição 15/01/2019</ion-label> -->\n            \n      </div>\n    <form [formGroup]=\"editMeal\" (ngSubmit)=\"evaluation()\">\n        <div class=\"plate_demo\" >           \n          <img class=\"photo\" src=\"{{base_url}}{{photo_meal}}\">\n        </div>\n        <div class=\"ion-text-center text\" style=\"position: relative;height: auto;color: #003d7a;border-style: solid; border-color:rgb(211, 211, 211); border-width: 1px;  margin-bottom: 0vh; font-size: -webkit-xxx-large; width: 92%;\n        margin-left: 14px;padding-left: 10px; padding-right: 10px;border-radius: 10px;\">\n          <div style=\"display: flex;height: 15px;\"><h6 style=\"color:#00b3b1;text-align: left; margin-top: 1px;margin-bottom: 1px\">COMENTÁRIO: </h6>&nbsp;<h6 style=\"color:black;text-align: left; margin-top: 1px;margin-bottom: 1px;\">{{remainingChars}} caracteres restantes</h6></div>\n          <ion-item style=\"position: relative;border-style: solid; border-color:rgb(211, 211, 211); border-width: 1px;border-radius: 10px;\">\n            <ion-textarea maxLength =\"295\" (ionChange)=\"CommentChange($event)\" class=\"text-area\" [(ngModel)]=\"desc\" formControlName=\"description\" rows=\"6\" cols=\"20\" placeholder=\"Escreva aqui o seu comentário\" ></ion-textarea>\n          </ion-item>\n        </div>\n        <ion-row style=\"position: relative;margin-right: 5%;padding-top: 3%;\" justify-content-end>\n          <div class = \"bottom-buttons\" text-right>\n            <input type=\"hidden\" formControlName=\"id\" [(ngModel)] = \"id_meal\">\n            <ion-button (click)=\"cancel()\" color=\"secondary\" style=\"width: 86px; height: 26px;\">Cancelar</ion-button>  \n            <ion-button type=\"submit\" color=\"secondary\" style=\"width: 86px; height: 26px;\">Enviar</ion-button>\n          </div>\n        </ion-row>\n      </form>\n  </ion-grid>    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/support-feedback/support-feedback.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/support-feedback/support-feedback.module.ts ***!
  \*************************************************************/
/*! exports provided: SupportFeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportFeedbackPageModule", function() { return SupportFeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _support_feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support-feedback.page */ "./src/app/support-feedback/support-feedback.page.ts");







const routes = [
    {
        path: '',
        component: _support_feedback_page__WEBPACK_IMPORTED_MODULE_6__["SupportFeedbackPage"]
    }
];
let SupportFeedbackPageModule = class SupportFeedbackPageModule {
};
SupportFeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_support_feedback_page__WEBPACK_IMPORTED_MODULE_6__["SupportFeedbackPage"]]
    })
], SupportFeedbackPageModule);



/***/ }),

/***/ "./src/app/support-feedback/support-feedback.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/support-feedback/support-feedback.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  --ion-grid-padding: 0 !important;\n}\n\nion-avatar {\n  -webkit-margin-start: 2.5vw !important;\n          margin-inline-start: 2.5vw !important;\n}\n\nimg.avatar {\n  position: relative;\n  border: 4px solid white;\n  min-width: 20.85vw !important;\n  min-height: 20.85vw !important;\n  max-width: 20.85vw !important;\n  max-height: 20.85vw !important;\n  position: absolute;\n}\n\nion-label.first {\n  padding-left: 8vw;\n  opacity: 0.7;\n}\n\nion-label.second {\n  padding-left: 3vw;\n}\n\nion-label.last {\n  font-size: 0.9em;\n  font-family: Roboto-Regular;\n}\n\nion-label.size-last {\n  font-size: 12px;\n}\n\nion-label.name {\n  font-size: 1.3em;\n}\n\nion-label.data {\n  font-size: 1em;\n}\n\nion-label.update {\n  width: -webkit-fill-available;\n  margin-right: 2vw;\n  position: relative;\n}\n\nion-label.refeicao {\n  text-transform: uppercase;\n}\n\nion-label.date-time {\n  text-transform: uppercase !important;\n  font-size: 0.8em;\n}\n\ndiv.plate_demo {\n  padding: 5%;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  position: relative;\n}\n\ndiv.bottom-buttons {\n  margin-top: 0vh;\n}\n\ndiv.bottom-buttons ion-button {\n  width: 86px;\n  height: 26px;\n  margin-bottom: 5vh;\n}\n\ndiv.text {\n  height: 20vh;\n}\n\nh6 {\n  font-size: 0.25em;\n}\n\n.photo {\n  border-style: solid;\n  border-color: #3db6c5;\n  border-width: 10px;\n  border-radius: 20px;\n  top: 0;\n  bottom: 10vh;\n  left: 0;\n  right: 0;\n  min-width: 100%;\n  max-width: 100%;\n  max-height: 40vh;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 40vh;\n  margin: auto;\n  overflow: auto;\n  orientation: portrait;\n}\n\n.grid_meal {\n  max-height: 70%;\n}\n\n.top {\n  margin-top: 2vh;\n}\n\n.id_div {\n  display: -webkit-box;\n  display: flex;\n  background: #3db6c5 !important;\n}\n\n.id_data {\n  display: -webkit-box;\n  display: flex;\n  height: 12.2vh;\n  margin-top: 1vh;\n}\n\n.id_data_desc {\n  padding-left: 7.5vh;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-bottom: 5%;\n  position: relative;\n}\n\n.right {\n  margin-left: 15%;\n  margin-right: 2vh;\n  max-width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9zdXBwb3J0LWZlZWRiYWNrL3N1cHBvcnQtZmVlZGJhY2sucGFnZS5zY3NzIiwic3JjL2FwcC9zdXBwb3J0LWZlZWRiYWNrL3N1cHBvcnQtZmVlZGJhY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7QUNDSjs7QURDQTtFQUNJLHNDQUFBO1VBQUEscUNBQUE7QUNFSjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDRVI7O0FER0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNBUjs7QURFSTtFQUNJLGlCQUFBO0FDQVI7O0FERUk7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0FDQVI7O0FERUk7RUFDSSxlQUFBO0FDQVI7O0FERUk7RUFDSSxnQkFBQTtBQ0FSOztBREVJO0VBQ0ksY0FBQTtBQ0FSOztBREVJO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FERUk7RUFDSSx5QkFBQTtBQ0FSOztBREVJO0VBQ0ksb0NBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREtJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRlI7O0FES0k7RUFDSSxlQUFBO0FDSFI7O0FESVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRlo7O0FES0k7RUFDSSxZQUFBO0FDSFI7O0FET0E7RUFDSyxpQkFBQTtBQ0pMOztBRE1BO0VBRUksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtBQ0xKOztBRE9BO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7QUNKSjs7QURPQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSko7O0FETUE7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9zdXBwb3J0LWZlZWRiYWNrL3N1cHBvcnQtZmVlZGJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWR7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5pb24tYXZhdGFye1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDIuNXZ3ICFpbXBvcnRhbnQ7XG59XG5pbWd7XG4gICAgJi5hdmF0YXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gICAgICAgIG1pbi13aWR0aDogMjAuODV2dyFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwLjg1dnchaW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IDIwLjg1dnchaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMC44NXZ3IWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbn1cblxuaW9uLWxhYmVse1xuICAgICYuZmlyc3R7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOHZ3O1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICAgICYuc2Vjb25ke1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDN2dztcbiAgICB9XG4gICAgJi5sYXN0e1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXI7XG4gICAgfVxuICAgICYuc2l6ZS1sYXN0e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgICYubmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB9XG4gICAgJi5kYXRhe1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gICAgJi51cGRhdGV7XG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAmLnJlZmVpY2Fve1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICAmLmRhdGUtdGltZXtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBcbiAgICB9XG59XG5kaXZ7XG4gICAgJi5wbGF0ZV9kZW1ve1xuICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgcGFkZGluZy10b3A6IDIlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIFxuICAgICYuYm90dG9tLWJ1dHRvbnN7XG4gICAgICAgIG1hcmdpbi10b3A6IDB2aDtcbiAgICAgICAgJiBpb24tYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDg2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi50ZXh0e1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgfVxuICAgIFxufSAgICBcbmg2e1xuICAgICBmb250LXNpemU6IDAuMjVlbTtcbn1cbi5waG90b3tcbiAgICAvL2JvcmRlciBlZmZlY3RcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzNkYjZjNTtcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAvL3Bvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAxMHZoO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6MDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDQwdmg7XG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xuICAgIG1pbi1oZWlnaHQ6IDQwdmg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG9yaWVudGF0aW9uOiBwb3J0cmFpdDtcbn1cblxuLmdyaWRfbWVhbHtcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XG59XG5cbi50b3B7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xufVxuLmlkX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICMzZGI2YzUgIWltcG9ydGFudDtcbiAgICBcbn1cbi5pZF9kYXRhe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMi4ydmg7XG4gICAgbWFyZ2luLXRvcDogMXZoO1xufVxuLmlkX2RhdGFfZGVzY3tcbiAgICBwYWRkaW5nLWxlZnQ6IDcuNXZoO1xuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbn1cbi5yaWdodHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIG1hcmdpbi1yaWdodDogMnZoO1xuICAgIG1heC13aWR0aDogMzAlO1xuXG59IiwiaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDIuNXZ3ICFpbXBvcnRhbnQ7XG59XG5cbmltZy5hdmF0YXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICBtaW4td2lkdGg6IDIwLjg1dncgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMjAuODV2dyAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDIwLjg1dncgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjAuODV2dyAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1sYWJlbC5maXJzdCB7XG4gIHBhZGRpbmctbGVmdDogOHZ3O1xuICBvcGFjaXR5OiAwLjc7XG59XG5pb24tbGFiZWwuc2Vjb25kIHtcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XG59XG5pb24tbGFiZWwubGFzdCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbn1cbmlvbi1sYWJlbC5zaXplLWxhc3Qge1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tbGFiZWwubmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5pb24tbGFiZWwuZGF0YSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuaW9uLWxhYmVsLnVwZGF0ZSB7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBtYXJnaW4tcmlnaHQ6IDJ2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWxhYmVsLnJlZmVpY2FvIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmlvbi1sYWJlbC5kYXRlLXRpbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbmRpdi5wbGF0ZV9kZW1vIHtcbiAgcGFkZGluZzogNSU7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5kaXYuYm90dG9tLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAwdmg7XG59XG5kaXYuYm90dG9tLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbn1cbmRpdi50ZXh0IHtcbiAgaGVpZ2h0OiAyMHZoO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMC4yNWVtO1xufVxuXG4ucGhvdG8ge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMzZGI2YzU7XG4gIGJvcmRlci13aWR0aDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDEwdmg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNDB2aDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWluLWhlaWdodDogNDB2aDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3JpZW50YXRpb246IHBvcnRyYWl0O1xufVxuXG4uZ3JpZF9tZWFsIHtcbiAgbWF4LWhlaWdodDogNzAlO1xufVxuXG4udG9wIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4uaWRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogIzNkYjZjNSAhaW1wb3J0YW50O1xufVxuXG4uaWRfZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTIuMnZoO1xuICBtYXJnaW4tdG9wOiAxdmg7XG59XG5cbi5pZF9kYXRhX2Rlc2Mge1xuICBwYWRkaW5nLWxlZnQ6IDcuNXZoO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmlnaHQge1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDJ2aDtcbiAgbWF4LXdpZHRoOiAzMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/support-feedback/support-feedback.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/support-feedback/support-feedback.page.ts ***!
  \***********************************************************/
/*! exports provided: SupportFeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportFeedbackPage", function() { return SupportFeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let SupportFeedbackPage = class SupportFeedbackPage {
    constructor(router, service, alertController) {
        this.router = router;
        this.service = service;
        this.alertController = alertController;
        this.base_url = `${src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["constants"].baseUrlProd}`;
        this.maxChars = 295;
        this.charsUsed = 0;
        this.remainingChars = this.maxChars - this.charsUsed;
        this.user_pic_url = window.sessionStorage.getItem("user_image_url");
        this.photo_meal = window.sessionStorage.getItem("image_file_name");
        this.profile_picture_url = `${src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["constants"].baseUrlProd}${this.user_pic_url}`;
    }
    ngOnInit() {
        this.editMeal = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            score: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.id_meal = window.sessionStorage.getItem('id_meal');
        this.array_time = moment__WEBPACK_IMPORTED_MODULE_7__(window.sessionStorage.getItem('meal_created_at')).format('DD/MM/YYYY h:mm').split(' ');
        ;
        this.created_at_date = this.array_time[0];
        this.created_at_time = this.array_time[1];
        this.nome = window.sessionStorage.getItem("user_name");
        this.nome = this.nome.split(' ').length > 2 ? this.nome.split(' ').slice(0, -1).join(' ') : this.nome;
        this.meal_type = window.sessionStorage.getItem('meal_type');
        this.desc = window.sessionStorage.getItem('description') == 'null' ? '' : window.sessionStorage.getItem('description');
        console.log("ESSE É A DESCRICCCC " + this.desc);
        console.log("ESSE É A ID MEAL " + window.sessionStorage.getItem('id_meal'));
    }
    ionViewWillEnter() {
        this.header1 = window.sessionStorage.getItem('uid');
        this.header2 = window.sessionStorage.getItem('access-token');
        this.header3 = window.sessionStorage.getItem('client');
        if (this.desc == null || this.desc == 'null') {
            this.descrip = false;
            this.descrip2 = true;
        }
        else {
            this.descrip = true;
            this.descrip2 = false;
        }
        //this.desc = window.sessionStorage.getItem('description');
        console.log("ESSES SÃO OS HEADERS!" + this.header1, this.header2, this.header3);
    }
    submitForm() {
        this.service.sendFeedback('api/v1/meals/' + window.sessionStorage.getItem('id_meal'), this.editMeal, this.header1, this.header2, this.header3).subscribe(resp => {
            console.log(JSON.stringify(resp.body));
            this.clear();
            this.router.navigateByUrl('support-list');
        });
    }
    cancel() {
        this.clear();
        this.router.navigateByUrl('support-list');
    }
    clear() {
        window.sessionStorage.removeItem("user_image_url");
        window.sessionStorage.removeItem("user_name");
        window.sessionStorage.removeItem('meal_type');
        window.sessionStorage.removeItem('meal_created_at');
        window.sessionStorage.removeItem("image_file_name");
        window.sessionStorage.removeItem('id_meal');
        window.sessionStorage.removeItem('description');
    }
    evaluation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Avalie esta refeição',
                inputs: [
                    {
                        name: '1',
                        type: 'radio',
                        label: '1 ponto',
                        value: '1',
                    },
                    {
                        name: '2',
                        type: 'radio',
                        label: '2 pontos',
                        value: '2'
                    },
                    {
                        name: '3',
                        type: 'radio',
                        label: '3 pontos',
                        value: '3'
                    },
                    {
                        name: '4',
                        type: 'radio',
                        label: '4 pontos',
                        value: '4'
                    },
                    {
                        name: '5',
                        type: 'radio',
                        label: '5 pontos',
                        value: '5'
                    },
                    {
                        name: '6',
                        type: 'radio',
                        label: '6 pontos',
                        value: '6'
                    },
                    {
                        name: '7',
                        type: 'radio',
                        label: '7 pontos',
                        value: '7'
                    },
                    {
                        name: '8',
                        type: 'radio',
                        label: '8 pontos',
                        value: '8'
                    },
                    {
                        name: '9',
                        type: 'radio',
                        label: '9 pontos',
                        value: '9'
                    },
                    {
                        name: '10',
                        type: 'radio',
                        label: '10 pontos',
                        value: '10'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Ok',
                        role: 'confirm',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.onDidDismiss().then((dataReturned) => {
                if ((dataReturned.data.values !== undefined && dataReturned.data.values !== null) && dataReturned.role == 'confirm') {
                    this.editMeal.value.score = parseInt(dataReturned.data.values);
                    this.submitForm();
                }
                else {
                    this.presentAlert();
                }
            });
            yield alert.present();
        });
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atenção',
                message: 'Antes de enviar você deve atribuir uma nota.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    CommentChange(e) {
        this.remainingChars = this.maxChars - e.detail.value.length;
    }
};
SupportFeedbackPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_test_service__WEBPACK_IMPORTED_MODULE_3__["HttpTestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
SupportFeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support-feedback',
        template: __webpack_require__(/*! raw-loader!./support-feedback.page.html */ "./node_modules/raw-loader/index.js!./src/app/support-feedback/support-feedback.page.html"),
        styles: [__webpack_require__(/*! ./support-feedback.page.scss */ "./src/app/support-feedback/support-feedback.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _http_test_service__WEBPACK_IMPORTED_MODULE_3__["HttpTestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], SupportFeedbackPage);



/***/ })

}]);
//# sourceMappingURL=support-feedback-support-feedback-module-es2015.js.map