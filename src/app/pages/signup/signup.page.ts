import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'; 
import {AuthService} from 'src/app/services/auth.service'; 

@Component({
  selector: 'app-test-slide',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class TestSlidePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  validationMessages = {
    email: [
      {type: 'required',message:"Enter your email address"},
      {type:"pattern", meesage:"Please fix the formatting for your email"}
    ],
    password: [
      {type: "required", message: "Enter your new password here"},
      {type:"minlength", message: "Your password must be at least 8 characters"}
    ]
 }

  ValidationFormUser : FormGroup;
  constructor(public router:Router,public formBuilder : FormBuilder, public authService: AuthService) { }

  ngOnInit() {
    this.ValidationFormUser = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(8),
      ]))
    })
  }
  routeToSignUp(){
  }

  RedirectToLoginPage()
  {
    this.router.navigateByUrl('/login')
  }

}
