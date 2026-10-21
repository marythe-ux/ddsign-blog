---
title: "Patrones de navegación móvil en diseño responsive"
date: 2014-01-19 22:53:33
slug: "patrones-de-navegacion-movil-en-diseno-responsive"
image: "/wp-content/uploads/2014/01/patrones.jpg"
tags: ["responsive", "diseño web"]
---
Una de las preguntas más frecuentes cuando nos enfrentamos a crear la navegación de la versión móvil de una web *responsive* (**RWD: responsive web design**, diseño adaptativo) suele ser cómo diseño el menú de mi web.

Los expertos recomiendan que revisemos la estructura de la web y decidamos qué enlaces realmente deben formar parte del menú principal. Podemos hacerlo siguiendo la lógica, test de usuario o seguir los datos que la analítica web nos puedan brindar (consultando Google Analytics y/o otros).

En un menú para una web que se va a consultar en el móvil también es muy importante la jerarquía de los ítems de menú. Para ordenar una navegación muy compleja hay varios métodos que se pueden seguir:

## Con acordeón (Multi-Toggle)

![navegación móvil toggle](/wp-content/uploads/2014/01/toggle.jpg) Se trata de un sistema de acordeones anidados. El usuario pulsa un acordeón "padre" que se despliega en "hijos". Incluso puede haber otro acordeón "hijo" dentro de un item. Si el usuario al pulsar abre un acordeón, cuando vuelve a pulsar, lo cierra. La jerarquía queda clara para el usuario pero si es un menú muy amplio no es cómodo abrir tantos niveles. Suele requerir el uso de [JavaScript](http://jqueryui.com/accordion/ "Accordion Jquery").

## "Ol’ Right-to-Left" Todo lo de la derecha hacia la izquierda

![Right-to-Left](/wp-content/uploads/2014/01/derecha.jpg) Los diferentes niveles de navegación aparecen de derecha a izquierda mediante una animación. Aparece un panel con las subcategorías como si viniera de la izquierda de la pantalla y para volver atrás disponemos de un botón. Este método puede resultar más elegante si nuestra navegación tiene muchos niveles. Pero no todos los móviles soportan bien este tipo de animaciones.

## ‘Skip the Sub-Nav’ Saltarse la sub-navegación

El menú incluye las entradas principales y cuando queremos ir a un subnivel nos llevan a la home donde allí ya hay acceso a las otras páginas normalmente mediante un submenú grande y desglosado en niveles. Así al usuario móvil se le dan todos los links, enlaces que igual no necesita utilizar y debe buscar entre ellos su opción.

## Priorizar

![priorizar navegación](/wp-content/uploads/2014/01/masNavegacion.jpg) Se eligen en el diseño qué ítems de menú serán los más importantes y serán los que estén disponibles, los otros se despliegan si el usuario pulsa un signo de más "+" o la palabra "más" que estará normalmente a la derecha del último ítem de menú. Cuando lo abrimos, tenemos un símbolo menos "-" o algún otro botón para poder cerrar el menú.

## "Off-canvas"

![off-canvas](/wp-content/uploads/2014/01/off-canvas.jpg) La navegación off-canvas es aquella en la que aparece la navegación en una columna que aparece de los lados de la pantalla. Es la navegación que utiliza actualmente la versión móvil de Facebook.

## Carrusel

![carrusel](/wp-content/uploads/2014/01/carrusel.jpg) Como menú utilizamos un carrusel con las diferentes categorías que vamos moviendo con los dedos hacia la derecha y hacia la izquierda.

#### Fuentes

He querido traducir y resumir el genial artículo de [Complex Navigation Patterns for Responsive Design](http://bradfrostweb.com/blog/web/complex-navigation-patterns-for-responsive-design/ "bradfrostweb.com/")
