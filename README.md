# ☁️📶 LinkApi - Teste técnico!

<p align="center">
  <img alt="LinkApi"src="https://i.imgur.com/DjhmTSD.png" width="100%" height="auto">
</p>

## 📌 Projeto
<b>Esta aplicação foi desenvolvido entre os dias 18 à 20 de fevereiro de 2022, com base no teste técnico fornecido pela</b> [@LinkApi Solutions](https://www.linkapi.solutions/)!<br>
Seu objetivo principal é integrar a plataforma [@Pipedrive](https://www.pipedrive.com/) com a plataforma [@Bling](https://www.bling.com.br/).<br>
Enquanto busca os dados disponíveis no Pipedrive de forma contínua e cronometrada, o servidor tem como responsabilidade salvar dados ainda não cadastrados no banco e mandar tais informações para a comunicação com a API Bling.

## 👩‍💻 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Typescript](https://www.typescriptlang.org/) - Superset que adiciona tipagens ao Javascript.
- [Docker](https://www.docker.com/) - Criação de containers para um melhor e mais rápido desenvolvimento.
- [Typeorm](https://typeorm.io/) - Manipulação de dados relacionais via Objetos.
- [MongoDB](https://www.mongodb.com/) - Banco da dados não relacional.
- [Reid](https://redis.io/) - Armazenamento de dados em memória de alta performance.
- [Express](https://expressjs.com/) - Framework de rotas não opinado para NodeJS.
- [Axios](https://github.com/axios/axios) - Biblioteca de requisições HTTP.
- [Microsoft - Tsyringe](https://github.com/microsoft/tsyringe) - Biblioteca para injeções de dependências.
- [Node cron](https://www.npmjs.com/package/node-cron) - Biblioteca para agendamento de tarefas.
- [Bull](https://github.com/OptimalBits/bull#readme) - Biblioteca para manuseamento de tarefas sob demanda.
- [Jest](https://jestjs.io) - Execução de testes.

## 👨‍🏫 Fundamentos e estratégias abordadas

Esta API foi desenvolvida com o propósito de <b>entrega performática e escalável</b>.<br>
Ou seja, rápido tempo de resposta e entrega, com manuseamento de filas utilizando Redis para uma melhor entrega e armazenamento de dados.
<br>

<b>Neste projeto, foram abordados patterns de código, entre eles, estão:</b>
- Single responsibility principle (SPR);
- Dependecy inversion principle (DIP);
- Keep it simple, Silly (KISS);
- You aren’t gonna need it (YAGNI);
- Interface segregation principle (ISP);
- Open-closed principle (OCP).

## 📚 Documentação
A documentação dessa API foi construída utilizando um toolset famoso para a construção de documentações, chamado de [Swagger](https://swagger.io/).
<b>Para conseguir acessar a mesma, basta se redirecionar para a rota `/docs` depois de iniciar o servidor.</b>

## 📥 Clonando e executando
Para conseguir executar o projeto sem nenhuma interferência, certifique de ter os requisitos mínimos:<br>

- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) ou/e [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- [Docker compose](https://docs.docker.com/compose/)
<br>

<b>Passo a passo:</b>

1. Clone o repositório localmente usando o seguinte comando no seu terminal de preferência:
```shell
    git clone https://github.com/jsGolden/link-api   # Clonar repositório
    cd link-api                                      # Entrar no repositório clonado
```

2. Instale as dependências e bibliotecas para o funcionamento do código:
```shell
    npm install
    # ou: yarn
```

3. Suba os containers para a integração do manuseamento de dados (MongoDB/Redis)
```shell
  npm run docker:up
  # ou: yarn docker:up

  # é possível também parar os containers assim que quiser usando:
  # npm run docker:down
  # ou: yarn docker:down
```

3. Inicie todos os listeners com os seguintes comandos:
```shell
  # Iniciar servidor principal (API)
  npm run dev:start # ou: yarn dev:start

  # Iniciar CRON (Agendamento de tarefas)
  npm run dev:cron # ou yarn dev:cron

  # Iniciar Bull (Gerenciamento de tarefas sob demanda)
  npm run dev:queue # ou yarn dev:queue
```

4. [Opicional]: Execução de testes unitários:
```shell
  npm run test
  # ou: yarn test
```

## 📑 Licença
Este projeto está sobre a licença MIT.

<p align="center">Desenvolvido com 💜 por Wagner Rodrigues</p>
