import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Modules:
import { HomeComponent } from './modules/home/home.component';
import { MoviesListComponent } from './modules/movies-list/movies-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movies',component:MoviesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
