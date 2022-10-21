import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit {
  // I/O
  @Input() list: any;
  @Output() _delete = new EventEmitter();
  @Output() _edit = new EventEmitter();

  constructor() { }

  // lifecycle hooks

  ngOnInit(): void {
    console.log('INIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIT!!!');
  }

  // component methods

  onDelete(index: any) {
    this._delete.emit(index);
  }

  onEdit(index: any) {
    this._edit.emit(index);
  }
}

/**
 * 
 * onInit
 * onChanges
 * doCheck
 * afterViewInit
 * onDestroy
 * 
 */