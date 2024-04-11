# GUCL

após clonar a aplicação, você pode precisa iniciar o docker
 - rode o comando "yarn install"
 - tenha o docker-cli ou o docker-desktop para iniciar o projeto
 - rode o comando: "docker-compose up -d"
 - rode o comando: "yarn prisma migrate dev"
 - toda vez que for instalado uma nova dependência ou criado uma nova migration, é necessário rebuild o
   contêiner "gucl_web"
