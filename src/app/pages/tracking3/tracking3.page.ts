import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking3',
  templateUrl: './tracking3.page.html',
  styleUrls: ['./tracking3.page.scss'],
})
export class Tracking3Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  RedirectToOtherPage()
  {
    this.router.navigateByUrl('/tracking3')
  }

}
