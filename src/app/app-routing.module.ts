import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component'


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'activity', loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule)}
  // {path: 'not-found', component: NotFoundComponent},
  // {path: '**', redirectTo: 'not-found'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
