// const staticCashName = 'qg-app-v3';
// const dynamicCashName = 'd-app-v1';
// const staticCashFiles = ['/script.js', '/index.html', '/style.css', '/offline.html'];

// self.addEventListener('install', async (event) => {
//     const cacheStorage = await caches.open(staticCashName);
//     cacheStorage.addAll(staticCashFiles);
// });

// self.addEventListener('activate', async (event) => {
//     const cacheNames = await caches.keys();
//     await Promise.all(
//         cacheNames
//             .filter((name) => name !== staticCashName)
//             .filter((name) => name !== dynamicCashName)
//             .map((name) => caches.delete(name))
//     );
// });

// self.addEventListener('fetch', (event) => {
//     const { request } = event;
//     const url = new URL(request.url);
//     if (url.origin === location.origin) {
//         event.respondWith(cacheFirst(request));
//     } else {
//         event.respondWith(networkFirst(request))
//     }
// });

// async function cacheFirst(resuest) {
//     const cachedData = await caches.match(resuest);
//     return cachedData ?? (await fetch(resuest));
// }

// async function networkFirst(request) {
//     const cache = await caches.open(dynamicCashName);
//     try {
//         const response = await fetch(request);
//         cache.put(request, response.clone())
//         return response;
//     } catch {
//         const cached = await caches.match(request);
//         return cached // ?? await caches.match('/offline.html')
//     }
// }



