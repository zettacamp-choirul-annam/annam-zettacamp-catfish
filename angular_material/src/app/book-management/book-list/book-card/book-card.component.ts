import { Component, OnInit, Input } from '@angular/core';
import { BookManagementService } from '../../book-management.service';
import { Subscription, takeUntil } from 'rxjs';

import { BookType } from '../../book.type';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book!: BookType;

  subscription!: Subscription;
  isSelected: boolean = false;

  constructor(private bookService: BookManagementService) {
  }

  ngOnInit(): void {
    this.subscription = this.bookService.selectedBook
      // .pipe(takeUntil())
      .subscribe(data => {
        this.isSelected = (data != null) && (data.id == this.book.id);
      });
  }

  onClick(book: BookType) {
    if (this.isSelected) {
      return this.bookService.resetSelectedBook();
    }

    this.bookService.updateSelectedBook(book);
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
