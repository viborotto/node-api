# node-api
First Crud with Node.js

Node -  plataforma que utiliza v8(engine de entendimento de JS do Browser) no BACK
API Rest: separa o front do back permitindo uma maior flexibilidade, uma API para diferentes plataformas

npm init -y 
  inicia pacotes e package.json, onde fica as dependencias e versoes
npm install express
  lidar com rotas e views

NOTE: package-lock.json, serve para cache de dependencias para nao ficar instalando varias vezes no projeto

servidor
  rota utilizando express:
    get req e res
    req contem todos os detalhes da requisicao, parametros, corpo, cabecalho, usuario, autenticacao, todos os tipos de infos da req

npm install -D nodemon
  dev-dependencies: apenas no ambiente de desenvolvimento, utiliazar por meio do script
  Nodemon: faz o restart do servidor a cada atualizacao do codigo
npm run dev



mongo no docker:
  docker pull mongo
  docker run --name mongodb -p 27017:27017 -d mongo
  docker start mongodb

Conectando no DB
ORM de bancos nao relacionais
ORM: encapsula a logica atraves do codigo js, ao inves de queries(Object relational mapping), transformar tabelas em objetos
  npm install mongoose 
  model tabela do banco de dados


Em algumas aplicacoes vamos ter muitos models para isso usar uma dependencia require-dir: inclui require('./src/models/Product'); em todos os arquivos automaticametne

app.use: recebe todo tipo de requisicao

Paginacao da Lista
npm install mongoose-paginate


Permitir que outros enderecos acessem api:
 Adicionando CORS:
  npm install cors