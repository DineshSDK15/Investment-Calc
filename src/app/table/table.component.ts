import { Component, computed, input, OnInit, SimpleChanges } from '@angular/core';
import { InvestmentDetail } from '../investment-model/investment.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  ngOnInit() {
    this.headers = this.setHeaders(Object.keys(new InvestmentDetail()));
  }
  data = input<InvestmentDetail[]>();
  headers !:{field:string, name:string}[];

setHeaders(headers : string[]){
  console.log(headers)
  let fixedHeader:{field:string, name:string}[] = [];
  headers.forEach(header => {
    const name = header.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase());
    fixedHeader.push({field:header,name:name})
  })
  return fixedHeader;
}
}
