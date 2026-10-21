---
title: "Cómo eliminar el aspecto dentado de la tipografía en nuestra web (ClearType)"
date: 2012-02-19 18:11:03
slug: "como-eliminar-el-aspecto-dentado-de-la-tipografia-en-nuestra-web-cleartype"
tags: ["css", "fuentes", "tipografía", "tutorial"]
---
Cuando diseñamos webs cada vez deseamos poder usar los nuevos efectos que el CSS3 nos permite. Esto puede convertirse en un reto sobre todo si no queremos utilizar JavaScript o queremos intentar que nuestro código sea compatible con la mayoría de los navegadores. Existe un gran problema con Internet Explorer (IE) en el caso de los efectos para bloques de texto.

Es el caso del truco de la opacidad o transparencia para Internet Explorer 6, existe un filtro que funciona muy bien pero no lo hará si el usuario tiene el [ClearType](http://es.wikipedia.org/wiki/ClearType "ClearType") desactivado en su equipo.

#badAntiAliasing {
	opacity: 0.5;

        /\* IE 8 \*/
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=50)";

        /\* IE 6,7 \*/
	filter: progid:DXImageTransform.Microsoft.Alpha(opacity=50);

}

Esto se nota mucho más si se intenta hacer para textos en los que se esté usando el font-face para embeber tipografías menos corrientes. Esto se puede solucionar utilizando el siguiente truco:  
  
El truco se trata de una solución útil que hará que las fuentes se vean bien cuando se utiliza font-face y no muestren ese feo aspecto dentado. Esto es utilizando el filtro de color de fondo y el de la opacidad:

body.ie6 #goodAntiAliasing,
body.ie7 #goodAntiAliasing,
body.ie8 #goodAntiAliasing {
	background-color: white;
}

#goodAntiAliasing {
	opacity: 0.5;

        /\* IE 8: yes, it is ugly but it has to be on one line. :-( \*/
        -ms-filter: "progid:DXImageTransform.Microsoft.Chroma(color='white') progid:DXImageTransform.Microsoft.Alpha(opacity=50)";

        /\* IE 6,7 is more flexible: it can be on multiple lines. \*/
	filter: progid:DXImageTransform.Microsoft.Chroma(color='white')
                progid:DXImageTransform.Microsoft.Alpha(opacity=50);

}

Te recomiendo leer mi post posterior sobre este tema, porque me convence más esta solución: [Mejorar el aspecto del @font-face embebido en IE7 e IE8](/2012/05/18/mejorar-el-aspecto-del-font-face-embebido-en-explorer-7-y-8/)

#### fuente:

[How to make cleartype font face and css visual filters play nicely together](http://www.useragentman.com/blog/2010/09/02/how-to-make-cleartype-font-face-fonts-and-css-visual-filters-play-nicely-together/)
