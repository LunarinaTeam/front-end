import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking2',
  templateUrl: './tracking2.page.html',
  styleUrls: ['./tracking2.page.scss'],
})
export class Tracking2Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  RedirectToOtherPage()
  {
    this.router.navigateByUrl('/tracking3')
  }

}
