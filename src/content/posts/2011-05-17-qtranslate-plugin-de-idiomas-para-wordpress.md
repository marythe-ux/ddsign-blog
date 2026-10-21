---
title: "Qtranslate, plugin de idiomas para Wordpress"
date: 2011-05-17 19:45:34
slug: "qtranslate-plugin-de-idiomas-para-wordpress"
tags: ["wordpress", "plugin"]
---
Hace algunos meses me encontré en la necesidad de buscar un buen plugin de idiomas para Wordpress como alternativa a [WPML](http://wpml.org/). WPML se ha hecho de pago y entonces esta opción me interesaba mucho menos.  

## Otros plugins de Wordpress para multi-idioma

  
Busqué soluciones en internet y pregunté en foros por [otros plugins para idiomas](http://xyberneticos.com/index.php/2009/11/12/5-plugins-wordpress-para-construir-un-sitio-web-multilenguaje/).

Decían, por ejemplo en Xybernéticos que WPML era el más poderoso pero como esta opción yo quería descartarla, me fijé en las otras que mencionaban:  

  
-   [qTranslate](http://www.qianqin.de/qtranslate/)
  
-   ZdMultiLang
  
-   xLanguage
  
-   Language Switcher WordPress Plugin
  

  
  
Y lo que comentaban de qTranslate me fue interesando:  

> Es otro plugin de idiomas múltiples de gran alcance. Tiene ventajas sobre WPML porque permite a los usuarios agregar nuevos idiomas al sistema a través de la página de configuración, algo que en WPML es mucho más complejo. En términos de estructura de la URL, qTranslate ofrece tres modos para hacer de su URL y SEO algo simple.

  
Seguí leyendo sobre él y fue del que mejor hablaban y del que mayor soporte técnico encontré: tanto en el [foro oficial del plugin](http://www.qianqin.de/qtranslate/forum/), en [sus preguntas frecuentes](http://www.qianqin.de/qtranslate/forum/viewtopic.php?f=3&t=3) y así como en blogs, foros sobre wordpress. Al final lo he probado y por lo de ahora me gusta mucho.

En el panel de Wordpress cada entrada es una sola y los idiomas están divididos por pestañas. Si una pestaña la dejas vacía, ese texto no existiría en el otro idioma. Podrías hacer la misma o diferentes versiones del texto para cada idioma. A mí me parece que el contenido es fácil de administrar.

También se pueden traducir las etiquetas, las categorías, etc. El contenido de las funciones del wordpress se traducen mediante los archivos de idiomas del mismo. Si algún idioma no viene incorporado se le puede añadir su archivo correspondiente.

Con qTranslate tendrías por defecto inglés, alemán y chino. Pero como comentaba puedes añadir los idiomas que necesites siempre y cuando consigas el fichero .mo de los textos de Wordpress traducidos. Habría que subir estos últimos en la carpeta de idiomas (/wp-content/languages). Al instalar este nuevo idioma es importante que su nombre local coincida con el nombre del fichero instalado para que el plugin pueda reconocerlo automáticamente. La verdad es que hasta puedes subir el icono de la *banderita* de ese idioma extra que hayas incorporado. (Queda genial en el panel, todo organizado).

También se puede, si hace falta, editar texto en el PHP utilizando diferentes etiquetas para las diversas entradas de idiomas, por ejemplo puede que esto te haga falta a la hora de traducir los textos de algunos botones:
