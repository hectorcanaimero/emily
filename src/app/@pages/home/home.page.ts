import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  totalCategories = 6;
  toogleCategory = false;
  categories = [
    { icon: './assets/images/icons/01.svg', name: 'Mecanica General' },
    { icon: './assets/images/icons/02.svg', name: 'Electricidad' },
    { icon: './assets/images/icons/03.svg', name: 'Frenos' },
    { icon: './assets/images/icons/01.svg', name: 'Suspension' },
    { icon: './assets/images/icons/02.svg', name: 'Mantenimiento' },
    { icon: './assets/images/icons/03.svg', name: 'Transmisión' },
    { icon: './assets/images/icons/01.svg', name: 'Neumaticos' },
    { icon: './assets/images/icons/02.svg', name: 'Aire Acondicionado' },
    { icon: './assets/images/icons/03.svg', name: 'Llaves' }
  ];
  constructor() {}

  onToogleCategories = () => this.toogleCategory = !this.toogleCategory;
}
