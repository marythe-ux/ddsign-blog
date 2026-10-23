---
title: "Eliminar apariencia de los botones del iPad"
date: 2012-11-06 13:31:15
slug: "eliminar-apariencia-de-los-botones-del-ipad"
tags: ["maquetación", "css", "ipad", "diseño web"]
---
Los botones (input, button) en el iPad se muestran con bordes redondeados y sombras. Esta apariencia puede no convenirnos en el diseño de alguna web determinada. Estos estilos se pueden anular con CSS. Defiendo que no queremos utilizar la apariencia webkit (la del navegador Safari por defecto):

```css
/*eliminando la apariencia iPad de un input*/
input{
-webkit-appearance:none;
}
```

<div class="fuentes">

#### FUENTE:

[CSS Webkit Appearance (Trentwalton.com)](http://trentwalton.com/2010/07/14/css-webkit-appearance/ "CSS Webkit Appearance")

</div>
