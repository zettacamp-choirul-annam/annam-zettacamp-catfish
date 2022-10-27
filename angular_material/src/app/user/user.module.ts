import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCreationComponent } from './user-creation/user-creation.component';

export function HttpLoaderFactory(http: HttpClient) {
      return new TranslateHttpLoader(http);
}

@NgModule({
      declarations: [
            UserComponent,
            UserListComponent,
            UserCardComponent,
            UserCreationComponent
      ],
      imports: [
            CommonModule,
            ReactiveFormsModule,
            HttpClientModule,
            UserRoutingModule,
            SharedModule,
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
