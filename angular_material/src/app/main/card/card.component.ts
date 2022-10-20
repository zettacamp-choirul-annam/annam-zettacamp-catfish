import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.Emulated // use view encapsulation
})
export class CardComponent implements OnInit {
  @Input() item: any;
  @Input() index: any;
  @Output() deleted = new EventEmitter();
  @Output() edited = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onEdit() {
    this.edited.emit(this.index);
  }

  onDelete() {
    this.deleted.emit(this.index);
  }

}
