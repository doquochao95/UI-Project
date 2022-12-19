import {
  Component,
  OnInit,
  SecurityContext,
  VERSION,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';
import {
  ComponentCode,
  TemplateCode,
} from 'src/app/core/helpers/enums/code-miror.enum';
import { CodeMirrorService } from 'src/app/core/service/codemirror.service';

// such override allows to keep some initial values

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }],
})
export class AlertsComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  codeMirrorOptions: any = this.codemirroService.codeMirrorOptions;

  templateBase: string = ``;
  componentBase: string = ``;
  template: string = ``;
  component: string = ``;
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
    this.templateBase = TemplateCode.ALERT_BASE;
    this.componentBase = ComponentCode.ALERT_BASE;
  }
  setEditorTemplate(event: any) {
    console.log(this.templateBase);
  }
  setEditorComponent(event: any) {
    console.log(this.componentBase);
  }
}
