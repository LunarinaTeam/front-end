import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashpage',
  templateUrl: './splashpage.page.html',
  styleUrls: ['./splashpage.page.scss'],
})
export class SplashpagePage implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit() {
  }
  RedirectToSignUp(){
    this.router.navigateByUrl('/signup');
  }

}
