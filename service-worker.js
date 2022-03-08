const CACHE_NAME = 'service-worker-v1';
const urlToCache = [
  '/',
  './index.html',
  './style.css',
  './script.js',
  './universe.jpeg'
]
self.addEventListener('install', function (event) {
  console.log('Service Worker Installed');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {

        // cache.keys().then(request => console.log(request));
        return cache.addAll(urlToCache);
      }
      ));
})

self.addEventListener('activate', function (event) {
  console.log(event);
})