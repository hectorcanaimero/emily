import { TranslatePipe } from '@ngx-translate/core';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [TranslatePipe]
})
export class PostContentsWidgetComponent implements OnInit {

  @Input() title: string;

  constructor(
    private trans: TranslatePipe,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    timer(300).subscribe(() => {
      const pipe = this.trans.transform(this.title);
      this.title = pipe;
    });
  }

  onClose = () => this.modalCtrl.dismiss();
}
