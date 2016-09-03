{{ site.data.adicionar_planejamento2 }}

<table class="mdl-data-table mdl-js-data-table">
    {% if site.data[include.data][include.key].header %}
    <thead>
        <tr>
            {% for header in site.data[include.data][include.key].header %}
            <th class="mdl-data-table__cell--non-numeric"><strong>{{ header }}</strong></th>
            {% endfor %}
        </tr>
    </thead>
    {% endif %}
    {% if site.data[include.data][include.key].body %}
    <tbody>
    {% for body in site.data[include.data][include.key].body %}
    <tr>
        {% for cell in body %}
        <td class="mdl-data-table__cell--non-numeric">{{ cell }}</td>
        {% endfor %}
    </tr>
    {% endfor %}
    </tbody>
    {% endif %}
</table>