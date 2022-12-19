import { IconModule } from './views/_template/Icon/icon.module';
import { WidgetComponent } from './views/_template/widget/widget.component';
import { TypographyComponent } from './views/_template/typography/typography.component';
import { ColorComponent } from './views/_template/color/color.component';
import { ChartjsComponent } from './views/_template/chartjs/chartjs.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './views/_template/dashboard/dashboard.component';
import { ReactiveFormComponent } from './views/_template/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './views/_template/template-driven-form/template-driven-form.component';
import { HomeComponent } from './views/_template/home/home.component';
import { AboutComponent } from './views/_template/about/about.component';
import { PageNotFoundComponent } from './views/_template/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/_template/login/login.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }, // Set default route
  { path: 'login', component: LoginComponent },

  {
    path: '',
    canActivate: [AuthGuard],
    component: DefaultLayoutComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'chartjs', component: ChartjsComponent },
      { path: 'color', component: ColorComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'widget', component: WidgetComponent },
      { path: 'templatedrivenform', component: TemplateDrivenFormComponent },
      { path: 'reactiveform', component: ReactiveFormComponent },
      { path: 'pagenotfound', component: PageNotFoundComponent },
      {
        path: 'base',
        loadChildren: () => import('./views/_template/base/base.module').then(m => m.BaseModule)
      },

      {
        path: 'button',
        loadChildren: () => import('./views/_template/button/button.module').then(m => m.ButtonModule)
      },
      {
        path: 'icon',
        loadChildren: () => import('./views/_template/Icon/icon.module').then(m => m.IconModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./views/_template/notification/notification.module').then(m => m.NotificationModule)
      },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
