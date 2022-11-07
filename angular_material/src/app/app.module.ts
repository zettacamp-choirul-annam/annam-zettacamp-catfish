import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';

// angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

// ngx translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
      return new TranslateHttpLoader(http);
}

@NgModule({
      declarations: [
            AppComponent,
            AddUserComponent
      ],
      imports: [
            BrowserModule,
            BrowserAnimationsModule,
            HttpClientModule,
            ReactiveFormsModule,

            // angular material
            MatFormFieldModule,
            MatRadioModule,
            MatSelectModule,
            MatInputModule,
            MatDialogModule,
            MatDatepickerModule,
            MatButtonModule,
            MatTableModule,
            MatIconModule,
            MatToolbarModule,

            // ngx translate
            TranslateModule.forRoot({
                  loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                  },
                  defaultLanguage: 'en'
            }),
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
