import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { ServideFailureException } from 'src/exceptions/servide.failure.exception';
import { Repository } from 'typeorm';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { Materia } from './entities/materia.entity';

@Injectable()
export class MateriaService {
  constructor(@Inject(repository_names.MATERIA_REPOSITORY)
  private reposytory: Repository<Materia>) { }
  create(createMateriaDto: CreateMateriaDto) {
    return 'This action adds a new materia';
  }

  findAll(): Promise<Materia[]> {
    return this.reposytory.find();
  }

  findOne(id: number) {
    return this.reposytory.findOneBy({ id });
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto): Promise<Materia> {
    await this.reposytory
      .createQueryBuilder()
      .update(UpdateMateriaDto)
      .where({ id })
      .execute
    return this.reposytory.findOneBy({ id });
  }

  async remove(id: number) {
    return this.reposytory.delete({ id })
      .catch(error => new ServideFailureException(error, HttpStatus.CONFLICT));
  }
}
