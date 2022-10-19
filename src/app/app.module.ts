import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonComponent } from './button/button.component';

import { FirstModuleModule } from './first-module/first-module.module';
import { SecondModuleModule } from './second-module/second-module.module';
import { ThirdModuleModule } from './third-module/third-module.module';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FirstModuleModule,
    SecondModuleModule,
    ThirdModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
