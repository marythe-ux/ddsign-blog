---
title: "Añadir texto sobre las imágenes destacadas. (WordPress)"
date: 2012-07-31 09:30:14
slug: "anadir-texto-sobre-las-imagenes-destacadas-wordpress"
tags: ["wordpress"]
---
Seguramente habréis visto en muchos temas de WordPress cómo las imágenes destacadas pueden tener un texto sobre la imagen. Por ejemplo que el texto sobre la imagen sea la categoría del post.  
Pues en [Wplif](http://wplift.com/how-add-text-featured-images-different-scenarios) explican cómo hacerlo.

Así es para que el texto sea la **categoría del post:**

![mascotas](/wp-content/uploads/2012/07/mascotas.jpg)

cat\_name;

?>

 

Y mediante CSS se consigue que el texto de la categoría aparezca delante de la imagen porque al elemento que contiene el texto (el spam) se le da posición absoluta:

.new-wrapper span {
	background-color: black;
	color:white;
	font-size: 12px;
	position:absolute;
	bottom:0px;
	left:0px;
	padding-left:10px;
	padding: 10px;
	-moz-opacity:.80;
	filter:alpha(opacity=80);
	opacity:.80;
	width:180px;
	display: block;
}

.new-wrapper {
float:left;
position:relative;
width: 180px;
overflow:hidden;
}

#### FUENTE

[How To: Add Text over Featured Images](http://wplift.com/how-add-text-featured-images-different-scenarios "How to add text to featured images")
