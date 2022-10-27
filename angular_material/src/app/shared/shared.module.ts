import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './materials/materials.module';

@NgModule({
      declarations: [],
      imports: [
            CommonModule
      ],
      exports: [
            MaterialsModule
      ]
})
export class SharedModule { }
