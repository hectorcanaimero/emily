import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimValueDirective } from './trim-value.directive';



@NgModule({
  declarations: [
    TrimValueDirective
  ],
  exports: [
    TrimValueDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class DirectivesModule { }
