import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProfessoreDto } from './dto/create-professore.dto';
import { UpdateProfessoreDto } from './dto/update-professore.dto';
import { Professor } from './entities/professore.entity';

@Injectable()
export class ProfessoresService {
  constructor(
    @Inject(repository_names.PROFESSOR_REPOSITORY)
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

  findOne(id: number): Promise<Professor> {
    return this.reposytory.findOneBy({ id });
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
    return this.reposytory.delete(id);
  }
}
