import { Component, OnInit } from '@angular/core';
import { GitService } from '../services/git.service';
import {repo} from '../git-repo'

@Component({
  selector: 'app-git-proj-component',
  templateUrl: './git-proj-component.component.html',
  styleUrls: ['./git-proj-component.component.less']
})
export class GitProjComponentComponent implements OnInit {
  repos: repo[] = [];

  constructor(private gitService:GitService) { }

  ngOnInit(): void {
    this.gitService.getRepos().subscribe((repos) => this.repos = repos);
  }

}
