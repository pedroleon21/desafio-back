import { Inject, Injectable } from '@nestjs/common';
import { Materia } from 'src/materia/entities/materia.entity';
import { Professor } from 'src/professores/entities/professore.entity';
import { Repository } from 'typeorm';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { Aula } from './entities/aula.entity';

@Injectable()
export class AulaService {
  constructor(
    @Inject(REPOSITORY_NAMES.AULA_REPOSITORY)
    private repository: Repository<Aula>,
    @Inject(REPOSITORY_NAMES.PROFESSOR_REPOSITORY)
    private professorRepository: Repository<Professor>,
    @Inject(REPOSITORY_NAMES.MATERIA_REPOSITORY)
    private materiaRepository: Repository<Materia>
  ) { }
  async create(createAulaDto: CreateAulaDto): Promise<Aula> {
    const aula: Aula = new Aula();
    aula.professor = await this.professorRepository.findOneBy({ id: createAulaDto.idProfessor });
    aula.materia = await this.materiaRepository.findOneBy({ id: createAulaDto.idMateria });
    aula.data = createAulaDto.data;
    return this.repository.save(this.repository.create(aula));
  }

  findAll(
    dia: number,
    mes: number,
    semana: number
  ) {
    return this.repository
      .createQueryBuilder('aula')
      .leftJoinAndSelect(
        Materia,
        "materia",
        " materia.id = aula.materia.id "
      )
      .leftJoinAndSelect(
        Professor,
        "professor",
        "professor.id = aula.professor.id"
      )
      .execute()
      .then(result => result.filter(r => {
        if (!!r.aula_data) {
          const data = new Date('' + r.aula_data);
          return (!(!(data.getDay() == semana) && !!semana) &&
            !(!(data.getMonth() + 1 == mes) && !!mes) &&
            !(!(data.getDate() == dia) && !!dia));
        }
        return (!r.aula_data && !semana && !dia && !mes)
      }));
  }

  findOne(id: number) {
    return this.repository
      .createQueryBuilder("aula")
      .leftJoinAndSelect(
        Materia,
        "materia",
        " materia.id = aula.materia.id ",
      )
      .where(" aula.id = :id ", { id })
      .execute();
  }

  async update(id: number, updateAulaDto: UpdateAulaDto) {
    const professor: Professor = await this.professorRepository.findOneBy({ id: updateAulaDto.idProfessor });
    const materia: Materia = await this.materiaRepository.findOneBy({ id: updateAulaDto.idMateria });
    const data = updateAulaDto.data;
    return this.repository
      .createQueryBuilder()
      .update({ professor, materia, data })
      .where({ id })
      .execute();
  }

  remove(id: number) {
    this.repository.delete({ id });
  }
}
