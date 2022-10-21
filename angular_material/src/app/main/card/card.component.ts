import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // use view encapsulation (test)
})
export class CardComponent implements OnInit {
  // receive data or props
  @Input() item: any;
  @Input() index: any;

  // emit event or data to parent
  @Output() _delete: EventEmitter<any> = new EventEmitter();
  @Output() _edit: EventEmitter<any>   = new EventEmitter();

  constructor() { }

  // lifecycle hooks

  ngOnInit(): void { }

  // component methods

  onEdit() {
    this._edit.emit(this.index);
  }

  onDelete() {
    this._delete.emit(this.index);
  }
}
