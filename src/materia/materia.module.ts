import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { materiaProvider } from 'src/repositoty/repository.materia';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MateriaController],
  providers: [...materiaProvider, MateriaService]
})
export class MateriaModule { }
