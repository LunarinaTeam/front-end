import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'; 
import {AuthService} from 'src/app/services/auth.service'; 
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-test-slide',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class TestSlidePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  validationMessages = {
    emailSignup: [
      {type: 'required',message:"Enter your email address"},
      {type:"pattern", meesage:"Please fix the formatting for your email"}
    ],
    password: [
      {type: "required", message: "Enter your new password here"},
      {type:"minlength", message: "Your password must be at least 8 characters"}
    ]
 }

  validationFormUser : FormGroup;
  loading:any;
  constructor(private navCtr: NavController, public router:Router,public formBuilder : FormBuilder, private authService: AuthService,public loadingCtrl : LoadingController, private alertCtrl: AlertController) { 
    this.loading = this.loadingCtrl
  }

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
      emailSignup: new FormControl('', Validators.compose([
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

  RedirectToAskForTrackingPage()
  {
    this.router.navigateByUrl('/askfortracking')
  }
  RedirectToLoginPage(){
    this.router.navigateByUrl('/login')
  }

  registerUser(value){
     try{
    this.authService.userRegistration(value).then( response =>{
      console.log(response);
      if(response.user){
        response.user.updateProfile({
          displayName: value.names,
          emailSignup: value.emailSignup,
        });
        this.loading.dismiss();
        this.router.navigateByUrl('/askfortracking');
      }
      })
  }catch(erro){
    console.log(erro)
 }
   }


async errorLoading(message: any){
  const loading = await this.alertCtrl.create({
    header:"Error Registering",
    message:message,
    buttons:[{
      text:'ok',
      handler: ()=>{
      this.navCtr.navigateBack(['signup'])
    }
    }]
  })
   await loading.present();
}

}
