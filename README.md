# 🏛️ Bogotá, Una Historia

**Aplicación web interactiva que presenta la rica historia de Bogotá a través de tours virtuales, galería de imágenes históricas y contenido bilingüe.**

## 🌐 Sitio Web en Vivo
**URL:** https://bogotaunahistoria.azurewebsites.net

## 📋 Descripción del Proyecto

Esta aplicación React presenta la fascinante historia de Bogotá, Colombia, ofreciendo:

- 🏛️ **Tours Históricos Interactivos**: Recorridos virtuales por lugares emblemáticos
- 🌍 **Contenido Bilingüe**: Disponible en Español e Inglés
- 📸 **Galería Histórica**: Más de 50 imágenes históricas de la ciudad
- 📱 **PWA (Progressive Web App)**: Instalable en dispositivos móviles
- 🔗 **Generador de QR**: Para compartir fácilmente la experiencia
- 🎯 **SEO Optimizado**: Para mejor visibilidad en buscadores

## ⚡ Tecnologías Utilizadas

- **Frontend**: React 18, JavaScript ES6+
- **Estilos**: CSS3 con diseño responsivo
- **Hosting**: Azure App Service (Linux + Node.js 20-LTS)
- **PWA**: Service Worker para funcionalidad offline
- **SEO**: Meta tags, sitemap.xml, structured data

Este proyecto fue inicializado con [Create React App](https://github.com/facebook/create-react-app).

## 🚀 Comandos Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará automáticamente cuando hagas cambios.\
También verás errores de lint en la consola.

### `npm test`

Lanza el ejecutor de pruebas en modo interactivo.\
Consulta la sección sobre [ejecutar pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Empaqueta correctamente React en modo de producción y optimiza la construcción para el mejor rendimiento.

La construcción está minificada y los nombres de archivos incluyen hashes.\
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para más información.

### `npm run eject`

**Nota: esta es una operación irreversible. ¡Una vez que hagas `eject`, no puedes volver atrás!**

Si no estás satisfecho con las herramientas de construcción y las opciones de configuración, puedes hacer `eject` en cualquier momento. Este comando eliminará la dependencia de construcción única de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que puedas modificarlos. En este punto estás por tu cuenta.

No tienes que usar `eject` nunca. El conjunto de características curadas es adecuado para despliegues pequeños y medianos, y no deberías sentirte obligado a usar esta característica. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo para ello.

## 📦 Estructura del Proyecto

```
bogota_una_historia/
├── public/                 # Archivos públicos
│   ├── index.html         # Plantilla HTML principal
│   ├── manifest.json      # Configuración PWA
│   └── robots.txt         # Configuración para buscadores
├── src/                   # Código fuente
│   ├── App.js            # Componente principal
│   ├── Historia.js       # Componente de tours históricos
│   ├── Lugares.js        # Galería de lugares
│   ├── Recorridos.js     # Sistema de recorridos
│   ├── QR.js             # Generador de códigos QR
│   ├── LanguageSelector.js # Selector de idioma
│   ├── translations.js   # Traducciones ES/EN
│   └── Fotos/            # Imágenes históricas
├── build/                # Archivos de producción
└── README.md            # Este archivo
```

## 🌟 Características Principales

### 🏛️ Tours Históricos
- **Bogotá Colonial**: Desde la fundación hasta la independencia
- **Bogotá Republicana**: Crecimiento y modernización
- **Bogotá Moderna**: Siglo XX y transformación urbana
- **Bogotá Contemporánea**: Ciudad actual y perspectivas futuras

### 📱 Progressive Web App (PWA)
- Instalable en dispositivos móviles
- Funciona offline parcialmente
- Experiencia similar a una app nativa
- Service Worker para cache inteligente

### 🌍 Soporte Multiidioma
- **Español**: Idioma principal
- **English**: Traducción completa
- Cambio dinámico sin recargar página
- Persistencia de preferencia de idioma

## 🚀 Deployment en Azure

La aplicación está desplegada en **Azure App Service** con las siguientes características:

- **URL**: https://bogotaunahistoria.azurewebsites.net
- **Plan**: F1 (Free Tier)
- **Runtime**: Node.js 20-LTS en Linux
- **Región**: Central US
- **SSL**: Habilitado automáticamente
- **CDN**: Distribución global

## 📈 SEO y Performance

### Optimizaciones Implementadas:
- ✅ Meta tags completos para redes sociales
- ✅ Sitemap.xml con todas las rutas
- ✅ Robots.txt configurado
- ✅ Structured data (Schema.org)
- ✅ Lazy loading de imágenes
- ✅ Compresión de archivos
- ✅ Cache headers optimizados

## 🛠️ Desarrollo Local

### Prerrequisitos:
- Node.js 18+ 
- npm 8+

### Instalación:
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start

# Construir para producción
npm run build
```

## 📧 Contacto y Contribuciones

Este proyecto está abierto a contribuciones. Para sugerencias o mejoras:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📚 Recursos Adicionales

### Documentación de React:
Puedes aprender más en la [documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulta la [documentación de React](https://reactjs.org/).

### Secciones Específicas:

#### División de Código (Code Splitting)
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Análisis del Tamaño del Bundle
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Configuración de Progressive Web App
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Configuración Avanzada
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Despliegue
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### Solución de Problemas: `npm run build` falla en minificación
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## 🇨🇴 Sobre Bogotá

Bogotá, oficialmente Bogotá, Distrito Capital, es la capital y ciudad más poblada de Colombia. Con más de 8 millones de habitantes en su área metropolitana, es el centro político, económico, administrativo, industrial, artístico, cultural y deportivo del país.

**¡Explora la rica historia de nuestra capital en https://bogotaunahistoria.azurewebsites.net!** 🏛️
