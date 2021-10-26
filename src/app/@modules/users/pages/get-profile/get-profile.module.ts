import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { GetProfilePage } from './get-profile.page';
import { SignUpPageRoutingModule } from './get-profile-routing.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    SignUpPageRoutingModule
  ],
  declarations: [GetProfilePage]
})
export class GetProfilePageModule {}
