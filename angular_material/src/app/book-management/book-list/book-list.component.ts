import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';
import { Subscription } from 'rxjs';

import { BookType } from '../book.type';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  subscription!: Subscription;
  books!: BookType[];

  constructor(private bookService: BookManagementService) { }

  ngOnInit(): void {
    this.subscription = this.bookService.books.subscribe(data => {
      this.books = data;
    });
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}