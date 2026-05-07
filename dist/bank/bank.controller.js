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
exports.BankController = void 0;
const common_1 = require("@nestjs/common");
const api_key_guard_1 = require("../auth/api-key.guard");
const bank_service_1 = require("./bank.service");
const create_account_dto_1 = require("./dto/create-account.dto");
const create_loan_dto_1 = require("./dto/create-loan.dto");
let BankController = class BankController {
    bank;
    constructor(bank) {
        this.bank = bank;
    }
    createAccount(dto) {
        return this.bank.createAccount(dto);
    }
    findAccounts() {
        return this.bank.findAccounts();
    }
    createLoan(id, dto) {
        return this.bank.createLoan(id, dto);
    }
    findLoans(id) {
        return this.bank.findLoans(id);
    }
};
exports.BankController = BankController;
__decorate([
    (0, common_1.Post)('accounts'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountDto]),
    __metadata("design:returntype", void 0)
], BankController.prototype, "createAccount", null);
__decorate([
    (0, common_1.Get)('accounts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BankController.prototype, "findAccounts", null);
__decorate([
    (0, common_1.Post)('accounts/:id/loans'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_loan_dto_1.CreateLoanDto]),
    __metadata("design:returntype", void 0)
], BankController.prototype, "createLoan", null);
__decorate([
    (0, common_1.Get)('accounts/:id/loans'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BankController.prototype, "findLoans", null);
exports.BankController = BankController = __decorate([
    (0, common_1.Controller)('bank'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __metadata("design:paramtypes", [bank_service_1.BankService])
], BankController);
//# sourceMappingURL=bank.controller.js.map