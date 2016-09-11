<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
  <div class="mdl-tabs__tab-bar">
    {% for title in site.data[include.data][include.key] %}
      <a href="#{{ title }}" class="mdl-tabs__tab">{{ title }}</a>
    {% endfor %}
  </div>

  <div class="mdl-tabs__panel is-active" id="starks-panel">
    <ul>
      <li>Eddard</li>
      <li>Catelyn</li>
      <li>Robb</li>
      <li>Sansa</li>
      <li>Brandon</li>
      <li>Arya</li>
      <li>Rickon</li>
    </ul>
  </div>
  <div class="mdl-tabs__panel" id="lannisters-panel">
    <ul>
      <li>Tywin</li>
      <li>Cersei</li>
      <li>Jamie</li>
      <li>Tyrion</li>
    </ul>
  </div>
</div>