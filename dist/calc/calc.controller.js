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
exports.CalcController = void 0;
const common_1 = require("@nestjs/common");
const api_key_guard_1 = require("../auth/api-key.guard");
const cal_service_1 = require("./cal.service");
const circle_query_dto_1 = require("./dto/circle-query.dto");
const kinematics_dto_1 = require("./dto/kinematics.dto");
let CalcController = class CalcController {
    calc;
    constructor(calc) {
        this.calc = calc;
    }
    circle(query) {
        return this.calc.circle(query);
    }
    kinematics(dto) {
        return this.calc.kinematics(dto);
    }
};
exports.CalcController = CalcController;
__decorate([
    (0, common_1.Get)('circle'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [circle_query_dto_1.CircleQueryDto]),
    __metadata("design:returntype", void 0)
], CalcController.prototype, "circle", null);
__decorate([
    (0, common_1.Post)('kinematics'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kinematics_dto_1.KinematicsDto]),
    __metadata("design:returntype", void 0)
], CalcController.prototype, "kinematics", null);
exports.CalcController = CalcController = __decorate([
    (0, common_1.Controller)('calc'),
    __metadata("design:paramtypes", [cal_service_1.CalcService])
], CalcController);
//# sourceMappingURL=calc.controller.js.map