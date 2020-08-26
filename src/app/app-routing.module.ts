import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component'


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path: 'login', canActivate:[LoginAuthGuard], component: LoginComponent}
  // {path: 'not-found', component: NotFoundComponent},
  // {path: '**', redirectTo: 'not-found'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
