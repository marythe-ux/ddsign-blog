---
title: "Elige sabiamente las tipografías para tu web"
date: 2012-03-02 10:30:29
slug: "elige-sabiamente-las-tipografias-para-tu-web"
tags: ["css", "fuentes", "tipografía", "diseño web"]
---
*Esta es la traducción libre del maravilloso artículo de Elliot Jay Stocks [Choose your web fonts wisely.](http://elliotjaystocks.com/blog/choose-your-web-fonts-wisely/ "Choose your web fonts wisely")*

He perdido la cuenta de cuantas veces he utilizado la frase, “ahora es un excelente momento para la tipografía en al web”, pero en medio de toda esta emoción, no podemos olvidar que hay una serie de consideraciones que debemos tener en mente cuanto seleccionamos estas preciosas nuevas tipografías para nuestros proyectos.

No creo que nunca haya hecho una comparación de tipos más rigurosa que la que estoy haciendo ahora para el rediseño de [Smashing Magazine](http://www.smashingmagazine.com/), y como comentaba en [Twitter](http://twitter.com/#!/elliotjaystocks/status/105953327229046784) el otro día, he llegado a considerar que es una importante lección que normalmente olvido:  

> "Probar las fuentes web en Windows, porque un montón de ellas se ven como la mierda."

  
Podemos fácilmente olvidarlo cuando nos vemos con un montón de opciones posibles, pero es un gran consideración.

La perspectiva más intimidante no es el simple caso de si es buena o mala, hay varias variables en juego cuando nos planteamos el tema:  

## 1\. ¿Qué adecuado es el diseño de la tipografía?

  

## 2\. ¿Qué tal es el rasterizado de la fuente?

  

## 3\. ¿Quién nos sirve la fuente?

  

## 4\. ¿Qué tamaño de fuente se va a usar?

  

## 5\. ¿En qué configuración se va a ver la tipografía?

  

## 1\. ¿Qué adecuado es el diseño de la tipografía?

  
Este es un concepto algo arbitrario y uno podría casi escribir un libro sobre esto, pero you mencionaría aquí un pqueño resumen porque es una decisión personal que también desencadena una serie de consideraciones técnicas. Es una generalización, pero cuanto más detalles tenga un tipo de letra, esta menos adecuada será para utilizarse en el cuerpo del texto. Tú podrías tener el mejor rasterizado del mundo, pero si se usa en un mal contexto, puede verse terribel. Así que en primera instancia, el diseñador web tiene la responsabilidad de escoger la tipografía apropiada para el proyecto antes de tener en cuenta consideraciones técnicas.  

## 2\. ¿Qué tal es el rasterizado de la fuente?

  
El rasterizado de las fuentes es un arte complicado, y a veces mucho sde nosotros elegimos pasárnoslos por alto. Vamos a explicar cómo es la muestra en pantalla de las fuentes, particularmente en Windows.  
Esencialmente, el renderizado es el acto de insertar las instrucciones de True Type en el fichero de una fuente, la cual necesita para Windows motoroes de render para ajustar adecuadamente la fuente a la cuadrícula de píxeles. Si me perdonas la recomendación, [Tim Brown](http://nicewebtype.com/) escribió un excelente artículo sobre El renderizado y las fuentes web para nuestro último número de [8 Faces](http://8faces.com/ "8 Faces"), donde él decía:  

>   
> "Las instrucciones de True Type son costosas, asumen tiempo y esfuerzo que requiere conocimientos específicos, paciencia y aptitudes técnicas y estéticas. Las fuentes web que tienen instrucciones True Type tienden a verse muy bien en Windows; las que no las tienen a menudo no. ([Tim Brown](http://nicewebtype.com/))."  

  
Como Tim mencionaba en su artículo, el renderizado de cada fuente web parece una especie de quimera, pero hay esperanza: el nuevo Microsoft [DirectWrite](http://msdn.microsoft.com/en-us/library/dd371554\(v=vs.85\).aspx "DirectWrite") motor de renderizado (el sucesor de ClearType) trae OS X, como renderizado a Windows y se utiliza en IE9 y está disponible como una preferencia en Firefox 4 +.

Un alternativa a utilizar las instrucciones de True Type es utilizar las [instrucciones de PostScript](http://blog.typekit.com/2011/07/26/new-from-typekit-improved-font-rendering-on-windows/ "PostScript"), las cuales funcionan algo mejor en aquellos dispositivos donde aún no usen DirectWrite.

Para ir más a fondo en la representación de las fuentes, asegúrate de leer los [excelentes artículos publicados en el blog TypeKit](http://blog.typekit.com/category/type-rendering/). También os animo a [leer este artículo un poco mayor de mi compañero de estudio de Tan Jon](http://jontangerine.com/log/2008/11/display-type-and-the-raster-wars). Sé que Jon ha estado haciendo un montón de investigaciones detalladas sobre el renderizado de las fuentes, y espero que mi mención aquí le anime a escribir un nuevo post.  

## 3\. ¿Quién nos sirve la fuente?

  
Cuando una tipografía y sus fuentes están disponibles una una serie de proveedores (Typekit, Fontdeck, Google Web Fonts, webfonts.fonts.com, WebINK, etc) tú puedes suponerte que estas son idénticas, y cuando las miras en un Mac, esto parace ser el caso. Sin embargo viéndales en un Pc sin el DirectWrite, las diferencias son palpables. De hecho, incluso si las mejoras antes mencionadas están en uso, la diferencia puede ser obvia: ¿qué pasaría si un proveedor de la fuente sirve un archivo de fuentes que emplea instrucciones PostScript y otra no? Consideremos la [LFT Etica](http://www.type-together.com/LFT%20Etica), by [Type Together](http://type-together.com/), la cual estuvimos testeando un tiempo para ser la tipografía del cuerpo del resideño de Smashing Magazine. En un mac, la versión servida por Typekit y Fontdeck se veía idética, pero examinándola en un PC podrás ver notables diferencias.

[![](http://elliotjaystocks.com/assets/4e8e011fdabe9d0765003666/articlewebfonts2400new.jpg)](http://elliotjaystocks.com/assets/4e8e011fdabe9d0765003666/articlewebfonts2400new.jpg)

Mira la minúscula 'w'. Servido a través de Fontdeck, la cúspide de sus astas cae más corta que la altura de la x, y podría ser considerado un poco extraño, sobre todo porque no es así en el diseño original. En general, sin embargo, la tipo se nota un poco más nítida que la versión TypeKit.  
Así que, ¿qué versión elegiríamos? Ambos sabemos los pros y los contras; en última instancia todo se reduce a la preferencia del diseñador web.  

## 4\. ¿Qué tamaño de fuente se va a usar?

  
Con tamaños más grandes, pasa lo contrario a nuestro ejemplo anterior: la versión TypeKit de LFT Etica Extra Bold hace un mejor trabajo de anti-aliasing de los contornos, en comparación con la versión de Fontdeck. Parece que está usando PostScript para lograr este objetivo, especialmente en lo que el zoom sobre la captura de pantalla muestra en escala de grises (bidireccional) anti-aliasing.

[![](http://elliotjaystocks.com/assets/4e8e0123dabe9d0c51001059/articlewebfonts3400new.jpg)](http://elliotjaystocks.com/assets/4e8e0123dabe9d0c51001059/articlewebfonts3400new.jpg)

Así que de nuevo debemos preguntarnos a nosotros mismos qué versión escoger. Y de nuevo debemos concluir que vendrá dado por las preferencias del diseñador. No existe la respuesta correcta.  

## 5\. ¿En qué configuración se va a ver la tipografía?

  
Hemos estado hablando de ello a lo largo de este post, pero, técnicamente, la configuración real del sistema de cada usuario es la última etapa en el proceso de la "experiencia tipo": la elección del diseñador de la tipografía, la calidad de la fuente original archivo, la versión que se sirve a través de una red de distribución, y el tamaño (s) en la que se representa el tipo de letra son, en última instancia, a la merced de la configuración del usuario.

Cada una de las etapas previas a esto forma parte de un plan a prueba de fallos para obtener la mejor tipografía posible, pero lamentablemente no podemos predecir …

\- el sistema operativo  
\- el navegador  
\- la resolución de pantalla, su tamaño por defecto para las fuenes, su tipo de pantalla  
\- la potencia de su ordenador  
\- el entorno en donde lo esté utilzando (ordeanor de mesa en una oficina o teléfono móvil a la luz del sol)  
\- y numerosos y personales ajustes de preferencias en su navegador.
