import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError } from 'rxjs';

import { BookType } from './book.type';

@Injectable({
  providedIn: 'root'
})
export class BookManagementService {
  private booksSource = new BehaviorSubject<BookType[]>([]);
  books = this.booksSource.asObservable();

  private selectedBookSource = new BehaviorSubject<BookType | null>(null);
  selectedBook = this.selectedBookSource.asObservable();

  constructor(private http: HttpClient) {
    this.initializeBooksData();
  }

  private initializeBooksData() {
    this.fetchBooksData()
      .pipe(catchError(() => []))
      .subscribe(data => this.booksSource.next(data.books));
  }

  private fetchBooksData() {
    return this.http.get<any>('../../assets/books.json');
  }

  // selected book methods

  updateSelectedBook(data: BookType) {
    this.selectedBookSource.next(data);
  }

  resetSelectedBook() {
    this.selectedBookSource.next(null);
  }
}
