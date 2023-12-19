import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
{ path : 'headerblk', loadChildren: () => import('./headerblk/headerblk.module').then(m => m.HeaderblkModule) } , 
{ path : 'detailblk', loadChildren: () => import('./detailblk/detailblk.module').then(m => m.DetailblkModule) } , 
{ path : 'categoryblk', loadChildren: () => import('./categoryblk/categoryblk.module').then(m => m.CategoryblkModule) } , 
{ path : 'mirror', loadChildren: () => import('./mirror/mirror.module').then(m => m.MirrorModule) } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
