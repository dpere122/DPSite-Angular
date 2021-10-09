import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {NgDompurifyModule} from '@tinkoff/ng-dompurify';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OKTA_CONFIG,OktaAuthModule} from '@okta/okta-angular';
import { environment } from 'src/environments/environment.prod';
import { QuillModule } from 'ngx-quill';


import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { BlogComponent } from './pages/blog/blog.component';
import { GitProjComponentComponent } from './pages/main/git-proj-component/git-proj-component.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogfeedComponent } from './pages/blog/blogfeed/blogfeed.component';
import { BlogpostComponent } from './pages/blog/blogpost/blogpost.component';
import { EditorComponent } from './pages/blog/editor/editor.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AuthInterceptor } from './AuthInterceptor';
import { StripHtmlPipePipe } from './pipes/strip-html-pipe.pipe';

const config = {
  clientId: environment.clientID,
  issuer: environment.issuerID,
  redirectUri: environment.redirectURI,
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BlogComponent,
    GitProjComponentComponent,
    BlogfeedComponent,
    BlogpostComponent,
    EditorComponent,
    PagenotfoundComponent,
    StripHtmlPipePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgDompurifyModule,
    OktaAuthModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      modules:{
        syntax: true,
        
      }
    })

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi: true},
    {provide:OKTA_CONFIG,useValue:config},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
