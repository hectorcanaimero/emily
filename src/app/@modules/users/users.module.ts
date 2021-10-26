import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { userRoute } from './users.routes';



@NgModule({
  declarations: [],
  imports: [
    userRoute,
    IonicModule,
    CommonModule,
  ]
})
export class UsersModule { }
