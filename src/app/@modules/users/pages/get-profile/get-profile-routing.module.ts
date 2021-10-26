import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetProfilePage } from './get-profile.page';

const routes: Routes = [
  {
    path: '',
    component: GetProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPageRoutingModule {}
