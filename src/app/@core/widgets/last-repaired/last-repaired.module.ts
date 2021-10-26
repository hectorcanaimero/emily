import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LastRepairedWidgetComponent } from '@core/widgets/last-repaired/last-repaired.component';



@NgModule({
  declarations: [LastRepairedWidgetComponent],
  exports: [LastRepairedWidgetComponent],
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
  ]
})
export class LastRepairedWidgetModule { }
