import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesPage } from './pages.page';
import { pagesRoute } from 'src/app/@pages/pages/pages.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    pagesRoute,
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
  ],
  declarations: [PagesPage]
})
export class PagesPageModule {}
