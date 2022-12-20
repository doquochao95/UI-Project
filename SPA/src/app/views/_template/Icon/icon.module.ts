import { MatTabsModule } from '@angular/material/tabs';
import { SingleLineIconsComponent } from './single-line-icons/single-line-icons.component';
import { FontsComponent } from './fonts/fonts.component';
import { FlagsComponent } from './flags/flags.component';
import { IconRoutingModule } from './icon-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CoreuiIconsComponent } from './coreui-icons/coreui-icons.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [
    CoreuiIconsComponent,
    FlagsComponent,
    FontsComponent,
    SingleLineIconsComponent,
    CoreuiIconsComponent
  ],
  imports: [
    CommonModule,
    IconRoutingModule,
    FormsModule,
    MatTabsModule,
    CodemirrorModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
  ]
})
export class IconModule { }
