var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var LoginPopupComponent = (function () {
    function LoginPopupComponent(http) {
        this.http = http;
        this.postMessage = new EventEmitter();
        this.errorShow = false;
        this.loginUrl = 'http://www.bitonair.com/app/user/';
    }
    LoginPopupComponent.prototype.hide = function () {
        this.postMessage.emit({ show: false });
    };
    LoginPopupComponent.prototype.userLogin = function () {
        var _this = this;
        //post
        var headers = new Headers({ 'Content-Type': 'application/multipart/form-data' });
        var options = new RequestOptions({ headers: headers });
        var body = "username=" + this.account + "&password=" + this.password;
        //get
        // let urlSearchParams = new URLSearchParams();
        // urlSearchParams.set('username', this.account);
        // urlSearchParams.set('password', this.password);
        // let params:RequestOptionsArgs = {
        //     search: urlSearchParams
        // };
        this.http.post(this.loginUrl + "login", body, options)
            .toPromise()
            .then(function (response) {
            var result = response.json();
            console.log(result);
            if (result && result.status == 0) {
                //登录成功
                _this.postMessage.emit({ show: false, userName: _this.account });
                _this.errorMsg = '';
                _this.errorShow = false;
            }
            else {
                _this.errorShow = true;
                _this.errorMsg = result.data;
            }
        })
            .catch(this.handleError);
    };
    LoginPopupComponent.prototype.ngOnInit = function () {
    };
    LoginPopupComponent.prototype.handleError = function (error) {
        console.log(error);
        this.errorMsg = "用户名或密码错误";
        this.errorShow = true;
    };
    return LoginPopupComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LoginPopupComponent.prototype, "show", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LoginPopupComponent.prototype, "postMessage", void 0);
LoginPopupComponent = __decorate([
    Component({
        selector: 'login-popup',
        templateUrl: './login.popup.com.html',
        styleUrls: ['./login.popup.com.css']
    }),
    __metadata("design:paramtypes", [Http])
], LoginPopupComponent);
export { LoginPopupComponent };
//# sourceMappingURL=login.popup.com.js.map