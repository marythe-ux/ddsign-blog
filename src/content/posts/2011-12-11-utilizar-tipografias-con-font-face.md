---
title: "Utilizar tipografías con @font-face"
date: 2011-12-11 22:55:11
slug: "utilizar-tipografias-con-font-face"
tags: ["css", "fuentes", "tipografía", "tutorial", "diseño web"]
---
#Post actualizado a 15 de noviembre

@font-face es un método mediante el cual podrías utilizar, en teoría, cualquier fuente tipografía en un sitio web. Este método consiste en subir al servidor el fichero de la fuente (embeber).

No podemos embeber una tipografía de la cual no tengamos los derechos.

## CSS para embeber una fuente

Esta es la declaración en nuestra hoja de estilos, se le da un nombre para la fuente (en este caso 'MyWebFont') y después se dan las rutas a los ficheros de cada formato:

@font-face {
	font-family: 'MyWebFont';
	src: url('webfont.eot'); /\* IE9 \*/
	src: url('webfont.eot?#iefix') format('embedded-opentype'), /\* IE6-IE8 \*/
	     url('webfont.woff') format('woff'), /\* Navegadores Modernos \*/
	     url('webfont.ttf')  format('truetype'), /\* Safari, Android, iOS \*/
	     url('webfont.svg#svgFontName') format('svg'); /\* iOS \*/
	}

Después en el estilo que se quiera utilizar esta fuente se hace así;

p.texto{ font-family: 'MyWebFont', 'Arial Narrow', sans-serif; }

## Formatos de las fuentes y su transformación

A la hora de embeber una fuente hay que tener el cuenta las diferentes características de los navegadores:

-   Internet Explorer sólo soporta EOT
-   Mozilla soporta tanto OTF como TTF
-   Safari y Opera funcionan cons OTF, TTF y SVG
-   Chrome soporta TTF y SVG.
-   Además, los navegadores móviles como Safari en el iPad y en el iPhone requieren SVG.

Por todo esto cuando embebemos una fuente, si queremos que esta se comporte bien en la mayoría de los navegadores, debemos asegurarnos de que podemos obtener todos los formatos necesarios. Los formatos también se pueden transformar.

Existen conversores online muy potentes como por ejemplo el de [Font Squirrel.](http://www.fontsquirrel.com/fontface/generator "Font Squirrel font-face generator") o [CodeAndMore](http://fontface.codeandmore.com/)

Video sobre @font-face

<iframe src="https://www.screenr.com/embed/aid" width="550" height="335" frameborder="0"></iframe>

#### Fuentes y más información

[Using @font-face (CSS Tricks)](http://css-tricks.com/snippets/css/using-font-face/) [Embeber fuentes en tu sitio web, la guía definitiva (El Webmaster)](http://www.elwebmaster.com/general/embeber-fuentes-en-tu-sitio-web-la-guia-definitiva) [Font-face Guide (Six REvisions)](http://sixrevisions.com/css/font-face-guide/) [CodeAndMore](http://fontface.codeandmore.com/)
