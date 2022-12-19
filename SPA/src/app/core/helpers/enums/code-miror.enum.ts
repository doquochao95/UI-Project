import { AlertConfig } from 'ngx-bootstrap/alert';
export enum TemplateCode {
  COREUI_ICON = `<div class="col-6 col-sm-4 col-md-3 col-xl-2">
    <i class="cil-account-logout icons font-2xl d-block mt-4"></i>
    <div>account-logout</div>
</div>`,
  FLAGS = `<div class="col text-center">
  <i class="flag-icon flag-icon-vn h1 mt-2 mb-0" title="vn" id="vn"></i>
  <div class="mb-2">flag-icon-vn</div>
</div>`,
  FONTS = `<div class="col text-center">
  <i class="fa fa-address-book fa-lg mt-3"></i><br/>
  <div class="mb-2">address-book</div>
</div>`,
  SINGLE_LINE_ICON = `<div class="col text-center">
  <i class="icon-user icons font-2xl d-block mt-4"></i>
  <div class="mb-2">icon-user</div>
</div>`,
ALERT_BASE = `<alert type="success">
<strong>Well done!</strong> You successfully read this important alert message.
</alert>
<alert type="info">
<strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</alert>
<alert type="warning">
<strong>Warning!</strong> Better check yourself, you're not looking too good.
</alert>
<alert type="danger">
<strong>Oh snap!</strong> Change a few things up and try submitting again.
</alert>`
}

export enum ComponentCode {
    COREUI_ICON = ``,
    FLAGS = ``,
    FONTS=``,
    SINGLE_LINE_ICON =``,
    ALERT_BASE = `import { Component } from '@angular/core';

    @Component({
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: 'demo-alert-basic',
      templateUrl: './basic.html'
    })
    export class DemoAlertBasicComponent {}`
}
