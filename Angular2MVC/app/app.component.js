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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { AdalService } from "ng2-adal/dist/services/adal.service";
//import { SecretService } from './Service/login.service';
var AppComponent = (function () {
    //profile: any;
    function AppComponent(
        //private adalService: AdalService,
        //private secretService: SecretService,
        router) {
        this.router = router;
        //this.adalService.init(this.secretService.adalConfig);
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.adalService.handleWindowCallback();
        //this.adalService.getUser();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "user-app",
            template: "\n                <div>\n                    <nav class='navbar navbar-inverse'>\n                        <div class='container-fluid'>\n                            <ul class='nav navbar-nav'>\n                                <li><a [routerLink]=\"['home']\">Home</a></li>\n                                <li><a [routerLink]=\"['user']\">Users Management</a></li>\n                                <li><a [routerLink]=\"['datatable']\">Data Table</a></li>\n                                <li><a [routerLink]=\"['dws']\">DWS</a></li>\n                                <li><a [routerLink]=\"['chart']\">D3 Chart</a></li>\n                            </ul>\n                        </div>\n                    </nav>\n                    <div class='container'>\n                        <router-outlet></router-outlet>\n                    </div>\n                 </div>\n                "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map