import { codemirror } from './../../../../core/model/code-mirror.model';
import { Component, OnInit } from '@angular/core';
import {
  ComponentCode,
  TemplateCode,
} from 'src/app/core/helpers/enums/code-miror.enum';
import { CodeMirrorService } from 'src/app/core/service/codemirror.service';
type alertcodes = {
  [name: string]: codemirror;
};
@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css'],
})
export class BadgesComponent implements OnInit {
  constructor(private codemirroService: CodeMirrorService) {}
  codeMirrorHTMLOptions: any = this.codemirroService.codeMirrorHTMLOptions;
  codeMirrorTSOptions: any = this.codemirroService.codeMirrorTSOptions;
  codemirrors: alertcodes = {};

  ngOnInit(): void {
    let code: codemirror = {
      tabIndex: 0,
      template: TemplateCode.BADGES_HEADER,
      component: ComponentCode.BADGES_HEADER,
    };
    this.codemirrors['Badges-header'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.BADGES_BUTTON,
      component: ComponentCode.BADGES_BUTTON,
    };
    this.codemirrors['Badges-button'] = code;

    code = {
      tabIndex: 0,
      template: TemplateCode.BADGES_CONTEXT,
      component: ComponentCode.BADGES_CONTEXT,
    };
    this.codemirrors['Badges-context'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.BADGES_PILL,
      component: ComponentCode.BADGES_PILL,
    };
    this.codemirrors['Badges-pill'] = code;code = {
      tabIndex: 0,
      template: TemplateCode.BADGES_LINK,
      component: ComponentCode.BADGES_LINK,
    };
    this.codemirrors['Badges-link'] = code;
    console.log(this.codemirrors)
  }
}
