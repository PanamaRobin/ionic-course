import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  checkItems = [
    {
      name: 'Item 1',
      color: 'primary',
      selected: true,
    },
    {
      name: 'Item 2',
      color: 'secondary',
      selected: false,
    },
    {
      name: 'Item 3',
      color: 'tertiary',
      selected: true,
    },
    {
      name: 'Item 4',
      color: 'danger',
      selected: false,
    },
    {
      name: 'Item 5',
      color: 'success',
      selected: true,
    },
  ];

  constructor() {}

  ngOnInit() {}

  verData() {
    console.log(this.checkItems);
  }
}
