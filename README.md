# DevFest Granada 2025 Website

Sitio web oficial para DevFest Granada 2025, el evento para desarrolladores de Google en Granada.

## 🚀 Características

- Diseño moderno y responsive siguiendo las guías de marca de Google
- Secciones completas para agenda, ponentes, ubicación y patrocinadores
- Optimizado para accesibilidad y SEO
- Animaciones suaves y compatibles con prefers-reduced-motion
- Soporte completo para dispositivos móviles

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript vanilla para interactividad
- Google Fonts (Google Sans y Roboto Mono)
- Integración con Google Maps

## 📦 Estructura del Proyecto

```
.
├── index.html          # Estructura principal del sitio
├── styles.css          # Estilos y diseño responsive
├── script.js           # Interactividad y animaciones
└── assets/            # Imágenes y recursos
    ├── devfest-logo.svg
    ├── google-logo.svg
    ├── speaker1.jpg
    ├── speaker2.jpg
    ├── speaker3.jpg
    ├── speaker4.jpg
    ├── sponsor1.svg
    ├── sponsor2.svg
    ├── collaborator1.svg
    ├── collaborator2.svg
    └── collaborator3.svg
```

## 🚀 Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/gdg-granada/devfest-2025.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd devfest-2025
   ```

3. Abre `index.html` en tu navegador o usa un servidor local:
   ```bash
   # Usando Python 3
   python -m http.server 8000
   
   # Usando Node.js
   npx serve
   ```

## 🎨 Personalización

### Colores
Los colores de Google están definidos como variables CSS en `styles.css`:

```css
:root {
    --google-blue: #4285f4;
    --google-green: #34a853;
    --google-red: #ea4335;
    --google-yellow: #fbbc04;
}
```

### Fuentes
- Headlines: Google Sans Bold
- Subheads: Roboto Mono Light
- Body: Google Sans Normal

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints en:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accesibilidad

- Estructura HTML semántica
- ARIA labels donde es necesario
- Alto contraste en textos
- Soporte para navegación por teclado
- Compatible con lectores de pantalla
- Respeta prefers-reduced-motion

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias. 