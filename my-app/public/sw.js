console.log("Your ServiceWorker! 👍 ");

self.addEventListener("install", function(evt) {
  console.log("The service worker is being installed.");
});

self.addEventListener("fetch", function(evt) {
  console.log("The service worker is serving the asset.");
});
