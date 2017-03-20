import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";

import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { BackendService, User } from '../shared'

@Injectable()
export class AuthService {
    jwtHelper: JwtHelper = new JwtHelper();
    constructor(private router: Router, private http: Http) {
    }

    public login(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(
            BackendService.apiUrl + "oauth/token",
            JSON.stringify({
                username: user.email,
                password: user.password,
                grant_type: "password"
            }),
            { headers: headers }
        )
            .map(response => response.json())
            .do(data => {
                BackendService.token = data.Result.access_token;

            })
            .catch(this.handleErrors);
    };

    public authenticated() {
        if (tokenNotExpired(BackendService.tokenKey)) {
            let user: any = this.jwtHelper.decodeToken(BackendService.token);
            console.log(JSON.stringify(user));
            let TokenExpirationDate: any = this.jwtHelper.getTokenExpirationDate(BackendService.token);
            console.log(TokenExpirationDate);
            let isTokenExpired: any = this.jwtHelper.isTokenExpired(BackendService.token);
            console.log(isTokenExpired);
            return true;
        }
        return false;
    };

    public logout() {
        BackendService.remove();
        this.router.navigate(['login']);
    };

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
