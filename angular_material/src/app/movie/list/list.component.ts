import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
      selector: 'app-list',
      templateUrl: './list.component.html',
      styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
      subcription!: Subscription;
      movies: Movie[] = [];

      constructor(private movieService: MovieService) { }

      ngOnInit(): void {
            this.subcription = this.movieService.movies$.subscribe(data => {
                  this.movies = data;
            });
      }
}
