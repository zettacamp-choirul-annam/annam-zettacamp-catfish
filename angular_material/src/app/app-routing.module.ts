import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/components/auth/auth.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
      { path: '', redirectTo: '/auth', pathMatch: 'full' },
      { path: 'auth', component: AuthComponent },
      { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
];

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class AppRoutingModule { }
