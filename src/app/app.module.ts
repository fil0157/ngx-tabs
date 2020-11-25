// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Project
import { NgxTabsModule } from '@fil0157/ngx-tabs';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxTabsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
