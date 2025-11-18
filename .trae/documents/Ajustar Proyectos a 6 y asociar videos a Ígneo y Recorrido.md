## Objetivo
Dejar exactamente 6 proyectos: Sincretismo Latinoamericano, Ígneo, Recorrido Cíclico, Gǎibiàn, Joyas Contemporáneas y Joya del Pacífico. Integrar el primer video en Ígneo y el segundo en Recorrido Cíclico dentro del carrusel de Proyectos.

## Cambios en datos
- `data/portfolio.json`:
  - Remover “Mención en Revista YA!”.
  - Añadir “Gǎibiàn” (categoría: Concepto/Patrón) con imágenes del PDF (página 7).
  - Agregar campo opcional `video` por proyecto:
    - Ígneo → `VID-20251118-WA0059.mp4`
    - Recorrido Cíclico → `VID-20251118-WA0060.mp4`

## Render del carrusel de Proyectos
- `js/main.js` (bloque `proj-slider`):
  - Si un proyecto tiene `video`, renderizar el `<video>` en el bloque principal (izquierda) con controles nativos minimal (sin reemplazar el reproductor global), `poster` tomado de la primera imagen del proyecto.
  - Mantener tres imágenes laterales; si falta alguna, usar repetición/fallback.
  - Conservar dots y navegación prev/next como ahora.

## Estilo
- `css/styles.css`:
  - Estilos mínimos para `<video>` en `.proj-main` con `aspect-ratio: 16/9`, borde redondeado y mismo look que las imágenes.

## Verificación
- Confirmar que el carrusel muestre 6 slides y que Ígneo y Recorrido tengan su video en el panel principal.
- Revisar responsive móvil/desktop y que la navegación/dots funcionen.

¿Confirmas para aplicar estos cambios en los archivos indicados?