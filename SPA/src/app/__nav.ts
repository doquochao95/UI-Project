import { Role } from './core/model/role.model';
import { LocalStorageConstants } from './core/helpers/enums/local-storage.enum';
import { INavData } from '@coreui/angular';
import { Users } from './core/model/users.model';
import { Injectable } from '@angular/core';
import { strict } from 'assert';
import { stringify } from 'querystring';
@Injectable({ providedIn: 'root' })

//Provide the service at the root level
//Angular creates a single, shared instance of the *belowclass and injects it into any class that asks for it.
export class Nav {
  public users: Users = <Users>{};
  public navItems: INavData[] = [];
  public getNav(): INavData[] {
    this.users  = JSON.parse(localStorage.getItem(LocalStorageConstants.USER)!).user as Users;
    console.log(this.users);
    this.users.is_Admin ? this.getNavAdmin() : this.getNavUser();

    return this.navItems;
  }
  private getNavAdmin(): void {
    this.navItems = [
      {
        title: true,
        name: 'Template',
      },
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        // badge: {
        //   variant: 'info',
        //   text: 'NEW'
        // }
      },
      // {
      //   title: true,
      //   name: 'Theme'
      // },
      {
        name: 'Home',
        url: '/home',
        icon: 'icon-home',
      },
      {
        name: 'Colors',
        url: '/color',
        icon: 'icon-drop',
      },
      {
        name: 'Typography',
        url: '/typography',
        icon: 'icon-pencil',
      },
      // {
      //   title: true,
      //   name: 'Components'
      // },
      {
        name: 'Base',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Cards',
            url: '/base/cards',
            icon: 'icon-puzzle',
          },
          {
            name: 'Carousels',
            url: '/base/carousels',
            icon: 'icon-puzzle',
          },
          {
            name: 'Collapses',
            url: '/base/collapses',
            icon: 'icon-puzzle',
          },
          {
            name: 'Forms',
            url: '/base/forms',
            icon: 'icon-puzzle',
          },
          {
            name: 'Pagination',
            url: '/base/paginations',
            icon: 'icon-puzzle',
          },
          {
            name: 'Popovers',
            url: '/base/popovers',
            icon: 'icon-puzzle',
          },
          {
            name: 'Progress',
            url: '/base/progress',
            icon: 'icon-puzzle',
          },
          {
            name: 'Switches',
            url: '/base/switches',
            icon: 'icon-puzzle',
          },
          {
            name: 'Tables',
            url: '/base/tables',
            icon: 'icon-puzzle',
          },
          {
            name: 'Tabs',
            url: '/base/tabs',
            icon: 'icon-puzzle',
          },
          {
            name: 'Tooltips',
            url: '/base/tooltips',
            icon: 'icon-puzzle',
          },
        ],
      },
      {
        name: 'Buttons',
        url: '/button',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/button/buttons',
            icon: 'icon-cursor',
          },
          {
            name: 'Dropdowns',
            url: '/button/dropdowns',
            icon: 'icon-cursor',
          },
          {
            name: 'Brand Buttons',
            url: '/button/brand-buttons',
            icon: 'icon-cursor',
          },
        ],
      },
      {
        name: 'Charts',
        url: '/chartjs',
        icon: 'icon-pie-chart',
      },
      {
        name: 'Icons',
        url: '/icon',
        icon: 'icon-star',
        children: [
          {
            name: 'CoreUI Icons',
            url: '/icon/coreui-icons',
            icon: 'icon-star',
            badge: {
              variant: 'success',
              text: 'NEW',
            },
          },
          {
            name: 'Flags',
            url: '/icon/flags',
            icon: 'icon-star',
          },
          {
            name: 'Fonts',
            url: '/icon/fonts',
            icon: 'icon-star',
            badge: {
              variant: 'secondary',
              text: '4.7',
            },
          },
          {
            name: 'Single Line Icons',
            url: '/icon/single-line-icons',
            icon: 'icon-star',
          },
        ],
      },
      {
        name: 'Notifications',
        url: '/notification',
        icon: 'icon-bell',
        children: [
          {
            name: 'Alerts',
            url: '/notification/alerts',
            icon: 'icon-bell',
          },
          {
            name: 'Badges',
            url: '/notification/badges',
            icon: 'icon-bell',
          },
          {
            name: 'Modals (Popup)',
            url: '/notification/modals',
            icon: 'icon-bell',
          },
        ],
      },
      {
        name: 'Widgets',
        url: '/widget',
        icon: 'icon-calculator',
        badge: {
          variant: 'info',
          text: 'NEW',
        },
      },
      // {
      //   divider: true
      // },
      // {
      //   title: true,
      //   name: 'Extras',
      // },
      // {
      //   name: 'Pages',
      //   url: '/pages',
      //   icon: 'icon-star',
      //   children: [
      //     {
      //       name: 'Login',
      //       url: '/login',
      //       icon: 'icon-star'
      //     },
      //     {
      //       name: 'Register',
      //       url: '/register',
      //       icon: 'icon-star'
      //     },
      //     {
      //       name: 'Error 404',
      //       url: '/404',
      //       icon: 'icon-star'
      //     },
      //     {
      //       name: 'Error 500',
      //       url: '/500',
      //       icon: 'icon-star'
      //     }
      //   ]
      // },
      // {
      //   name: 'Disabled',
      //   url: '/dashboard',
      //   icon: 'icon-ban',
      //   badge: {
      //     variant: 'secondary',
      //     text: 'NEW'
      //   },
      //   attributes: { disabled: true },
      // },
      // {
      //   name: 'Download CoreUI',
      //   url: 'http://coreui.io/angular/',
      //   icon: 'icon-cloud-download',
      //   class: 'mt-auto',
      //   variant: 'success',
      //   attributes: { target: '_blank', rel: 'noopener' }
      // },
      // {
      //   name: 'Try CoreUI PRO',
      //   url: 'http://coreui.io/pro/angular/',
      //   icon: 'icon-layers',
      //   variant: 'danger',
      //   attributes: { target: '_blank', rel: 'noopener' }
      // }
    ];
  }
  private getNavUser(): void {
    this.navItems = [
      {
        title: true,
        name: 'Template',
      },
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
      },
      {
        name: 'Home',
        url: '/home',
        icon: 'icon-home',
      },
      {
        name: 'Colors',
        url: '/color',
        icon: 'icon-drop',
      },
      {
        name: 'Typography',
        url: '/typography',
        icon: 'icon-pencil',
      },
      {
        name: 'Buttons',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/buttons/buttons',
            icon: 'icon-cursor',
          },
          {
            name: 'Dropdowns',
            url: '/buttons/dropdowns',
            icon: 'icon-cursor',
          },
          {
            name: 'Brand Buttons',
            url: '/buttons/brand-buttons',
            icon: 'icon-cursor',
          },
        ],
      },
      {
        name: 'Charts',
        url: '/chartjs',
        icon: 'icon-pie-chart',
      },
      {
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        children: [
          {
            name: 'CoreUI Icons',
            url: '/icons/coreui-icons',
            icon: 'icon-star',
            badge: {
              variant: 'success',
              text: 'NEW',
            },
          },
          {
            name: 'Flags',
            url: '/icons/flags',
            icon: 'icon-star',
          },
          {
            name: 'Font Awesome',
            url: '/icons/font-awesome',
            icon: 'icon-star',
            badge: {
              variant: 'secondary',
              text: '4.7',
            },
          },
          {
            name: 'Simple Line Icons',
            url: '/icons/simple-line-icons',
            icon: 'icon-star',
          },
        ],
      },
      {
        name: 'Notifications',
        url: '/notifications',
        icon: 'icon-bell',
        children: [
          {
            name: 'Alerts',
            url: '/notifications/alerts',
            icon: 'icon-bell',
          },
          {
            name: 'Badges',
            url: '/notifications/badges',
            icon: 'icon-bell',
          },
          {
            name: 'Modals',
            url: '/notifications/modals',
            icon: 'icon-bell',
          },
        ],
      },
      {
        name: 'Widgets',
        url: '/widgets',
        icon: 'icon-calculator',
        badge: {
          variant: 'info',
          text: 'NEW',
        },
      },
    ];
  }
}
