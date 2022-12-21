import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class CodeMirrorService {
  codeMirrorHTMLOptions: any
  codeMirrorTSOptions: any

  constructor() {
    this.codeMirrorHTMLOptions = {
      mode: 'text/html',
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      lineWrapping: false,
      foldGutter: true,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', "CodeMirror-lint-markers"],
      autoCloseBrackets: true,
      matchBrackets: true,
      lint: true,
      readOnly: true,
      autoRefresh:true,
      autoFocus: true
    };
    this.codeMirrorTSOptions = {
      mode: 'application/typescript',
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      lineWrapping: false,
      foldGutter: true,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', "CodeMirror-lint-markers"],
      autoCloseBrackets: true,
      matchBrackets: true,
      lint: true,
      readOnly: true,
      autoRefresh:true,
      autoFocus: true
    };
  }
}
//text/html , application/typescript
