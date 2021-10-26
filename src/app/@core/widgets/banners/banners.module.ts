import { IonicModule } from '@ionic/angular';
import { BannersWidgetComponent } from './banners.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BannersWidgetComponent],
  exports: [BannersWidgetComponent],
  entryComponents: [BannersWidgetComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class BannersWidgetModule { }
