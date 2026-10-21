---
title: "A la búsqueda del captcha perfecto"
date: 2015-08-13 08:37:50
slug: "a-la-busqueda-del-captcha-perfecto"
image: "/wp-content/uploads/2015/08/captcharoboto.png"
tags: ["accesibilidad", "móvil", "diseño web"]
---
## ¿Qué es un captcha?

[![captcharoboto](/wp-content/uploads/2015/08/captcharoboto.png)](/wp-content/uploads/2015/08/captcharoboto.png)

**Captcha o CAPTCHA** son las siglas de *Completely Automated Public Turing test to tell Computers and Humans Apart* (prueba de Turing completamente automática y pública para diferenciar computadoras de humanos). Este test es controlado por una máquina, en lugar de por un humano como en la [prueba de Turing](https://es.wikipedia.org/wiki/Test_de_Turing "Test de Turing"). Por ello, consiste en una prueba de Turing a la inversa. [(Wikipedia)](https://es.wikipedia.org/wiki/Captcha "Wikipedia Captcha")

O sea que un *captcha* es un test para determinar si el qué está interactuando con nuestro contenido (normalmente un formulario) es un humano. Se utilizan para evitar que *robots* nos envíen spam o estropeen nuestros foros.

El captcha más típico se trataba de mostrarnos una imagen distorsionada con un campo de formulario a su lado para introducir la solución.

[![killcaptcha-1](/wp-content/uploads/2015/08/killcaptcha-1.jpg)](/wp-content/uploads/2015/08/killcaptcha-1.jpg)

Sin embargo los captchas de este estilo pueden resultar inaccesibles por parte de usuarios con deficiencias visuales o auditivas dado que algunos lectores de pantalla no los interpretan bien.

También es cierto que los diseñadores web tampoco son muy amantes de los captchas, dado que estos suelen romper el diseño y la estética global de una página web.

## Captchas inaccesibles

Los captchas resultan normalmente inaccesibles como recalca [Sergio Luján Mora](< http://accesibilidadweb.dlsi.ua.es/?menu=que-es-un-captcha-problemas-accesibilidad> "Captcha accesible")

> Desgraciadamente, los captchas que normalmente se emplean presentan problemas de accesibilidad para algunos grupos de usuarios. En concreto, los captcha bloquean el acceso a muchos usuarios que padecen algún tipo de discapacidad. Las personas con visión reducida, como pueden ser los daltónicos que tienen dificultades para distinguir algunas combinaciones de colores o las personas que usan magnificadores de pantalla para ampliar el tamaño de lo que se visualiza en una pantalla pueden tener graves problemas para distinguir el texto que se muestra en un captcha. Por otro lado, es evidente que las personas ciegas que utilizan un lector de pantalla no pueden contestar los captcha basados en imágenes con texto en su interior, ya que estas imágenes no pueden incluir en el atributo "alt" de la etiqueta  el texto que aparece escrito en los captcha, ya que entonces un ordenador también lo podría leer y podría pasar la prueba. Además, las personas con algún tipo de discapacidad cognitiva o intelectual como la dislexia, también pueden tener problemas a la hora de interpretar el texto que contiene un captcha.

## Tipos de captcha

### Operaciones matemáticas

La utilización de problemas de matemáticas simples como "3 + 4 =?" como una alternativa al captcha de imagen puede tener la ventaja de que estos captchas puedan ser interpretados por lectores de pantalla. Aunque también pueden existir robots capaces de solucionar este tipo de problemas.

  

### Juegos

Minijuegos que el usuario ha de resolver, por ejemplo [FunCAPTCHA](https://www.funcaptcha.com/ "Funcaptcha"). Estos juegos son relativamente fáciles para una persona y más difíciles en el caso de un spambot. Son una alternativa errónea si pensamos en el caso de los discapacitados visuales.

[SweetCaptcha](http://sweetcaptcha.com/ "Sweetcaptcha") sería otro captcha que utiliza sencillos juegos para verificar la presencia humana.

[![sweet](/wp-content/uploads/2015/08/sweet.png)](http://sweetcaptcha.com/)

  

### Verificación de un mensaje

Se trata de una confirmación mediante número de teléfono o envío de email.

  

### Timing

Algunos desarrolladores han llegado a conclusiones diferentes a los clásicos captchas. Uno de ellos que no requiere nada de los usuarios humanos, debido al estudio de su comportamiento. Han concluido que como seres humanos, por lo general nos lleva unos pocos segundos o minutos para completar la mayoría de los formularios de la Web, cuando un spambot lo cubriría instantáneamente. Este método es ideal para el usuario, ya que no requiere nada extra de ellos, pero también es relativamente fácil para los spammers para reconfigurar sus robots con un retraso para evitar que actuen demasiado rápido.

  

### Honey Pot

Otra medida de seguridad que no requiere un paso de verificación adicional es el llamado "Honey Pot". Este método intenta engañar a los spambots porque utiliza un campo de formulario que está oculto mediante CSS (el humano no lo vería y el robot sí), normalmente ese trata de un campo de "email"

Tampoco es una solución perfecta porque puede que haya usuarios que no tengan activado el CSS en su navegador o que utilicen opciones de autocompletado.

  

### No CAPTCHA reCAPTCHA

*No CAPTCHA reCAPTCHA* es el utilizado en Google. Se basa en la medición de los datos de navegación del usuario. A este se le ofrece un check box para responder a la afirmación "No soy un un robot".

<div class="embed"><iframe width="560" height="315" src="https://www.youtube.com/embed/jwslDn3ImM0" frameborder="0" allowfullscreen=""></iframe></div>

De todos modos, en ocasiones puede hacernos más pregunta mostrándonos una serie de imágenes para etiquetar. Esta solución además es apta para móvil.  
[![turkey_captcha](/wp-content/uploads/2015/08/turkey_captcha.png)](http://googleonlinesecurity.blogspot.com.es/2014/12/are-you-robot-introducing-no-captcha.html)

#### FUENTES

-   [Use It Better: Eight Alternatives to the Hated Captcha (Scientific American)](http://www.scientificamerican.com/article/pogue-8-alternatives-to-hated-captcha/ "scientificamerican.com")
-   [5 CAPTCHA alternatives to replace your least favorite security tool](http://www.dailydot.com/technology/end-captcha-security-top-five-alternatives/ "5 Captchas")
-   [5 alternatives to CAPTCHA that won’t baffle or frustrate users](http://www.experienceux.co.uk/ux-blog/2014/03/19/5-alternatives-to-captcha-that-wont-baffle-or-frustrate-users/ "Captcha that won't frustate")
-   [9 CAPTCHA Alternatives That Won’t Wreck Your UX](http://www.dtelepathy.com/blog/design/captcha-alternatives-better-ux "Better UX Captchas")
-   [CAPTCHA Reworked| reCAPTCHA Easier and Mobile Friendly](https://blog.quadranet.com/captcha-reworked-recaptcha-easier-and-mobile-friendly/ "Mobile Friendly Captcha")
-   [Alternative to captchas (W3C)](http://www.w3.org/TR/turingtest/ "Captcha W3C")
