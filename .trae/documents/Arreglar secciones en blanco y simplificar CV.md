## Objetivo
Solucionar elementos no visibles entre las secciones de “Moda” y “Valores”, y eliminar el enlace al PDF en Currículum.

## Diagnóstico y Fix
- Moda (split-banner):
  - Reemplazar fondos remotos por imágenes locales (`destinos-inspiran/*`) para evitar bloqueos y secciones “en blanco”.
  - Actualizar textos y CTA: “Editorial y prêt-à-porter” y “Joyería conceptual”, enlazando a `#proyectos` y `#proceso`.
- Spacing/visibilidad:
  - Verificar `z-index`/overlay y `min-height` de `.split` para que el contenido se vea.
  - Mantener `reveal/in-view` pero garantizar que el contenido siempre sea legible.
- Currículum:
  - Quitar el botón “Ver PDF” y dejar solo CV compacto.

## Cambios en archivos
- `index.html`: actualizar la sección `#moda` (títulos, descripciones, imágenes locales, CTAs) y eliminar botón del PDF en `#cv`.
- `css/styles.css`: asegurar contraste de `split-content` y fallback de fondo (color suave) si la imagen no carga.

## Verificación
- Abrir `http://localhost:5500/` y comprobar que “Moda” muestra contenido (sin huecos) y que el CV ya no ofrece abrir PDF.

¿Confirmas para aplicar estos cambios ahora?