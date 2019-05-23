importScripts('./src/vendor/sw-toolbox.js');
const precacheFiles = [
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

// Precache the files
toolbox.precache(precacheFiles);

// Push Notification
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');

  var title = 'vue-template';
  var options = {
    body: 'Yay it works.',
    icon: './assets/img/logo-192.png',
    badge: './assets/img/logo-96.png'
  };

  var notificationPromise = self.registration.showNotification(title, options);
  event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://jangtaehee.github.io/')
  );
});
