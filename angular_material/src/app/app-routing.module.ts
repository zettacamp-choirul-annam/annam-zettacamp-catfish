import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      { path: '', redirectTo: '/movie', pathMatch: 'full' },
      { path: 'movie', title: 'Movie', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule) },
      { path: 'actor', title: 'Actor', loadChildren: () => import('./actor/actor.module').then(m => m.ActorModule) },
      { path: 'about', title: 'About', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: '**', redirectTo: '/movie', pathMatch: 'full' }
];

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class AppRoutingModule { }
