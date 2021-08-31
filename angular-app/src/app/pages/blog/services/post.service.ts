import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://danielperezdev.com/api';

  constructor(private http:HttpClient) { }

  getPosts(): Observable<post[]>{
    return this.http.get<any>(this.apiUrl+"/posts/getall");
  }
  getPost(id:number): Observable<post>{
    return this.http.get<post>(this.apiUrl+"/posts/"+id);
  }
}
