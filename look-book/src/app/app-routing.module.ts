import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: './login/login.module#LoginPageModule'
      }
    ]
  },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
