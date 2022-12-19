import { CoreuiIconsComponent } from './coreui-icons/coreui-icons.component';

import { SingleLineIconsComponent } from './single-line-icons/single-line-icons.component';
import { FontsComponent } from './fonts/fonts.component';
import { FlagsComponent } from './flags/flags.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      Title: 'Icon',
    },
    children: [
      {
        path: 'coreui-icons',
        component: CoreuiIconsComponent,
        data: {
          title: 'CoreUi-Icons',
        },
      },
      {
        path: 'flags',
        component: FlagsComponent,
        data: {
          title: 'Flags',
        },
      },
      {
        path: 'fonts',
        component: FontsComponent,
        data: {
          title: 'Fonts',
        },
      },
      {
        path: 'single-line-icons',
        component: SingleLineIconsComponent,
        data: {
          titlt: 'Single-Line-Icons',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconRoutingModule {}
