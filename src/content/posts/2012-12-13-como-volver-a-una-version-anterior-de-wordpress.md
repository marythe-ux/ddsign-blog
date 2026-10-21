---
title: "Cómo volver a una versión anterior de WordPress"
date: 2012-12-13 10:21:59
slug: "como-volver-a-una-version-anterior-de-wordpress"
tags: ["wordpress", "tutorial"]
---
Imagínate que actualizas tu WordPress a la última versión y tienes algún conflicto, por ejemplo que los plugins que tenías instalados no funcionan bien con esta versión de WordPress o incluso generan algún conflicto.

No te preocupes, puedes volver a instalar una versión anterior de WordPress mientras esperas que dichos plugins actualicen sus versiones (o buscas algún plugin sustituto).

*Por desgracia esto me ha pasado y he tenido que cambiar el plugin que utilizo para introducir ejemplos de código fuente.*

## Pues para instalar una versión de WordPress anterior haríamos lo siguiente:

-   Ir al [listado de Versiones de Wordpress.org](http://es.wordpress.org/releases/#older "Versiones anteriores de WordPress") en español
-   Bajarse la versión que nos interese
-   De nuestra web/blog bajarnos una copia de respaldo de las bases de datos
-   Vía FTP vamos a sustituir todos los archivos y carpetas excepto el **wp-config.php**, el **.htaccess** y la carpeta de **wp-content**
-   Después de eso entras en tu dirección url seguido de /wp-admin y sigues los pasos que te recomienda Wordpress

Visto lo visto... cuando salga una nueva versión de Wordpress tenemos que revisar bien si nuestros plugins ya están actualizados para funcionar correctamente con ella.

Resulta conveniente leer la documentación del propio WordPress acerca de ["Actualizar WordPress"](http://codex.wordpress.org/es:Actualizar_WordPress "Actualizar WordPress")
