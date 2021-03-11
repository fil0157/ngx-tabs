// Angular
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';



@Component({
  selector: 'ngx-tab-label',
  templateUrl: './ngx-tab-label.component.html',
  styleUrls: ['./ngx-tab-label.component.scss']
})
export class NgxTabLabelComponent implements OnInit {

  @ViewChild(TemplateRef) labelContent: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
