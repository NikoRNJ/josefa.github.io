## Objetivo
Agregar un reproductor minimal para dos videos MP4 y reemplazar la imagen de “Sobre Josefa” por una imagen local coherente al portafolio.

## Implementación
- Sección nueva `#videos` debajo de “Proyectos” o antes de “Procesos creativos”.
- HTML:
  - `<video id="video-player">` con `src` inicial `VID-20251118-WA0059.mp4`.
  - Controles personalizados: play/pause, barra de progreso, tiempo, mute/volumen, fullscreen.
  - Thumbnails/playlist con dos items para cargar `VID-20251118-WA0059.mp4` y `VID-20251118-WA0060.mp4`.
- CSS:
  - Estilo minimal pastel: controles redondeados, overlay suave.
  - Responsive, `aspect-ratio: 16/9` para que se vea bien en móvil.
- JS:
  - Lógica de controles (play/pause, tiempo, progreso, volumen, fullscreen).
  - Switch de fuente por click en las miniaturas.
- Imagen “Sobre Josefa”:
  - Cambiar a una imagen local del portafolio (por ejemplo `assets/images/portfolio/page-13-img-86.jpeg`) para evitar bloqueos externos.

## Verificación
- Abrir `http://localhost:5500/` y reproducir ambos videos; probar los controles.
- Revisar responsive en móvil y desktop.

¿Confirmas para aplicar estos cambios?