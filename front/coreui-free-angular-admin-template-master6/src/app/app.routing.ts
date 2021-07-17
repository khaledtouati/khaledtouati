import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { LogComponent } from './log/log.component';
import { RegisterComponent } from './views/register/register.component';
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';



import { UserAccountComponent } from './user-account/user-account.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';
import { EmailComponent } from './mail/email/email.component';
import { HomeComponent } from './mail/home/home.component';

export const routes: Routes = [

  {
    path:"mail",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path: '',
    component: LogComponent,
 //   redirectTo: '/log',
    pathMatch: 'full',
    data: {
      title: 'Log Page'
    }
   
  },
  {
  	path: 'userAccount',
  	component: UserAccountComponent
  },
  {
    path: 'primaryTransaction/:username',
    component: PrimaryTransactionComponent
  },
  {
    path: 'savingsTransaction/:username',
    component: SavingsTransactionComponent
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
   
 
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
     
      {
        path: 'Bi-dashboard',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path:"sendemail",
        component:EmailComponent,
      },
    
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
