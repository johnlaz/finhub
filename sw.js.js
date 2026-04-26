const CACHE_NAME = 'nexus-fin-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Install the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch cached assets when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found, else fetch over network
        return response || fetch(event.request);
      })
  );
});