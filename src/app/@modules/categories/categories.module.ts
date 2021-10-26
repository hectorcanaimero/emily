import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { categoriesRoute } from '@modules/categories/categories.routes';



@NgModule({
  declarations: [],
  imports: [
    IonicModule,
    CommonModule,
    categoriesRoute,
  ]
})
export class CategoriesModule { }
