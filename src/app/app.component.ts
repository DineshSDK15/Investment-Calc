import { Component, signal } from '@angular/core';
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
 
}
