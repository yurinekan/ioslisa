(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-waist-measure-waist-measure-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/waist-measure/waist-measure.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/waist-measure/waist-measure.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>Atualizar as Medidas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <form [formGroup]=\"updateData\" (ngSubmit)=\"submitForm()\">\n      <div padding>    \n          <br/>\n          <br/>\n          <ion-label><a style=\"display: contents;\" style=\"opacity: 0.5;\">\n              <img src=\"../../../assets/imgs/reg.png\" style=\"width: 25px; height: 25px; float: right; margin-top: 4.4vh\">\n            </a></ion-label>\n            <ion-label><img src=\"../../../assets/imgs/metros.png\" style=\"position: relative; float: right; margin-top: 27px\"></ion-label> \n          <ion-item>\n            <ion-label position=\"floating\">Altura: </ion-label>\n            <ion-input [(ngModel)]=\"height_m\" formControlName='height_m' type=\"text\" [brmasker]=\"{form: updateData.get('height_m'), mask: '9,99', len: 4, type:'num'}\" ></ion-input>            \n          </ion-item>\n          <br/> \n          <br/>\n          <ion-label><a style=\"display: contents;\" style=\"opacity: 0.5;\">\n              <img src=\"../../../assets/imgs/reg.png\" style=\"width: 25px; height: 25px; float: right; margin-top: 4.4vh\">\n            </a></ion-label>\n          <ion-label><img src=\"../../../assets/imgs/quilos.png\" style=\"position: relative; float: right; margin-top: 27px\"></ion-label> \n          <ion-item>\n            <ion-label position=\"floating\">Peso: </ion-label>\n            <ion-input [(ngModel)]=\"weight_kg\" formControlName='weight_kg' type=\"text\" [brmasker]=\"{form: updateData.get('weight_kg'), money: true, type:'num', len: 5}\"></ion-input>\n          </ion-item>\n          <br/> \n          <br/> \n          <ion-label><a style=\"display: contents;\" id=\"button_cintura\"  (click)=\"showModal()\" color=\"none\" style=\"opacity: 0.5;\">\n              <img src=\"../../../assets/icon/iconcintura.png\" style=\"width: 25px; height: 25px; float: right; margin-top: 4.4vh\">\n            </a></ion-label>\n          <ion-label><img src=\"../../../assets/imgs/cm.png\" style=\"position: relative; float: right; margin-top: 27px\"></ion-label>\n          <ion-item>\n          <ion-label position=\"floating\">Cintura: </ion-label>     \n          <ion-input type=\"text\" [(ngModel)]=\"waist_cm\" formControlName=\"waist_cm\" style=\"width: 90%;\" [brmasker]=\"{form: updateData.get('weight_kg'), money: true, type:'num', len: 5}\"></ion-input>          \n          </ion-item>\n            \n        <ion-col>\n         <ion-row justify-content-center>\n            <div class = \"central\" text-center> \n            <ion-button type=\"submit\" color=\"secondary\">Salvar</ion-button> \n             </div>\n             </ion-row>\n            </ion-col> \n      </div>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/waist-measure/waist-measure.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/waist-measure/waist-measure.module.ts ***!
  \*************************************************************/
/*! exports provided: WaistMeasurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaistMeasurePageModule", function() { return WaistMeasurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _waist_measure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./waist-measure.page */ "./src/app/pages/waist-measure/waist-measure.page.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");








const routes = [
    {
        path: '',
        component: _waist_measure_page__WEBPACK_IMPORTED_MODULE_6__["WaistMeasurePage"]
    }
];
let WaistMeasurePageModule = class WaistMeasurePageModule {
};
WaistMeasurePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]
        ],
        declarations: [_waist_measure_page__WEBPACK_IMPORTED_MODULE_6__["WaistMeasurePage"]]
    })
], WaistMeasurePageModule);



/***/ }),

/***/ "./src/app/pages/waist-measure/waist-measure.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/waist-measure/waist-measure.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhaXN0LW1lYXN1cmUvd2Fpc3QtbWVhc3VyZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/waist-measure/waist-measure.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/waist-measure/waist-measure.page.ts ***!
  \***********************************************************/
/*! exports provided: WaistMeasurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaistMeasurePage", function() { return WaistMeasurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modalcintura_modalcintura_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modalcintura/modalcintura.page */ "./src/app/pages/modalcintura/modalcintura.page.ts");







let WaistMeasurePage = class WaistMeasurePage {
    constructor(router, modalCtrl, service, loadingController, toastController) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.loadingController = loadingController;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.updateData = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            height_m: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            weight_kg: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            waist_cm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
        this.header1 = window.sessionStorage.getItem('uid');
        this.header2 = window.sessionStorage.getItem('access-token');
        this.header3 = window.sessionStorage.getItem('client');
        this.id = parseInt(window.sessionStorage.getItem('id'));
        console.log("ESSES SÃO OS HEADERS!" + this.header1, this.header2, this.header3);
        this.service.getUserData('api/v1/users', this.header1, this.header2, this.header3).subscribe(resp => {
            if (resp.status === 200 || resp.status === 201) {
                this.weight_kg = String(resp.body.client_physicals_attributes[(resp.body.client_physicals_attributes.length - 1)].weight_kg);
                this.waist_cm = String(resp.body.client_physicals_attributes[(resp.body.client_physicals_attributes.length - 1)].waist_cm);
                this.height_m = String(resp.body.client_physicals_attributes[(resp.body.client_physicals_attributes.length - 1)].height_m);
                if (this.height_m) {
                    this.height_m = this.height_m.replace(".", ",");
                }
                if (this.weight_kg) {
                    this.weight_kg = this.weight_kg.replace(".", ",");
                }
                if (this.waist_cm) {
                    this.waist_cm = this.waist_cm.replace(".", ",");
                }
            }
            else {
                alert("ERRO NO UPDATE");
            }
        });
    }
    submitForm() {
        if (this.updateData.value.height_m) {
            this.updateData.value.height_m = this.updateData.value.height_m.replace(",", ".");
        }
        if (this.updateData.value.weight_kg) {
            this.updateData.value.weight_kg = this.updateData.value.weight_kg.replace(",", ".");
        }
        if (this.updateData.value.waist_cm) {
            this.updateData.value.waist_cm = this.updateData.value.waist_cm.replace(",", ".");
        }
        /*Criação do loading e toast*/
        this.loadingController.create({
            message: 'Atualizando medidas...'
        }).then((overlay) => {
            this.loading = overlay;
            this.loading.present();
        });
        this.toastController.create({
            message: 'Medidas alteradas com sucesso.',
            duration: 4000,
            color: 'success',
            position: 'top'
        }).then((overlay) => {
            this.toast = overlay;
        });
        this.toastController.create({
            message: 'Ocorreu um erro ao alterar as medidas, tente novamente mais tarde.',
            duration: 4000,
            color: 'warning',
            position: 'top'
        }).then((overlay) => {
            this.toastFail = overlay;
        });
        /*Fim da criação do loading e toast*/
        this.service.updatePhysicals('api/auth', this.updateData, this.header1, this.header2, this.header3).subscribe(data => {
            console.log("BODY" + JSON.stringify(data));
            if (data.status === 200 || data.status === 201) {
                this.loading.dismiss();
                this.toast.present();
                this.router.navigate(['home']);
            }
            else {
                alert("ERRO NO UPDATE");
                this.loading.dismiss();
                this.toastFail.present();
            }
        }, error => {
            //console.log("teste valendo junior");
            this.loading.dismiss();
            this.toastFail.present();
        });
    }
    showModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modalcintura_modalcintura_page__WEBPACK_IMPORTED_MODULE_6__["ModalcinturaPage"]
            });
            modal.present();
        });
    }
};
WaistMeasurePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_http_test_service__WEBPACK_IMPORTED_MODULE_3__["HttpTestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
WaistMeasurePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-waist-measure',
        template: __webpack_require__(/*! raw-loader!./waist-measure.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/waist-measure/waist-measure.page.html"),
        providers: [src_app_http_test_service__WEBPACK_IMPORTED_MODULE_3__["HttpTestService"]],
        styles: [__webpack_require__(/*! ./waist-measure.page.scss */ "./src/app/pages/waist-measure/waist-measure.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], src_app_http_test_service__WEBPACK_IMPORTED_MODULE_3__["HttpTestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], WaistMeasurePage);



/***/ })

}]);
//# sourceMappingURL=pages-waist-measure-waist-measure-module-es2015.js.map