---
title: "Crear fuentes de iconos (icon fonts) con icomoon"
date: 2015-06-22 17:09:26
slug: "crear-fuentes-de-iconos-icon-fonts-con-icomoon"
image: "/wp-content/uploads/2015/06/ICONFONT.png"
tags: ["css", "fuentes", "iconos", "diseño web"]
---
[Icomoon.io](https://icomoon.io/ "Icomoon") es una herramienta que nos ayuda a gestionar y crear [icon fonts](/2015/05/08/bienvenidos-icon-fonts/ "qué son las icon-fonts?"). Icomoon ofrece bibliotecas de fuentes de uso libre y también nos permite combinar las diferentes fuentes y también nos da la oportunidad de crear y modificar nuestra propia fuente de iconos.

## Crear nuestra propia fuente de icon fonts

El proceso es bastante sencillo. Primero hemos de crear nuestros iconos vectoriales y guardarlos con extensión .SVG. Hay que tener en cuenta que los iconos tienen que estar todos como contorno, la aplicación no reconoce las líneas, los filetes. Tienen que estar en una misma capa y la app sólo reconocerá un color. (Mejor los haremos monocromos) Después vamos a la [aplicación de icomoon](https://icomoon.io/app/#/select "app icomoon") y presionamos el botón "import icons" y con él añadimos a la aplicación todos los iconos SVG que queramos. Estos se verán en pantalla y podemos seleccionarlos y bajo la pantalla daremos a "Generate" y posteriormente a "Generate Font" y podremos descargar nuestra fuente. [![iconfonts](/wp-content/uploads/2015/06/IMPORT.png)](/wp-content/uploads/2015/06/IMPORT.png)

## Añadir más iconos a nuestra tipografía

El archivo que nos hemos bajamos contendrá tanto la fuente, como una simulación en html para verla en ejecución. También incluye un fichero JSON que debemos conservar porque cuando queramos añadir más iconos a nuestra fuente, si importamos primero este fichero .json contendrá la información (las fuentes y el orden que se ha usado en la CSS generada) de nuestra tipografía. Esto es útil porque si somos usuario free de la app de Iconmoon no podemos guardar nuestra sesión. [![crear iconfonts](/wp-content/uploads/2015/06/ICONFONT.png)](/wp-content/uploads/2015/06/ICONFONT.png)
