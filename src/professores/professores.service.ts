import { Inject, Injectable } from '@nestjs/common';
import { Aula } from 'src/aula/entities/aula.entity';
import { Materia } from 'src/materia/entities/materia.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateProfessoreDto } from './dto/create-professore.dto';
import { ProfessorDTO } from './dto/ProfessorDTO';
import { UpdateProfessoreDto } from './dto/update-professore.dto';
import { Professor } from './entities/professore.entity';

@Injectable()
export class ProfessoresService {
  constructor(
    @Inject(REPOSITORY_NAMES.PROFESSOR_REPOSITORY)
    private readonly reposytory: Repository<Professor>,
    @Inject(REPOSITORY_NAMES.USER_REPOSITORY)
    private readonly userRepository: Repository<User>
  ) { }

  create(createProfessoreDto: CreateProfessoreDto): Promise<Professor> {
    const professor = new Professor();
    professor.user = new User(createProfessoreDto);
    professor.user.firstName = createProfessoreDto.firstName;
    professor.user.lastName = createProfessoreDto.lastName;
    professor.user.setPassword(createProfessoreDto.password);
    return this.reposytory.save(this.reposytory.create(professor));
  }

  findAll(): Promise<Professor[]> {
    return this.reposytory.createQueryBuilder('professor')
      .leftJoinAndSelect(
        User,
        "user",
        " professor.user.id = user.id ",
      )
      .orderBy("professor.id")
      .execute()
      .then(result => result
        .map(r => new ProfessorDTO(r)));
  }

  findOne(id: number): Promise<Object> {
    return this.reposytory
      .createQueryBuilder("professor")
      .leftJoinAndSelect(
        User,
        "user",
        "user.id = professor.user.id"
      )
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
          fistname: result[0].user_firstName,
          lastname: result[0].user_lastName,
          materias: result.map(r => r.materia_materiaName),
        }
        return newReult;
      });//todo:corrigir isso
  }

  async update(id: number, updateProfessoreDto: UpdateProfessoreDto): Promise<Object> {
    const professor: Professor = await this.reposytory.findOneBy({ id });
    professor.user.firstName = updateProfessoreDto.firstName;
    professor.user.lastName = updateProfessoreDto.lastName;
    if (updateProfessoreDto.password != null) professor.user.setPassword(updateProfessoreDto.password);
    await this.userRepository
      .createQueryBuilder()
      .update(professor.user)
      .where({ id: professor.user.id })
      .execute();
    return this.findOne(id);
  }

  remove(id: number) {
    return this.reposytory.delete({ id });
  }
}
