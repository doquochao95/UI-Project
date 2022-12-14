import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document: any) {}

  public themeColors(): void {
    Array.from(this._document.querySelectorAll('.theme-color')).forEach(
      (el: any) => {
        const background = getStyle('background-color', el);
        const table = this._document.createElement('table');
        table.innerHTML = `
        <table class="w-100">
          <tr>
            <td class="text-muted">HEX:</td>
            <td class="font-weight-bold">${rgbToHex(background)}</td>
          </tr>
          <tr>
            <td class="text-muted">RGB:</td>
            <td class="font-weight-bold">${background}</td>
          </tr>
        </table>
      `;
        el.parentNode!.appendChild(table);
      }
    );
  }

  ngOnInit(): void {
    this.themeColors();
  }

}
