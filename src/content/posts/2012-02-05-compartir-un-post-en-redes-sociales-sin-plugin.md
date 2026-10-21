---
title: "Compartir un post en redes sociales sin plugin"
date: 2012-02-05 20:52:29
slug: "compartir-un-post-en-redes-sociales-sin-plugin"
tags: ["wordpress", "plugin", "social media", "tutorial"]
---
Existen un gran número de plugins para compartir un post en redes sociales que funcionan maravillosamente y que además nos permiten compartir nuestros artículos con muchas redes sociales.  A mí, sin embargo, me interesa poder realizar esta función sin utilizar plugins, tengo el blog más ligero y así me es más sencillo darle estilos a la posición de estos elementos y a la apariencia de los iconos. Por lo de ahora voy a dejar que mis artículos se compartan directamente en Twitter, Facebook y Linkedin.  
  
Para esto habrá que colocar el enlace a cada red en la página PHP que te interese. En mi caso sólo me interesa en la **single.php** que es donde se encuentran mis entradas íntegras (en la **index.php** no quiero porque muchos de mis post los pliego y me gusta creer que los artículos son agregados a redes cuando se han leído enteros).

Hay que transformar la URL que estas redes utilizan normalmente para agregar contenidos:  

## Compartir en Twitter

  
Si miras en la barra de estado de tu navegador mientras estás sobre un botón de compartir en Twitter ves que el enlace es algo así:

http://twitter.com/home?status=

Y después de la palabra "status" suelen poner el texto que se comparte. En mi caso quiero pasar el título de la entrada, el enlace a mi entrada y el nombre de mi blog.  Así que escribo lo siguiente (NOMBRE DE MI BLOG + TÍTULO ENTRADA + ENLACE ENTRADA):

[Compartir en Twitter](<http://twitter.com/home?status= Ddsign - \<?php the_title\(\); ?\> \<?php echo get_permalink\(\) ?\>> "compartir en twitter")

## Compartir en Facebook

Para compartir una entrada en Facebook el enlace que se usa es este:

[Compartir en facebook](<http://facebook.com/sharer/sharer.php?u=\<?php echo get_permalink\(\) ?\>> "compartir en facebook")

## Compartir en Linkedin

Para una entrada con Linkedin, he encontrado unas pistas de cómo se construye en enlace en [W3cGallery.com](http://www.w3cgallery.com/w3c-blog/other-help/how-to-add-linkedin-share-link-on-blogwebsite) y lo he transformado así para pasar el enlace, el título y el nombre de mi blog:

[Compartir en Linkedin](<http://www.linkedin.com/shareArticle?mini=true&url=\<?php echo get_permalink\(\) ?\>&title=\<?php the_title\(\); ?\>&source=Ddsign> "compartir en linkedin")
