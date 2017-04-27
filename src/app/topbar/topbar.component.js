var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Output, EventEmitter, Component, Input } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
var TopbarComponent = (function () {
    function TopbarComponent(http) {
        this.http = http;
        this.postMessage = new EventEmitter();
        this.loginUrl = 'http://www.bitonair.com/app/user/';
    }
    TopbarComponent.prototype.userLogin = function () {
        if (!this.loginStatus || !this.userName) {
            //调起app登录
            this.postMessage.emit({ type: "login" });
        }
    };
    TopbarComponent.prototype.userLogout = function () {
        var _this = this;
        if (this.loginStatus || this.userName) {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.set('action', 'logout');
            var params = {
                search: urlSearchParams
            };
            //退出登录
            this.http.get(this.loginUrl + "logout", params)
                .toPromise()
                .then(function (response) {
                var result = response.json();
                console.log(result);
                if (result && result.status == 0) {
                    //退出成功
                    _this.postMessage.emit({ type: "logout" });
                }
            })
                .catch(this.handleError);
        }
    };
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent.prototype.handleError = function (error) {
        console.log(error);
    };
    return TopbarComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], TopbarComponent.prototype, "userName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TopbarComponent.prototype, "loginStatus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TopbarComponent.prototype, "postMessage", void 0);
TopbarComponent = __decorate([
    Component({
        selector: 'top-bar',
        templateUrl: './topbar.component.html',
        styleUrls: ['./topbar.component.css']
    }),
    __metadata("design:paramtypes", [Http])
], TopbarComponent);
export { TopbarComponent };
//# sourceMappingURL=topbar.component.js.map