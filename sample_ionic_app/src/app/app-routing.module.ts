import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavigationPath } from './constants/navigation_path';
import {AuthGuard} from "./screens/authentication/guards/auth.guard";

const routes: Routes = [
  {
    path: NavigationPath.SPLASH_SCREEN,
    loadChildren: () =>
      import('./screens/splash-screen/splash-screen.module').then(
        (m) => m.SplashScreenPageModule
      ),
  },
  {
    path: NavigationPath.LOGIN_SCREEN,
    loadChildren: () =>
      import('./screens/authentication/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./screens/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

  {path: '', redirectTo: NavigationPath.SPLASH_SCREEN, pathMatch:'full',},
  {path: '**', redirectTo: NavigationPath.SPLASH_SCREEN, pathMatch:'full'},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
