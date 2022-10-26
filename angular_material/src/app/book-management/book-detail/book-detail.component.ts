import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { BookType } from '../book.type';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  subscription!: Subscription;
  // subscription2!: Subscription;
  selectedBook!: BookType | null;

  constructor(
    private bookService: BookManagementService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    this.subscription = this.bookService.books.subscribe(data => {
      this.selectedBook = this.bookService.getBookById(id);
    });
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  onReset() {
    this.bookService.resetSelectedBook();
  }
}
