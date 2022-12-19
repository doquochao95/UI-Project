import { Component } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Project-Demo';
  constructor(
    public iconSet: IconSetService,
    private spinnerService: NgxSpinnerService
  ) {
    iconSet.icons = { ...freeSet };
  }
}
