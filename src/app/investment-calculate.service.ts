import { Injectable, signal } from '@angular/core';
import { InvestmentDetail, AnInvestment } from './investment-model/investment.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCalculateService {

  constructor() { }
  result = signal<InvestmentDetail[] | undefined>(undefined);
  calculateInvestmentResults(investment:AnInvestment) {
   const {initialInv,annualInv,expectedReturn,duration} = investment;
   this.result.set([]);
   let investmentValue = initialInv;
   let annualData = []
   for (let i = 0; i < duration; i++) {
     const year = i + 1;
     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
     investmentValue += interestEarnedInYear + annualInv;
     const totalInterest =
       investmentValue - annualInv * year - initialInv;
     annualData.push({
       year: year,
       interest: interestEarnedInYear,
       valueEndOfYear: investmentValue,
       annualInvestment: annualInv,
       totalInterest: totalInterest,
       totalAmountInvested: initialInv + annualInv * year,
     });
   }
   this.result.set(annualData)
   console.log(this.result)
 }

}
