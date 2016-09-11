<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
  <div class="mdl-tabs__tab-bar tab-left">
    {% for tab in site.data[include.data][include.key].options %}
      <a href="#{{ tab | downcase }}" class="mdl-tabs__tab {% if tab.active %}is-active{% endif %}">{{ tab }}</a>
    {% endfor %}
  </div>

  {% for tab in site.data[include.data][include.key].options %}
    {{ forloop.index }}
    {{ forloop.first }}
    {{ tab.index }}
    {{ site.data[include.data][include.key].options.first }}
    <div class="mdl-tabs__panel {% if forloop.index == forloop.first %}is-active{% endif %}" id="{{ tab | downcase }}">
    
      ```
      Method   : POST
      Path     : {{ site.data[include.data][include.key].url }}/{{ tab | downcase }}
      Headers  : Content-type: application/{{ tab | downcase }}; charset=utf-8
                 Authorization: Basic Base64(login:senha)
      ```
      
    </div>
  {% endfor %}
</div>