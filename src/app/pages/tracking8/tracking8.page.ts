import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking8',
  templateUrl: './tracking8.page.html',
  styleUrls: ['./tracking8.page.scss'],
})
export class Tracking8Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  RedirectToOtherPage()
  {
    this.router.navigateByUrl('/tracking9')
  }

}
