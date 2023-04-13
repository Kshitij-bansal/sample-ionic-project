import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Images } from 'src/assets/images';
import { NavigationPath } from '../../constants/navigation_path';
import { SPLASH_SCREEN_TIMER,SPLASH_SCREEN_TEXT } from 'src/app/constants/strings';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  backgroundImage: string = Images.splashBackground;
  fynnLogoImage: string = Images.fynnLogo;
  fynnDogImage: string = Images.fynnDog;
  splashScreenText : string = SPLASH_SCREEN_TEXT;
  constructor(public router: Router, private store: Store) {
    setTimeout(() => {
      this.router.navigateByUrl(NavigationPath.LOGIN_SCREEN);
    }, SPLASH_SCREEN_TIMER);
  }
  ngOnInit(): void {
    // this.store.dispatch()
  }
}
