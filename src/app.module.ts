import { Module } from '@nestjs/common';
import { CoffeeModule } from './coffee/coffee.module';
import { ProfessoresModule } from './professores/professores.module';
import { MateriaModule } from './materia/materia.module';


@Module({
  imports: [ProfessoresModule,
    CoffeeModule,
    MateriaModule],
})
export class AppModule { }
