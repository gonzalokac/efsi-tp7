# 🛒 CositasOnline - E-commerce React

Un e-commerce moderno y funcional construido con React, Vite y CSS moderno. Incluye un carrito de compras completamente funcional, navegación intuitiva y diseño responsive.

## ✨ Características Principales

### 🛍️ **Carrito de Compras Funcional**
- ✅ Agregar/eliminar productos
- ✅ Control de cantidades (+ y -)
- ✅ Persistencia en localStorage
- ✅ Cálculo automático de totales
- ✅ Notificaciones visuales
- ✅ Interfaz moderna y intuitiva

### 🎨 **Diseño y UX**
- 🎯 Página de inicio atractiva con hero section
- 📱 Diseño completamente responsive
- 🌈 Paleta de colores moderna
- 🎭 Animaciones y transiciones suaves
- 📱 Optimizado para móvil y desktop

### 🚀 **Funcionalidades**
- 🏠 Página de inicio con categorías destacadas
- 📦 Catálogo de productos con filtros por categoría
- 🔍 Navegación intuitiva con dropdown
- 🛒 Widget de carrito en tiempo real
- 💾 Persistencia de datos del carrito

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool y dev server
- **React Router** - Navegación SPA
- **Context API** - Estado global del carrito
- **CSS3** - Estilos modernos y responsive
- **GitHub Pages** - Deploy automático

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/gonzalokac/efsi-tp7.git

# Entrar al directorio
cd efsi-tp7

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 📱 Funcionalidades del Carrito

### Agregar Productos
- Haz clic en "🛒 Agregar al carrito" en cualquier producto
- Notificación visual de confirmación
- El botón cambia a "✓ Agregado" y se deshabilita

### Gestionar Carrito
- **Abrir carrito**: Clic en el ícono 🛒 de la navbar
- **Cambiar cantidades**: Botones + y - para cada producto
- **Eliminar productos**: Botón 🗑️ para cada item
- **Vaciar carrito**: Botón para limpiar todo
- **Persistencia**: Los productos se mantienen al recargar

### Navegación
- **Home**: Página de inicio con hero section
- **Productos**: Catálogo completo con filtros por categoría
- **Quiénes Somos**: Información de la empresa
- **Contacto**: Formulario de contacto

## 🎨 Estructura del Proyecto

```
efsi-tp7/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── CardProducto.jsx # Tarjetas de productos
│   │   ├── CarritoWidget.jsx # Widget del carrito
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   └── LoadingSpinner.jsx # Spinner de carga
│   ├── context/             # Contextos de React
│   │   └── CarritoContext.jsx # Estado global del carrito
│   ├── pages/               # Páginas de la aplicación
│   │   ├── Home.jsx         # Página de inicio
│   │   ├── Productos.jsx    # Catálogo de productos
│   │   ├── QuienesSomos.jsx # Página sobre nosotros
│   │   └── Contacto.jsx     # Página de contacto
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Punto de entrada
├── .github/workflows/       # GitHub Actions para deploy
├── vite.config.js           # Configuración de Vite
└── README.md                # Este archivo
```

## 🌐 Deploy

El proyecto está configurado para deploy automático en GitHub Pages. Cada vez que se hace push a la rama `main`, se ejecuta automáticamente el workflow de GitHub Actions que:

1. Instala dependencias
2. Hace build del proyecto
3. Deploya a GitHub Pages

**URL del proyecto**: [https://gonzalokac.github.io/efsi-tp7/](https://gonzalokac.github.io/efsi-tp7/)

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Linting del código
```

## 📱 Responsive Design

El proyecto está completamente optimizado para:
- 📱 **Móviles** (320px+)
- 📱 **Tablets** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Pantallas grandes** (1200px+)

## 🎯 Próximas Funcionalidades

- [ ] Sistema de autenticación
- [ ] Historial de compras
- [ ] Wishlist de productos
- [ ] Sistema de reseñas
- [ ] Integración con pasarela de pagos
- [ ] Modo oscuro/claro
- [ ] Búsqueda avanzada de productos

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Gonzalo** - [gonzalokac](https://github.com/gonzalokac)

---

⭐ **¡Si te gustó el proyecto, dale una estrella en GitHub!**
