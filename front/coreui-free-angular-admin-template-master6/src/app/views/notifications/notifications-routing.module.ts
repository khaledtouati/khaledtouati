import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertsComponent } from './alerts.component';

const routes: Routes = [
  {
    path: '',
    component: AlertsComponent,
    data: {
      title: 'Bi dashboard'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {}
