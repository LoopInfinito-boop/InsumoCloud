self.addEventListener("install", event => {
  console.log("SW instalado");
  self.skipWaiting(); // ativa o SW imediatamente
});

self.addEventListener("activate", event => {
  console.log("SW ativo");
  self.clients.claim(); // assume controle de todas as páginas
});

self.addEventListener("fetch", event => {
  // futuramente você pode adicionar cache
});
