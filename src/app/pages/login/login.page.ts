import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'; 
import {AuthService} from 'src/app/services/auth.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validationUserMessage = {
    email: [
      {type:"required", message:"Please enter your email"},
      {type:"pattern", message:"The email entered is incorrect. Please try again."}
    ],
    password:[
      {type:"required", message:"Please enter your password."},
      {type:"minLength", message:"The password must be at least 8 characters or more."}
    ]
  }

  validationFormUser: FormGroup; 

  constructor(public router:Router, public formBuilder : FormBuilder, public authService: AuthService) { }

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
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

  LoginUser(value){
    console.log("Logged In!"); 
    try{
      this.authService.loginFireauth(value).then(resp =>{
        console.log(resp)
        this.router.navigateByUrl('/tablinks/home')
      })
    }catch(err){
      console.log(err); 
    }
  }

  RedirectToOtherPage()
  {
    this.router.navigateByUrl('/signup')
  }

  RedirectToOtherForgotPage()
  {
    this.router.navigateByUrl('/forgotpassword')
  }

  callMethodsForLoginOnClick(){
    //this.RedirectToOtherPage(); 
    //this.LoginUser(validationFormUser.value);
  }
}
