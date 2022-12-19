import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.css'],
})
export class PopoversComponent implements OnInit {
  title: string = 'Welcome word';
  content: string = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
  html: string | null = `<span class="btn btn-warning">Never trust not sanitized <code>HTML</code>!!!</span>`;
  constructor(sanitizer: DomSanitizer) {
    this.html = sanitizer.sanitize(SecurityContext.HTML, this.html);
  }

  ngOnInit(): void {}
}
