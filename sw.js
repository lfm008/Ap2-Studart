// Service worker do modo "instalar na tela inicial" (iPhone/Android pelo navegador): deixa o app abrir sem internet.
const V = 'rjt-v0.2.0';
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// rede primeiro (pega a versão nova), cache como reserva quando estiver offline
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(fetch(e.request).then((r) => {
    const c = r.clone(); caches.open(V).then((ch) => ch.put(e.request, c)).catch(() => {}); return r;
  }).catch(() => caches.match(e.request)));
});
