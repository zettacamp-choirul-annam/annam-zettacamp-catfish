import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: any = [];
  item: any = {};

  onSubmited(data: any) {
    this.list.push(data);
  }

  onEdit(index: any) {
    this.item = {
      isEdit: true,
      ...this.list[index]
    };
  }

  onDelete(index: any) {
    this.list.splice(index, 1);
  }
}
