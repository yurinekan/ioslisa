(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/forgot-password/forgot-password.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/forgot-password/forgot-password.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal_form\" >\n  <form [formGroup]=\"ngForm_reset\" (ngSubmit)=\"recovery_password()\">\n    <ion-grid style=\"    height: fit-content!important;\">\n      <ion-row>\n        <ion-col align-self-left >\n            <h5>Informe seu e-mail para mudança de senha</h5>\n          <div >\n            <ion-item lines=\"none\">\n              <ion-input id='email' class=\"email_rescue_input\" name=\"email\" formControlName=\"email\" type=\"email\" placeholder=\"\" ngModel required></ion-input>\n            </ion-item>\n            \n          </div>\n          <ion-row class=\"row_buttons\" justify-content-center>\n            <ion-button class=\"modal_buttons\" (click)=\"close()\" >CANCELAR</ion-button> \n            <ion-button class=\"modal_buttons button_ok\" type=\"submit\" >OK</ion-button>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n  \n    \n    </ion-grid>\n  </form>\n</div>  \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content >\n  <ion-row class=\"ion-text-end top\">\n    <div (click)=\"about()\"class=\"ion-text-center top right div-flex\">\n      <img id = \"unifor\" src = \"../../../assets/imgs/unifor_flag.png\">\n      <img id = \"uece\" src = \"../../../assets/imgs/uece.png\">\n    </div>\n    </ion-row>\n  \n  <ion-row >\n    <img class=\"ion-text-center\" id =\"logo\" src = \"../../../assets/logo/lisalogo1.png\">\n  </ion-row>\n\n  <!-- <ion-row justify-content-center>\n    <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n      <ion-button class=\"centralize mid\" id=\"google_button\" expand=\"block\" (click)=\"doGoogleLogin()\">\n        <img id=\"google\" src = \"../../../assets/imgs/google_48px.png\">\n        <ion-text>Entrar com o Google</ion-text>\n      </ion-button>\n    </ion-col>  \n  </ion-row> -->\n  \n  <form [formGroup]=\"ngForm\" (ngSubmit)=\"login()\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            <div class=\"mid bottom\">\n              <ion-item lines=\"none\">\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input id='email' class=\"login_input\" formControlName=\"email\" type=\"email\" placeholder=\"\" ngModel required></ion-input>\n              </ion-item>\n              <ion-item lines=\"none\">\n                <ion-label position=\"floating\">Senha</ion-label>\n                <ion-input class=\"login_input\" formControlName=\"password\" type=\"password\" placeholder=\"\" (keyup.enter)=\"login()\" ngModel required></ion-input>\n              </ion-item>\n            </div>\n            <div class=\"mid\">\n                <ion-button id=\"login_button\" type = 'submit' expand=\"block\">ENTRAR</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-text-center\">\n          <ion-col>\n            <ion-button class=\"under\" routerLink=\"/register\" fill=\"clear\" >Cadastrar</ion-button> <br>\n            <ion-button class=\"under\" (click)=\"forgot_password()\" fill=\"clear\">Esqueci minha senha</ion-button>\n          </ion-col>  \n        </ion-row>\n       \n      </ion-grid>\n    </form>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/modals/forgot-password/forgot-password.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modals/forgot-password/forgot-password.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  --padding-start: 10px!important;\n}\n\nion-grid {\n  min-height: 100% !important;\n}\n\n.email_rescue_input {\n  --background:#b0d9e1;\n  border-radius: 7px !important;\n}\n\nh5 {\n  padding-left: 5%;\n  font-size: 15px;\n}\n\n.row_buttons {\n  margin-top: 5%;\n}\n\n.modal_form {\n  max-width: 95% !important;\n  min-height: 100% !important;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC9uZWthbi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9tb2RhbHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwrQkFBQTtBQ0FKOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtBQ0dKOztBRENBO0VBRUkseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taW5wdXR7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4IWltcG9ydGFudDtcbn1cbmlvbi1ncmlkIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcbn1cbi5lbWFpbF9yZXNjdWVfaW5wdXR7XG4gICAgLS1iYWNrZ3JvdW5kOiNiMGQ5ZTE7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4IWltcG9ydGFudDtcbiAgICBcbn1cbmg1IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5yb3dfYnV0dG9uc3tcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBcbiAgICBcbn1cbi5tb2RhbF9mb3Jte1xuICAgIFxuICAgIG1heC13aWR0aDogOTUlIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgXG59XG4iLCJpb24taW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHghaW1wb3J0YW50O1xufVxuXG5pb24tZ3JpZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmVtYWlsX3Jlc2N1ZV9pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDojYjBkOWUxO1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbn1cblxuaDUge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5yb3dfYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ubW9kYWxfZm9ybSB7XG4gIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modals/forgot-password/forgot-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modals/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_test_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http-test.service */ "./src/app/http-test.service.ts");






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(service, modalCtrl, keyboard, platform) {
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.keyboard = keyboard;
        this.platform = platform;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.ngForm_reset = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            redirect_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    };
    ForgotPasswordComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        setInterval(function () {
            if (_this.platform.is("cordova")) {
                var modalElement = document.getElementsByTagName('ion-modal')[0];
                var formElement = document.getElementsByClassName('form')[0];
                var inputFocusElement = document.getElementsByClassName('email_rescue_input has-focus')[0];
                if (inputFocusElement && modalElement) {
                    // modalElement.classList.add('TT');
                    // formElement.classList.add('adapter');
                }
                if ((inputFocusElement && modalElement) || (!inputFocusElement && modalElement)) {
                    // formElement.classList.remove('adapter');
                    // modalElement.classList.remove('TT');
                }
            }
        }, 100);
    };
    ForgotPasswordComponent.prototype.close = function () {
        var modalElement = document.getElementsByTagName('ion-modal')[0];
        modalElement.classList.remove('TT');
        this.modalCtrl.dismiss();
    };
    ForgotPasswordComponent.prototype.recovery_password = function () {
        //console.log(this.ngForm.value);
        this.service.recovery_password("api/auth/password", this.ngForm_reset).subscribe(function (res) {
        });
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _http_test_service__WEBPACK_IMPORTED_MODULE_5__["HttpTestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/modals/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/modals/forgot-password/forgot-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_test_service__WEBPACK_IMPORTED_MODULE_5__["HttpTestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_modals_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/forgot-password/forgot-password.component */ "./src/app/modals/forgot-password/forgot-password.component.ts");







//import { AboutComponent } from 'src/app/modals/about/about.component';

var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"], src_app_modals_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]],
            entryComponents: [src_app_modals_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #DBF1FF;\n  --overflow: hidden;\n}\n\nion-button {\n  height: 40px;\n}\n\nion-button.under {\n  --background:transparent !important;\n  --background-hover:transparent !important;\n  height: auto;\n  display: inline-block;\n  border-bottom: 1px #00b3b1 solid;\n  padding-bottom: 0;\n  line-height: 100%;\n  margin-top: 3vh;\n}\n\nion-button {\n  text-transform: none;\n  color: #094E6B;\n}\n\nion-text {\n  opacity: 0.54;\n}\n\nion-label {\n  color: #094E6B !important;\n  margin-bottom: 1.5vh !important;\n}\n\nion-input {\n  color: #094E6B;\n  max-height: 30px;\n  --padding-start:10px!important;\n}\n\ndiv.div-flex {\n  display: -webkit-box;\n  display: flex;\n}\n\n#logo {\n  height: 30vh;\n  margin: auto auto;\n  margin-bottom: 2vh;\n}\n\n.top {\n  margin-top: 0px !important;\n}\n\n#google {\n  max-height: 18px;\n  max-width: 18px;\n  min-height: 18px;\n  min-width: 18px;\n  margin-right: 24px;\n}\n\n#google_button {\n  --color:#000000;\n  --background: white;\n  --background-hover: white;\n  --ion-font-family: Roboto-Regular;\n  text-transform: none;\n  font-size: 14px;\n}\n\n#unifor {\n  height: 7.5vh;\n  width: 6vh;\n  margin-right: 1vw;\n}\n\n#uece {\n  height: 7.5vh;\n  width: 6vh;\n  margin-left: 1vw;\n}\n\n#login_button {\n  color: white;\n  --background: #00b3b1;\n  --border-radius: 22px!important;\n}\n\n.login_input {\n  --background:#b0d9e1;\n  border-radius: 7px !important;\n}\n\n.bottom {\n  margin-bottom: 3vh !important;\n}\n\n.right {\n  margin-left: 73vw;\n}\n\n.centralize {\n  margin: auto auto;\n}\n\n.mid {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: var(--ion-padding, 16px);\n  padding-inline-start: var(--ion-padding, 16px);\n  -webkit-padding-end: var(--ion-padding, 16px);\n  padding-inline-end: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 0px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC9uZWthbi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURBSTtFQUNJLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRVI7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsK0JBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDSUo7O0FERUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNDUjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtBQ0VKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FDS0o7O0FESEE7RUFDSSxvQkFBQTtFQUNBLDZCQUFBO0FDTUo7O0FESEE7RUFDSSw2QkFBQTtBQ01KOztBREpBO0VBQ0ksaUJBQUE7QUNPSjs7QURKQTtFQUNJLGlCQUFBO0FDT0o7O0FETEE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0NBQUE7RUFDQSw4Q0FBQTtFQUNBLDZDQUFBO0VBQ0EsNENBQUE7RUFDQSxrREFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0RCRjFGRjtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgXG59XG5pb24tYnV0dG9ue1xuICAgIGhlaWdodDogNDBweDtcbiAgICAmLnVuZGVye1xuICAgICAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggIzAwYjNiMSBzb2xpZDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzdmg7XG4gICAgfVxufVxuXG5pb24tYnV0dG9ue1xuICAgIHRleHQtdHJhbnNmb3JtOm5vbmU7XG4gICAgY29sb3I6IzA5NEU2Qjtcbn1cbmlvbi10ZXh0e1xuICAgIG9wYWNpdHk6IDAuNTQ7XG59XG5pb24tbGFiZWx7XG4gICAgY29sb3I6IzA5NEU2QiFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41dmghaW1wb3J0YW50O1xufVxuaW9uLWlucHV0e1xuICAgIGNvbG9yOiMwOTRFNkI7XG4gICAgbWF4LWhlaWdodDogMzBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6MTBweCFpbXBvcnRhbnQ7XG4gICAgLy8gJmlucHV0W3R5cGU9ZW1haWxde1xuICAgIC8vICAgICBtYXJnaW4tbGVmdDogMTBweCFpbXBvcnRhbnQ7XG4gICAgLy8gfVxufVxuZGl2e1xuICAgICYuZGl2LWZsZXh7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxufVxuI2xvZ297XG4gICAgaGVpZ2h0OjMwdmg7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xufVxuLnRvcHtcbiAgICBtYXJnaW4tdG9wOiAwcHghaW1wb3J0YW50O1xuXG59XG4jZ29vZ2xle1xuICAgIG1heC1oZWlnaHQ6IDE4cHg7XG4gICAgbWF4LXdpZHRoOiAxOHB4OyBcbiAgICBtaW4taGVpZ2h0OjE4cHg7XG4gICAgbWluLXdpZHRoOiAxOHB4O1xuICAgIG1hcmdpbi1yaWdodDoyNHB4OyBcbn1cbiNnb29nbGVfYnV0dG9ue1xuICAgIC0tY29sb3I6IzAwMDAwMDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIHdoaXRlO1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTpub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI3VuaWZvcntcbiAgICBoZWlnaHQ6IDcuNXZoO1xuICAgIHdpZHRoOiA2dmg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxdnc7XG59XG4jdWVjZXtcbiAgICBoZWlnaHQ6IDcuNXZoO1xuICAgIHdpZHRoOiA2dmg7XG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcbn1cbiNsb2dpbl9idXR0b257XG4gICAgY29sb3I6d2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBiM2IxO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweCFpbXBvcnRhbnQ7XG59XG4ubG9naW5faW5wdXR7XG4gICAgLS1iYWNrZ3JvdW5kOiNiMGQ5ZTE7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4IWltcG9ydGFudDtcbiAgICBcbn1cbi5ib3R0b217XG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoIWltcG9ydGFudDsgICAgXG59XG4ucmlnaHR7XG4gICAgbWFyZ2luLWxlZnQ6NzN2dztcbiAgICBcbn1cbi5jZW50cmFsaXple1xuICAgIG1hcmdpbjphdXRvIGF1dG87XG59XG4ubWlke1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAwcHgpIWltcG9ydGFudDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNEQkYxRkY7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbn1cbmlvbi1idXR0b24udW5kZXIge1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggIzAwYjNiMSBzb2xpZDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzdmg7XG59XG5cbmlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICMwOTRFNkI7XG59XG5cbmlvbi10ZXh0IHtcbiAgb3BhY2l0eTogMC41NDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwOTRFNkIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMS41dmggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICMwOTRFNkI7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIC0tcGFkZGluZy1zdGFydDoxMHB4IWltcG9ydGFudDtcbn1cblxuZGl2LmRpdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2xvZ28ge1xuICBoZWlnaHQ6IDMwdmg7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbi50b3Age1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2dvb2dsZSB7XG4gIG1heC1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogMThweDtcbiAgbWluLWhlaWdodDogMThweDtcbiAgbWluLXdpZHRoOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbiNnb29nbGVfYnV0dG9uIHtcbiAgLS1jb2xvcjojMDAwMDAwO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHdoaXRlO1xuICAtLWlvbi1mb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiN1bmlmb3Ige1xuICBoZWlnaHQ6IDcuNXZoO1xuICB3aWR0aDogNnZoO1xuICBtYXJnaW4tcmlnaHQ6IDF2dztcbn1cblxuI3VlY2Uge1xuICBoZWlnaHQ6IDcuNXZoO1xuICB3aWR0aDogNnZoO1xuICBtYXJnaW4tbGVmdDogMXZ3O1xufVxuXG4jbG9naW5fYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMwMGIzYjE7XG4gIC0tYm9yZGVyLXJhZGl1czogMjJweCFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbl9pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDojYjBkOWUxO1xuICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbn1cblxuLmJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDN2aCAhaW1wb3J0YW50O1xufVxuXG4ucmlnaHQge1xuICBtYXJnaW4tbGVmdDogNzN2dztcbn1cblxuLmNlbnRyYWxpemUge1xuICBtYXJnaW46IGF1dG8gYXV0bztcbn1cblxuLm1pZCB7XG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAwcHgpICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _http_test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var src_app_modals_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/about/about.component */ "./src/app/modals/about/about.component.ts");
/* harmony import */ var src_app_modals_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/forgot-password/forgot-password.component */ "./src/app/modals/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");









var LoginPage = /** @class */ (function () {
    function LoginPage(googlePlus, router, modalCtrl, service, loadingController, toastController) {
        this.googlePlus = googlePlus;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.isNewUser = false;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        window.sessionStorage.clear();
    };
    LoginPage.prototype.ngOnInit = function () {
        this.ngForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
    };
    LoginPage.prototype.doGoogleLogin = function () {
        var _this = this;
        this.googlePlus.login({
            'scopes': '',
            'webClientId': '1027725625353-uqf8t99if8rid5qb9tv0oturfaqsdgbv.apps.googleusercontent.com',
            'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
        })
            .then(function (user) {
            //loading.dismiss();
            localStorage.setItem('google_login', 'true');
            sessionStorage.setItem('google_user', JSON.stringify({
                name: user.displayName,
                email: user.email,
                picture: user.imageUrl
            }));
            // .then(() =>{
            _this.router.navigate(["/home"]);
            // }, error =>{
            //   console.log(error);
            // })
            //loading.dismiss();
            //confirm(JSON.stringify(user))
        }, function (err) {
            console.log(err);
            //loading.dismiss();
        });
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                /*Criação do loading e toast*/
                this.loadingController.create({
                    message: 'Verificando a conta...'
                }).then(function (overlay) {
                    _this.loading = overlay;
                    _this.loading.present().then(function () {
                        // setTimeout(() => {
                        //   this.loading.dismiss();
                        //   this.toastUnreachable.present();
                        // }, 30000);
                    });
                });
                this.toastController.create({
                    message: 'Login realizado com sucesso.',
                    duration: 1000,
                    color: 'success',
                    position: 'top'
                }).then(function (overlay) {
                    _this.toast = overlay;
                });
                this.toastController.create({
                    message: 'Ocorreu um erro ao fazer o login, verifique seus dados, ou tente novamente mais tarde.',
                    duration: 3000,
                    color: 'danger',
                    position: 'top'
                }).then(function (overlay) {
                    _this.toastFail = overlay;
                });
                this.toastController.create({
                    message: 'Serviço indisponível. Tente novamente mais tarde.',
                    duration: 3000,
                    color: 'danger',
                    position: 'top'
                }).then(function (overlay) {
                    _this.toastUnreachable = overlay;
                });
                /*Fim da criação do loading e toast*/
                //console.log(form.value);
                //this.router.navigateByUrl('home');
                this.service.login("api/auth/sign_in", this.ngForm).subscribe(function (data) {
                    if (data.ok) {
                        _this.loading.dismiss();
                        _this.toast.present();
                        _this.header1 = window.sessionStorage.getItem('uid');
                        _this.header2 = window.sessionStorage.getItem('access-token');
                        _this.header3 = window.sessionStorage.getItem('client');
                        console.log("ESSE É O BODY" + JSON.stringify(data.body));
                        console.log("ESSE É O BODY" + data.body.data.user_type);
                        console.log("ESSES SÃO OS HEADERS!" + _this.header1, _this.header2, _this.header3);
                        var permission = data.body.data.user_type;
                        window.sessionStorage.setItem('user_type', (data.body.data.user_type).toString());
                        window.sessionStorage.setItem('isNewUser', (data.body.data.isNewUser).toString());
                        // let isNewUser: NavigationExtras = {
                        //   queryParams: {
                        //     isNewUser: data.body.data.isNewUser
                        //   }
                        // }
                        if (window.sessionStorage.getItem('user_type') == '1' || window.sessionStorage.getItem('user_type') == '2' || window.sessionStorage.getItem('user_type') == '3') {
                            _this.router.navigateByUrl('support-list');
                        }
                        else if (window.sessionStorage.getItem('user_type') == '0') {
                            _this.router.navigate(['home']);
                        }
                        else {
                            _this.router.navigate(['login']);
                        }
                    }
                    else {
                        confirm('Login Invalido');
                    }
                    _this.ngForm.reset();
                }, function (error) {
                    _this.loading.dismiss();
                    _this.toastFail.message = error.error.errors;
                    _this.toastFail.present();
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.forgot_password = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modals_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
                            cssClass: 'login_page_forgot_password_modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.about = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modals_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                            cssClass: 'login_page_about_modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _http_test_service__WEBPACK_IMPORTED_MODULE_4__["HttpTestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            providers: [_http_test_service__WEBPACK_IMPORTED_MODULE_4__["HttpTestService"]],
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _http_test_service__WEBPACK_IMPORTED_MODULE_4__["HttpTestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map