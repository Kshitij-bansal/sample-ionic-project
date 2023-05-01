import {Component, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavigationPath } from './constants/navigation_path';
import {Network} from "@capacitor/network";
import {Store} from "@ngrx/store";
import {allNetworkActions} from "./NgRx_state/app";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    private platform: Platform,
    public router:Router,
    private store: Store
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    Network.addListener('networkStatusChange', status => {
      if (status.connected) {
        this.store.dispatch(allNetworkActions.NetworkReconnected());
        window.alert("connected");
      } else {
        this.store.dispatch(allNetworkActions.NetworkDisconnected())
        window.alert("disconnected");
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log(NavigationPath.SPLASH_SCREEN);
      this.router.navigateByUrl(NavigationPath.SPLASH_SCREEN);
    });
  }
}
