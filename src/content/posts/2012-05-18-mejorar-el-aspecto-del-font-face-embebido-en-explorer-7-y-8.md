---
title: "Mejorar el aspecto del @font-face embebido en explorer 7 y 8"
date: 2012-05-18 19:25:13
slug: "mejorar-el-aspecto-del-font-face-embebido-en-explorer-7-y-8"
tags: ["css", "fuentes", "tipografía"]
---
## actualización\_

\# Tengo que decir que aunque el truco funciona bien (suaviza las fuentes) puede que haga que la página se cargue más lento.

\# Han descolgado la página a la que hago mención

Aunque embeber tipografías en nuestras webs es una buena solución para poder usar fuentes que anteriormente los diseñadores no podíamos usar en web por no ser fuentes seguras; es una gran desilusión ver que a veces estas fuentes no se renderizan demasiado bien en IE7 e IE8.

Un truco que he visto recientemente y que me alegrado muchísimo es el de [Allcreatives.net](http://allcreatives.net/2009/12/05/smoother-font-face-embedding-in-ie-7-8/ "moother-font-face-embedding-in-ie-7-8/") que hacen lo siguiente:

h2, p {
font: 36px/44px 'OldSansBlackRegular', Arial, sans-serif;
letter-spacing: 0;
filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=hIEfix.png,sizingMethod=crop);
zoom:1;
}

Le añaden un filtro especial y le adjuntan una imagen (que es trnasparente) y le ponen el zoom a 1. Está muy bien.

En la web que os he indicado podéis bajaros en ejemplo en un .zip y además ver cómo funciona en vuestro explorer.  

<div class="fuentes">

#### fuente:

  
[Allcreatives.net](http://allcreatives.net/2009/12/05/smoother-font-face-embedding-in-ie-7-8/ "moother-font-face-embedding-in-ie-7-8/")

</div>
