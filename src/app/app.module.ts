import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GopayInlineModule } from './gopay-inline/gopay-inline.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GopayInlineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
