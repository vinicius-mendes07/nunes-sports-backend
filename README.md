# Nunes Sports - backend

  ## Tecnologias usadas

  - Javascript
  - PostgreSQL
  - NodeJs
  - Express

  ## Como rodar  projeto

  - Ter nodejs installado.
  - Ter postegresql instalado.
  - Abrir o terminal na pasta do projeto e rodar o comando "npm install".
  - Rodar os comandos sql que estão em "src/database/schema.sql" no banco de dados usado.
  - Criar um arquivo .env com os valores:
    ```
    HOST=localhost
    PGPORT=5432
    PGUSER={usuario_do_banco_de_dados}
    PGPASSWORD={senha_do_banco_de_dados}
    PGDATABASE={banco_de_dados}
    PORT=3000
    ```
    - OBS: substitua toda as chaves pelo seu respectivo valor, e não somente o que está dentro dela. Ex: "PGDATABASE={banco_de_dados}" vai ficar "PGDATABASE=productsregistration".
  - Rodar o comando "npm run dev".

  Usar alguma plataforma de teste de APIs, como Postman, Insomnia ou similar
  com os seguintes endpoints:

  #### Criação de produto

  endpoint: POST `http://localhost:3000/products`


  corpo da requisição:
  ```
  {
    "name": "nome do produto",
    "description": "descrição do produto",
    "price": 150
  }
  ```

  resposta:
  ```
  {
    "id: "8aec1aab-99a9-4559-ad27-4a42b038b297",
    "name": "nome do produto",
    "description": "descrição do produto",
    "price": 150
  }
  ```

  #### Pegar lista de todos os produtos

  endpoint: GET `http://localhost:3000/products`

  resposta:
  ```
  [
    {
      "id: "8aec1aab-99a9-4559-ad27-4a42b038b297",
      "name": "nome do produto",
      "description": "descrição do produto",
      "price": 150
    },
    {
      "id: "1bcc1aab-99a9-4559-ad27-4a42b038b395",
      "name": "nome do produto 2",
      "description": "descrição do produto 2",
      "price": 100
    }
  ]
  ```

  #### Buscar um produto

  endpoint: GET `http://localhost:3000/products/[id]`
  - substitua o "[id]" acima pelo id de um produto cadastrado.

  resposta:
  ```
  {
    "id: "8aec1aab-99a9-4559-ad27-4a42b038b297",
    "name": "nome do produto",
    "description": "descrição do produto",
    "price": 150
  }
  ```

  #### Edição de um produto

  endpoint: PUT `http://localhost:3000/products/[id]`
  - substitua o "[id]" acima pelo id de um produto cadastrado.

  corpo da requisição:
  ```
  {
    "name": "novo nome do produto",
    "description": "nova descrição do produto",
    "price": 200
  }
  ```

  resposta:
  ```
  {
    "id: "8aec1aab-99a9-4559-ad27-4a42b038b297",
    "name": "novo nome do produto",
    "description": "nova descrição do produto",
    "price": 200
  }
  ```

  #### Deleção de um produto

  endpoint: DELETE `http://localhost:3000/products/[id]`
  - substitua o "[id]" acima pelo id de um produto cadastrado.
