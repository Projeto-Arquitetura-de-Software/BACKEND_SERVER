# Servidor de Aplicação (Backend)

Este serviço implementa a lógica de negócio principal do projeto de arquitetura distribuída. Ele é responsável por processar as requisições recebidas do API Gateway, interagir com o banco de dados para persistir e consultar dados, e retornar as respostas formatadas.

O servidor foi projetado para ser "stateless" e pode ser replicado para fins de escalabilidade e alta disponibilidade.

## Arquitetura Interna

O código está estruturado em camadas, seguindo uma variação do padrão Model-View-Controller (MVC):

* **Controller:** Responsável por receber as requisições HTTP, validar os parâmetros e orquestrar as operações.
* **Model:** Contém a lógica de negócio e atua como intermediário para o acesso aos dados.
* **Repository:** Camada de acesso a dados (DAO) que executa as queries SQL diretamente no banco de dados.

## Tecnologias Utilizadas

* Node.js
* Express.js
* PostgreSQL
* `pg` (Node.js Driver)

## Desenvolvido por
* Victor De Mesquita 
