import { Component, inject, OnInit } from '@angular/core';
import { AnInvestment, InvestmentDetail } from '../investment-model/investment.model';
import { CommonModule } from '@angular/common';
import { InvestmentCalculateService } from '../investment-calculate.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  investmentService = inject(InvestmentCalculateService);
  ngOnInit() {
    this.headers = this.setHeaders(Object.keys(new InvestmentDetail()));
  }
  data = this.investmentService.result.asReadonly();
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
