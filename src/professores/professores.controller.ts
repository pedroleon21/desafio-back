import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { CreateProfessoreDto } from './dto/create-professore.dto';
import { UpdateProfessoreDto } from './dto/update-professore.dto';
import { AuthGuard } from 'src/filter/http/autorization/auth.guard';

@Controller('professor')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) { }

  @Post()
  create(@Body() createProfessoreDto: CreateProfessoreDto) {
    return this.professoresService.create(createProfessoreDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.professoresService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professoresService.findOne(+id);
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfessoreDto: UpdateProfessoreDto) {
    return this.professoresService.update(+id, updateProfessoreDto);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professoresService.remove(+id);
  }
}
