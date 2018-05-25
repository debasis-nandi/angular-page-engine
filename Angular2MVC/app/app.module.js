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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var user_component_1 = require('./components/user.component');
var home_component_1 = require('./components/home.component');
var user_service_1 = require('./Service/user.service');
var datatable_component_1 = require('./components/datatable.component');
var car_service_1 = require('./Service/car.service');
var primeng_1 = require('primeng/primeng');
var db_component_1 = require('./components/db.component');
var dynamic_component_1 = require('./page-engine/dynamic.component');
var page_engine_component_1 = require('./page-engine/page-engine.component');
var page_engine_service_1 = require('./page-engine/page-engine.service');
var mydatepicker_1 = require('mydatepicker');
var chart_component_1 = require('./components/chart.component');
var login_component_1 = require('./components/login.component');
var ng2_charts_1 = require('ng2-charts');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                ng2_bs3_modal_1.Ng2Bs3ModalModule,
                primeng_1.DataTableModule,
                primeng_1.PaginatorModule,
                primeng_1.FileUploadModule,
                mydatepicker_1.MyDatePickerModule,
                ng2_charts_1.ChartsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                home_component_1.HomeComponent,
                datatable_component_1.DataTableComponent,
                db_component_1.DbComponent,
                dynamic_component_1.DynamicFormComponent,
                page_engine_component_1.PageEngineComponent,
                //BarChartComponent,
                chart_component_1.ChartComponent,
                login_component_1.LoginComponent
            ],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' },
                user_service_1.UserService,
                car_service_1.CarService,
                page_engine_service_1.PageEngineService,
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map