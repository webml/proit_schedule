const CACHE_NAME = "proit-schedule-v1";

const BASE = self.location.pathname.startsWith("/proit_schedule/")
  ? "/proit_schedule"
  : "";

const PRECACHE = [`${BASE}/`, `${BASE}/map_sat.svg`, `${BASE}/map_sun.svg`];

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches
        .keys()
        .then((keys) =>
          Promise.all(
            keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))
          )
        ),
      self.clients.claim(),
    ])
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);

      const cached = await cache.match(event.request);
      if (cached) {
        return cached;
      }

      try {
        const response = await fetch(event.request);

        if (response.ok && event.request.url.startsWith(self.location.origin)) {
          cache.put(event.request, response.clone());
        }

        return response;
      } catch {
        return cache.match(`${BASE}/`);
      }
    })()
  );
});
