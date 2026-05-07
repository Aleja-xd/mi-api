import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from './auth.service';
export declare class ApiKeyGuard implements CanActivate {
    private auth;
    constructor(auth: AuthService);
    canActivate(ctx: ExecutionContext): boolean;
}
