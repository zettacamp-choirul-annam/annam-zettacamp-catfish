import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondModuleComponentComponent } from './second-module-component/second-module-component.component';
import { SecondModuleComponent2Component } from './second-module-component2/second-module-component2.component';



@NgModule({
  declarations: [
    SecondModuleComponentComponent,
    SecondModuleComponent2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecondModuleComponentComponent,
    SecondModuleComponent2Component
  ]
})
export class SecondModuleModule { }
