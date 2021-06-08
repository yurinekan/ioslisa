(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-menu side=\"start\" menuId=\"first\" class=\"menu_settings\" type=\"overlay\">\n  <ion-header no-border-bottom no-border-top no-border>\n    <ion-toolbar class=\"menu_toolbar\" >  <!--  -->\n      <ion-buttons style=\"margin-left: 0;\" slot=\"start\">\n        <ion-menu-toggle auto-hide=\"true\">\n            <ion-menu-button class=\"rotating\"></ion-menu-button>\n          </ion-menu-toggle>\n        </ion-buttons>\n      <ion-title class=\"menu_title\">MENU</ion-title>\n   <!-- Parado em remover linha sob o \"MENU\" -->\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"menu_content\">\n    \n    <!-- <ion-list *ngFor=\"let p of common\" lines=\"none\">\n      <ion-item (click)=\"p.method\">\n        <ion-icon class=\"img\" name=\"p.icon\" slot=\"start\"></ion-icon>\n      {{p.title}} \n      </ion-item>            \n    </ion-list> -->\n      <ion-list *ngFor=\"let pages of navigate\" lines=\"none\">\n        <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\"  >\n          <ion-icon class=\"img\" [src]=\"pages.icon\" slot=\"start\"></ion-icon>\n        {{pages.title}} \n        </ion-item>            \n      </ion-list>\n      <!-- <ion-list lines=\"none\" > -->\n        <ion-item  (click)=\"about()\" lines=\"none\">\n            <ion-icon class=\"img\" name=\"book\" slot=\"start\"></ion-icon>\n            Sobre\n        </ion-item>\n        <ion-item  (click)=\"logout()\" lines=\"none\">\n            <ion-icon class=\"img\" name=\"exit\" slot=\"start\"></ion-icon>\n            Sair\n        </ion-item>\n      <!-- </ion-list> -->\n      \n  </ion-content>\n</ion-menu>\n<ion-router-outlet main></ion-router-outlet>\n\n<ion-header >\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-toggle>\n            <ion-menu-button></ion-menu-button>\n          </ion-menu-toggle>\n        </ion-buttons>\n\n        <ion-title>INÍCIO</ion-title>\n\n      </ion-toolbar>\n  </ion-header>\n  \n\n<ion-content>\n\n  <div class=\"id_div\">\n    <div class=\"id_data\">\n      <ion-avatar class=\"ion-margin-start ion-margin-end\" slot=\"start\" (click)=\"changePicture()\">\n          <img *ngIf=\"profile_picture_url == null\" class=\"avatar\" src=\"../../../assets/imgs/unknown_user.png\">\n          <img *ngIf=\"profile_picture_url != null\" class=\"avatar\" src={{profile_picture_url}}>\n          <!--  <img src=\"../../../assets/icon/edit.png\" >   ##PARADO NO ICONE DE ADD OU CANETA -->\n      </ion-avatar>\n      <div class=\"id_data_desc\">\n         <ion-label class=\"my_label name\" [(ngModel)]=\"nome\" ngDefaultControl>{{nome}}</ion-label><br>\n         <ion-label class=\"top last data\" [(ngModel)]=\"peso\" ngDefaultControl>Peso:  {{ peso }}kg</ion-label><br>\n         <ion-label class=\"top last data\" [(ngModel)]=\"cintura\" ngDefaultControl>Cintura:  {{ cintura }}cm</ion-label>\n      </div>\n      <ion-label class=\"ion-text-end size-last update\" [(ngModel)]=\"ultimamedicao\" ngDefaultControl>Última medição <ion-label class=\"last\">{{ ultimamedicao }}</ion-label></ion-label>  \n    </div>\n        <!-- <ion-label>Última medição 15/01/2019</ion-label> -->\n        \n  </div>\n\n  <ion-card [(ngModel)]=\"last_meal\" ngDefaultControl *ngIf=\"last_meal\" class=\"lastMeal\">\n    <ion-grid class= \"grid_meal\">\n      <ion-row >\n        <ion-card-header class= \"comment\">\n          <ion-card-title >Última refeição:  &nbsp;   {{ date }}</ion-card-title>\n        </ion-card-header>\n      </ion-row>\n    <ion-row>\n      <ion-col class=\"clean\">\n        <ion-card class=\"border\">\n          <img class=\"image_meal\" src= \"{{ mealImage }} \"/>\n        </ion-card>\n      </ion-col>\n      <ion-col class=\"clean\">\n        \n          <ion-card class=\"info\" >\n            <ion-card-header class=\"clean\">\n              <ion-card-title>Comentário:</ion-card-title>\n            </ion-card-header>\n            <ion-card-content  *ngIf=\"toDoList.description != null\" class=\"clean\">\n              <div class=\"comment\">{{ toDoList.description }}</div>\n            </ion-card-content>\n            <ion-card-content  *ngIf=\"toDoList.description == null\" class=\"clean\">\n                Refeição ainda não possui comentário.\n              </ion-card-content>\n          </ion-card>\n      </ion-col>\n   </ion-row>\n </ion-grid>\n</ion-card>\n  <div class=\"id_div score\">\n    <ion-row class=\"ion-padding score-row\">\n      <ion-col class=\"ion-text-center\" size=\"6\">\n        <ion-row>\n          <ion-label class=\"text-score\">\n            Pontuação da semana:\n          </ion-label>\n        </ion-row>\n      <ion-row class=\"\">\n          <ion-label class=\"text-score score-value first\">\n            {{scoreTotal}}\n          </ion-label>\n        </ion-row>\n        \n      </ion-col>\n      <ion-col class=\"ion-text-center\" size=\"6\">\n          <ion-row>\n              <ion-label class=\"text-score\">\n                Pontuação total:\n              </ion-label>\n            </ion-row>\n            <ion-row class=\"\">\n              <ion-label class=\"text-score score-value second\">\n                  {{scoreTotal}}\n              </ion-label>\n            </ion-row>\n      </ion-col>\n    </ion-row>        \n  </div>\n  <div class=\"bottom-buttons\">\n    <ion-grid class=\"bottom_but\">\n      <ion-row>\n        <ion-button class=\"center main\" routerLink=\"/historical-weight\" >Acompanhe sua evolução</ion-button>\n      </ion-row>\n    \n      <ion-row>\n        <ion-button class=\"center main\" routerLink=\"/waist-measure\" > &nbsp; Atualize suas medidas &nbsp; </ion-button>\n      </ion-row>\n    </ion-grid>\n  </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar.menu_toolbar {\n  --background:#3487ac;\n  --border-width:0;\n}\n\nion-title.menu_title {\n  font-size: 13px !important;\n  padding-left: 13px !important;\n}\n\nion-menu-button {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-menu-button.rotating {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  --background:#3db6c5;\n  --border-radius: 0 !important;\n  box-shadow: 3px -2px 3px 2px #487490;\n  width: 54px;\n  height: 52px;\n}\n\nion-menu-button.rotating.md {\n  margin-left: -1px;\n  margin-top: -2px;\n}\n\nion-menu-button.rotating.ios {\n  margin-left: -5px;\n  margin-top: -3px;\n}\n\nion-list {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\nion-list.ios {\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\nion-list ion-item {\n  --display:none !important;\n  --detail-icon-color:#3487ac!important;\n}\n\nion-list ion-item ion-icon div.icon-inner {\n  display: var(--display) !important;\n}\n\nion-item {\n  color: white;\n  --background: #3487ac;\n  --border-color:rgba(255, 255, 255, 0.5);\n}\n\nion-item:hover {\n  --color: white !important;\n  background: #3487ac !important;\n}\n\nion-menu.menu_settings main {\n  --background: aqua;\n}\n\na {\n  padding-left: 10px;\n}\n\nion-icon {\n  font-size: 5vh;\n  position: relative;\n}\n\nion-avatar {\n  -webkit-margin-start: 2.5vw !important;\n          margin-inline-start: 2.5vw !important;\n}\n\nimg.avatar {\n  border: 4px solid white;\n  min-width: 20.85vw !important;\n  min-height: 20.85vw !important;\n  max-width: 20.85vw !important;\n  max-height: 20.85vw !important;\n  position: absolute;\n}\n\nion-label.first {\n  padding-left: 8vw;\n  opacity: 0.7;\n}\n\nion-label.second {\n  padding-left: 3vw;\n}\n\nion-label.last {\n  font-family: Roboto-Regular;\n}\n\nion-label.size-last {\n  font-size: 12px;\n}\n\nion-label.name {\n  font-size: 1.3em;\n}\n\nion-label.data {\n  font-size: 1em;\n}\n\nion-label.update {\n  width: -webkit-fill-available;\n  margin-right: 2vw;\n}\n\ndiv.bottom-buttons {\n  margin-top: 1vh;\n}\n\ndiv.comment {\n  height: 27vh;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 7;\n  -webkit-box-orient: vertical;\n}\n\nion-button.main {\n  --background: #01ead8;\n  --border-radius: 0px!important;\n  width: 64vw;\n  height: 8vh;\n}\n\nion-button a.button-native {\n  -webkit-padding-start: 2px !important;\n          padding-inline-start: 2px !important;\n  -webkit-padding-end: 2px !important;\n          padding-inline-end: 2px !important;\n}\n\nion-grid {\n  padding-top: 0%;\n}\n\n.grid_meal {\n  max-height: 70%;\n}\n\n.top {\n  margin-top: 2vh;\n}\n\n.id_div {\n  display: -webkit-box;\n  display: flex;\n  background: #3db6c5 !important;\n}\n\n.id_data {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 2vh;\n}\n\n.id_data_desc {\n  padding-left: 7.5vh;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-bottom: 5%;\n}\n\n.right {\n  margin-left: 15%;\n  margin-right: 2vh;\n  max-width: 30%;\n}\n\n.my_label {\n  font-weight: bolder;\n}\n\n.menu_content {\n  --background:#3487ac;\n}\n\n.img {\n  color: black;\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  margin-right: 10px !important;\n  margin-left: -5px !important;\n}\n\n.lastMeal {\n  width: 94.5vw !important;\n  max-width: 100%;\n  max-height: 35%;\n  float: left;\n}\n\n.clean {\n  padding: 0px;\n  margin-bottom: 2px;\n}\n\n.info {\n  padding: 2px;\n  max-height: 85%;\n  margin: 0px;\n  box-shadow: none !important;\n}\n\n.bottom_but {\n  margin-bottom: 10%;\n  padding-bottom: 10%;\n}\n\n.comment {\n  padding: 2px;\n  margin-left: 10px;\n}\n\n.border {\n  border-style: solid;\n  border-width: thick;\n  border-color: #01ead8;\n  height: 25vh;\n}\n\n.image_meal {\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  width: 85%;\n  min-height: 80%;\n}\n\n.score {\n  min-height: 11vh !important;\n  max-height: 11vh !important;\n  min-width: 100vw !important;\n  max-width: 100vw !important;\n  padding-left: 8vw !important;\n  padding-right: 8vw !important;\n}\n\n.score-row {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  min-width: inherit;\n}\n\n.text-score {\n  font-size: 12px;\n  color: white;\n}\n\n.score-value {\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC9uZWthbi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREtJO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQ0ZSOztBREtBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDRko7O0FESUk7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUNIUjs7QURJUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGWjs7QURJUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGWjs7QURRQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUNMSjs7QURNSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7QUNKUjs7QURNSTtFQUNJLHlCQUFBO0VBQ0EscUNBQUE7QUNKUjs7QURPZ0I7RUFDSSxrQ0FBQTtBQ0xwQjs7QURZQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0FDVEo7O0FEYUE7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0FDVko7O0FEaUJRO0VBQ0ksa0JBQUE7QUNkWjs7QURtQkE7RUFDSSxrQkFBQTtBQ2hCSjs7QURtQkE7RUFDQyxjQUFBO0VBR0Esa0JBQUE7QUNsQkQ7O0FEb0JBO0VBQ0ksc0NBQUE7VUFBQSxxQ0FBQTtBQ2pCSjs7QURvQkk7RUFDSSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNqQlI7O0FEcUJJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDbEJSOztBRG9CSTtFQUNJLGlCQUFBO0FDbEJSOztBRG9CSTtFQUNJLDJCQUFBO0FDbEJSOztBRG9CSTtFQUNJLGVBQUE7QUNsQlI7O0FEb0JJO0VBQ0ksZ0JBQUE7QUNsQlI7O0FEb0JJO0VBQ0ksY0FBQTtBQ2xCUjs7QURvQkk7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDbEJSOztBRHNCSTtFQUNJLGVBQUE7QUNuQlI7O0FEcUJJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FDbkJSOztBRHVCSTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ3BCUjs7QUR1QlE7RUFDSSxxQ0FBQTtVQUFBLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtBQ3JCWjs7QUQwQkE7RUFDSSxlQUFBO0FDdkJKOztBRDBCQTtFQUNJLGVBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksZUFBQTtBQ3ZCSjs7QUR5QkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFFQSxlQUFBO0FDdkJKOztBRDBCQTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUN2Qko7O0FEMkJBO0VBQ0ksbUJBQUE7QUN4Qko7O0FEMEJBO0VBQ0ksb0JBQUE7QUN2Qko7O0FEeUJBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDdEJKOztBRHlCQTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDdEJKOztBRHlCQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ3RCSjs7QUQwQkE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDdkJKOztBRDBCRTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUN2Qk47O0FEMEJFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDdkJKOztBRHlCRTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ3RCSjs7QUR3QkU7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDckJKOztBRHVCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDcEJKOztBRHNCRTtFQUNFLGVBQUE7QUNuQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgJi5tZW51X3Rvb2xiYXJ7XG4gICAgICAgIC0tYmFja2dyb3VuZDojMzQ4N2FjO1xuICAgICAgICAtLWJvcmRlci13aWR0aDowO1xuICAgIH1cbiAgIFxufVxuaW9uLXRpdGxle1xuICAgICYubWVudV90aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTNweCAhaW1wb3J0YW50OyBcbiAgICB9XG59XG5pb24tbWVudS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmLnJvdGF0aW5ne1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIC0tYmFja2dyb3VuZDojM2RiNmM1O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IC0ycHggM3B4IDJweCAjNDg3NDkwO1xuICAgICAgICAvLy9cbiAgICAgICAgd2lkdGg6IDU0cHg7XG4gICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgICAgJi5tZHsgXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5pb3N7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgICAgIH1cbiAgICAgIFxuICAgIH1cbn1cblxuaW9uLWxpc3R7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICYuaW9ze1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDsgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50OyBcbiAgICB9XG4gICAgJiBpb24taXRlbXtcbiAgICAgICAgLS1kaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLS1kZXRhaWwtaWNvbi1jb2xvcjojMzQ4N2FjIWltcG9ydGFudDtcbiAgICAgICAgJiBpb24taWNvbntcbiAgICAgICAgICAgICYgZGl2e1xuICAgICAgICAgICAgICAgICYuaWNvbi1pbm5lcntcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdmFyKC0tZGlzcGxheSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9IFxuICAgIH0gICAgXG4gICAgXG59XG5pb24taXRlbSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZDogIzM0ODdhYztcbiAgICAtLWJvcmRlci1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgXG4gICAgXG59XG5pb24taXRlbTpob3ZlcntcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICMzNDg3YWMgIWltcG9ydGFudDtcbiAgICAvLy0tYm9yZGVyLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG5cbmlvbi1tZW51e1xuICAgICYubWVudV9zZXR0aW5nc3tcbiAgICAgICAgbWFpbntcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogYXF1YTtcbiAgICAgICAgICAgIC8vLS1iYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmF7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIFxufVxuaW9uLWljb257XG4gZm9udC1zaXplOiA1dmg7XG4gLy9wYWRkaW5nLWxlZnQ6IDZ2dzsgVGEgcXVlYnJhbmRvIG8gbWVudSBcbiAvL3BhZGRpbmctdG9wOiA5dmg7XG4gcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWF2YXRhcntcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAyLjV2dyAhaW1wb3J0YW50O1xufVxuaW1ne1xuICAgICYuYXZhdGFye1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgbWluLXdpZHRoOiAyMC44NXZ3IWltcG9ydGFudDtcbiAgICAgICAgbWluLWhlaWdodDogMjAuODV2dyFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogMjAuODV2dyFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwLjg1dnchaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxufVxuaW9uLWxhYmVse1xuICAgICYuZmlyc3R7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOHZ3O1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICAgICYuc2Vjb25ke1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDN2dztcbiAgICB9XG4gICAgJi5sYXN0e1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXI7XG4gICAgfVxuICAgICYuc2l6ZS1sYXN0e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgICYubmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB9XG4gICAgJi5kYXRhe1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gICAgJi51cGRhdGV7XG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcbiAgICB9XG59XG5kaXZ7XG4gICAgJi5ib3R0b20tYnV0dG9uc3tcbiAgICAgICAgbWFyZ2luLXRvcDogMXZoO1xuICAgIH1cbiAgICAmLmNvbW1lbnR7XG4gICAgICAgIGhlaWdodDogMjd2aDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogNztcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICB9XG59XG5pb24tYnV0dG9ue1xuICAgICYubWFpbntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDFlYWQ4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweCFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA2NHZ3O1xuICAgICAgICBoZWlnaHQ6IDh2aDtcbiAgICB9XG4gICAgJiBhe1xuICAgICAgICAmLmJ1dHRvbi1uYXRpdmV7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMnB4IWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMnB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWdyaWR7XG4gICAgcGFkZGluZy10b3A6IDAlO1xufVxuXG4uZ3JpZF9tZWFse1xuICAgIG1heC1oZWlnaHQ6IDcwJTtcbn1cblxuLnRvcHtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG59XG4uaWRfZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogIzNkYjZjNSAhaW1wb3J0YW50O1xuXG59XG4uaWRfZGF0YXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vbWFyZ2luLWxlZnQ6IDJ2aDtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgXG59XG4uaWRfZGF0YV9kZXNje1xuICAgIHBhZGRpbmctbGVmdDogNy41dmg7XG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgXG59XG4ucmlnaHR7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2aDtcbiAgICBtYXgtd2lkdGg6IDMwJTtcblxufVxuXG4ubXlfbGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5tZW51X2NvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiMzNDg3YWM7XG59XG4uaW1ne1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogLTVweCAhaW1wb3J0YW50OyAgXG59XG5cbi5sYXN0TWVhbHtcbiAgICB3aWR0aDogOTQuNXZ3IWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMzUlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2xlYW57XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDsgXG59XG5cbi5pbmZve1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtYXgtaGVpZ2h0OiA4NSU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYm90dG9tX2J1dHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLmNvbW1lbnR7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG59XG5cbi5ib3JkZXIge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGljaztcbiAgICBib3JkZXItY29sb3I6ICMwMWVhZDg7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICB9XG5cbiAgLmltYWdlX21lYWx7XG4gICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2VudGVye1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogODUlO1xuICAgIG1pbi1oZWlnaHQ6IDgwJTtcbiAgfVxuICAuc2NvcmV7XG4gICAgbWluLWhlaWdodDogMTF2aCFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTF2aCFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAxMDB2dyFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDB2dyFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiA4dnchaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDh2dyFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNjb3JlLXJvd3tcbiAgICBwYWRkaW5nLWxlZnQ6IDAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiBpbmhlcml0O1xuICB9XG4gIC50ZXh0LXNjb3Jle1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnNjb3JlLXZhbHVle1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuIiwiaW9uLXRvb2xiYXIubWVudV90b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiMzNDg3YWM7XG4gIC0tYm9yZGVyLXdpZHRoOjA7XG59XG5cbmlvbi10aXRsZS5tZW51X3RpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTNweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuaW9uLW1lbnUtYnV0dG9uLnJvdGF0aW5nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLS1iYWNrZ3JvdW5kOiMzZGI2YzU7XG4gIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAzcHggLTJweCAzcHggMnB4ICM0ODc0OTA7XG4gIHdpZHRoOiA1NHB4O1xuICBoZWlnaHQ6IDUycHg7XG59XG5pb24tbWVudS1idXR0b24ucm90YXRpbmcubWQge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbmlvbi1tZW51LWJ1dHRvbi5yb3RhdGluZy5pb3Mge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3QuaW9zIHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xuICAtLWRldGFpbC1pY29uLWNvbG9yOiMzNDg3YWMhaW1wb3J0YW50O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWljb24gZGl2Lmljb24taW5uZXIge1xuICBkaXNwbGF5OiB2YXIoLS1kaXNwbGF5KSAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMzQ4N2FjO1xuICAtLWJvcmRlci1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbmlvbi1pdGVtOmhvdmVyIHtcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzM0ODdhYyAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS5tZW51X3NldHRpbmdzIG1haW4ge1xuICAtLWJhY2tncm91bmQ6IGFxdWE7XG59XG5cbmEge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDIuNXZ3ICFpbXBvcnRhbnQ7XG59XG5cbmltZy5hdmF0YXIge1xuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbiAgbWluLXdpZHRoOiAyMC44NXZ3ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDIwLjg1dncgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyMC44NXZ3ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDIwLjg1dncgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tbGFiZWwuZmlyc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDh2dztcbiAgb3BhY2l0eTogMC43O1xufVxuaW9uLWxhYmVsLnNlY29uZCB7XG4gIHBhZGRpbmctbGVmdDogM3Z3O1xufVxuaW9uLWxhYmVsLmxhc3Qge1xuICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXI7XG59XG5pb24tbGFiZWwuc2l6ZS1sYXN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuaW9uLWxhYmVsLm5hbWUge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuaW9uLWxhYmVsLmRhdGEge1xuICBmb250LXNpemU6IDFlbTtcbn1cbmlvbi1sYWJlbC51cGRhdGUge1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XG59XG5cbmRpdi5ib3R0b20tYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDF2aDtcbn1cbmRpdi5jb21tZW50IHtcbiAgaGVpZ2h0OiAyN3ZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiA3O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG5pb24tYnV0dG9uLm1haW4ge1xuICAtLWJhY2tncm91bmQ6ICMwMWVhZDg7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4IWltcG9ydGFudDtcbiAgd2lkdGg6IDY0dnc7XG4gIGhlaWdodDogOHZoO1xufVxuaW9uLWJ1dHRvbiBhLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuXG4uZ3JpZF9tZWFsIHtcbiAgbWF4LWhlaWdodDogNzAlO1xufVxuXG4udG9wIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4uaWRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogIzNkYjZjNSAhaW1wb3J0YW50O1xufVxuXG4uaWRfZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cblxuLmlkX2RhdGFfZGVzYyB7XG4gIHBhZGRpbmctbGVmdDogNy41dmg7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4ucmlnaHQge1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDJ2aDtcbiAgbWF4LXdpZHRoOiAzMCU7XG59XG5cbi5teV9sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5tZW51X2NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IzM0ODdhYztcbn1cblxuLmltZyB7XG4gIGNvbG9yOiBibGFjaztcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTVweCAhaW1wb3J0YW50O1xufVxuXG4ubGFzdE1lYWwge1xuICB3aWR0aDogOTQuNXZ3ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNsZWFuIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5pbmZvIHtcbiAgcGFkZGluZzogMnB4O1xuICBtYXgtaGVpZ2h0OiA4NSU7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ib3R0b21fYnV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG4uY29tbWVudCB7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaWNrO1xuICBib3JkZXItY29sb3I6ICMwMWVhZDg7XG4gIGhlaWdodDogMjV2aDtcbn1cblxuLmltYWdlX21lYWwge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA4NSU7XG4gIG1pbi1oZWlnaHQ6IDgwJTtcbn1cblxuLnNjb3JlIHtcbiAgbWluLWhlaWdodDogMTF2aCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxMXZoICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDh2dyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA4dncgIWltcG9ydGFudDtcbn1cblxuLnNjb3JlLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogaW5oZXJpdDtcbn1cblxuLnRleHQtc2NvcmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNjb3JlLXZhbHVlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_components_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/components/menus */ "./src/app/components/menus.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_http_test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_modals_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/about/about.component */ "./src/app/modals/about/about.component.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");











// import { User } from '../../model/user';
var HomePage = /** @class */ (function () {
    function HomePage(googlePlus, route, platform, camera, actionSheetCtrl, modalCtrl, menu, router, service) {
        this.googlePlus = googlePlus;
        this.route = route;
        this.platform = platform;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        this.router = router;
        this.service = service;
        this.pictureChanged = false;
        this.nome = "";
        this.peso = "";
        this.cintura = "";
        this.scoreTotal = 0;
        this.check = false;
        this.hasShown = false;
        moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('pt-BR');
    }
    HomePage.prototype.ionViewDidEnter = function () {
        if (window.sessionStorage.getItem('isNewUser') === String(true) && (this.hasShown === false)) {
            this.about();
            this.hasShown = true;
        }
    };
    HomePage.prototype.ngOnInit = function () {
        // this.nome ="0";
        // this.peso =0;
        // this.cintura=1;
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log(window.sessionStorage.getItem('user_type'));
        this.navigate = _app_components_menus__WEBPACK_IMPORTED_MODULE_2__["menus"].user;
        this.ultimamedicao = moment__WEBPACK_IMPORTED_MODULE_5__(Date.now()).format('L');
        this.header1 = window.sessionStorage.getItem('uid');
        this.header2 = window.sessionStorage.getItem('access-token');
        this.header3 = window.sessionStorage.getItem('client');
        console.log("ESSES SÃO OS HEADERS!" + this.header1, this.header2, this.header3);
        this.service.getUserData('api/v1/users', this.header1, this.header2, this.header3).subscribe(function (resp) {
            console.log("aqui esta o response" + JSON.stringify(resp.body));
            _this.id = resp.body.user.id;
            _this.nome = resp.body.user.name;
            _this.nome = _this.nome.split(' ').length > 2 ? _this.nome.split(' ').slice(0, -1).join(' ') : _this.nome;
            _this.scoreTotal = resp.body.client_detail_attributes.score_total != null ? resp.body.client_detail_attributes.score_total : _this.scoreTotal;
            _this.profile_picture_url = resp.body.user.image_url ? "" + _constants_constants__WEBPACK_IMPORTED_MODULE_9__["constants"].baseUrlProd + resp.body.user.image_url : null;
            _this.peso = String(resp.body.client_physicals_attributes[(resp.body.client_physicals_attributes.length - 1)].weight_kg);
            _this.cintura = String(resp.body.client_physicals_attributes[(resp.body.client_physicals_attributes.length - 1)].waist_cm);
            _this.ultimamedicao = moment__WEBPACK_IMPORTED_MODULE_5__(JSON.parse(JSON.stringify(resp.body.client_physicals_attributes[(resp.body.client_physicals_attributes.length - 1)].updated_at))).format('DD/MM/YYYY');
            sessionStorage.setItem('score', String(_this.scoreTotal));
            if (_this.peso) {
                _this.peso = _this.peso.replace(".", ",");
            }
            if (_this.cintura) {
                _this.cintura = _this.cintura.replace(".", ",");
            }
        });
        this.service.getUserData('api/v1/meals', this.header1, this.header2, this.header3).subscribe(function (resp) {
            console.log("ESSE É O REQUEST DAS REFEIÇÕES" + JSON.stringify(resp.body));
            if (!resp.body.data) {
                _this.toDoList = resp.body;
                _this.date = moment__WEBPACK_IMPORTED_MODULE_5__((resp.body.created_at)).format('DD/MM/YYYY');
                _this.last_meal = true;
                _this.mealImage = "" + _constants_constants__WEBPACK_IMPORTED_MODULE_9__["constants"].baseUrlProd + resp.body.image_url;
                console.log("AGORA ESTÁ CERTO :" + (_this.toDoList.description));
            }
        });
        console.log("ESSES SÃO OS HEADERS!!!!!!" + this.header1, this.header2, this.header3);
        if (window.sessionStorage.getItem('google_user').length > 0) {
            var google_user = JSON.parse(window.sessionStorage.getItem('google_user'));
            this.nome = google_user.name;
            this.profile_picture_url = google_user.picture;
            this.nome = this.nome.split(' ').length > 2 ? this.nome.split(' ').slice(0, -1).join(' ') : this.nome;
        }
    };
    HomePage.prototype.ionViewWillLeave = function () {
        //fecha o menu independente do caminho que for, então sempre a principal carrega sem menu aberto
        this.menu.close();
    };
    HomePage.prototype.doGoogleLogout = function () {
        var _this = this;
        this.googlePlus.logout()
            .then(function (res) {
            //user logged out so we will remove him from the NativeStorage
            localStorage.setItem('google_login', 'false');
            _this.router.navigate(["/login"]);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.nav = function (page) {
        console.log(page);
        this.router.navigateByUrl(page);
    };
    HomePage.prototype.about = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modals_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                            cssClass: 'login_page_about_modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.menu.close();
                            _this.ionViewWillEnter();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.changePage = function (id_meal, item_description, image_file_name) {
        sessionStorage.setItem('id_meal', id_meal);
        sessionStorage.setItem('description', (item_description));
        sessionStorage.setItem("image_file_name", image_file_name);
        this.router.navigateByUrl('user-meal-history');
    };
    HomePage.prototype.changePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Alterar foto do perfil',
                            buttons: [
                                {
                                    text: 'Tirar foto',
                                    handler: function () {
                                        _this.getImageFromCamera();
                                    }
                                },
                                {
                                    text: 'Selecionar foto da galeria',
                                    handler: function () {
                                        _this.getImageFromGallery();
                                    }
                                },
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () { }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getImageFromGallery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // this.user.profile_picture_url = 'data:image/jpeg;base64,' + imageData;
            _this.profile_picture_url = 'data:image/jpeg;base64,' + imageData;
            _this.pictureChanged = true;
        }, function (err) { });
    };
    HomePage.prototype.getImageFromCamera = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // this.user.profile_picture_url = 'data:image/jpeg;base64,' + imageData;
            _this.profile_picture_url = 'data:image/jpeg;base64,' + imageData;
            _this.pictureChanged = true;
            _this.updatePicture();
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.updatePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.updateData('api/v1/users', this.id, this.profile_picture_url, this.header1, this.header2, this.header3).subscribe(function (resp) {
                            if (resp.status === 200) {
                                confirm("Atualizado com sucesso.");
                            }
                            else {
                                confirm("Erro ao atualizar. Tente novamente mais tarde.");
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        if (localStorage.getItem('google_login') == 'true') {
            this.doGoogleLogout();
        }
        else {
            this.service.signOut('api/auth/sign_out', this.header1, this.header2, this.header3).subscribe(function (resp) {
                if (resp.status === 200) {
                    _this.router.navigateByUrl('login');
                }
                else {
                    confirm("Erro ao sair. Tente novamente mais tarde.");
                }
            });
        }
        window.sessionStorage.clear();
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__["GooglePlus"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_http_test_service__WEBPACK_IMPORTED_MODULE_4__["HttpTestService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__["GooglePlus"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_http_test_service__WEBPACK_IMPORTED_MODULE_4__["HttpTestService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map