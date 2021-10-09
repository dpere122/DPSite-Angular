import { Component, OnDestroy, OnInit,ViewEncapsulation  } from '@angular/core';
import { FormControl , FormGroup} from "@angular/forms";
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
  savedPost: rawPost = {
    title:"",
    content:""
  };
  isSaved:boolean = false;

  form = new FormGroup({
    titleContent: new FormControl(''),
    editorContent: new FormControl(''),
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
    this.setData(this.curEditPost.title,this.curEditPost.content,undefined);
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
  // Make a confirm menu for delete button
  deletePost(id:number){
    let confirmDialog = confirm("Are you sure you want to delete Post");
    if(confirmDialog){
      this.postService.deletePost(id);
      for(let i = 0; i< this.posts.length;i++){
        if(this.posts[i].id == id){
          this.posts.splice(i,1);
        }
      }
    }
  }
  setData(title?:string,content?:string,nPost?:rawPost){
    if(nPost != undefined){
      this.form.get("titleContent")?.setValue(nPost.title);
      this.form.get("editorContent")?.setValue(nPost.content);
    }
    else{
      this.form.get("titleContent")?.setValue(title);
      this.form.get("editorContent")?.setValue(content);
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
  savePost(){
    if(!('savedPost' in localStorage)){
      this.setLocalStorage();
    }else{
      let confirmDialog= confirm("Are you sure you want to overwrite saved data");
      if(confirmDialog == true){
        this.setLocalStorage();
      }
    }
    
  }
  loadPost(){
    if('savedPost' in localStorage){
      let nPost:rawPost = this.getLocalStorage();
      this.setData("","",nPost);
    }else{
      console.warn("Nothing is saved in localStorage");
    }
  }


  clearSavedPost(){
    let confirmDialog = confirm("Are you sure you want to delete Saved Post");
    if(confirmDialog == true){
      localStorage.removeItem('savedPost');
      this.savedPost.title = "";
      this.savedPost.content = "";
      this.isSaved = false;
    }

  }


  setLocalStorage(){
    this.savedPost = this.getCurPost();
    if(this.getCurPost().title == ""){
      alert("Please Enter a title to confirm your saved post to storage");
    }else{
      this.isSaved = true;
      localStorage.setItem('savedPost',JSON.stringify(this.getCurPost()));      
    }

  }
  getLocalStorage(){
    return JSON.parse(localStorage.getItem('savedPost') || '{}');
  }
  ngOnInit(): void {
    if('savedPost' in localStorage){
      this.savedPost = this.getLocalStorage();
      this.isSaved = true;
    }
    else{
      this.isSaved = false;
    }
  }
  ngOnDestroy(): void {

  }
  
}
