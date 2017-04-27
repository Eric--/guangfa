var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var QueryComponent = (function () {
    function QueryComponent() {
    }
    QueryComponent.prototype.ngOnInit = function () {
    };
    return QueryComponent;
}());
QueryComponent = __decorate([
    Component({
        selector: 'query-content',
        template: "\n\t\t<div class=\"content\">\n\t\t\t<div class=\"art-word\">\u67E5\u8BE2\u4E2D\u5FC3</div>\n\t\t</div>\n\t"
    })
], QueryComponent);
export { QueryComponent };
//# sourceMappingURL=query.component.js.map