import { ChartsModule } from 'ng2-charts';
import { CodeMirrorService } from './core/service/codemirror.service';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/_template/home/home.component';
import { PageNotFoundComponent } from './views/_template/page-not-found/page-not-found.component';
import { AboutComponent } from './views/_template/about/about.component';
import { ChartjsComponent } from './views/_template/chartjs/chartjs.component';
import { HighlightDirective } from './core/directive/highlight.directive';
import { TemplateDrivenFormComponent } from './views/_template/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './views/_template/reactive-form/reactive-form.component';
import { LoginComponent } from './views/_template/login/login.component';
import { DashboardComponent } from './views/_template/dashboard/dashboard.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { LocalStorageConstants } from './core/helpers/enums/local-storage.enum';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ColorComponent } from './views/_template/color/color.component';
import { TypographyComponent } from './views/_template/typography/typography.component';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './views/_template/widget/widget.component';
import {
  IconModule,
  IconSetModule,
  IconSetService,
} from '@coreui/icons-angular';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';
import { MatTabsModule } from '@angular/material/tabs';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

export function GetToken() {
  return localStorage.getItem(LocalStorageConstants.TOKEN);
}
const APP_CONTAINERS = [DefaultLayoutComponent];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    HighlightDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    LoginComponent,
    DashboardComponent,
    DefaultLayoutComponent,
    ChartjsComponent,
    ColorComponent,
    TypographyComponent,
    WidgetComponent,
    ...APP_CONTAINERS,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    SnotifyModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    ChartsModule,
    MatTabsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    HttpClientModule,
    NgxSpinnerModule,
    IconModule,
    IconSetModule.forRoot(),
    TabsModule.forRoot(),
    PerfectScrollbarModule,
    CodemirrorModule,
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: GetToken,
        allowedDomains: environment.allowedDomains,
        disallowedRoutes: environment.disallowedRoutes,
      },
    }),

    AlertModule.forRoot(),
    ModalModule.forRoot(),
    MatTabsModule,
    CommonModule,
    FormsModule,
    TabsModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [
    IconSetService,
    SnotifyService,
    CodeMirrorService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
