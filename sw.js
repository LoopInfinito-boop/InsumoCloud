self.addEventListener("install", event => {
  console.log("SW instalado");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("SW ativo");
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  // cache básico opcional
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
