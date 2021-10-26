import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-banner',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})
export class BannersWidgetComponent implements OnInit {

  options = {
    speed: 600,
    autoplay: true,
    loop: true,
  };

  constructor() { }

  ngOnInit() {}

}
