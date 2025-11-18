## Objetivo
Extraer texto e imágenes del PDF `Portafolio (3).pdf` para redactar contenido natural y adaptar todas las secciones del sitio al portafolio de Josefa Vodnizza.

## Extracción del PDF
- Herramientas: Python con `pdfplumber` (texto + coordenadas) y extracción de imágenes embebidas; fallback con `pdfminer.six`/`PyPDF2` si el PDF está escaneado.
- Salidas:
  - `assets/images/portfolio/` con las imágenes exportadas del PDF.
  - `data/portfolio.json` con texto estructurado y metadatos.

## Estructura de Datos
```
{
  "bio": { "nombre": "Josefa Vodnizza", "descripcion": "..." },
  "valores": "...",
  "contacto": { "email": "...", "instagram": "..." },
  "cv": { "educacion": ["..."], "habilidades": ["..."], "herramientas": ["..."] },
  "proyectos": [
    { "titulo": "...", "anio": 2025, "categoria": "Editorial", "descripcion": "...",
      "imagenes": ["assets/images/portfolio/proyecto-1-1.jpg", ...] }
  ],
  "procesos": {
    "editorial": [ { "titulo": "...", "img": "...", "nota": "..." } ],
    "moodboards": [ ... ],
    "lifestyle": [ ... ]
  }
}
```

## Mapeo al Sitio
- Sobre Josefa: poblar bio con texto del PDF.
- Proyectos del año: grid con tarjetas y link a lightbox; usar imágenes locales del PDF.
- Procesos creativos: alimentar la galería (tabs) por categorías; autoplay 5s y control manual ya disponibles.
- Valores y sostenibilidad: párrafo fiel al PDF.
- CV: educación, habilidades y herramientas; enlace al PDF.
- Contacto: email e Instagram del PDF.
- Destinos que me inspiran: mantener imágenes locales actuales; puede integrarse una subgalería si el PDF contiene viajes/inspiraciones.

## Redacción Natural
- Tono: cercano, profesional y femenino.
- Criterios: claridad, frases cortas, énfasis en proceso y resultados; coherencia con las imágenes.
- Evitar tecnicismos innecesarios; resaltar sostenibilidad y valores.

## Verificación
- Comprobar que todas las imágenes locales se muestran, con fallback activo.
- Revisar responsive del nuevo contenido (móvil/desktop).
- Validar autoplay y lightbox con las nuevas imágenes.

## Entregables
- `data/portfolio.json` y carpeta `assets/images/portfolio/` creada con los recursos del PDF.
- Sitio actualizado con textos naturales basada en el PDF.

¿Confirmas para proceder con la extracción del PDF, creación de `data/portfolio.json`, importación de imágenes y actualización del contenido del sitio?