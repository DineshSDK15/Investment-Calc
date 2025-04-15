import { Component, output, inject } from '@angular/core';
import { AnInvestment } from '../investment-model/investment.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InvestmentCalculateService } from '../investment-calculate.service';

@Component({
  selector: 'app-investment-calculator',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.css'
})
export class InvestmentCalculatorComponent {
  private investmentService = inject(InvestmentCalculateService)
  investment: AnInvestment = new AnInvestment(0, 0, 0, 0);
  onSubmit(){
    console.log('Submitting form...');
    this.investmentService.calculateInvestmentResults(this.investment);
  }
  resetValues(){
    this.investment.annualInv = 0;
    this.investment.duration = 0;
    this.investment.expectedReturn = 0;
    this.investment.initialInv = 0;

  }
}
