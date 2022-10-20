import { Component, OnInit, Input } from '@angular/core';
// import { Data } from 'src/app/Data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item: any;
  active: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.active = !this.active;
  }
}
