import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostModule } from './post/post.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
      declarations: [
            AppComponent
      ],
      imports: [
            BrowserModule,
            BrowserAnimationsModule,
            PostModule,
            AppRoutingModule
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
