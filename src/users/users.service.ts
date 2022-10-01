import { Injectable } from '@nestjs/common';
import { UserAuth } from './user.auth';


@Injectable()
export class UsersService {
    private readonly users: UserAuth[] = [];

    async findOne(username: string): Promise<UserAuth | undefined> {
        return this.users.find(user => user.getUserName() === username);
    }
}