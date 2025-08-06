// Service Worker para PWA y caché offline
// Bogotá Una Historia

const CACHE_NAME = 'bogota-historia-v1.0.0';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Archivos para cachear estaticamente
const STATIC_FILES = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json',
  '/Titulo.png',
  '/favicon.ico'
];

// URLs de API para cachear dinámicamente
const DYNAMIC_URLS = [
  '/api/',
  'https://fonts.googleapis.com/',
  'https://cdnjs.cloudflare.com/'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('SW: Cacheando archivos estáticos');
        return cache.addAll(STATIC_FILES);
      })
      .catch((error) => {
        console.error('SW: Error al cachear archivos estáticos:', error);
      })
  );
  self.skipWaiting();
});

// Activar Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('SW: Eliminando cache antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Estrategia para archivos estáticos: Cache First
  if (STATIC_FILES.some(file => request.url.includes(file))) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          return response || fetch(request);
        })
    );
  }
  
  // Estrategia para imágenes: Cache First con fallback
  else if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          return response || fetch(request)
            .then((fetchResponse) => {
              const responseClone = fetchResponse.clone();
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseClone);
                });
              return fetchResponse;
            })
            .catch(() => {
              // Imagen de fallback si no hay conexión
              return new Response(
                '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect fill="#ddd" width="300" height="200"/><text x="50%" y="50%" text-anchor="middle" dy=".3em">Imagen no disponible</text></svg>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            });
        })
    );
  }
  
  // Estrategia para APIs: Network First con cache fallback
  else if (DYNAMIC_URLS.some(apiUrl => request.url.includes(apiUrl))) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then((cache) => {
              cache.put(request, responseClone);
            });
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
  }
  
  // Para todo lo demás: Network First
  else {
    event.respondWith(
      fetch(request)
        .catch(() => {
          return caches.match(request);
        })
    );
  }
});

// Sincronización en segundo plano
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Procesar formularios de contacto offline
      processOfflineContactForms()
    );
  }
});

// Notificaciones push
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Bogotá Una Historia';
  const options = {
    body: data.body || 'Nuevo contenido disponible',
    icon: '/Titulo.png',
    badge: '/favicon.ico',
    vibrate: [200, 100, 200],
    data: data.url || '/',
    actions: [
      {
        action: 'open',
        title: 'Abrir',
        icon: '/Titulo.png'
      },
      {
        action: 'close',
        title: 'Cerrar'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Manejar clicks en notificaciones
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow(event.notification.data || '/')
    );
  }
});

// Función auxiliar para procesar formularios offline
async function processOfflineContactForms() {
  try {
    // Implementar lógica para enviar formularios guardados offline
    console.log('SW: Procesando formularios offline');
  } catch (error) {
    console.error('SW: Error al procesar formularios offline:', error);
  }
}
