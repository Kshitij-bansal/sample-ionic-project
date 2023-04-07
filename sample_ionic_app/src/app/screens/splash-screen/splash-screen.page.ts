import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { images } from 'src/assets/images';

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
      this.router.navigateByUrl('login');
    }, 3000);
  }
  ngOnInit(): void {}
}
