import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository, Like } from 'typeorm';

@Injectable()
export class CategoriaService {

  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  findAll() {
    return this.categoriaRepository.find();
  }

  async findOne(id: number) {
    const categoria = await this.categoriaRepository.findOneBy({ id });

    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }

    return categoria;
  }

  findByNome(nome: string) {
    return this.categoriaRepository.find({
      where: {
        nome: Like(`%${nome}%`)
      }
    });
  }

  create(categoria: Categoria) {
    return this.categoriaRepository.save(categoria);
  }

  async update(id: number, categoria: Categoria) {
  await this.findOne(id);

  await this.categoriaRepository.update(id, {
    nome: categoria.nome,
    descricao: categoria.descricao,
  });

  return this.findOne(id);
}

  async remove(id: number) {
    await this.findOne(id);
    return this.categoriaRepository.delete(id);
  }
}