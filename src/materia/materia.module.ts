import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { materiaProvider } from 'src/repositoty/repository.materia';
import { DatabaseModule } from 'src/database/database.module';
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
  controllers: [MateriaController],
  providers: [...materiaProvider, MateriaService]
})
export class MateriaModule { }
