import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-repaired-widget',
  templateUrl: './last-repaired.component.html',
  styleUrls: ['./last-repaired.component.scss'],
})
export class LastRepairedWidgetComponent implements OnInit {

  options = {
    loop: true,
    autoplay: true,
    freemode: true,
    spaceBetween: 20,
    slidesPerView: 1.1,
  };
  constructor() { }

  ngOnInit() {}

}
