import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-askfortracking',
  templateUrl: './askfortracking.page.html',
  styleUrls: ['./askfortracking.page.scss'],
})
export class AskfortrackingPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  redirectToLogin(){
    this.router.navigateByUrl('/login')
  }
  redirectToTrackingPages(){
    this.router.navigateByUrl('tracking1')
  }

}
