import { CalcService } from './cal.service';
import { CircleQueryDto } from './dto/circle-query.dto';
import { KinematicsDto } from './dto/kinematics.dto';
export declare class CalcController {
    private calc;
    constructor(calc: CalcService);
    circle(query: CircleQueryDto): {
        area: number;
        perimeter: number;
    };
    kinematics(dto: KinematicsDto): {
        velocity: number;
        distance: number;
    };
}
