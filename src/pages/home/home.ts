import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  foto: string = null;

  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  sacarFoto() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
    };
    this.camera.getPicture( options )
    .then(imageData => {
      // this.imageTobillo = `data:image/jpeg;base64,${imageData}`;
      this.foto = imageData;
    })
    .catch(error => {
      console.error( error );
    });
  }

}
