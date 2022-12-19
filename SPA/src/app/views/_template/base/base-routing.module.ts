import { TooltipsComponent } from './tooltips/tooltips.component';
import { TabsComponent } from './tabs/tabs.component';
import { TablesComponent } from './tables/tables.component';
import { SwitchesComponent } from './switches/switches.component';
import { ProgressComponent } from './progress/progress.component';
import { PopoversComponent } from './popovers/popovers.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { FormsComponent } from './forms/forms.component';
import { CollapsesComponent } from './collapses/collapses.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { CardsComponent } from './cards/cards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      Title: 'Base',
    },
    children: [
      {
        path: 'cards',
        component: CardsComponent,
        data:{
          title: 'Cards'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title:'Collapses'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          titlt: 'Forms'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data:{
          title: 'Paginations'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popovers'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title:'Progress'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          titlt: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title:'Tabs'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          titlt: 'Tooltips'
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}
