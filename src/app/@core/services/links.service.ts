import { Injectable } from '@angular/core';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { NavController, MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(
    private nav: NavController,
    private menu: MenuController,
    private nativePageTransitions: NativePageTransitions,
  ) { }

  onLink = (url: string) => {
    this.menu.close();
    this.nav.navigateForward(url);
  };

  onLinkFade = (url: string) => {
    this.nativePageTransitions.fade(null);
    this.nav.setDirection('root', false);
    this.nav.navigateRoot(url);
  };
}
