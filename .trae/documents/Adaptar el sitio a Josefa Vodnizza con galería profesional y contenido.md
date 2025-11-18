## Objetivo
Actualizar el sitio para reflejar el portafolio universitario de Josefa Vodnizza: secciones profesionales, galería con categorías y carrusel 5s + control manual, lightbox, valores/sostenibilidad, CV y contacto; usar imágenes locales del directorio indicado.

## Estructura de archivos
- Mantener sin build:
```
portafolioJosefa/
├─ index.html
├─ css/styles.css
├─ js/main.js
├─ destinos-inspiran/           # usar tal como está
├─ assets/
│  └─ images/                   # opcional para futuras fotos del PDF
└─ data/
   └─ gallery.json              # opcional si quieres parametrizar categorías
```

## Cambios de contenido
- Título y marca: cambiar a “Josefa Vodnizza”.
- Renombrar sección “Destinos que amo” → “Destinos que me inspiran”.
- Añadir secciones:
  1) Sobre Josefa: bio y datos del PDF.
  2) Proyectos: grid de proyectos del año (texto y espacios para fotos del PDF).
  3) Procesos creativos: galería con categorías (Editorial, Moodboards, Lifestyle). Carrusel auto 5s, prev/next y dots, pausa al hover.
  4) Valores y sostenibilidad: párrafo dedicado.
  5) Currículum: lista de educación, habilidades, herramientas y enlace al PDF.
  6) Contacto: email/instagram.
- “Destinos que me inspiran”: usar imágenes desde `destinos-inspiran/*.jpeg`.

## Detalles técnicos
- CSS: estilos de tabs/galería, carrusel con `aspect-ratio` y `object-fit: cover`, lightbox modal con `object-fit: contain`, responsive con `clamp()`.
- JS:
  - Tabs por categoría.
  - Carrusel 5s con setInterval, botones prev/next, dots, pausa al hover.
  - Lightbox: abrir imagen en overlay a máxima calidad.
  - Reusar fallback actual para imágenes (placeholder si falla).
- HTML: usar `sizes`/`decoding` para performance y `referrerpolicy`.

## Verificación
- Revisar en 360/768/1200 px.
- Probar autoplay, controles, dots y lightbox.
- Confirmar carga de imágenes locales desde `destinos-inspiran`.

¿Confirmas que proceda con estos cambios y referencias a las imágenes locales del directorio indicado?