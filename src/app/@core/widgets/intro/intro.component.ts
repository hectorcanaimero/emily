import { Component, OnInit } from '@angular/core';
import { StorageService } from '@core/services/storage.service';

@Component({
  selector: 'app-intro-widget',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroWidgetComponent implements OnInit {

  user: any;
  constructor(
    private storage: StorageService
  ) { }

  async ngOnInit() {
    this.user = await this.storage.getStorage('user');
  }

}
