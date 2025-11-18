## Objetivo
Pulir el portafolio para que sea totalmente responsive en móvil y desktop, con diseño profesional y manejo robusto de imágenes (fallbacks y detección de errores).

## Auditoría rápida del estado actual
- Layout con grids y breakpoints en `css/styles.css` ya funcionales (`@media 980px/680px`).
- Slider centrado horizontalmente (`scroll-snap-align: center`).
- Imágenes cargadas desde Unsplash, algunas pueden fallar por bloqueos externos.

## Cambios Propuestos (precisos)
### 1) Tipografía y espaciado responsive
- Añadir escalado con `clamp()` para títulos y texto:
  - `css/styles.css`: definir `--fs-h1`, `--fs-h2`, `--fs-body` y aplicarlos a `h1,h2,body`.
- Ajustar paddings/márgenes de `.section` y `.hero-content` con `clamp()` para consistencia en móviles.

### 2) Grids y componentes
- `about` y `grid`:
  - Asegurar `aspect-ratio` en imágenes de cards (`.card img { aspect-ratio: 4/3; object-fit: cover; }`).
- `split-banner`:
  - Unificar alturas con `min-height` y `aspect-ratio` para evitar saltos.
- Slider `Destinos que amo`:
  - Mantener centrado y ajustar `grid-auto-columns` de forma responsive (`80%` desktop, `90%` móvil) en `css/styles.css:47`.

### 3) Robustez de imágenes
- HTML: usar `<picture>` + `srcset` y `sizes` en las imágenes principales del hero, slider y cards.
  - Ejemplo hero (`index.html:31`): `<picture><source type="image/webp" srcset="...webp"> <img src="...jpg" sizes="100vw" decoding="async" referrerpolicy="no-referrer" ...></picture>`.
- CSS: estandarizar `object-fit: cover` y `aspect-ratio` en hero/slider/cards.
- JS: implementar fallback automático cuando una imagen falla:
  - En `js/main.js`: añadir listener global para todas las `img`; si `error`, reemplazar `src` por `assets/images/placeholder.jpg`, marcar `data-img-error="true"` y registrar en consola.
- Opcional: migrar imágenes críticas a `assets/images/` para eliminar dependencias externas.

### 4) Accesibilidad y performance
- Añadir `decoding="async"`, `loading="lazy"` y `sizes` coherentes en todas las imágenes.
- Revisar contraste de botones y foco accesible.

## Pruebas
- Viewports: 360 × 640, 768 × 1024, 1440 × 900.
- Escenarios de red: simular fallos de imagen (desconexión o dominio inválido) y verificar que el placeholder aparece sin romper layout.
- Navegación: verificar menú móvil, slider y animaciones.

## Entregables
- CSS y JS actualizados con responsive avanzado y fallback de imágenes.
- Sustituciones en `index.html` para `picture/srcset/sizes` en hero, cards y slider.

¿Confirmas que proceda a implementar estos cambios en los archivos mencionados?