import { Component, VERSION } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface InvoiceElement {
  description: string;
  debit: string;
  credit: string;
  balance: string;
  invoice: string; 
  date: string;
}

const ELEMENT_DATA1: InvoiceElement[] = [
  {description: 'May 2020 Invoice', debit: '$20.00', credit: '$0.00', balance: '$20.00', invoice: '62DBD37D-0003', date: 'May 12, 8:00 PM'},
  {description: 'April 2020 Invoice', debit: '$20.00', credit: '$0.00', balance: '$20.00', invoice: '62DBD37D-0002', date: 'April 12, 8:00 PM'},
  {description: 'March 2020 Invoice', debit: '$20.00', credit: '$0.00', balance: '$20.00', invoice: '62DBD37D-0001', date: 'March 12, 8:00 PM'},
]

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  displayedColumns: string[] = 
    ['description', 'debit', 'credit', 'balance', 'invoice', 'date'];

  dataSource = ELEMENT_DATA1;
}
