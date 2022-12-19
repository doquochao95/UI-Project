import { Component, OnInit, VERSION } from '@angular/core';
import { ComponentCode, TemplateCode } from 'src/app/core/helpers/enums/code-miror.enum';
import { CodeMirrorService } from 'src/app/core/service/codemirror.service';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.css'],
})
export class FontsComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  codeMirrorOptions: any = this.codemirroService.codeMirrorOptions;
  template: string = ``;
  component: string = ``;

  constructor(private codemirroService: CodeMirrorService) {}
  ngOnInit() {
    this.template = TemplateCode.FONTS;
    this.component = ComponentCode.FONTS;
  }
  setEditorTemplate(event: any) {
    console.log(this.template);
  }
  setEditorComponent(event: any) {
    console.log(this.component);
  }
}
