const CACHE_NAME = "akg-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/allimage/ApnaKnowledgeGroup.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});