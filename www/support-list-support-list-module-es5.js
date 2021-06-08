(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-list-support-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/support-list/support-list.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/support-list/support-list.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" menuId=\"first\" class=\"menu_settings\" type=\"overlay\">\n    <ion-header no-border-bottom no-border-top no-border>\n      <ion-toolbar class=\"menu_toolbar\" >  <!--  -->\n        <ion-buttons style=\"margin-left: 0;\" slot=\"start\">\n          <ion-menu-toggle auto-hide=\"true\">\n              <ion-menu-button class=\"rotating\"></ion-menu-button>\n            </ion-menu-toggle>\n          </ion-buttons>\n        <ion-title class=\"menu_title\">MENU</ion-title>\n     <!-- Parado em remover linha sob o \"MENU\" -->\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"menu_content\">\n      \n      <!-- <ion-list *ngFor=\"let p of common\" lines=\"none\">\n        <ion-item (click)=\"p.method\">\n          <ion-icon class=\"img\" name=\"p.icon\" slot=\"start\"></ion-icon>\n        {{p.title}} \n        </ion-item>            \n      </ion-list> -->\n        <ion-list *ngFor=\"let pages of navigate\" lines=\"none\" (click)='close()'>\n          <ion-item class=\"menu-items\" [routerLink]=\"pages.url\" routerDirection=\"forward\"  >\n            <ion-icon class=\"img\" [src]=\"pages.icon\" slot=\"start\"></ion-icon>\n          {{pages.title}} \n          </ion-item>            \n        </ion-list>\n        <!-- <ion-list lines=\"none\" > -->\n          <ion-item class=\"menu-items\" (click)=\"about()\" lines=\"none\">\n              <ion-icon class=\"img\" name=\"book\" slot=\"start\"></ion-icon>\n              Sobre\n          </ion-item>\n          <ion-item class=\"menu-items\" (click)=\"logout()\" lines=\"none\">\n              <ion-icon class=\"img\" name=\"exit\" slot=\"start\"></ion-icon>\n              Sair\n          </ion-item>\n        <!-- </ion-list> -->\n        \n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet main></ion-router-outlet>\n\n  <ion-header >\n      <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-menu-toggle>\n              <ion-menu-button></ion-menu-button>\n            </ion-menu-toggle>\n          </ion-buttons>\n  \n          <ion-title>Lista de Refeições</ion-title>\n  \n        </ion-toolbar>\n    </ion-header>\n\n<ion-content>\n  <div *ngIf=\"list_exists == false\">\n    <h4 class=\"ion-text-center\" >Sem refeições para listar.</h4>\n  </div>\n  <ion-grid *ngIf=\"list_exists == true\">\n    <ion-list *ngFor=\"let item of toDoList\">\n        <ion-card tappable (click)=\"changePage(item.id, item.meal_type, item.description, item.image_url,item.created_at,item.user_image_url,item.user_name)\">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src=\"{{base_url}}{{item.image_url}}\">\n          </ion-thumbnail>\n          <h2>&nbsp; {{item.meal_type}} &nbsp;</h2>\n          <input type=\"hidden\" [(ngModel)]=\"item.image_url\">\n        </ion-item>\n        </ion-card>\n      </ion-list>\n  </ion-grid> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/support-list/support-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/support-list/support-list.module.ts ***!
  \*****************************************************/
/*! exports provided: SupportListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportListPageModule", function() { return SupportListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _support_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support-list.page */ "./src/app/support-list/support-list.page.ts");







var routes = [
    {
        path: '',
        component: _support_list_page__WEBPACK_IMPORTED_MODULE_6__["SupportListPage"]
    }
];
var SupportListPageModule = /** @class */ (function () {
    function SupportListPageModule() {
    }
    SupportListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_support_list_page__WEBPACK_IMPORTED_MODULE_6__["SupportListPage"]]
        })
    ], SupportListPageModule);
    return SupportListPageModule;
}());



/***/ }),

/***/ "./src/app/support-list/support-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/support-list/support-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: #7573fa;\n}\n\n.list {\n  background-color: #7573fa;\n}\n\nion-content {\n  --overflow: scroll!important;\n}\n\nion-toolbar.menu_toolbar {\n  --background:#3487ac;\n  --border-width:0;\n}\n\nion-title.menu_title {\n  font-size: 13px !important;\n  padding-left: 13px !important;\n}\n\nion-menu-button {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-menu-button.rotating {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  --background:#3db6c5;\n  --border-radius: 0 !important;\n  box-shadow: 3px -2px 3px 2px #487490;\n  width: 54px;\n  height: 52px;\n}\n\nion-menu-button.rotating.md {\n  margin-left: -1px;\n  margin-top: -2px;\n}\n\nion-menu-button.rotating.ios {\n  margin-left: -5px;\n  margin-top: -3px;\n}\n\nion-list {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\nion-list.ios {\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\nion-list ion-item {\n  --display:none !important;\n  --detail-icon-color:#3487ac!important;\n}\n\nion-list ion-item ion-icon div.icon-inner {\n  display: var(--display) !important;\n}\n\nion-item.menu-items {\n  color: white;\n  --background: #3487ac;\n  --border-color:rgba(255, 255, 255, 0.5);\n}\n\nion-item:hover {\n  --color: white !important;\n  background: #3487ac !important;\n}\n\nion-menu.menu_settings main {\n  --background: aqua;\n}\n\na {\n  padding-left: 10px;\n}\n\nion-icon {\n  font-size: 5vh;\n  position: relative;\n}\n\n.menu_content {\n  --background:#3487ac;\n}\n\n.img {\n  color: black;\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  margin-right: 10px !important;\n  margin-left: -5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC9uZWthbi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9zdXBwb3J0LWxpc3Qvc3VwcG9ydC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3VwcG9ydC1saXN0L3N1cHBvcnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUNJLDRCQUFBO0FDR0o7O0FEQUk7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FDR1I7O0FERUk7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FDQ1I7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNDSjs7QURDSTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQ0FSOztBRENRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0NaOztBRENRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0NaOztBREtBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0ZKOztBREdJO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQ0RSOztBREdJO0VBQ0kseUJBQUE7RUFDQSxxQ0FBQTtBQ0RSOztBRElnQjtFQUNJLGtDQUFBO0FDRnBCOztBRFVJO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7QUNQUjs7QURhQTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7QUNWSjs7QURpQlE7RUFDSSxrQkFBQTtBQ2RaOztBRG1CQTtFQUNJLGtCQUFBO0FDaEJKOztBRG1CQTtFQUNDLGNBQUE7RUFHQSxrQkFBQTtBQ2xCRDs7QURxQkE7RUFDSSxvQkFBQTtBQ2xCSjs7QURvQkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNqQkoiLCJmaWxlIjoic3JjL2FwcC9zdXBwb3J0LWxpc3Qvc3VwcG9ydC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxMTUsIDI1MCk7IC8vIGJsYWNrXG4gIH1cbi5saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTcsIDExNSwgMjUwKTtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tb3ZlcmZsb3c6IHNjcm9sbCFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhcntcbiAgICAmLm1lbnVfdG9vbGJhcntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiMzNDg3YWM7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOjA7XG4gICAgfVxuICAgXG59XG5pb24tdGl0bGV7XG4gICAgJi5tZW51X3RpdGxle1xuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxM3B4ICFpbXBvcnRhbnQ7IFxuICAgIH1cbn1cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICYucm90YXRpbmd7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiMzZGI2YzU7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggLTJweCAzcHggMnB4ICM0ODc0OTA7XG4gICAgICAgIC8vL1xuICAgICAgICB3aWR0aDogNTRweDtcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICAmLm1keyBcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgfVxuICAgICAgICAmLmlvc3tcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgfVxufVxuXG5pb24tbGlzdHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgJi5pb3N7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50OyBcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7IFxuICAgIH1cbiAgICAmIGlvbi1pdGVte1xuICAgICAgICAtLWRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAtLWRldGFpbC1pY29uLWNvbG9yOiMzNDg3YWMhaW1wb3J0YW50O1xuICAgICAgICAmIGlvbi1pY29ue1xuICAgICAgICAgICAgJiBkaXZ7XG4gICAgICAgICAgICAgICAgJi5pY29uLWlubmVye1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB2YXIoLS1kaXNwbGF5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH0gXG4gICAgfSAgICBcbiAgICBcbn1cbmlvbi1pdGVtIHtcbiAgICAmLm1lbnUtaXRlbXN7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMzQ4N2FjO1xuICAgICAgICAtLWJvcmRlci1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cbiAgICB9XG4gICAgXG4gICAgXG59XG5pb24taXRlbTpob3ZlcntcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICMzNDg3YWMgIWltcG9ydGFudDtcbiAgICAvLy0tYm9yZGVyLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG5cbmlvbi1tZW51e1xuICAgICYubWVudV9zZXR0aW5nc3tcbiAgICAgICAgbWFpbntcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogYXF1YTtcbiAgICAgICAgICAgIC8vLS1iYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmF7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIFxufVxuaW9uLWljb257XG4gZm9udC1zaXplOiA1dmg7XG4gLy9wYWRkaW5nLWxlZnQ6IDZ2dzsgVGEgcXVlYnJhbmRvIG8gbWVudSBcbiAvL3BhZGRpbmctdG9wOiA5dmg7XG4gcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWVudV9jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDojMzQ4N2FjO1xufVxuLmltZ3tcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHggIWltcG9ydGFudDsgIFxufVxuXG5cblxuXG5cbiIsIi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzNmYTtcbn1cblxuLmxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3M2ZhO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IHNjcm9sbCFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyLm1lbnVfdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDojMzQ4N2FjO1xuICAtLWJvcmRlci13aWR0aDowO1xufVxuXG5pb24tdGl0bGUubWVudV90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEzcHggIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbmlvbi1tZW51LWJ1dHRvbi5yb3RhdGluZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC0tYmFja2dyb3VuZDojM2RiNmM1O1xuICAtLWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogM3B4IC0ycHggM3B4IDJweCAjNDg3NDkwO1xuICB3aWR0aDogNTRweDtcbiAgaGVpZ2h0OiA1MnB4O1xufVxuaW9uLW1lbnUtYnV0dG9uLnJvdGF0aW5nLm1kIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5pb24tbWVudS1idXR0b24ucm90YXRpbmcuaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbmlvbi1saXN0LmlvcyB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1kaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjojMzQ4N2FjIWltcG9ydGFudDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi1pY29uIGRpdi5pY29uLWlubmVyIHtcbiAgZGlzcGxheTogdmFyKC0tZGlzcGxheSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ubWVudS1pdGVtcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMzQ4N2FjO1xuICAtLWJvcmRlci1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbmlvbi1pdGVtOmhvdmVyIHtcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzM0ODdhYyAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS5tZW51X3NldHRpbmdzIG1haW4ge1xuICAtLWJhY2tncm91bmQ6IGFxdWE7XG59XG5cbmEge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lbnVfY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojMzQ4N2FjO1xufVxuXG4uaW1nIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmaWx0ZXI6IGludmVydCgxKTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/support-list/support-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/support-list/support-list.page.ts ***!
  \***************************************************/
/*! exports provided: SupportListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportListPage", function() { return SupportListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var _app_components_menus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/menus */ "./src/app/components/menus.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modals_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/about/about.component */ "./src/app/modals/about/about.component.ts");








var SupportListPage = /** @class */ (function () {
    function SupportListPage(service, router, menu, modalCtrl) {
        this.service = service;
        this.router = router;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.base_url = "" + src_constants_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].baseUrlProd;
        this.list_exists = false;
    }
    SupportListPage.prototype.ngOnInit = function () {
    };
    SupportListPage.prototype.close = function () {
        this.menu.close();
    };
    SupportListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.navigate = _app_components_menus__WEBPACK_IMPORTED_MODULE_3__["menus"].support;
        this.header1 = window.sessionStorage.getItem('uid');
        this.header2 = window.sessionStorage.getItem('access-token');
        this.header3 = window.sessionStorage.getItem('client');
        console.log("ESSES SÃO OS HEADERS!" + this.header1, this.header2, this.header3);
        this.service.getUserData('api/v1/get-meals', this.header1, this.header2, this.header3).subscribe(function (resp) {
            console.log(JSON.stringify(resp.body));
            _this.toDoList = (resp.body != undefined && resp.body != null) ? resp.body : [];
            _this.list_exists = (_this.toDoList.length == 0) ? false : true;
        });
    };
    SupportListPage.prototype.changePage = function (id_meal, meal_type, item_description, image_file_name, created_at, user_image_url, user_name) {
        sessionStorage.setItem('id_meal', id_meal);
        sessionStorage.setItem('meal_type', meal_type);
        sessionStorage.setItem('description', (item_description));
        sessionStorage.setItem("image_file_name", image_file_name);
        sessionStorage.setItem("meal_created_at", created_at);
        sessionStorage.setItem("user_image_url", user_image_url);
        sessionStorage.setItem("user_name", user_name);
        this.router.navigateByUrl('support-feedback');
    };
    SupportListPage.prototype.about = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modals_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                            cssClass: 'login_page_about_modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.close();
                            _this.ionViewWillEnter();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SupportListPage.prototype.logout = function () {
        var _this = this;
        this.service.signOut('api/auth/sign_out', this.header1, this.header2, this.header3).subscribe(function (resp) {
            if (resp.status === 200) {
                _this.router.navigateByUrl('login');
            }
            else {
                confirm("Erro ao sair. Tente novamente mais tarde.");
            }
        });
    };
    SupportListPage.ctorParameters = function () { return [
        { type: _http_test_service__WEBPACK_IMPORTED_MODULE_2__["HttpTestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
    ]; };
    SupportListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support-list',
            template: __webpack_require__(/*! raw-loader!./support-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/support-list/support-list.page.html"),
            styles: [__webpack_require__(/*! ./support-list.page.scss */ "./src/app/support-list/support-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_test_service__WEBPACK_IMPORTED_MODULE_2__["HttpTestService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], SupportListPage);
    return SupportListPage;
}());



/***/ })

}]);
//# sourceMappingURL=support-list-support-list-module-es5.js.map