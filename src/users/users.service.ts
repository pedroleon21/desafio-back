import { Injectable, Inject } from '@nestjs/common';
import { LoginForm } from 'src/auth/dto/LoginForm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserAuth } from './user.auth';


@Injectable()
export class UsersService {
    constructor(
        @Inject(REPOSITORY_NAMES.USER_REPOSITORY)
        private readonly repository: Repository<User>
    ) { }


    async findOne(loginForm: LoginForm): Promise<UserAuth | undefined> {
        const [firstName, lastName] = loginForm.username.split(".", 2)
        return await this.repository.findOneBy({ firstName, lastName, password: loginForm.password })
            .then(r => new UserAuth(r));
    }
}