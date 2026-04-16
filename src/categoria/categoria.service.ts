import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { Repository } from "typeorm";


@Injectable()
export class CategoriaService {

    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository:Repository<Categoria>,
    ) {}

    findAll() {
    return this.categoriaRepository.find();
  }

  findOne(id: number) {
    return this.categoriaRepository.findOneBy({ id });
  }

  findByNome(nome: string) {
  return this.categoriaRepository.find({
    where: {
      nome: nome
    }
  });
  }

  create(categoria: Categoria) {
    return this.categoriaRepository.save(categoria);
  }

  update(id: number, categoria: Categoria) {
    categoria.id = id;
    return this.categoriaRepository.save(categoria);
  }

  remove(id: number) {
    return this.categoriaRepository.delete(id);
  }

}