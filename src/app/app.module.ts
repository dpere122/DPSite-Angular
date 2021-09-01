import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {NgDompurifyModule} from '@tinkoff/ng-dompurify';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { BlogComponent } from './pages/blog/blog.component';
import { GitProjComponentComponent } from './pages/main/git-proj-component/git-proj-component.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogfeedComponent } from './pages/blog/blogfeed/blogfeed.component';
import { BlogpostComponent } from './pages/blog/blogpost/blogpost.component';
import { EditorComponent } from './pages/blog/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BlogComponent,
    GitProjComponentComponent,
    BlogfeedComponent,
    BlogpostComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgDompurifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
