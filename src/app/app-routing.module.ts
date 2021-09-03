import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogpostComponent } from './pages/blog/blogpost/blogpost.component';
import { EditorComponent } from './pages/blog/editor/editor.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const CALLBACK_PATH = 'login/callback';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Blog-page', component: BlogComponent },
  { path: 'Blog-page/post/:postId', component: BlogpostComponent},
  { path: 'Blog-page/editor',component:EditorComponent,canActivate:[OktaAuthGuard] },
  { path: CALLBACK_PATH,component: OktaCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
