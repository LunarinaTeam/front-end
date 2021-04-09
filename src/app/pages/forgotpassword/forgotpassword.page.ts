import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  RedirectToLoginPage()
  {
    this.router.navigateByUrl('/login')
  }

}
