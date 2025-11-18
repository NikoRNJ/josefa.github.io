## Objetivo
Dejar exactamente 6 proyectos y que cada uno muestre 4 fotos (del PDF). Integrar videos en 3 proyectos: mover el primer video a Sincretismo Latinoamericano (renombrado desde Ígneo), el segundo a Recorrido Cíclico y proponer un tercero (temporalmente reutilizar el primero hasta que nos proporciones otro).

## Selección de imágenes (del PDF extraído)
- Sincretismo Latinoamericano (renombra Ígneo):
  - assets/images/portfolio/page-5-img-544.png
  - assets/images/portfolio/page-2-img-394.jpeg
  - assets/images/portfolio/page-2-img-397.jpeg
  - assets/images/portfolio/page-10-img-71.png
  - video: VID-20251118-WA0059.mp4
- Recorrido Cíclico:
  - assets/images/portfolio/page-13-img-86.jpeg
  - assets/images/portfolio/page-13-img-85.png
  - assets/images/portfolio/page-13-img-599.png
  - assets/images/portfolio/page-12-img-463.png
  - video: VID-20251118-WA0060.mp4
- Gǎibiàn:
  - assets/images/portfolio/page-7-img-56.png
  - assets/images/portfolio/page-6-img-50.png
  - assets/images/portfolio/page-6-img-51.png
  - assets/images/portfolio/page-6-img-52.png
- Joyas Contemporáneas:
  - assets/images/portfolio/page-17-img-134.jpeg
  - assets/images/portfolio/page-17-img-133.png
  - assets/images/portfolio/page-17-img-135.png
  - assets/images/portfolio/page-17-img-632.png
- Joya del Pacífico:
  - assets/images/portfolio/page-21-img-151.png
  - assets/images/portfolio/page-21-img-152.png
  - assets/images/portfolio/page-20-img-147.png (prensa)
  - assets/images/portfolio/page-19-img-143.png (pasarela)
- Sincretismo Latinoamericano (Textil) — si deseas mantenerlo como un proyecto separado del anterior:
  - assets/images/portfolio/page-5-img-544.png
  - assets/images/portfolio/page-10-img-72.png
  - assets/images/portfolio/page-10-img-73.png
  - assets/images/portfolio/page-10-img-74.png

Si prefieres que “Sincretismo Latinoamericano” sea SOLO el renombrado de Ígneo y que NO exista una segunda entrada (Textil), simplemente quitamos la segunda.

## Cambios en datos
- Actualizar `data/portfolio.json`:
  - Renombrar título del proyecto “Ígneo” a “Sincretismo Latinoamericano”.
  - Asignar 4 imágenes por proyecto según la lista de arriba.
  - Añadir campo `video` en los 2 proyectos (y, si quieres, un tercero temporal reutilizando `VID-20251118-WA0059.mp4`).
  - El resto del sitio ya soporta `video` dentro del carrusel de proyectos.

## Verificación
- Navegar el carrusel y confirmar 6 slides, cada uno con 4 imágenes.
- Ver “Sincretismo Latinoamericano” y “Recorrido Cíclico” con video en el panel principal.

¿Confirmas que aplique estos cambios en `data/portfolio.json` con esta selección y renombre? Si deseas sustituir el tercer video por otro archivo, indícame cuál y lo integro en el proyecto que prefieras.