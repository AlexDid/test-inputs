import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayRulesModule } from './display-rules/display-rules.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DisplayRulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
