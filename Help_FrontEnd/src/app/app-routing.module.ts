import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'rentals',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
