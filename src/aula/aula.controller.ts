import { Controller, Get, Post, Body, UseGuards, Query, Param, Delete } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger/dist/decorators/api-body.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { getSchemaPath } from '@nestjs/swagger/dist/utils/get-schema-path.util';
import { AuthGuard } from 'src/filter/http/autorization/auth.guard';
import { AulaService } from './aula.service';
import { CreateAulaDto } from './dto/create-aula.dto';

@Controller('aula')
@UseGuards(AuthGuard)
@ApiTags("Aula")
export class AulaController {
  constructor(private readonly aulaService: AulaService) { }

  @Post()
  @ApiBody({ schema: { $ref: getSchemaPath(CreateAulaDto) }, type: CreateAulaDto, required: true })
  create(@Body() createAulaDto: CreateAulaDto) {
    return this.aulaService.create(createAulaDto);
  }
  @Get()
  findAll(
    @Query("dia") dia: string,
    @Query("mes") mes: string,
    @Query("semana") semana: string
  ) {
    return this.aulaService.findAll(+dia, +mes, +semana);
  }
  @Get(':id')
  findOne(@Param("id") id: string) {
    return this.aulaService.findOne(+id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aulaService.remove(+id);
  }
}
