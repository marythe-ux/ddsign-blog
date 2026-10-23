---
title: "Crear más de un menú en tu tema WordPress"
date: 2013-04-22 20:09:40
slug: "crear-mas-de-un-menu-en-tu-tema-wordpress"
image: "/wp-content/uploads/2013/04/varios_menus.jpg"
tags: ["wordpress", "themes", "tutorial"]
---
Puede hacernos falta tener más de un menú en nuestro tema de WordPress, por ejemplo un menú principal con unos ítems y con una apariencia y posición concretas. También un menú en el pie de la web, con otros enlaces diferentes y otra apariencia distinta

Para crearlos seguimos los siguientes pasos:

## Añadir los menús al tema

En **functions.php** registrarías los dos menús, sobre todo para añadir el menú adicional, en este caso un menú para el pie (footer)

```
register_nav_menus( array (
'primary'=>__( 'main', 'twentytwelve' )));
'secondary'=>__( 'pie', 'twentytwelve' )));
```

## Llamar a estos menús

En las plantillas del tema podrías llamar a estos menús, por ejemplo en el **header.php** vamos a llamar al menú principal (el primary). También le estoy asignando una *class* a este menú, la class nav-menu:

```php
<nav>
<?php wp_nav_menu( array( 'theme_location' => 'primary', 
'menu_class' => 'nav-menu' ) ); ?>
</nav>
```

Y en la página de **footer.php**, donde construyo el pie, llamo al menú secundario (secondary):

```php
<footer>
<nav>
 <?php wp_nav_menu( array( 'theme_location' => 'secondary', 
'menu_class' => 'foot-menu' ) ); ?>
 </nav>
</footer>
```

## Construir los menús

[![menus](/wp-content/uploads/2013/04/menus.jpg)](/wp-content/uploads/2013/04/menus.jpg) Dentro del panel de control irías a Apariencia > Menús y verás que tienes dos pestañas a la derecha para construir allí cada menú y a la izquierda tienes un desplegable para indicar qué menú corresponde a cada zona:
