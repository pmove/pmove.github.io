<!--
Modelo:
request:
  url: 'http://www.pmove.planmob.com.br/rest/planejamento/insert' # URL a ser exibido
  options:
    - 'JSON' # Opções da aba, é o mesmo para id
    - 'XML'
-->
{% capture inc %}{% include __component.tab.request.md data='adicionar_planejamento' key='request' %}{% endcapture %}
{{ inc | markdownify }}