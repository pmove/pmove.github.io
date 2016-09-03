---
layout: page
categories: ['Planejamento']
visible: true
title: "Adicionar Planejamento"
description: "Documentação referente a adição de planejamento"
params: [
    [ "usuario", "String", "E-mail dos usuários responsáveis pelo planejamento, é o mesmo usado no login", "Sim" ],
    [ "usuario", "String", "E-mail dos usuários responsáveis pelo planejamento, é o mesmo usado no login", "Sim" ],
    [ "usuario", "String", "E-mail dos usuários responsáveis pelo planejamento, é o mesmo usado no login", "Sim" ],
    [ "usuario", "String", "E-mail dos usuários responsáveis pelo planejamento, é o mesmo usado no login", "Sim" ],
    [ "usuario", "String", "E-mail dos usuários responsáveis pelo planejamento, é o mesmo usado no login", "Sim" ],
    [ "usuario", "String", "E-mail dos usuários responsáveis pelo planejamento, é o mesmo usado no login", "Sim" ],
] 
---

Esta forma de serviço utiliza a tecnologia de Web Services em REST, utilizando o protocolo HTTP e retornando um JSON para troca de informações.

#### Requisição
```
Method   : POST
Path     : http://www.pmove.planmob.com.br/rest/planejamento/insert/json
Headers  : Content-type: application/json; charset=utf-8
           Authorization: Basic Base64(login:senha)
``` 

{{ site.data }}
#### Parâmetros
<table class="mdl-data-table mdl-js-data-table">
  <thead>
    <tr>
      <th class="mdl-data-table__cell--non-numeric"><strong>Campo</strong></th>
      <th class="mdl-data-table__cell--non-numeric"><strong>Tipo</strong></th>
      <th class="mdl-data-table__cell--non-numeric"><strong>Descrição</strong></th>
      <th class="mdl-data-table__cell--non-numeric"><strong>Obrigatório</strong></th>
    </tr>
  </thead>
  <tbody>
    {% for param in site.data.adicionar_planejamento.parameters %}
    <tr>
      <td class="mdl-data-table__cell--non-numeric">{{ param[0] }}</td>
      <td class="mdl-data-table__cell--non-numeric">{{ param[1] }}</td>
      <td class="mdl-data-table__cell--non-numeric">{{ param[2] }}</td>
      <td class="mdl-data-table__cell--non-numeric">{{ param[3] }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>