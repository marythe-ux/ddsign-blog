---
title: "Centrado horizontal y vertical con html y css"
date: 2011-12-20 12:05:22
slug: "centrado-horizontal-y-vertical-html-css"
tags: ["maquetación", "css", "html", "tutorial"]
---
Es frecuente en maquetación web que necesitemos **centrar una capa o div de modo horizontal y vertical**. Además esta capa debe quedar centrada siempre, aunque redimensionemos la ventana, incluso para diferentes tamaños de pantalla.

Se consigue del modo siguiente combinando html y css. En resumen consiste en darle al div a centrar posición absoluta y que tenga 50% de top y de left (esto es con respecto a su contenedor, en este caso el body). La capa debe tener el ancho y el alto que necesites pero después hemos de ajustarle el margen superior (margin-top) con el valor en negativo del total de la mitad de la altura de esta capa, y el margen izquierdo (margin-left) será el valor en negativo del total de la mitad del ancho de esta capa.

**HTML**

	

Contenido del div

**CSS**

p {
margin: 1em;
}
#mydiv {
position:absolute;
top: 50%;
left: 50%;
width:30em;
height:18em;
margin-top: -9em; /\*en negativo la mitad de la altura (height)\*/
margin-left: -15em; /\*en negativo la mitad del ancho (width)\*/
border: 1px solid #ccc;
background-color: #f3f3f3;
}

#### fuente

[Centrar capa en horizontal y en vertical (Notasweb.com)](http://notasweb.com/articulo/css/centrar-capa-en-horizontal-y-en-vertical.html "Centrar capa en horizontal y en vertical")
