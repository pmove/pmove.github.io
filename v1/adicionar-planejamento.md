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
|-----------------+------------+-----------------+----------------|
| Default aligned |Left aligned| Center aligned  | Right aligned  |
|-----------------|:-----------|:---------------:|---------------:|
| First body part |Second cell | Third cell      | fourth cell    |
| Second line     |foo         | **strong**      | baz            |
| Third line      |quux        | baz             | bar            |
|-----------------+------------+-----------------+----------------|
| Second body     |            |                 |                |
| 2 line          |            |                 |                |
|=================+============+=================+================|
| Footer row      |            |                 |                |
|-----------------+------------+-----------------+----------------|
<!--
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
      <td class="mdl-data-table__cell--non-numeric">John Lennon</td>
      <td class="mdl-data-table__cell--non-numeric">The smart one</td>
      <td>40</td>
      <td class="mdl-data-table__cell--non-numeric">No</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">Paul McCartney</td>
      <td class="mdl-data-table__cell--non-numeric">The cute one</td>
      <td>73</td>
      <td class="mdl-data-table__cell--non-numeric">Yes</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">George Harrison</td>
      <td class="mdl-data-table__cell--non-numeric">The shy one</td>
      <td>58</td>
      <td class="mdl-data-table__cell--non-numeric">No</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">Ringo Starr</td>
      <td class="mdl-data-table__cell--non-numeric">The funny one</td>
      <td>74</td>
      <td class="mdl-data-table__cell--non-numeric">Yes</td>
    </tr>
  </tbody>
</table>
-->