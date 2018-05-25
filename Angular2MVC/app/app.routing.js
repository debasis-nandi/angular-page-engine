"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./components/user.component');
var home_component_1 = require('./components/home.component');
var datatable_component_1 = require('./components/datatable.component');
var db_component_1 = require('./components/db.component');
var chart_component_1 = require('./components/chart.component');
var login_component_1 = require('./components/login.component');
//import { LoggedInGuard } from './guard/login.guard';
var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //{ path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'datatable', component: datatable_component_1.DataTableComponent },
    { path: 'dws', component: db_component_1.DbComponent },
    { path: 'chart', component: chart_component_1.ChartComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map