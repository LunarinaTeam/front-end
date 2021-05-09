import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking9',
  templateUrl: './tracking9.page.html',
  styleUrls: ['./tracking9.page.scss'],
})
export class Tracking9Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  RedirectToOtherPage()
  {
    this.router.navigateByUrl('/tracking10')
  }

}
