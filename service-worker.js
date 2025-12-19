const CACHE_NAME = "compter-v1";

const FILES_TO_CACHE = [
  "/e-compter/",
  "/e-compter/index.html",
  "/e-compter/style.css",
  "/e-compter/script.js",
  "/e-compter/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
