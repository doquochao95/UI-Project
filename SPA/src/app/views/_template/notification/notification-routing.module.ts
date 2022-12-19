import { ModalsComponent } from './modals/modals.component';
import { BadgesComponent } from './badges/badges.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      Title: 'Notification',
    },
    children: [
      {
        path: 'alerts',
        component: AlertsComponent,
        data: {
          title: 'Alerts',
        },
      },
      {
        path: 'badges',
        component: BadgesComponent,
        data: {
          title: 'Badges',
        },
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationRoutingModule {}
