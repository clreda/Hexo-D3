---
title: Exemple
---
 
Test #1

## Modifier CSS

<h3 id='title'>Blablabla</h3>

<input type = "button" value = "mettre en rouge et agrandir" onclick = "javascript:change('title')" />

## Faire un truc interactif

<ul id="list"></ul>

<input type = "button" value = "enlever la 5ème valeur" onclick = "javascript:remove()" />
<input type = "button" value = "rajouter la 5ème valeur" onclick = "javascript:add()" />

## Dessiner un truc (SVG)

<div id = "svgcontainer"></div>

<input type = "button" value = "dessine un truc vert" onclick = "javascript:draw()" />

<br>

<script src="https://d3js.org/d3.v5.min.js"></script>
<script type="application/javascript" src="/js/test.js"></script>
