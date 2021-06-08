(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Editar Perfil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"fGroup\" (ngSubmit)=\"submitForm()\">\n    <ion-row justify-content-center>\n      <div class=\"profile-div\">\n        <img class=\"profile\" [src]=\"profile_picture_url\" (click)=\"changePicture()\" >\n      </div>\n      \n      \n    </ion-row>\n    <div class=\"form-group\">        \n      <ion-item>\n          <ion-label position=\"floating\" align-self-bottom>Nome completo</ion-label>\n          <ion-input type=\"text\" class=\"form-control\"  formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" value=\"{{nome}}\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && fGroup.controls['name'].errors\">\n        <div id=\"valid\" *ngIf=\"fGroup.controls['name'].errors\" >*Insira um nome válido.</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <ion-item>\n        <ion-label position=\"floating\" >Data de nascimento</ion-label>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" cancelText = \"Cancelar\" doneText = \"Salvar\" formControlName=\"birthdate\" [ngClass]=\"{ 'error': fGroup.controls['birthdate'].errors }\" value=\"{{birthUser}}\"></ion-datetime>\n      </ion-item>\n      <div *ngIf=\"submitted && fGroup.controls['birthdate'].errors\">\n        <div id=\"valid\" [hidden]=\"!fGroup.controls['birthdate'].errors.required\">*Insira sua data de aniversário.</div>\n      </div>\n    </div>\n    \n    <div class=\"form-group\">\n      <ion-item>\n        <ion-label position=\"floating\">E-mail</ion-label>\n        <ion-input type=\"email\"  formControlName=\"email\" value=\"{{emailUser}}\" [ngClass]=\"{ 'error': fGroup.controls['email'].errors }\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\" *ngIf=\"submitted && fGroup.controls['email'].errors\" >\n        <div id=\"valid\" [hidden]=\"!fGroup.controls['email'].errors\">*Insira um e-mail valido.</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <ion-item>    \n        <ion-label position=\"floating\">Senha</ion-label>\n        <ion-input type=\"password\"  formControlName=\"password\" [ngClass]=\"{ 'error': fGroup.controls['password'].errors }\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && fGroup.controls['password'].errors\">\n        <div id=\"valid\" [hidden]=\"!fGroup.controls['password'].errors.required\">*Insira uma senha, minimo 6 digitos.</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <ion-item>\n        <ion-label position=\"floating\">Confirmar senha</ion-label>\n        <ion-input type=\"password\"  formControlName=\"password_confirmation\" compare=\"password\" [ngClass]=\"{ 'error': fGroup.controls['password_confirmation'].errors }\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && fGroup.controls['password_confirmation'].errors\">\n        <div id=\"valid\" [hidden]=\"!fGroup.controls['password_confirmation'].errors.required\">*Confirme sua senha.</div>\n      </div>\n      <div class=\"error-messages\">\t\t\t\t\n        <div id=\"valid\" *ngIf=\"!fGroup.get('password_confirmation').errors && fGroup.hasError('passwordNotMatch') && (fGroup.get('password_confirmation').dirty || fGroup.get('password_confirmation').touched)\">\n          Senha e confirmar senha não conferem.\n        </div>\n      </div>\n    </div>\n    <br/>\n\n    <ion-row justify-content-center>\n      <div class = \"central\" text-center>  \n        <ion-button class='left' (click)=\"home()\">Cancelar</ion-button>   \n        <ion-button class='right'type=\"submit\">Concluir</ion-button>   \n      </div>\n    </ion-row>  \n    \n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");









var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
            bootstrap: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  padding: 5%;\n}\n\nion-button.left {\n  margin-right: 2.5vw;\n}\n\nion-button.right {\n  margin-left: 2.5vw;\n}\n\n.profile {\n  height: 170px;\n  width: 170px;\n}\n\n.profile-div {\n  border-style: solid;\n  border-radius: 8px;\n  border-width: 5px;\n  border-color: #3db6c5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC9uZWthbi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVJO0VBQ0ksbUJBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0FDQ1I7O0FERUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xuICAgIHBhZGRpbmc6IDUlO1xufVxuaW9uLWJ1dHRvbntcbiAgICAmLmxlZnR7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMi41dnc7XG4gICAgfVxuICAgICYucmlnaHR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjV2dztcbiAgICB9XG59XG4ucHJvZmlsZXtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIHdpZHRoOiAxNzBweDtcbn1cbi5wcm9maWxlLWRpdntcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBib3JkZXItY29sb3I6ICMzZGI2YzU7XG59IiwiZm9ybSB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG5pb24tYnV0dG9uLmxlZnQge1xuICBtYXJnaW4tcmlnaHQ6IDIuNXZ3O1xufVxuaW9uLWJ1dHRvbi5yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiAyLjV2dztcbn1cblxuLnByb2ZpbGUge1xuICBoZWlnaHQ6IDE3MHB4O1xuICB3aWR0aDogMTcwcHg7XG59XG5cbi5wcm9maWxlLWRpdiB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogIzNkYjZjNTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_http_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http-test.service */ "./src/app/http-test.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var ProfilePage = /** @class */ (function () {
    function ProfilePage(router, fBuilder, service, camera, actionSheetCtrl) {
        this.router = router;
        this.fBuilder = fBuilder;
        this.service = service;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.submitted = false;
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.header1 = window.sessionStorage.getItem('uid');
        this.header2 = window.sessionStorage.getItem('access-token');
        this.header3 = window.sessionStorage.getItem('client');
        this.service.getUserData('api/v1/users', this.header1, this.header2, this.header3).subscribe(function (resp) {
            console.log("aqui esta o response" + JSON.stringify(resp.body));
            _this.nome = resp.body.user.name;
            _this.emailUser = resp.body.user.email;
            _this.birthUser = resp.body.client_detail_attributes.birthdate;
            //this.nome = this.nome.split(' ').length > 2 ? this.nome.split(' ').slice(0, -1).join(' '): this.nome;
            _this.profile_picture_url = resp.body.user.image_url ? "" + src_constants_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].baseUrlProd + resp.body.user.image_url : "../../../assets/imgs/unknown_user.png";
        });
    };
    ProfilePage.prototype.ngOnInit = function () {
        this.fGroup = this.fBuilder.group({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z\'\-\u00C0-\u00FF].*[\]+[a-zA-Z\'\-\u00C0-\u00FF].*$/)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            password_confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, {
            validators: this.password.bind(this)
        });
    };
    Object.defineProperty(ProfilePage.prototype, "f", {
        get: function () { return this.fGroup.controls; },
        enumerable: true,
        configurable: true
    });
    ProfilePage.prototype.password = function (formGroup) {
        var password = formGroup.get('password').value;
        var password_confirmation = formGroup.get('password_confirmation').value;
        return password === password_confirmation ? null : { passwordNotMatch: true };
    };
    ProfilePage.prototype.submitForm = function () {
        var _this = this;
        //debugger
        this.service.updateUser('api/v1/users', parseInt(window.sessionStorage.getItem('id')), this.fGroup, this.header1, this.header2, this.header3).subscribe(function (data) {
            console.log(data.body);
            console.log(data);
            if (data.status === 200 || data.status === 201) {
                _this.router.navigateByUrl('home');
                //  this.loading.dismiss();
                //  this.toast.present();
            }
            else {
            }
        }, function (error) {
            //console.log("teste valendo junior");
            // this.loading.dismiss();
            // this.toastFail.present();
        });
    };
    ProfilePage.prototype.changePicture = function () {
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
    ProfilePage.prototype.getImageFromGallery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // this.user.profile_picture_url = 'data:image/jpeg;base64,' + imageData;
            _this.fGroup.value.image = 'data:image/jpeg;base64,' + imageData;
            _this.profile_picture_url = _this.fGroup.value.image;
        }, function (err) { });
    };
    ProfilePage.prototype.getImageFromCamera = function () {
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
            _this.fGroup.value.image = 'data:image/jpeg;base64,' + imageData;
            _this.profile_picture_url = _this.fGroup.value.image;
            //this.pictureChanged = true;
            //this.updatePicture();
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.home = function () {
        this.router.navigateByUrl('home');
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_http_test_service__WEBPACK_IMPORTED_MODULE_3__["HttpTestService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_http_test_service__WEBPACK_IMPORTED_MODULE_3__["HttpTestService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map