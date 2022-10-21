import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: any = [];
  data: any = {};

  onFormSubmit(data: any) {   
    if (data.index != null) {
      return this.list[data.index] = data;
    }

    this.list.push(data);
  }

  onEdit(index: any) {
    const item = this.list[index];
          item.index = index;
          
    this.data = {
      edit: true,
      ...item
    };
  }

  onDelete(index: any) {
    this.list.splice(index, 1);
  }
}
