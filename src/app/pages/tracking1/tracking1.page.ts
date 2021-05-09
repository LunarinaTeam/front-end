import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking1',
  templateUrl: './tracking1.page.html',
  styleUrls: ['./tracking1.page.scss'],
})
export class Tracking1Page implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  RedirectToOtherPage()
  {
    this.router.navigateByUrl('/tracking2')
  }

}
