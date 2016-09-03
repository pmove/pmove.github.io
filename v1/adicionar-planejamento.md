---
layout: page
categories: ['Planejamento']
visible: true
title: "Adicionar Planejamento"
description: "Documentação referente a adição de planejamento"
---

Esta forma de serviço utiliza a tecnologia de Web Services em REST, utilizando o protocolo HTTP e retornando um JSON para troca de informações.

#### Requisição
```
Method   : POST
Path     : http://www.pmove.planmob.com.br/rest/planejamento/insert/json
Headers  : Content-type: application/json; charset=utf-8
           Authorization: Basic Base64(login:senha)
``` 

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
    <tr>
      <td>John Lennon</td>
      <td>The smart one</td>
      <td>40</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Paul McCartney</td>
      <td>The cute one</td>
      <td>73</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>George Harrison</td>
      <td>The shy one</td>
      <td>58</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Ringo Starr</td>
      <td>The funny one</td>
      <td>74</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>