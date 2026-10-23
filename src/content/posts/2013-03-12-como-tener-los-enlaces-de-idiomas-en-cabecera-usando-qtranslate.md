---
title: "Cómo tener los enlaces de idiomas en cabecera usando qTranslate"
date: 2013-03-12 20:22:46
slug: "como-tener-los-enlaces-de-idiomas-en-cabecera-usando-qtranslate"
tags: ["wordpress", "plugin"]
---
[qTranslate](http://wordpress.org/extend/plugins/qtranslate/ "plugin qTranslate") es un buen plugin para idiomas en WordPress como ya os contaba anteriormente en [QTranslate, plugin de idiomas para WordPress](/2011/05/17/qtranslate-plugin-de-idiomas-para-wordpress/ "Qtranslate plugin de idiomas para WordPress"). Para mí sigue siendo el más cómodo.

Cuando instalamos qTranslate en nuestro tema WordPress lo que hacemos intuitivamente es obtener los enlaces a cada idioma mediante un widget. Sin embargo no suele ser lo más efectivo, dado que el widget ha de ser colocado en un sidebar o similar. Ya sea por usabilidad o por convención, normalmente lo que nos apetece es tener los enlaces de idiomas en el header (cabecera) de nuestra web.

Podemos hacerlo copiando el siguiente código en nuestro **header.php** (la plantilla que escribe el código de la cabecera)

```php
<?php echo qtrans_generateLanguageSelectCode('image'); ?>
```

Con el código anterior conseguiríamos mostrar las banderitas de los idiomas que hayamos seleccionado. Si queremos que muestre el icono de la bandera y el texto debemos entonces poner el siguiente código:

```php
<?php echo qtrans_generateLanguageSelectCode('both'); ?>
```

Si preferimos sólo el texto, sin iconos:

```php
<?php echo qtrans_generateLanguageSelectCode('text'); ?>
```

Y ya si queremos que se muestre un desplegable:

```php
<?php echo qtrans_generateLanguageSelectCode('dropdown'); ?>
```

Si te apetece profundizar más sobre este tema pásate por las FAQS de la documentación de [qTranslate](http://www.qianqin.de/qtranslate/forum/viewtopic.php?f=3&t=3&p=16#p16 "Faqs qTranslate")
