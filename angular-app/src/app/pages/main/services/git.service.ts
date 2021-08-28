import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { GitProjComponentComponent } from '../git-proj-component/git-proj-component.component';
import { repo } from '../git-repo';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private apiUrl = 'https://api.github.com/users/dpere122/repos';

  constructor(private http:HttpClient) { }

  getRepos(): Observable<repo[]>{
    return this.http.get<repo[]>(this.apiUrl);
  }
}
