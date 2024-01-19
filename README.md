# Como testar a aplicação

  ## Como rodar  projeto

  - Ter nodejs installado.
  - Ter postegresql instalado ou uma database postegresql em algum servidor online.
  - Abrir o terminal na pasta do projeto e rodar o comando "npm install".
  - Rodar os comandos sql que estão em "src/database/schema.sql" no banco de dados usado.
  - Criar um arquivo .env com os valores:
    - "PGPORT=5432"
    - "PGUSER=[usuario_do_banco_de_dados]", substituindo o colchetes pelo usuário do banco de dados.
    - "PGPASSWORD=[senha_do_banco_de_dados]", substituindo o colchetes pela senha do banco de dados.
    - "PGDATABASE=[banco_de_dados]", substituindo o colchetes pelo do banco de dados criado após rodar os comandos do arquivo schema.sql (productsregistration).
    - "PORT=3000"
    - OBS: substitua todo o colchetes pelo seu respectivo valor, e não somente o que está dentro dele. Ex: "PGDATABASE=[banco_de_dados]" vai ficar "PGDATABASE=productsregistration".
  - Rodar o comando "npm run dev".

  Usar alguma plataforma de teste de APIs, como Postman, Insomnia ou similar
  com os seguintes endpoints:

  #### Criação de produto

  endpoint: POST `http://localhost:3000/products`
  body:
  ```
  {
    "name": "nome do produto",
    "description": "descrição do produto",
    "price": 150
  }
  ```

  #### Pegar lista de todos os produtos

  endpoint: GET `http://localhost:3000/products`

  #### Buscar um produto

  endpoint: GET `http://localhost:3000/products/[id]`
  - substitua o "[id]" acima pelo id de um produto cadastrado.

  #### Edição de um produto

  endpoint: PUT `http://localhost:3000/products/[id]`
  - substitua o "[id]" acima pelo id de um produto cadastrado.

  body:
  ```
  {
    "name": "novo nome do produto",
    "description": "nova descrição do produto",
    "price": 200
  }
  ```

  #### Deleção de um produto

  endpoint: DELETE `http://localhost:3000/products/[id]`
  - substitua o "[id]" acima pelo id de um produto cadastrado.
