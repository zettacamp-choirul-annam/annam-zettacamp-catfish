import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item: any;

  @Output() _likeClick: EventEmitter<number> = new EventEmitter();
  @Output() _saveClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.item.author.picture = `url(${this.item.author.picture})`;    
  }

  onLikeClick() {
    this._likeClick.emit(this.item.id);
  }

  onSaveClick() {
    this._saveClick.emit(this.item.id);
  }
}
