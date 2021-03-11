// Angular
import { Component, ContentChild, Input, OnInit } from '@angular/core';

// Project
import { NgxTabBodyComponent } from '../ngx-tab-body/ngx-tab-body.component';
import { NgxTabLabelComponent } from '../ngx-tab-label/ngx-tab-label.component';



@Component({
  selector: 'ngx-tab-item',
  templateUrl: './ngx-tab-item.component.html',
  styleUrls: ['./ngx-tab-item.component.scss']
})
export class NgxTabItemComponent implements OnInit {

  @Input() label: string;
  @Input() isActive: boolean;

  @ContentChild(NgxTabBodyComponent) bodyComponent: NgxTabBodyComponent;
  @ContentChild(NgxTabLabelComponent) labelComponent: NgxTabLabelComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
