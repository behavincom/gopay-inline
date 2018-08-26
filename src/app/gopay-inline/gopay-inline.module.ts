import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GopayInlineComponent } from './gopay-inline.component';

@NgModule({
  declarations: [
    GopayInlineComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    GopayInlineComponent
  ]
})
export class GopayInlineModule { }
