import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item: any;

  @Output() _likeClick: EventEmitter<any> = new EventEmitter();
  @Output() _saveClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.item.author.picture = `url(${this.item.author.picture})`;    
  }

  ngOnchanges() {
    console.log(this.item);
    
  }

  onLikeClick() {
    this._likeClick.emit({
      id: this.item.id, 
      liked: !this.item.liked
    });
  }

  onSaveClick() {
    this._saveClick.emit({
      id: this.item.id, 
      saved: !this.item.saved
    });
  }
}
