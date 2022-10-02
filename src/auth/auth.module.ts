import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from 'src/repositoty/repository.user';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule,
    JwtModule.register({
      secret: "teste",
      signOptions: {
        expiresIn: "3000s"
      }
    })
  ],
  providers: [
    ...userProvider,
    UsersService,
    AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
