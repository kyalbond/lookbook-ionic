import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
    {
      path: 'login',
      children: [
      {
        path: '',
        loadChildren: './login/login.module#LoginPageModule'
      },
      {
        path: 'signup',
        loadChildren: './login/signup/signup.module#SignupPageModule'
      },
    ]
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}