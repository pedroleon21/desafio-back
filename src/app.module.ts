import { Module } from '@nestjs/common';
import { CoffeeModule } from './coffee/coffee.module';
import { ProfessoresModule } from './professores/professores.module';
import { MateriaModule } from './materia/materia.module';
import { AulaModule } from './aula/aula.module';

@Module({
  imports: [
    AulaModule,
    ProfessoresModule,
    CoffeeModule,
    MateriaModule
  ],
})
export class AppModule { }
