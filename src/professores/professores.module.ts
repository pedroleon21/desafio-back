import { Module } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { ProfessoresController } from './professores.controller';
import { professorProvider } from 'src/repositoty/reposytory.profesor';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProfessoresController],
  providers: [...professorProvider,
    ProfessoresService],
})
export class ProfessoresModule { }
