---
title: "Hacks, condicionales para explorer"
date: 2012-04-25 21:44:36
slug: "hacks-condicionales-para-explorer"
tags: ["css", "hacks"]
---
Si al maquetar una web nos encontramos con que una serie de elementos no se ven bien en Explorer, nos veremos obligados a crear una hoja de estilos para este navegador para definir esas diferencias. Entonces dispondremos un Hack condicional en el **head** de nuestra página justo después de la llamada de la hoja de estilos CSS principal.

Este condicional sería así, dentro de los corchetes ponemos la url de la hoja de estilos CSS especial para explorer:

Podemos identificar el navegador exacto para el que es la excepción:

Para explorer 7

Para explorer 8

O puede ser para versiones anteriores a la que indicamos. En este ejemplo de abajo la condición es sólo para versiones anteriores a la 9:

O para versiones anteriores pero también incluyendo la que indicamos:

También podemos escribir la condicional de modo que sea para versiones superiores a la indicada:

<div class="fuentes">

#### fuentes

[Quirksmode.org](http://www.quirksmode.org/css/condcom.html)

</div>
