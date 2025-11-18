## Objetivo
Hacer el reproductor de video amigable y 100% responsive con un estilo minimal que se integre al diseño.

## Cambios propuestos
- CSS del reproductor:
  - Controles con `flex-wrap` para que se acomoden en móvil.
  - Barra de progreso ocupando el ancho completo.
  - Botones con tamaño táctil (36–40px) y bordes suaves.
  - Volumen con ancho adaptable.
  - Ajustes en mobile con `@media (max-width:680px)`.
- Mantener la estructura HTML/JS actual (sin reescribir lógica), solo mejorar visual y responsividad.

## Verificación
- Probar en móvil y desktop que los controles no se desbordan y se leen bien.
- Confirmar que play/pausa, progreso, tiempo, volumen y fullscreen siguen funcionando.

¿Confirmas que aplique estos cambios de estilo al reproductor?