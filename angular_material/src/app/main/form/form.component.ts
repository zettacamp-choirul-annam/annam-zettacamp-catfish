import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() item: any;
  @Output() submited = new EventEmitter();

  isEditMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(data: any): void {
    const { full_name, nick_name, isEdit } = data.item.currentValue || {};
    this.isEditMode = isEdit || false;
  }

  onSubmit(form: any) {
    this.submited.emit(form.value);
  }

}
