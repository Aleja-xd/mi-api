"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const account_entity_1 = require("./entities/account.entity");
const loan_entity_1 = require("./entities/loan.entity");
let BankService = class BankService {
    accountRepo;
    loanRepo;
    constructor(accountRepo, loanRepo) {
        this.accountRepo = accountRepo;
        this.loanRepo = loanRepo;
    }
    createAccount(dto) {
        const account = this.accountRepo.create({
            ...dto,
            balance: dto.balance ?? 0,
        });
        return this.accountRepo.save(account);
    }
    findAccounts() {
        return this.accountRepo.find({
            relations: ['loans'],
        });
    }
    async createLoan(accountId, dto) {
        const account = await this.accountRepo.findOneBy({ id: accountId });
        if (!account)
            throw new common_1.NotFoundException(`Cuenta ${accountId} no existe`);
        const r = dto.rate / 12;
        const n = dto.termMonths;
        const monthlyPayment = (dto.amount * r * (1 + r) ** n) / ((1 + r) ** n - 1);
        const loan = this.loanRepo.create({
            ...dto,
            monthlyPayment: +monthlyPayment.toFixed(2),
            account,
        });
        return this.loanRepo.save(loan);
    }
    async findLoans(accountId) {
        const account = await this.accountRepo.findOneBy({ id: accountId });
        if (!account)
            throw new common_1.NotFoundException(`Cuenta ${accountId} no existe`);
        return this.loanRepo.findBy({ account: { id: accountId } });
    }
};
exports.BankService = BankService;
exports.BankService = BankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(account_entity_1.Account)),
    __param(1, (0, typeorm_1.InjectRepository)(loan_entity_1.Loan)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BankService);
//# sourceMappingURL=bank.service.js.map