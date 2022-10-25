import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';
import { Subscription } from 'rxjs';

import { BookType } from '../book.type';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  subscription!: Subscription;
  selectedBook!: BookType | null;

  constructor(private bookService: BookManagementService) { }

  ngOnInit(): void {
    this.subscription = this.bookService.selectedBook.subscribe(data => {
      this.selectedBook = data;
    });
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  onReset() {
    this.bookService.resetSelectedBook();
  }
}
