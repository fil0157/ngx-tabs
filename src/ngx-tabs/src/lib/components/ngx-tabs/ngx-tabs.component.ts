// Angular
import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  AfterContentChecked,
} from "@angular/core";

// Libs
import { Observable } from "rxjs";
import { startWith, map, delay } from "rxjs/operators";

// Project
import { NgxTabItemComponent } from "../ngx-tab-item/ngx-tab-item.component";



@Component({
  selector: 'ngx-tabs',
  templateUrl: './ngx-tabs.component.html',
  styleUrls: ['./ngx-tabs.component.scss'],
  host: {
    'class': 'ngx-tabs'
  }
})
export class NgxTabsComponent implements AfterContentInit, AfterContentChecked {

  @ContentChildren(NgxTabItemComponent) tabs: QueryList<NgxTabItemComponent>;

  tabItems: Observable<NgxTabItemComponent[]>;

  activeTab: NgxTabItemComponent;

  constructor() {}

  ngAfterContentInit(): void {
    this.tabItems = this.tabs.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.tabs.toArray()));
  }

  ngAfterContentChecked() {
    //choose the default tab
    // we need to wait for a next VM turn,
    // because Tab item content, will not be initialized yet
    if (!this.activeTab) {
      Promise.resolve().then(() => {
        this.activeTab = this.tabs.first;
      });
    }
  }

  selectTab(tabItem: NgxTabItemComponent) {
    if (this.activeTab === tabItem) {
      return;
    }

    if (this.activeTab) {
      this.activeTab.isActive = false;
    }

    this.activeTab = tabItem;

    tabItem.isActive = true;
  }
}
