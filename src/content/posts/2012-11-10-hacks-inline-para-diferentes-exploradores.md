---
title: "Hacks inline para diferentes exploradores"
date: 2012-11-10 14:28:15
slug: "hacks-inline-para-diferentes-exploradores"
tags: ["css", "tutorial", "hacks"]
---
Hacks para Internet Explorer

/\* para IE6 \*/
\*html .someClass {color:red}
/\* para IE7 \*/
\*:first-child + html .someClass {color:red}
/\* para IE7 CSS \*/
.someElement {
color:blue; /\* all browsers \*/
\*color:red
}
/\* inline IE8 CSS \*/
.someElement {
color:crimson; /\* all browsers \*/
color:black\\0/; /\* IE 8 & 9 \*/
}
/\* IE9 CSS \*/
:root .someElement { color:green\\0/IE9; } /\* IE9 \*/

Hacks para Firefox:

/\* FireFox 3 y syuperiores \*/
html>/\*\*/body .someClass, x:-moz-any-link, x:default {left:1em !important}

Hacks para Chrome y Safari

body:nth-of-type(1) div.caja {
background: blue;
}

  

  

#### FUENTES:

  
[ww.fix-css.com](http://www.fix-css.com/cheat-sheets/css-hacks/)
