// Angular
import { Component } from '@angular/core';

// Project
import { Styles } from '@ngx-eco/ngx-tabs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  headerStyles: Styles = {'color': '#f00', 'display': 'flex', 'height.px': 100}
  labelStyles: Styles = {'color': '#0f0'}
  labelActiveStyles: Styles = {'color': '#00f'}
  bodyStyles: Styles = {'color': '#0ff'}

}
