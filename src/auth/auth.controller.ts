import { Body, Controller, Post } from '@nestjs/common';
import { UserAuth } from 'src/users/user.auth';
import { AuthService } from './auth.service';
import { LoginForm } from './dto/LoginForm';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post()
    async auth(@Body() loginForm: LoginForm) {
        return this.authService.validateUser(loginForm)
    }
}
