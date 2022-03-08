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
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response !== undefined) {
          return response;
        }
        else {
          return fetch(event.request)
            .then(function (response) {
              let responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then(function (cache) {
                  cache.put(event.request, responseClone);
                });
              return response;
            }).catch(function (err) {
              throw err;
            });
        }
      })
  )
})