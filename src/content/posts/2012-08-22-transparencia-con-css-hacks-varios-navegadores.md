---
title: "Transparencia con CSS (hacks varios navegadores)"
date: 2012-08-22 14:51:49
slug: "transparencia-con-css-hacks-varios-navegadores"
tags: ["maquetación", "css", "hacks", "diseño web"]
---
Dar transparencia o opacidad a un elemento mediante CSS es una estas propiedades que para que funcionen bien en todos los navegadores requiere de varios trucos.

Lo normal sería *opacity: 0.5;* pero hay varios hacks a tener en cuenta. Apunto aquí como debería quedarnos una CSS completita para esta cuestión:

.transparente {
/\* IE 8 \*/
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";

/\* IE 5-7 \*/
filter: alpha(opacity=50);

/\* Mozilla Firefox \*/
-moz-opacity: 0.5;

/\* Safari 1.x \*/
-khtml-opacity: 0.5;

/\* Navegadores modernos \*/
opacity: 0.5;
}

  

<div class="fuentes">

#### FUENTE:

  
[Cross Browser Opacity (CSS Tricks)](http://css-tricks.com/snippets/css/cross-browser-opacity/)

</div>
