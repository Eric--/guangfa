var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CookieService } from './service/cookie.service';
var AppComponent = (function () {
    function AppComponent(cookieService) {
        this.cookieService = cookieService;
        this.layerHidden = true;
        this.loginPopupShow = false;
        this.loginStatus = false;
        this.userName = '';
    }
    AppComponent.prototype.topbarHandler = function (_a) {
        var type = _a.type;
        if (type == 'login') {
            this.loginPopupShow = true;
            this.layerHidden = false;
        }
        else {
            this.userName = '';
            this.loginStatus = false;
        }
    };
    AppComponent.prototype.loginPopupHandler = function (_a) {
        var show = _a.show, userName = _a.userName;
        this.loginPopupShow = show;
        this.layerHidden = !show;
        if (userName) {
            this.userName = userName;
            this.loginStatus = true;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var userName = this.cookieService.getCookie('sys_username');
        if (userName) {
            this.userName = userName;
            this.loginStatus = true;
        }
        else {
            this.loginPopupShow = true;
            this.layerHidden = false;
        }
    };
    AppComponent.prototype.ngOnChanges = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'system-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [CookieService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map