var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter } from '@angular/core';
var WebWorker = (function () {
    function WebWorker() {
        this.postMessage = new EventEmitter();
        if (typeof (Worker) !== "undefined") {
            var _this_1 = this;
            this.employee = new Worker('app/flow_center/work.script.js');
            this.employee.onmessage = function (event) {
                _this_1.postMessage.emit(JSON.parse(event.data));
            };
        }
        else {
            console.log('Sorry! No Web Worker support..');
        }
    }
    return WebWorker;
}());
WebWorker = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], WebWorker);
export { WebWorker };
//# sourceMappingURL=web.work.js.map