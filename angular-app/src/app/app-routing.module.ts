import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Blog-page', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
