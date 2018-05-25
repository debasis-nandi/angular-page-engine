import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
//import { AdalService } from 'ng2-adal/dist/core';
//import { AdalService } from "ng2-adal/dist/services/adal.service";

export class LoggedInGuard implements CanActivate {

    constructor(
        //private adalService: AdalService,
        private router: Router) {
    }

    canActivate() {

        /*if (this.adalService.userInfo.isAuthenticated) {
            debugger;
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }*/

        return true;
    }
}

