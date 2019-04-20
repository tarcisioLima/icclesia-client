# Icclesia #

Web client para o projeto icclesia; se trata de uma rede social religiosa, mais especifico ao público católico.


## Como Rodar ##

Rode ``` npm install ``` e depois ``` npm start ``` para iniciar o servidor.

## Frontend Dependencies ##

``` npm run watch ``` para compilar dependencias frontend.

## .env ##
Deve-se criar um .env na raiz da projeto, com este conteúdo: 

```
ENV=development
DEV_API_URL=localhost:8000/api/v1/
PROD_API_URL=https://monadaweb.com/api/v1/
DEV_PORT=3000
PROD_PORT=3000
SESS_LIFETIME=5
SECRET=$2y$12$8GUIDNP.dcwwIa.AWb7zWe0xgbBxMTGU6vSL6LGx2/YHw/IdIj/Q6
```

ENV= development ou production

### Template engine: Nunjucks ###
https://mozilla.github.io/nunjucks/templating.html