---
title: "Diseño de tablas en móviles. Posibles soluciones"
date: 2015-01-15 10:02:52
slug: "tablas-en-moviles-posibles-soluciones"
image: "/wp-content/uploads/2015/01/soluciones_tablas.jpg"
tags: ["usabilidad", "tutorial", "responsive", "móvil", "diseño web"]
---
Las tablas son un elemento frecuentemente usado en diseño para mostrar comparaciones de datos. No hay demasiado problema para visualizar tablas actualmente en nuestras resoluciones de pantalla de sobremesa ("desktop") pero esto puede presentar un problema al verlas en las pantallas de los móviles donde el espacio es menor.  
¿Qué soluciones de layout podemos tomar para visualizar tablas en pantallas móviles?  

## Tablas en pantallas móviles

  

### Scroll, scroll, scroll

  
Una solución puede ser dejar la tabla a un buen tamaño y que en pantalla se vean las columnas que quepan. El usuario podría hacer scroll lateral sobre la tabla para ir viendo las diferentes columnas.  

### Tabla apilada (*stacket table*)

  
Otra opción es convertir esta tabla en otro tipo de visualización, una tabla apilada. Los datos se agrupan en módulos apilados. Cada grupo replicaría los títulos de la cabecera a la izquierda y tendría a la derecha los datos para esa categoría. El usuario tiene que desplazarse hacia arriba y hacia abajo para ver diferentes conjuntos de datos.

[![apilada](/wp-content/uploads/2015/01/apilada.jpg)](/wp-content/uploads/2015/01/apilada.jpg)

[Ejemplo de tabla apilada](http://filamentgroup.github.io/tablesaw/demo/stack.html)  

### Vista de dos columnas mejoradas

  
Dos columnas de datos se muestran al mismo tiempo. El usuario puede hacer scroll lateral con los dedos para ver otras columnas.  
Los datos se dividen en columnas que pueden ser eliminadas de forma individual con un toque en un botón de cierre que aparece en los encabezados de cada columna. Esto permite poder eliminar elementos no deseados.  
Es importante asegurarse de que la fila de cabeceras son siempre visibles, se pueden programar de modo que sea un elemento fijo.  
Incorporaremos una columna más a la derecha como un contenedor verticalmente desplazable donde se listarían todas las categorías disponibles. Al tocar una de estas categorías se agregaría una columna más a la tabla con este nuevo elemento.

[![mejorada](/wp-content/uploads/2015/01/mejorada.jpg)](/wp-content/uploads/2015/01/mejorada.jpg)

Esta solución la he visto en [Foolproof.](http://www.foolproof.co.uk/thinking/making-product-comparison-work-on-mobile/ "foolproof")  

### Tabla con filtros

  
Una buena solución puede ser la aportada por [Tablesaw](https://github.com/filamentgroup/tablesaw "Tablesaw").  
Se presenta la tabla con varias columnas (las que quepan en el layout), las que se estima que son los datos más importantes en la comparación. Y en una posición destacada antes de la tabla habilitaremos un filtro para el usuario para que pulsándolo pueda añadir o eliminar columnas a la tabla.

[![filtro](/wp-content/uploads/2015/01/filtro.jpg)](/wp-content/uploads/2015/01/filtro.jpg)  

  

#### FUENTES

  

  
-   [Filamentgroup](https://github.com/filamentgroup/tablesaw "Tablesaw")
  
-   [Foolproof](http://www.foolproof.co.uk/thinking/making-product-comparison-work-on-mobile "Foolproof")
