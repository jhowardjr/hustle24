self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('hustle24-static-v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/css/styles.css',
                '/images/front.jpg',
                '/posts/2017/12/15/can-i-justify-crypto-mining/',
                '/posts/2017/12/08/value-the-hammer-and-the-nail/',
                '/posts/2017/11/29/buying-cryptocurrency-with-coinbase/'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});