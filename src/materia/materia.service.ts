import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { ServideFailureException } from 'src/exceptions/servide.failure.exception';
import { Repository } from 'typeorm';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { Materia } from './entities/materia.entity';

@Injectable()
export class MateriaService {
  constructor(@Inject(REPOSITORY_NAMES.MATERIA_REPOSITORY)
  private reposytory: Repository<Materia>) { }
  create(createMateriaDto: CreateMateriaDto) {
    return this.reposytory.save(this.reposytory.create(createMateriaDto));
  }

  findAll(): Promise<Materia[]> {
    return this
      .reposytory
      .find();
  }

  findOne(id: number) {
    return this.reposytory.findOneBy({ id });
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto): Promise<Materia> {
    await this.reposytory
      .createQueryBuilder()
      .update(updateMateriaDto)
      .where("materia.id = :id ", { id })
      .execute();
    return this.reposytory.findOneBy({ id });
  }

  remove(id: number) {
    this.reposytory.delete({ id })
      .catch(error => new ServideFailureException(error, HttpStatus.CONFLICT));
  }
}
