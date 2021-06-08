(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-camera-view-camera-view-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/camera-view/camera-view.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/camera-view/camera-view.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"picture.length===0\">\n  <div  *ngIf=\"cameraState==true\">\n    <div class=\"ion-canvas\" >\n     <canvas #canvas></canvas>\n    </div>\n      <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" >\n          <ion-fab-button (click)=\"takePicture()\">\n            <img  class=\"img\" src=\"../../../assets/imgs/circle-solid.svg\">\n          </ion-fab-button>\n      </ion-fab>\n      <ion-fab class=\"right\" vertical=\"bottom\" horizontal=\"right\" slot=\"fixed\" >\n          <ion-fab-button (click)=\"terminateCamera()\">\n            <ion-icon name=\"arrow-back\"></ion-icon>\n          </ion-fab-button>\n      </ion-fab>\n  </div>\n</div>      \n<div  *ngIf=\"picture.length>0\">\n  <img class=\"photo\" src=\"{{picture}}\">\n  <ion-row class=\"bottom\" style=\"display: flex;\" justify-content-center >\n    <ion-button class=\"modal_buttons back\" (click)=\"cancel()\" >CANCELAR</ion-button> \n    <ion-button class=\"modal_buttons button_ok back\" (click)=\"use_photo()\" >OK</ion-button>\n  </ion-row>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/camera-view/camera-view.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/camera-view/camera-view.module.ts ***!
  \*********************************************************/
/*! exports provided: CameraViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraViewPageModule", function() { return CameraViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _camera_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera-view.page */ "./src/app/pages/camera-view/camera-view.page.ts");







var routes = [
    {
        path: '',
        component: _camera_view_page__WEBPACK_IMPORTED_MODULE_6__["CameraViewPage"]
    }
];
var CameraViewPageModule = /** @class */ (function () {
    function CameraViewPageModule() {
    }
    CameraViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_camera_view_page__WEBPACK_IMPORTED_MODULE_6__["CameraViewPage"]]
        })
    ], CameraViewPageModule);
    return CameraViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/camera-view/camera-view.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/camera-view/camera-view.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-button {\n  --background: transparent;\n  --box-shadow: none;\n}\n\nion-icon {\n  color: white;\n  width: 100%;\n  height: 100%;\n}\n\n.bottom {\n  margin-top: 90vh;\n}\n\n.right {\n  margin-left: 80vw;\n}\n\n.img {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n}\n\n.photo {\n  position: fixed;\n  top: 0;\n  bottom: 10vh;\n  left: 0;\n  right: 0;\n  max-width: 100vw;\n  max-height: 90vh;\n  min-height: 80vh;\n  margin: auto;\n  overflow: auto;\n  orientation: portrait;\n}\n\n.back {\n  z-index: 100;\n  display: -webkit-box;\n  display: flex;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJpbmVrYW4vRGVza3RvcC9uZWthbi9Qcm9qZXRvcy9Jb25pYy9saXNhLW9iZXNpZGFkZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy9jYW1lcmEtdmlldy9jYW1lcmEtdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhbWVyYS12aWV3L2NhbWVyYS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0csZ0JBQUE7QUNFSDs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtVQUFBLGlCQUFBO0FDSUo7O0FEREE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFFQSxVQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYW1lcmEtdmlldy9jYW1lcmEtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBcbn1cbmlvbi1pY29ue1xuICAgIGNvbG9yOiB3aGl0ZTs7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmJvdHRvbXtcbiAgIG1hcmdpbi10b3A6OTB2aDsgXG59XG4ucmlnaHR7XG4gICAgbWFyZ2luLWxlZnQ6ODB2dztcbn1cbi5pbWd7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gICAgICBcbn1cbi5waG90b3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMTB2aDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgbWF4LWhlaWdodDogOTB2aDtcbiAgICAvL21pbi13aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogODB2aDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3JpZW50YXRpb246IHBvcnRyYWl0O1xufVxuLmJhY2t7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy9iYWNrZ3JvdW5kOiBibGFjaztcbiAgICBvcGFjaXR5OiAxXG4gICB9XG4vLyAuY2FtZXJhLWJ1dHRvbntcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgbGVmdDo1MCU7XG4vLyAgICAgdG9wOjUwJVxuXG4vLyAgfVxuXG4vLyAucGhvdG97XG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICAgIHRvcDogMDtcbi8vICAgICBib3R0b206IDA7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgICAgbWF4LWhlaWdodDogMTAwJTtcbi8vICAgICBtYXJnaW46IGF1dG87XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG87XG4vLyAgICAgLy9iYWNrZ3JvdW5kOiBibGFjaztcbiAgICBcbi8vICAgICAvKiBtaW4td2lkdGg6IDkwJTtcbi8vICAgICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgICAgbWF4LWhlaWdodDogOTUlO1xuLy8gICAgIG1pbi1oZWlnaHQ6IDkwMCU7ICovXG4vLyAgICAgb3JpZW50YXRpb246IHBvcnRyYWl0O1xuLy8gfVxuLy8gLmJhY2t7XG4vLyBiYWNrZ3JvdW5kOiBibGFjaztcbi8vIG9wYWNpdHk6IDFcbi8vIH1cbi8vIC5jYW5jZWx7XG5cbi8vIH1cbi8vIC5va3tcblxuLy8gfSIsImlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDkwdmg7XG59XG5cbi5yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiA4MHZ3O1xufVxuXG4uaW1nIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi5waG90byB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDEwdmg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBtaW4taGVpZ2h0OiA4MHZoO1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvcmllbnRhdGlvbjogcG9ydHJhaXQ7XG59XG5cbi5iYWNrIHtcbiAgei1pbmRleDogMTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/camera-view/camera-view.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/camera-view/camera-view.page.ts ***!
  \*******************************************************/
/*! exports provided: CameraViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraViewPage", function() { return CameraViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "./node_modules/@ionic-native/camera-preview/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CameraViewPage = /** @class */ (function () {
    function CameraViewPage(cameraPreview, router) {
        this.cameraPreview = cameraPreview;
        this.router = router;
        this.picture = "";
        this.cameraState = false;
        this.confirm_photo = false;
        // melhorar fluxo da camera
    }
    CameraViewPage.prototype.ngOnInit = function () { };
    CameraViewPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cameraPreviewOpts;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (false /* (this.picture.size!==0) */) {} /* (this.picture.size!==0) */
                        cameraPreviewOpts = {
                            x: 0,
                            y: 0,
                            width: window.screen.width,
                            height: window.screen.height,
                            camera: 'rear',
                            tapPhoto: true,
                            previewDrag: true,
                            toBack: true,
                            alpha: 1
                        };
                        this.cameraState = true;
                        // start camera
                        return [4 /*yield*/, this.cameraPreview.startCamera(cameraPreviewOpts).then(function (res) {
                                _this.drawCircle();
                                //alert(res);
                            }, function (err) {
                                console.log(err);
                                confirm("Erro na câmera!");
                                _this.router.navigate(['home']);
                            })];
                    case 1:
                        // start camera
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CameraViewPage.prototype.ionViewDidEnter = function () {
        this._CANVAS = this.canvasEl.nativeElement;
        this._CANVAS.width = window.innerWidth;
        this._CANVAS.height = window.innerHeight;
        this.initialiseCanvas();
    };
    CameraViewPage.prototype.initialiseCanvas = function () {
        if (this._CANVAS.getContext) {
            this.setupCanvas();
        }
    };
    CameraViewPage.prototype.setupCanvas = function () {
        this._CONTEXT = this._CANVAS.getContext('2d');
        this.refresh();
    };
    CameraViewPage.prototype.refresh = function () {
        this.drawCircle();
    };
    CameraViewPage.prototype.drawCircle = function () {
        this._CONTEXT.beginPath();
        // x, y, radius, startAngle, endAngle
        this._CONTEXT.arc(this._CANVAS.width / 2, this._CANVAS.height / 2, 150, 0, 2 * Math.PI);
        this._CONTEXT.lineWidth = 4;
        this._CONTEXT.strokeStyle = '#0000FF'; /* '#ffffff' */
        this._CONTEXT.stroke();
    };
    // //CAMERA
    // // Set the handler to run every time we take a picture
    // this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
    //   console.log(result);
    //   // do something with the result
    // });
    CameraViewPage.prototype.takePicture = function () {
        var _this = this;
        // picture options
        var pictureOpts = {
            width: 1280,
            height: 1280,
            quality: 85
        };
        // take a picture
        this.cameraPreview.takePicture(pictureOpts).then(function (imageData) {
            _this.picture = 'data:image/jpeg;base64,' + imageData;
            //this.cameraPreview.hide();
            _this.cameraPreview.stopCamera();
            //this.content.setElementStyle("background-color","black")
            //confirm(this._CANVAS.style.display);
        }, function (err) {
            console.log(err);
            confirm("Erro na câmera!");
            _this.router.navigate(['photo-register']);
        });
        //this._CANVAS.style.display="hidden";
        this.cameraState = false;
    };
    CameraViewPage.prototype.cancel = function () {
        this.router.navigateByUrl('photo-register');
    };
    CameraViewPage.prototype.use_photo = function () {
        this.confirm_photo = true;
        //this.cameraState = false;
        //this.picture="";
        // const toast = this.toastCtrl.create({
        //   message: 'Photo was added successfully',
        //   duration: 1500,
        //   position: 'top'
        // });
        // toast.present();
        //this.reset_camera_preview();
        var picture_meal = {
            queryParams: {
                photo: JSON.stringify(this.picture)
            }
        };
        this.router.navigate(['photo-register'], picture_meal);
    };
    CameraViewPage.prototype.reset_camera_preview = function () {
        //this._CANVAS.style.display="block";
        this.picture = "";
        this.refresh();
        this.cameraState = true;
        this.cameraPreview.show();
        //this.content.setElementStyle("background-color","transparent")
    };
    CameraViewPage.prototype.cameraSwitch = function () {
        // Switch camera
        this.cameraPreview.switchCamera();
    };
    CameraViewPage.prototype.effect = function () {
        // set color effect to negative
        this.cameraPreview.setColorEffect('negative');
    };
    CameraViewPage.prototype.terminateCamera = function () {
        // Stop the camera preview
        this.cameraPreview.stopCamera();
        this.router.navigateByUrl('photo-register');
        // const rootElement = <HTMLElement>document.getElementsByTagName('html')[0];
        // rootElement.classList.remove('camera-open');
    };
    CameraViewPage.ctorParameters = function () { return [
        { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CameraViewPage.prototype, "canvasEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], CameraViewPage.prototype, "content", void 0);
    CameraViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-camera-view',
            template: __webpack_require__(/*! raw-loader!./camera-view.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/camera-view/camera-view.page.html"),
            styles: [__webpack_require__(/*! ./camera-view.page.scss */ "./src/app/pages/camera-view/camera-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CameraViewPage);
    return CameraViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-camera-view-camera-view-module-es5.js.map