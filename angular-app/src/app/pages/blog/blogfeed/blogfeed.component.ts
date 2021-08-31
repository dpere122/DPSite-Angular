import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { post } from '../post';
import { observable, of } from 'rxjs';


@Component({
  selector: 'app-blogfeed',
  templateUrl: './blogfeed.component.html',
  styleUrls: ['./blogfeed.component.less']
})

export class BlogfeedComponent implements OnInit {
  posts: post[] = [];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts)=>{
      let curPosts: post[] = []
      for(let i =0; i <= posts.length-1;i++){
        let curPost = posts[i];
        let date = new Date(curPost.lastModified);
        let content = curPost.content.split(" ").splice(0,300).join(" ");
        let nPost = {
            id: curPost.id,
            title: curPost.title,
            content: content,
            lastModified:date.toLocaleDateString()
        };
        curPosts.push(nPost);
      }
      this.posts = curPosts;
    }); 
  }

}