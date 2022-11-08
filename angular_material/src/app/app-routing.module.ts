import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      { path: '', redirectTo: '/promo' ,pathMatch: 'full' },
      { path: 'promo', loadChildren: () => import('./promo/promo.module').then(m => m.PromoModule) },
      { path: 'school', loadChildren: () => import('./school/school.module').then(m => m.SchoolModule) },
      { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) }
]

@NgModule({
      imports: [
            RouterModule.forRoot(routes)
      ],
      exports: [
            RouterModule
      ]
})
export class AppRoutingModule { }
