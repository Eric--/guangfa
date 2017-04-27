var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city';
import { DataService } from '../service/data.service';
var FlowComponent = (function () {
    function FlowComponent(cityService, dataService, _ngzone) {
        var _this = this;
        this.cityService = cityService;
        this.dataService = dataService;
        this._ngzone = _ngzone;
        this.cityService.postMessage.subscribe(function (city) {
            console.log(city.name + ">>>" + city.city);
            if (!_this.citys) {
                _this.citys = [city];
            }
            else {
                _this.citys = _this.citys.concat(city);
            }
            _this._ngzone.run(function () {
                console.log('refresh table!');
            });
        });
        console.log('constructor');
    }
    FlowComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        console.log(this.citys);
        if (!this.citys) {
            var strCitys = sessionStorage.getItem('flow_table');
            if (strCitys) {
                this.citys = JSON.parse(strCitys);
            }
            else {
                this.citys = this.dataService.getCitys();
            }
        }
        else {
            this.citys = this.citys.concat(this.dataService.getCitys());
        }
    };
    FlowComponent.prototype.postMessage = function () {
        this.cityService.postMessage.emit(new City("changan", "yichun"));
    };
    FlowComponent.prototype.ngOnDestroy = function () {
        console.log('OnDestroy');
        sessionStorage.setItem('flow_table', JSON.stringify(this.citys));
    };
    return FlowComponent;
}());
FlowComponent = __decorate([
    Component({
        selector: 'flow-content',
        providers: [
            CityService
        ],
        templateUrl: './flow.component.html',
        styles: ["\n\t\t.content tr, .content th{\n\t\t\ttext-align:center;\n\t\t}\n\t\t.content thead{\n\t\t\tbackground: #5093c5;\n\t\t}\n\t"]
    }),
    __metadata("design:paramtypes", [CityService,
        DataService,
        NgZone])
], FlowComponent);
export { FlowComponent };
//# sourceMappingURL=flow.component.js.map