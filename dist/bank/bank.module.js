"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const account_entity_1 = require("./entities/account.entity");
const loan_entity_1 = require("./entities/loan.entity");
const bank_service_1 = require("./bank.service");
const bank_controller_1 = require("./bank.controller");
const auth_module_1 = require("../auth/auth.module");
let BankModule = class BankModule {
};
exports.BankModule = BankModule;
exports.BankModule = BankModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([account_entity_1.Account, loan_entity_1.Loan]),
            auth_module_1.AuthModule,
        ],
        providers: [bank_service_1.BankService],
        controllers: [bank_controller_1.BankController],
    })
], BankModule);
//# sourceMappingURL=bank.module.js.map