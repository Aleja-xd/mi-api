import { CircleQueryDto } from './dto/circle-query.dto';
import { KinematicsDto } from './dto/kinematics.dto';
export declare class CalcService {
    circle(dto: CircleQueryDto): {
        area: number;
        perimeter: number;
    };
    kinematics(dto: KinematicsDto): {
        velocity: number;
        distance: number;
    };
}
