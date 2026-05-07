import { Account } from './account.entity';
export declare class Loan {
    id: number;
    amount: number;
    rate: number;
    termMonths: number;
    monthlyPayment: number;
    account: Account;
    createdAt: Date;
}
