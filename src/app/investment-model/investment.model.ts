export class AnInvestment{
    constructor(
        public initialInv:number, 
        public annualInv:number,  
        public expectedReturn:number, 
        public duration:number,   
    ){}
}
export class InvestmentDetail{
    year:number = 0;
    interest:number = 0;
    valueEndOfYear:number = 0;
    annualInvestment:number = 0;
    totalInterest:number = 0;
    totalAmountInvested:number = 0;
    [key: string]: number
}