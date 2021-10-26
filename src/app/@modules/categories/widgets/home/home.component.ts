import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget-categories',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeWidgetComponent {

  totalCategories = 6;
  toogleCategory = false;
  categories = [
    { icon: './assets/images/icons/01.svg', name: 'CATEGORIES.TYPE.MECANICS' },
    { icon: './assets/images/icons/02.svg', name: 'CATEGORIES.TYPE.ELECTRICAL' },
    { icon: './assets/images/icons/03.svg', name: 'CATEGORIES.TYPE.BRAKES' },
    { icon: './assets/images/icons/04.svg', name: 'CATEGORIES.TYPE.SUSPENSION' },
    { icon: './assets/images/icons/05.svg', name: 'CATEGORIES.TYPE.MAINTENANCE' },
    { icon: './assets/images/icons/06.svg', name: 'CATEGORIES.TYPE.TRANSMISSION' },
    { icon: './assets/images/icons/07.svg', name: 'CATEGORIES.TYPE.TIRES' },
    { icon: './assets/images/icons/08.svg', name: 'CATEGORIES.TYPE.OIL_CHANGE' },
    { icon: './assets/images/icons/09.svg', name: 'CATEGORIES.TYPE.AIR_CONDITIONING' }
  ];
  constructor(
    private nav: NavController,
    private router: Router
  ) {}

  goToSolicitud = (item: any) => {
    console.log(item);
    console.log('/pages/solicitud');
    this.router.navigate(['pages', 'solicitud'], { state: item } );
    // this.nav.navigateForward(`/pages/solicitud`);
  };

  onToogleCategories = () => this.toogleCategory = !this.toogleCategory;

}
