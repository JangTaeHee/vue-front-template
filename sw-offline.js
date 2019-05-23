var CACHE_NAME = 'vue-template-v1.0';
var urlsToCache = [
  './',
  // CSS
  './src/assets/css/vue-material.css',
  // Images
  './src/assets/img/logo.png',
  './src/assets/img/favicon.ico',
  // Fonts
  './src/assets/font/icomoon.svg',
  // JS
  './src/vendor/firebase.js'
];

self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('cache created');
        return cache.addAll(urlsToCache);
      }).catch(function (err) {
        console.error('cache created error!', err);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
