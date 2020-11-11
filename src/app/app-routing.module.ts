import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'admin', component: DefaultLayoutComponent, children: DEFAULT_ROUTES },
  // // {
  // //   path: 'admin',
  // //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  // // },
  // {
  //   path: 'users',
  //   loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
