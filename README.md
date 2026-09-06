# Bonezza — Menú interactivo

Página estática lista para publicar con **GitHub Pages**.

## Estructura
- `index.html` — estructura de la página.
- `styles.css` — diseño responsive inspirado en el menú original.
- `app.js` — categorías, personalización, carrito y cálculo de total.
- `assets/` — imágenes extraídas del PDF del menú.

## Publicar en GitHub Pages
1. Crea un repositorio nuevo en GitHub, por ejemplo `bonezza-menu`.
2. Sube todos los archivos manteniendo la carpeta `assets`.
3. En **Settings → Pages**, selecciona `Deploy from a branch`.
4. Elige la rama `main` y la carpeta `/ (root)`.
5. Guarda. GitHub generará la URL de tu página.

## Para conectarlo a pedidos reales
El botón “Finalizar pedido” está preparado como punto de integración. Se puede conectar a WhatsApp, un formulario, una API o un sistema de delivery sin cambiar el diseño del menú.
