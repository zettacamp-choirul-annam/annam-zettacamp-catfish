import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// angular material modules

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

// components

import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';

export function HttpLoaderFactory(http: HttpClient) {
      return new TranslateHttpLoader(http);
}

@NgModule({
      declarations: [
            UserComponent,
            UserFormComponent,
            UserListComponent,
            UserCardComponent
      ],
      imports: [
            CommonModule,
            UserRoutingModule,
            HttpClientModule,
            ReactiveFormsModule,

            // angular material modules

            MatIconModule,
            MatButtonModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatRadioModule,
            MatSelectModule,
            MatToolbarModule,

            TranslateModule.forRoot({
                  defaultLanguage: 'en',
                  loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                  }
            })
      ]
})
export class UserModule { }
