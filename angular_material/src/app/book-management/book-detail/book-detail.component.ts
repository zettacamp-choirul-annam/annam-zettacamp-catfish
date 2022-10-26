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
  subscription1!: Subscription;
  subscription2!: Subscription;
  selectedBook!: BookType | null;

  constructor(
    private bookService: BookManagementService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription1 = this.bookService.selectedBook.subscribe(data => {
      this.selectedBook = data;
    });

    this.subscription2 = this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id')!, 10);
      this.selectedBook = this.bookService.getBookById(id);
    });
  }

  ngOnDestroy() {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
  }

  onReset() {
    this.bookService.resetSelectedBook();
  }
}
