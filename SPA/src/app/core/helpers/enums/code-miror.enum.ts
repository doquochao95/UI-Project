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
  <strong>Well done!</strong> "You successfully read this important
alert message."
</alert>
<alert type="info">
  <strong>Heads up!</strong> "This alert needs your attention, but it's
not super important."
</alert>
<alert type="warning">
  <strong>Warning!</strong>" Better check yourself, you're not looking
too good."
</alert>
<alert type="danger">
  <strong>Oh snap!</strong> "Change a few things up and try submitting
again."
</alert>`,
  ALERT_LINK_COLOR = `<alert type="success">
  <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
</alert>
<alert type="info">
  <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
</alert>
<alert type="warning">
  <strong>Warning!</strong> Better check yourself, you're <a href="#" class="alert-link">not looking too good</a>.
</alert>
<alert type="danger">
  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
</alert>`,
  ALERT_CONTENT = `<alert type="success">
<h4 class="alert-heading">Well done!</h4>
<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</alert>`,
  ALERT_DISMISSING = `<div *ngFor="let alert of alerts">
  <alert [type]="alert.type" [dismissible]="dismissible" (onClosed)="onClosed(alert)">{{ alert.msg }}</alert>
</div>
<button type="button" class="btn btn-primary" (click)="dismissible = !dismissible">Toggle dismissible</button>
<button type="button" class="btn btn-primary" (click)="reset()">Reset</button>`,
  ALERT_DYNAMIC_HTML = `<div *ngFor="let alert of alerts">
  <alert [type]="alert.type"><span [innerHtml]="alert.msg"></span></alert>
</div>`,
  ALERT_DYNAMIC_CONTENT = `<alert type="success">{{messages[index]}}</alert>

  <div *ngIf="index !== messages.length -1; else elseBlock">
    <button class="btn btn-primary" (click)="changeText()">Change text</button>
  </div>
  <ng-template #elseBlock>
    <button class="btn btn-primary" (click)="index = 0">Reset</button>
  </ng-template>`,
  ALERT_DISMISS_TIMEOUT = `<p>If you missed alert under me, just press <code>Add more</code> button</p>
  <div *ngFor="let alert of alerts">
    <alert [type]="alert.type" [dismissOnTimeout]="alert.timeout" (onClosed)="onClosed(alert)">{{ alert.msg }}</alert>
  </div>
  <button type="button" class="btn btn-primary" (click)="add()">Add more</button>`,
  ALERT_GLOBAL_STYLING = `<style>
  .alert-md-color {
    background-color: #7B1FA2;
    border-color: #4A148C;
    color: #fff;
  }
</style>
<alert type="md-color">
  <strong>Well done!</strong> You successfully read this important alert message.
</alert>`,
  ALERT_COMPONENT_STYLING = `<alert type="md-local">
  <strong>Well done!</strong> You successfully read this important alert message.
</alert>`,
  ALERT_CONFIGURING_DEFAULT = `<alert>
  <strong>Well done!</strong> You successfully read this important alert message.
</alert>
<alert type="info">
  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</alert>`,
  BADGES_HEADER = `<h1>Example heading
  <span class="badge badge-secondary">New</span>
</h1>
<h2>Example heading
  <span class="badge badge-secondary">New</span>
</h2>
<h3>Example heading
  <span class="badge badge-secondary">New</span>
</h3>
<h4>Example heading
  <span class="badge badge-secondary">New</span>
</h4>
<h5>Example heading
  <span class="badge badge-secondary">New</span>
</h5>
<h6>Example heading
  <span class="badge badge-secondary">New</span>
</h6>`,
  BADGES_BUTTON = `<button type="link" class="btn btn-primary">Notifications
  <span class="badge badge-light badge-pill" style="position: static">9
  </span>
</button>`,
  BADGES_CONTEXT = `<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>`,
  BADGES_PILL = `<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-secondary">Secondary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-pill badge-danger">Danger</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-pill badge-info">Info</span>
<span class="badge badge-pill badge-light">Light</span>
<span class="badge badge-pill badge-dark">Dark</span>`,
  BADGES_LINK = `<a href="#" class="badge badge-primary">Primary</a>
<a href="#" class="badge badge-secondary">Secondary</a>
<a href="#" class="badge badge-success">Success</a>
<a href="#" class="badge badge-danger">Danger</a>
<a href="#" class="badge badge-warning">Warning</a>
<a href="#" class="badge badge-info">Info</a>
<a href="#" class="badge badge-light">Light</a>
<a href="#" class="badge badge-dark">Dark</a>`,
  MODAL_BASE = `<div
  bsModal
  #largeModal="bs-modal"
  class="modal fade"
  tabindex="-1"
  role="dialog"
  aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button
          type="button"
          class="close"
          (click)="largeModal.hide()"
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          (click)="largeModal.hide()">Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`,
  MODAL_COLOR = `<div
  bsModal
  #primaryModal="bs-modal"
  class="modal fade"
  tabindex="-1"
  role="dialog"
  aria-labelledby="myModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-primary" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button
          type="button"
          class="close"
          (click)="primaryModal.hide()"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          (click)="primaryModal.hide()"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary">Save changes
        </button>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>`,
  MODAL_ADVANCE_INFOR = `<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
      <button
        type="button"
        (click)="longcontentModal.hide()"
        class="close"
        data-dismiss="modal"
        aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{ inforMessage }}
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        data-dismiss="modal"
        (click)="longcontentModal.hide()">Close
      </button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>`,
  MODAL_ADVANCE_VERTICAL = `<div
  bsModal
  #verticalcenterModal="bs-modal"
  class="modal fade"
  id="exampleModalCenter"
  tabindex="-1"
  role="dialog"
  aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button
          type="button"
          (click)="verticalcenterModal.hide()"
          class="close"
          data-dismiss="modal"
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          (click)="verticalcenterModal.hide()">Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`,
  MODAL_ADVANCE_TOOLTIP = `<div
  bsModal
  #tooltippopoverModal="bs-modal"
  class="modal fade"
  id="tooltippopoverModal"
  tabindex="-1"
  role="dialog"
  aria-labelledby="tooltippopoverModalTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button
          type="button"
          (click)="tooltippopoverModal.hide()"
          class="close"
          data-dismiss="modal"
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5>Popover in a modal</h5>
        <p>
          This
          <a
            href="#"
            role="button"
            class="btn btn-secondary popover-test"
            title="Popover title"
            data-content="Popover body content is set in this attribute."
            >button
            </a>
          triggers a popover on click.
        </p>
        <hr />
        <h5>Tooltips in a modal
        </h5>
        <p>
          <a href="#" class="tooltip-test" title="Tooltip">This link</a> and
          <a href="#" class="tooltip-test" title="Tooltip">that link</a> have
          tooltips on hover.
        </p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          (click)="tooltippopoverModal.hide()">Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`,
  MODAL_ADVANCE_GRID = `<div
  bsModal
  #gridModal="bs-modal"
  class="modal fade"
  id="tooltippopoverModal"
  tabindex="-1"
  role="dialog"
  aria-labelledby="tooltippopoverModalTitle"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button
          type="button"
          (click)="gridModal.hide()"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div  class="modal-body">
        <div class="container-fluid example-rows">
          <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
          </div>
          <div class="row">
            <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
            <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
          </div>
          <div class="row">
            <div class="col-sm-9">
              Level 1: .col-sm-9
              <div class="row">
                <div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
                <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          (click)="gridModal.hide()"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`,

}

export enum ComponentCode {
  COREUI_ICON = ``,
  FLAGS = ``,
  FONTS = ``,
  SINGLE_LINE_ICON = ``,
  ALERT_BASE = `import { Component } from '@angular/core';

    @Component({
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: 'demo-alert-basic',
      templateUrl: './basic.html'
    })
    export class DemoAlertBasicComponent {}`,
  ALERT_LINK_COLOR = `import { Component } from '@angular/core';

    @Component({
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: 'demo-alert-link',
      templateUrl: './link.html'
    })
    export class DemoAlertLinkComponent {}`,
  ALERT_CONTENT = `import { Component } from '@angular/core';

    @Component({
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: 'demo-alert-content',
      templateUrl: './content.html'
    })
    export class DemoAlertContentComponent {}`,
  ALERT_DISMISSING = `import { Component } from '@angular/core';

  @Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'demo-alert-dismiss',
    templateUrl: './dismiss.html'
  })
  export class DemoAlertDismissComponent {
    dismissible = true;
    defaultAlerts: any[] = [
      {
        type: 'success',
        msg: 'You successfully read this important alert message.'
      },
      {
        type: 'info',
        msg: 'This alert needs your attention, but it's not super important.'
      },
      {
        type: 'danger',
        msg: 'Better check yourself, you're not looking too good.'
      }
    ];
    alerts = this.defaultAlerts;

    reset(): void {
      this.alerts = this.defaultAlerts;
    }

    onClosed(dismissedAlert: any): void {
      this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }
  }`,
  ALERT_DYNAMIC_HTML = `import { Component, SecurityContext } from '@angular/core';
  import { DomSanitizer } from '@angular/platform-browser';

  @Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'demo-alert-dynamic-html',
    templateUrl: './dynamic-html.html'
  })
  export class DemoAlertDynamicHtmlComponent {
    alerts: any = [
      {
        type: 'success',
        msg: '<strong>Well done!</strong> You successfully read this important alert message.'
      },
      {
        type: 'info',
        msg: '<strong>Heads up!</strong> This alert needs your attention, but it's not super important.'
      },
      {
        type: 'danger',
        msg: '<strong>Warning!</strong> Better check yourself, you're not looking too good.'
      }
    ];

    constructor(sanitizer: DomSanitizer) {
      this.alerts = this.alerts.map((alert: any) => ({
        type: alert.type,
        msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
      }));
    }
  }`,
  ALERT_DYNAMIC_CONTENT = `import { Component } from '@angular/core';

  @Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'demo-alert-content-html',
    templateUrl: './dynamic-content.html'
  })
  export class DemoAlertDynamicContentComponent {
    index = 0;
    messages = [
      'You successfully read this important alert message.',
      'Now this text is different from what it was before. Go ahead and click the button one more time',
      'Well done! Click reset button and you\'ll see the first message'
    ];

    changeText() {
      if (this.messages.length - 1 !== this.index) {
        this.index++;
      }
    }
  }`,
  ALERT_DISMISS_TIMEOUT = `import { Component } from '@angular/core';
  import { AlertComponent } from 'ngx-bootstrap/alert';

  @Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'demo-alert-timeout',
    templateUrl: './dismiss-on-timeout.html'
  })
  export class DemoAlertTimeoutComponent {
    alerts: any[] = [{
      type: 'success',
      msg: 'Well done! You successfully read this important alert message. (added: {new Date().toLocaleTimeString()})',
      timeout: 5000
    }];

    add(): void {
      this.alerts.push({
        type: 'info',
        msg: 'This alert will be closed in 5 seconds (added: {new Date().toLocaleTimeString()})',
        timeout: 5000
      });
    }

    onClosed(dismissedAlert: AlertComponent): void {
      this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }
  }`,
  ALERT_GLOBAL_STYLING = `import { Component, ViewEncapsulation } from '@angular/core';

  @Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'demo-alert-styling-global',
    templateUrl: './styling-global.html',
    encapsulation: ViewEncapsulation.None
  })
  export class DemoAlertStylingGlobalComponent {}`,
  ALERT_COMPONENT_STYLING = `import { Component } from '@angular/core';

  @Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'demo-alert-styling-local',
    templateUrl: './styling-local.html',
    styles: [
      '
    :host .alert-md-local {
      background-color: #009688;
      border-color: #00695C;
      color: #fff;
    }
    '
    ]
  })
  export class DemoAlertStylingLocalComponent {}`,
  ALERT_CONFIGURING_DEFAULT = `import { Component } from '@angular/core';
  import { AlertConfig } from 'ngx-bootstrap/alert';

  // such override allows to keep some initial values

  export function getAlertConfig(): AlertConfig {
    return Object.assign(new AlertConfig(), { type: 'success' });
  }

  @Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'demo-alert-config',
    templateUrl: './config.html',
    providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
  })
  export class DemoAlertConfigComponent {}`,
  BADGES_HEADER = ``,
  BADGES_BUTTON = ``,
  BADGES_CONTEXT = ``,
  BADGES_PILL = ``,
  BADGES_LINK = ``,
  MODAL_BASE = `  import { ModalMessage } from './../../../../core/helpers/enums/modal.enum';
  import { Component, ViewChild, OnInit } from '@angular/core';
  import { ModalDirective } from 'ngx-bootstrap/modal';

  @Component({
    selector: 'app-modals',
    templateUrl: './modals.component.html',
    styleUrls: ['./modals.component.css'],
  })
  export class ModalsComponent implements OnInit {
    @ViewChild('largeModal') public largeModal!: ModalDirective;
    inforMessage: string = ModalMessage.MESSAGE_INFO_MODAL;

    constructor() {}

    ngOnInit(): void {}
  }
  `,
  MODAL_COLOR = `  import { ModalMessage } from './../../../../core/helpers/enums/modal.enum';
  import { Component, ViewChild, OnInit } from '@angular/core';
  import { ModalDirective } from 'ngx-bootstrap/modal';

  @Component({
    selector: 'app-modals',
    templateUrl: './modals.component.html',
    styleUrls: ['./modals.component.css'],
  })
  export class ModalsComponent implements OnInit {
    @ViewChild('primaryModal') public primaryModal!: ModalDirective;
    inforMessage: string = ModalMessage.MESSAGE_INFO_MODAL;

    constructor() {}

    ngOnInit(): void {}
  }
  `,
  MODAL_ADVANCE_INFOR = `  import { ModalMessage } from './../../../../core/helpers/enums/modal.enum';
  import { Component, ViewChild, OnInit } from '@angular/core';
  import { ModalDirective } from 'ngx-bootstrap/modal';

  @Component({
    selector: 'app-modals',
    templateUrl: './modals.component.html',
    styleUrls: ['./modals.component.css'],
  })
  export class ModalsComponent implements OnInit {
    @ViewChild('infoModal') public infoModal!: ModalDirective;
    inforMessage: string = ModalMessage.MESSAGE_INFO_MODAL;

    constructor() {}

    ngOnInit(): void {}
  }
  `,
  MODAL_ADVANCE_VERTICAL = `  import { ModalMessage } from './../../../../core/helpers/enums/modal.enum';
  import { Component, ViewChild, OnInit } from '@angular/core';
  import { ModalDirective } from 'ngx-bootstrap/modal';

  @Component({
    selector: 'app-modals',
    templateUrl: './modals.component.html',
    styleUrls: ['./modals.component.css'],
  })
  export class ModalsComponent implements OnInit {
    @ViewChild('verticalcenterModal') public verticalcenterModal!: ModalDirective;
    inforMessage: string = ModalMessage.MESSAGE_INFO_MODAL;

    constructor() {}

    ngOnInit(): void {}
  }
  `,
  MODAL_ADVANCE_TOOLTIP = `  import { ModalMessage } from './../../../../core/helpers/enums/modal.enum';
  import { Component, ViewChild, OnInit } from '@angular/core';
  import { ModalDirective } from 'ngx-bootstrap/modal';

  @Component({
    selector: 'app-modals',
    templateUrl: './modals.component.html',
    styleUrls: ['./modals.component.css'],
  })
  export class ModalsComponent implements OnInit {
    @ViewChild('tooltippopoverModal') public tooltippopoverModal!: ModalDirective;
    inforMessage: string = ModalMessage.MESSAGE_INFO_MODAL;

    constructor() {}

    ngOnInit(): void {}
  }
  `,
  MODAL_ADVANCE_GRID = `  import { ModalMessage } from './../../../../core/helpers/enums/modal.enum';
  import { Component, ViewChild, OnInit } from '@angular/core';
  import { ModalDirective } from 'ngx-bootstrap/modal';
  @Component({
    selector: 'app-modals',
    templateUrl: './modals.component.html',
    styleUrls: ['./modals.component.css'],
    styles: [
      '.example-rows .row > .col
      ,.example-rows .row > [class^="col-"]
      { padding-top: .75rem;
        padding-bottom: .75rem;
        background-color: rgba(86, 61, 124, 0.15);
        border: 1px solid rgba(86, 61, 124, 0.2); }',
    ],
  })
  export class ModalsComponent implements OnInit {
    @ViewChild('gridModal') public gridModal!: ModalDirective;
    constructor() {}

    ngOnInit(): void {}
  }
  `,
}
