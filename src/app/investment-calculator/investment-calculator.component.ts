import { Component, output } from '@angular/core';
import { AnInvestment } from '../investment-model/investment.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-investment-calculator',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.css'
})
export class InvestmentCalculatorComponent {
  investment: AnInvestment = new AnInvestment(0, 0, 0, 0);
  calculate = output<AnInvestment>();
  onSubmit(){
    console.log('Submitting form...');
    this.calculate.emit(this.investment);
  }
}
