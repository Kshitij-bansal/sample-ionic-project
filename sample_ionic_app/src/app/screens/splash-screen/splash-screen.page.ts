import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Images } from 'src/assets/images';
import { NavigationPath } from '../../constants/navigation_path';
import { SPLASH_SCREEN_TIMER,SPLASH_SCREEN_LABEL } from 'src/app/constants/strings';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  backgroundImage: string = images.splashBackground;
  fynnLogoImage: string = images.fynnLogo;
  fynnDogImage: string = images.fynnDog;

  constructor(public router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl(NavigationPath.LOGIN_SCREEN);
    }, SPLASH_SCREEN_TIMER);
  }
  ngOnInit(): void {

  }
}
