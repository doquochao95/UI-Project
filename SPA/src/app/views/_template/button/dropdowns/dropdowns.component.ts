import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css'],
})
export class DropdownsComponent implements OnInit {
  public status: { isOpen: boolean } = { isOpen: false };
  public disabled: boolean = false;
  public isDropup: boolean = true;
  public autoClose: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!',
  ];

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isOpen = !this.status.isOpen;
  }

  change(value: boolean): void {
    this.status.isOpen = value;
  }
}
