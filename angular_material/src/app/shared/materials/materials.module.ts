import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
      exports: [
            MatButtonModule,
            MatIconModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatRadioModule
      ]
})
export class MaterialsModule { }
