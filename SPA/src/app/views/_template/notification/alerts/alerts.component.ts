import { codemirror } from './../../../../core/model/code-mirror.model';
import {
  Component,
  OnInit,
  SecurityContext,
  Type,
  VERSION,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { type } from 'os';
import {
  ComponentCode,
  TemplateCode,
} from 'src/app/core/helpers/enums/code-miror.enum';
import { CodeMirrorService } from 'src/app/core/service/codemirror.service';

// such override allows to keep some initial values

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}
type alertcodes = {
  [name: string]: codemirror;
};
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }],
})
export class AlertsComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  codeMirrorHTMLOptions: any = this.codemirroService.codeMirrorHTMLOptions;
  codeMirrorTSOptions: any = this.codemirroService.codeMirrorTSOptions;
  templateBase: string = ``;
  componentBase: string = ``;
  template: string = ``;
  component: string = ``;
  codemirrors: alertcodes = {};
  selectedTabIndexBase: number = 0;
  selectedTabIndexLink: number = 0;

  constructor(
    private codemirroService: CodeMirrorService,
    sanitizer: DomSanitizer
  ) {
    this.alertsHtml = this.alertsHtml.map((alert: any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg),
    }));
  }
  dismissible = true;
  alerts: any = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`,
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`,
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`,
    },
  ];
  alertsHtml: any = [
    {
      type: 'success',
      msg: `<strong>Well done!</strong> You successfully read this important alert message.`,
    },
    {
      type: 'info',
      msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`,
    },
    {
      type: 'danger',
      msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`,
    },
  ];
  index = 0;
  messages = [
    'You successfully read this important alert message.',
    'Now this text is different from what it was before. Go ahead and click the button one more time',
    "Well done! Click reset button and you'll see the first message",
  ];
  alertsDismiss: any = [];
  reset(): void {
    this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
  }
  changeText() {
    if (this.messages.length - 1 !== this.index) {
      this.index++;
    }
  }
  add(): void {
    this.alertsDismiss.push({
      type: 'info',
      msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000,
    });
  }
  ngOnInit(): void {
    let code: codemirror = {
      tabIndex: 0,
      template: TemplateCode.ALERT_BASE,
      component: ComponentCode.ALERT_BASE,
    };
    this.codemirrors['Base'] = code
    code = {
      tabIndex: 0,
      template: TemplateCode.ALERT_LINK_COLOR,
      component: ComponentCode.ALERT_LINK_COLOR,
    };
    this.codemirrors['Link'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.ALERT_CONTENT,
      component: ComponentCode.ALERT_CONTENT,
    };
    this.codemirrors['Content'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.ALERT_DISMISSING,
      component: ComponentCode.ALERT_DISMISSING,
    };
    this.codemirrors['Dismissing'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.ALERT_DISMISS_TIMEOUT,
      component: ComponentCode.ALERT_DISMISS_TIMEOUT,
    };
    this.codemirrors['Timeout'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.ALERT_DYNAMIC_CONTENT,
      component: ComponentCode.ALERT_DYNAMIC_CONTENT,
    };
    this.codemirrors['Dynamic-Content'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.ALERT_DYNAMIC_HTML,
      component: ComponentCode.ALERT_DYNAMIC_HTML,
    };
    this.codemirrors['Dynamic-HTML'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.ALERT_GLOBAL_STYLING,
      component: ComponentCode.ALERT_GLOBAL_STYLING,
    };
    this.codemirrors['Global'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.ALERT_COMPONENT_STYLING,
      component: ComponentCode.ALERT_COMPONENT_STYLING,
    };
    this.codemirrors['Component'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.ALERT_CONFIGURING_DEFAULT,
      component: ComponentCode.ALERT_CONFIGURING_DEFAULT,
    };
    this.codemirrors['Default'] = code;
    console.log(this.codemirrors);
  }
  setEditorTemplate(event: any) {
    console.log(this.templateBase);
  }
  setEditorComponent(event: any) {
    console.log(this.componentBase);
  }
}
