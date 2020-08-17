import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardSmallComponent } from './card-small/card-small.component';



@NgModule({
  declarations: [CardComponent, CardSmallComponent],
  exports: [CardComponent, CardSmallComponent],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
