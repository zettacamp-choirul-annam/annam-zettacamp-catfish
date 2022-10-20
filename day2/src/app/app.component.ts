import { Component } from '@angular/core';
import { DATA } from './data-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = DATA;
}
