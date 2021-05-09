import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tracking10',
  templateUrl: './tracking10.page.html',
  styleUrls: ['./tracking10.page.scss'],
})
export class Tracking10Page implements OnInit {

  constructor(public router:Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  RedirectToOtherPage()
  {
    this.router.navigateByUrl('/home')
  }

  async PresentAlert()
  {
    const alert = await this.alertController.create({
      header: 'Allow Notifications?',
      buttons: ['Don\'t Allow', 'Allow']
    });

    await alert.present();
  }

}
