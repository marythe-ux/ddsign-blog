---
title: "Integrar tus últimos tweets en tu blog sin utilizar un plugin"
date: 2011-12-28 20:46:49
slug: "ultimos-tweets-sin-plugin"
tags: ["jquery", "wordpress", "css", "html", "tutorial"]
---
Me interesaba integrar mis últimos tweets en mi blog sin utilizar un plugin para poder tener mayor control sobre este elemento e intentar recargar menos mi wordpress.

Así que me pareció muy buena la opción de cargarlo con jQuery y después darle formato con HTML y CSS.

## JAVASCRIPT JQUERY

Haremos dos llamadas javascript que se pueden colocar en cualquier parte de la página pero es recomendable ponerlo justo antes de cerrar la etiqueta BODY para que se vaya cargando la web primero (si Twitter tuviera un retraso).

```html
<script type="text/javascript" src="http://twitter.com/javascripts/blogger.js"></script><script type="text/javascript" src="http://twitter.com/statuses/user_timeline/username.json?callback=twitterCallback2&count=1"></script>
```

Se debe sustituir “username” por tu usuario de twitter. También podemos cambiar count=1 por otra cantidad, esto sería cuántos tweets quieres mostrar.  

## EL HTML

  
En nuestra web dónde queramos mostrar los *últimos tweets* colocamos esta línea de HTML.

```html
<div id="twitter_div"><ul id="twitter_update_list"><li> </li></ul></div>
```

Tendremos en cuenta que el código javascript reemplazará ese código con los tweets. Y al final quedará algo así:

```html
<ul id="twitter_update_list">
	<li>
        <span>Ddsign - Moodboards, pasos previos para el diseño de una web <a href="http://t.co/7AkA5WpI">http://t.co/7AkA5WpI</a></span>
        <a href="http://twitter.com/oyonarteweb/statuses/229954348254363648" style="font-size: 85%;">2 days ago</a>
       </li>
</ul>
```

Estas etiquetas son las que tendremos que tener en cuenta a la hora de de darle estilos CSS. Finalmente lo que tendremos sera una lista **&lt;ul>** donde cada tweet es un **&lt;li>**.  

## EL CSS

  
Lo dicho, teniendo en cuenta el HTML resultante le podemos dar estilo a cada tweet, a los enlaces, a la fecha, etc. Dejo como ejemplo el CSS que he utilizado yo en Ddsign.

```css
#twitter_update_list {
font-size:13px;
line-height:150%;
list-style: none;
}
#twitter_update_list li {
float:left;
padding:9px 0;
background-image:url(images/bg_shadow.png);
background-repeat:repeat-x;
background-position:0 0;
}
#twitter_update_list li:hover{
background-color:#F7F7F7;}
#twitter_update_list span {
color:#333333;
text-decoration:none;
float:left;
display:inline;
width:100%;
clear:both;
background-image:url(images/tweet.png);
background-repeat:no-repeat;
background-position:0 -100px;
padding-left:20px;
}
#twitter_update_list span:hover{
background-position:0 0;}
#twitter_update_list span a {
color:#8c7c3d;
text-decoration: none;
margin-left:0px !important;
}
#twitter_update_list span a:hover {
color:#000000;
text-decoration: none;
}
#twitter_update_list a {
color:#888888;
margin-left:20px;
}

#twitter_update_list a:hover{
color:#8c7c3d;
text-decoration:none;
}
```

## MOSTRAR LOS SEGUIDORES

También quería mostrar los **seguidores** (*followers*) de mi cuenta Twitter. Así que para eso hice lo siguiente:

Insertar esta lí­nea para llamar a la librerí­a jQuery

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>{/code} Con el siguiente código se obtiene el dato, tu número de seguidores en Twitter. Cambia “username” por tu nombre de usuario. {code type=codetype}<script type="text/javascript">// <![CDATA[
  $(function(){     $.ajax({         url: 'http://api.twitter.com/1/users/show.json',         data: {screen_name: 'username'},         dataType: 'jsonp',         success: function(data) {             $('#followers').html(data.followers_count);         }     }); });
// ]]></script>
```

Hay que poner un div con el id followers donde queramos mostrar el número de seguidores y podrías darle los estilos CSS que quieras:

```html
<strong>Username</strong> tiene <span id="followers"></span> seguidores en Twitter.
```

<div class="fuentes">

#### fuentes

[Display your tweets without a plugin (kristarella.com)](http://www.kristarella.com/2009/01/display-your-tweets-without-a-plugin/) [Mostrar los followers de Twitter con jQuery (http://ceslava.com)](http://ceslava.com/blog/mostrar-los-followers-de-twitter-con-jquery/)

</div>
