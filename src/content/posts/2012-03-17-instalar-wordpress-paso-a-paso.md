---
title: "Instalar wordpress paso a paso"
date: 2012-03-17 11:35:00
slug: "instalar-wordpress-paso-a-paso"
tags: ["wordpress", "themes"]
---
¿Tienes un dominio propio y quieres instalar Wordpress en él para crear tu propia página web o blog? La instalación de Wordpress es un proceso bastante sencillo y rápido.

## Preparar la base de datos

Para instalar wordpress deberás primero crear una base de datos en tu hosting donde se almacenará toda la información de tu wordpress. Cada hosting puede variar pero lo más frecuente es que vayas a crear la base de datos desde PHPmyAdmin. Para usar esta herramienta deberás tener un nombre de usuario y una clave para poder entrar.

Para crear la base de datos debes nombrar esta nueva base de datos, darle a "Crear" (o botón equivalente) y después de ser creada deberás anotar los cuatro datos que te harán falta a la hora de crear tu futuro wordpress:

-   Nombre de esta nueva base de datos MySQL
-   Usuario de acceso a la base de datos
-   Password para esta base de datos
-   Nombre del host

## Descargarse los archivos de wordpress.org

Después deberás bajarte los ficheros de Wordpress.org, existen en Español, así que es más recomendable optar por bajártelos en tu propio idioma desde la página de descarga oficial: [es.wordpress.org](http://es.wordpress.org/ "Wordpress en español").

Una vez bajada esta carpeta a tu ordenador, deberás buscar un archivo llamado **p-config-sample.php** y renombrarlo como **config.php**. Hay que editar este archivo con la información que has guardado anteriormente de tu base de datos (nombre de BD, usuario, contraseña).

[![config](/wp-content/uploads/2012/03/config.png)](/wp-content/uploads/2012/03/config.png)

## Subiendo los archivos vía FTP

Una vez que tienes el config.php listo, deberías subir vía FTP todo el contenido de la carpeta Wordpress que te has bajado, pero sin la carpeta. Es decir subimos todos los ficheros a nuestro dominio. A la carpeta raíz si lo que quieres es que el wordpress aparezca nada más introducir tu dirección o dentro de una carpeta.

a) www.midominio.com (subirías todos los archivos de wordpress en la carpeta raíz)  
b)www.midominio.com/blog (subirías todos los archivos a tu dominio a una carpeta que previamente hayas creado y llamado "blog")

Para subir todo por FTP deberás primero obtener los datos de FTP de tu hosting y también tener un buen cliente de FTP.

Los datos que te harán falta para configurar el FTP son:

-   Nombre del servidor FTP: suele tener una forma como ftp.tudominio.com
-   Usuario: tu nombre de usuario.
-   Password: tu palabra de clave

Clientes FTP hay muchos, y muchos son gratuitos. A mí me gusta [FileZilla](http://filezilla-project.org/ "Filezilla"), pero puedes utilizar cualquiera.

## Instalando Wordpress

Una vez todos los ficheros han sido subidos al servidor (tarda un ratito), deberás escribir en tu navegador el nombre de tu dominio (o dominio/carpeta si es que lo has instalado en una carpeta) seguido de **wp-admin/install.php**

Es decir:

**http://tudominio.com/wp-admin/install.php**

Te saldrá un pantalla dónde te pedirán los datos del nombre que quieras para tu blog o web, el email de administrador (a este email será dónde te lleguen todos los avisos y notificaciones de tu web/blog wordpress), y si quieres que tu blog sea visible enseguida para los buscadores debes dejar el check activado.

Después de este paso ya te saldría la caja de login y podrías entrar en tu blog. La siguiente vez que quieras acceder al login escribirás el nombre de tu domino seguido de wp-admin:

Es decir:

**http://tudominio.com/wp-admin**

Y ya está.

## Cómo instalar un tema personalizado

Si has creado un tema wordpress a tu gusto que quieras instalar, deberás subirlo por FTP. Los temas se suben a una carpeta llamada themes que está dentro de la carpeta wp-content. Primero subirías la carpeta del tema a esa ubicación y después ya desde el panel de control irías a Apariencia > Temas y verás la miniatura de este nuevo tema en cuestión y lo seleccionas. El tema ya estará instalado.
