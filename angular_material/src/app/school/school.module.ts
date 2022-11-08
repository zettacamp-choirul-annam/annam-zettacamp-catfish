import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule } from './school-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
      declarations: [
            SchoolComponent
      ],
      imports: [
            CommonModule,
            SchoolRoutingModule,
            SharedModule
      ],
      exports: [
            SchoolComponent
      ]
})
export class SchoolModule { }
