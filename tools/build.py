"""오프라인용 빌드.

python tools/build.py
  1) sw.js           : GitHub Pages에서 '홈 화면에 추가'하면 전체를 저장하는 서비스 워커 (파일 목록·버전 자동 생성)
  2) dist/fukuoka-guide-offline.html : 사진까지 넣은 한 파일짜리 HTML (인터넷 없이 열림)
  3) dist/fukuoka-guide-offline.zip  : 위 HTML + 사용법

필요: Python 3, Pillow
"""
import base64
import hashlib
import io
import json
import os
import zipfile

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")
IMG_DIR = os.path.join(ROOT, "img")


def read(name, mode="r"):
    with open(os.path.join(ROOT, name), mode, **({} if "b" in mode else {"encoding": "utf-8"})) as f:
        return f.read()


def build_sw():
    imgs = sorted("img/" + f for f in os.listdir(IMG_DIR) if f.lower().endswith((".jpg", ".png", ".webp")))
    core = ["./", "index.html", "content.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"]
    h = hashlib.sha1()
    for p in core[1:] + imgs:
        h.update(read(p, "rb"))
    version = h.hexdigest()[:10]
    sw = f"""/* 자동 생성: tools/build.py — 직접 고치지 마세요 */
const CACHE = "fkg-{version}";
const ASSETS = {json.dumps(core + imgs, ensure_ascii=False)};

self.addEventListener("install", e => {{
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
}});

self.addEventListener("activate", e => {{
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({{ includeUncontrolled: true }}))
      .then(cs => cs.forEach(c => c.postMessage("precached")))
  );
}});

const put = (req, res) => {{ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; }};

self.addEventListener("fetch", e => {{
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) {{
    e.respondWith(fetch(req).then(res => put(req, res)).catch(() => caches.match(req)));
    return;
  }}
  const fresh = req.mode === "navigate" || /\\/$|\\.html$|content\\.js$/.test(url.pathname);
  if (fresh) {{
    e.respondWith(fetch(req).then(res => put(req, res)).catch(() =>
      caches.match(req, {{ ignoreSearch: true }}).then(r => r || caches.match("./"))));
  }} else {{
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => put(req, res))));
  }}
}});
"""
    with open(os.path.join(ROOT, "sw.js"), "w", encoding="utf-8") as f:
        f.write(sw)
    print("sw.js", version, len(core) + len(imgs), "files")


def data_uri(path, maxw=900, q=74):
    im = Image.open(path).convert("RGB")
    if im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=q, optimize=True, progressive=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()


def build_single():
    os.makedirs(DIST, exist_ok=True)
    html = read("index.html")
    content = read("content.js")
    imgs = {"img/" + f: data_uri(os.path.join(IMG_DIR, f)) for f in sorted(os.listdir(IMG_DIR)) if f.lower().endswith((".jpg", ".png", ".webp"))}
    tag = '<script src="content.js"></script>'
    assert tag in html
    inline = ("<script>window.OFFLINE_IMG = " + json.dumps(imgs) + ";</script>\n<script>\n"
              + content.replace("</script", "<\\/script") + "\n</script>")
    html = html.replace(tag, inline)
    # 한 파일 버전엔 PWA 태그가 필요 없어요
    for t in ['<link rel="manifest" href="manifest.webmanifest">\n', '<link rel="icon" href="icon-192.png">\n', '<link rel="apple-touch-icon" href="icon-180.png">\n']:
        html = html.replace(t, "")
    out = os.path.join(DIST, "fukuoka-guide-offline.html")
    with open(out, "w", encoding="utf-8") as f:
        f.write(html)
    print("offline html", round(os.path.getsize(out) / 1e6, 1), "MB,", len(imgs), "images")

    readme = """후쿠오카 가족여행 가이드 · 오프라인 버전

1. 이 zip 파일의 압축을 풉니다.
2. fukuoka-guide-offline.html 을 더블클릭하면 브라우저(크롬·엣지·사파리)로 열립니다.
   인터넷이 없어도 사진과 검색까지 모두 됩니다. 글꼴만 기본 글꼴로 보여요.
3. 공식 사이트·지도 같은 바깥 링크는 인터넷이 있어야 열립니다.

휴대폰에서는 이 파일보다 아래 방법이 편해요.
- 아이폰(사파리) / 안드로이드(크롬)로 https://binary-hyuk.github.io/travel_japan/ 를 엽니다.
- 공유 → '홈 화면에 추가' (안드로이드는 메뉴 → '홈 화면에 추가' 또는 '앱 설치').
- 홈 화면 아이콘으로 인터넷이 될 때 한 번 열어 '오프라인으로 볼 준비가 됐어요'가 뜨면,
  그다음부터는 비행기 모드에서도 열립니다.
"""
    zp = os.path.join(DIST, "fukuoka-guide-offline.zip")
    with zipfile.ZipFile(zp, "w", zipfile.ZIP_DEFLATED) as z:
        z.write(out, "fukuoka-guide-offline.html")
        z.writestr("README-offline.txt", "﻿" + readme.replace("\n", "\r\n"))
        csv_path = os.path.join(ROOT, "atm-fukuoka.csv")
        if os.path.exists(csv_path):
            z.write(csv_path, "atm-fukuoka.csv")
    print("zip", round(os.path.getsize(zp) / 1e6, 1), "MB")


if __name__ == "__main__":
    build_sw()
    build_single()
