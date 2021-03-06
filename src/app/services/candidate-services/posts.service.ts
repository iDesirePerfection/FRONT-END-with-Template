import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Post } from './models/posts.model';
import { environment } from "environments/environment";
import { map, catchError } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';

@Injectable({ providedIn: 'root' })
export class PostsService {

    constructor(private httpClient: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(environment.backend_url + 'post/myposts');
    }

    addPost(content:string): Observable<Post> {
       return this.httpClient.post<Post>(environment.backend_url + 'post/add?content=' + content,null);
    }

    deletePost(id:number): Observable<{}>
    {
    console.log(id.toString());
    return this.httpClient.delete(environment.backend_url + 'post/delete?id='+ id.toString());
    }

    updatePost(id:number,content:string):Observable<Post> {
        return this.httpClient.put<Post>(environment.backend_url + 'post/update?id=' + id + '&content=' + content, null );
    }

    sharePost(id:number):Observable<Post> {
        return this.httpClient.post<Post>(environment.backend_url + 'post/share?post=' + id,null);
    }


getTotalPosts(): Observable<string> {
let totalQuestions:number;
const subject = new Subject<string>();
this.getPosts().subscribe(items => {
    items.map(item => {
      totalQuestions=item.id;
      console.log(totalQuestions);
      subject.next(totalQuestions.toString());
    });
  }
);
  return subject.asObservable();
}


}
