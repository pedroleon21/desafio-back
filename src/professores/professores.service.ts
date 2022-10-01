import { Inject, Injectable } from '@nestjs/common';
import { Aula } from 'src/aula/entities/aula.entity';
import { Materia } from 'src/materia/entities/materia.entity';
import { Repository } from 'typeorm';
import { CreateProfessoreDto } from './dto/create-professore.dto';
import { UpdateProfessoreDto } from './dto/update-professore.dto';
import { Professor } from './entities/professore.entity';

@Injectable()
export class ProfessoresService {
  constructor(
    @Inject(REPOSITORY_NAMES.PROFESSOR_REPOSITORY)
    private reposytory: Repository<Professor>
  ) { }

  create(createProfessoreDto: CreateProfessoreDto) {
    return this.reposytory.save(this.reposytory.create(createProfessoreDto));
  }

  findAll(): Promise<Professor[]> {
    return this.reposytory.createQueryBuilder('Professor')
      .orderBy("id")
      .execute();
  }

  findOne(id: number): Promise<Object> {
    return this.reposytory
      .createQueryBuilder("professor")
      .leftJoinAndSelect(
        Aula,
        "aula",
        "aula.professor.id = professor.id"
      )
      .leftJoinAndMapMany(
        "Materia",
        Materia,
        "materia",
        "aula.materia.id = materia.id"
      )
      .where("professor.id = :id", { id })
      .execute()
      .then(result => {
        if (result.length == 0) return {};

        const newReult = {
          id: result[0].professor_id,
          fistname: result[0].professor_firstName,
          lastname: result[0].professor_lastName,
          materias: result.map(r => r.materia_materiaName),
        }
        return newReult;
      });//todo:corrigir isso
  }

  async update(id: number, updateProfessoreDto: UpdateProfessoreDto): Promise<Professor> {
    await this.reposytory
      .createQueryBuilder()
      .update(updateProfessoreDto)
      .where({ id })
      .execute();
    return this.reposytory.findOneBy({ id });
  }

  remove(id: number) {
    return this.reposytory.delete({ id });
  }
}
