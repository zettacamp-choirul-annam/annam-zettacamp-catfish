import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
      { path: '', redirectTo: '/movie/list', pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'detail/:id', component: DetailComponent }
];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class MovieRoutingModule { }
