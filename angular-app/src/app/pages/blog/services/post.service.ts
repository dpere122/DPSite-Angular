import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://danielperezdev.com/api/posts/getall';

  constructor(private http:HttpClient) { }

  getPosts(): Observable<post[]>{
    return this.http.get<post[]>(this.apiUrl);
  }
}
