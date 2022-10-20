import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../../Data';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void { }

}
