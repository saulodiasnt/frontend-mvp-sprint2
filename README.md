# Projeto de Arquitetura de Software - PUC Rio

## Descrição do Projeto

Este projeto foi desenvolvido para a disciplina de Arquitetura de Software do curso de Engenharia de Software da PUC Rio. A proposta do MVP era criar uma aplicação utilizando diferentes arquiteturas apresentadas durante o curso. A aplicação desenvolvida é uma plataforma que lista filmes e séries populares e recentes, utilizando a API do TMDB. O usuário pode se cadastrar e criar uma lista de filmes favoritos.

### Tecnologias Utilizadas

- **Frontend**: React, TypeScript, Vite
- **Backend**: Python, Flask, Flask-OpenAPI
- **Banco de Dados**: MariaDB
- **ORM**: SQLAlchemy, Flask-Migrate
- **API Terceira**: TMDB API

## Funcionalidades

- Listagem de filmes e séries populares e recentes
- Cadastro de usuário
- Autenticação de usuário
- Criação de lista de filmes favoritos

## Arquitetura da Aplicação

A aplicação segue uma arquitetura distribuída, composta por três principais componentes:

1. **Frontend (React)**: Interface de usuário que consome a API do backend para autenticação e listagem de filmes, e a API do TMDB para obter os detalhes dos filmes e séries.
2. **Backend (Flask)**: API REST responsável pela autenticação dos usuários e gerenciamento das listas de filmes favoritos.
3. **Banco de Dados (MariaDB)**: Armazena os dados dos usuários e suas listas de filmes favoritos.

### Diagrama de Arquitetura

```plaintext
   +-------------+        +---------------+       +---------------+
   |  Frontend   | <----> |  Backend API  | <-->  |  MariaDB      |
   | (React)     |        |   (Flask)     |       | (Database)    |
   +-------------+        +---------------+       +---------------+
         |
         v
   +------------------+
   | TMDB API         |
   | (Third-party)    |
   +------------------+
```

## Como executar o Projeto

### Docker

#### Pré-requisitos

- Docker
- Docker Compose

#### Iniciando Aplicação

1. Clone o repositório:

```bash
git clone https://github.com/saulodiasnt/backend-mvp-sprint2 backend && \
git clone https://github.com/saulodiasnt/frontend-mvp-sprint1 frontend
```

2. Navegue até a pasta do backend:

```bash
cd backend
```

3. Crie a imagem docker para o backend

```bash
docker build -t backend-pucflix
```

4. Navegue até a pasta do frontend:

```bash
cd ../frontend
```

5. Abra o arquivo docker-compose da aplicação do front-end e configure corretamente as variáveis de ambiente:

```plaintext
version: "3.7"

services:
  backend:
    image: backend-pucflix # Nome da imagem do backend
    ports:
      - "5000:5000"
  frontend:
    build: .
    environment:
      - VITE_API_URL=http://backend:5000/
      - VITE_TMDB_API_KEY=*SUA_API_KEY* # Deverá ser informada aqui a sua API KEY do TMDB
    ports:
      - "8080:80"
    depends_on:
      - backend
```

6. Após configurar corretamente, execute a aplicação:

```bash
docker-compose up -d
```

A aplicação principal ficará disponível no endereço: http://localhost:8080.

A aplicação REST secundária ficará disponível no endereço: http://localhost:5000.

## Contribuição

1. Fork o projeto
2. Crie uma branch nova (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m "Adicionei nova funcionalidade"`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença
