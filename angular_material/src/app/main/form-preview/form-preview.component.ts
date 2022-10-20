import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit {
  @Input() data: any;
  @Output() deleted = new EventEmitter();
  @Output() edited = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(index: any) {
    this.deleted.emit(index);
  }

  onEdit(index: any) {
    this.edited.emit(index);
  }

}
