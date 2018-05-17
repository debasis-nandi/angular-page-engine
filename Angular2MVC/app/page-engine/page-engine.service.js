"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var PageEngineService = (function () {
    function PageEngineService(http) {
        this.http = http;
    }
    PageEngineService.prototype.getPageMetaData = function () {
        var headers = this.handleHeaders();
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get('app/assets/db-controls.json')
            .map(function (response) { return response.json(); });
    };
    PageEngineService.prototype.handleHeaders = function () {
        return new http_1.Headers({
            'Content-Type': 'application/json'
        });
    };
    PageEngineService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    PageEngineService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PageEngineService);
    return PageEngineService;
}());
exports.PageEngineService = PageEngineService;
//# sourceMappingURL=page-engine.service.js.map