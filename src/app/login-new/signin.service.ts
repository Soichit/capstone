import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import {URLSearchParams } from '@angular/http';

@Injectable()
export class SigninService {
    constructor(private http: Http) {}

    getData() {
        //return this.http.get('');
    }

    // sendData(user: any) {
    //     const body = JSON.stringify(user);
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.post('', body, {
    //         headers: headers
    //     });
    //     .map((data: Response) => data.json());
    // }

    // sendData(user: any) {
    //     const body = JSON.stringify(user);
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');

    //     let params: URLSearchParams = new URLSearchParams();
    //     params.set('a', "1");
    //     params.set('b', "2");
    //     params.set('c', "3");

    //     return this.http.post('http://buildaresume.cloudapp.net/WebService1.asmx/CalculateSum', body, {
    //         search: params
    //     }).subscribe(
    //         (response) => console.log(response))}
    // };
}