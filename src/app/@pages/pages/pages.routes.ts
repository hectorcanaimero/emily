import { RouterModule, Routes } from '@angular/router';
import { PagesPage } from './pages.page';

const routes: Routes = [
  { path: '', component: PagesPage,
    children: [
      { path: 'home', loadChildren: () => import('src/app/@pages/home/home.module').then( m => m.HomePageModule) },
      { path: 'notification', loadChildren: () => import('@modules/notification/pages/home/home.module').then( m => m.HomePageModule) },
      { path: 'solicitud', loadChildren: () => import('@modules/categories/categories.module').then( m => m.CategoriesModule) },
      { path: '', redirectTo: '/pages/home', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' }
];

export const pagesRoute = RouterModule.forChild(routes);
