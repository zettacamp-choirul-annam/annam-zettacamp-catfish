import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

import { BookType } from '../book.type';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  subscription!: Subscription;
  books!: BookType[];

  constructor(private bookService: BookManagementService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let color = this.route.snapshot.queryParamMap.get('color');
    console.log(color);

    this.subscription = this.bookService.books.subscribe(data => {
      this.books = data;
    });
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}