## Objetivo
Crear una estructura clara para contenidos (imágenes y videos) ordenada por categorías y adaptar el sitio para consumirla de forma dinámica, manteniendo el diseño minimal y responsive.

## Estructura propuesta (carpetas)
assets/
- images/
  - editorial/
  - retail/
  - pretaporte/
  - joyeria/
  - pasarela/
  - prensa/
  - destinos/
  - perfiles/
- videos/
  - proyectos/
  - procesos/

Nota: crearé las carpetas con archivos .keep para que existan en el repositorio. Los archivos actuales seguirán funcionando; más adelante podemos moverlos físicamente si lo deseas.

## Datos y render dinámico
- Ampliar `data/portfolio.json` con un bloque `media`:
  - `images`: por categoría (listas de rutas existentes).
  - `videos`: dos listas: `proyectos` y `procesos` con las rutas MP4 entregadas.
- UI de Proyectos: chips de filtro de categoría para mostrar tarjetas por `editorial | retail | pretaporte | joyeria | pasarela | prensa`.
- Sección Videos: tabs `Proyectos | Procesos` y playlist generada desde `data/portfolio.json`.

## Cambios de código
- `index.html`:
  - Añadir chips de filtro en Proyectos.
  - Actualizar sección Videos para tabs y lista dinámica.
- `js/main.js`:
  - Consumir `media.images` y `media.videos`.
  - Filtrar proyectos por categoría.
  - Cargar playlist según tab.
- `css/styles.css`:
  - Estilos mínimos para chips/tabs.

## Verificación
- Revisar que filtros muestran las tarjetas correctas.
- Probar videos en ambas pestañas.
- Validar responsive en móvil y desktop.

¿Confirmas que proceda con esta estructura y adaptación dinámica?