import { Loan } from './loan.entity';
export declare class Account {
    id: number;
    owner: string;
    balance: number;
    loans: Loan[];
    createdAt: Date;
}
