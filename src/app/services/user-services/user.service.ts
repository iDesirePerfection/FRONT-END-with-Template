import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from 'environments/environment';
import { map, catchError } from 'rxjs/operators';
import { User } from './model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private httpClient: HttpClient) { }
    login(username: string,password:string): Observable<User> {
        return this.httpClient.get<User>(environment.backend_url + 'user/authenticate?username=' +username+'&password='+password );
    }
        All(): Observable<any> {
       return this.httpClient.get<User[]>(environment.backend_url + 'user/all');
    }

    logout(id) {

        return this.httpClient.put<User>(environment.backend_url + 'user/logout?id=' +id,null );
    }
}