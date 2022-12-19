import { CodeMirrorService } from './../../../../core/service/codemirror.service';
import { Component, VERSION, OnInit } from '@angular/core';
import {
  TemplateCode,
  ComponentCode,
} from 'src/app/core/helpers/enums/code-miror.enum';
@Component({
  selector: 'app-coreui-icons',
  templateUrl: './coreui-icons.component.html',
  styleUrls: ['./coreui-icons.component.css'],
})
export class CoreuiIconsComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  codeMirrorOptions: any = this.codemirroService.codeMirrorOptions;
  template: string = ``;
  component: string = ``;

  constructor(private codemirroService: CodeMirrorService) {}
  ngOnInit() {
    this.template = TemplateCode.COREUI_ICON;
    this.component = ComponentCode.COREUI_ICON;
  }
  setEditorTemplate(event: any) {
    console.log(this.template);
  }
  setEditorComponent(event: any) {
    console.log(this.component);
  }
}
