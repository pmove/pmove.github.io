---
Modelo: |
    nome:
      class: 'tab-left [Classe CSS para a tabela]'
      tabs:
        -
          id:     'json'
          name:   'JSON'
          active: true
          body: |
            ```
            Corpo da aba, com suporte a Markdown
            ```
        -
          id:     'xml'
          name:   'XML'
          active: false
          body: |
            ```
            Corpo da aba, com suporte a Markdown
            ```
---

<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
  <div class="mdl-tabs__tab-bar {{ site.data[include.data][include.key].class }}">
    {% for tab in site.data[include.data][include.key].tabs %}
      <a href="#{{ tab.id }}" class="mdl-tabs__tab {% if tab.active %}is-active{% endif %}">{{ tab.name }}</a>
    {% endfor %}
  </div>

  {% for tab in site.data[include.data][include.key].tabs %}
    <div class="mdl-tabs__panel {% if tab.active %}is-active{% endif %}" id="{{ tab.id }}">
      {{ tab.body | markdownify }}
    </div>
  {% endfor %}
</div>