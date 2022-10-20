import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { CardComponent } from './card/card.component';

import { FormsModule } from '@angular/forms';

import { NgxJdenticonModule } from "ngx-jdenticon";

@NgModule({
  declarations: [
    FormComponent,
    FormPreviewComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    NgxJdenticonModule,
    FormsModule
  ],
  exports: [
    FormComponent,
    FormPreviewComponent,
    CardComponent
  ]
})
export class MainModule { }
