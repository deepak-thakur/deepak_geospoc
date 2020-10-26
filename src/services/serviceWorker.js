self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

var CACHE = "network-or-cache";



self.addEventListener("fetch", function(event) {
  console.log("The service worker is serving the asset.");
  event.respondWith(
    fromNetworkData(event.request, 400).catch(function() {
      return fromCacheData(event.request);
    })
  );
});

function precache() {
  return caches.open(CACHE).then(function(cache) {
    return cache.addAll(["./index.html"]);
  });
}

function fromNetworkData(request, timeout) {
  return new Promise(function(fulfill, reject) {
    var timeoutId = setTimeout(reject, timeout);

    fetch(request).then(function(response) {
      clearTimeout(timeoutId);
      fulfill(response);
    }, reject);
  });
}

function fromCacheData(request) {
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request).then(function(matching) {
      return matching || Promise.reject("no-match");
    });
  });
}