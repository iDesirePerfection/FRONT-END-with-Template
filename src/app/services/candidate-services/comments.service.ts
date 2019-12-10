import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Comment } from './models/comment.model';
import { environment } from "environments/environment";
import { map, catchError } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';

@Injectable({ providedIn: 'root' })
export class CommentsService {

    constructor(private httpClient: HttpClient) { }


    addComment(idpost: number , content: string): Observable<Comment> {
       return this.httpClient.post<Comment>(environment.backend_url + 'comment/add?post=' + idpost + '&content=' + content,null);
    }

    updateComment(id:number,content:string):Observable<Post> {
        return this.httpClient.put<Comment>(environment.backend_url + 'post/update?id=' + id + '&content=' + content, null );
    }
    deleteComment(id:number): Observable<{}>
    {
        console.log(environment.backend_url + 'comment/delete?id=' + id);
    return this.httpClient.delete(environment.backend_url + 'comment/delete?id=' + id);
    }

}
