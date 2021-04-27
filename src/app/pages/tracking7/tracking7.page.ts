import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking7',
  templateUrl: './tracking7.page.html',
  styleUrls: ['./tracking7.page.scss'],
})
export class Tracking7Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  RedirectToOtherPage()
  {
    this.router.navigateByUrl('/tracking8')
  }

}

