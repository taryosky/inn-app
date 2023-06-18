import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleInappComponent } from './sample-inapp/sample-inapp.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleInappComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
