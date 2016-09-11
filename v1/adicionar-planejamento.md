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

{% include component.tab.md data='adicionar_planejamento' key='request' %}

#### Parâmetros
{% include component.table.md data='adicionar_planejamento' key='table' %}