---
title: "Textos con sombras con text-shadow"
date: 2012-01-01 21:50:20
slug: "textos-con-sombras-con-text-shadow"
tags: ["css", "html", "tutorial"]
---
En CSS3 existe una propiedad llamada **"text-shadow"** que permite añadir una sombra a cada letra de un texto. En su forma más simple, sería así:

```
h3 {text-shadow: 0.1em 0.1em #333}
```

El código anterior le está dando este estilo de sombra al texto de un H3. El primer valor es para mover la sombra (con respecto al texto) en el eje X, es decir, un poco a la derecha (0.1em) y el segundo, desplaza la sombra en el eje Y, en este caso hacia abajo (0.1em), el último valor es para el color de esta sombra(#333). De este modo la sombra sería nítida.

Quedaría así:

[![shadow1](/wp-content/uploads/2012/01/shadow1.png)](/wp-content/uploads/2012/01/shadow1.png)

Podemos crear un efecto de sombra borrosa. Para esto la cantidad de imprecisión se da como otro desplazamiento. Cuanto mayor sea el desplazamiento (tercer valor, 0.2em) más borrosa será esta sombra.

```
h3 {text-shadow: 0.1em 0.1em 0.2em #333}
```

Quedaría así:

[![shadow2](/wp-content/uploads/2012/01/shadow2.png)](/wp-content/uploads/2012/01/shadow2.png)

Es posible poner más de una sombra.

```
h3{text-shadow: -1px -1px white, 1px 1px #333}
```

Le pasamos varias declaraciones separadas por comas: desplazamiento en X + desplazamiento en Y + color, desplazamiento en X + desplazamiento en Y + color.

Quedaría así:

[![shadow3](/wp-content/uploads/2012/01/shadow3.png)](/wp-content/uploads/2012/01/shadow3.png)

Si nos resultara complicado o quisiéramos ver una simulación previa de cómo va a quedar, existen herramientas online muy útiles par esto. Una de ellas es la que nos proporciona [Westciv](http://www.westciv.com/tools/shadows/ "Simulador text-shadow"). Mediante un panel donde introducimos los valores para los colores de la sombras y los desplazamientos en el eje X e Y vemos que tal nos va a quedar y además nos da la declaración CSS que debemos utilizar.

[![simulador](/wp-content/uploads/2012/01/simulador.jpg)](/wp-content/uploads/2012/01/simulador.jpg)

**ADVERTENCIA:** Text-shadow no funciona en explorer 7, este navegador ignoraría la declaración sin más.

<div class="fuentes">

#### Más sobre text-shadow:

[W3C en español, text-shadow](http://www.spanish-translator-services.com/espanol/t/007/text-shadow.html "text-shadwo") [CSSBlog, propiedad text-shadow](http://www.cssblog.es/css-text-shadow-propiedad/ "text-shadow (CSSBlog)") [Herramienta simuladora de text-shadow](http://www.westciv.com/tools/shadows/ "Herramienta simuladora de text-shadow") [Crear efectos de sombras como en photoshop con text-shadow](http://www.css3.info/preview/text-shadow/ "Text-shadow, Photoshop like effects using CSS")

</div>
