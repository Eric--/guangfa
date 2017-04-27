var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var BusinessComponent = (function () {
    function BusinessComponent() {
    }
    BusinessComponent.prototype.ngOnInit = function () {
    };
    return BusinessComponent;
}());
BusinessComponent = __decorate([
    Component({
        selector: 'business-content',
        template: "\n\t\t<div class=\"content\">\n\t\t    <fast-service></fast-service>\n\t\t    <other-service></other-service>\n\t\t</div>\n\t"
    })
], BusinessComponent);
export { BusinessComponent };
//# sourceMappingURL=business.component.js.map