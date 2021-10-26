import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationOptions } from 'ngx-lottie';
import { timer } from 'rxjs';
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  options: AnimationOptions = {
    path: './assets/lotties/mecanics.json',
    loop: true
  };

  constructor(
    private nav: NavController
  ) { }

  ionViewDidEnter() {
    SplashScreen.hide();
  }

  ngOnInit() {
    timer(3000).subscribe(() => this.nav.navigateRoot(''));
  }

}
