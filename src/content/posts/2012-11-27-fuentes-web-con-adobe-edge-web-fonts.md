---
title: "Fuentes web con Adobe Edge Web Fonts"
date: 2012-11-27 13:30:23
slug: "fuentes-web-con-adobe-edge-web-fonts"
tags: ["css", "fuentes", "tipografía"]
---
[![Adobe Edge Web Fonts](/wp-content/uploads/2012/11/webfonts1.png)](http://html.adobe.com/edge/webfonts/)

Adobe ha lanzado recientemente una nueva familia de productos centrados en las tecnologías webs emergentes. Entre ellos destaca [Adobe Edge Web Fonts](http://www.edgefonts.com/ "Adobe Edge Web Fonts") con el cual Adobe nos ofrece la posibilidad de utilizar tipografías gratis y de open source. Este es un avance prometedor por parte de Adobe, que ayudará a facilitar el trabajo con HTML5, CSS3 y JavaScript a la hora de embeber fuentes.

Adobe Edge Web Fonts va a ampliar las opciones que hasta ahora teníamos para embeber fuentes en la web. El servicio parece ser muy cómodo dado que no requiere registro alguno, se trata de un alojamiento gratuito por parte de [Typekit](https://typekit.com/ "Typekit")

Adobe Edge Weg Fonts recuerda a la ya conocida opción de Google Fonts.

El sistema para embeber una fuente lo explican genial en thenextweb.com en su artículo [The Absolute Begginner's Guide using Adobe's new Edge Web Fonts site](http://thenextweb.com/dd/2012/10/01/the-absolute-beginners-guide-using-adobes-new-edge-web-fonts-site/ "The Absolute Begginner's Guide using Adobe's new Edge Web Fonts site") en el cual me baso para describir los pasos a seguir:  

## Elegir la tipografía

  
Primero habría que elegir una tipografía del catálogo de [Adobe Web Fonts](http://html.adobe.com/edge/webfonts/ "Adobe Edge Web Fonts"). Existe una previsualización de las fuentes, haciendo scroll vamos hasta “Preview Edge Web Fonts.”  

## Obtener el código

  
Bajo la previsualización de la fuente tipográfica seleccionada aparece el código Javascript y el CSS correspondiente

![previsualizacion](/wp-content/uploads/2012/11/previsualizacion.png)

Añadiríamos ese código al head de nuestra web:

Probando Edge Web Fonts

# Lorem ipsum dolor sit amet, consectetur adipiscing elit

Aliquam tristique libero sed risus consectetur bibendum/p>

## Preparar la CSS

Después de esto, haríamos una nueva hoja de estilos style.css y nos aseguramos de que esté enlazada, como en el ejemplo de arriba, en la mirmsa carpeta que el fichero HTML. Tendríamos algo así para indicar que los H1 han de mostrarse con la tipografía elegida.

body {
width:700px;
margin: 0 auto;
text-align: center;
}

h1 {
font-family: inconsolata, serif;
}

## Cómo usar varias de estas fuentes en mi web

Apuntan en la propia web de [Adobe Edge Web Fonts](http://www.edgefonts.com/ "Edgefonts.com") que se haría del siguiente modo. Varía la url a la que apunta esl script.

\# Dos familias tipográficas
use.edgefonts.net/averia-libre;bree-serif.js

#### fuentes:

[Adobe Edge Web Fonts](http://www.edgefonts.com/ "Adobe Edge Web Fonts")

[The Absolute Begginner's Guide using Adobe's new Edge Web Fonts site (thenextweb.com)](http://thenextweb.com/dd/2012/10/01/the-absolute-beginners-guide-using-adobes-new-edge-web-fonts-site/ "The Absolute Begginner's Guide using Adobe's new Edge Web Fonts site")

[Adobe Edge Web Fonts adding charm to words (1stwebdesigner.com)](http://www.1stwebdesigner.com/design/adobe-edge-web-fonts-adding-charm-to-words/ "Adobe Edge Web Fonts adding charm to words")
