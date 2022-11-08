import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
      exports: [
            MatButtonModule,
            MatInputModule,
            MatFormFieldModule,
            MatCardModule,
            MatToolbarModule,
            MatIconModule,
            MatTableModule,
            MatProgressSpinnerModule
      ]
})
export class MaterialModule { }
