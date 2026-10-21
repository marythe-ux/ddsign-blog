---
title: "Sticky footer. Buenas prácticas."
date: 2016-02-29 21:14:29
slug: "sticky-footer-buenas-practicas"
image: "/wp-content/uploads/2016/02/footer.jpg"
tags: ["maquetación", "css", "html", "tutorial"]
---
[![footer](/wp-content/uploads/2016/02/footer.jpg)](/wp-content/uploads/2016/02/footer.jpg)

Desde mi entrada [Sticky footer, pie de página fijo al final de la página](/2011/12/14/sticky-footer-pie-de-pagina-fijo-al-final-de-la-pagina/ "Sticky footer, pie de página fijo al final de la página") de 2011, podemos decir que el uso de un pie de página fijo es una constante en la mayoría de las webs de hoy en día. Es una solución elegante y muy recurrida. Desde el 2011 se han utilizado diferentes soluciones de maquetación de este elemento.

Ahora no es tan sencillo como hace años, porque debido al responsive no siempre vamos a saber calcular la altura del pie en un tamaño exacto.

Hoy, junto al asesoramiento del genial programador [Jorge Rojo](http://jorgerojo.com "Jorge Rojo - el programador de los diseñadores"), quiero analizar varias soluciones de maquetación de un sticky footer.

## Sticky footer 1

Muy ligera en cuanto a código, pero quizá un poco sucia por hacer uso de márgenes negativos para descontar el alto del footer. Es muy eficiente en cuanto a rendimiento pero requiere tener siempre un footer de alto fijo y esto a veces no se cumple, depende del contenido de la web

Revisa este Pen [STICKY FOOTER 1](http://codepen.io/ddsign/pen/mPyyEO/) by maría ([@ddsign](http://codepen.io/ddsign)) en [CodePen](http://codepen.io).

## Sticky footer 2

Utiliza *position:absolute* para el footer, esto puede ser una solución poco elegante. Por otra parte es una opción muy limpia porque requiere poco código, pero sigue presentando el problema del footer del alto fijo.

Revisa este Pen [STICKY FOOTER 2](http://codepen.io/ddsign/pen/dMPPOY/) by maría ([@ddsign](http://codepen.io/ddsign)) en [CodePen](http://codepen.io).

## Sticky footer 3

Utilizamos *display:table* para el contenedor y *display:table-row* para las cajas contenidas. Es una solución más compleja y algo más pesada que las anteriores pero a día de hoy todos los navegadores la soportan. Es una muy buena opción.

Revisa este Pen [STICKY FOOTER 3](http://codepen.io/ddsign/pen/RaNNKo/) by maría ([@ddsign](http://codepen.io/ddsign)) en [CodePen](http://codepen.io).

## Sticky footer 4

Variación de la segunda, pero sin definir el alto del footer. Se le da un margen inferior considerable al body para que el contenido no quede oculto por el footer, pero si el footer creciese más que el margen del body seguiríamos teniendo el mismo problema que ya hemos comentado. No es la mejor solución.

Revisa este Pen [STICKY FOOTER 4](http://codepen.io/ddsign/pen/RaNNpo/) by maría ([@ddsign](http://codepen.io/ddsign)) en [CodePen](http://codepen.io).

## Sticky footer 5

Utilizando las nuevas propiedades CSS3 flexbox, comenta [Jorge Rojo](https://www.linkedin.com/in/jorge-rojo-6567b020 "Jorge Rojo WEB ARTISAN & WEB COACH") que desde su punto de vista es la solución más correcta y completa que existe. La única pega, que los navegadores viejos no la soportan pero ante eso sólo cabe recordar el dicho *“renovarse o morir”*.

Revisa este Pen [STICKY FOOTER 5](http://codepen.io/ddsign/pen/wGBBep/) by maría ([@ddsign](http://codepen.io/ddsign)) en [CodePen](http://codepen.io).

#### COLABORADORES

-   [Jorge Rojo, el programador de los diseñadores](http://jorgerojo.com/ "Jorge Rojo, el programador de los diseñadores")
