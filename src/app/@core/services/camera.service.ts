import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})

export class CameraService {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      width: 600,
      height: 800,
      resultType: CameraResultType.DataUrl,
    });
    return image.dataUrl;
    // return this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  };

}
