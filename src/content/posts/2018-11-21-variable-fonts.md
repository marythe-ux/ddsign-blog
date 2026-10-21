---
title: "Variable Fonts, la nueva revolución tipográfica"
date: 2018-11-21 19:34:20
slug: "variable-fonts"
image: "/wp-content/uploads/2018/11/variablefonts.jpg"
tags: ["usabilidad", "css", "diseño", "diseño web", "fuentes", "tutorial", "responsive"]
---
## ¿Qué son las Variable Fonts?

**Variable Fonts** son la nueva revolución en lo tocante a diseño tipográfico. Han sido desarrolladas por un grupo de expertos de Apple, Google, Microsoft y Adobe. Se empezaron a dar a conocer en eventos mundiales como por ejemplo TYPO Labs. En la presentación de Underware nos ilustran bastante sobre el tema:

<div class="embed"><iframe width="560" height="315" src="https://www.youtube.com/embed/eZiP_TIa96g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div>

> Con las “Variable Fonts” cada fuente está en todos los pesos y variables de la misma Familia. Un poder alucinante.

Entonces, ¿qué diablos es una Variable Font? Digamos que una Variable Font es como si tuviéramos todas las variaciones de una familia tipográfica en un único archivo de fuente. ¿Te das cuenta de lo que esto supone? ¡¡Guau!!

Con las “Variable Fonts” cada fuente está en todos los pesos y variables de la misma Familia. Un poder alucinante.

El tipógrafo puede incluir dentro del código condiciones diversas para que la tipografía se adapte a determinadas circunstancias. Además de que se trata de un solo archivo, solo una carga en el sistema.

Son fuentes que podrían adaptarse prácticamente a todo y tanto diseñadores como programadores encontramos en ellas nuevos retos y ventajas en ellas.Y los usuarios van a disfrutarlas.

No me refiero solo a las variaciones físicas de una tipografía como puedan ser grosor, anchura o inclinación sino adaptaciones como variar el contraste según las circunstancias lumínicas; cambiar de color según el fondo de la interfaz; llegar a cambiar de estilo en función de la temática del mensaje o personalizarse según el tipo de usuario. Las posibilidades son inmensas. También admiten transiciones y animaciones CSS con y sin JS.

En este vídeo se puede ver la demostración de cómo adaptar las fuentes según el reconocimiento facial:

<div class="embed"><iframe width="560" height="315" src="https://www.youtube.com/embed/MhIUPLTzlQY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div>

## Demos de Variable Fonts

-   [Axispraxis](https://www.axis-praxis.org/specimens/__DEFAULT__)
-   [Microsoft Edge Demos \\ Variable Fonts](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/variable-fonts/)
-   [Weird things variable fonts can do. (CSS-Tricks)](https://css-tricks.com/weird-things-variable-fonts-can-do/)

## Dónde descargo Variables Fonts

En la web [Variable Fonts (beta)](https://v-fonts.com/) y algunos autores te las ofrecen en sus Github o webs, como es el caso de [Christop Koeberlin](http://koe.berlin/variablefont/).

## HTML y CSS Markup de Variable Fonts

Antes de nada tened en cuenta que es algo nuevo, así que hemos de consultar [Can I Use - Variable Fonts](https://caniuse.com/#search=variable%20fonts) para ver restricciones de las propiedades y según los navegadores. (Ya sabéis que siempre que sale algo nuevo tenemos la misma cruz… así que paciencia).

### Propiedades

Esto lo explica genial Mustafa Kurtuldu en [Web Fundamentals](https://developers.google.com/web/fundamentals/design-and-ux/typography/variable-fonts/). Visitadla si necesitáis más profundidad.

Las fuentes se componen de diferentes ejes y sus correspondientes valores en CSS son estos:

  

<table style="border: 1px solid yellow; width:100%; padding:10px;"><tbody><tr><td>Weight</td><td>wght</td></tr><tr><td>Width</td><td>wdth</td></tr><tr><td>Slant</td><td>slnt</td></tr><tr><td>Optical Size</td><td>opsz</td></tr><tr><td>Italics</td><td>ital</td></tr><tr><td>Grade</td><td>GRAD</td></tr></tbody></table>

-   weight – lo controla la propiedad CSS font-weight, con un valor que va desde 1 a 999.
-   width – lo controla la propiedad CSS font-stretch, pudiéndose transformar en cualquiera de los dos ejes.
-   optical size – se usa para variar el diseño para adaptarse a diferentes tamaños de texto.
-   slant – lo controla la propiedad CSS font-style. Por defecto, está a 20 grados, pero puede variar entre -90 grados y 90 grados.
-   italic – se logra cuando establece propiedad CSS font-style como italic.

### Cómo se declara la fuente

Se declara la fuente:

@font-face {
  font-family: 'AmstelvarAlpha';
  src: url('../fonts/AmstelvarAlpha-VF.ttf');
}

Este sería un ejemplo de como usar una de las propiedades CSS:  

#font-amstelvar {
  font-family: 'AmstelvarAlpha';
  font-variation-settings: 'wdth' 400, 'wght' 98;
}

Y así se hace un fallback por si el sistema no soporta la Variable Font.  

@supports (font-variations-settings: 'wdth' 200) {
  @font-face {
    /\* https://github.com/TypeNetwork/Amstelvar \*/
    font-family: AmstelvarAlpha;
    src: url('../fonts/AmstelvarAlpha-VF.ttf');
    font-weight: normal;
    font-style: normal;
  }

  #font-amstelvar {
    font-family: AmstelvarAlpha;
    font-variation-settings: 'wdth' 400, 'wght' 98;
  }
}

## Software de diseño y prototipado con Variable font

Por lo que yo he visto, ya lo incluyen las nuevas versiones de Adobe Illustrator CS y Adobe Photoshop CC. Sketch pienso que no, al menos por lo de ahora, pero se muestran interesados en saber para qué y cómo las queremos usar.

> Ok, thanks! Actually, I just wanted to experiment with them [https://t.co/e9GI5ZVYfS](https://t.co/e9GI5ZVYfS)
> 
> — María Rey (@oyonarteweb) [22 de noviembre de 2018](https://twitter.com/oyonarteweb/status/1065597036320489474?ref_src=twsrc%5Etfw)

## ¿Te apetece ser tester de Variable Fonts?

Mientras me documentaba para escribir este post encontré que en [Monotype](https://www.monotype.com/resources/articles/variable-fonts-making-the-promise-a-reality/) piden voluntarios que se ofrezcan a testear las próximas fuentes que están desarrollando. Si estás interesado puedes escribirles a [@TrueTyper](https://twitter.com/truetyper) #VariableFonts

## El futuro

Pues pienso que las Variable Font van a dar mucha guerra y mucha satisfacción. Abren un mundo nuevo de posibilidades. ¡Gracias y bienvenidas!

#### FUENTES Y RELACIONADOS

-   [Vídeo: TYPO labs 2017](https://graffica.info/typolabs-2017-variable-fonts/)
-   [Variable Fonts presente y futuro. (Silo Creativo)](https://www.silocreativo.com/variable-fonts-presente-futuro-tipografia-1/)
-   [Vídeo: dotCSS 2017 - Laurence Penney - Variable fonts: a million times the possibilities.](https://youtu.be/63Uv_VC7nbY)
-   [User Interfaces for Variable Fonts (A list Apart)](https://alistapart.com/article/user-interfaces-for-variable-fonts)
-   [Tutorial: The Future of Web Fonts looks Awesome](https://youtu.be/ZXx_U7SsZeg)
-   [Casos de estudio. Underware.](https://www.underware.nl/case-studies/)
