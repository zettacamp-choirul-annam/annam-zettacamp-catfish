import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstModuleComponentComponent } from './first-module-component/first-module-component.component';
import { FirstModuleComponent2Component } from './first-module-component2/first-module-component2.component';



@NgModule({
  declarations: [
    FirstModuleComponentComponent,
    FirstModuleComponent2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstModuleComponentComponent,
    FirstModuleComponent2Component
  ]
})
export class FirstModuleModule { }
