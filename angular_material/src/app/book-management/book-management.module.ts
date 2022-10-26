import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { BookManagementComponent } from './book-management.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';

import { BookRouterModule } from './book-router.module';

@NgModule({
  declarations: [
    BookManagementComponent,
    BookDetailComponent,
    BookListComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    BookRouterModule
  ],
  exports: [
    BookManagementComponent
  ]
})
export class BookManagementModule { }
