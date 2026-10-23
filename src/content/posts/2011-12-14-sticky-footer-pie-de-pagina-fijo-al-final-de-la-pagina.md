---
title: "Sticky footer, pie de página fijo al final de la página"
date: 2011-12-14 21:22:47
slug: "sticky-footer-pie-de-pagina-fijo-al-final-de-la-pagina"
tags: ["maquetación", "css", "html", "tutorial"]
---
#Post actualizado>> [Sticky footer. Buenas prácticas.](/2016/02/29/sticky-footer-buenas-practicas/ "Sticky footer. Buenas prácticas.")

Un **pie de página fijo** *(sticky footer)* es muy útil a la hora de maquetar webs que pensemos que tengan páginas con poco contenido. Es una buena solución para que el pie permanezca en el fondo de la página, si no éste estaría más arriba (en función del contenido) y el resultado visual quizá sea menos estético.

Esto se puede resolver sólo con HTML y CSS.  

## Cómo lograr un pie de página fijo sólo con HTML y CSS.

El primer paso es crear un div contenedor, en este caso #container en el que estén todos los elementos de la web excepto el div del pie, #footer:

```html
<div id="container">
      <div id="header">Header</div>
      <div id="nav">
         <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
         </ul>
         </div>
	<div id="content">Content Here.</div>
</div><!—End Container—>
<div id="footer">Footer Here.</div>
```

Ahora que ya está el layout principal empezamos a darle estilos CSS al html y al body, para darles una altura del 100% :

```css
html, body {    
   height: 100%; 
}
```

Lo siguiente es darle al div #container un posicionamiento relativo y una altura mínima del 100%, después darle de margin-bottom los mismos píxeles pero en negativo de lo que vaya a medir el pie (#footer).

```css
#container {
   min-height: 100%;
   margin-bottom: -330px;
   position: relative;
}
```

Ahora vamos con la CSS para el pie. También tiene posicionamiento relativo y la altura que queramos (que tiene que ser en positivo los píxeles del margin-bottom del #container):

```css
#footer {
   height: 330px;
   position: relative;
}
```

Para separar bien el pie (#footer) del contenedor (#container) ponemos un div más al que llamaremos clearfooter, una capa que se coloca ante del ciere del div #container:

```html
<div id="container">
      <div id="header">Header</div>
      <div id="nav">
         <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
        </ul>
        </div>
	<div id="content">Content Here.</div>
   <div class="clearfooter"></div>
</div><!—End Container—>
<div id="footer">Footer Here.</div>
```

El CSS para esta capa tiene un clear:both y de altura lo mismo que mida el pie:

```css
.clearfooter {
   height: 330px;
   clear: both;
}
```

Este código funcionará en la mayoría de los navegadores modernos. Para explorer 6 se puede hacer el siguiente hack.  
Colocamos la condicional para la CSS de ie6 en el head:

```html
<!—[if lt IE 7]>
   <link rel="stylesheet" type="text/css" href="ie6.css" />
<![endif]—>
```

Y en ese archivo ie6.css ponemos:

```css
#container {
   height: 100%;
}
```

Se puede ver la [DEMO](http://fortysevenmedia.com/blog/archives/making_your_footer_stay_put_with_css "Making your footer stay put with CSS") en el tutorial original de [FortySeven Media](http://fortysevenmedia.com/ "FortySeven Media").

<div class="fuentes">

#### FUENTE

[Making your footer stay put with CSS](http://fortysevenmedia.com/blog/archives/making_your_footer_stay_put_with_css "Makin your footer stay put with CSS")

</div>
