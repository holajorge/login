import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {

    constructor(public http: HttpClient) {
        //console.log('Aqui se llaman las peticiones al Back Api');
    }

    public authUser(userData, type) {
        let apiUrl = 'http://go-to-school.juventudqroo.com/';
        let options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        let observable: Observable<any> = this.http.post(apiUrl + type, JSON.stringify(userData), options)
        observable.subscribe(res => res, (err) => err);
        return observable;
    }

}
