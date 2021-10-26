import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudPage } from './solicitud.page';

const routes: Routes = [
  { path: '', component: SolicitudPage, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudPageRoutingModule {}
