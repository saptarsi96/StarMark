import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {HomepageComponent} from './homepage/homepage.component';
import { MoviesComponent } from './movies/movies.component';
const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:'movies',component:MoviesComponent},
  {path:'books',component:BooksComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 