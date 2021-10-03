import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {NgDompurifyModule} from '@tinkoff/ng-dompurify';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OKTA_CONFIG,OktaAuthModule} from '@okta/okta-angular';
import { environment } from 'src/environments/environment.prod';

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
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        blockquote: 'Blockquote',
        underline: 'Underline',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify',
        text_color: 'Text Color',
        background_color: 'Background Color',

        // popups, forms, others...
        url: 'URL',
        text: 'Text',
        openInNewTab: 'Open in new tab',
        insert: 'Insert',
        altText: 'Alt Text',
        title: 'Title',
        remove: 'Remove',
      },
    })

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi: true},
    {provide:OKTA_CONFIG,useValue:config},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
