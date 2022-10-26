import { Component, OnInit, Input } from '@angular/core';
import { BookManagementService } from '../../book-management.service';
import { Subscription, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(
    private bookService: BookManagementService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.bookService.selectedBook
      // .pipe(takeUntil())
      .subscribe(data => {
        this.isSelected = (data != null) && (data.id == this.book.id);
      });
  }

  onClick(book: BookType) {
    // if (this.isSelected) {
    //   return this.bookService.resetSelectedBook();
    // }

    // this.bookService.updateSelectedBook(book);
    this.router.navigate([`detail/${book.id}`])
  }

  getLink() {
    return '/detail' // + (this.book.id || '');
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
