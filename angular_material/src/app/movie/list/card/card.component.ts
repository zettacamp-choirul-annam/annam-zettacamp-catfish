import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';

@Component({
      selector: 'app-card',
      templateUrl: './card.component.html',
      styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
      @Input() movie!: Movie;

      constructor() { }

      ngOnInit(): void { }
}
