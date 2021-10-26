import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: 'signUp', loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule) },
  {path: 'signIn', loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule) },
  {path: 'profile', loadChildren: () => import('./pages/get-profile/get-profile.module').then( m => m.GetProfilePageModule) },
];

export const userRoute = RouterModule.forChild(routes);
