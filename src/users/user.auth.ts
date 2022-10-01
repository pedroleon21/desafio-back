import { PartialType } from "@nestjs/mapped-types"
import { User } from "./entities/user.entity";
export class UserAuth extends User {
    constructor(user: User) {
        super(user);
    }
    public getUserName() {
        return `${this.firstName}.${this.lastName}`;
    }
    public getPass(): string {
        return this.getPassword();
    }
}