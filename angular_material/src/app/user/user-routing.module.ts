import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreationComponent } from './user-creation/user-creation.component';

const routes: Routes = [
      { path: 'list', component: UserListComponent },
      { path: 'creation', component: UserCreationComponent },
      { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class UserRoutingModule { }
