import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking4',
  templateUrl: './tracking4.page.html',
  styleUrls: ['./tracking4.page.scss'],
})
export class Tracking4Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  RedirectToOtherPage()
  {
    this.router.navigateByUrl('/tracking5')
  }

}
