import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isEdit = false;
  index = null;

  // I/O
  @Input() data: any;
  @Output() _submit: EventEmitter<any> = new EventEmitter();

  // child references
  @ViewChild('full_name') $full_name!: ElementRef;
  @ViewChild('nick_name') $nick_name!: ElementRef;
  @ViewChild('submit_btn') $submit_btn!: ElementRef;

  constructor() { }

  // lifecycles hooks

  ngOnInit(): void { }

  ngOnChanges({ data }: any): void {
    const { currentValue } = data;
    
    if (!('edit' in currentValue) || !currentValue.edit) return;

    this.isEdit = true;
    this.index = currentValue.index;
    
    this.$full_name.nativeElement.value = currentValue.full_name; 
    this.$nick_name.nativeElement.value = currentValue.nick_name; 
  }

  // components methods

  onSubmit(form: any) {    
    // clear value when data submited
    this.$full_name.nativeElement.value = ''; 
    this.$nick_name.nativeElement.value = ''; 

    this.$full_name.nativeElement.blur(); 
    this.$nick_name.nativeElement.blur(); 

    // emit data to parent
    this._submit.emit({
      index: this.index,
      ...form.value
    });

    if (this.isEdit) {
      this.isEdit = false;
      this.index = null;
    } 
  }
}
