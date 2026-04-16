import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './entities/categoria.entity';

@Controller('categoria')
export class CategoriaController {

  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.categoriaService.findOne(id);
  }

  @Post()
  create(@Body() categoria: Categoria) {
    return this.categoriaService.create(categoria);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() categoria: Categoria) {
    return this.categoriaService.update(id, categoria);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.categoriaService.remove(id);
  }
}