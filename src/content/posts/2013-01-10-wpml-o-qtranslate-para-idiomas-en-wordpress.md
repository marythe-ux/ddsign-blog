---
title: "WPML o qTranslate para idiomas en WordPress"
date: 2013-01-10 15:19:07
slug: "wpml-o-qtranslate-para-idiomas-en-wordpress"
tags: ["wordpress", "plugin"]
---
Ya en mi anterior post, [Qtranslate, plugin de idiomas para WordPress](/2011/05/17/qtranslate-plugin-de-idiomas-para-wordpress/ "Qtranslate plugin de idiomas para wordpress"), os contaba acerca del plugin qTranslate.

qTranslate es con el que he trabajado, WPML no lo conozco bien. Pero sigo leyendo acerca del tema y por ejemplo en [Desarrolloweb.com](http://www.desarrolloweb.com/articulos/wpml-qtranslate.html "desarrolloweb") han publicado un artículo muy bueno comparando ambos plugins. Os recomiendo que lo leáis. Yo sí que es cierto que he tenido que añadir la etiqueta de idiomas manualmente en algunas de las plantillas de las webs en las que he utilizado qTranslate, pero no me pareció demasiado engorroso. Ya en el tema de los Custom Fields no puedo pronunciarme, porque no los tuve que utilizar.

El resumen compartivo de ambos plugins según Desarrolloweb.com es este:

## Las ventajas de usar WPML:

-   Los contenidos de las entradas en la base de datos permanecen sin modificar, por lo cual es fácil de instalar y desinstalar sin afectar a las entradas en sí.
-   Todo se traduce por defecto. Si una entrada incluye 'custom fields', se acoplan a esa entrada, asociándose con ese lenguaje.
-   Otros plugins que analizan contenidos (como los de 'posts relacionados') se mantienen funcionando correctamente.

## Las desventajas de usar WPML:

-   Arquitectura más compleja. El plugin necesita modificar muchas funciones WordPress y filtrarlas para que solo los contenidos del lenguaje elegido sean los que produzcan.
-   Necesita tablas adicionales – normalmente para mantener los grupos de traducciones.

## Las ventajas de usar qTranslate:

-   Estés donde estés, la edición es fácil de realizar.
-   Menos cosas que puedan romperse. No hay tablas adicionales y escasas cosas que modificar en WordPress.

## Las desventajas de usar qTranslate:

-   A la hora de crear contenidos multi-lenguaje, el usuario necesita insertar las etiquetas de lenguaje manualmente en todos los sitios en los que el plugin no lo hace.
-   Desinstalar puede ser complicado, ya que la base de datos necesita estar limpia de contenidos multi-lenguaje.
