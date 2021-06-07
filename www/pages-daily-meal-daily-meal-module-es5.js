(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-daily-meal-daily-meal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/modaltips/modaltips.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/modaltips/modaltips.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div style=\"text-align: center;\">\n    <h3>Nosso prato do dia a dia</h3>\n  </div>\n  <div style=\"padding: 17px; font-size: 13px;\">\n    <p>Agora vamos escrever como deve ser o nosso prato do dia a dia.</p>\n    <p>Para ficar mais fácil para você, vamos escrever sobre cada refeição.</p>\n    <p>Quer saber quanto comer? Siga as orientações do profissional de saúde que está lhe acompanhando.</p>\n    <p>Precisa de orientação especial? É vegetariano? Tem problema com leite? Converse sempre com o profissional de saúde que está lhe acompanhando.</p>\n    <p>Não tem um profissional de saúde lhe acompanhando? Procure um, pois ele vai lhe ajudar a ter uma alimentação saudável.</p>\n  </div>\n  <ion-row justify-content-center>\n    <div class=\"mid\"> \n      <ion-button (click)=\"close()\" color=\"secondary\">OK</ion-button> \n    </div>\n</ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/tipsalmoco/tipsalmoco.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/tipsalmoco/tipsalmoco.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div *ngIf=\"almocotela1\">\n  <div style=\"text-align: center\">\n    <h3>Almoço</h3>\n  </div>\n  <div style=\"padding: 17px; font-size: 13px;\">\n    <p>1. Monte seu prato:</p>\n    <p>- Coloque metade de verduras e legumes</p>\n    <p>- Na outra metade divida uma parte para a carne e outra para as massas</p>\n    <p>2. Quais as verduras e legumes que pode comer?</p>\n    <p>- Coma sempre verduras e legumes crus e cozidos na mesma refeição</p>\n    <p>- Se colocar óleo ou outra gordura para preparar legumes, coloque pouca quantidade</p>\n    <p>- Não coma legumes fritos</p>\n    <p>3. Quais as carnes que pode comer?</p>\n  </div>\n  <ion-row justify-content-center>\n    <div class=\"mid\"> \n      <ion-button (click)=\"onShow()\" color=\"secondary\">PRÓXIMO</ion-button> \n    </div>  \n</ion-row>\n</div>\n\n<div *ngIf=\"almocotela2\">\n    <div style=\"padding: 17px; font-size: 13px;\">\n      \n      <p>- Pode ser carne vermelha e carne branca. Quer dizer que pode comer carne de boi, carne de carneiro, frango ou outra ave, peixe, frutos do mar.</p>\n      <p>- Escolha carnes com pouca gordura</p>\n      <p>- Coloque pouca gordura para preparar as carnes</p>\n      <p>4. Que massas pode comer?</p>\n      <p>- Coma arroz ou macarrão</p>\n      <p>- Coma farinha ou farofa só de vez em quando</p>\n      <p>- Procure comer feijão todos os dias</p>\n      <p>- Coloque pouca gordura para preparar as massas</p>\n      <p>5. Coma uma sobremesa</p>\n      <p>- Coma 1 fruta</p>\n    </div>\n    <ion-row justify-content-center>\n        <div class=\"mid\"> \n          <ion-button (click)=\"close()\" color=\"secondary\">OK</ion-button> \n        </div>  \n    </ion-row>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/tipsceia/tipsceia.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/tipsceia/tipsceia.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <div style=\"text-align: center\">\n      <h3>Para o lanche antes de dormir</h3>\n    </div>\n    <div style=\"padding: 17px; font-size: 13px;\">\n      <p>1. Você não é obrigado a comer antes de dormir. Muitas pessoas dormem cedo ou jantam tarde e aí não vão comer este lanche.</p>\n      <p>2. Se você for comer este lanche, beba 1 copo de leite ou 1 pote de iogurte ou coma 1 fatia de queijo. Escolha leite, iogurte ou queijo desnatados ou semi-desnatados.</p>\n    </div>\n  <ion-row justify-content-center>\n    <div class=\"mid\"> \n      <ion-button (click)=\"close()\" color=\"secondary\">OK</ion-button> \n    </div>\n</ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/tipscmanha/tipscmanha.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/tipscmanha/tipscmanha.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-row color=\"primary\" justify-content-center>\n  <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n  <div style=\"text-align: center\">\n    <h3>Café da manhã</h3>\n  </div>\n  <div style=\"padding: 17px; font-size: 13px;\">\n    <p>1. Beba sempre um copo de leite ou coma 1 fatia de queijo. Escolha leite e queijo desnatados ou semi-desnatados.</p>\n    <p>2. Coma uma fruta.</p>\n    <p>3. Coma pão, ou biscoito, ou tapioca ou cuscuz ou cereal matinal, sem exagero.</p>\n  </div>\n  <ion-row justify-content-center>\n    <div class=\"mid\" > \n      <ion-button (click)=\"close()\" color=\"secondary\">OK</ion-button> \n    </div>\n  </ion-row>\n  </ion-col>\n</ion-row>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/tipsjanta/tipsjanta.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/tipsjanta/tipsjanta.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <div *ngIf=\"jantatela1\">\n  <div style=\"text-align: center\">\n    <h3>Para o jantar</h3>\n  </div>\n  <div style=\"padding: 17px; font-size: 13px;\">\n    <p>1. Você pode escolher de acordo com o que for mais fácil para você:</p>\n    <p>- Pode comer igual ao que comeu no almoço</p>\n    <p>- Pode comer igual ao café da manhã</p>\n    <p>- Pode escolher tomar uma sopa, que tenha massa, legumes e carnes</p>\n    <p>- Pode tomar um mingau com a massa que preferir, como por exemplo, aveia</p>\n    <p>- Coma sempre alguma verdura ou legume no jantar</p>   \n  </div>\n  <ion-row justify-content-center>\n    <div class=\"mid\"> \n      <ion-button (click)=\"onShow()\" color=\"secondary\">PRÓXIMO</ion-button> \n    </div>\n  </ion-row>\n  </div>\n\n  <div *ngIf=\"jantatela2\">\n      <div style=\"padding: 17px; font-size: 13px;\">\n        <p>- E se você escolheu comer igual ao café da manhã? Pode colocar a verdura ou legume como recheio do pão. Pode também comer verdura ou legume antes de iniciar a refeição.</p>\n        <p>- E se você escolheu tomar um mingau? Pode comer a verdura ou legume antes de iniciar a refeição</p>\n        <p>- Sempre coma uma fruta no jantar</p>\n        <p>2. Tem dúvidas em como escolher o que vai comer no jantar?</p>\n        <p>- Converse com o profissional de saúde que está lhe acompanhando</p>\n      </div>\n      <ion-row justify-content-center>\n          <div class=\"mid\"> \n            <ion-button (click)=\"close()\" color=\"secondary\">OK</ion-button> \n          </div>\n      </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/tipslanche/tipslanche.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/tipslanche/tipslanche.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n  <div style=\"text-align: center\">\n    <h3>Para o lanche da tarde</h3>\n  </div>\n  <div style=\"padding: 17px; font-size: 13px;\">\n    <p>1. Coma 1 fruta ou 1 pote de iogurte.</p>\n    <p>2. Varie na semana, cada dia um destes dois alimentos: fruta ou iogurte.</p>\n    <p>3. Escolha iogurte desnatado ou semi-desnatado.</p>\n    <p>4. Pode escolher iogurte dietético ou light?</p>\n    <p>- Siga as orientações do profissional de saúde que está lhe acompanhando.</p>\n  </div>\n  <ion-row justify-content-center>\n    <div class=\"mid\"> \n      <ion-button (click)=\"close()\" color=\"secondary\">OK</ion-button> \n    </div>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/tipslmanha/tipslmanha.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/tipslmanha/tipslmanha.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <div style=\"text-align: center\">\n    <h3>Para o lanche manhã</h3>\n  </div>\n  <div style=\"padding: 17px; font-size: 13px;\">\n    <p>1. Coma uma fruta.</p>\n  </div>\n  <ion-row justify-content-center>\n    <div class=\"mid\"> \n      <ion-button (click)=\"close()\" color=\"secondary\">OK</ion-button> \n    </div>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/daily-meal/daily-meal.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/daily-meal/daily-meal.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title class=\"tips-t\">NOSSO PRATO DO DIA A DIA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"margin-top: 51px; padding: 60px;\">\n    <div class = \"central\" id=\"table\" text-center>\n      <ion-button class=\"tips\" expand=\"block\" (click)=\"dicaCManha()\">Café da manhã</ion-button>    \n    </div>\n    <div class = \"central\" text-center id=\"table\">\n      <ion-button class=\"tips\" expand=\"block\" (click)=\"dicaLManha()\">Lanche da manhã</ion-button>\n    </div>\n    <div class = \"central\" text-center id=\"table\">\n      <ion-button class=\"tips\" expand=\"block\" (click)=\"dicaAlmoco()\">Almoço</ion-button>\n    </div>\n    <div class = \"central\" text-center id=\"table\">\n      <ion-button class=\"tips\" expand=\"block\" (click)=\"dicaLanche()\">Lanche da tarde</ion-button>\n    </div>\n    <div class = \"central\" text-center id=\"table\">\n      <ion-button class=\"tips\" expand=\"block\" (click)=\"dicaJanta()\">Jantar</ion-button>\n    </div>\n    <div class = \"central\" text-center id=\"table\">\n      <ion-button class=\"tips\" expand=\"block\" (click)=\"dicaCeia()\">Ceia</ion-button>\n    </div>\n  </div>  \n  </ion-content>\n"

/***/ }),

/***/ "./src/app/modals/modaltips/modaltips.page.scss":
/*!******************************************************!*\
  !*** ./src/app/modals/modaltips/modaltips.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  width: 100px;\n}\n\n.mid {\n  padding-bottom: 30px;\n  position: fixed;\n  bottom: 0;\n  /* left: 0; */\n  /* right: 0; */\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9tb2RhbHMvbW9kYWx0aXBzL21vZGFsdGlwcy5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscy9tb2RhbHRpcHMvbW9kYWx0aXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9tb2RhbHRpcHMvbW9kYWx0aXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLm1pZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIC8qIGxlZnQ6IDA7ICovXG4gICAgLyogcmlnaHQ6IDA7ICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIFxufSIsImlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5taWQge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIC8qIGxlZnQ6IDA7ICovXG4gIC8qIHJpZ2h0OiAwOyAqL1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/modals/modaltips/modaltips.page.ts":
/*!****************************************************!*\
  !*** ./src/app/modals/modaltips/modaltips.page.ts ***!
  \****************************************************/
/*! exports provided: ModaltipsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModaltipsPage", function() { return ModaltipsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ModaltipsPage = /** @class */ (function () {
    function ModaltipsPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ModaltipsPage.prototype.ngOnInit = function () {
    };
    ModaltipsPage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    ModaltipsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    ModaltipsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modaltips',
            template: __webpack_require__(/*! raw-loader!./modaltips.page.html */ "./node_modules/raw-loader/index.js!./src/app/modals/modaltips/modaltips.page.html"),
            styles: [__webpack_require__(/*! ./modaltips.page.scss */ "./src/app/modals/modaltips/modaltips.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ModaltipsPage);
    return ModaltipsPage;
}());



/***/ }),

/***/ "./src/app/modals/tipsalmoco/tipsalmoco.page.scss":
/*!********************************************************!*\
  !*** ./src/app/modals/tipsalmoco/tipsalmoco.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  width: 100px;\n}\n\n.mid {\n  padding-bottom: 30px;\n  position: fixed;\n  bottom: 0;\n  /* left: 0; */\n  /* right: 0; */\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9tb2RhbHMvdGlwc2FsbW9jby90aXBzYWxtb2NvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3RpcHNhbG1vY28vdGlwc2FsbW9jby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvdGlwc2FsbW9jby90aXBzYWxtb2NvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLm1pZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIC8qIGxlZnQ6IDA7ICovXG4gICAgLyogcmlnaHQ6IDA7ICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIFxufSIsImlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5taWQge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIC8qIGxlZnQ6IDA7ICovXG4gIC8qIHJpZ2h0OiAwOyAqL1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/modals/tipsalmoco/tipsalmoco.page.ts":
/*!******************************************************!*\
  !*** ./src/app/modals/tipsalmoco/tipsalmoco.page.ts ***!
  \******************************************************/
/*! exports provided: TipsalmocoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsalmocoPage", function() { return TipsalmocoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TipsalmocoPage = /** @class */ (function () {
    function TipsalmocoPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.almocotela1 = true;
        this.almocotela2 = false;
    }
    TipsalmocoPage.prototype.ngOnInit = function () {
    };
    TipsalmocoPage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    TipsalmocoPage.prototype.onShow = function () {
        this.almocotela1 = false;
        this.almocotela2 = true;
    };
    TipsalmocoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    TipsalmocoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tipsalmoco',
            template: __webpack_require__(/*! raw-loader!./tipsalmoco.page.html */ "./node_modules/raw-loader/index.js!./src/app/modals/tipsalmoco/tipsalmoco.page.html"),
            styles: [__webpack_require__(/*! ./tipsalmoco.page.scss */ "./src/app/modals/tipsalmoco/tipsalmoco.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TipsalmocoPage);
    return TipsalmocoPage;
}());



/***/ }),

/***/ "./src/app/modals/tipsceia/tipsceia.page.scss":
/*!****************************************************!*\
  !*** ./src/app/modals/tipsceia/tipsceia.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  width: 100px;\n}\n\n.mid {\n  padding-bottom: 30px;\n  position: fixed;\n  bottom: 0;\n  /* left: 0; */\n  /* right: 0; */\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9tb2RhbHMvdGlwc2NlaWEvdGlwc2NlaWEucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHMvdGlwc2NlaWEvdGlwc2NlaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL3RpcHNjZWlhL3RpcHNjZWlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLm1pZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIC8qIGxlZnQ6IDA7ICovXG4gICAgLyogcmlnaHQ6IDA7ICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIFxufSIsImlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5taWQge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIC8qIGxlZnQ6IDA7ICovXG4gIC8qIHJpZ2h0OiAwOyAqL1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/modals/tipsceia/tipsceia.page.ts":
/*!**************************************************!*\
  !*** ./src/app/modals/tipsceia/tipsceia.page.ts ***!
  \**************************************************/
/*! exports provided: TipsceiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsceiaPage", function() { return TipsceiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TipsceiaPage = /** @class */ (function () {
    function TipsceiaPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    TipsceiaPage.prototype.ngOnInit = function () {
    };
    TipsceiaPage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    TipsceiaPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    TipsceiaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tipsceia',
            template: __webpack_require__(/*! raw-loader!./tipsceia.page.html */ "./node_modules/raw-loader/index.js!./src/app/modals/tipsceia/tipsceia.page.html"),
            styles: [__webpack_require__(/*! ./tipsceia.page.scss */ "./src/app/modals/tipsceia/tipsceia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TipsceiaPage);
    return TipsceiaPage;
}());



/***/ }),

/***/ "./src/app/modals/tipscmanha/tipscmanha.page.scss":
/*!********************************************************!*\
  !*** ./src/app/modals/tipscmanha/tipscmanha.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  width: 100px;\n}\n\n.mid {\n  padding-bottom: 30px;\n  position: fixed;\n  bottom: 0;\n  /* left: 0; */\n  /* right: 0; */\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9tb2RhbHMvdGlwc2NtYW5oYS90aXBzY21hbmhhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3RpcHNjbWFuaGEvdGlwc2NtYW5oYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvdGlwc2NtYW5oYS90aXBzY21hbmhhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgXG59XG4ubWlke1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgLyogbGVmdDogMDsgKi9cbiAgICAvKiByaWdodDogMDsgKi9cbiAgICBtYXJnaW46IGF1dG87XG4gICAgXG59IiwiaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLm1pZCB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgLyogbGVmdDogMDsgKi9cbiAgLyogcmlnaHQ6IDA7ICovXG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modals/tipscmanha/tipscmanha.page.ts":
/*!******************************************************!*\
  !*** ./src/app/modals/tipscmanha/tipscmanha.page.ts ***!
  \******************************************************/
/*! exports provided: TipscmanhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipscmanhaPage", function() { return TipscmanhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TipscmanhaPage = /** @class */ (function () {
    function TipscmanhaPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    TipscmanhaPage.prototype.ngOnInit = function () {
    };
    TipscmanhaPage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    TipscmanhaPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    TipscmanhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tipscmanha',
            template: __webpack_require__(/*! raw-loader!./tipscmanha.page.html */ "./node_modules/raw-loader/index.js!./src/app/modals/tipscmanha/tipscmanha.page.html"),
            styles: [__webpack_require__(/*! ./tipscmanha.page.scss */ "./src/app/modals/tipscmanha/tipscmanha.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TipscmanhaPage);
    return TipscmanhaPage;
}());



/***/ }),

/***/ "./src/app/modals/tipsjanta/tipsjanta.page.scss":
/*!******************************************************!*\
  !*** ./src/app/modals/tipsjanta/tipsjanta.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  width: 100px;\n}\n\n.mid {\n  padding-bottom: 30px;\n  position: fixed;\n  bottom: 0;\n  /* left: 0; */\n  /* right: 0; */\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9tb2RhbHMvdGlwc2phbnRhL3RpcHNqYW50YS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscy90aXBzamFudGEvdGlwc2phbnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy90aXBzamFudGEvdGlwc2phbnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLm1pZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIC8qIGxlZnQ6IDA7ICovXG4gICAgLyogcmlnaHQ6IDA7ICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIFxufSIsImlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5taWQge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIC8qIGxlZnQ6IDA7ICovXG4gIC8qIHJpZ2h0OiAwOyAqL1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/modals/tipsjanta/tipsjanta.page.ts":
/*!****************************************************!*\
  !*** ./src/app/modals/tipsjanta/tipsjanta.page.ts ***!
  \****************************************************/
/*! exports provided: TipsjantaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsjantaPage", function() { return TipsjantaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TipsjantaPage = /** @class */ (function () {
    function TipsjantaPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.jantatela1 = true;
        this.jantatela2 = false;
    }
    TipsjantaPage.prototype.ngOnInit = function () {
    };
    TipsjantaPage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    TipsjantaPage.prototype.onShow = function () {
        this.jantatela1 = false;
        this.jantatela2 = true;
    };
    TipsjantaPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    TipsjantaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tipsjanta',
            template: __webpack_require__(/*! raw-loader!./tipsjanta.page.html */ "./node_modules/raw-loader/index.js!./src/app/modals/tipsjanta/tipsjanta.page.html"),
            styles: [__webpack_require__(/*! ./tipsjanta.page.scss */ "./src/app/modals/tipsjanta/tipsjanta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TipsjantaPage);
    return TipsjantaPage;
}());



/***/ }),

/***/ "./src/app/modals/tipslanche/tipslanche.page.scss":
/*!********************************************************!*\
  !*** ./src/app/modals/tipslanche/tipslanche.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  width: 100px;\n}\n\n.mid {\n  padding-bottom: 30px;\n  position: fixed;\n  bottom: 0;\n  /* left: 0; */\n  /* right: 0; */\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9tb2RhbHMvdGlwc2xhbmNoZS90aXBzbGFuY2hlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3RpcHNsYW5jaGUvdGlwc2xhbmNoZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvdGlwc2xhbmNoZS90aXBzbGFuY2hlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLm1pZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIC8qIGxlZnQ6IDA7ICovXG4gICAgLyogcmlnaHQ6IDA7ICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIFxufSIsImlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5taWQge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIC8qIGxlZnQ6IDA7ICovXG4gIC8qIHJpZ2h0OiAwOyAqL1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/modals/tipslanche/tipslanche.page.ts":
/*!******************************************************!*\
  !*** ./src/app/modals/tipslanche/tipslanche.page.ts ***!
  \******************************************************/
/*! exports provided: TipslanchePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipslanchePage", function() { return TipslanchePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TipslanchePage = /** @class */ (function () {
    function TipslanchePage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    TipslanchePage.prototype.ngOnInit = function () {
    };
    TipslanchePage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    TipslanchePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    TipslanchePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tipslanche',
            template: __webpack_require__(/*! raw-loader!./tipslanche.page.html */ "./node_modules/raw-loader/index.js!./src/app/modals/tipslanche/tipslanche.page.html"),
            styles: [__webpack_require__(/*! ./tipslanche.page.scss */ "./src/app/modals/tipslanche/tipslanche.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TipslanchePage);
    return TipslanchePage;
}());



/***/ }),

/***/ "./src/app/modals/tipslmanha/tipslmanha.page.scss":
/*!********************************************************!*\
  !*** ./src/app/modals/tipslmanha/tipslmanha.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  width: 100px;\n}\n\n.mid {\n  padding-bottom: 30px;\n  position: fixed;\n  bottom: 0;\n  /* left: 0; */\n  /* right: 0; */\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9tb2RhbHMvdGlwc2xtYW5oYS90aXBzbG1hbmhhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3RpcHNsbWFuaGEvdGlwc2xtYW5oYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvdGlwc2xtYW5oYS90aXBzbG1hbmhhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLm1pZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIC8qIGxlZnQ6IDA7ICovXG4gICAgLyogcmlnaHQ6IDA7ICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIFxufVxuIiwiaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLm1pZCB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgLyogbGVmdDogMDsgKi9cbiAgLyogcmlnaHQ6IDA7ICovXG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modals/tipslmanha/tipslmanha.page.ts":
/*!******************************************************!*\
  !*** ./src/app/modals/tipslmanha/tipslmanha.page.ts ***!
  \******************************************************/
/*! exports provided: TipslmanhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipslmanhaPage", function() { return TipslmanhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TipslmanhaPage = /** @class */ (function () {
    function TipslmanhaPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    TipslmanhaPage.prototype.ngOnInit = function () {
    };
    TipslmanhaPage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    TipslmanhaPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    TipslmanhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tipslmanha',
            template: __webpack_require__(/*! raw-loader!./tipslmanha.page.html */ "./node_modules/raw-loader/index.js!./src/app/modals/tipslmanha/tipslmanha.page.html"),
            styles: [__webpack_require__(/*! ./tipslmanha.page.scss */ "./src/app/modals/tipslmanha/tipslmanha.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TipslmanhaPage);
    return TipslmanhaPage;
}());



/***/ }),

/***/ "./src/app/pages/daily-meal/daily-meal.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/daily-meal/daily-meal.module.ts ***!
  \*******************************************************/
/*! exports provided: DailyMealPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyMealPageModule", function() { return DailyMealPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _daily_meal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./daily-meal.page */ "./src/app/pages/daily-meal/daily-meal.page.ts");
/* harmony import */ var src_app_modals_modaltips_modaltips_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/modaltips/modaltips.page */ "./src/app/modals/modaltips/modaltips.page.ts");
/* harmony import */ var src_app_modals_tipsceia_tipsceia_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/tipsceia/tipsceia.page */ "./src/app/modals/tipsceia/tipsceia.page.ts");
/* harmony import */ var src_app_modals_tipsjanta_tipsjanta_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/tipsjanta/tipsjanta.page */ "./src/app/modals/tipsjanta/tipsjanta.page.ts");
/* harmony import */ var src_app_modals_tipslanche_tipslanche_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modals/tipslanche/tipslanche.page */ "./src/app/modals/tipslanche/tipslanche.page.ts");
/* harmony import */ var src_app_modals_tipslmanha_tipslmanha_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modals/tipslmanha/tipslmanha.page */ "./src/app/modals/tipslmanha/tipslmanha.page.ts");
/* harmony import */ var src_app_modals_tipscmanha_tipscmanha_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modals/tipscmanha/tipscmanha.page */ "./src/app/modals/tipscmanha/tipscmanha.page.ts");
/* harmony import */ var src_app_modals_tipsalmoco_tipsalmoco_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modals/tipsalmoco/tipsalmoco.page */ "./src/app/modals/tipsalmoco/tipsalmoco.page.ts");














var routes = [
    {
        path: '',
        component: _daily_meal_page__WEBPACK_IMPORTED_MODULE_6__["DailyMealPage"]
    }
];
var DailyMealPageModule = /** @class */ (function () {
    function DailyMealPageModule() {
    }
    DailyMealPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_daily_meal_page__WEBPACK_IMPORTED_MODULE_6__["DailyMealPage"], src_app_modals_modaltips_modaltips_page__WEBPACK_IMPORTED_MODULE_7__["ModaltipsPage"], src_app_modals_tipsceia_tipsceia_page__WEBPACK_IMPORTED_MODULE_8__["TipsceiaPage"], src_app_modals_tipsjanta_tipsjanta_page__WEBPACK_IMPORTED_MODULE_9__["TipsjantaPage"], src_app_modals_tipslanche_tipslanche_page__WEBPACK_IMPORTED_MODULE_10__["TipslanchePage"], src_app_modals_tipslmanha_tipslmanha_page__WEBPACK_IMPORTED_MODULE_11__["TipslmanhaPage"], src_app_modals_tipscmanha_tipscmanha_page__WEBPACK_IMPORTED_MODULE_12__["TipscmanhaPage"], src_app_modals_tipsalmoco_tipsalmoco_page__WEBPACK_IMPORTED_MODULE_13__["TipsalmocoPage"]],
            entryComponents: [src_app_modals_modaltips_modaltips_page__WEBPACK_IMPORTED_MODULE_7__["ModaltipsPage"], src_app_modals_tipsalmoco_tipsalmoco_page__WEBPACK_IMPORTED_MODULE_13__["TipsalmocoPage"], src_app_modals_tipsceia_tipsceia_page__WEBPACK_IMPORTED_MODULE_8__["TipsceiaPage"], src_app_modals_tipscmanha_tipscmanha_page__WEBPACK_IMPORTED_MODULE_12__["TipscmanhaPage"], src_app_modals_tipsjanta_tipsjanta_page__WEBPACK_IMPORTED_MODULE_9__["TipsjantaPage"], src_app_modals_tipslmanha_tipslmanha_page__WEBPACK_IMPORTED_MODULE_11__["TipslmanhaPage"], src_app_modals_tipslanche_tipslanche_page__WEBPACK_IMPORTED_MODULE_10__["TipslanchePage"]]
        })
    ], DailyMealPageModule);
    return DailyMealPageModule;
}());



/***/ }),

/***/ "./src/app/pages/daily-meal/daily-meal.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/daily-meal/daily-meal.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n}\n\n#table {\n  margin-bottom: 12px;\n}\n\nion-button.tips {\n  text-transform: none;\n  text-align: center;\n  font-size: 20px;\n  height: 48px;\n}\n\nion-title {\n  padding: 0px;\n}\n\nion-title.tips-t {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC8xMjMgICAgICAgIG4gbiAuLi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy9kYWlseS1tZWFsL2RhaWx5LW1lYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYWlseS1tZWFsL2RhaWx5LW1lYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUNBQUE7RUFBQSxrQ0FBQTtFQUFBLDZCQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREtJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRlI7O0FEUUE7RUFDSSxZQUFBO0FDTEo7O0FETUk7RUFDSSxlQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYWlseS1tZWFsL2RhaWx5LW1lYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tdGl0bGV7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50IWltcG9ydGFudDtcbn1cbiAgICBcbiN0YWJsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuaW9uLWJ1dHRvbntcblxuICAgICYudGlwc3tcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG5cbiAgICB9XG4gICAgICBcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgJi50aXBzLXQge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuXG5cbiIsImlvbi10aXRsZSB7XG4gIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xufVxuXG4jdGFibGUge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pb24tYnV0dG9uLnRpcHMge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4O1xufVxuaW9uLXRpdGxlLnRpcHMtdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/daily-meal/daily-meal.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/daily-meal/daily-meal.page.ts ***!
  \*****************************************************/
/*! exports provided: DailyMealPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyMealPage", function() { return DailyMealPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_modals_modaltips_modaltips_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/modaltips/modaltips.page */ "./src/app/modals/modaltips/modaltips.page.ts");
/* harmony import */ var src_app_modals_tipscmanha_tipscmanha_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/tipscmanha/tipscmanha.page */ "./src/app/modals/tipscmanha/tipscmanha.page.ts");
/* harmony import */ var src_app_modals_tipslmanha_tipslmanha_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/tipslmanha/tipslmanha.page */ "./src/app/modals/tipslmanha/tipslmanha.page.ts");
/* harmony import */ var src_app_modals_tipsalmoco_tipsalmoco_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/tipsalmoco/tipsalmoco.page */ "./src/app/modals/tipsalmoco/tipsalmoco.page.ts");
/* harmony import */ var src_app_modals_tipslanche_tipslanche_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/tipslanche/tipslanche.page */ "./src/app/modals/tipslanche/tipslanche.page.ts");
/* harmony import */ var src_app_modals_tipsjanta_tipsjanta_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/tipsjanta/tipsjanta.page */ "./src/app/modals/tipsjanta/tipsjanta.page.ts");
/* harmony import */ var src_app_modals_tipsceia_tipsceia_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/tipsceia/tipsceia.page */ "./src/app/modals/tipsceia/tipsceia.page.ts");










var DailyMealPage = /** @class */ (function () {
    function DailyMealPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    DailyMealPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modals_modaltips_modaltips_page__WEBPACK_IMPORTED_MODULE_3__["ModaltipsPage"],
                            cssClass: 'tips_modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DailyMealPage.prototype.dicaCManha = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modals_tipscmanha_tipscmanha_page__WEBPACK_IMPORTED_MODULE_4__["TipscmanhaPage"],
                            cssClass: 'cmanha_modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DailyMealPage.prototype.dicaLManha = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modals_tipslmanha_tipslmanha_page__WEBPACK_IMPORTED_MODULE_5__["TipslmanhaPage"],
                            cssClass: 'lmanha_modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DailyMealPage.prototype.dicaAlmoco = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modals_tipsalmoco_tipsalmoco_page__WEBPACK_IMPORTED_MODULE_6__["TipsalmocoPage"],
                            cssClass: 'almoco_modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DailyMealPage.prototype.dicaLanche = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modals_tipslanche_tipslanche_page__WEBPACK_IMPORTED_MODULE_7__["TipslanchePage"],
                            cssClass: 'lanche_modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DailyMealPage.prototype.dicaJanta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modals_tipsjanta_tipsjanta_page__WEBPACK_IMPORTED_MODULE_8__["TipsjantaPage"],
                            cssClass: 'janta_modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DailyMealPage.prototype.dicaCeia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modals_tipsceia_tipsceia_page__WEBPACK_IMPORTED_MODULE_9__["TipsceiaPage"],
                            cssClass: 'ceia_modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DailyMealPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    DailyMealPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-daily-meal',
            template: __webpack_require__(/*! raw-loader!./daily-meal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/daily-meal/daily-meal.page.html"),
            styles: [__webpack_require__(/*! ./daily-meal.page.scss */ "./src/app/pages/daily-meal/daily-meal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], DailyMealPage);
    return DailyMealPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-daily-meal-daily-meal-module-es5.js.map