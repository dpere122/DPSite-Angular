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
<<<<<<< HEAD
    let headers = new HttpHeaders();
    headers=headers.set('content-type','application/json')
    headers=headers.set('Access-Control-Allow-Origin', '*');
    this.http.post(this.apiUrl+"/posts/new/",JSON.stringify(nPost),{headers:headers})
=======
    this.http.post(this.apiUrl+"/posts/new/",JSON.stringify(nPost))
>>>>>>> 4473f4a18991a0cdb06b8b8faf1148ec26019368
    .subscribe((result)=>{
      console.warn("result",result);
    });
  }
<<<<<<< HEAD
  editPost(id:number,post:rawPost){
    this.http.put(this.apiUrl+"/posts/edit/"+id,JSON.stringify(post)).subscribe((result)=>{
      console.warn("result",result);
    });
  }
=======
>>>>>>> 4473f4a18991a0cdb06b8b8faf1148ec26019368
  deletePost(id:number){
    this.http.delete(this.apiUrl+"/posts/delete/"+id).subscribe((result)=>{
      console.warn("result",result);
    });
  }
}
