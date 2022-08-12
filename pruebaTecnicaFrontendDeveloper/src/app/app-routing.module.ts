import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Modules:
import { HomeComponent } from './modules/home/home.component';
import { MoviesListComponent } from './modules/movies-list/movies-list.component';
import { MovieDetailsComponent } from './modules/movie-details/movie-details.component';
import { ErrorPageComponent } from './modules/error-page/error-page.component';
import { ListBySearchComponent } from './modules/list-by-search/list-by-search.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movies',component:MoviesListComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  {path:'search/:search',component:ListBySearchComponent},
  {path:'**',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
