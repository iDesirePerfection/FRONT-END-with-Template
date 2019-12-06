import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from './models/posts.model';
import { environment } from "environments/environment";
import { map, catchError } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';

@Injectable({ providedIn: 'root' })
export class PostsService {

    constructor(private httpClient: HttpClient) { }

    getPosts(): Observable<Post[]> {
        // return this.httpClient.get<Experience>(environment.backend_url + 'candidate/getAllExperience?id=' + id).pipe(
        //     map(exp => {
        //         return [exp];
        //     })
        // )
        return this.httpClient.get<Post[]>(environment.backend_url + 'post/all');

        // return of([
        //     {
        //         'designation': 'web development'
        //     }
        // ] as Experience[])
    }

    addPost(content:string): Observable<Post> {
       return this.httpClient.post<Post>(environment.backend_url + 'post/add?content=' + content,null);
    }

    deletePost(id:number): Observable<{}>
    {
    console.log(id.toString());
    return this.httpClient.delete(environment.backend_url + 'post/delete?id='+ id.toString());
    }

}
