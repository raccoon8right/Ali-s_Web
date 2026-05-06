# 🐾 Ali's Web

> *「 Fall seven times, stand up eight. 」*
> 七転び八起き — Nana korobi ya oki

Blog personal de Alejandra (Ali), un espacio lleno de color, creatividad y todo lo que la hace feliz: arte, música, cocina, dibujo, su gato Clairo y mucho más.

---

## 🛠️ Tecnologías

- **React 18** — UI con componentes funcionales y hooks
- **Vite** — bundler y servidor de desarrollo
- **CSS modular** — un archivo CSS por componente
- **Font Awesome** — iconografía
- **Google Fonts** — Pacifico + Nunito

---

## 📁 Estructura de carpetas

```
Ali-s_Web/
├── public/
└── src/
    ├── assets/
    │   ├── Ali.jpg
    │   ├── gallery/
    │   │   └── video1.mp4
    │   └── music/
    │       ├── Billie Eilish - idontwannabeyouanymore.mp3
    │       ├── Billie Eilish - Six Feet Under.mp3
    │       ├── Billie Eilish - watch.mp3
    │       ├── TV Girl - Cigarettes out the Window.mp3
    │       ├── TV Girl - Not Allowed.mp3
    │       └── Twenty One Pilots - The Line (from Arcane Season 2).mp3
    ├── components/
    │   ├── Hero.jsx + Hero.css
    │   ├── Navbar.jsx + Navbar.css
    │   ├── Sidebar.jsx + Sidebar.css
    │   ├── gadgets/
    │   │   ├── MusicPlayer.jsx + MusicPlayer.css
    │   │   ├── CalendarWidget.jsx + CalendarWidget.css
    │   │   └── DiceWidget.jsx + DiceWidget.css
    │   └── pages/
    │       ├── Inicio.jsx + Inicio.css
    │       ├── Blog.jsx + Blog.css
    │       ├── Galeria.jsx + Galeria.css
    │       ├── SobreMi.jsx + SobreMi.css
    │       └── Contacto.jsx + Contacto.css
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx
```

---

## 🚀 Instalación y uso

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/raccoon8right/Web-of-Ali.git

# 2. Entra a la carpeta
cd Web-of-Ali

# 3. Instala las dependencias
npm install

# 4. Instala Font Awesome
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

# 5. Corre el servidor de desarrollo
npm run dev

# 6. Abre en el navegador
http://localhost:5173
```

### Build para producción

```bash
npm run build
```

---

## ✨ Funcionalidades

### 🏠 Navegación
- Navbar sticky con logo animado e íconos por sección
- Navegación entre páginas sin recarga
- Sección activa destacada con punto indicador

### 🎨 Hero
- Foto de Ali con huellas de patas animadas en el fondo
- Saludo estilo épico con proverbio japonés
- Etiquetas de hobbies con tooltips de imagen al hover

### 📝 Blog
- Entradas organizadas por categorías
- Filtro por categoría con animación
- Tarjetas con hover de elevación

### 🖼️ Galería
- Carrusel con imagen activa y laterales semitransparentes
- Lightbox para ver fotos y videos en grande
- Scroll bloqueado al abrir el lightbox
- Soporte para fotos y videos

### 👩‍🎨 Sobre mí
- Presentación de Ali con avatar y descripción
- Chips de hobbies
- Tarjetas de datos curiosos

### 💌 Contacto
- Formulario con validación
- Pantalla de éxito al enviar

### 🎮 Gadgets del Sidebar
- **🎵 Reproductor de música** — reproduce canciones reales en `.mp3`, filtro por artista, barra de progreso clickeable, estrellas en favoritas. La música continúa al cerrar el panel
- **📅 Calendario** — muestra el día actual con mensaje especial en fechas como San Valentín, Día de la Madre, cumpleaños de Ali (6 de noviembre) y feriados bolivianos
- **🎲 Dado de actividades** — sugiere una actividad aleatoria con animación de dado

---

## 🗺️ Roadmap

### v1.0 — Base ✅
- Estructura de componentes
- Diseño con paleta pastel + rojo + azul
- Navegación entre páginas
- Gadgets del sidebar

### v1.1 — Responsivo ✅
- Adaptación para Mobile, Tablet, Laptop y Desktop
- Fixes de z-index y layout
- Galería con lightbox mejorado
- Música persistente al cerrar panel

### v1.2 — Contenido 🔜
- Fotos reales de Clairo en la galería
- Fotos de Ali en la galería
- Imágenes reales en tooltips del hero
- Más entradas en el blog

### v1.3 — Mejoras futuras 💭
- Modo oscuro
- Animaciones de transición entre páginas
- Más gadgets en el sidebar
- Sección de viajes
- Más fechas especiales en el calendario

---

## 🐱 Sobre Clairo

Clairo es el gato de Ali, macho y muy curioso. Su presencia se siente en toda la web: desde las huellas animadas del hero hasta su propia sección en la galería.

---

## 📸 Screenshots

> *Próximamente — se agregarán capturas de pantalla de la web en sus diferentes secciones y dispositivos.*

---

## 📄 Licencia

Este proyecto es personal y fue creado con mucho amor para Alejandra. 💛

---

*It was made with love — Ali's Web © 2026*
