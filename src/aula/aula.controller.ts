import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AulaService } from './aula.service';
import { CreateAulaDto } from './dto/create-aula.dto';

@Controller('aula')
export class AulaController {
  constructor(private readonly aulaService: AulaService) { }

  @Post()
  create(@Body() createAulaDto: CreateAulaDto) {
    return this.aulaService.create(createAulaDto);
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
