(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"header1\"> \n  <ion-toolbar id=\"header\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-buttons slot=\"secondary\">\n        <ion-title class=\"current-page\">1/3</ion-title>\n      </ion-buttons>  \n    <ion-title>Cadastro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"header2\"> \n    <ion-toolbar id=\"header\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n        <ion-buttons slot=\"secondary\">\n          <ion-title class=\"current-page\">2/3</ion-title>\n        </ion-buttons>  \n      <ion-title>Cadastro</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-header *ngIf=\"header3\"> \n    <ion-toolbar id=\"header\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"secondary\">\n          <ion-title class=\"current-page\">3/3</ion-title>\n         </ion-buttons>  \n        <ion-title>Cadastro</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<form [formGroup]=\"fGroup\" (ngSubmit)=\"submitForm()\">\n  <div padding class=\"div-form\">\n    <div *ngIf=\"form1\" class=\"form1\">                 \n      <ion-label class=\"gender\" style=\"padding-left: 16px\" position=\"floating\">Sexo</ion-label>\n      <form [formGroup] =\"part1\">\n        <div class=\"form-group\">               \n          <ion-segment [(ngModel)]='gender' class=\"form-control\" formControlName='gender' color=\"secondary\" [ngClass]=\"{ 'error': part1.controls['gender'].errors }\">\n            <ion-segment-button  value=1>\n              <ion-label>Masculino</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=0>\n              <ion-label>Feminino</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n          <div *ngIf=\"submitted && part1.controls['gender'].errors\">\n              <div id=\"valid\" [hidden]=\"!part1.controls['gender'].errors.required\">*Selecione o sexo.</div>\n          </div> \n        </div>        \n        </form>\n    <div class=\"form-group\">        \n    <ion-item>\n        <ion-label position=\"floating\" align-self-bottom>Nome completo</ion-label>\n        <ion-input type=\"text\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"></ion-input>\n    </ion-item>\n      <div *ngIf=\"submitted && fGroup.controls['name'].errors\">\n        <div id=\"valid\" *ngIf=\"fGroup.controls['name'].errors\" >*Insira um nome v??lido.</div>\n      </div>\n    </div>\n    \n    <form [formGroup] =\"part1\">\n    <div class=\"form-group\">\n    <ion-item>\n        <ion-label position=\"floating\" >Data de nascimento</ion-label>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" cancelText = \"Cancelar\" doneText = \"Salvar\" formControlName=\"birthdate\" [ngClass]=\"{ 'error': part1.controls['birthdate'].errors }\" max={{current_date}}></ion-datetime>\n      </ion-item>\n      <div *ngIf=\"submitted && part1.controls['birthdate'].errors\">\n        <div id=\"valid\" [hidden]=\"!part1.controls['birthdate'].errors.required\">*Insira sua data de anivers??rio.</div>\n      </div>\n    </div>\n    </form>\n    <div class=\"form-group\">\n    <ion-item>\n        <ion-label position=\"floating\">E-mail</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\" [ngClass]=\"{ 'error': fGroup.controls['email'].errors }\"></ion-input>\n      </ion-item>\n        <div class=\"error-container\" *ngIf=\"submitted && fGroup.controls['email'].errors\" >\n          <div id=\"valid\" [hidden]=\"!fGroup.controls['email'].errors\">*Insira um e-mail valido.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n    <ion-item>    \n        <ion-label position=\"floating\">Senha</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" [ngClass]=\"{ 'error': fGroup.controls['password'].errors }\"></ion-input>\n    </ion-item>\n      <div *ngIf=\"submitted && fGroup.controls['password'].errors\">\n        <div id=\"valid\" [hidden]=\"!fGroup.controls['password'].errors.required\">*Insira uma senha, minimo 6 digitos.</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n    <ion-item>\n        <ion-label position=\"floating\">Confirmar senha</ion-label>\n        <ion-input type=\"password\" formControlName=\"password_confirmation\" compare=\"password\" [ngClass]=\"{ 'error': fGroup.controls['password_confirmation'].errors }\"></ion-input>\n    </ion-item>\n      <div *ngIf=\"submitted && fGroup.controls['password_confirmation'].errors\">\n        <div id=\"valid\" [hidden]=\"!fGroup.controls['password_confirmation'].errors.required\">*Confirme sua senha.</div>\n      </div>\n      <div class=\"error-messages\">\t\t\t\t\n        <div id=\"valid\" *ngIf=\"!fGroup.get('password_confirmation').errors && fGroup.hasError('passwordNotMatch') && (fGroup.get('password_confirmation').dirty || fGroup.get('password_confirmation').touched)\">\n\t\t\t\t\tSenha e confirmar senha n??o conferem.\n        </div>\n    </div>\n    </div>\n    <br/>\n    <ion-row justify-content-center>\n        <div class = \"central\" text-center> \n        <ion-button (click)=\"onForm2()\">Avan??ar</ion-button> \n          </div>\n    </ion-row>  \n  </div>\n\n  <div *ngIf=\"form2\" class=\"form2\">\n    <br/>\n    <br/>\n    \n    <form [formGroup] =\"part2\">\n      <ion-item>      \n        <ion-label position=\"floating\">Altura </ion-label>  \n        <div class=\"div-flex\">\n          <ion-input formControlName='height_m' type=\"tel\" [brmasker]=\"{form: part2.get('height_m'), mask: '9,99', len: 4, type:'num'}\" style=\"text-align:center\" >\n            \n          </ion-input>                       \n          <img src=\"../../../assets/imgs/metros.png\" > <!-- style=\"position: relative; float: right;\"/ -->\n        </div>  \n        <!--   <ion-label><ion-button class=\"display_waist\" style=\"display: contents;\" id=\"button_cintura\" color=\"none\" style=\"opacity: 0.5;\">\n            <img src=\"../../../assets/imgs/reg.png\" style=\"width: 25px; height: 25px;\">\n          </ion-button></ion-label> -->\n      </ion-item>\n    <br/> \n    <br/>\n    <ion-item>\n      <ion-label position=\"floating\">Peso </ion-label>      \n      <div class=\"div-flex\">\n        <ion-input id=\"weight_kg\" formControlName='weight_kg' type=\"tel\" [brmasker]=\"{form: part2.get('weight_kg'), money: true, type:'num', len: 5}\" style=\"text-align:center\"></ion-input>\n        <img src=\"../../../assets/imgs/quilos.png\" >\n      </div>\n      <!-- <ion-label><ion-button class=\"display_waist\" style=\"display: contents;\" id=\"button_cintura\" color=\"none\" style=\"opacity: 0.5;\">\n        <img src=\"../../../assets/imgs/reg.png\" style=\"width: 25px; height: 25px;\">\n    </ion-button></ion-label> -->\n    </ion-item>\n    <br/> \n    <br/>  \n    <div style=\"display: flex;\">\n      <ion-item>     \n        <ion-label position=\"floating\">Cintura </ion-label>\n        <div class=\"div-flex\">\n          <ion-input type=\"tel\" formControlName='waist_cm' [brmasker]=\"{form: part2.get('waist_cm'), money: true, type:'num', len: 5}\" style=\"text-align:center\"></ion-input>\n          <div style=\"display: flex;\">\n            <img src=\"../../../assets/imgs/cm.png\" >\n          </div>\n        </div>\n      </ion-item>\n      <ion-button class=\"display_waist\" id=\"button_cintura\"  (click)=\"showModal()\" color=\"none\" style=\"opacity: 0.5;\">\n        <img class=\"icon\" src=\"../../../assets/icon/iconcintura.png\">\n      </ion-button>\n    </div>   \n    <br/>\n  </form>\n  <br/>\n  <br/>\n  <br/>\n    <ion-row justify-content-center>\n        <div class = \"central\" text-center> \n        <ion-button (click)=\"onForm3()\">Avan??ar</ion-button> \n          </div>\n    </ion-row>\n  </div>\n  \n  <div *ngIf=\"form3\">\n    <form [formGroup] =\"part1\">  \n      <ion-list>\n        <ion-radio-group formControlName='cardiac_disease' name=\"auto\">\n          <div id=\"cab\">\n          <ion-list-header style=\"font-size: 17px; margin-left: 45px;\">Possui Press??o Alta?</ion-list-header>\n          </div>                  \n          <ion-item class=\"teste\" lines=\"none\" id=\"list1\">\n            <ion-radio value=0></ion-radio>\n            <label id=\"opcoes\">&nbsp;Sim</label>\n            <ion-radio value=1></ion-radio>\n            <label id=\"opcoes\">&nbsp;N??o</label>\n            <ion-radio value=2></ion-radio>\n            <label id=\"opcoes\">&nbsp;N??o quero informar</label>            \n          </ion-item>          \n        </ion-radio-group>\n      </ion-list>\n\n      <ion-list>\n          <ion-radio-group formControlName='diabetes_disease' name=\"auto\">\n            <div id=\"cab\">\n            <ion-list-header style=\"font-size: 17px; margin-left: 45px;\">Possui Diabetes?</ion-list-header>\n            </div>\n            <ion-item class=\"teste\" lines=\"none\" id=\"list1\">\n                <ion-radio value=0></ion-radio>\n                <label id=\"opcoes\">&nbsp;Sim</label>\n                <ion-radio value=1></ion-radio>\n                <label id=\"opcoes\">&nbsp;N??o</label>\n                <ion-radio value=2></ion-radio>\n                <label id=\"opcoes\">&nbsp;N??o quero informar</label>            \n              </ion-item>\n          </ion-radio-group>\n      </ion-list>\n\n        <ion-list>\n            <ion-radio-group formControlName='cancer_disease' name=\"auto\">\n              <div id=\"cab\">\n                <ion-list-header style=\"font-size: 17px; margin-left: 45px;\">Tem ou teve C??ncer?</ion-list-header>\n              </div>\n              <ion-item class=\"teste\" lines=\"none\" id=\"list1\">\n                  <ion-radio value=0></ion-radio>\n                  <label id=\"opcoes\">&nbsp;Sim</label>\n                  <ion-radio value=1></ion-radio>\n                  <label id=\"opcoes\">&nbsp;N??o</label>\n                  <ion-radio value=2></ion-radio>\n                  <label id=\"opcoes\">&nbsp;N??o quero informar</label>            \n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n        \n          <br/>\n          <ion-row class=\"termos1\" justify-content-center>\n              <div class = \"central\" text-center>\n                <ion-col class=\"termos\">\n                  <ion-checkbox color=\"secondary\" (click)=\"showModalTermos1()\" (ionChange)=\"changeEvent($event)\"></ion-checkbox>\n                </ion-col>\n                <ion-col class=\"termos2\">\n                  <ion-label id=\"termos\"> Termos e condi????es</ion-label>\n                </ion-col>\n              </div>\n            \n          </ion-row>\n          <br/>\n          \n        </form>\n        <ion-row justify-content-center>\n            <div class = \"central\" text-center>  \n              <ion-button type=\"submit\" [disabled]=\"!termos\">Concluir</ion-button>   \n            </div>\n        </ion-row>        \n      </div>\n      \n    </div>\n        \n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");









const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientJsonpModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            br_mask__WEBPACK_IMPORTED_MODULE_8__["BrMaskerModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]],
        bootstrap: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-font-family-bold:RobotoSlab-Bold;\n  --ion-font-family:Roboto-Regular;\n}\n\nion-radio {\n  --border-width:0px!important;\n  border-style: solid;\n  border-color: black;\n  border-width: 2px;\n  width: 16.5px !important;\n  height: 16.5px !important;\n}\n\nion-segment {\n  margin-top: 1vh;\n  padding: 0.01px;\n  border-style: unset;\n  -webkit-transition: 1s;\n  transition: 1s;\n  --border-color: #9ad9cc;\n  --ion-color-base-rgb:#9ad9cc;\n  --ion-color-secondary:#9ad9cc!important;\n  --transition: color 0.15s linear 0s,opacity 0.15s linear 0s;\n  font-size: 14px;\n  font-weight: unset;\n  letter-spacing: 0.06em;\n  line-height: unset;\n}\n\nion-segment .segment-button-checked {\n  background: #9ad9cc !important;\n}\n\nion-segment ion-segment-button {\n  min-width: 33vw;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  text-transform: none !important;\n  border-style: solid;\n  border-radius: 40px 40px 40px 40px;\n  border-width: 1.5px;\n  --border-color:#9ad9cc;\n  --background-activated:#9ad9cc;\n  --background-checked:#9ad9cc;\n  --background-hover:#9ad9cc;\n  --color:#9ad9cc;\n  --color-activated:#9ad9cc;\n  --color-checked:#9ad9cc;\n  --indicator-color: transparent;\n  margin-right: 0.75vw;\n  margin-left: 0.75vw;\n}\n\nion-segment ion-segment-button .segment-button-checked {\n  --border-color: #9ad9cc!important;\n}\n\nion-segment ion-segment-button ion-label {\n  font-size: 1.4em;\n  font-family: var(--ion-font-family-bold) !important;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  color: #357564 !important;\n}\n\ndiv.form1 {\n  --ion-padding:10vw!important;\n  padding-left: var(--ion-padding);\n  padding-right: var(--ion-padding);\n  padding-top: var(--ion-padding);\n  padding-bottom: var(--ion-padding);\n}\n\ndiv.form2 ion-item {\n  width: 70vw;\n  margin-left: 10vw;\n  margin-right: auto;\n}\n\ndiv.div-flex {\n  display: -webkit-box !important;\n  display: flex !important;\n}\n\nion-toolbar {\n  background-color: #3db6c5;\n}\n\nion-title.current-page {\n  font-family: Roboto-Regular !important;\n  font-size: 1.6em !important;\n}\n\nion-item {\n  border-bottom: 2px solid #01ead8;\n  box-shadow: 0 0px 0 0 #01ead8;\n  --inner-padding-end: 0px;\n  --padding-start:0px;\n}\n\nion-input {\n  width: 58vw !important;\n}\n\nion-label {\n  font-family: \"Roboto-Regular\" !important;\n  color: #030752 !important;\n}\n\nion-label.gender {\n  padding-left: 0px !important;\n  font-size: 1.2em;\n}\n\nion-list-header {\n  font-family: \"RobotoSlab-Bold\";\n  color: #030752 !important;\n  padding-left: 0px !important;\n  margin-left: 15px !important;\n}\n\nion-button {\n  --border-radius: 25px!important;\n  width: 40vw !important;\n  text-transform: none !important;\n  font-size: 1.3em;\n  letter-spacing: 0em;\n  --background: #3db6c5!important;\n  --background-hover: #3db5c5c2 !important;\n}\n\nion-button.display_waist {\n  opacity: 1 !important;\n  margin-left: 0px !important;\n  margin-right: 11px !important;\n  margin-top: 23px !important;\n  margin-bottom: 0px !important;\n  --padding-start: 0!important;\n  --padding-end: 0vw!important;\n  display: -webkit-box !important;\n  display: flex !important;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  height: -webkit-fit-content !important;\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n}\n\nion-button button {\n  background: inherit;\n}\n\nimg {\n  width: 90px !important;\n  height: 28px !important;\n}\n\nimg.icon {\n  width: 25px !important;\n  height: 25px !important;\n}\n\nion-checkbox {\n  margin-top: 5px !important;\n  --border-radius: 12px;\n}\n\n.active {\n  background-color: #9ad9cc;\n}\n\n.termos {\n  padding: 5px !important;\n  --vertical-align: middle;\n}\n\n.termos1 {\n  height: 60px;\n  align-content: center;\n}\n\n.termos2 {\n  padding: 5px !important;\n  --vertical-align: top;\n}\n\n.button-small {\n  --padding-end: 0px !important;\n}\n\n.teste {\n  border-bottom: 0px solid #01ead8 !important;\n}\n\n#valid {\n  font-size: 0.5em;\n  color: #e00202;\n}\n\n#button_cintura {\n  display: contents;\n}\n\n#list1 {\n  font-size: 15px;\n  margin-left: 11%;\n}\n\n#cab {\n  margin-left: 8%;\n  font-size: 18px;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #3db6c5;\n          text-decoration-color: #3db6c5;\n  text-underline-position: under;\n}\n\n#opcoes {\n  margin-right: 2%;\n}\n\n#header {\n  background-color: #3db6c5;\n}\n\n#termos {\n  text-decoration: underline;\n}\n\n.img {\n  margin-top: 38px;\n}\n\nion-row.termos1 {\n  -webkit-box-pack: left !important;\n          justify-content: left !important;\n}\n\nion-row.termos1 div.central {\n  padding-left: 9vw !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC9uZWthbi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQUEsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRERJO0VBQ0ksOEJBQUE7QUNHUjs7QURBSTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7RUFDQSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNFUjs7QUREUTtFQUNJLGlDQUFBO0FDR1o7O0FEUVE7RUFDSSxnQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNOWjs7QURhSTtFQUNJLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7QUNWUjs7QURjUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDWlo7O0FEb0JJO0VBQ0ksK0JBQUE7RUFBQSx3QkFBQTtBQ2xCUjs7QUR1QkE7RUFDSSx5QkFBQTtBQ3BCSjs7QUR3Qkk7RUFDSSxzQ0FBQTtFQUNBLDJCQUFBO0FDckJSOztBRHdCQTtFQUVJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDdEJKOztBRGdDQTtFQUNJLHNCQUFBO0FDOUJKOztBRHlDQTtFQUVJLHdDQUFBO0VBQ0EseUJBQUE7QUN2Q0o7O0FEd0NJO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtBQ3RDUjs7QUQyQ0E7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQ3hDSjs7QUQ0Q0E7RUFhSSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBQ3JESjs7QURtQ0k7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxxQ0FBQTtFQUFBLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSxzQ0FBQTtFQUFBLG1DQUFBO0VBQUEsOEJBQUE7QUNqQ1I7O0FEMENJO0VBQ0ksbUJBQUE7QUN4Q1I7O0FENENBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQ3pDSjs7QUQwQ0k7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FDeENSOztBRDRDQTtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7QUN6Q0o7O0FENENBO0VBQ0kseUJBQUE7QUN6Q0o7O0FENkNBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtBQzFDSjs7QUQ2Q0E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUMxQ0o7O0FEOENBO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtBQzNDSjs7QUQrQ0E7RUFDSSw2QkFBQTtBQzVDSjs7QURnREE7RUFDSSwyQ0FBQTtBQzdDSjs7QURvREE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNqREo7O0FEb0RBO0VBQ0ksaUJBQUE7QUNqREo7O0FEb0RBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0FDbERKOztBRHNEQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsOEJBQUE7QUNuREo7O0FEdURBO0VBQ0ksZ0JBQUE7QUNwREo7O0FEdURBO0VBQ0kseUJBQUE7QUNwREo7O0FEdURBO0VBQ0ksMEJBQUE7QUNwREo7O0FEdURBO0VBQ0ksZ0JBQUE7QUNwREo7O0FEdURJO0VBQ0EsaUNBQUE7VUFBQSxnQ0FBQTtBQ3BESjs7QURzRFE7RUFDQSw0QkFBQTtBQ3BEUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0taW9uLWZvbnQtZmFtaWx5LWJvbGQ6Um9ib3RvU2xhYi1Cb2xkO1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OlJvYm90by1SZWd1bGFyO1xuICAgIC8vLS1pb24tcGFkZGluZzoxNXZ3IWltcG9ydGFudDtcbn1cbmlvbi1yYWRpb3tcbiAgICAtLWJvcmRlci13aWR0aDowcHghaW1wb3J0YW50O1xuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItY29sb3I6YmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgd2lkdGg6IDE2LjVweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxNi41cHghaW1wb3J0YW50O1xufVxuaW9uLXNlZ21lbnQge1xuICAgIG1hcmdpbi10b3A6IDF2aDs7XG4gICAgcGFkZGluZzowLjAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiB1bnNldDtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAtLWJvcmRlci1jb2xvcjogIzlhZDljYztcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjojOWFkOWNjO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeTojOWFkOWNjIWltcG9ydGFudDtcbiAgICAtLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGxpbmVhciAwcyxvcGFjaXR5IDAuMTVzIGxpbmVhciAwczsgXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiB1bnNldDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgIGxpbmUtaGVpZ2h0OiB1bnNldDtcbiAgICAmIC5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOWFkOWNjIWltcG9ydGFudDtcbiAgICB9XG4gICAgLy9iYWNrZ3JvdW5kOiM5YWQ5Y2M7XG4gICAgJiBpb24tc2VnbWVudC1idXR0b257XG4gICAgICAgIG1pbi13aWR0aDogMzN2dztcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7ICAgIFxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggNDBweCA0MHB4O1xuICAgICAgICBib3JkZXItd2lkdGg6MS41cHg7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiM5YWQ5Y2M7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzlhZDljYztcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IzlhZDljYztcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiM5YWQ5Y2M7XG4gICAgICAgIC0tY29sb3I6IzlhZDljYztcbiAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IzlhZDljYztcbiAgICAgICAgLS1jb2xvci1jaGVja2VkOiM5YWQ5Y2M7XG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1dnc7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjc1dnc7XG4gICAgICAgICYgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogIzlhZDljYyFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJiBidXR0b257XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIC8vIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAvLyBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgLy8gbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAvLyBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJiBpb24tbGFiZWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS1ib2xkKSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzM1NzU2NCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmRpdntcbiAgICAmLmZvcm0xe1xuICAgICAgICAtLWlvbi1wYWRkaW5nOjEwdnchaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nKTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcpO1xuICAgICAgICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcpO1xuICAgICAgICBcbiAgICB9XG4gICAgJi5mb3JtMntcbiAgICAgICAgJiBpb24taXRlbXtcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLy8gLS1pb24tcGFkZGluZzoxMHZ3IWltcG9ydGFudDtcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZyk7XG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nKTtcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nKTtcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nKTtcbiAgICB9XG4gICAgJi5kaXYtZmxleHtcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDE1dnchaW1wb3J0YW50O1xuICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxNXZ3IWltcG9ydGFudDtcbiAgICB9XG59XG5pb24tdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkYjZjNTtcbiAgICBcbn1cbmlvbi10aXRsZXtcbiAgICAmLmN1cnJlbnQtcGFnZXtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbSFpbXBvcnRhbnQ7XG4gICAgfVxufVxuaW9uLWl0ZW17XG4gICAgXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMWVhZDg7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMCAwICMwMWVhZDg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDowcHg7XG4gICAgJiBpb24tbGFiZWx7XG4gICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIC5oYXMtZm9jdXN7XG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgICAgLy8gICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuaW9uLWlucHV0e1xuICAgIHdpZHRoOiA1OHZ3ICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1wYWRkaW5nLXRvcDogMjdweCFpbXBvcnRhbnQ7XG4vLyAgICAgcGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApIWltcG9ydGFudDtcbi8vICAgICAtLXBhZGRpbmctdG9wLXJlc2V0OiAyN3B4O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAmIC5oYXMtZm9jdXN7XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgcGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3AtcmVzZXQpO1xuLy8gICAgIH1cbn1cblxuaW9uLWxhYmVse1xuICAgIC8vZm9udC1mYW1pbHk6ICdSb2JvdG9TbGFiLUJvbGQnO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVJlZ3VsYXInIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAzMDc1MiAhaW1wb3J0YW50O1xuICAgICYuZ2VuZGVye1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfSBcbn1cblxuXG5pb24tbGlzdC1oZWFkZXJ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9TbGFiLUJvbGQnO1xuICAgIGNvbG9yOiAjMDMwNzUyICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIFxuIC8vVE9ET1xufVxuaW9uLWJ1dHRvbntcbiAgICAmLmRpc3BsYXlfd2Fpc3R7XG4gICAgICAgIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTFweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwdnchaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC0tYm9yZGVyLXJhZGl1czogMjVweCFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDQwdnchaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDsgICBcbiAgICBmb250LXNpemU6IDEuM2VtOyBcbiAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICAgIC0tYmFja2dyb3VuZDogIzNkYjZjNSFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAgIzNkYjVjNWMyICFpbXBvcnRhbnQ7XG4gICAgJiBidXR0b257XG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgfVxuICAgIFxufVxuaW1ne1xuICAgIHdpZHRoOiA5MHB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDI4cHghaW1wb3J0YW50O1xuICAgICYuaWNvbntcbiAgICAgICAgd2lkdGg6IDI1cHghaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6MjVweCFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5pb24tY2hlY2tib3gge1xuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFkOWNjO1xufVxuXG5cbi50ZXJtb3N7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGVybW9zMXtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5cbi50ZXJtb3Mye1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICAgIC0tdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBcbn1cblxuLmJ1dHRvbi1zbWFsbCB7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLnRlc3Rle1xuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjMDFlYWQ4ICFpbXBvcnRhbnQ7XG4gICAgXG5cbn1cblxuXG5cbiN2YWxpZCB7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBjb2xvcjogI2UwMDIwMjtcbn1cblxuI2J1dHRvbl9jaW50dXJhIHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuI2xpc3QxIHtcblxuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTElO1xuICAgIFxuICAgIFxufVxuI2NhYiB7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMzZGI2YzU7XG4gICAgdGV4dC11bmRlcmxpbmUtcG9zaXRpb246IHVuZGVyO1xuICAgIFxufVxuXG4jb3Bjb2VzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlOyAgICBcbn1cblxuI2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkYjZjNTtcbn1cblxuI3Rlcm1vcyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5pbWcge1xuICAgIG1hcmdpbi10b3A6IDM4cHg7XG59XG5pb24tcm93e1xuICAgICYudGVybW9zMXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbiAgICAmIGRpdntcbiAgICAgICAgJi5jZW50cmFse1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDl2dyFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxuICAgIFxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tZm9udC1mYW1pbHktYm9sZDpSb2JvdG9TbGFiLUJvbGQ7XG4gIC0taW9uLWZvbnQtZmFtaWx5OlJvYm90by1SZWd1bGFyO1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWJvcmRlci13aWR0aDowcHghaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgd2lkdGg6IDE2LjVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE2LjVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgcGFkZGluZzogMC4wMXB4O1xuICBib3JkZXItc3R5bGU6IHVuc2V0O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgLS1ib3JkZXItY29sb3I6ICM5YWQ5Y2M7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiM5YWQ5Y2M7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTojOWFkOWNjIWltcG9ydGFudDtcbiAgLS10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBsaW5lYXIgMHMsb3BhY2l0eSAwLjE1cyBsaW5lYXIgMHM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IHVuc2V0O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBsaW5lLWhlaWdodDogdW5zZXQ7XG59XG5pb24tc2VnbWVudCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM5YWQ5Y2MgIWltcG9ydGFudDtcbn1cbmlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMzN2dztcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggNDBweCA0MHB4O1xuICBib3JkZXItd2lkdGg6IDEuNXB4O1xuICAtLWJvcmRlci1jb2xvcjojOWFkOWNjO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM5YWQ5Y2M7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiM5YWQ5Y2M7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjojOWFkOWNjO1xuICAtLWNvbG9yOiM5YWQ5Y2M7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiM5YWQ5Y2M7XG4gIC0tY29sb3ItY2hlY2tlZDojOWFkOWNjO1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1yaWdodDogMC43NXZ3O1xuICBtYXJnaW4tbGVmdDogMC43NXZ3O1xufVxuaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgLS1ib3JkZXItY29sb3I6ICM5YWQ5Y2MhaW1wb3J0YW50O1xufVxuaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktYm9sZCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGNvbG9yOiAjMzU3NTY0ICFpbXBvcnRhbnQ7XG59XG5cbmRpdi5mb3JtMSB7XG4gIC0taW9uLXBhZGRpbmc6MTB2dyFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZyk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZyk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZyk7XG59XG5kaXYuZm9ybTIgaW9uLWl0ZW0ge1xuICB3aWR0aDogNzB2dztcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmRpdi5kaXYtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RiNmM1O1xufVxuXG5pb24tdGl0bGUuY3VycmVudC1wYWdlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS42ZW0gIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAxZWFkODtcbiAgYm94LXNoYWRvdzogMCAwcHggMCAwICMwMWVhZDg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OjBweDtcbn1cbmlvbi1pbnB1dCB7XG4gIHdpZHRoOiA1OHZ3ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCIgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMzA3NTIgIWltcG9ydGFudDtcbn1cbmlvbi1sYWJlbC5nZW5kZXIge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9TbGFiLUJvbGRcIjtcbiAgY29sb3I6ICMwMzA3NTIgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweCFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0MHZ3ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIC0tYmFja2dyb3VuZDogIzNkYjZjNSFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzNkYjVjNWMyICFpbXBvcnRhbnQ7XG59XG5pb24tYnV0dG9uLmRpc3BsYXlfd2Fpc3Qge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMCFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDB2dyFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b24gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XG59XG5pbWcuaWNvbiB7XG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2hlY2tib3gge1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhZDljYztcbn1cblxuLnRlcm1vcyB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXJtb3MxIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXJtb3MyIHtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIC0tdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmJ1dHRvbi1zbWFsbCB7XG4gIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGVzdGUge1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgIzAxZWFkOCAhaW1wb3J0YW50O1xufVxuXG4jdmFsaWQge1xuICBmb250LXNpemU6IDAuNWVtO1xuICBjb2xvcjogI2UwMDIwMjtcbn1cblxuI2J1dHRvbl9jaW50dXJhIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbiNsaXN0MSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDExJTtcbn1cblxuI2NhYiB7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjM2RiNmM1O1xuICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XG59XG5cbiNvcGNvZXMge1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuXG4jaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkYjZjNTtcbn1cblxuI3Rlcm1vcyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaW1nIHtcbiAgbWFyZ2luLXRvcDogMzhweDtcbn1cblxuaW9uLXJvdy50ZXJtb3MxIHtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5pb24tcm93LnRlcm1vczEgZGl2LmNlbnRyYWwge1xuICBwYWRkaW5nLWxlZnQ6IDl2dyAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modalcintura_modalcintura_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modalcintura/modalcintura.page */ "./src/app/pages/modalcintura/modalcintura.page.ts");
/* harmony import */ var _modaltermos1_modaltermos1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modaltermos1/modaltermos1.page */ "./src/app/pages/modaltermos1/modaltermos1.page.ts");
/* harmony import */ var src_app_http_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let RegisterPage = class RegisterPage {
    constructor(router, fBuilder, modalCtrl, service, loadingController, toastController) {
        this.router = router;
        this.fBuilder = fBuilder;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.form1 = true;
        this.form2 = false;
        this.form3 = false;
        this.header1 = true;
        this.header2 = false;
        this.header3 = false;
        this.submitted = false;
        this.termos = false;
        this.error_messages = {
            'confirmpassword': [
                { type: 'required', message: 'password is required.' }
            ],
        };
    }
    onForm2() {
        this.submitted = true;
        if (this.fGroup.invalid || this.part1.invalid) {
            return;
        }
        console.log("Sucesso");
        this.form1 = false;
        this.form2 = true;
        this.form3 = false;
        this.header1 = false;
        this.header2 = true;
        this.header3 = false;
    }
    onForm3() {
        this.form1 = false;
        this.form2 = false;
        this.form3 = true;
        this.header1 = false;
        this.header2 = false;
        this.header3 = true;
    }
    changeEvent(event) {
        if (event.value) {
            this.termos = false;
        }
        else {
            this.termos = true;
        }
    }
    ionViewWillEnter() {
        this.current_date = moment__WEBPACK_IMPORTED_MODULE_8__(Date.now()).format('YYYY-MM-DD');
    }
    ngOnInit() {
        this.fGroup = this.fBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\'\-\u00C0-\u00FF].*[\]+[a-zA-Z\'\-\u00C0-\u00FF].*$/)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]),
            password_confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            "client_detail_attributes": [
                this.part1 = this.fBuilder.group({
                    gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                    cardiac_disease: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                    diabetes_disease: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                    cancer_disease: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                    birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                })
            ],
            "client_physicals_attributes": [
                this.part2 = this.fBuilder.group({
                    height_m: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                    weight_kg: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                    waist_cm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                })
            ]
        }, {
            validators: this.password.bind(this)
        });
        console.log(this.fGroup.value);
        //   this.fGroup = new FormGroup({
        //     name: new FormControl(''),
        //     email: new FormControl(''),
        //     password: new FormControl(''),
        //     password_confirmation: new FormControl(''),
        //     client_detail_attributes:this.part1,
        //     client_physicals_attributes:this.part2
        //   });
        //   this.part1 = new FormGroup({
        //   });
        //   this.part2 = new FormGroup({
        //     height_m: new FormControl(''),
        //     weight_kg: new FormControl(''),
        //     waist_cm: new FormControl(''),
        //   });
    }
    showModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modalcintura_modalcintura_page__WEBPACK_IMPORTED_MODULE_5__["ModalcinturaPage"],
                cssClass: 'cintura_modal'
            });
            modal.present();
        });
    }
    showModalTermos1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modaltermos1_modaltermos1_page__WEBPACK_IMPORTED_MODULE_6__["Modaltermos1Page"],
                cssClass: 'termos_modal'
            });
            modal.present();
        });
    }
    submitForm() {
        this.part1.value.gender = parseInt(this.part1.value.gender);
        this.part1.value.cardiac_disease = parseInt(this.part1.value.cardiac_disease);
        this.part1.value.diabetes_disease = parseInt(this.part1.value.diabetes_disease);
        this.part1.value.cancer_disease = parseInt(this.part1.value.cancer_disease);
        //console.log(this.part2.value.height_m.replace(",", "."));
        if (this.part2.value.height_m) {
            this.part2.value.height_m = this.part2.value.height_m.replace(",", ".");
        }
        if (this.part2.value.weight_kg) {
            this.part2.value.weight_kg = this.part2.value.weight_kg.replace(",", ".");
        }
        if (this.part2.value.waist_cm) {
            this.part2.value.waist_cm = this.part2.value.waist_cm.replace(",", ".");
        }
        //console.log(this.part2.value.height_m);
        /*Cria????o do loading e toast*/
        this.loadingController.create({
            message: 'Criando sua conta...'
        }).then((overlay) => {
            this.loading = overlay;
            this.loading.present();
        });
        this.toastController.create({
            message: 'Conta criada com sucesso, fa??a o login.',
            duration: 4000,
            color: 'success',
            position: 'top'
        }).then((overlay) => {
            this.toast = overlay;
        });
        this.toastController.create({
            message: 'Ocorreu um erro ao criar sua conta, tente novamente mais tarde.',
            duration: 4000,
            color: 'warning',
            position: 'top'
        }).then((overlay) => {
            this.toastFail = overlay;
        });
        /*Fim da cria????o do loading e toast*/
        this.service.register('api/auth', this.fGroup, this.part1, this.part2).subscribe(data => {
            console.log(data.body);
            console.log(data);
            if (data.status === 200 || data.status === 201) {
                this.router.navigateByUrl('login');
                this.loading.dismiss();
                this.toast.present();
            }
            else {
            }
        }, error => {
            //console.log("teste valendo junior");
            this.loading.dismiss();
            this.toastFail.present();
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.fGroup.controls; }
    password(formGroup) {
        const { value: password } = formGroup.get('password');
        const { value: password_confirmation } = formGroup.get('password_confirmation');
        return password === password_confirmation ? null : { passwordNotMatch: true };
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_http_test_service__WEBPACK_IMPORTED_MODULE_7__["HttpTestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html"),
        providers: [src_app_http_test_service__WEBPACK_IMPORTED_MODULE_7__["HttpTestService"]],
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_http_test_service__WEBPACK_IMPORTED_MODULE_7__["HttpTestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map