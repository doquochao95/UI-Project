import { Component, OnInit, VERSION } from '@angular/core';
import { ComponentCode, TemplateCode } from 'src/app/core/helpers/enums/code-miror.enum';
import { CodeMirrorService } from 'src/app/core/service/codemirror.service';

@Component({
  selector: 'app-single-line-icons',
  templateUrl: './single-line-icons.component.html',
  styleUrls: ['./single-line-icons.component.css'],
})
export class SingleLineIconsComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  codeMirrorOptions: any = this.codemirroService.codeMirrorOptions;
  template: string = ``;
  component: string = ``;

  constructor(private codemirroService: CodeMirrorService) {}
  ngOnInit() {
    this.template = TemplateCode.SINGLE_LINE_ICON;
    this.component = ComponentCode.SINGLE_LINE_ICON;
  }
  setEditorTemplate(event: any) {
    console.log(this.template);
  }
  setEditorComponent(event: any) {
    console.log(this.component);
  }
}
