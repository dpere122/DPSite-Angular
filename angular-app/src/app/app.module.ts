import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { BlogComponent } from './pages/blog/blog.component';
import { GitProjComponentComponent } from './pages/main/git-proj-component/git-proj-component.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogfeedComponent } from './pages/blog/blogfeed/blogfeed.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BlogComponent,
    GitProjComponentComponent,
    BlogfeedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
