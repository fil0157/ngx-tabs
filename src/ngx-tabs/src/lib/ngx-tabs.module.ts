// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { NgxTabsComponent } from './components/ngx-tabs/ngx-tabs.component';
import { NgxTabItemComponent } from './components/ngx-tab-item/ngx-tab-item.component';
import { NgxTabBodyComponent } from './components/ngx-tab-body/ngx-tab-body.component';
import { NgxTabLabelComponent } from './components/ngx-tab-label/ngx-tab-label.component';



@NgModule({
  declarations: [
    NgxTabsComponent,
    NgxTabItemComponent,
    NgxTabBodyComponent,
    NgxTabLabelComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgxTabsComponent,
    NgxTabItemComponent,
    NgxTabBodyComponent,
    NgxTabLabelComponent,
  ],
})
export class NgxTabsModule { }
