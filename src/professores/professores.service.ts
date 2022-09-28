import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProfessoreDto } from './dto/create-professore.dto';
import { UpdateProfessoreDto } from './dto/update-professore.dto';
import { Professor } from './entities/professore.entity';

@Injectable()
export class ProfessoresService {
  constructor(
    @Inject("PROFESSOR_REPOSITORY")
    private reposytory: Repository<Professor>
  ) { }

  create(createProfessoreDto: CreateProfessoreDto) {
    return 'This action adds a new professore';
  }

  findAll(): Promise<Professor[]> {
    return this.reposytory.find();
  }

  findOne(id: number) {
    return this.reposytory.findBy({ id });
  }

  update(id: number, updateProfessoreDto: UpdateProfessoreDto) {
    return `This action updates a #${id} professore`;
  }

  remove(id: number) {
    return `This action removes a #${id} professore`;
  }
}
