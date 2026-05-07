import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private keys;
    register(dto: RegisterDto): {
        name: string;
        email: string;
        apiKey: string;
    };
    isValidKey(key: string): boolean;
}
