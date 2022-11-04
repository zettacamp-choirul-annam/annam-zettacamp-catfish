import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleCasePipe } from './pipes/title-case.pipe';

@NgModule({
      declarations: [
            AppComponent,
            TitleCasePipe
      ],
      imports: [
            BrowserModule,
            BrowserAnimationsModule,
            HttpClientModule,
            MatTableModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            FormsModule,
            ReactiveFormsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
