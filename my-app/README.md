# Cour-LP-React-PWA

Client - part 2 - ServiceWorker

## Add a custom service worker

In index.js at the end you have a line of code 

```
serviceWorker.unregister();
```

change to :

```
serviceWorker.register();
```

That permit to register the service worker on the navigateur

> Note: if you only register your service worker like that it will take by default, the sw given by the facebook sample, we have to redifine it.


Create on the public folder a file named sw.js, it's your new serviceWorker

Find the file serviceWorker.js at src/

Then find the suscribe of the event "load" in the register() function, change the code to suscribe your sw. 

```
const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
```

Then if will use your new js file.
Your file is empty for now we have to redefined some event:

- `install`: Install of the serviceWorker.
- `fetch`: Get information stocked in the cache of the navigator.

Install event on sw.js:
```
console.log("Your custom ServiceWorker! 👍 ");

var CACHE = "cache-update-and-refresh";

self.addEventListener("install", function(evt) {
  console.log("The service worker is being installed.");
  evt.waitUntil(
    caches.open(CACHE).then(function(cache) {
      cache.addAll(["./index.html", "./assets"]);
    })
  );
});
```

Load event on sw.js:

```
self.addEventListener("fetch", function(evt) {
  console.log("The service worker is serving the asset.");
  evt.respondWith(fromCache(evt.request));
  evt.waitUntil(update(evt.request).then(refresh));
});

function fromCache(request) {
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request);
  });
}
function update(request) {
  return caches.open(CACHE).then(function(cache) {
    return fetch(request).then(function(response) {
      return cache.put(request, response.clone()).then(function() {
        return response;
      });
    });
  });
}

function refresh(response) {
  return self.clients.matchAll().then(function(clients) {
    clients.forEach(function(client) {
      var message = {
        type: "refresh",
        url: response.url,
        eTag: response.headers.get("ETag")
      };
      client.postMessage(JSON.stringify(message));
    });
  });
}
```

## TEST

To check that (on chrome), press F12 and go to the tabs "application" and then "Service Worker", if your service worker is correctly registered your will see it.

> You can now test of an install of your app, verify if your manifest.json is completed

A tab named "Cache storage", will show you all the data cached by the serviceworker.
