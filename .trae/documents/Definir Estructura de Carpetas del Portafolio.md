## Objetivo
Organizar el proyecto con una estructura clara y extensible, manteniendo tecnologías sencillas (HTML/CSS/JS) y sin build.

## Estructura Propuesta
```
portafolioJosefa/
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
├─ assets/
│  ├─ images/        # hero, proyectos, blog, logos
│  ├─ icons/         # SVG/PNG de UI
│  └─ fonts/         # fuentes locales si se usan
├─ pages/            # páginas adicionales (opcional)
│  ├─ servicios.html
│  ├─ clientes.html
│  ├─ testimonios.html
│  └─ faq.html
├─ components/       # parciales HTML reutilizables (opcional)
│  ├─ navbar.html
│  └─ footer.html
└─ data/             # JSON para contenido (opcional)
   └─ testimonios.json
```

## Movimientos Iniciales (mínimos)
- `styles.css` → `css/styles.css`
- `script.js` → `js/main.js`
- Actualizar referencias en `index.html`:
  - `<link rel="stylesheet" href="css/styles.css">`
  - `<script src="js/main.js"></script>`

## Opcionales Después
- Migrar imágenes remotas a `assets/images/` para control total.
- Crear `pages/` para secciones largas (Servicios, Clientes, Testimonios, FAQ) manteniendo la estética actual.
- Extraer parciales en `components/` si deseas reutilización (navbar/footer).
- Añadir `data/testimonios.json` para mantener contenido editable sin tocar HTML.

## Verificación
- Servir con `python -m http.server 5500` desde la raíz.
- Navegar y comprobar que estilos y scripts cargan tras el cambio de rutas.

¿Confirmas esta estructura para aplicarla (moviendo archivos y actualizando rutas)?