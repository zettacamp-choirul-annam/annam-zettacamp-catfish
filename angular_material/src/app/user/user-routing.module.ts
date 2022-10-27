import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
      { path: 'list', title: 'User List', component: UserListComponent },
      { path: 'form', title: 'User Form', component: UserFormComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class UserRoutingModule { }
