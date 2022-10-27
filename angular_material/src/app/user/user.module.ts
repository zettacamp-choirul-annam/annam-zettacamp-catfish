import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCreationComponent } from './user-creation/user-creation.component';

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
            SharedModule
      ]
})
export class UserModule { }
