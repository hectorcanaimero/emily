import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@modules/users/services/auth.guard';
const routes: Routes = [
  {
    path: 'pages', canActivate: [AuthGuard],
    loadChildren: () => import('src/app/@pages/pages/pages.module').then( m => m.PagesPageModule),
  },
  {
    path: 'user',
    loadChildren: () => import('@modules/users/users.module').then( m => m.UsersModule),
  },
  {
    path: 'splash',
    loadChildren: () => import('@core/widgets/splash/splash.module').then( m => m.SplashModule),
  },
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' },
];

export const appRoute = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
