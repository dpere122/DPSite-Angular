import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

import { post } from '../post';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.less']
})
export class BlogpostComponent implements OnInit {
  post: post|undefined;

  constructor(private route:ActivatedRoute,private postService:PostService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('postId'));

    this.postService.getPost(idFromRoute).subscribe((post)=>
    {
      let date = new Date(post.lastModified);
      let contentHTML = new DOMParser().parseFromString(post.content,"text/html");
      let images = contentHTML.getElementsByTagName('img');

      for(let x= 0;x<images.length;x++){
        images[x].classList.add('img-fluid','picture-bg');
      }
      let curPost ={
        id:post.id,
        title: post.title,
        content : contentHTML.documentElement.innerHTML,
        lastModified: date.toLocaleDateString()
      };
      this.post = curPost;
    });
  }
}
