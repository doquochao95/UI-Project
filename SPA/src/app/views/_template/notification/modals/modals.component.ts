import { ModalMessage } from './../../../../core/helpers/enums/modal.enum';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CodeMirrorService } from 'src/app/core/service/codemirror.service';
import { codemirror } from 'src/app/core/model/code-mirror.model';
import {
  ComponentCode,
  TemplateCode,
} from 'src/app/core/helpers/enums/code-miror.enum';
type alertcodes = {
  [name: string]: codemirror;
};
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css'],
  styles: [
    `.example-rows .row > .col
    ,.example-rows .row > [class^="col-"]
    { padding-top: .75rem;
      padding-bottom: .75rem;
      background-color: rgba(86, 61, 124, 0.15);
      border: 1px solid rgba(86, 61, 124, 0.2); }`,
  ],
})
export class ModalsComponent implements OnInit {
  @ViewChild('myModal') public myModal!: ModalDirective;
  @ViewChild('largeModal') public largeModal!: ModalDirective;
  @ViewChild('smallModal') public smallModal!: ModalDirective;
  @ViewChild('primaryModal') public primaryModal!: ModalDirective;
  @ViewChild('successModal') public successModal!: ModalDirective;
  @ViewChild('warningModal') public warningModal!: ModalDirective;
  @ViewChild('dangerModal') public dangerModal!: ModalDirective;
  @ViewChild('infoModal') public infoModal!: ModalDirective;
  @ViewChild('longcontentModal') public longcontentModal!: ModalDirective;
  @ViewChild('verticalcenterModal') public verticalcenterModal!: ModalDirective;
  @ViewChild('tooltippopoverModal') public tooltippopoverModal!: ModalDirective;
  @ViewChild('gridModal') public gridModal!: ModalDirective;

  inforMessage: string = ModalMessage.MESSAGE_INFO_MODAL;
  constructor(private codemirroService: CodeMirrorService) {}
  codeMirrorHTMLOptions: any = this.codemirroService.codeMirrorHTMLOptions;
  codeMirrorTSOptions: any = this.codemirroService.codeMirrorTSOptions;
  codemirrors: alertcodes = {};

  ngOnInit(): void {
    let code: codemirror = {
      tabIndex: 0,
      template: TemplateCode.MODAL_BASE,
      component: ComponentCode.MODAL_BASE,
    };
    this.codemirrors['Modal-base'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.MODAL_COLOR,
      component: ComponentCode.MODAL_COLOR,
    };
    this.codemirrors['Modal-color'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.MODAL_ADVANCE_INFOR,
      component: ComponentCode.MODAL_ADVANCE_INFOR,
    };
    this.codemirrors['Modal-info'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.MODAL_ADVANCE_VERTICAL,
      component: ComponentCode.MODAL_ADVANCE_VERTICAL,
    };
    this.codemirrors['Modal-vertical'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.MODAL_ADVANCE_TOOLTIP,
      component: ComponentCode.MODAL_ADVANCE_TOOLTIP,
    };
    this.codemirrors['Modal-tooltip'] = code;
    code = {
      tabIndex: 0,
      template: TemplateCode.MODAL_ADVANCE_GRID,
      component: ComponentCode.MODAL_ADVANCE_GRID,
    };
    this.codemirrors['Modal-grid'] = code;
  }
}
