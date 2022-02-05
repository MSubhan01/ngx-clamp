import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxClampModule } from 'ngx-clamp';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxClampModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
