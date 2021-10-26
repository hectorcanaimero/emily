import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { Globalization } from '@ionic-native/globalization/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { MomentModule } from 'ngx-moment';

import { appRoute } from './app.routes';
import { AppComponent } from './app.component';
import { TraslationService } from './@core/services/traslation.service';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function playerFactory() { return player; }
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    appRoute,
    MomentModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),
    TranslateModule.forRoot({ loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] } })
  ],
  providers: [
    HTTP,
    Globalization,
    TraslationService,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
