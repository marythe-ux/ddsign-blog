---
title: "Añadir imágenes aleatorias en Wordpress (random images)"
date: 2011-08-10 16:12:23
slug: "imagenes-aleatorias-random-en-wordpress"
tags: ["wordpress", "plugin", "tutorial"]
---
En el blog de [Ma.tt](http://ma.tt/scripts/randomimage/) explican cómo implementar imágenes aleatorias en cualquier parte de tu tema de Wordpress.  
Por ejemplo, si añadiésemos un bloque de imágenes aleatorias para nuestra cabecera, cada vez que entrásemos en nuestra web veríamos una imagen diferente.  

## Cómo usar

  
Para la instalación más simple posible, simplemente introduce este código en un directorio con las imágenes que desea girar, y lo llaman como si fuera una imagen normal, por ejemplo:

![A Random Image](/dropbox/2003/rotate/rotate.php)

El código que se debe modificar es el de aquí abajo, corresponde a un fichero php que deberá ser subido a la misma carpeta en la que tengáis las imágenes que queréis utilizar. Si las imágenes están en el mismo directorio la variable $folder deberá quedar vacía (como en el ejemplo), si estuviera en otro (por ejemplo dentro de la carpeta en la que hemos subido el fichero php creamos otra carpeta llamada "seccion") deberíamos indicar: $folder='seccion'  

## El código

  

 http://photomatt.net
Inspired by Dan Benjamin > http://hiveware.com/imagerotator.php
Latest version always at:

http://photomatt.net/scripts/randomimage

\*/// Make this the relative path to the images, like "../img" or "random/images/".
// If the images are in the same directory, leave it blank.
$folder = '';

// Space seperated list of extensions, you probably won't have to change this.
$exts = 'jpg jpeg png gif';

$files = array(); $i = -1; // Initialize some variables
if ('' == $folder) $folder = './';

$handle = opendir($folder);
$exts = explode(' ', $exts);
while (false !== ($file = readdir($handle))) {
foreach($exts as $ext) { // for each extension check the extension
if (preg\_match('/\\.'.$ext.'$/i', $file, $test)) { // faster than ereg, case insensitive
$files\[\] = $file; // it's good
++$i;
}
}
}
closedir($handle); // We're not using it anymore
mt\_srand((double)microtime()\*1000000); // seed for PHP < 4.2
$rand = mt\_rand(0, $i); // $i was incremented as we went along

header('Location: '.$folder.$files\[$rand\]); // Voila!
?>

## Crear otro bloque más de imágenes aleatorias

Imaginemos que con el ejemplo anterior hayamos creado un bloque de imágenes aleatorias para nuestro index.php o home.php, la página que primero se carga de nuestra web. Si quisiéramos tener otro bloque diferente en una de las secciones de nuestra web, deberíamos duplicar el fichero php, llamarle de otro modo y modificar $folder si nos hiciera falta.

![A Random Image](/dropbox/2003/rotate/rotate-seccion.php)

Existen plugins de wordpress para añadir imágenes aleatorias a nuestra cabecera, pero al menos yo no vi ninguno que dejara crearlas para cualquier sección de nuestra web, por eso me ha gustado mucho este código que nos da bastante libertad.  

<div class="fuentes">

#### FUENTES

  
[Ma.tt](http://ma.tt/scripts/randomimage/ "Matt")

</div>
