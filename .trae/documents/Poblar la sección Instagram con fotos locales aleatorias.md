## Objetivo
Rellenar `.insta-row` con imágenes locales aleatorias de las carpetas de cada proyecto, evitando cualquier recurso remoto.

## Implementación
- JS: tras cargar `data/portfolio.json`, construir un pool con todas las `imagenes` de `data.proyectos`.
- Seleccionar 5 al azar (sin repetición) y renderizarlas dentro de `.insta-row` con `loading="lazy"` y `decoding="async"`.
- Mantener el botón “Sígueme” y el layout actual.

## Verificación
- Abrir la sección Instagram y confirmar que muestra fotos locales aleatorias cada carga.

¿Confirmas que aplique estos cambios?