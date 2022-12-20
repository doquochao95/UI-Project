import { Component, OnInit, VERSION } from '@angular/core';
import { ComponentCode, TemplateCode } from 'src/app/core/helpers/enums/code-miror.enum';
import { CodeMirrorService } from 'src/app/core/service/codemirror.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  codeMirrorHTMLOptions: any = this.codemirroService.codeMirrorHTMLOptions;
  codeMirrorTSOptions: any = this.codemirroService.codeMirrorTSOptions;
  template: string = ``;
  component: string = ``;
  selectedTabIndex : number = 0;

  constructor(private codemirroService: CodeMirrorService) {}
  ngOnInit() {
    this.template = TemplateCode.FLAGS;
    this.component = ComponentCode.FLAGS;
  }
  setEditorTemplate(event: any) {
    console.log(this.template);
  }
  setEditorComponent(event: any) {
    console.log(this.component);
  }
}
