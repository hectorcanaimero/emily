import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '@core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private nav: NavController,
    private storage: StorageService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const result = await this.storage.getStorage('token');
    if (!result) {
      this.nav.navigateRoot('/user/signIn');
      return false;
    }
    return true;

  }
}
