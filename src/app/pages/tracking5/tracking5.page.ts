import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking5',
  templateUrl: './tracking5.page.html',
  styleUrls: ['./tracking5.page.scss'],
})
export class Tracking5Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  RedirectToOtherPage()
  {
    this.router.navigateByUrl('/tracking6')
  }

}

