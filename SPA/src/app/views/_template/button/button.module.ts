import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { BrandButtonsComponent } from './brand-buttons/brand-buttons.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    BrandButtonsComponent,
    ButtonsComponent,
    DropdownsComponent
  ],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ]
})
export class ButtonModule { }
