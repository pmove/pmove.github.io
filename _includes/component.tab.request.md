<!--
Modelo:
request:
  url: 'http://www.pmove.planmob.com.br/rest/planejamento/insert' # URL a ser exibido
  options:
    - 'JSON' # Opções da aba, é o mesmo para id
    - 'XML'
-->
<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
  <div class="mdl-tabs__tab-bar tab-left">
    {% for tab in site.data[include.data][include.key].options %}
      <a href="#{{ tab | downcase }}" class="mdl-tabs__tab {% if forloop.first %}is-active{% endif %}">{{ tab }}</a>
    {% endfor %}
  </div>

  {% for tab in site.data[include.data][include.key].options %}
    <div class="mdl-tabs__panel{% if forloop.first %} is-active{% endif %}" id="{{ tab | downcase }}">
      {% assign lower_tab = tab | downcase %}
      {{ '
        Method   : POST
        Path     : ' | append: site.data[include.data][include.key].url | append: '/' | append: lower_tab | append: '
        Headers  : Content-type: application/' | append: lower_tab | append: '; charset=utf-8
                   Authorization: Basic Base64(login:senha)
      ' | markdownify }}
    </div>
  {% endfor %}
</div>