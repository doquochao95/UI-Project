import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css'],
})
export class TooltipsComponent implements OnInit {
  content: string = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
  html: string | null = `<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;

  constructor(sanitizer: DomSanitizer) {
    this.html = sanitizer.sanitize(SecurityContext.HTML, this.html);
  }


  ngOnInit(): void {}
}
