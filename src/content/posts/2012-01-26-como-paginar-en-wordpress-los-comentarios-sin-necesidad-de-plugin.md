---
title: "Cómo paginar en wordpress los comentarios sin necesidad de plugin"
date: 2012-01-26 20:50:41
slug: "como-paginar-en-wordpress-los-comentarios-sin-necesidad-de-plugin"
tags: ["wordpress", "tutorial"]
---
Los comentarios a un post en Wordpress se pueden paginar. Wordpress desde la versión 2.7 ya incluye en el Core una función para eso, los [paginate\_comments\_links](http://codex.wordpress.org/Function_Reference/paginate_comments_links "función para paginar comentarios en wordpress"), así que si la llamamos en nuestra plantilla de comentarios (normalmente **comments.php**) podemos obtener dicha paginación:

1\. Habilitar el paginado de comentarios yendo en el panel a AJUSTES > COMENTARIOS, y marcando la casilla de “Separa los comentarios en páginas de...”. Podemos decidir cualquier número para paginar.

2\. Abriremos la plantilla **comments.php** y añadimos las siguientes líneas de código en dónde queramos que aparezcan los comentarios.

Nota: si tu estás usando las funciones *previous\_comments\_link* y *next\_comments\_link* podrías reemplazarlas por la paginación.

De modo opcional: también puedes modificar el texto que se muestra para el *Previous* y *Next links*. Por defecto se mostrarán como **« Previous** y **Next »** con las flechitas. Esto quedaría así, pero podrías modificarlo al gusto:

 '‹ Previous', 'next\_text' => 'Next ›')
); ?>

3\. A esto podemos darle el siguiente estilo CSS por ejemplo:

.pagination {
clear:both;
padding:20px 0;
position:relative;
font-size:11px;
line-height:13px;
}
 
.pagination span, .pagination a {
display:block;
float:left;
margin: 2px 2px 2px 0;
padding:6px 9px 5px 9px;
text-decoration:none;
width:auto;
color:#fff;
background: #555;
}
 
.pagination a:hover{
color:#fff;
background: #3279BB;
}
 
.pagination .current{
padding:6px 9px 5px 9px;
background: #3279BB;
color:#fff;
}

Está genial poder hacer esto sin plugin alguno. Este código lo he visto esta mañana y ya lo he probado y funciona de maravilla.

#### fuente

[Sparklette Studio](http://design.sparklette.net/teaches/how-to-add-wordpress-paged-comments-without-a-plugin/ "How to add wordpress paged comments without a plugin")
