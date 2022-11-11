import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
      declarations: [
            AuthComponent,
            DashboardComponent
      ],
      imports: [
            CommonModule,
            ReactiveFormsModule,
            SharedModule,
            TranslateModule.forChild()
      ]
})
export class CoreModule { }
