import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FileUpload {
    constructor(private httpClient: HttpClient) { }

     
      
      addfile(options:any) {
        this.httpClient
        .post('http://localhost:9080/profesional-network-web/rest/files/upload', options)
        .subscribe((s) => {
          console.log(s);
        });
        
    }
     




    
}