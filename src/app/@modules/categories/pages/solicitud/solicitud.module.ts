import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SolicitudPage } from './solicitud.page';
import { HeaderModule } from '@core/widgets/header/header.module';
import { SolicitudPageRoutingModule } from './solicitud-routing.module';


@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    HeaderModule,
    SolicitudPageRoutingModule
  ],
  declarations: [SolicitudPage],
  exports: [SolicitudPage]
})
export class SolicitudCategoriesModule {}
