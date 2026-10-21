---
title: "Cómo añadir la fecha de forma dinámica a tu copyright"
date: 2012-01-17 20:20:43
slug: "como-anadir-la-fecha-de-forma-dinamica-a-tu-copyright"
tags: ["wordpress", "tutorial"]
---
Si en tu web tienes un copyright con fecha, podrías hacer que el año se actualizara de forma dinámica.

Para esto deberás añadir este código en el fichero **functions.php**

function comicpress\_copyright() {
global $wpdb;
$copyright\_dates = $wpdb->get\_results("
SELECT
YEAR(min(post\_date\_gmt)) AS firstdate,
YEAR(max(post\_date\_gmt)) AS lastdate
FROM
$wpdb->posts
WHERE
post\_status = 'publish'
");
$output = '';
if($copyright\_dates) {
$copyright = "© " . $copyright\_dates\[0\]->firstdate;
if($copyright\_dates\[0\]->firstdate != $copyright\_dates\[0\]->lastdate) {
$copyright .= '-' . $copyright\_dates\[0\]->lastdate;
}
$output = $copyright;
}
return $output;
}

Y en el php para el pie de página, **footer.php** pondríamos esto:

Esta función añadirá el siguiente texto:

© 2009 – 2010

#### fuentes

[How to Add a Dynamic Copyright Date in WordPress Footer](http://www.wpbeginner.com/wp-tutorials/how-to-add-a-dynamic-copyright-date-in-wordpress-footer/ "How to Add a Dynamic Copyright Date")
