import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  RedirectToMediaPage(){
    this.router.navigateByUrl('/tablinks/media_my_list')

  }

  RedirectToUserCirclePage(){
    this.router.navigateByUrl('/tablinks/usercircle')

  }

}