---
title: "Añadir una imagen destacada a tu tema Wordpress"
date: 2011-06-14 22:00:07
slug: "anadir-una-imagen-destacada-a-tu-tema-wordpress"
tags: ["wordpress", "tutorial"]
---
[![imagen_destacada](/wp-content/uploads/2011/06/imagen_destacada1.png)](/wp-content/uploads/2011/06/imagen_destacada1.png)En WordPress podemos utilizar imágenes destacadas para ilustrar un post.

Las imágenes destacadas (*featured images*) existen en WordPress desde la versión 2.9, así que para usarlas no se necesita ninguna clase de plugin extra. Muchos temas ya las tienen habilitadas y otros no. Para habilitar las imágenes destacadas simplemente hay que abrir el fichero *functions.php* y pegar este código:

add\_theme\_support ('post-thumbnails');
set\_post\_thumbnail\_size(115, 115)

  
  
La primera línea le dice a WordPress que habilite las imágenes destacadas. La segunda le pasa el tamaño por defecto para esas imágenes.

Una vez que hayas hecho esto, al editar una entrada verás en tu panel de control en la columna de la derecha una casilla de imágenes destacadas.

La única cosa que queda por hacer para que se muestren es editar el fichero de las entradas, o bien *index.php* o bien *loop.php* dependiendo de tu tema, añadiendo este código donde quieras que se muestre la imagen destacada.

<div class="fuentes">

#### Fuentes

Extraído y traducido de Smashing Magazine: [Better Image Management with WordPress](http://wp.smashingmagazine.com/2011/05/26/better-image-management-practices-with-wordpress/#more-83357)

</div>
