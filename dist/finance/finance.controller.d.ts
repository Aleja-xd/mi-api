import { FinanceService } from './finance.service';
import { CompoundDto } from './dto/compound.dto';
export declare class FinanceController {
    private finance;
    constructor(finance: FinanceService);
    compound(dto: CompoundDto): {
        amount: number;
    };
}
