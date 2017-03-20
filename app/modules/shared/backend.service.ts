import { Injectable } from "@angular/core";
let localStorage = require("nativescript-localstorage");


export class BackendService {
    static apiUrl = "https://api.everlive.com/v1/GWfRtXi1Lwt4jcqK/";
    // static apiUrl = "http://10.0.2.2:5000/";
    // static apiUrl: string = "http://api-web-woolnet.azurewebsites.net/";

    static tokenKey: string = "token";

    static get token(): string {
        return localStorage.getItem(this.tokenKey);
    }

    static set token(theToken: string) {
        localStorage.setItem(this.tokenKey, theToken);
    }

    static remove() {
        localStorage.removeItem(this.tokenKey);
    }

}
