import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
      providedIn: 'root'
})
export class MovieService {
      private movies = new BehaviorSubject<Movie[]>([]);
      movies$ = this.movies.asObservable();

      constructor(private http: HttpClient) {
            this.initialize();
      }

      private initialize() {
            this.fetchData().subscribe(data => this.movies.next(data));
      }

      private fetchData() {
            return this.http.get<Movie[]>('../../../assets/static/movies.json');
      }
}
