## Objetivo
Cambiar la sección "Proyectos" a un carrusel tipo "Destinos" con un layout por proyecto: imagen principal a la izquierda, tres imágenes a la derecha (dos pequeñas arriba y una ancha abajo), y título + descripción debajo.

## Implementación
- HTML: reemplazar el grid de proyectos por controles prev/next + dots y un contenedor `#proj-slider` vacío para render dinámico.
- CSS:
  - Clase `.projects-slider` basada en `.slider` pero con `grid-auto-columns: 100%/88%` y `scroll-snap-align: center`.
  - Layout de cada slide `.proj-layout`: `grid-template-columns` para imagen principal (izquierda) y grid secundario (derecha); responsivo a una sola columna en móvil.
  - Aspect ratios: principal 4/3, secundarias 1/1 y 16/10.
- JS:
  - Render dinámico desde `data.proyectos` para crear cada slide con las primeras 4 imágenes de cada proyecto (fallback cuando falten).
  - Controles prev/next y dots similares a “Destinos” (punto central grande, vecinos medianos, extremos pequeños), con click para saltar.
  - Eliminar el render anterior de grid/chips y utilizar solo el carrusel.

## Verificación
- Navegar por los proyectos con botones y dots.
- Revisar responsive en 360px/768px/1200px.
- Confirmar títulos y descripciones visibles.

¿Confirmas y procedo a aplicar estos cambios?