---
title: "Personalizar la miniatura de compartir en facebook nuestra web"
date: 2012-11-25 22:28:51
slug: "personalizar-la-miniatura-de-compartir-en-facebook-nuestra-web"
image: "/wp-content/uploads/2012/11/miniatura.jpg"
tags: ["social media"]
---
![imagen compartir en facebook](/wp-content/uploads/2012/11/share.png)

Para controlar que se muestre una imagen concreta en Facebook cuando nuestra web es compartida haremos lo siguiente:  

  
-   Preparamos la imagen deseada, ha de ser cuadrada de 90x90 píxels. Facebook soporta los formatos JPG, PNG y GIF
  
-   Colocamos en el head de la web el siguiente código. La url es la ruta a la imagen que hemos subido previamente a nuestro servidor.
  

```html
<meta property="og:image"content="http://site.com/path/sharedimage.png" />
```

Con todo esto cuando añadan la dirección de nuestra web a Facebook saldrá acompañada de esa imagen.  

<div class="fuentes">

#### fuente:

  
[Capstrat](http://www.capstrat.com/insights/blog/facebook-share-thumbnail-image/ "Capstrat")

</div>
