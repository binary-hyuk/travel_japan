/* 자동 생성: tools/build.py — 직접 고치지 마세요 */
const CACHE = "fkg-068b3d39fe";
const ASSETS = ["./", "index.html", "content.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "img/cafe-bake.jpg", "img/cafe-fuk.jpg", "img/cafe-muen.jpg", "img/cafe-starbucks-ohori.jpg", "img/cafe-suzukake-chaho.jpg", "img/cafe-suzukake-parfait.jpg", "img/cafe-torimon.jpg", "img/cafe-zenzai.jpg", "img/canal-dancing-fountain.jpg", "img/canal-fountain-schedule.jpg", "img/canal-fountain.jpg", "img/canal-night.jpg", "img/dinner-hakata-ramen.jpg", "img/ferry-timetable-oct.jpg", "img/hakata-hakataguchi.jpg", "img/hamburg-steak-2.jpg", "img/hamburg-steak.jpg", "img/hotel-map-ja.jpg", "img/hotel-map-ko.jpg", "img/jp-dazaifu-starbucks.jpg", "img/jp-dazaifu.jpg", "img/jp-jotenji.jpg", "img/jp-kawabata.jpg", "img/jp-kushida.jpg", "img/jp-machiya.jpg", "img/jp-miyajidake.jpg", "img/jp-ohori-garden.jpg", "img/jp-rakusuien.jpg", "img/jp-sumiyoshi.jpg", "img/jp-tochoji.jpg", "img/jp-yanagawa.jpg", "img/kids-chikyunoniwa.jpg", "img/kids-sciencemuseum.jpg", "img/kids-skidsgarden-price.jpg", "img/kids-skidsgarden.jpg", "img/marine-aerial.jpg", "img/marine-exterior.jpg", "img/marine-from-park.jpg", "img/marine-show-weekday.jpg", "img/marine-show-weekend.jpg", "img/marine-showpool.jpg", "img/marine-tank-weekend.jpg", "img/milk-icreo-growup.jpg", "img/milk-meiji-200.jpg", "img/milk-step-cube.jpg", "img/milk-step-liquid.jpg", "img/place-canalcity.jpg", "img/place-lalaport-gundam.jpg", "img/place-motsunabe.jpg", "img/place-riverain.jpg", "img/place-toymuseum.jpg", "img/safari-junglebus.jpg", "img/safari-park.jpg", "img/snack-amazake-marukome.jpg", "img/snack-aqualite.jpg", "img/snack-bisco.jpg", "img/snack-daikon.jpg", "img/snack-haihain.jpg", "img/snack-hoshiimo.jpg", "img/snack-kozakana.jpg", "img/snack-kuzuyu.jpg", "img/snack-milo.jpg", "img/snack-morinaga-mammygelee.jpg", "img/snack-tamagoboro.jpg", "img/snack-wakodo-gokugoku.jpg", "img/snack-wakodo-myjelly.jpg", "img/snack-yakult.jpg", "img/snack2-6p.jpg", "img/snack2-anpan-biscuit.jpg", "img/snack2-anpan-senbei.jpg", "img/snack2-fish-sausage.jpg", "img/snack2-manna.jpg", "img/snack2-perochoco.jpg", "img/snack2-pigeon-senbei.jpg", "img/snack2-wakodo-ebi.jpg", "img/snack2-wakodo-spinach.jpg", "img/takeo-kidslibrary.jpg", "img/takeo-library.jpg", "img/takeo-mifuneyama.jpg", "img/takeo-romon.jpg", "img/udon-goboten.jpg", "img/udon-hakata.jpg", "img/udon-maki.jpg", "img/zoo-gate.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ includeUncontrolled: true }))
      .then(cs => cs.forEach(c => c.postMessage("precached")))
  );
});

const put = (req, res) => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; };

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) {
    e.respondWith(fetch(req).then(res => put(req, res)).catch(() => caches.match(req)));
    return;
  }
  const fresh = req.mode === "navigate" || /\/$|\.html$|content\.js$/.test(url.pathname);
  if (fresh) {
    e.respondWith(fetch(req).then(res => put(req, res)).catch(() =>
      caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("./"))));
  } else {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => put(req, res))));
  }
});
