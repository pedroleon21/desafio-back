import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserAuth } from 'src/users/user.auth';
import { UsersService } from 'src/users/users.service';
import { LoginForm } from './dto/LoginForm';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(loginForm: LoginForm): Promise<Object | undefined> {
        const user: UserAuth = await this.usersService.findOne(loginForm);
        if (!!user && user.getPass() === loginForm.password) {
            const payload = { username: user.getUserName, sub: user.id };
            return {
                access_token: this.jwtService.sign(payload)
            };
        }
        throw new HttpException("Não foi possível verificar", HttpStatus.UNAUTHORIZED);
    }
}
