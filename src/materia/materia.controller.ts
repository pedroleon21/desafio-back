import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { AuthGuard } from 'src/filter/http/autorization/auth.guard';
import { ApiTags } from '@nestjs/swagger/dist';
import { ApiBody } from '@nestjs/swagger/dist/decorators/api-body.decorator';
import { getSchemaPath } from '@nestjs/swagger/dist/utils/get-schema-path.util';
@Controller('materia')
@ApiTags("Materia")
@UseGuards(AuthGuard)
export class MateriaController {
  constructor(private readonly materiaService: MateriaService) { }

  @Post()
  @ApiBody({ schema: { $ref: getSchemaPath(CreateMateriaDto) }, type: CreateMateriaDto, required: true })
  create(@Body() createMateriaDto: CreateMateriaDto) {
    return this.materiaService.create(createMateriaDto);
  }

  @Get()
  findAll() {
    return this.materiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriaDto: UpdateMateriaDto) {
    return this.materiaService.update(+id, updateMateriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaService.remove(+id);
  }
}
