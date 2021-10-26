import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TraslationService {

  constructor( private translate: TranslateService ) {
    translate.addLangs(['en', 'es', 'po']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  use = (lang: string) => this.translate.use(lang);
  getDefaultLang = () => this.translate.getDefaultLang();
}
