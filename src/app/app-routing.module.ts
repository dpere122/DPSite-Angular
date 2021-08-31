import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogpostComponent } from './pages/blog/blogpost/blogpost.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Blog-page', component: BlogComponent },
  { path: 'Blog-page/post/:postId', component: BlogpostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
