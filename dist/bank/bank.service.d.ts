import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { Loan } from './entities/loan.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateLoanDto } from './dto/create-loan.dto';
export declare class BankService {
    private accountRepo;
    private loanRepo;
    constructor(accountRepo: Repository<Account>, loanRepo: Repository<Loan>);
    createAccount(dto: CreateAccountDto): Promise<Account>;
    findAccounts(): Promise<Account[]>;
    createLoan(accountId: number, dto: CreateLoanDto): Promise<Loan>;
    findLoans(accountId: number): Promise<Loan[]>;
}
