const CACHE_NAME="2023-07-26 00:10",urlsToCache=["/irregular-verbs/","/irregular-verbs/index.js","/irregular-verbs/easy/","/irregular-verbs/hard/","/irregular-verbs/favicon/favicon.svg"];self.addEventListener("install",a=>{a.waitUntil(caches.open(CACHE_NAME).then(a=>a.addAll(urlsToCache)))}),self.addEventListener("fetch",a=>{a.respondWith(caches.match(a.request).then(b=>b||fetch(a.request)))}),self.addEventListener("activate",a=>{a.waitUntil(caches.keys().then(a=>Promise.all(a.filter(a=>a!==CACHE_NAME).map(a=>caches.delete(a)))))})