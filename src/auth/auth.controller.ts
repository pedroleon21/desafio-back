import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger/dist/decorators/api-body.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { getSchemaPath } from '@nestjs/swagger/dist/utils/get-schema-path.util';
import { UserAuth } from 'src/users/user.auth';
import { AuthService } from './auth.service';
import { LoginForm } from './dto/LoginForm';

@Controller('auth')
@ApiTags("Auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post()
    @ApiBody({ schema: { $ref: getSchemaPath(LoginForm) }, type: LoginForm, required: true })
    async auth(@Body() loginForm: LoginForm) {
        return this.authService.validateUser(loginForm)
    }
}
