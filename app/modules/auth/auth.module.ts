import { NgModule } from '@angular/core';
import { RequestOptions ,Http} from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { BackendService } from '../shared/backend.service'


function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenName: BackendService.tokenKey,
        tokenGetter: (() => BackendService.token),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}

@NgModule({
    providers: [
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ]
})
export class AuthModule { }