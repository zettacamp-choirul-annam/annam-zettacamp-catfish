import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdModuleComponentComponent } from './third-module-component/third-module-component.component';
import { ThirdModuleComponent2Component } from './third-module-component2/third-module-component2.component';



@NgModule({
  declarations: [
    ThirdModuleComponentComponent,
    ThirdModuleComponent2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThirdModuleComponentComponent,
    ThirdModuleComponent2Component
  ]
})
export class ThirdModuleModule { }
