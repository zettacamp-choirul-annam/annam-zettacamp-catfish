import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/shared/models/actor';

@Component({
      selector: 'app-card',
      templateUrl: './card.component.html',
      styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
      @Input() actor!: Actor;

      constructor() { }

      ngOnInit(): void { }
}
