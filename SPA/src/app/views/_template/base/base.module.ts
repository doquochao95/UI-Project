import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { CardsComponent } from './cards/cards.component';
import { FormsComponent } from './forms/forms.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { CollapsesComponent } from './collapses/collapses.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationsComponent } from './paginations/paginations.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ProgressComponent } from './progress/progress.component';
import { SwitchesComponent } from './switches/switches.component';
import { TablesComponent } from './tables/tables.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipsComponent } from './tooltips/tooltips.component';


@NgModule({
  declarations: [
    CardsComponent,
    FormsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    TooltipsComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ]
})
export class BaseModule { }
