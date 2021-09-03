import { Component, OnDestroy, OnInit,ViewEncapsulation  } from '@angular/core';
import { FormControl , FormGroup} from "@angular/forms";
import { Editor ,Toolbar,Validators } from 'ngx-editor';
import { rawPost } from '../rawPost';
import { PostService } from '../services/post.service';
import { post } from '../post';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit,OnDestroy {
  posts: post[] = [];
  editMode: boolean = false;
  editor = new Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  form = new FormGroup({
    titleContent: new FormControl('', Validators.required()),
    editorContent: new FormControl('', Validators.required()),
  });
  curEditPost : post={
    id: -1,
    title : "",
    content: "",
    lastModified: "",
};
  constructor(private postService:PostService) { }
  
  onSubmit(){
    let nPost:rawPost = {
      title:this.form.get("titleContent")?.value,
      content:this.form.get("editorContent")?.value
    }
    if(!this.editMode){
      this.postService.newPost(nPost);
      this.clearText();
    }else{
      // PUT request functionionality
      this.postService.editPost(this.curEditPost.id,this.getCurPost());
      this.stopEdit();
    }
    
  }
  loadPosts(){
    this.postService.getPosts().subscribe((posts)=>this.posts = posts);
  }
  startEdit(post:post){
    this.editMode = true;
    this.curEditPost = post;
    this.form.get("titleContent")?.setValue(this.curEditPost.title);
    this.form.get("editorContent")?.setValue(this.curEditPost.content);
  }
  stopEdit(){
    this.editMode = false;
    this.curEditPost = {
      id: -1,
      title : "",
      content: "",
      lastModified: "",
    };
    this.clearText();
  }
  deletePost(id:number){
    this.postService.deletePost(id);
    for(let i = 0; i< this.posts.length;i++){
      if(this.posts[i].id == id){
        this.posts.splice(i,1);
      }
    }
  }
  getCurPost(){
    let nPost:rawPost={
      title: this.form.get("titleContent")?.value,
      content: this.form.get("editorContent")?.value
    }
    return nPost;
  }
  clearText(){
    this.form.get("titleContent")?.setValue("");
    this.form.get("editorContent")?.setValue("");
  }
  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor!.destroy();
  }
}
