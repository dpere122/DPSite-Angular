import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { post } from '../post';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://danielperezdev.com/api/posts/getall';

  constructor(private http:HttpClient) { }

  getPosts(): Observable<post[]>{
    // let rawPosts = this.http.get<post[]>(this.apiUrl);
    // let prettyPosts: any[];
    // rawPosts.forEach(function(value){
    //   prettyPosts.push(value);
    // });

    return this.http.get<any>(this.apiUrl);
  }
}
