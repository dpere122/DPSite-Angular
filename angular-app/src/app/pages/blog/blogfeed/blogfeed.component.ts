import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { post } from '../post';


@Component({
  selector: 'app-blogfeed',
  templateUrl: './blogfeed.component.html',
  styleUrls: ['./blogfeed.component.less']
})
export class BlogfeedComponent implements OnInit {
  posts: post[] = [];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => this.posts = posts);

  }

}
