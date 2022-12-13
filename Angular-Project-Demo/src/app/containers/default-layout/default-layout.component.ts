import { Users } from './../../core/model/users.model';
import { INavData } from '@coreui/angular';
import { navItems } from './../../_nav';
import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Nav } from '../../__nav';
import { AuthService } from 'src/app/core/service/auth.service';
import { LocalStorageConstants } from 'src/app/core/helpers/enums/local-storage.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems: INavData[];
  public users: Users = JSON.parse(localStorage.getItem(LocalStorageConstants.USER)!).user as Users;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(
    private authService: AuthService,
    private nav: Nav,
    @Inject(DOCUMENT) _document?: any
  ) {
    this.navItems = nav.getNav()
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized =
        _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
