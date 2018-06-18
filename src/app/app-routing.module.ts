import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FilmsComponent } from './films/films.component';
import { FilmItemComponent } from './films/film-item/film-item.component';
import { FilmListComponent } from './films/film-list/film-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmsComponent, children: [
    { path: '', component: FilmListComponent },
    { path: ':id', component: FilmItemComponent }
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
