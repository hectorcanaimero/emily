import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PostContentsWidgetComponent } from '@modules/contents/widget/post/post.component';

@NgModule({
  declarations: [PostContentsWidgetComponent],
  exports: [PostContentsWidgetComponent],
  entryComponents: [PostContentsWidgetComponent],
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
  ],
  providers: [ ]
})
export class PostModule { }
