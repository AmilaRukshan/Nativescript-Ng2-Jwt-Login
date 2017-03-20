import { Injectable } from "@angular/core";
import { Headers, Response, ResponseOptions, Http } from "@angular/http";
import { AuthHttp } from 'angular2-jwt';
import { Observable, BehaviorSubject } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { BackendService } from "../shared";
import { Grocery } from "./grocery.model";

@Injectable()
export class HomeService {
    items: BehaviorSubject<Array<Grocery>> = new BehaviorSubject([]);

    private allItems: Array<Grocery> = [];

    constructor(private authHttp: AuthHttp, private http: Http) { }

    load() {
        console.log("loading.....");
        let headers = new Headers();
        headers.append("X-Everlive-Sort", JSON.stringify({ ModifiedAt: -1 }));

        return this.authHttp.get(BackendService.apiUrl + "Groceries", {
            headers: headers
        }).map(res => res.json())
            .do(data => {
                console.log(JSON.stringify(data));
            })
            .catch(this.handleErrors);

        // .map(data => {
        //     data.Result.forEach((grocery) => {
        //         this.allItems.push(
        //             new Grocery(
        //                 grocery.Id,
        //                 grocery.Name,
        //                 grocery.Done || false,
        //                 grocery.Deleted || false
        //             )
        //         );
        //     });
        // })
    }

    private handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}