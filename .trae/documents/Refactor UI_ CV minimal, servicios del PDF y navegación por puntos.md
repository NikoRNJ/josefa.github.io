## Objetivo

Pulir el sitio para Josefa: CV minimal y comprimido, rellenar el vacío entre inicio y valores, servicios basados en el PDF, ajustar marcas/colaboraciones, rediseñar navegación de “Destinos” con puntos y adaptar secciones (reemplazar Blog por Reconocimientos, FAQ contextual) y eliminar newsletter.

## Cambios propuestos

* Index

  * Currículum: sección compacta con tarjetas pequeñas (Educación, Habilidades, Herramientas, Reconocimientos, Contacto rápido) y sin enlace al PDF.

  * Relleno del vacío: reordenar y/o añadir “Servicios” antes de “Valores”, ajustar espaciados (`section` y `hero`) para que no queden huecos.

  * Servicios: textos derivados del PDF (Editorial/Prêt-à-porter/Joyería conceptual).

  * Marcas/Colaboraciones: reemplazar chips por “Mathilda Tinkler”, “Miss Continental 2025”, “Revista YA!”.

  * Destinos: ocultar scrollbar y añadir dots centrados: un punto central más grande, dos laterales medianos, y el primero y último como los más pequeños. Actualización dinámica al navegar.

  * Notas y recursos → Reconocimientos y publicaciones (contenido del PDF: Pasarela D y Revista YA!).

  * FAQ: preguntas/answers relacionadas al portafolio (Ígneo, Recorrido cíclico, joyería, procesos, contacto).

  * Eliminar Newsletter.

* CSS

  * Estilos para CV minimal (grid compacto, tipografía y `clamp`), ocultar scrollbars en slider y estilos de dots con distintas escalas.

* JS

  * Lógica de dots para “Destinos”: calcular tamaños según índice (centro grande; vecinos medianos; extremos pequeños), sincronizado con prev/next y swipe.

  * Render de Reconocimientos desde `data/portfolio.json`.

* Data

  * Extender `data/portfolio.json` con `servicios` y `reconocimientos` basados en el contenido extraído.

## Verificación

* Móvil y desktop: revisar huecos y espaciados, dots en “Destinos”, carrusel y lightbox, CV compacto.

¿Confirmas para aplicar estos cambios en `index.html`, `css/styles.css`, `js/main.js` y `data/portfolio.json`?
