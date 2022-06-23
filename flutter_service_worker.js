'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cfce81b9d65e5d8be428bd417cbf855c",
"index.html": "82355ff8bea0adb59c71ae9a0fbce53d",
"/": "82355ff8bea0adb59c71ae9a0fbce53d",
"main.dart.js": "16771d7ee80b00990cb9aff0b18b5e76",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "37428aa483e9a9bbcd84868621b4d046",
".git/config": "22824e9b6d6b46a48c0e2a19c24097fc",
".git/objects/61/31c2c11b5a1e72152c65581e599ca805eee1fa": "5bd56e4c9b5a21bd8cd1940a90183dac",
".git/objects/66/21ef2b0e4cb358775aa5b7de3b9e4845d5b2e0": "0e90de5ac7ccf34a02a1d57e2f56fe46",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/9b/21d079cc7a722ca3b4fbd9d657c4e865b832c7": "f12e923a7dd598bf9206a51622867a2c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/13acf173a9437d53011f3afca7baad3546fa3d": "111fd66f5911b2877f7b2f7f0776c0fd",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/60/2d2e360067ed55f4e9ed1cb9c8e82fe95f8681": "2f36a641ce0272a7a79ef8c512ea773a",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/df/f570f74e74369200d2675e06dd40705d7c8f2a": "3059bcddf5e1a273bc77661458e6a999",
".git/objects/d1/5dfba2f5018c2bc38f90d2c0e373d6f8be774a": "74db11906d097f0d9f191401e7369724",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/2dc10e1db21f6b33ef000c0a9b0b982b3faadd": "c30a887a81cdf485f61c664fcdadfe24",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/7082d9bd2ddbaebe214e2760495de616ee56f2": "4ef9f119eb007d19ac19e633e941025a",
".git/objects/f5/cf8a73cb28e5037196bc927fb3954b3aa8356c": "4b7afa01616073fc156b9492de047190",
".git/objects/cf/7456bd2897b8dd2843480d61dc549b4584ab50": "d3a204677c4c8cd24b280aedb1a7a524",
".git/objects/e4/5e6490b3bcfe6406a04a30f3ab378831afb0c5": "3f8adc57379a0dcd456a3095390f476f",
".git/objects/c8/20766698c018e649422b38f6e0f98b67adc885": "5d3c199ec74559d2445e442a467acfb5",
".git/objects/4b/92d92e48cd8143c260808c1ab537467785c133": "991dde297d20870bc6a24704dc917c1d",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/16/e3d5e9cb3d62e5f241683f7ed38e25c16443cf": "5cdd824d0bc2c9b9cc3b06e6349f7c16",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/8c871e5b6bd6158982a8f7eb9efb1a4513ef32": "00480201e87acada8b09f8715565bd4f",
".git/objects/72/5900fb063b12ab419ef0ea3bbf8f2019900b24": "acf9ac33a7908e0bc7f85c8d24cb6d43",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/59d70302e71d4e0ce0428a87d28a7ee712a7df": "4fc9aae87aba074d2ebd1d78b7d8d468",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/36/3c1c19e65dea8feb1596d661a85c854996d5b0": "a0499836e7e255f42bd7d7d91be60466",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/96/02b812d670a6ae834d5f747bc9f84fb41214ff": "c2990e8788e6b529d72bc7375640399c",
".git/objects/3a/0093c49dcad1bcd5f882cf7336170979463013": "f69d400999df91585fa0102ade1eadd3",
".git/objects/30/e7a098d971796f826a7b873343617cf1c712a2": "f8382602e5be658f4d9985145b40f626",
".git/objects/6d/e40cb2c127f9a2d529c3a2346d2a2788009e5e": "c60d794d010d6ab6c08c5309c9b3d062",
".git/objects/01/9a7d2bf0c68651e2beb7f187e84370d42a830e": "cdc64f713d22cab0af1b2e7a274f0fb2",
".git/objects/39/c6d0de57becb7623af2a0b23b4249351553fce": "dbac1a414b499e01ac7779d8abf1725c",
".git/objects/a0/453a3d9c25b8e5ddf19a9dc9d9616940f07771": "e95b51a746b13331979db7e5d49c23ce",
".git/objects/a9/5f63aa117625e29490dc4a0ec52b8dc802a462": "70fb45cbc8f966b50a7e118aefa5e387",
".git/objects/a9/4346fb0d9305d49716e0a9d5f9c5708d5581d8": "7762bcb14961931857c5c8dabba2bbca",
".git/objects/d2/5e0854e37168243a6a0ce88a60ae71abc8abd9": "fe415f9f89b1e3f24bc7e617c8b456d1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/e84651e2caeb6438f0c9e9c28abd6235625282": "e8f9b677e377f1dbb2b823d83ad90a67",
".git/objects/a6/daa25c7558e38f1d3572b94c20c9d2a1ff912c": "7c7416ba5623a91804bad8aff3e8d621",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e8/9c143bfbc2f5cd36f292de2fac93de69f454c8": "7fe404fd6ddea6eac7b16b1288dce551",
".git/objects/cb/eb72115723346167d07b3dc4b4861caa065e47": "44ddcb443ba8703fa626e5c572785282",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/b426a60af6d6ecabab818d840eae3a1fb11cd8": "de2285c9f433a4f6ff479d4e5a9f5284",
".git/objects/8c/0a562beeef35ab1cc2bb26ff71ec39013cd13e": "0f2785740c4f16dbc69be6456c316011",
".git/objects/2e/a7a857ddc20346e9da503e3818efb349864046": "a9011fa4af840cf171aafab8aacd2ad1",
".git/objects/2e/34b32cf1b38c0d9debd09dcd3f6f1500d55726": "946127c7ab8e3f74f9d7836efd7c98af",
".git/objects/78/f7029959305bead6a812f35e35b8e746e43b5a": "1b6584b1aaa0ef5812974a4fc36ec695",
".git/objects/14/eb7b84a8e46a429dc1267f91456cdd9b422cb1": "22363e42752a60b3091ef2830523af3c",
".git/objects/8e/1d60aebd7cae0efecb435644043e1035d3927c": "474702f438aebd9580e47245c040c008",
".git/objects/22/e16572fb466599301170cb0a7226900238f9a4": "9a264579e312ca65b27ea1117022f8f2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "29c338ea7886f9aef0dbf52824b8f77c",
".git/logs/refs/heads/main": "469f816f237ce964b16ac83a04b51906",
".git/logs/refs/remotes/origin/main": "197a16d4078d2c672d6a843efdaa344a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9135f91bd6c544ec2410d7197750f4de",
".git/refs/remotes/origin/main": "9135f91bd6c544ec2410d7197750f4de",
".git/index": "4b3bcd3a1d6d63cc5d95c9ab51d85702",
".git/COMMIT_EDITMSG": "d4b596b5ccf10acae8a6a5498eddb844",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/NOTICES": "f19ecdf655728ffeabafa5538d3523bb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
