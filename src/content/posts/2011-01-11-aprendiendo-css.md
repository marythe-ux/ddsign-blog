---
title: "Aprendiendo CSS"
date: 2011-01-11 10:03:11
slug: "aprendiendo-css"
tags: ["maquetación", "css", "html", "w3c", "tutorial"]
---
## Introducción: ¿qué es CSS?

**CSS, Hojas de Estilo en Cascada** (Cascading Style Sheets), es un mecanismo simple que describe cómo se va a mostrar un documento en la pantalla, o cómo se va a imprimir, o incluso cómo va a ser pronunciada la información presente en ese documento a través de un dispositivo de lectura. Esta forma de descripción de estilos ofrece a los desarrolladores el control total sobre estilo y formato de sus documentos.

CSS se utiliza para dar estilo a documentos HTML y XML, separando el contenido de la presentación. Los Estilos definen la forma de mostrar los elementos HTML y XML. CSS permite a los desarrolladores Web controlar el estilo y el formato de múltiples páginas Web al mismo tiempo. Cualquier cambio en el estilo marcado para un elemento en la CSS afectará a todas las páginas vinculadas a esa CSS en las que aparezca ese elemento.  
  
Podéis ampliar esta información en [la Guía Breve de CSS del W3C](http://www.w3c.es/Divulgacion/GuiasReferencia/CSS21/ "Guía breve sobre CSS, W3C") (de dónde he recogido estos párrafos introductorios)

La última [guía actualizada de CSS2 es la de diciembre 2010](http://www.w3.org/TR/CSS2/), pero está en inglés y no he encontrado su traducción al castellano. Actualmente se está trabajando ya en CSS3 pero todavía no es un código estandarizado para todos los navegadores, pero es el futuro. Sin embargo para iniciarse en CSS es recomendable primero entender el CSS2.

Esta [Guía de CSS del W3C en español](http://html.conclase.net/w3c/css1-es.html#herencia) no está actualizada pero puede servirnos como recurso para los temas más básicos.  

## Consejos para empezar

  
El tutorial oficial más completo para comenzar con CSS se encuentra en inglés, [Tutorial CSS del W3C](http://www.w3schools.com/css/default.asp "CSS Tutorial W3C") sin embargo en castellano tenemos una buena guía de referencia, [Guía de Referencia CSS2](http://www.w3c.es/Divulgacion/GuiasReferencia/CSS21/#sintaxis); contiene explicaciones y un área de ejercicios dónde practicar.

Otro tutorial bastante completo es el de [HTML Dog](http://www.htmldog.com/ "tutoriales de html y css").  

### Entender la potencia del CSS

  
Creo que es muy bueno visitar la web de [CSS Zen Garden](http://www.csszengarden.com/) para entender la potencia del CSS. En esta web vemos claramente como con las hojas de estilo en cascada cambiamos la apariencia de una web, siempre el HTML es el mismo; el contenido (html) está separado del diseño (CSS). Es un ejercicio buenísimo para principiantes bajarse estos ejemplos, examinarlos y tratar de replicarlos sin mirar y después comprobar las CSS originales.  

### Sintaxis y herencia

  
Para iniciarse en CSS hay que entender la sintaxis de este lenguaje.

[![sintaxis CSS](/wp-content/uploads/2011/01/sintaxis.png)](/wp-content/uploads/2011/01/sintaxis.png)

### Los id y los class

Recomiendo encarecidamente comprender la diferencia entre un ID (#nombre) y una CLASS (.nombre). Un ID no se puede repetir en un mismo documento y una class sí se puede.

El selector ID se utiliza para especificar un estilo para un único elemento. Se define con un "#".

El selector class selector se usa para especificar estilos para un grupo de elementos. Es frecuente utilizarlo para varios elementos dentro del documento. Se define con ".".  

### Listas, float

  
Una vez nos hemos hecho con la sintaxis del CSS los temas que debemos después aprender son las listas y flotar elementos.

Los mejores tutoriales que he visto sobre listas y float son los de [CSS.Maxdesign](http://www.maxdesign.com.au/css/ "tutoriales css"): Listutorial, Listamatic, Floatutorial.
