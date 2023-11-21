const CACHE_NAME = "my-pwa-cache";
const urlsToCache = ["/", "/index.html", "/manifest.json", "/icons"];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request).then((response) => {
                if (!response || response.status !== 200 || response.type !== "basic") {
                    return response;
                }
                // const responseToCache = response.clone();
                // caches.open(CACHE_NAME).then((cache) => {
                //     cache.put(event.request, responseToCache);
                // });
                return response;
            });
        })
    );
});

self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// self.addEventListener("beforeinstallprompt", (event) => {
//     event.preventDefault();
//     const deferredPrompt = event;
//     const installButton = document.getElementById("install-button");
//     installButton.style.display = "block";
//     installButton.addEventListener("click", () => {
//         deferredPrompt.prompt();
//         deferredPrompt.userChoice.then((choiceResult) => {
//             if (choiceResult.outcome === "accepted") {
//                 console.log("User accepted the install prompt");
//             } else {
//                 console.log("User dismissed the install prompt");
//             }
//             deferredPrompt = null;
//             installButton.style.display = "none";
//         });
//     });
// });


