import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking6',
  templateUrl: './tracking6.page.html',
  styleUrls: ['./tracking6.page.scss'],
})
export class Tracking6Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  RedirectToOtherPage()
  {
    this.router.navigateByUrl('/tracking7')
  }

}
