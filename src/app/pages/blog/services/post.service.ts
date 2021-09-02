import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { post } from '../post';
import { rawPost } from '../rawPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://dp-site-blog.herokuapp.com/api';

  constructor(private http:HttpClient) { }

  getPosts(): Observable<post[]>{
    return this.http.get<any>(this.apiUrl+"/posts/getall");
  }
  getPost(id:number): Observable<post>{
    return this.http.get<post>(this.apiUrl+"/posts/"+id);
  }
  newPost(nPost:rawPost){
    this.http.post(this.apiUrl+"/posts/new/",JSON.stringify(nPost))
    .subscribe((result)=>{
      console.warn("result",result);
    });
  }
  deletePost(id:number){
    this.http.delete(this.apiUrl+"/posts/delete/"+id).subscribe((result)=>{
      console.warn("result",result);
    });
  }
}
