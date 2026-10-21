---
title: "Sintaxis y diferentes modos de llamar media queries"
date: 2012-04-28 11:18:27
slug: "sintaxis-y-diferentes-modos-de-llamar-media-queries"
tags: ["css", "w3c", "media queries"]
---
Las **media queries** son unas técnicas mediante las cuales gracias a la evaluación previa de unas características del navegador, podemos variar ciertas especificaciones de estilos para ellos. En la práctica funcionan como condicionales. Son verdaderamente útiles a la hora de diseñar webs que se adapten correctamente a mayoría de dispositivos y resoluciones que ahora conviven (o a las que el diseñador en el momento de crear la web le preocupen).

Este concepto se está llamando *adaptative design* o *responsive design*.

Su uso generalizado es relativamente nuevo y parece que está prosperando rápidamente, pero ya en Mayo del 2010 podíamos leer artículos sobre el tema en [A List Apart (Responsive Web Design).](http://www.alistapart.com/articles/responsive-web-design/ "Responsive Web Design (A List Apart)")

El W3C también recoge documentación sobre [Media Queries](http://www.w3.org/TR/css3-mediaqueries/#media1 "Media Queries (W3C)"), que es de obligada consulta para iniciarse en esta técnica.

## Sintaxis de las media queries

Las query contienen dos componentes:

1.  el tipo de medio  (`screen`), y
2.  la query entre paréntesis, conteniendo una característica particular,  (`max-device-width`)  a evaluar, seguida por un valor(`480px`).

  

## Cómo llamar a las media queries

Enlazando una hoja de estilo CSS en el HEAD de nuestra página web:  

Importando a una hoja de estilo CSS:  

@import url( estilos.css ) screen and ( min-width: 600px );

Dentro de una hoja CSS para modificar algún estilo concreto para el caso que define la media query:

@media screen and (max-device-width: 480px) {
  .column {
    float: none;
  }

}
