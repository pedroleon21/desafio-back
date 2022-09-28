import { Module } from '@nestjs/common';
import { CoffeeModule } from './coffee/coffee.module';
import { ProfessoresModule } from './professores/professores.module';


@Module({
  imports: [ProfessoresModule,
    CoffeeModule],
})
export class AppModule { }
