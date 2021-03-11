// Angular
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';



@Component({
  selector: 'ngx-tab-body',
  templateUrl: './ngx-tab-body.component.html',
  styleUrls: ['./ngx-tab-body.component.scss']
})
export class NgxTabBodyComponent implements OnInit {

  @ViewChild(TemplateRef) bodyContent: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
