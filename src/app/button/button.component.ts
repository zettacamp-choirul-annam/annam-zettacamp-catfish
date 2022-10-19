import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import feather from "feather-icons";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // @Input() text: string | undefined;
  @Input() icon: string | undefined;
  
  constructor( private element: ElementRef ) { }

  ngOnInit(): void {
    this.element.nativeElement.innerHTML = feather.icons[this.icon].toSvg();
  }
}
