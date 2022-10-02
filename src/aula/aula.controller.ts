import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/filter/http/autorization/auth.guard';
import { AulaService } from './aula.service';
import { CreateAulaDto } from './dto/create-aula.dto';

@Controller('aula')
@UseGuards(AuthGuard)
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
