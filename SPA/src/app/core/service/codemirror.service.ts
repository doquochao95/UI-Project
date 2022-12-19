import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class CodeMirrorService {
  codeMirrorOptions: any

  constructor() {
    this.codeMirrorOptions = {
      mode: 'text/x-mysql',
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      lineWrapping: false,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      autoCloseBrackets: true,
      matchBrackets: true,
      lint: true,
    };
  }
}
