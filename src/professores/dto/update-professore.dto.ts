import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Professor } from '../entities/professore.entity';
import { CreateProfessoreDto } from './create-professore.dto';

export class UpdateProfessoreDto extends PartialType(CreateProfessoreDto) { }
