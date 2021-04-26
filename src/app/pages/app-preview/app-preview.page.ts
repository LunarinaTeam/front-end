import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-slide',
  templateUrl: './app-preview.page.html',
  styleUrls: ['./app-preview.page.scss'],
})
export class TestSlidePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  constructor() {}

  ngOnInit() {
  }
  routeToSignUp(){
  }

}
