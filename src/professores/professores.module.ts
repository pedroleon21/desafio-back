import { Module } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { ProfessoresController } from './professores.controller';
import { professorProvider } from 'src/repositoty/reposytory.profesor';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from 'src/repositoty/repository.user';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';

@Module({
  imports: [DatabaseModule,
    JwtModule.register({
      secret: "teste",
      signOptions: {
        expiresIn: "3000s"
      }
    })
  ],
  controllers: [ProfessoresController],
  providers: [...userProvider,
  ...professorProvider,
    ProfessoresService],
})
export class ProfessoresModule { }
