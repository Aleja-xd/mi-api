import { BankService } from './bank.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateLoanDto } from './dto/create-loan.dto';
export declare class BankController {
    private bank;
    constructor(bank: BankService);
    createAccount(dto: CreateAccountDto): Promise<import("./entities/account.entity").Account>;
    findAccounts(): Promise<import("./entities/account.entity").Account[]>;
    createLoan(id: number, dto: CreateLoanDto): Promise<import("./entities/loan.entity").Loan>;
    findLoans(id: number): Promise<import("./entities/loan.entity").Loan[]>;
}
