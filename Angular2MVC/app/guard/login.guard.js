"use strict";
//import { AdalService } from 'ng2-adal/dist/core';
//import { AdalService } from "ng2-adal/dist/services/adal.service";
var LoggedInGuard = (function () {
    function LoggedInGuard(
        //private adalService: AdalService,
        router) {
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function () {
        /*if (this.adalService.userInfo.isAuthenticated) {
            debugger;
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }*/
        return true;
    };
    return LoggedInGuard;
}());
exports.LoggedInGuard = LoggedInGuard;
//# sourceMappingURL=login.guard.js.map