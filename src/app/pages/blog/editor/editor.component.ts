import { Component, OnDestroy, OnInit,ViewEncapsulation  } from '@angular/core';
import { FormControl , FormGroup} from "@angular/forms";
import { Editor ,Toolbar,Validators } from 'ngx-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit,OnDestroy {
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
  constructor() { }
  
  onSubmit(){
    console.log(this.form.get("titleContent")?.value);
    console.log(this.form.get("editorContent")?.value);
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor!.destroy();
  }
}