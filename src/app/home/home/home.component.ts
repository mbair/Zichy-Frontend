import { Component, OnInit } from '@angular/core';
import {
  TableHeaderItem,
  TableItem,
  TableModel,
  TableRowSize,
} from 'carbon-components-angular';

@Component({
	selector: 'app-starter-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 40, city: 'Chicago' },
  ];

  ngOnInit(): void {

    this.model.header = [
      new TableHeaderItem({ data: 'Szállás típusa' }),
      new TableHeaderItem({ data: 'Teljes összeg' }),
    ];
    this.model.data = [
      [new TableItem({ data: 'Apartman' }), new TableItem({ data: '37 600 Ft' })],
      [new TableItem({ data: 'Maranatha 1 ágyas' }), new TableItem({ data: '47 100 Ft' })],
      [new TableItem({ data: 'Maranatha 2 ágyas' }), new TableItem({ data: '37 600 Ft' })],
      [new TableItem({ data: 'Maranatha 4 ágyas' }), new TableItem({ data: '34 100 Ft' })],
      [new TableItem({ data: 'Kastély' }), new TableItem({ data: '29 600 Ft' })],
      [new TableItem({ data: 'Kemping' }), new TableItem({ data: '24 800 Ft' })],
      [new TableItem({ data: 'Szállás nélkül' }), new TableItem({ data: '24 800 Ft' })],
      [new TableItem({ data: 'Gyermek' }), new TableItem({ data: '21 800 Ft' })],
      [new TableItem({ data: 'Gyermek kemping' }), new TableItem({ data: '17 300 Ft' })],
      [new TableItem({ data: 'Gyermek szállás nélkül' }), new TableItem({ data: '17 300 Ft' })],
    ];
  }
  title = 'tableTest';
  model = new TableModel();
  size: TableRowSize = 'md';
}
