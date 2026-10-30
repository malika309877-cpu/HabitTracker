var C="habits-v1",F=["./","index.html","manifest.webmanifest","icon.svg","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C}).map(function(n){return caches.delete(n)}))}))});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;
e.respondWith(caches.match(e.request).then(function(m){var n=fetch(e.request).then(function(r){var x=r.clone();caches.open(C).then(function(c){c.put(e.request,x)});return r}).catch(function(){return m});return m||n}))});
