import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  async share() {
    await Share.share({
      title: 'Ionic & Capacitor',
      text: 'Check out this cool framework!',
      url: 'https://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }

}
