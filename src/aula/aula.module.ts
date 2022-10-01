import { Module } from '@nestjs/common';
import { AulaService } from './aula.service';
import { AulaController } from './aula.controller';
import { DatabaseModule } from 'src/database/database.module';
import { aulaProvider } from 'src/repositoty/repository.aula';
import { materiaProvider } from 'src/repositoty/repository.materia';
import { professorProvider } from 'src/repositoty/reposytory.profesor';

@Module({
  imports: [DatabaseModule],
  controllers: [AulaController],
  providers:
    [...materiaProvider,
    ...aulaProvider,
    ...professorProvider,
      AulaService]
})
export class AulaModule { }
