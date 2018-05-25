import { Injectable } from '@angular/core';

@Injectable()
export class SecretService {
    public get adalConfig(): any {
        return {
            tenant: 'evalueserveglobal.onmicrosoft.com',
            clientId: 'Fv6hmo5VW9MAKh4SwqepwVmEkqphTt4HCa3zUUT4WpI=',
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/'
        };
    }
}