import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splashpage',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.TestSlidePageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },

  {
    path: 'tablinks',
  loadChildren: () => import('./pages/tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'usercircle',
    loadChildren: () => import('./pages/usercircle/usercircle.module').then( m => m.UsercirclePageModule)
  },
  {
    path: 'tracking1',
    loadChildren: () => import('./pages/tracking1/tracking1.module').then( m => m.Tracking1PageModule)
  },
  {

    path: 'tracking2',
    loadChildren: () => import('./pages/tracking2/tracking2.module').then( m => m.Tracking2PageModule)
  },
  {
    path: 'tracking3',
    loadChildren: () => import('./pages/tracking3/tracking3.module').then( m => m.Tracking3PageModule)
  },
  {
    path: 'tracking4',
    loadChildren: () => import('./pages/tracking4/tracking4.module').then( m => m.Tracking4PageModule)
  },
  {
    path: 'tracking5',
    loadChildren: () => import('./pages/tracking5/tracking5.module').then( m => m.Tracking5PageModule)
  },
  {
    path: 'tracking6',
    loadChildren: () => import('./pages/tracking6/tracking6.module').then( m => m.Tracking6PageModule)
  },
  {
    path: 'tracking7',
    loadChildren: () => import('./pages/tracking7/tracking7.module').then( m => m.Tracking7PageModule)
  },
  {
    path: 'tracking8',
    loadChildren: () => import('./pages/tracking8/tracking8.module').then( m => m.Tracking8PageModule)
  },
  {
    path: 'tracking9',
    loadChildren: () => import('./pages/tracking9/tracking9.module').then( m => m.Tracking9PageModule)
  },
  {
    path: 'tracking10',
    loadChildren: () => import('./pages/tracking10/tracking10.module').then( m => m.Tracking10PageModule)
  },
  {
    path: 'tracking',
    loadChildren: () => import('./pages/tracking/tracking.module').then( m => m.TrackingPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.TestSlidePageModule)
  },
  {
    path: 'askfortracking',
    loadChildren: () => import('./pages/askfortracking/askfortracking.module').then( m => m.AskfortrackingPageModule)
  },
  {
    path: 'splashpage',
      loadChildren: () => import('./pages/splashpage/splashpage.module').then( m => m.SplashpagePageModule)
  },
 {
    path: 'media-my-list',
    loadChildren: () => import('./pages/media_my_list/media-my-list.module').then( m => m.MediaMyListPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
