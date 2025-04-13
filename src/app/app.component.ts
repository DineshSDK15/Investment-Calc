import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentCalculatorComponent } from './investment-calculator/investment-calculator.component';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './table/table.component';
import { AnInvestment, InvestmentDetail } from './investment-model/investment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentCalculatorComponent,TableComponent]
})
export class AppComponent {
  result!:InvestmentDetail[];
   calculateInvestmentResults(investment:AnInvestment) {
    const {initialInv,annualInv,expectedReturn,duration} = investment;
    this.result = [];
    let investmentValue = initialInv;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInv;
      const totalInterest =
        investmentValue - annualInv * year - initialInv;
      this.result.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInv,
        totalInterest: totalInterest,
        totalAmountInvested: initialInv + annualInv * year,
      });
    }
    console.log(this.result)
  }
}
