---
title: "Mis queridos icon fonts..."
date: 2015-05-08 20:23:53
slug: "bienvenidos-icon-fonts"
image: "/wp-content/uploads/2015/05/typicons.png"
tags: ["maquetación", "css", "fuentes", "html5", "responsive", "diseño web"]
---
## Bienvenidos, icon fonts

Los *icon fonts* se tratan de iconos que en realidad forman parte de una fuente tipográfica. Esta fuente en lugar de letras contiene iconos. Esta idea ya existía hace años en fuentes llamadas *[dingbat](http://www.fontsquirrel.com/fonts/list/classification/dingbat "Dingbat Fonts")*, que quizás recordéis, pero la utilización de los **icon-fonts** va mucho más allá.

Los **icon fonts** son iconos que forman parte de una tipografía, son una fuente. Son originalmente un SVG, es decir, un elemento vectorial, por eso puede aumentar de tamaño sin perder calidad.

Cuando usemos los icon fonts podremos colocar el icono como si tratara de un texto, de este modo el tamaño del icono crece según el tamaño que le demos al texto. Para posicionarlo con respecto a otro elemento lo haremos gracias a las CSS y los pseudoelementos (:after y :before), con los cuales también podríamos poner nuestro símbolo de modo aislado si lo necesitamos.

## Los icon fonts agilizan el trabajo

El uso de icon fonts agiliza el trabajo. Podríamos utilizar galerías (incluso crear nuestras propias galerías de icon-fonts) de icon fonts en diversos proyectos. El cambio de color y tamaño de estos iconos es muy sencillo (como ya comentaba crecen según el tamaño de la fuente y se pueden manipular con las CSS) y es un punto a favor para incorporarlos a nuestros trabajos de diseño *responsive*.

Con el uso de icon fonts se reducen las llamadas al servidor. Si todos los iconos fueran imágenes sueltas, cada una de ellas haría una solicitud al servidor para cargar la imagen; esto ralentizaría la página. Con las icon fonts sólo tenemos el archivo de la fuente tipográfica.

Hasta hace poco para reducir el tema de la carga y tener los iconos organizados en un proyecto web, usábamos sprites y estaba muy bien pero el tema de las icon fonts le saca ventaja en agilidad a la hora de hacer cambios y se soluciona el tema de los tamaños, dado que en los sprites los iconos tendrían tamaños fijos.

Como son tipografías se les pueden dar estilos CSS propios de estos elementos. Sombras con text-shadow, resplandores, trazo, efecto tachado...

A la hora de hacer cambios en un proyecto ya existente, los icon-fonts nos ayudarían tremendamente. Imagina que se hace un rediseño total a una web, le cambiamos todo el estilo gráfico. Podríamos intercambiar la vieja galería de iconos por otra, sin tener que cambiar nada más (siempre que respetemos la nomenclatura CSS para referirse a cada icono). Esto se haría de un modo muchísimo más rápido que a la antigua usanza (creando nuevos sprites).

## Pequeñas desventajas de los icon fonts

Desventajas también tienen, una es que los icon fonts son por necesidad monocromáticos. Como se trata en realidad de fuentes, estas tienen siempre el mismo color que se les de por CSS. Si queremos unos de un color y otro de otro se puede hacer trabajando con las etiquetas CSS para discriminar pero aún así un icono en sí sería siempre de un solo color.

Tampoco no es un punto a favor que existen miles de galerías de icon fonts gratuitas disponibles para el uso de todos y entonces se ven en diferentes webs los mismos iconos y las webs van perdiendo personalidad, pero esto se puede subsanar si te propones crear tu propia fuente de icon fonts.

## Galerías de icon fonts

Esta es una selección de galerías de icon fonts gratuitas:

  

### [Font Awesome](http://fortawesome.github.io/Font-Awesome/ "Font Awesome")

[![awesome](/wp-content/uploads/2015/05/awesome.png)](http://fortawesome.github.io/Font-Awesome/) [Font Awesome](http://fortawesome.github.io/Font-Awesome/ "Font Awesome") es una galería de icon-fonts creados por [Dave Gandy](https://twitter.com/davegandy "DaveGandy"). Font Awesome se han popularizado mucho porque se encuentran incluidos en el framework Bootstrap.

  

### [Fontello](http://fontello.com/ "fontello")

[Fontello](http://fontello.com/ "fontello") reúne varias galerías de iconos que puedes seleccionar para crear tu propio set. Estas galerías son [Entypo](http://www.fontsquirrel.com/fonts/entypo "entypo"), [Font Awesome](http://fortawesome.github.io/Font-Awesome/ "Font Awesome"), [Iconic](https://useiconic.com/open/ "Iconic") y [Brandico](https://github.com/fontello/brandico.font "Brandico").

  

### [Entypo](http://www.fontsquirrel.com/fonts/entypo "entypo")

[![entypo](/wp-content/uploads/2015/05/entypo.png)](http://www.fontsquirrel.com/fonts/entypo) Entypo es una fuente gratuita de iconos que puedes encontrar en [Font Squirrel](http://www.fontsquirrel.com/fonts/entypo "entypo").

  

### [Iconic](https://useiconic.com/open/ "Iconic")

[Iconic](https://useiconic.com/open/ "Iconic") es una fuente de icon-fonts gratuita desarrollada por el equipo [Waybury](http://waybury.com/ "Waybury"). En septiembre del 2013 lanzaron su proyecto en una [campaña de Kickstarter](https://www.kickstarter.com/projects/207474036/iconic-advanced-icons-for-the-modern-web/backers "Campaña kickstarter icon fonts") con el objetivo de avanzar en el diseño de los iconos y en la tecnología que hay detrás de ellos.

  

### [Typicons](http://typicons.com/ "typicons")

[![typicons](/wp-content/uploads/2015/05/typicons.png)](http://typicons.com/) [Typicons](http://typicons.com/ "typicons"), iconos gratuitos para utilizar como webfont en cualquier proyecto web de modo gratuito.
