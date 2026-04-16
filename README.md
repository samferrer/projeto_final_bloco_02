# 💊 Projeto Final - Sistema de E-commerce de Farmácia

## 📌 Sobre o Projeto

Este projeto foi desenvolvido utilizando **NestJS** com o objetivo de criar um sistema de comércio eletrônico para uma farmácia, permitindo o gerenciamento de categorias de produtos.

A aplicação foi construída seguindo boas práticas de desenvolvimento backend, com organização em camadas (Controller, Service e Entity) e integração com banco de dados.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* NestJS
* TypeScript
* TypeORM
* MySQL
* Insomnia (testes de API)
* Git e GitHub

---

## 📂 Estrutura do Projeto

```
src/
 ├── categoria/
 │   ├── entities/
 │   │   └── categoria.entity.ts
 │   ├── categoria.controller.ts
 │   ├── categoria.service.ts
 │   └── categoria.module.ts
 ├── app.module.ts
 └── main.ts
```

---

## ⚙️ Funcionalidades

### ✅ CRUD Completo de Categoria

* Criar categoria
* Listar todas as categorias
* Buscar categoria por ID
* Atualizar categoria
* Deletar categoria

### ⭐ Funcionalidades Extras

* 🔍 Buscar categoria por nome
* 🔎 Busca parcial utilizando LIKE
* 🚨 Tratamento de erro (retorno 404 quando não encontrado)
* 📅 Controle automático de datas (criação e atualização)
* 📊 Ordenação de resultados

---

## 🔗 Endpoints da API

### 📌 Categoria

| Método | Rota                  | Descrição       |
| ------ | --------------------- | --------------- |
| GET    | /categoria            | Listar todas    |
| GET    | /categoria/:id        | Buscar por ID   |
| GET    | /categoria/nome/:nome | Buscar por nome |
| POST   | /categoria            | Criar           |
| PUT    | /categoria/:id        | Atualizar       |
| DELETE | /categoria/:id        | Deletar         |

---

## 🧪 Testes

Os testes da API foram realizados utilizando o **Insomnia**, garantindo o correto funcionamento de todos os endpoints.

---

## 🛠️ Como executar o projeto

```bash
# Clonar repositório
git clone

# Entrar na pasta
cd projeto_final_bloco_02

# Instalar dependências
npm install

# Rodar o projeto
npm run start:dev
```

---

## 📌 Banco de Dados

```sql
CREATE DATABASE db_farmacia;
```

## 👩‍💻 Desenvolvido por

Samara Ferreira Costa.
Turma Javascript - Generation Brasil.
