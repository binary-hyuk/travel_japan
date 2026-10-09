/* ─────────────────────────────────────────────────────────────
   후쿠오카 가족여행 가이드 · 콘텐츠 데이터
   새 내용을 추가할 때는 sections 배열에 객체 하나를 더하면 됩니다.
   검색은 여기 들어 있는 모든 글자(제목·본문·표·태그)를 자동으로 색인합니다.

   섹션: { id, cat, code, ko, jp, ro, short, lead, summary, keywords[], blocks[], sources[], checked }
   블록 type
     text      { title, html }
     callout   { tone: ""|"warn"|"danger"|"ok", title, html }
     facts     { title, rows: [[라벨, 값html, {show, sub, copy}?]] }
     table     { title, head[], rows[[]], numCols[], note }
     route     { title, pick, tags, summary:[[값, 라벨]], steps:[{stop, note} | {mode, text, time, note}], note }
               mode: walk | subway | jr | bus | ferry | taxi | shuttle
     items     { title, items:[{ name, jp, img, credit, srcUrl, tags, html, caution, link, linkLabel }] }
     gallery   { title, images:[{ src, caption, credit, srcUrl }] }
     timeline  { title, items:[{ time, title, html, tone }] }
     phrases   { title, items:[{ ko, jp, pron }] }   ← ‘여행 일본어’ 탭에 자동으로 모입니다
     links     { title, items:[{ label, url, note }] }
     checklist { title, items:["…"] }               ← 체크 상태는 이 브라우저에 저장
   ───────────────────────────────────────────────────────────── */
window.GUIDE = {
  categories: [
    { id: "move", ko: "이동", jp: "移動", color: "#0B6B73", empty: "" },
    { id: "baby", ko: "아기와 함께", jp: "子連れ", color: "#8A3D6B", empty: "" },
    { id: "place", ko: "가볼 곳", jp: "観光", color: "#1D5EA8", empty: "" },
    { id: "food", ko: "먹을거리", jp: "食べ物", color: "#9C3437", empty: "" },
    { id: "lang", ko: "언어", jp: "ことば", color: "#3B4C63", empty: "" },
    { id: "prep", ko: "준비", jp: "準備", color: "#5B6A2A", empty: "" }
  ],

  searchHints: ["분수쇼", "돌고래쇼", "우동", "아기의자", "키즈메뉴", "Suica", "전자레인지", "옷차림", "수유실", "소아과"],

  trip: {
    title: "후쿠오카 3박 4일 가족여행",
    subtitle: "2026.10.10(토) – 10.13(화) · 어른 2 + 23개월 아기 · 더 블라섬 하카타 프리미어",
    start: "2026-10-10",
    end: "2026-10-13",
    days: [
      { date: "2026-10-10", dow: "토", tags: [["흐림·가끔 맑음 21~29℃", "sea"], ["일본 3연휴", "signal"]],
        items: [
          { time: "11:10", text: "후쿠오카공항 국제선 도착", link: "airport" },
          { time: "12:40", text: "숙소에 짐 맡기고 점심", link: "airport--arrive" },
          { time: "15:00", text: "체크인 · 휴식" },
          { time: "16:00", text: "캐널시티 분수쇼 · 캐릭터숍 (도보)", link: "canal--route" },
          { time: "17:00", text: "저녁 · 모츠나베 이치후지 (예약)", link: "saved" }
        ] },
      { date: "2026-10-11", dow: "일", tags: [["흐림·가끔 맑음 21~29℃", "sea"], ["B안: 마린월드", "signal"]],
        items: [
          { time: "09:30", text: "호빵맨 뮤지엄 (이날만 9:30 개장)", link: "lalaport--anpanman" },
          { time: "11:30", text: "택시로 라라포트 · 푸드코트 점심", link: "lalaport--lalaport" },
          { time: "12:45", text: "유모차 낮잠 · 아카짱혼포", link: "lalaport--lalaport" },
          { time: "15:30", text: "택시로 숙소 · 저녁은 숙소 2층/くうてん", link: "dinner" }
        ] },
      { date: "2026-10-12", dow: "월 · 공휴일", holiday: true, tags: [["흐림·가끔 맑음 18~29℃", "sea"], ["B안: 호빵맨·라라포트", "signal"]],
        items: [
          { time: "09:20", text: "택시로 마린월드", link: "marine--plan" },
          { time: "14:42", text: "JR로 귀가 · 낮잠", link: "marine--plan" },
          { time: "18:00", text: "저녁 · くうてん 또는 우동", link: "dinner" }
        ] },
      { date: "2026-10-13", dow: "화", tags: [["흐리고 한때 비 60%", "signal"]],
        items: [
          { time: "07:30", text: "아침 우동 · (비 안 오면) 구시다 신사", link: "udon--list" },
          { time: "09:30", text: "택시로 공항 출발", link: "airport--depart" },
          { time: "12:10", text: "후쿠오카공항 출발" }
        ] }
    ],
    keycards: [
      { label: "숙소", big: "더 블라섬 하카타 프리미어",
        html: `<p class="jp">ザ ブラッサム博多プレミア · 博多区博多駅前2-8-12</p><p>체크인 15:00 · 체크아웃 11:00 · <a href="#airport">가는 법</a></p>` },
      { label: "항공 (후쿠오카공항 국제선)", big: `<span class="num">10/10 11:10</span> 도착`,
        html: `<p><b class="num">10/13 12:10</b> 출발 → 숙소에서 <b>9:30쯤</b> 나서기</p>` },
      { label: "아기가 아플 때 (한국어)", big: `<span class="num">119</span> · <span class="num">092-733-5429</span>`,
        html: `<p>구급차 119(한국어 통역 연결) · 의료통역 콜센터 24시간. <a href="#baby--emergency">연락처 전체 보기</a></p>` },
      { label: "이동 원칙", big: "택시 + JR·지하철",
        html: `<p>아기 동반이라 버스·페리는 뺐어요. 지하철·JR은 카드 터치 OK(카드 1장 = 1명).</p>` }
    ],
    notices: [
      { tone: "ok", title: "인터넷 없이 보기",
        html: `<ul>
<li><b>휴대폰</b> · 이 사이트를 사파리(아이폰)·크롬(안드로이드)으로 열고 <b>공유 → 홈 화면에 추가</b>. 홈 화면 아이콘으로 인터넷 될 때 한 번 열어 ‘오프라인으로 볼 준비가 됐어요’가 뜨면, 그다음부턴 비행기 모드에서도 사진까지 다 보여요.</li>
<li><b>PC·노트북</b> · <a href="https://github.com/binary-hyuk/travel_japan/releases/latest/download/fukuoka-guide-offline.zip">오프라인 zip 내려받기</a> → 압축 풀고 <code>fukuoka-guide-offline.html</code> 더블클릭. 파일 하나에 사진까지 다 들어 있어요.</li>
<li>공식 사이트·지도 같은 바깥 링크는 인터넷이 있어야 열려요.</li></ul>` },
      { tone: "", title: "마린월드 날짜는 10/10 저녁 예보 보고 정해요",
        html: `<p>기본은 <b>A안</b>(10/11 호빵맨·라라포트, 10/12 마린월드). 10/10 저녁 기상청 예보에서 10/12에 비가 들거나 강수확률이 50%를 넘으면 <b>B안</b>(10/11 마린월드, 10/12 호빵맨·라라포트)으로 바꾸세요. 호빵맨 웹티켓은 날짜를 정한 뒤에 사면 돼요(당일 16시까지 판매). <a href="#lalaport--plan-b">A안·B안 자세히</a></p>` },
      { tone: "warn", title: "일본 3연휴와 한국 한글날 연휴가 겹쳐요",
        html: `<p>10/12(월)이 일본 공휴일(스포츠의 날)이라 10/10~12는 일본 3연휴이고, 한국은 10/9(금) 한글날부터 연휴입니다. 입국심사, 마린월드, 하카타역 식당가 모두 평소 주말보다 붐빈다고 보고 움직이세요. 10/10(토) 10~15시에는 텐진~나카스 明治通り가 자전거 대회로 통제됩니다.</p>` }
    ]
  },

  sections: []
};

/* ═════════════ 이동 · 공항 → 숙소 ═════════════ */
GUIDE.sections.push({
  id: "airport", cat: "move", code: "T01",
  ko: "공항 → 숙소", short: "공항·숙소", jp: "福岡空港 → ホテル", ro: "Fukuoka Airport → Hotel",
  lead: "국제선 도착(11:10) 후 숙소까지 택시 15~20분, 지하철 35~45분입니다. 23개월 아기에 짐·유모차까지 있으니 <b>택시</b>를 권하고, 지하철은 대안으로 정리했어요. 체크인은 15:00이고, 그 전에 프런트에 짐을 맡길 수 있습니다.",
  summary: "숙소 정보, 택시·지하철·버스 비교, 도착 로비에서 할 일, 귀국일 출발 시각",
  keywords: ["숙소", "호텔", "hotel", "블라섬", "ブラッサム", "공항", "airport", "국제선", "입국", "하카타역", "博多駅", "祇園", "기온"],
  checked: "2026-10-05",
  blocks: [
    { type: "say", items: [{"ko": "이 주소로 가 주세요.", "jp": "この住所までお願いします。", "pron": "코노 쥬-쇼 마데 오네가이시마스."}, {"ko": "체크인 전에 짐을 맡길 수 있나요?", "jp": "チェックインの前に荷物を預けられますか？", "pron": "첵쿠인노 마에니 니모츠오 아즈케라레마스카?"}] },

    { type: "facts", title: "숙소",
      rows: [
        ["이름", `THE BLOSSOM HAKATA Premier <span class="jp">(ザ ブラッサム博多プレミア)</span> · JR큐슈 호텔`],
        ["주소", `<span class="jp">〒812-0011 福岡県福岡市博多区博多駅前2丁目8-12</span>`, { show: "ザ ブラッサム博多プレミア\n博多駅前2丁目8-12までお願いします。", sub: "더 블라섬 하카타 프리미어(하카타에키마에 2-8-12)까지 가 주세요.", copy: "福岡県福岡市博多区博多駅前2丁目8-12 ザ ブラッサム博多プレミア" }],
        ["전화", `<span class="num">092-431-8702</span>`, { copy: "092-431-8702" }],
        ["체크인 · 아웃", `<span class="num">15:00</span> · <span class="num">11:00</span>`],
        ["짐 보관", "체크인 전과 체크아웃 후 모두 프런트에서 맡아 줍니다. 체크아웃 후는 당일만, 귀중품·깨지는 물건은 제외. (공식 FAQ 색인 기준이라 예약 확인 때 한 번 더 물어보세요)"],
        ["아이", "6세 이하는 침대 1개당 1명까지 무료로 같이 잘 수 있어요. 베이비 코트·베이비가드(베드가드)는 여행사 정보로는 대여 가능(수량 한정)이라 미리 요청하세요."],
        ["전자레인지", "<b>4층 대욕장 맞은편</b>, 자판기·제빙기·코인세탁기와 같은 곳(숙박 후기 2023·2025년 기준). 공식 시설 안내엔 자판기·제빙기(4층)만 있고 전자레인지는 없어서, 체크인 때 위치와 이용 시간을 물어보세요."],
        ["객실 비품", "<b>전기포트(湯沸かしポット)·냉장고</b>·가습기·금고(라쿠텐트래블 시설 정보). 전자레인지는 객실에 없어요."],
        ["대여 물품", "베이비 코트, 베이비가드, <b>체온계</b>, <b>변압기</b>, 휴대폰 충전기, 우산, 담요, 손톱깎이 등(한큐교통사·라쿠텐트래블 표기)."],
        ["대욕장 (4층)", "무료 · <span class=\"num\">15:00–25:00 / 6:00–9:00</span> · <b>기저귀를 아직 안 뗀 아이는 입욕 불가</b>. 같은 층에 코인세탁기."],
        ["가까운 역", `JR 하카타역 도보 약 7분(博多口 쪽) · 지하철 공항선 <span class="jp">祇園</span>역 5번 출구 약 6분 · 七隈線 <span class="jp">櫛田神社前</span>역 5번 출구 약 2분`],
        ["지도", `<a href="https://maps.app.goo.gl/EsNrK6KFxF64w8RT6" target="_blank" rel="noopener">Google 지도 ↗</a> · <a href="https://www.jrk-hotels.co.jp/Hakata_premier/access/" target="_blank" rel="noopener">호텔 공식 오시는 길 ↗</a>`]
      ] },

    { type: "gallery",
      images: [
        { src: "img/hotel-map-ko.jpg", caption: "호텔 위치. 하카타역 서쪽(博多口), 기온·구시다신사마에역 사이", credit: "호텔 공식 사이트 지도 캡처", srcUrl: "https://www.jrk-hotels.co.jp/Hakata_premier/access/" },
        { src: "img/hotel-map-ja.jpg", caption: "일본어 지도. 택시 기사에게 그대로 보여 주세요", credit: "호텔 공식 사이트 지도 캡처", srcUrl: "https://www.jrk-hotels.co.jp/Hakata_premier/access/" },
        { src: "img/hakata-hakataguchi.jpg", caption: "하카타역 博多口 광장. 숙소는 이쪽 출구로 나와 북서쪽", credit: "そらみみ · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:View_in_front_of_Hakata_Entrance_of_Hakata_Station.jpg" }
      ] },

    { type: "table", title: "한눈에 비교 (어른 2 + 23개월)",
      head: ["방법", "걸리는 시간", "요금 합계", "아기·유모차·짐", "추천"],
      rows: [
        ["<b>택시</b>", "15~20분", "약 2,000~2,500엔 (추정, 1대)", "갈아타기 없이 호텔 문 앞까지", `<span class="tag ok">추천</span>`],
        ["무료 연락버스 + 지하철", "35~45분 (추정)", "520엔 (260엔×2, 아기 무료)", "엘리베이터 동선 있음, 짐 들고 환승 1회", `<span class="tag sea">대안</span>`],
        ["공항 직행버스", "15~20분 + 도보 10~15분", "760엔 (카드 터치 380엔×2)", "역 반대편 출구에 내림", `<span class="tag">비추천</span>`]
      ],
      note: "택시 요금은 2026년 7월 1일 개정 요금(1.1km까지 600엔, 이후 287m마다 100엔)으로 계산한 추정치이고 막히면 더 나옵니다. 연락버스는 터미널 사이를 오가는 10분짜리 무료 셔틀이라, 지하철을 탈 때만 거칩니다." },

    { type: "route", title: "택시 (추천)", pick: true, tags: [["문 앞까지", "ok"]],
      summary: [["15~20분", ""], ["약 2,000~2,500엔", "추정"]],
      steps: [
        { stop: "국제선 1층 도착 로비", note: "입국심사·세관을 나오면 1층입니다. 밖으로 나가면 택시 승차장." },
        { mode: "taxi", text: "기사에게 숙소 주소 보여주기", time: "15~20분", note: "위 ‘숙소 → 주소’의 <b>크게 보기</b> 버튼을 누르면 일본어 주소가 화면 가득 뜹니다." },
        { stop: "더 블라섬 하카타 프리미어", note: "프런트에 짐 맡기기 (체크인 15:00)" }
      ],
      note: "일본은 택시에 카시트 의무가 면제돼 있습니다(도로교통법 시행령). 그래도 안전을 위해 아이는 꼭 안고 타세요. 유모차는 접어서 트렁크에." },

    { type: "route", title: "무료 연락버스 + 지하철 공항선", tags: [["저렴", "sea"]],
      summary: [["35~45분", "추정"], ["260엔", "어른 1인"], ["아이 무료", "보호자 동반"]],
      steps: [
        { stop: "국제선 1층 도착 로비 앞 연락버스 승차장", note: "무료 · 07~18시 5~6분 간격 · 모든 차량에 휠체어 슬로프" },
        { mode: "shuttle", text: "국내선 터미널행 연락버스", time: "약 10분" },
        { stop: "국내선 터미널 · 지하철 福岡空港역", note: "유모차는 국내선 터미널 개찰구 쪽 <b>南エレベーター(남쪽 엘리베이터)</b>로 내려가면 됩니다." },
        { mode: "subway", text: "공항선 <span class=\"jp\">姪浜</span> 방면", time: "祇園까지 약 8분 · 260엔" },
        { stop: "祇園 (기온)역", note: "엘리베이터는 <b>6번 출구에만</b> 있어요. 호텔에서 가장 가까운 5번 출구(도보 약 6분)는 계단입니다." },
        { mode: "walk", text: "숙소", time: "약 6~8분" },
        { stop: "더 블라섬 하카타 프리미어" }
      ],
      note: "하카타역(공항에서 2정거장, 약 5분)에서 내려 博多口로 나와 7분 걸어도 됩니다. 지하철은 Visa·Mastercard 등 카드 터치로 바로 탈 수 있는데, <b>카드 1장으로 1명만</b> 결제돼요. 어른 2명이면 카드 2장(하루 상한 640엔). 국제선↔국내선 전용도로 공사가 끝나면 연락버스 시간이 줄어들 예정이지만 완공 여부는 미확인입니다." },

    { type: "text", title: "참고 · 공항 직행버스를 권하지 않는 이유", tags: [["아기 동반 비추천", ""]],
      html: `<p>2025년 4월 26일부터 국제선 ↔ 하카타 직행버스는 하카타 버스터미널이 아니라 <b>博多駅 筑紫口(동쪽 출구)</b>에 내립니다. 숙소는 반대편 서쪽(博多口)이라 내린 뒤 아기와 짐을 데리고 역을 가로질러 10~15분 더 걸어야 해요(추정). 예전 블로그 글은 대부분 버스터미널 기준입니다.</p>
<ul><li>국제선 1층 6·7번 승차장 · 400엔(카드·IC 터치 380엔) · 토·일·공휴일 9:00~17:45 15분 간격 · 사실상 현금 불가</li>
<li>유모차는 펼친 채 탈 수 있지만 붐비면 접어 달라고 할 수 있고, 대형 유모차는 거절될 수 있어요. 1~6세는 어른 1명당 2명까지 무료.</li></ul>` },

    { type: "facts", title: "국제선 1층 도착 로비에서 할 일",
      rows: [
        ["ATM", "세븐은행 ATM · 보안검색 전 1층 · <span class=\"num\">05:00–21:40</span>"],
        ["환전", "후쿠오카은행 환전소, 트래블렉스 등 1층"],
        ["와이파이 · SIM", "글로벌WiFi·イモトのWiFi 등 카운터와 수령 사물함, SIM 자판기 (업체별 운영시간 미확인)"],
        ["수유실", "1층 2곳 · 수유 부스, 온수기, 기저귀 교환대"],
        ["유모차 대여", "무료 · 1층 안내소(07:00~) · 터미널 안에서만 사용"],
        ["IC카드", "nimoca는 국제선 1층 버스터미널에서 구입·충전(니시테츠 안내데스크 <span class=\"num\">8:30–21:20</span>). Suica 등 전국 교통카드도 그대로 쓸 수 있어요."],
        ["편의점", "액세스홀에 로손"]
      ] },

    { type: "timeline", anchor: "arrive", title: "도착일 흐름 · 10/10(토)",
      items: [
        { time: "11:10", title: "착륙 (국제선)" },
        { time: "~12:00", title: "입국심사 · 세관", html: "<p>연휴가 겹쳐 오래 걸릴 수 있어요. 소요 시간은 날마다 달라 예측하기 어렵습니다.</p>", tone: "warn" },
        { time: "", title: "1층에서 ATM · 와이파이 수령 · 수유실/기저귀" },
        { time: "~12:15", title: "택시 승차 → 약 20분" },
        { time: "~12:40", title: "숙소 프런트에 짐 맡기기", html: "<p>점심은 하카타역 쪽(도보 7분)으로</p>" },
        { time: "15:00", title: "체크인" }
      ] },

    { type: "timeline", anchor: "depart", title: "귀국일 · 10/13(화) 12:10 출발",
      items: [
        { time: "~9:00", title: "체크아웃 준비 (체크아웃은 11:00까지지만 일찍 나섭니다)" },
        { time: "9:30", title: "택시로 숙소 출발", html: "<p>연휴 다음 날 평일 아침이라 출근 정체를 감안했습니다. 버스로 간다면 9:05~9:15에 나서서 筑紫口 9:22 또는 9:37 버스(평일 9시대 :02·:22·:37·:52).</p>", tone: "warn" },
        { time: "~10:10", title: "공항 도착 (출발 2시간 전)", html: "<p>항공사마다 카운터 마감이 다릅니다. 예를 들어 대한항공은 출발 1시간 전 마감, 2시간 전 도착 권장. 이용 항공사 기준을 확인하세요.</p>" },
        { time: "12:10", title: "출발" }
      ],
      note: "시내에서 미리 국제선 체크인하는 서비스는 공항·항공사 공식 정보에서 찾지 못했어요. 공항에서 체크인한다고 보세요." },

    { type: "phrases", title: "택시 · 호텔에서",
      items: [
        { ko: "이 주소로 가 주세요.", jp: "この住所までお願いします。", pron: "코노 쥬-쇼 마데 오네가이시마스." },
        { ko: "트렁크에 유모차를 넣어도 될까요?", jp: "トランクにベビーカーを入れてもいいですか？", pron: "토랑쿠니 베비-카- 오 이레테모 이-데스카?" },
        { ko: "카드로 낼 수 있나요?", jp: "カードで払えますか？", pron: "카-도데 하라에마스카?" },
        { ko: "체크인 전에 짐을 맡길 수 있나요?", jp: "チェックインの前に荷物を預けられますか？", pron: "첵쿠인노 마에니 니모츠오 아즈케라레마스카?" },
        { ko: "베드가드를 빌릴 수 있나요?", jp: "ベッドガードを借りられますか？", pron: "벳도가-도오 카리라레마스카?" },
        { ko: "엘리베이터는 어디예요?", jp: "エレベーターはどこですか？", pron: "에레베-타-와 도코데스카?" },
        { ko: "후쿠오카공항 국제선 터미널로 가 주세요.", jp: "福岡空港の国際線ターミナルまでお願いします。", pron: "후쿠오카 쿠-코-노 코쿠사이센 타-미나루 마데 오네가이시마스." }
      ] }
  ],
  sources: [
    { label: "THE BLOSSOM HAKATA Premier · 오시는 길", url: "https://www.jrk-hotels.co.jp/Hakata_premier/access/" },
    { label: "THE BLOSSOM HAKATA Premier · 시설·서비스", url: "https://www.jrk-hotels.co.jp/Hakata_premier/facilities/" },
    { label: "니시테츠 · 공항(국제선)↔하카타역 노선 (筑紫口 변경)", url: "https://www.nishitetsu.jp/bus/rosen/akeito/" },
    { label: "니시테츠 · 캐시리스 버스", url: "https://www.nishitetsu.jp/bus/norikata/cashlessbus/" },
    { label: "니시테츠 · 유모차 승차", url: "https://www.nishitetsu.jp/bus/norikata/stroller/" },
    { label: "니시테츠 · 운임(유아 무료)", url: "https://www.nishitetsu.jp/bus/norikata/unchin/" },
    { label: "니시테츠 · 터치결제 가능 노선", url: "https://www.nishitetsu.jp/bus/norikata/tap-to-ride/" },
    { label: "후쿠오카공항 · 버스", url: "https://www.fukuoka-airport.jp/access/bus.html" },
    { label: "후쿠오카공항 · 터미널 간 연락버스", url: "https://www.fukuoka-airport.jp/access/bus2.html" },
    { label: "후쿠오카공항 · 지하철", url: "https://www.fukuoka-airport.jp/access/subway.html" },
    { label: "후쿠오카공항 · 택시", url: "https://www.fukuoka-airport.jp/access/taxi.html" },
    { label: "후쿠오카공항 · 수유실", url: "https://www.fukuoka-airport.jp/service/m-nursing-room.html" },
    { label: "후쿠오카공항 · 세븐은행 ATM", url: "https://www.fukuoka-airport.jp/service/bank19.html" },
    { label: "후쿠오카공항 · 유모차 대여", url: "https://www.fukuoka-airport.jp/service/information-office06.html" },
    { label: "후쿠오카시 지하철 · 터치결제", url: "https://subway.city.fukuoka.lg.jp/topics/detail.php?id=1895" },
    { label: "후쿠오카시 지하철 · 祇園역 구내도", url: "https://subway.city.fukuoka.lg.jp/eki/stations/gion.php" },
    { label: "TNC · 후쿠오카시 택시 요금 개정 (2026-07-01)", url: "https://news.tnc.co.jp/news/articles/NID2026062230913" },
    { label: "도로교통법 시행령 (택시 카시트 면제 조항)", url: "https://laws.e-gov.go.jp/law/335CO0000000270" },
    { label: "대한항공 · 공항 체크인 마감", url: "https://www.koreanair.com/gb/en/airport/check-in/airport-check-in/counter" }
  ]
});

/* ═════════════ 가볼 곳 · 마린월드 ═════════════ */
GUIDE.sections.push({
  id: "marine", cat: "place", code: "P01", order: 1,
  ko: "마린월드 우미노나카미치", short: "마린월드", jp: "マリンワールド海の中道", ro: "Marine World Uminonakamichi",
  lead: "하카타 앞바다 건너 우미노나카미치 반도 끝의 수족관입니다. 여행 기간 내내 정상 영업하고 돌고래·바다사자 쇼도 열려요. <b>23개월은 입장 무료</b>. 아기와 가기엔 <b>갈 때 택시(30~40분), 올 때 JR(환승 1회, 엘리베이터 있음)</b> 조합을 권합니다.",
  summary: "택시·JR로 가는 법, 쇼 시간, 요금, 유아 편의시설, 낮잠 넣은 추천 일정",
  keywords: ["수족관", "아쿠아리움", "aquarium", "돌고래", "イルカ", "바다사자", "アシカ", "쇼", "우미나카", "うみなか", "海の中道", "海ノ中道"],
  checked: "2026-10-05",
  blocks: [
    { type: "say", items: [{"ko": "마린월드 우미노나카미치까지 가 주세요.", "jp": "マリンワールド海の中道までお願いします。", "pron": "마린와-루도 우미노나카미치 마데 오네가이시마스."}, {"ko": "택시를 불러 주실 수 있나요?", "jp": "タクシーを呼んでいただけますか？", "pron": "타쿠시-오 욘데 이타다케마스카?"}] },

    { type: "callout", tone: "ok", title: "돌고래·바다사자 쇼 ‘일시 중지’ 공지, 이번 여행과는 무관",
      html: `<p>공식 홈페이지 상단에 쇼 중지 공지가 떠 있지만, 중지 기간은 <b>2027년 1월 12일 ~ 4월 9일</b>(쇼 풀·관람석 보수공사)입니다. 10월 10~13일에는 아래 일정대로 쇼가 열립니다.</p>` },

    { type: "facts", title: "기본 정보",
      rows: [
        ["영업시간", `<span class="num">9:30 – 17:30</span> · 입장은 <span class="num">16:30</span>까지 · 펭귄 전시는 <span class="num">16:10</span>까지`],
        ["휴관일", `정기 휴관은 1월 셋째 월요일부터 4일간뿐입니다. <b>10/10~13 휴관 없음.</b>`],
        ["야간 개장", `10월은 10/31 할로윈 나이트(~21:00) 하루뿐이라 이번 일정과 겹치지 않아요.`],
        ["주소", `<span class="jp">〒811-0321 福岡市東区大字西戸崎18-28</span>`, { show: "マリンワールド海の中道までお願いします。", sub: "마린월드 우미노나카미치까지 가 주세요.", copy: "福岡市東区大字西戸崎18-28 マリンワールド海の中道" }],
        ["전화", `<span class="num">092-603-0400</span>`, { copy: "092-603-0400" }],
        ["지도", `<a href="https://www.google.com/maps/search/?api=1&query=マリンワールド海の中道" target="_blank" rel="noopener">Google 지도에서 열기 ↗</a>`],
        ["혼잡", `예년 기준 <b>11:00~15:00</b>가 가장 붐빕니다. 10/10~12는 일본 3연휴라 오전에 들어가는 게 좋아요.`]
      ] },

    { type: "table", title: "입장 요금", tags: [["23개월 무료", "ok"]],
      head: ["구분", "요금"], numCols: [1],
      rows: [
        ["어른(고등학생 이상)", "2,500엔"],
        ["초·중학생", "1,200엔"],
        ["유아(만 3세 ~ 취학 전)", "700엔"],
        ["만 3세 미만", "무료"],
        ["<b>우리 가족 (어른 2 + 23개월)</b>", "<b>5,000엔</b>"]
      ],
      note: "10/1~31 할로윈 기간에는 분장하고 온 본인에 한해 어른 2,200엔. 온라인 티켓(asoview)은 신용카드·PayPay 결제, 이용 당일 16:30 이후 취소 수수료 100%." },

    { type: "table", title: "돌고래·바다사자 쇼 시간 (약 30분)",
      head: ["날짜", "돌고래·바다사자 쇼", "외양 대수조 쇼 (약 10분)", "그 밖의 프로그램"],
      rows: [
        ["<b>10/10 토 · 10/11 일 · 10/12 월(공휴일)</b>", `<span class="num"><b>11:00 · 12:30 · 14:00 · 15:30</b></span>`, `<span class="num">11:15</span> 정어리 시간<br><span class="num">12:45</span> 먹이 시간<br><span class="num">14:15</span> 정어리 태풍`, `<span class="num">10:40</span> 물범(GOGOアザラシ)<br><span class="num">11:50</span> 펭귄 퍼레이드<br><span class="num">15:00</span> 아일랜드 토크(돌고래)<br><span class="num">16:10</span> 펭귄 잠자리 귀가`],
        ["<b>10/13 화(평일)</b>", `<span class="num"><b>11:00 · 13:30 · 15:30</b></span>`, `<span class="num">11:45 · 13:00 · 15:00</span>`, `<span class="num">10:40</span> 물범<br><span class="num">12:20</span> 펭귄 퍼레이드<br><span class="num">12:40</span> 아일랜드 토크<br><span class="num">14:30</span> 상괭이 토크<br><span class="num">16:10</span> 펭귄 잠자리 귀가`]
      ],
      note: "앞쪽 좌석은 물이 튀어요. 아기와 함께면 중간 이후 줄이 안전합니다. 짐을 올려 자리 맡기는 금지. 연휴엔 쇼 20~30분 전에 자리를 잡는 걸 권하지만 공식 안내가 아니라 경험칙이에요. 당일 아침 공식 일정표를 한 번 더 보세요." },

    { type: "gallery", title: "공식 일정표 캡처 (2026-10-05)",
      images: [
        { src: "img/marine-show-weekend.jpg", caption: "토·일·공휴일 돌고래·바다사자 쇼 (10/10~12)", credit: "marine-world.jp", srcUrl: "https://marine-world.jp/show_schedule/post-8934/" },
        { src: "img/marine-show-weekday.jpg", caption: "평일 돌고래·바다사자 쇼 (10/13)", credit: "marine-world.jp", srcUrl: "https://marine-world.jp/show_schedule/post-8932/" },
        { src: "img/marine-tank-weekend.jpg", caption: "토·일·공휴일 외양 대수조 쇼", credit: "marine-world.jp", srcUrl: "https://marine-world.jp/show_schedule/post-8934/" }
      ] },

    { type: "table", title: "가는 방법 비교 (어른 2 + 23개월)", anchor: "access",
      head: ["방법", "편도 시간", "왕복 비용", "아기 기준"],
      rows: [
        ["<b>갈 때 택시 + 올 때 JR</b>", "택시 26~40분 / JR 약 45분", "<b>약 8,200엔</b>", `<span class="tag ok">추천</span> 아침엔 문 앞까지, 오후엔 배차 걱정 없이`],
        ["택시 왕복", "26~40분", "약 13,000~15,000엔", "돌아올 때 택시 잡기가 불확실"],
        ["JR 왕복", "약 41분 + 환승 대기", "2,240엔", "가장 저렴. 환승 엘리베이터 있음"]
      ],
      note: "택시는 2026년 7월 개정 요금으로 계산한 추정치(도시고속 통행료 포함 약 7,100엔)이고 정체 시 더 나옵니다. JR은 어른 560엔, 만 1~5세는 어른 1명당 2명까지 무료." },

    { type: "route", title: "갈 때 · 택시", pick: true, tags: [["문 앞까지", "ok"]],
      summary: [["26~40분", "도시고속 / 일반도로"], ["약 6,500~7,100엔", "추정"]],
      steps: [
        { stop: "숙소", note: "프런트에 택시를 불러 달라고 하거나, 하카타역 博多口 택시 승강장(도보 7분)에서 바로 타면 앱 수수료가 없어요." },
        { mode: "taxi", text: "도시고속 경유 18km", time: "약 26분 + 통행료 560~630엔", note: "일반도로로 가면 17.8km 약 38분, 통행료 없음. 연휴엔 아일랜드시티 다리 주변이 막힐 수 있어요." },
        { stop: "마린월드 정문" }
      ],
      note: "주소의 <b>크게 보기</b>로 기사에게 목적지를 보여주세요. 카시트 의무는 택시에선 면제지만, 아기는 안고 뒷좌석에." },

    { type: "route", title: "올 때 · JR (海ノ中道 → 香椎 → 博多)", tags: [["유모차 OK", "sea"], ["엘리베이터", ""]],
      summary: [["약 45분", "환승 포함"], ["어른 560엔", "편도 1인"], ["아기 무료", ""]],
      steps: [
        { stop: "마린월드" },
        { mode: "walk", text: "海ノ中道역", time: "약 5분" },
        { stop: "海ノ中道 (우미노나카미치)역", note: "지상역이라 단차 없음. 무인역이고, 개찰구 밖 화장실에 기저귀 교환 공간과 베이비 체어가 있어요. 교통카드·카드 터치로 개찰." },
        { mode: "jr", text: "<b>香椎線</b> 香椎행", time: "약 17분", note: "전 열차가 2량짜리 축전지 전차(DENCHA). 한쪽 끝에 휠체어·유모차 공간이 있어요." },
        { stop: "香椎 (가시이)역 환승", note: "모든 홈에 엘리베이터. 같은 홈 맞은편에서 博多행을 탈 수도 있습니다." },
        { mode: "jr", text: "<b>가고시마본선</b> 博多행", time: "약 11분" },
        { stop: "JR 하카타역", note: "재래선 1~8번 홈은 <b>北改札口(북쪽 개찰구)</b>까지 엘리베이터로 단차 없이 이어져요. 博多口로 나와 숙소까지 도보 약 7분." }
      ],
      note: "海ノ中道 출발 香椎행(토·일·공휴일 같음): <span class=\"num\"><b>14:12 · 14:42 · 15:12 · 15:36 · 16:08 · 16:32 · 16:54</b></span>. 갈 때도 JR을 탄다면 香椎 출발 <span class=\"num\">8:58 · 9:29 · 10:10 · 10:40</span>(海ノ中道 도착 9:15 · 9:45 · 10:25 · 10:56)." },

    { type: "text", title: "돌아올 때도 택시를 타고 싶다면",
      html: `<p>마린월드 공식 안내에는 택시 승강장이 없고, 앞 도로에 빈 택시도 거의 다니지 않는다는 이용자 정보가 있어요(2017년 비공식). <b>나가기 20~30분 전에 앱으로 미리 호출</b>하고, 안 잡히면 JR로 돌아오세요.</p>
<ul><li><b>카카오T</b> · 일본 GO와 연동돼 후쿠오카현에서도 한국어로 호출·사전결제가 됩니다(공식 발표 기준, 후쿠오카 실사용은 미확인).</li>
<li><b>GO</b> · 해외 번호·해외 카드로 가입 가능. <b>Uber</b> · 후쿠오카에서 택시 호출 가능.</li>
<li>전화 호출(일본어): 第一交通 東区配車センター <span class="num">092-673-2525</span>, 安川タクシー 共同配車 <span class="num">092-681-1331</span></li></ul>` },

    { type: "facts", title: "23개월 아기와 갈 때",
      rows: [
        ["유모차 대여", "무료 · 보증금 500엔(반납 시 환불) · 수량 한정"],
        ["반입 제한", "유모차는 괜찮고, 유모차가 아닌 세발자전거·아웃도어 왜건은 반입 금지"],
        ["수유실", "관내 1곳 · 분유용 뜨거운 물 있음. 관내 기저귀 교환대 위치는 공식 안내에 없어 미확인"],
        ["화장실", "누구나 쓰는 다목적 화장실 5곳"],
        ["도시락", "반입 가능. 쇼가 없는 시간의 쇼 관람석, 맑은 날 잔디광장에서 먹을 수 있어요."],
        ["레스토랑", "레스토랑 Reilly 식사 10:30~16:15 · 어린이 메뉴 ‘돌핀 햄버그 플레이트’ 840엔"],
        ["코인로커", "중 300엔 · 대 400엔 · 특대 500엔"],
        ["재입장", "출구에서 손등 스탬프(야간 개장 FAQ 기준, 평상시 적용은 미확인)"]
      ] },

    { type: "timeline", anchor: "plan", title: "추천 일정 · 10/12(월) · B안이면 10/11(일) (낮잠 포함)",
      items: [
        { time: "09:20", title: "숙소에서 택시 출발", html: "<p>편의점에서 아기 음료·간식 챙기기</p>" },
        { time: "10:00", title: "도착 · 유모차 빌리기 · 입장" },
        { time: "10:40", title: "물범 퍼포먼스 (かいじゅうアイランド, 10분)" },
        { time: "11:00", title: "돌고래·바다사자 쇼", html: "<p>10:50까지 쇼 풀로 이동. 앞줄은 물 튐 주의.</p>", tone: "warn" },
        { time: "11:40", title: "점심 · 레스토랑 Reilly (어린이 플레이트)", html: "<p>11:50 펭귄 퍼레이드는 먹고 나서 지나가며</p>" },
        { time: "12:45", title: "대수조 먹이 시간 → 유모차 낮잠", html: "<p>아기가 자는 동안 어른은 조용히 수조 관람</p>" },
        { time: "14:00", title: "깨면 두 번째 돌고래 쇼, 또는 14:15 정어리 태풍" },
        { time: "14:42", title: "JR 海ノ中道 출발 (다음 열차 15:12)", html: "<p>香椎 환승 → 博多 약 15:30 도착</p>" },
        { time: "15:45", title: "숙소 도착 · 휴식" }
      ],
      note: "10/11(일)·10/12(공휴일) 모두 같은 쇼 시간표(11:00·12:30·14:00·15:30)이고, JR 시각표도 매일 같아요. 날짜는 10/10 저녁 예보로 정하세요(<a href=\"#lalaport--plan-b\">A안·B안</a>). 예보는 흐리고 가끔 맑음, 최고 29℃라 야외 쇼 관람석은 햇볕이 셀 수 있어요. 모자·물·아기 선크림 챙기기." },

    { type: "text", title: "옆의 우미노나카미치 해변공원도 갈까?",
      html: `<p>마린월드 바로 옆이 국영 <b>우미노나카미치 해변공원</b>입니다. 10월엔 꽃 언덕에 코스모스 약 100만 송이가 피고(10월 상순~하순), ‘동물의 숲’에 카피바라·캥거루가 있어요. 어른 450엔, 중학생 이하 무료, 게이트는 현금만, 10월은 무휴(9:30~17:30).</p>
<ul><li>동물의 숲과 꽃 언덕은 <b>공원 서쪽</b>이라 마린월드에서 멉니다. 원내 버스가 <b>10/11·10/12에만</b> 다니지만 유모차를 접어야 해요(1일권 500엔, 만 2세 이하 무료).</li>
<li>마린월드 근처 어린이 광장·트램폴린은 대상이 만 3~12세라 23개월에겐 맞지 않아요.</li>
<li>낮잠까지 생각하면 마린월드 하루로 충분합니다. 공원은 아기가 더 크면 가도 늦지 않아요.</li></ul>` },

    { type: "gallery", title: "사진",
      images: [
        { src: "img/marine-showpool.jpg", caption: "바다를 등진 쇼 풀과 돌고래", credit: "project Kei · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Marine_World_Umi_no_Nakamichi_2011_02.jpg" },
        { src: "img/marine-exterior.jpg", caption: "마린월드 외관", credit: "STA3816 · CC BY-SA 3.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Marine_World_Uminonakamichi.jpg" },
        { src: "img/marine-aerial.jpg", caption: "하늘에서 본 마린월드 (2022)", credit: "ブルーノ・プラス · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Marine_world_uminonakamichii_aerialshot.jpg" },
        { src: "img/marine-from-park.jpg", caption: "해변공원 쪽에서 본 마린월드", credit: "Sean Young · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Marine_World_from_Uminonakamichi_Seaside_Park.jpg" }
      ] },

    { type: "text", title: "참고 · 페리와 버스", tags: [["아기 동반 비추천", ""]],
      html: `<p>하카타 부두(베이사이드 플레이스)에서 마린월드 바로 앞까지 가는 페리 <b>うみなかライン</b>(20분, 어른 1,300엔, 미취학 아이는 어른 1명당 1명 무료, 현금만)도 있어요. 숙소 근처 西日本シティ銀行前 F 정류장에서 니시테츠 46·99번 버스(약 15분, 260엔)로 부두까지 가야 하고, 유모차 승선 규정은 공식 안내에 없어 미확인입니다.</p>
<p>10/10~12는 B다이어(博多ふ頭 출발 10:05 · 11:05 · 12:05 · 14:05 · 15:05 · 16:05 · 17:05), 10/13은 A다이어(10:05 · 12:05 · 15:05 · 17:05). 일반 시내버스는 카드 터치가 안 돼 IC카드나 현금이 필요해요.</p>` },

    { type: "gallery",
      images: [
        { src: "img/ferry-timetable-oct.jpg", caption: "운영사 10월 운항 캘린더와 A/B 다이어 시간표 (노랑 = B다이어)", credit: "安田産業汽船", srcUrl: "https://yasuda-gp.net/hakata/uminaka-3" }
      ] },

    { type: "table", title: "할인 세트권", head: ["세트권", "가격(어른)", "아끼는 돈", "언제 이득"], numCols: [1, 2],
      rows: [
        ["JR ‘エンジョイ！マリンワールド海の中道きっぷ’ (하카타발 왕복+입장, 2일 유효)", "3,240엔", "380엔/인", "JR <b>왕복</b>일 때만. 택시+JR 조합이면 따로 사는 게 쌉니다(560+2,500=3,060엔)."],
        ["마린월드 + 해변공원 입장 (asoview 온라인 전용)", "2,690엔", "260엔/인", "공원까지 들를 때"]
      ] },

    { type: "phrases", title: "마린월드에서",
      items: [
        { ko: "어른 두 장 주세요. 아기는 한 살(23개월)이에요.", jp: "大人2枚お願いします。子どもは1歳です。", pron: "오토나 니마이 오네가이시마스. 코도모와 잇사이데스." },
        { ko: "유모차를 빌릴 수 있나요?", jp: "ベビーカーを借りられますか？", pron: "베비카- 오 카리라레마스카?" },
        { ko: "수유실은 어디인가요?", jp: "授乳室はどこですか？", pron: "주뉴-시츠와 도코데스카?" },
        { ko: "기저귀 갈 수 있는 곳이 있나요?", jp: "おむつを替えられる場所はありますか？", pron: "오무츠오 카에라레루 바쇼와 아리마스카?" },
        { ko: "돌고래 쇼는 몇 시인가요?", jp: "イルカショーは何時からですか？", pron: "이루카 쇼-와 난지 카라 데스카?" },
        { ko: "택시를 불러 주실 수 있나요?", jp: "タクシーを呼んでいただけますか？", pron: "타쿠시-오 욘데 이타다케마스카?" }
      ] }
  ],
  sources: [
    { label: "마린월드 · 영업시간", url: "https://marine-world.jp/general-guide/hours/" },
    { label: "마린월드 · 쇼 일정 (가을 토·일·공휴일)", url: "https://marine-world.jp/show_schedule/post-8934/" },
    { label: "마린월드 · 쇼 일정 (가을 평일)", url: "https://marine-world.jp/show_schedule/post-8932/" },
    { label: "마린월드 · 돌고래·바다사자 쇼 일시 중지 공지 (2026-08-28)", url: "https://marine-world.jp/news/post-8915/" },
    { label: "마린월드 · 요금", url: "https://marine-world.jp/general-guide/regular-fees/" },
    { label: "마린월드 · 관내 시설(유모차·수유실·로커)", url: "https://marine-world.jp/facility-info/maps/" },
    { label: "마린월드 · 숍·레스토랑", url: "https://marine-world.jp/facility-info/shop-and-restaurants/" },
    { label: "마린월드 · 교통", url: "https://marine-world.jp/access/" },
    { label: "마린월드 · 디지털 티켓", url: "https://marine-world.jp/walletpass/digital-ticket/" },
    { label: "마린월드 · 세트권", url: "https://marine-world.jp/general-guide/set_ticket/" },
    { label: "마린월드 · 10~11월 혼잡 안내 (2026-10-01)", url: "https://marine-world.jp/news/post-9032/" },
    { label: "NAVITIME · 하카타→마린월드 택시 요금 검색", url: "https://www.navitime.co.jp/taxi/result/?start=%7B%22name%22:%22%E5%8D%9A%E5%A4%9A%22,%22lon%22:%22469514347%22,%22road-type%22:%22default%22,%22lat%22:%22120923302%22%7D&goal=%7B%22name%22:%22%E3%83%9E%E3%83%AA%E3%83%B3%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89%E6%B5%B7%E3%81%AE%E4%B8%AD%E9%81%93%22,%22lon%22:%22469308089%22,%22road-type%22:%22default%22,%22lat%22:%22121180565%22%7D" },
    { label: "MK · 후쿠오카 택시 요금 개정 (2026-07-01)", url: "https://www.mk-group.co.jp/about/news/260701fukuoka_unchin" },
    { label: "후쿠오카 도시고속 · ETC 할인 요금", url: "https://www.fk-tosikou.or.jp/etc/etc_waribiki/etc_waribiki4.shtml" },
    { label: "GO · 해외 번호·카드 가입 (2023-11)", url: "https://goinc.jp/news/pr/2023/11/10/4zow9wentngt9gjmlsebyn/" },
    { label: "GO · 카카오T 연동 (2022-08)", url: "https://goinc.jp/news/pr/2022/08/04/7b5oeswwipgxz9zup5hssb/" },
    { label: "Uber · 후쿠오카 택시", url: "https://www.uber.com/jp/en/r/cities/taxi/fukuoka-fukuoka-jp/" },
    { label: "JR큐슈 · 시각표 (海ノ中道)", url: "https://www.jrkyushu-timetable.jp/cgi-bin/jr-k_time/tt_dep.cgi?c=28105" },
    { label: "JR큐슈 · 香椎線 배리어프리 정보", url: "https://www.jrkyushu.co.jp/railway/facility/barrier_free/kashii.pdf" },
    { label: "JR큐슈 · 香椎역 구내도", url: "https://www.jrkyushu.co.jp/railway/station/__icsFiles/afieldfile/2022/08/31/kashii_st_kounai.pdf" },
    { label: "JR 하카타역 배리어프리 (북쪽 개찰구)", url: "https://eki.jr-odekake.net/barrierfree?id=0910127" },
    { label: "후쿠오카시 배리어프리 시설 정보 · 海ノ中道駅", url: "https://fkmachi.city.fukuoka.lg.jp/facilities/detail/2b2e76fc-3151-44fd-80fa-20eaecb12eb8" },
    { label: "JR큐슈 · 어린이 운임 (유아 무료)", url: "https://www.jrkyushu.co.jp/train/kids/guardian/" },
    { label: "ekitan · 하카타→海ノ中道 운임", url: "https://ekitan.com/transit/fare/sf-7930/st-7407" },
    { label: "JR큐슈 · エンジョイ！マリンワールド海の中道きっぷ", url: "https://www.jrkyushu-kippu.jp/fare/ticket/291" },
    { label: "安田産業汽船 · 博多ふ頭~海の中道 시간표·요금", url: "https://yasuda-gp.net/hakata/uminaka-3" },
    { label: "베이사이드 플레이스 하카타 · 오시는 길", url: "https://www.baysideplace.jp/access/" },
    { label: "우미노나카미치 해변공원 · 개원시간", url: "https://uminaka-park.jp/guide/open-hour/" },
    { label: "우미노나카미치 해변공원 · 플라워 페스티벌 2026", url: "https://uminaka-park.jp/flower-festival2026/" },
    { label: "우미노나카미치 해변공원 · 원내 버스", url: "https://uminaka-park.jp/guide/touring/bus/" },
    { label: "이코요 · 마린월드 (3세 미만 무료 확인)", url: "https://iko-yo.net/facilities/2173" }
  ]
});

/* ═════════════ 먹을거리 · 아기 영양간식 ═════════════ */
GUIDE.sections.push({
  id: "snacks", cat: "food", code: "F01", order: 1,
  ko: "아기 영양간식", short: "아기 간식", jp: "子どものおやつ・栄養ドリンク", ro: "Healthy Snacks for Toddlers",
  lead: "배도라지즙과 똑같은 일본 제품은 없어요. 일본 엄마들은 목·기침엔 <b>꿀무(はちみつ大根)</b>나 <b>칡물(葛湯)</b> 같은 집에서 만드는 민간요법을 쓰고, 평소 영양 간식으로는 짜 먹는 젤리 음료, 미로, 비스코 같은 제품을 줍니다. 아래 제품은 모두 제조사가 안내하는 연령으로 23개월이 먹을 수 있어요.",
  summary: "배도라지즙 대신 먹일 간식·음료, 우유·성장기 밀크, 살 때 쓰는 일본어",
  keywords: ["배도라지", "배도라지즙", "간식", "おやつ", "영양", "음료", "드럭스토어", "마쓰키요", "목", "기침", "감기", "유산균", "철분", "칼슘"],
  checked: "2026-10-05",
  blocks: [
    { type: "say", items: [{"ko": "두 살 아이가 마실 수 있는 게 있나요?", "jp": "2歳の子どもが飲めるものはありますか？", "pron": "니사이노 코도모가 노메루 모노와 아리마스카?"}] },

    { type: "callout", title: "어떤 걸 고르면 되나",
      html: `<ul>
<li><b>목·기침이 걱정될 때</b> → 꿀무(はちみつ大根), 칡물(葛湯), 간 사과. 배도라지즙과 쓰임새가 가장 비슷합니다.</li>
<li><b>배도라지즙처럼 파우치로 쭉 짜 먹는 것</b> → 와코도 MY 쥬레 드링크, 모리나가 마미 쥬레.</li>
<li><b>일본 전통 건강음료</b> → 쌀누룩 아마자케(알코올 0%). 꼭 ‘米こうじ’ 제품으로.</li>
<li><b>매일 간식</b> → 비스코, 하이하인, 작은 생선 스낵.</li></ul>` },

    { type: "items", title: "목·기침 홈케어 · 배도라지즙에 가장 가까운 것",
      items: [
        { name: "꿀무 (하치미츠 다이콘)", jp: "はちみつ大根", img: "img/snack-daikon.jpg", credit: "재료: 일본 무 · Chris 73 · CC BY-SA 3.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Daikon.Japan.jpg",
          tags: [["1세 이상", "ok"], ["숙소에서 만들기", ""], ["슈퍼", ""]],
          html: `<p>일본의 대표적인 기침 민간요법이에요. 무를 깍둑 썰어 꿀에 잠기게 담가 몇 시간 두면 즙이 우러나 시럽이 됩니다. 티스푼 ½~1개를 자기 30분쯤 전에.</p><p class="muted">소아과는 “꿀은 기침 완화에 쓰이지만 꿀무 자체의 과학적 근거는 확인되지 않았다”고 설명합니다.</p>`,
          caution: "1세 미만은 절대 금지(영아 보툴리누스증, 가열해도 못 막음). 먹인 뒤 양치. 기침이 오래가거나 쌕쌕거리거나 고열이면 병원으로.",
          link: "https://seisekikodomo.com/blog/%E5%AD%90%E3%81%A9%E3%82%82%E3%81%AE%E5%92%B3%E3%81%AB%E3%81%AF%E3%81%A1%E3%81%BF%E3%81%A4%E3%81%AF%E5%8A%B9%E3%81%8F%EF%BC%9F%E5%8A%B9%E6%9E%9C%E3%83%BB%E5%AE%89%E5%85%A8%E6%80%A7%E3%83%BB%E6%B3%A8/", linkLabel: "소아과 설명 (せいせきこどもクリニック)" },
        { name: "칡물 (쿠즈유) · 간 사과", jp: "葛湯 · すりおろしりんご", img: "img/snack-kuzuyu.jpg", credit: "掛川市 観光・CP課 · CC BY 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Kuzuyu_201708mid.jpg",
          tags: [["감기 기운 있을 때", ""], ["미지근하게", ""]],
          html: `<p>칡 전분을 뜨거운 물에 풀어 걸쭉하게 만든 음료로, 몸을 데우고 입맛 없을 때 먹이는 감기 음식이에요. 간 사과(すりおろしりんご)는 소아과 전문의 감수 기사에서 열 나거나 목 아플 때 추천하는 음식입니다.</p>`,
          caution: "제조사 연령 기준은 찾지 못했어요. 미지근하게 식혀 조금씩. 시판 분말은 설탕이 많고, 생강이 든 生姜葛湯은 피하세요.",
          link: "https://calldoctor.jp/medical-articles/article/69/", linkLabel: "소아과 전문의 감수 기사" },
        { name: "쌀누룩 아마자케 · 마루코메 プラス糀", jp: "マルコメ プラス糀 糀甘酒", img: "img/snack-amazake-marukome.jpg", credit: "マルコメ 공식", srcUrl: "https://www.marukome.co.jp/product/detail/koji_033/",
          tags: [["1세 반쯤~", "ok"], ["약 170엔/125ml", ""], ["슈퍼·드럭스토어", ""]],
          html: `<p>쌀과 쌀누룩으로 만든 단술. 알코올 0%, 설탕 무첨가, 원재료는 쌀·쌀누룩·소금뿐이고 특정 알레르기 원재료가 없어요. 125ml에 95kcal. 일본에선 ‘마시는 링거(飲む点滴)’라는 별명으로 불립니다.</p><p class="muted">마루코메는 아기에게 줄 땐 2~3배 희석해 소량부터, 영양사 단체(母子栄養協会)는 1세 반쯤부터 가끔 주라고 안내해요.</p>`,
          caution: "술지게미로 만든 酒粕甘酒는 알코올이 남을 수 있어요. 포장에서 「米こうじ」「アルコール0%」 확인. 당분이 높아 매일은 X.",
          link: "https://www.marukome.co.jp/product/detail/koji_033/" }
      ] },

    { type: "items", title: "짜 먹는 젤리·음료 · 매일 간식용",
      items: [
        { name: "와코도 MY 쥬레 드링크 (채소&과일)", jp: "和光堂 1歳からのMYジュレドリンク 1/2食分の野菜＆くだもの", img: "img/snack-wakodo-myjelly.jpg", credit: "アサヒグループ食品 공식", srcUrl: "https://www.asahi-gf.co.jp/products/baby/snack/wakodo/myjellydrink/4987244195401.html",
          tags: [["1세부터", "ok"], ["약 158엔/70g", ""], ["파우치", "sea"]],
          html: `<p>배도라지즙 파우치와 모양이 가장 비슷한 짜 먹는 젤리 음료. 채소 8종 + 과일 3종으로 1개에 채소 반 끼 분량, 철분과 유산균(살균)이 들었어요.</p>`,
          caution: "과즙 64%라 당분이 있어요. 사과 알레르기 표시 있음.",
          link: "https://www.asahi-gf.co.jp/products/baby/snack/wakodo/myjellydrink/4987244195401.html" },
        { name: "모리나가 마미 쥬레", jp: "森永 マミージュレ", img: "img/snack-morinaga-mammygelee.jpg", credit: "森永乳業 공식", srcUrl: "https://www.morinagamilk.co.jp/products/babyfood/mammygelee/9926.html",
          tags: [["1세부터", "ok"], ["약 190엔(세전)/70g", ""], ["2026년 신제품", "signal"]],
          html: `<p>일본 아이들이 오래 마신 유산균 음료 ‘마미’의 젤리 버전. 1개에 칼슘 28mg, 철분, 비타민 D, 시루도 유산균 100억 개.</p>`,
          caution: "유성분 포함. 2026년 4월 나온 신제품이라 매장에 따라 없을 수 있어요.",
          link: "https://www.morinagamilk.co.jp/products/babyfood/mammygelee/9926.html" },
        { name: "와코도 고쿠고쿠 야사이 (채소+철분)", jp: "和光堂 ごくごく野菜 1食分の野菜＋鉄", img: "img/snack-wakodo-gokugoku.jpg", credit: "アサヒグループ食品 공식", srcUrl: "https://www.asahi-gf.co.jp/products/baby/drink/wakodo/kajyuyasai/4987244196712.html",
          tags: [["7개월쯤~", "ok"], ["약 246엔/125ml×3", ""], ["빨대 팩", ""]],
          html: `<p>빨대 꽂아 마시는 종이팩 3개 묶음. 1개로 채소 한 끼 분량, 철분 강화. 대안으로 카고메 「野菜生活100 国産100%やさいとりんご」도 이유식 시작 아이부터 마실 수 있어요(다른 野菜生活100은 1세 6개월부터).</p>`,
          link: "https://www.asahi-gf.co.jp/products/baby/drink/wakodo/kajyuyasai/4987244196712.html" },
        { name: "네슬레 미로", jp: "ネスレ ミロ", img: "img/snack-milo.jpg", credit: "ネスレ日本 공식 (사진은 예전 200g 포장)", srcUrl: "https://www.nestle.co.jp/brands/milo",
          tags: [["1세 반 전후~", "ok"], ["547엔/160g", ""], ["우유에 타기", ""]],
          html: `<p>우유에 타 먹는 맥아 음료 가루. 철분·칼슘·비타민 D를 강화한 영양기능식품이에요. 2020년 SNS ‘ミロ活’ 붐 때 품절로 판매가 멈출 만큼 일본 엄마들 사이에서 유명합니다. 처음엔 우유 150ml에 1~1.5스푼으로 연하게.</p>`,
          caution: "코코아가 들어 있어 카페인이 미량 있고, 설탕·유성분 포함.",
          link: "https://www.nestle.co.jp/brands/milo" },
        { name: "야쿠르트", jp: "Newヤクルト", img: "img/snack-yakult.jpg", credit: "ヤクルト本社 공식", srcUrl: "https://www.yakult.co.jp/products/item0228.html",
          tags: [["희석해서", "ok"], ["희망소매가 48엔(세전)/65ml", ""]],
          html: `<p>유산균 시로타주가 든 특정보건용식품(トクホ). 제조사는 아기에게 줄 땐 미지근한 물에 2배로 희석해 숟가락으로 조금씩, 마신 뒤엔 양치하라고 안내해요.</p>`,
          caution: "철분·엽산 강화 「ジョア 1日分の鉄＆葉酸」은 7세 이하 엽산 상한 주의 문구가 있어 피하세요. Yakult1000도 어린이용이 아닙니다. 유성분 포함.",
          link: "https://www.yakult.co.jp/products/item0228.html" }
      ] },

    { type: "items", anchor: "milk", title: "우유 · 성장기 밀크",
      items: [
        { name: "메이지 오이시이 규뉴 200ml", jp: "明治おいしい牛乳 200ml", img: "img/milk-meiji-200.jpg", credit: "明治 공식", srcUrl: "https://www.meiji.co.jp/products/milk_drink/49721119.html",
          tags: [["편의점·슈퍼", ""], ["냉장 10℃ 이하", "signal"]],
          html: `<p>일반 우유. 팩 뒷면 「種類別名称」이 <b>牛乳</b>면 생유 100% 우유예요(「加工乳」「乳飲料」는 다른 성분을 섞은 것). 200ml에 칼슘 227mg. 객실 냉장고에 보관하고, 데울 땐 4층 공용 전자레인지.</p>`,
          caution: "200ml 팩에 빨대가 붙어 있는지, 편의점 가격은 확인하지 못했어요.",
          link: "https://www.meiji.co.jp/products/milk_drink/49721119.html" },
        { name: "메이지 스텝 라쿠라쿠 밀크 (액상) 240ml", jp: "明治ステップ らくらくミルク", img: "img/milk-step-liquid.jpg", credit: "明治 공식", srcUrl: "https://www.meiji.co.jp/products/milkpowder/4902705130692.html",
          tags: [["1~3세", "ok"], ["상온 보관", "sea"], ["외출용 최고", "ok"]],
          html: `<p>1~3세용 <b>액상</b> 성장기 밀크. 타지 않고 바로 먹이고, 고온·동결만 피하면 <b>상온 보관</b>이라 마린월드·라라포트 나들이 가방에 넣기 좋아요. 240ml 1캔에 칼슘 270mg, 철 3.36mg.</p><p class="muted">공식 구입처 링크에 아카짱혼포가 있어요. 편의점 판매·현재 가격은 미확인(2021년 희망소매가 218엔).</p>`,
          caution: "유성분. 120ml·200ml는 2026년 1월 단종이라 240ml만 있어요.",
          link: "https://www.meiji.co.jp/products/milkpowder/4902705130692.html" },
        { name: "메이지 스텝 라쿠라쿠 큐브", jp: "明治ステップ らくらくキューブ", img: "img/milk-step-cube.jpg", credit: "明治 공식", srcUrl: "https://www.meiji.co.jp/products/milkpowder/4902705129634.html",
          tags: [["1~3세", "ok"], ["계량 필요 없음", ""]],
          html: `<p>큐브형 성장기 분유. 28g×4봉(소상자)·28g×20봉. 1봉(28g)을 녹이면 약 200ml. 객실 전기포트로 물을 끓여 식혀서 타면 돼요.</p>`,
          caution: "큐브를 그대로 먹이지 말고, 냉장고에 넣지 마세요(판매점 안내). 가격 미확인.",
          link: "https://www.meiji.co.jp/products/milkpowder/4902705129634.html" },
        { name: "아이크레오 그로우업 밀크 (스틱)", jp: "アイクレオ グローアップミルク", img: "img/milk-icreo-growup.jpg", credit: "江崎グリコ 공식", srcUrl: "https://cp.glico.com/icreo/products/growupmilk/",
          tags: [["1~3세 (9개월쯤~)", "ok"], ["스틱 13.6g×10", ""]],
          html: `<p>글리코의 성장기 분유. 820g 캔과 <b>여행에 좋은 스틱 13.6g×10개</b>. 캔은 츠루하 온라인 2,880엔, 스틱 가격 미확인. 비슷한 스틱 제품으로 森永 「チルミル」(1~3세쯤, 14g×10), 和光堂 「ぐんぐん」(9개월~3세쯤, 14g×10)도 있어요(판매점 정보).</p>`,
          caution: "유성분·대두.",
          link: "https://cp.glico.com/icreo/products/growupmilk/" }
      ],
      note: "상온 보관되는 일반 우유(森永牛乳 200ml 롱라이프)도 있다는 기사가 있지만 공식 확인과 하카타 편의점 판매 여부는 미확인이에요. 나들이엔 액상 ‘라쿠라쿠 밀크’가 가장 확실해요." },

    { type: "items", title: "영양 과자",
      items: [
        { name: "글리코 비스코", jp: "グリコ ビスコ", img: "img/snack-bisco.jpg", credit: "江崎グリコ 공식", srcUrl: "https://www.glico.com/jp/product/snack_biscuit_cookie/bisco/",
          tags: [["1세 전후~", "ok"], ["약 150~170엔/5개×3팩", ""]],
          html: `<p>일본의 국민 ‘영양 과자’. 유산균 2종에 칼슘·비타민 D·B1·B2·식이섬유가 들어 있는 크림 샌드 비스킷.</p>`,
          caution: "밀·유성분 포함. 먹을 때 보호자가 옆에서 지켜보세요.",
          link: "https://www.glico.com/jp/product/snack_biscuit_cookie/bisco/" },
        { name: "가메다 하이하인", jp: "亀田製菓 ハイハイン", img: "img/snack-haihain.jpg", credit: "亀田製菓 공식", srcUrl: "https://www.kamedaseika.co.jp/product/1372/",
          tags: [["7개월쯤~", "ok"], ["약 168엔/40g", ""], ["알레르기 28품목 미사용", "sea"]],
          html: `<p>일본 아기들의 ‘첫 과자’로 통하는 입에서 녹는 쌀과자. 국산 쌀, 2개에 칼슘 52mg, 식물성 유산균(살균).</p>`,
          caution: "같은 공장에서 새우·밀·달걀·유제품·땅콩을 다룹니다.",
          link: "https://www.kamedaseika.co.jp/product/1372/" },
        { name: "와코도 작은 생선 스낵 (+DHA)", jp: "和光堂 1歳からのおやつ+DHA 小魚すなっく", img: "img/snack-kozakana.jpg", credit: "アサヒグループ食品 공식", srcUrl: "https://www.asahi-gf.co.jp/products/baby/snack/wakodo/oyatsu+dha/4987244183682.html",
          tags: [["1세부터", "ok"], ["약 200~250엔/4g×3봉", ""]],
          html: `<p>국산 쌀에 잔멸치(しらす)를 넣은 스낵. 칼슘·DHA 간식으로 좋아요.</p>`,
          caution: "어른용 「小魚アーモンド」(멸치 아몬드)는 주지 마세요. 일본 소비자청은 딱딱한 콩·견과류를 5세 이하에게 먹이지 말라고 권고합니다.",
          link: "https://www.asahi-gf.co.jp/products/baby/snack/wakodo/oyatsu+dha/4987244183682.html" },
        { name: "와코도 다마고 보로 (+Ca)", jp: "和光堂 赤ちゃんのおやつ+Ca たまごボーロ", img: "img/snack-tamagoboro.jpg", credit: "アサヒグループ食品 공식", srcUrl: "https://www.asahi-gf.co.jp/products/baby/snack/wakodo/oyatsu+ca/4987244183491.html",
          tags: [["7개월쯤~", "ok"], ["약 200~250엔/15g×3봉", ""]],
          html: `<p>입에서 사르르 녹는 작은 동그란 과자. 칼슘 강화.</p>`,
          caution: "이름처럼 달걀을 쓴 과자예요. 달걀 알레르기가 있으면 포장 표시를 꼭 확인하세요.",
          link: "https://www.asahi-gf.co.jp/products/baby/snack/wakodo/oyatsu+ca/4987244183491.html" },
        { name: "말린 고구마 (호시이모)", jp: "干し芋", img: "img/snack-hoshiimo.jpg", credit: "ジョンドウ · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:%E8%8C%A8%E5%9F%8E%E5%90%8D%E7%94%A3%E3%81%AE%E5%B9%B2%E3%81%97%E8%8A%8B.jpg",
          tags: [["1세 이후", "ok"], ["첨가물 없음", ""]],
          html: `<p>고구마를 쪄서 말린 자연 간식. 식이섬유·칼륨이 많아요. 원재료가 고구마뿐인 제품을 고르세요.</p>`,
          caution: "질겨서 목에 걸릴 수 있어요. 잘게 잘라 데워서 부드럽게, 반드시 어른이 지켜보기.",
          link: "https://www.koutashop.com/column/hoshiimo/column_58/", linkLabel: "제조사 칼럼 (幸田商店)" }
      ] },

    { type: "items", title: "아플 때 대비 · 하나쯤 챙겨 두기",
      items: [
        { name: "와코도 아쿠아라이트 ORS", jp: "和光堂 アクアライトオーアールエス", img: "img/snack-aqualite.jpg", credit: "アサヒグループ食品 공식", srcUrl: "https://www.asahi-gf.co.jp/products/baby/drink/wakodo/aqua/4987244141750.html",
          tags: [["0개월쯤~", "ok"], ["125ml×3", ""], ["환자용 식품", "signal"]],
          html: `<p>설사·구토·발열로 탈수가 걱정될 때 수분과 전해질을 보충하는 경구수분보충액. 바이러스성 장염 때 쓰는 용도예요.</p>`,
          caution: "증상이 심하거나 오래가면 병원 진료가 먼저입니다.",
          link: "https://www.asahi-gf.co.jp/products/baby/drink/wakodo/aqua/4987244141750.html" }
      ] },

    { type: "callout", tone: "danger", title: "23개월에게 주지 말 것",
      html: `<ul>
<li><b>시판 생강차(生姜湯) 분말</b> · 성인용이에요. 생강은 이유식에서도 ‘잡내 제거용 극소량’ 정도만 권장.</li>
<li><b>술지게미 아마자케(酒粕甘酒)</b> · 알코올이 남을 수 있음.</li>
<li><b>ジョア 鉄&葉酸, Yakult1000</b> · 어린이 대상 제품이 아님.</li>
<li><b>견과류 든 과자(小魚アーモンド 등)</b> · 5세 이하 질식 위험(소비자청 권고).</li>
<li><b>목캔디(のど飴) 같은 딱딱한 사탕</b> · 삼킬 위험이 있어요.</li></ul>` },

    { type: "table", title: "포장 연령 표시 읽는 법",
      head: ["표기", "뜻"],
      rows: [
        ["<span class=\"jp\">〇か月頃から</span>", "약 ○개월 무렵부터. 23개월이면 대부분 해당"],
        ["<span class=\"jp\">1歳から · 1歳頃から · 1歳からずっと</span>", "1세부터 (계속 먹어도 됨)"],
        ["<span class=\"jp\">対象年齢（目安）</span>", "대상 연령(기준)"],
        ["<span class=\"jp\">うすめて5か月頃から</span>", "희석하면 5개월부터"],
        ["<span class=\"jp\">乳児 · 幼児 · 乳幼児</span>", "乳児는 보통 1세 미만, 幼児는 1세~취학 전, 乳幼児는 둘 다"],
        ["<span class=\"jp\">乳児用規格適用食品</span>", "아기용 방사성 물질 기준을 적용했다는 표시일 뿐, 연령·식감과는 무관"],
        ["<span class=\"jp\">アレルギー物質（28品目中）</span>", "일본 지정 알레르기 28품목 중 들어 있는 것"]
      ] },

    { type: "text", title: "어디서 사나",
      html: `<ul>
<li><b>드럭스토어</b>(마쓰모토키요시·선드러그·드럭일레븐 등) 베이비 코너에 와코도·가메다·모리나가 제품이 흔해요. 매장별 재고는 확인하지 못했어요.</li>
<li><b>슈퍼</b> · 아마자케, 무·꿀, 葛湯, 말린 고구마, 야쿠르트, 미로.</li>
<li><b>아카짱혼포 라라포트 후쿠오카점</b> · 유아용품 전문점 <span class="jp">(博多区那珂6-23-1, 3층)</span>. 숙소에서 멀어 일부러 갈 정도는 아니에요.</li></ul>
<p class="muted">아이 건강 상태나 알레르기 판단은 소아과와 상의하세요. 이 페이지는 제조사 안내를 옮긴 것입니다.</p>` },

    { type: "phrases", title: "드럭스토어에서",
      items: [
        { ko: "두 살 아이가 마실 수 있는 게 있나요?", jp: "2歳の子どもが飲めるものはありますか？", pron: "니사이노 코도모가 노메루 모노와 아리마스카?" },
        { ko: "유아용 음료는 어디 있나요?", jp: "幼児用の飲み物はどこですか？", pron: "요-지요-노 노미모노와 도코데스카?" },
        { ko: "이건 몇 살부터예요?", jp: "これは何歳からですか？", pron: "코레와 난사이카라 데스카?" },
        { ko: "꿀이 들어 있나요?", jp: "はちみつは入っていますか？", pron: "하치미츠와 하잇테 이마스카?" },
        { ko: "카페인이 들어 있나요?", jp: "カフェインは入っていますか？", pron: "카훼인와 하잇테 이마스카?" },
        { ko: "달걀 알레르기가 있어요. 달걀 없는 게 있나요?", jp: "卵アレルギーがあります。卵なしのものはありますか？", pron: "타마고 아레루기-가 아리마스. 타마고 나시노 모노와 아리마스카?" },
        { ko: "아이용 경구수분보충액 있나요?", jp: "子ども用の経口補水液はありますか？", pron: "코도모요-노 케-코-호스이에키와 아리마스카?" },
        { ko: "1살부터 먹는 밀크는 어디 있나요?", jp: "1歳から飲めるミルクはどこですか？", pron: "잇사이카라 노메루 미루쿠와 도코데스카?" },
        { ko: "빨대 달린 작은 우유 있나요?", jp: "ストロー付きの小さい牛乳はありますか？", pron: "스토로-츠키노 치-사이 규-뉴-와 아리마스카?" },
        { ko: "상온 보관되는 우유 있나요?", jp: "常温で保存できる牛乳はありますか？", pron: "조-온데 호존데키루 규-뉴-와 아리마스카?" },
        { ko: "이 과자는 몇 살부터예요?", jp: "このお菓子は何歳からですか？", pron: "코노 오카시와 난사이카라 데스카?" }
      ] }
  ],
  sources: [
    { label: "せいせきこどもクリニック · 아이 기침에 꿀은 효과가 있나", url: "https://seisekikodomo.com/blog/%E5%AD%90%E3%81%A9%E3%82%82%E3%81%AE%E5%92%B3%E3%81%AB%E3%81%AF%E3%81%A1%E3%81%BF%E3%81%A4%E3%81%AF%E5%8A%B9%E3%81%8F%EF%BC%9F%E5%8A%B9%E6%9E%9C%E3%83%BB%E5%AE%89%E5%85%A8%E6%80%A7%E3%83%BB%E6%B3%A8/" },
    { label: "도쿄도 보건의료국 · 꿀과 영아 보툴리누스증", url: "https://www.hokeniryo.metro.tokyo.lg.jp/anzen/anzen/food_faq/chudoku/chudoku24" },
    { label: "LEE · 葛湯 (キッズキッチン協会)", url: "https://lee.hpplus.jp/column/124508/" },
    { label: "CallDoctor · 열·목 아플 때 음식 (소아과 전문의 감수)", url: "https://calldoctor.jp/medical-articles/article/69/" },
    { label: "마루코메 · プラス糀 糀甘酒", url: "https://www.marukome.co.jp/product/detail/koji_033/" },
    { label: "母子栄養協会 · 아이와 甘酒", url: "https://boshieiyou.org/amazake/" },
    { label: "아사히그룹식품 · MYジュレドリンク", url: "https://www.asahi-gf.co.jp/products/baby/snack/wakodo/myjellydrink/4987244195401.html" },
    { label: "모리나가유업 · マミージュレ", url: "https://www.morinagamilk.co.jp/products/babyfood/mammygelee/9926.html" },
    { label: "아사히그룹식품 · ごくごく野菜", url: "https://www.asahi-gf.co.jp/products/baby/drink/wakodo/kajyuyasai/4987244196712.html" },
    { label: "카고메 FAQ · 野菜生活100 연령", url: "https://www.kagome.co.jp/customer/qa_vege-fruit/_11502/" },
    { label: "네슬레 일본 · ミロ", url: "https://www.nestle.co.jp/brands/milo" },
    { label: "Benesse · 미로는 몇 살부터 (네슬레 담당자)", url: "https://benesse.jp/kosodate/202105/20210501-1.html" },
    { label: "닛케이 · 미로 용량·가격 변경", url: "https://www.nikkei.com/article/DGXZQOUF127SE0S5A111C2000000/" },
    { label: "야쿠르트 · Newヤクルト", url: "https://www.yakult.co.jp/products/item0228.html" },
    { label: "야쿠르트 · ジョア 鉄&葉酸", url: "https://www.yakult.co.jp/products/item0359.html" },
    { label: "글리코 · ビスコ", url: "https://www.glico.com/jp/product/snack_biscuit_cookie/bisco/" },
    { label: "글리코 FAQ · 비스코 연령", url: "https://www.glico.com/jp/customer/qa/3025/" },
    { label: "가메다제과 · ハイハイン", url: "https://www.kamedaseika.co.jp/product/1372/" },
    { label: "아사히그룹식품 · 小魚すなっく", url: "https://www.asahi-gf.co.jp/products/baby/snack/wakodo/oyatsu+dha/4987244183682.html" },
    { label: "아사히그룹식품 · たまごボーロ", url: "https://www.asahi-gf.co.jp/products/baby/snack/wakodo/oyatsu+ca/4987244183491.html" },
    { label: "소비자청 · 견과류 질식 주의", url: "https://www.caa.go.jp/policies/policy/consumer_safety/caution/caution_047/" },
    { label: "幸田商店 · 干し芋는 몇 살부터", url: "https://www.koutashop.com/column/hoshiimo/column_58/" },
    { label: "아사히그룹식품 · アクアライトORS", url: "https://www.asahi-gf.co.jp/products/baby/drink/wakodo/aqua/4987244141750.html" },
    { label: "tomonite · 이유식 생강", url: "https://tomonite.com/articles/3272" },
    { label: "아카짱혼포 라라포트 후쿠오카점", url: "https://stores.akachan.jp/282" },
    { label: "明治 · おいしい牛乳 200ml", url: "https://www.meiji.co.jp/products/milk_drink/49721119.html" },
    { label: "明治 · ステップ らくらくミルク", url: "https://www.meiji.co.jp/products/milkpowder/4902705130692.html" },
    { label: "明治 · ステップ らくらくキューブ", url: "https://www.meiji.co.jp/products/milkpowder/4902705129634.html" },
    { label: "明治 · ステップ 브랜드", url: "https://www.meiji.co.jp/baby/step/" },
    { label: "江崎グリコ · アイクレオ グローアップミルク", url: "https://cp.glico.com/icreo/products/growupmilk/" },
    { label: "츠루하 · 아이크레오 820g 가격", url: "https://shop.tsuruha.co.jp/10173401.html" }
  ]
});

/* ═════════════ 아기와 함께 · 23개월 동반 가이드 ═════════════ */
GUIDE.sections.push({
  id: "baby", cat: "baby", code: "K01",
  ko: "23개월 아기와 후쿠오카", short: "아기 동반", jp: "子連れ福岡", ro: "Fukuoka with a Toddler",
  lead: "아플 때 연락처, 하카타역 수유실, 기저귀 살 곳, 아기의자 있는 식당, 숙소에서 챙길 것을 모았습니다. 응급 연락처는 출발 전에 휴대폰에 저장해 두세요.",
  summary: "응급·병원 연락처(한국어), 수유실, 기저귀, 아기의자 식당, 숙소 팁, 날씨",
  keywords: ["아기", "유아", "子連れ", "병원", "소아과", "응급", "열", "기저귀", "おむつ", "수유실", "授乳室", "아기의자", "ベビーチェア", "이유식", "離乳食", "날씨"],
  checked: "2026-10-05",
  blocks: [
    { type: "say", items: [{"ko": "구급차를 불러 주세요.", "jp": "救急車を呼んでください。", "pron": "큐-큐-샤오 욘데 쿠다사이."}, {"ko": "한국어 통역을 부탁합니다.", "jp": "韓国語の通訳をお願いします。", "pron": "칸코쿠고노 츠-야쿠오 오네가이시마스."}] },

    { type: "callout", tone: "danger", anchor: "emergency", title: "아기가 아플 때 · 한국어로 도움받기",
      html: `<ul>
<li><b>구급차 119</b> · 후쿠오카시 소방국은 한국어 통역을 연결해 줍니다. 걸어서 “Korean(韓国語)”이라고 말하고 <b>위치(숙소 주소)부터</b> 전하세요.</li>
<li><b>후쿠오카시 의료통역 콜센터 <span class="num">092-733-5429</span></b> · 24시간, 한국어 포함 20개 언어, 무료(통화료만). 병원과 3자 통화로 통역해 줍니다.</li>
<li><b>JNTO 방일 관광객 핫라인 <span class="num">050-3816-2787</span></b> · 24시간 365일, 한국어. 병원 찾기 등 사고·질병 상담.</li>
<li><b>소아 응급 전화상담 #8000</b>(로밍폰은 <span class="num">092-731-4119</span>) · 간호사·소아과 의사 상담. 토 12:00~, 일·공휴일 7:00~ 다음 날 7:00. 한국어 지원은 미확인.</li></ul>
<p>이 연락처는 안내용이에요. 아기 상태 판단은 의료진에게 맡기고, 여행자보험 증권과 보험사 긴급번호도 같이 챙기세요.</p>` },

    { type: "facts", title: "주말·공휴일에 아기 진료받는 곳",
      rows: [
        ["福岡市立急患診療センター", `<span class="jp">早良区百道浜1-6-9</span> · <span class="num">092-847-1099</span><br>소아과 <b>토 17:00~다음 날 7:30, 일·공휴일 9:00~다음 날 7:30</b>, 평일 19:30~다음 날 6:30. 시는 영유아는 검사 장비가 있는 이 센터로 가라고 안내합니다. 숙소에서 택시로 이동.`, { copy: "092-847-1099" }],
        ["博多急患診療所", "숙소 바로 옆 블록(博多区役所 5층)이지만 내과만 봐요. 중학생 이하는 소아과로 안내하므로 23개월은 해당 없음."],
        ["하카타역 근처 소아과", "일·공휴일에 문 여는 곳은 공식 정보로 확인하지 못했어요. 하카타역 근처 한국어 진료 클리닉(博多ひのきクリニック)은 <b>10/5~10/13 임시휴진</b>입니다."],
        ["비용", "보험 없는 관광객 진료비·결제 수단은 미확인. 여행자보험 가입 여부를 출발 전에 확인하세요."]
      ] },

    { type: "facts", title: "하카타역 수유실 · 기저귀 교환",
      rows: [
        ["博多阪急 7층 베이비룸", "<b>가장 잘 갖춰진 곳.</b> 개인 수유실 3 + 공용 1, 유모차째 입장, 기저귀 교환대 7대, 조유용 온수기, <b>전자레인지(이유식 데우기)</b>, 이유식 먹이는 자리. 유모차 대여 7층 10대·1층 20대(신생아~3세)."],
        ["アミュプラザ博多", "수유실 6·7·9·10층(개인실, 옆에 온수), 기저귀 교환대는 1·2층과 옥상을 뺀 전 층, 어린이 화장실 6·8층. 유모차 1·3층 무료 대여."],
        ["KITTE博多", "수유실 6·10층, 베이비 베드 지하1·2~10층. 1층 안내소에서 유모차 대여(신분증 필요), 한국어 응대."],
        ["찾기 앱", "‘ママパパマップ’(무료, iOS) · 온수·전자레인지 있는 수유실 필터. 한국어는 없고 일본어·영어·중국어."]
      ] },

    { type: "facts", title: "기저귀 · 아기 용품 사기",
      rows: [
        ["사이즈", "약 12kg이면 <b>팬티형 L(9~14kg)</b> 또는 <b>빅 ビッグ(12~22kg)</b>. 메리즈·무니·팸퍼스 공통. 무니는 12kg 전후면 빅을 권해요."],
        ["ドラッグイレブン 博多駅前店", `<span class="jp">博多駅前4-1-1</span> · <b>24시간</b>, 연중무휴, 면세`],
        ["ドラッグイレブン JR博多駅店", "역 1층 · 7:00~23:00"],
        ["ドラッグイレブン アミュプラザ博多店", "지하 1층 · 7:00~22:00 · 면세"],
        ["マツモトキヨシ 博多駅地下街店", "博多口 쪽 지하 1층 · 영업시간 미확인(비공식 8:00~22:00)"],
        ["편의점", "2~5장 소포장을 두는 곳이 많다는 정보가 있지만 점포마다 달라요(미확인). 급할 때만."]
      ],
      note: "각 매장의 기저귀 재고는 공식 페이지에 없어 확인하지 못했어요. 첫날 하루치 + 여분은 한국에서 챙겨 가는 게 안전합니다." },

    { type: "table", title: "아기의자 · 키즈메뉴 있는 식당 (하카타역 くうてん)", anchor: "dining",
      head: ["가게", "층", "아기 메뉴"],
      rows: [
        ["博多うどん酒場 和八", "アミュプラザ 10층", "お子様御膳 680엔 (미니 우동 포함)"],
        ["銀座 天一", "9층", "お子さま天丼 1,210엔"],
        ["加賀屋", "9층", "유아용 1,100엔"]
      ],
      note: "JR博多シティ 공식 ‘키즈메뉴’ 목록에 실린 가게로, 유아용 의자가 있다고 안내돼 있어요. くうてん 영업 11:00~22:00. KITTE博多 ‘うまいと’(지하1·9·10층)에도 키즈메뉴 있는 가게가 있습니다. 우동집은 <a href=\"#udon\">숙소 근처 우동집</a> 참고." },

    { type: "text", title: "식당에서 알아둘 것",
      html: `<ul>
<li><b>하카타 우동</b>은 면이 부드럽고 국물이 순해서 아기와 나눠 먹기 좋아요.</li>
<li>외부 음식 반입은 원칙적으로 안 되지만 <b>이유식은 미리 물어보면 허락해 주는 곳이 많아요</b>. 쓰레기는 가져가세요. 데울 곳이 필요하면 博多阪急 7층 전자레인지가 확실합니다.</li>
<li>유모차 반입은 가게마다 달라요. 입구에서 먼저 물어보세요(아래 ‘크게 보기’ 회화).</li>
<li>편의점에선 연어 주먹밥, 바나나, 플레인 요구르트, 차완무시 정도가 무난해요. 명란(明太子)처럼 매운 건 피하세요.</li></ul>` },

    { type: "facts", title: "숙소에서 (더 블라섬 하카타 프리미어)",
      rows: [
        ["베드가드", "여행사 정보로는 베이비 코트·베드가드 대여가 있고 수량이 적어요. <b>출발 전에 전화로 요청</b>하세요(<span class=\"num\">092-431-8702</span>)."],
        ["대욕장", "<b>기저귀를 안 뗀 아이는 입욕 불가.</b> 아기는 객실 욕조에서 씻기고, 물을 받아 둔 채로 자리를 비우지 마세요."],
        ["전자레인지", "<b>4층 대욕장 맞은편</b>(자판기·제빙기·코인세탁기 옆). 숙박 후기 2건(2023·2025년) 기준이고 공식 안내엔 없어요. 이용 시간은 미확인이라 체크인 때 확인하세요(아래 회화)."],
        ["세탁", "4층 코인세탁기 · 자판기 · 제빙기"],
        ["객실", "<b>전기포트(湯沸かしポット)·냉장고 있음</b>(라쿠텐트래블 시설 정보) → 우유 보관 OK. 가습기, 변압기 대여도 있어요. 전자레인지는 객실에 없어요."],
        ["대여 물품", "베이비 코트, 베이비가드, <b>체온계</b>, 우산, 담요 등(한큐교통사 표기). 수량이 적으니 미리 요청."],
        ["어린이 어메니티", "없다는 FAQ 검색 결과가 있어요(원문 페이지 접속 불가). 아기 세정제·칫솔은 챙겨 가세요."]
      ] },

    { type: "table", title: "10월 후쿠오카 날씨 (평년값)",
      head: ["", "평균 최고", "평균 최저", "비 오는 날"], numCols: [1, 2, 3],
      rows: [
        ["10월 전체", "23.7℃", "16.0℃", "6.8일"],
        ["10월 중순", "24.0℃", "16.1℃", ""]
      ],
      note: "기상청 1991~2020 평년값. 낮엔 반팔, 아침저녁엔 얇은 겉옷. 마린월드처럼 바닷가는 바람이 불면 더 쌀쌀해요." },

    { type: "callout", tone: "warn", title: "10/10(토) 시내 교통 통제",
      html: `<p>‘투르 드 규슈 2026’ 자전거 대회로 <b>明治通り 텐진~나카스 구간이 10:00~15:00 전면 통행금지</b>, 버스는 운휴·우회합니다. 지하철은 정상 운행. 공항→숙소 택시 경로와는 겹치지 않을 가능성이 높지만, 이날 나카스·텐진(안판만 뮤지엄 등)으로 간다면 지하철을 타세요.</p>` },

    { type: "phrases", title: "아기와 다닐 때",
      items: [
        { ko: "전자레인지는 어디 있나요? 몇 시까지 쓸 수 있나요?", jp: "電子レンジはどこにありますか？何時まで使えますか？", pron: "덴시렌지와 도코니 아리마스카? 난지마데 츠카에마스카?" },
        { ko: "체온계를 빌릴 수 있나요?", jp: "体温計を借りられますか？", pron: "타이온케-오 카리라레마스카?" },
        { ko: "아기의자 있나요?", jp: "ベビーチェアはありますか？", pron: "베비-체아와 아리마스카?" },
        { ko: "유모차째 들어가도 되나요?", jp: "ベビーカーのまま入れますか？", pron: "베비-카-노 마마 하이레마스카?" },
        { ko: "아이용 앞접시와 숟가락 주세요.", jp: "子ども用の取り皿とスプーンをください。", pron: "코도모요-노 토리자라토 스푸-응오 쿠다사이." },
        { ko: "이유식을 먹여도 될까요?", jp: "離乳食を食べさせてもいいですか？", pron: "리뉴-쇼쿠오 타베사세테모 이-데스카?" },
        { ko: "아이가 열이 나요.", jp: "子どもが熱を出しました。", pron: "코도모가 네츠오 다시마시타." },
        { ko: "근처에 소아과가 있나요?", jp: "近くに小児科はありますか？", pron: "치카쿠니 쇼-니카와 아리마스카?" },
        { ko: "구급차를 불러 주세요.", jp: "救急車を呼んでください。", pron: "큐-큐-샤오 욘데 쿠다사이." },
        { ko: "한국어 통역을 부탁합니다.", jp: "韓国語の通訳をお願いします。", pron: "칸코쿠고노 츠-야쿠오 오네가이시마스." }
      ] }
  ],
  sources: [
    { label: "후쿠오카현 · #8000 소아 응급 전화상담", url: "https://www.pref.fukuoka.lg.jp/contents/8000syonidenwasoudan.html" },
    { label: "후쿠오카현 · #7119 구급 상담", url: "https://www.pref.fukuoka.lg.jp/contents/fukuokaqq.html" },
    { label: "후쿠오카시 의사회 · 급환 진료 시설", url: "https://www.city.fukuoka.med.or.jp/facilities/" },
    { label: "후쿠오카시 · 휴일·야간 급환 진료", url: "https://www.city.fukuoka.lg.jp/hofuku/chiikiiryo/kyukyuiryo-syobo/6820_2.html" },
    { label: "후쿠오카시 · 의료통역 콜센터", url: "https://www.city.fukuoka.lg.jp/hofuku/chiikiiryo/health/hukuoka_iryoutuuyakuko-rusenta-.html" },
    { label: "후쿠오카시 소방국 · 외국어 119 통역", url: "https://www.city.fukuoka.lg.jp/syobo/yobo/ff/gaikokuzin_2.html" },
    { label: "JNTO · Japan Visitor Hotline", url: "https://www.japan.travel/en/plan/hotline/" },
    { label: "博多ひのきクリニック · 임시휴진 공지", url: "https://hinoki-clinic.com/" },
    { label: "博多阪急 · 베이비룸", url: "https://website.hankyu-dept.co.jp/hakata/h/hakatamama/" },
    { label: "JR博多シティ · 서비스(수유실·유모차)", url: "https://www.jrhakatacity.com/information/service/" },
    { label: "JR博多シティ · 키즈메뉴", url: "https://www.jrhakatacity.com/kidsmenu/" },
    { label: "KITTE博多 · 시설 안내", url: "https://hakata.jp-kitte.jp/guide/facility.jsp" },
    { label: "ママパパマップ (App Store)", url: "https://apps.apple.com/jp/app/id1117756080" },
    { label: "花王 메리즈 · 사이즈 고르기", url: "https://www.kao.co.jp/merries/guide/select/" },
    { label: "무니 · 사이즈 올릴 때", url: "https://jp.moony.com/ja/tips/baby/childcare/diapers/bm0083.html" },
    { label: "츠루하 · ドラッグイレブン 博多駅前店", url: "https://shop.tsuruha-g.com/4647" },
    { label: "츠루하 · ドラッグイレブン JR博多駅店", url: "https://shop.tsuruha-g.com/4855" },
    { label: "JR博多シティ · ドラッグイレブン アミュプラザ博多店", url: "https://www.jrhakatacity.com/floor/detail/?cd=000046" },
    { label: "HugKum · 외식 때 이유식 매너", url: "https://hugkum.sho.jp/120641" },
    { label: "THE BLOSSOM HAKATA Premier · 시설", url: "https://www.jrk-hotels.co.jp/Hakata_premier/facilities" },
    { label: "라쿠텐트래블 · 숙소 시설·객실 비품", url: "https://travel.rakuten.co.jp/HOTEL/172876/172876.html" },
    { label: "숙박 후기 · 4층 전자레인지 (Merry's Blog 2023)", url: "https://www.sunflower08.work/the-blossom-hakata-premier" },
    { label: "숙박 후기 · 전자레인지 (fishand.tips 2025)", url: "https://fishand.tips/hotel/The_Blossom_Hakata_Premier/" },
    { label: "한큐교통사 · THE BLOSSOM HAKATA Premier", url: "https://www.hankyu-travel.com/kokunai/facility/detail/htl13609.php" },
    { label: "기상청 · 후쿠오카 평년값 (월별)", url: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=82&block_no=47807" },
    { label: "안판만 뮤지엄 · 10/10 교통 통제 안내", url: "https://www.fukuoka-anpanman.jp/news/article/xpmltnis4c58jz6k.html" }
  ]
});

/* ═════════════ 준비 · 아기 짐 체크리스트 ═════════════ */
GUIDE.sections.push({
  id: "packing", cat: "prep", code: "C01",
  ko: "출발 전 체크리스트", short: "체크리스트", jp: "持ち物チェック", ro: "Before You Go",
  lead: "체크한 항목은 이 브라우저에 저장돼요. 숙소 4층에 코인세탁기가 있어서 옷은 2~3일치면 충분하고, 기저귀·물티슈는 첫날·기내용만 챙기고 나머지는 하카타역 드럭스토어에서 사도 됩니다.",
  summary: "출발 전 할 일, 서류·돈, 전자기기, 아기 짐(위생·먹기·옷·잠·이동·건강), 어른 짐, 앱",
  keywords: ["준비물", "짐", "짐 목록", "체크", "체크리스트", "packing", "어댑터", "돼지코", "보조배터리", "상비약", "약", "환전", "현금", "Visit Japan Web"],
  checked: "2026-10-06",
  blocks: [
    { type: "checklist", title: "출발 전에 할 일",
      items: [
        "숙소에 전화(092-431-8702) 또는 체크인 때: 베이비가드 대여 요청 + 공용 전자레인지 위치·이용 시간 확인",
        "모츠나베 이치후지 10/10 17:00 예약 · 호빵맨 웹티켓은 10/10 저녁 날짜 정한 뒤 구매 (Klook 한국어 가능)",
        "Visit Japan Web 등록 (입국심사·세관신고 QR, 아기는 동반 가족으로)",
        "여행자보험 가입 확인, 증권과 보험사 긴급번호를 휴대폰에 저장",
        "응급 연락처 저장: 119 / 092-733-5429 (의료통역) / 050-3816-2787 (JNTO)",
        "카카오T 또는 GO 설치·카드 등록 (마린월드에서 돌아올 때)",
        "어른 2명 각자 해외 터치결제 카드 준비 (지하철은 카드 1장 = 1명)",
        "eSIM 또는 포켓 와이파이 예약 (국제선 1층 수령)",
        "휴대폰에 가이드 저장: 사이트 열고 ‘홈 화면에 추가’ → 한 번 열어 ‘오프라인으로 볼 준비가 됐어요’ 확인",
        "항공사 유모차 규정 확인 (탑승구까지 끌고 가서 맡길 수 있는지)",
        "엔화 현금 조금 환전 (마키노 우동·카로노우롱·페리 등은 현금만)",
        "일정: 10/10 캐널시티·이치후지 · A안 10/11 호빵맨→라라포트, 10/12 마린월드 (10/12 비 예보면 B안으로 맞바꾸기)"
      ] },

    { type: "checklist", title: "서류 · 돈",
      items: [
        "여권 3개 (아기 포함, 유효기간 확인)",
        "항공권 e-티켓, 숙소 예약 확인서 (캡처해 두기)",
        "여행자보험 증권 (종이 또는 사진)",
        "엔화 현금 + 동전지갑 (일본은 동전을 많이 써요)",
        "해외결제 되는 카드 2장 이상 (면세 5,000엔 이상은 여권 필수)"
      ] },

    { type: "checklist", title: "전자기기",
      items: [
        "멀티어댑터 (일본은 납작한 11자 A타입·100V. 한국 둥근 플러그는 안 맞아요. 숙소에서 변압기 대여도 돼요)",
        "휴대폰 충전기·케이블 (대부분 프리볼트지만 100V 지원 여부 확인)",
        "보조배터리 (위탁 수하물 불가, 기내 휴대만. 기내 사용·보관 규정은 항공사 확인)",
        "아기용 태블릿·영상 다운로드 (비행기·식당 대기용)"
      ] },

    { type: "checklist", title: "아기 · 기저귀와 위생",
      items: [
        "기저귀: 첫날 + 기내용 넉넉히 (현지 사이즈는 팬티형 L 9~14kg 또는 빅 12~22kg)",
        "물티슈 (엉덩이용 + 손입 닦는 용)",
        "기저귀 버릴 비닐봉지·지퍼백 (장난감 미술관은 쓴 기저귀를 가져가야 해요)",
        "기저귀 크림, 휴대용 기저귀 매트",
        "아기 세정제·로션·선크림 (숙소 어린이 어메니티 없음)",
        "아기 칫솔·치약",
        "아기 수건 1~2장"
      ] },

    { type: "checklist", title: "아기 · 먹기",
      items: [
        "평소 먹는 간식 (비행기 이착륙 때 먹일 것 포함)",
        "물 끓이기: 객실에 전기포트가 있지만 아기 전용으로 쓰려면 <b>여행용 전기포트(프리볼트 100~240V 표기 필수)</b> 또는 보온병. 한국 220V 전용 포트는 일본 100V에서 제대로 안 끓어요",
        "빨대컵 · 물병",
        "아기 숟가락·포크 (식당에서 아기 식기를 준다고 확인된 곳이 없어요)",
        "음식 가위 (우동 면·어묵 자르기)",
        "일회용 턱받이",
        "실리콘 그릇 1개 (앞접시 대용, 식히기)"
      ] },

    { type: "checklist", title: "아기 · 옷과 잠",
      items: [
        "옷 하루 2~3벌 × 2~3일치 (4층 코인세탁기)",
        "반팔 위주 + 얇은 겉옷 (예보 최고 29℃·최저 18~21℃, 실내 냉방·바닷바람 대비)",
        "양말 여분 (장난감 미술관은 신발 벗고 입장)",
        "모자 · 아기 선크림 (흐려도 마린월드 쇼 관람석은 햇볕)",
        "잠옷·수면조끼, 애착인형이나 애착이불",
        "평소 쓰는 수면 루틴 물건 (백색소음 앱 등)"
      ] },

    { type: "checklist", title: "아기 · 이동과 놀이",
      items: [
        "휴대용 유모차 + 레인커버 (10/13 출국일 비 60% 예보)",
        "아기띠 또는 힙시트 (안판만 뮤지엄·장난감 미술관은 유모차 반입 불가)",
        "좋아하는 장난감 1~2개, 스티커북·책 (식당 대기용)",
        "비행기에서 처음 꺼낼 새 장난감 하나"
      ] },

    { type: "checklist", title: "아기 · 건강",
      items: [
        "체온계 (숙소 대여 목록에도 있어요)",
        "해열제 등 평소 쓰는 상비약 (종류·용량은 소아과와 미리 상의)",
        "아기 건강 메모: 체중, 알레르기, 먹는 약 (일본 병원에서 보여주기)",
        "밴드·소독약",
        "아쿠아라이트 ORS 같은 경구수분보충액은 현지 드럭스토어에서 (아기 간식 페이지)"
      ] },

    { type: "checklist", title: "어른",
      items: [
        "편한 신발 (유모차 끌고 많이 걸어요)",
        "얇은 겉옷, 접이식 우산 또는 우비 (10/13 비 예보)",
        "에코백 (일본은 비닐봉투 유료)",
        "어른 상비약 (두통약·소화제·멀미약 등)",
        "선글라스·선크림"
      ] },

    { type: "checklist", title: "휴대폰에 깔아 둘 앱",
      items: [
        "카카오T 또는 GO (택시)",
        "Google 지도 (이 가이드의 지도 링크)",
        "번역 앱 (파파고·구글 번역, 카메라 번역)",
        "항공사 앱 (모바일 탑승권)",
        "Visit Japan Web (입국 QR)",
        "ママパパマップ (수유실 찾기, iOS · 한국어 없음)"
      ] },

    { type: "callout", title: "상비약 반입 규칙 (일본 세관)",
      html: `<ul>
<li>처방약은 <b>1개월분</b>, 일반 상비약은 <b>2개월분</b> 이내면 따로 절차 없이 가져갈 수 있어요. 연고·안약 같은 바르는 약은 1품목 24개 이내.</li>
<li>각성제 원료로 분류되는 성분이 든 약은 처방받았더라도 <b>사전 허가</b>가 필요해요. 코감기약 일부 성분이 해당될 수 있으니, 챙겨 가는 감기약은 약사에게 일본 반입 가능 여부를 물어보세요.</li>
<li>아기 약은 원래 포장째 가져가면 설명하기 편합니다.</li></ul>` }
  ],
  sources: [
    { label: "일본 세관 · 여행자 의약품 반입 (カスタムスアンサー 9005)", url: "https://www.customs.go.jp/tetsuzuki/c-answer/sonota/9005_jr.htm" },
    { label: "후생노동성 · 의약품 개인 반입", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/topics/tp010401-1.html" },
    { label: "Visit Japan Web (디지털청)", url: "https://services.digital.go.jp/ko/visit-japan-web/" },
    { label: "한큐교통사 · 숙소 대여 물품", url: "https://www.hankyu-travel.com/kokunai/facility/detail/htl13609.php" },
    { label: "기상청 · 후쿠오카 평년값", url: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=82&block_no=47807" }
  ]
});

/* ═════════════ 가볼 곳 · 저장 목록 점검 ═════════════ */
GUIDE.sections.push({
  id: "saved", cat: "place", code: "P04", order: 4,
  ko: "저장한 곳 점검", short: "저장 목록", jp: "保存リスト・子連れチェック", ro: "Saved Places Check",
  lead: "Google 지도 목록 ‘후쿠오카도아랑’ 10곳(숙소 포함)을 23개월 아기 기준으로 점검했어요. 아기의자, 유모차, 예약 필요 여부, 숙소에서 거리 순으로 봤습니다.",
  summary: "모츠나베 이치후지, 장난감 미술관, 라라포트, 아카짱혼포 2곳, 안판만 뮤지엄, 캐널시티",
  keywords: ["저장", "목록", "도아랑", "아기의자", "ベビーチェア", "예약", "모츠나베", "もつ鍋", "一藤", "이치후지", "장난감", "おもちゃ美術館", "라라포트", "ららぽーと", "건담", "아카짱", "アカチャンホンポ", "안판만", "호빵맨", "アンパンマン", "캐널시티", "キャナル", "분수", "GAP"],
  checked: "2026-10-05",
  blocks: [
    { type: "say", items: [{"ko": "아기의자 있나요?", "jp": "ベビーチェアはありますか？", "pron": "베비-체아와 아리마스카?"}, {"ko": "면세 되나요? 여권 여기 있어요.", "jp": "免税できますか？パスポートです。", "pron": "멘제- 데키마스카? 파스포-토데스."}] },

    { type: "callout", tone: "warn", title: "지금 바로 해 둘 것 (3연휴라 마감 위험)",
      html: `<ol>
<li><b>호빵맨 뮤지엄 웹티켓</b> · 날짜 지정(시간 지정 없음)이라 10/10 저녁 A안·B안을 정한 뒤 사세요(10/11은 9:30 개장), Klook 한국어 페이지에서도 살 수 있어요. 당일 16시까지 온라인 판매, 매표소 당일권도 있어요.</li>
<li><b>모츠나베 이치후지 10/10(토) 17:00 예약</b> · 웹 예약은 좌석을 고를 수 없어요. 개인실·아기의자·아기 자릿세를 전화로 확인(<span class="num">092-451-7888</span>, 일본어) 또는 해외 고객용 메일 <span class="num">yoyaku-hakata@ichifuji-f.jp</span>.</li>
<li><b>장난감 미술관</b>(라라포트 안)까지 가려면 온라인 예약 필수(무료 입장자 포함 전원). 라라포트 도착이 11:30쯤이라 넣으려면 낮잠을 미뤄야 해요(17시 폐관) → 호빵맨·라라포트 페이지 일정 참고.</li></ol>` },

    { type: "callout", title: "자세한 페이지로 옮겼어요",
      html: `<p>호빵맨 뮤지엄·라라포트·아카짱혼포·장난감 미술관은 <a href="#lalaport">호빵맨 뮤지엄 · 라라포트</a>, 캐널시티는 <a href="#canal">캐널시티 하카타</a> 페이지에 있어요. 마린월드는 <a href="#marine">마린월드</a>.</p>` },

    { type: "table", title: "한눈에 보기",
      head: ["장소", "아기 동반", "아기의자·식사", "숙소에서", "판정"],
      rows: [
        ["<b>모츠나베 이치후지 하카타점</b>", "아이 동반 환영, 유모차 입장 가능", "<b>아기의자 있음</b>, 이유식 반입 가능, 개인실 많음", "도보 약 5분", `<span class="tag ok">추천</span> 개인실은 전화로`],
        ["<b>후쿠오카 장난감 미술관</b>", "0~2세 전용 공간 있음", "관내 음식 불가(분유·물·차만)", "라라포트 안 · 택시 10~15분", `<span class="tag">B안</span> 17시 폐관 · 사전예약 필수`],
        ["<b>라라포트 후쿠오카</b>", "베이비 휴게실 3개 층", "푸드코트 좌식 자리, 아기의자는 미확인", "택시 10~15분", `<span class="tag ok">10/11 점심~오후</span>`],
        ["<b>아카짱혼포 라라포트점</b>", "유아용품 전문점, 면세", "–", "라라포트 3층", `<span class="tag ok">10/11 오후</span>`],
        ["<b>아카짱혼포 가든즈 지하야점</b>", "유아용품 전문점, 면세", "–", "JR 9분 + 도보 6분", `<span class="tag">둘 중 하나면 충분</span>`],
        ["<b>안판만(호빵맨) 어린이 뮤지엄</b> · 리버레인", "23개월 딱 좋은 나이, 유모차는 맡기기", "이유식 반입 OK, 전자레인지·온수", "지하철 1정거장 · 택시 약 10분", `<span class="tag ok">10/11 오전</span> 1세부터 유료`],
        ["<b>캐널시티 분수쇼</b>", "수유실 5곳, 유모차 무료 대여", "라멘 스타디움 아기의자 미확인", "도보 약 5분", `<span class="tag ok">추천</span> 가볍게`],
        ["<b>GAP 캐널시티</b>", "유모차째 들어가는 탈의실", "–", "도보 약 5분", `<span class="tag">쇼핑 겸</span>`],
        ["<b>마린월드</b>", "→ <a href=\"#marine\">마린월드 페이지</a>", "어린이 플레이트 840엔", "택시 30~40분", `<span class="tag ok">추천</span>`]
      ],
      note: "‘아기의자 있음’은 그루나비·핫페퍼 같은 예약 사이트 정보 기준이에요. 가게 사정으로 바뀔 수 있으니 예약할 때 한 번 더 물어보세요." },

    { type: "items", wide: true, title: "모츠나베 이치후지 하카타점 · もつ鍋 一藤 博多店",
      items: [
        { name: "모츠나베 이치후지 하카타점", jp: "福岡市博多区博多駅前2-4-16 · 092-451-7888", img: "img/place-motsunabe.jpg", credit: "모츠나베 예시 사진 · nesnad · CC BY 3.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Motsunabe_-_Japan_-_August_2014.jpg",
          tags: [["아기의자 있음", "ok"], ["개인실 82실", "sea"], ["17:00 오픈", ""], ["도보 5분", ""]],
          html: `<p><b>영업</b> 일~목 17:00–23:00, 금·토·연휴 중간날(10/11) 17:00–23:30, 부정기 휴무. 좌석 2시간제.</p>
<p><b>요금</b> 자릿세(お通し) 1인 495엔 + 1인 1음료. 아기에게도 붙는지는 미확인이라 전화로 물어보세요. 모츠나베는 2인분부터.</p>
<p><b>아기가 먹을 것</b> 키즈메뉴는 없고 雑炊 528엔, 밥 308엔, 짬뽕면 396엔, 두부 330엔. 국물은 어른 간이라 밥·두부·죽 위주로.</p>
<p><b>좌석</b> 바닥이 파인 좌식(掘りごたつ) 개인실 72실, 테이블 개인실 10실. 웹 예약(Toreta)은 좌석 지정이 안 되니 개인실은 전화로.</p>`,
          caution: "식탁 위에서 냄비를 끓여요(가스/IH 미확인). 아기는 냄비 반대편 벽 쪽에 앉히세요. 掘りごたつ는 아기가 파인 곳으로 떨어질 수 있어요. 금·토·일·연휴 무단 취소는 1인 5,000엔.",
          link: "https://www.ichifuji-f.jp/hakata/", linkLabel: "공식 사이트" }
      ] },

    { type: "phrases", title: "식당 예약 · 입장할 때",
      items: [
        { ko: "17시에 어른 2명, 아이 1명 예약하고 싶어요.", jp: "17時に大人2名と子ども1名で予約したいです。", pron: "쥬-시치지니 오토나 니메-토 코도모 이치메-데 요야쿠 시타이데스." },
        { ko: "아이 동반이에요. 개인실 있나요?", jp: "子ども連れです。個室はありますか？", pron: "코도모즈레데스. 코시츠와 아리마스카?" },
        { ko: "아기의자 부탁드려요.", jp: "ベビーチェアをお願いします。", pron: "베비-체아오 오네가이시마스." },
        { ko: "한 살 아이도 자릿세(오토시)가 있나요?", jp: "1歳の子どももお通しが必要ですか？", pron: "잇사이노 코도모모 오토-시가 히츠요-데스카?" },
        { ko: "유모차는 어디에 두면 되나요?", jp: "ベビーカーはどこに置けばいいですか？", pron: "베비-카-와 도코니 오케바 이-데스카?" }
      ] }
  ],
  sources: [
    { label: "Google 지도 · 저장 목록 ‘후쿠오카도아랑’", url: "https://maps.app.goo.gl/hGEMzeg8QmYKJRL86" },
    { label: "もつ鍋 一藤 博多店 · 공식", url: "https://www.ichifuji-f.jp/hakata/" },
    { label: "もつ鍋 一藤 博多店 · 메뉴", url: "https://www.ichifuji-f.jp/hakata/menu/" },
    { label: "Toreta · 一藤 博多店 예약", url: "https://yoyaku.toreta.in/ichifuji-hakata" },
    { label: "Hot Pepper · 一藤 博多店", url: "https://www.hotpepper.jp/strJ001127282/" },
    { label: "ぐるなび · 一藤 博多店 (아기의자·개인실)", url: "https://r.gnavi.co.jp/5v7efh0d0000/" },
    { label: "食べログ · 一藤 博多店", url: "https://tabelog.com/fukuoka/A4001/A400101/40040770/" },
    { label: "福岡おもちゃ美術館 · 이용 안내", url: "https://art-play.or.jp/ftm/info/" },
    { label: "福岡おもちゃ美術館 · FAQ", url: "https://art-play.or.jp/ftm/faq/" },
    { label: "福岡おもちゃ美術館 · 0~2세 가이드", url: "https://art-play.or.jp/ftm/guide/plan-baby/" },
    { label: "福岡おもちゃ美術館 · 예약 (e-tix)", url: "https://www.e-tix.jp/ftm/" },
    { label: "cheerdays · 장난감 미술관 아기 시설 (2024)", url: "https://cheerdays.fcoop.or.jp/go-out/OIMZH" },
    { label: "라라포트 후쿠오카 · 영업시간", url: "https://mitsui-shopping-park.com/lalaport/fukuoka/hour/" },
    { label: "라라포트 후쿠오카 · 베이비 휴게실", url: "https://mitsui-shopping-park.com/lalaport/fukuoka/service/baby.html" },
    { label: "라라포트 후쿠오카 · 전철 오시는 길", url: "https://mitsui-shopping-park.com/lalaport/fukuoka/access/train.html" },
    { label: "라라포트 후쿠오카 · ν건담 연출 스케줄", url: "https://mitsui-shopping-park.com/lalaport/fukuoka/event/2718166.html" },
    { label: "라라포트 후쿠오카 · 엔터테인먼트(장난감 미술관 위치)", url: "https://mitsui-shopping-park.com/lalaport/fukuoka/special/entertainment/all/" },
    { label: "아카짱혼포 라라포트 후쿠오카점", url: "https://stores.akachan.jp/282" },
    { label: "아카짱혼포 가든즈 지하야점", url: "https://stores.akachan.jp/295" },
    { label: "아카짱혼포 · 면세 안내", url: "https://www.akachan.jp/topics/tax_free_guide/Japanese/" },
    { label: "아카짱혼포 · 아기의 날 페어", url: "https://www.akachan.jp/akachannohi/" },
    { label: "観光経済新聞 · 2026년 11월 면세 환급 방식 전환", url: "https://www.kankokeizai.com/%E3%80%90%E3%82%A4%E3%83%B3%E3%83%90%E3%82%A6%E3%83%B3%E3%83%89%E5%85%8D%E7%A8%8E%E5%88%B6%E5%BA%A6%E3%80%912026%E5%B9%B411%E6%9C%88%E3%81%8B%E3%82%89%E6%89%95%E3%81%84%E6%88%BB%E3%81%97%E6%96%B9/" },
    { label: "안판만 뮤지엄 · 10월 영업시간", url: "https://www.fukuoka-anpanman.jp/news/article/iqqctveqj7j9ucl5.html" },
    { label: "안판만 뮤지엄 · 웹티켓 안내 (CLOUD PASS·Klook)", url: "https://www.fukuoka-anpanman.jp/news/article/4491bqbb7sccwgsd.html" },
    { label: "안판만 뮤지엄 · Q&A", url: "https://www.fukuoka-anpanman.jp/qa/" },
    { label: "안판만 뮤지엄 · 오시는 길", url: "https://www.fukuoka-anpanman.jp/access/" },
    { label: "캐널시티 · 분수쇼 스케줄", url: "https://canalcity.co.jp/event/detail/40" },
    { label: "캐널시티 · 서비스(유모차·수유실)", url: "https://canalcity.co.jp/service/" },
    { label: "캐널시티 · GAP", url: "https://canalcity.co.jp/shop/detail/10210801?tenant_id=10210801" },
    { label: "후쿠오카현 육아응원점 · GAP 캐널시티", url: "https://kosodate-mise.pref.fukuoka.lg.jp/shop-detail?cd=33527" },
    { label: "캐널시티 · 라멘 스타디움", url: "https://canalcity.co.jp/ra_sta/" }
  ]
});

/* ═════════════ 먹을거리 · 숙소 근처 우동집 ═════════════ */
GUIDE.sections.push({
  id: "udon", cat: "food", code: "F03", order: 3,
  ko: "숙소 근처 우동집", short: "우동집", jp: "博多うどん・子連れ", ro: "Hakata Udon near the Hotel",
  lead: "하카타 우동은 면이 부드럽고 국물이 순해서 아기와 나눠 먹기 좋아요. 숙소에서 걸어서 5~12분 안의 우동집을 아기 기준으로 골랐습니다. <b>키즈메뉴와 아기의자가 공식 확인된 곳은 와핫치</b>, 마지막 날 아침엔 <b>7시에 여는 다이후쿠</b>가 있어요.",
  summary: "아기의자·키즈메뉴, 연휴 영업, 마지막 날 아침 우동, 아기 주문 팁",
  keywords: ["우동", "うどん", "udon", "하카타 우동", "博多うどん", "아침", "朝食", "와핫치", "和八", "이나바", "因幡", "마키노", "牧のうどん", "다이후쿠", "大福", "BUSHI", "웨스트", "ウエスト", "카로노우롱", "かろのうろん", "다이치", "大地のうどん", "아기의자", "키즈메뉴"],
  checked: "2026-10-05",
  blocks: [
    { type: "say", items: [{"ko": "앞접시 주세요.", "jp": "取り皿をください。", "pron": "토리자라오 쿠다사이."}, {"ko": "미지근하게 해 줄 수 있나요?", "jp": "ぬるめにできますか？", "pron": "누루메니 데키마스카?"}] },

    { type: "gallery", title: "하카타 우동은 이렇게 생겼어요",
      images: [
        { src: "img/udon-hakata.jpg", caption: "하카타 우동 + 마루텐(동그란 어묵튀김). 면이 부드러워요", credit: "Nissy-KITAQ · CC BY-SA 3.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Hakata_udon.JPG" },
        { src: "img/udon-maki.jpg", caption: "마키노 우동. 국물 주전자와 닭고기 밥(かしわご飯)이 같이 나와요", credit: "inunami · CC BY-SA 2.0", srcUrl: "https://commons.wikimedia.org/wiki/File:%E7%89%A7%E3%81%AE%E3%81%86%E3%81%A9%E3%82%93_%E5%8D%9A%E5%A4%9A_(38843402254).jpg" },
        { src: "img/udon-goboten.jpg", caption: "고보텐(우엉튀김) 우동. 어른용, 아기에겐 질겨요", credit: "Kyoww · Public domain", srcUrl: "https://commons.wikimedia.org/wiki/File:Goboten-udon.jpg" }
      ] },

    { type: "table", title: "한눈에 보기", anchor: "list",
      head: ["가게", "숙소에서", "10/10~12", "10/13 아침", "기본 우동", "아기", "결제"],
      rows: [
        ["<b>博多うどん酒場 和八</b> 와핫치", "약 10분 · 아뮤플라자 くうてん 10층", "11:00~", "–", "고보텐 880엔~", `<span class="tag ok">키즈메뉴 680엔 · 아기의자</span>`, "카드·IC·QR"],
        ["<b>大福うどん</b> 다이후쿠 · 博多1番街점", "약 7~8분 · 하카타역 지하1층", "7:00~", `<span class="tag sea">7:00</span>`, "かけ 470엔 (2024)", "미확인", "카드·PayPay"],
        ["<b>博多うどんBUSHI</b> 부시", "약 10~12분 · HEARTS 버스스테이션 1층", "7:30~", `<span class="tag sea">8:00</span>`, "わかめ 630엔", "미확인 · 한국어 메뉴", "카드·IC·QR"],
        ["<b>因幡うどん</b> 이나바 · 1番街점", "약 7~8분 · 하카타역 지하1층", "9:00~", "10:00~", "かけ 480엔 (시점 미확인)", "아이 동반 OK", "카드·IC·QR"],
        ["<b>因幡うどん</b> 이나바 · デイトス점", "약 10분 · 데이토스 지하1층", "10:00~", "11:00~", "1番街점과 같은 계열", "아이 동반 OK · 전석 테이블", "출처마다 다름"],
        ["<b>牧のうどん</b> 마키노 · 버스터미널점", "약 7분 · 하카타 버스터미널 지하1층", "10:00~23:00", "–", "かけ 390엔(공식 메뉴, 이 점포 가격은 별도)", "부드러운 면(やわ) 선택", "현금 (식권기)"],
        ["<b>ウエスト</b> 웨스트 · 祇園점", "약 5분 · 1층 70석", "11:00~23:30", "–", "ミニうどん 520엔", "아기의자(2015년 후기)", "QR만"],
        ["<b>大地のうどん</b> 다이치 · 博多駅ちか점", "약 6분 · 지하2층", "10:30~16:00 / 17:00~21:00", "–", "미확인", "미확인 · 점심 줄 김", "현금 (식권기)"],
        ["<b>かろのうろん</b> 카로노우롱", "약 12~15분 · 구시다신사 근처", "11:00~17:00", "화 휴무", "素うどん 500엔", `<span class="tag signal">미취학 입장 미확인</span>`, "현금만"]
      ],
      note: "걷는 시간은 숙소 공식 안내(하카타역 博多口 7분, 祇園역 6분)와 가게 주소로 계산한 추정치예요. 영업 여부는 공식 정보로 확인했지만 연휴라 바뀔 수 있으니 와핫치·이나바·카로노우롱은 가기 전에 전화로 한 번 더 확인하세요." },

    { type: "callout", tone: "warn", title: "이번 일정엔 못 가는 곳",
      html: `<ul>
<li><b>能古うどん 캐널시티점</b> · 키즈세트·아기의자가 있던 곳인데 <b>9/1~12월 하순 공사로 휴업</b>.</li>
<li><b>うどん平 (우동 타이라)</b> · 2019년 住吉로 이전, <b>일·공휴일 휴무</b>라 10/10(토)만 가능. 합석 기본, 20분쯤 줄, 현금만.</li>
<li><b>博多あかちょこべ</b> · 점심은 평일만, 핫페퍼에 ‘아이 동반 불가’ 표기.</li>
<li><b>資さんうどん</b> · 24시간·좌식이 있지만 가장 가까운 지점도 걸어서 25분 이상(추정). 택시로만.</li></ul>` },

    { type: "facts", title: "가게별 메모",
      rows: [
        ["와핫치 和八 <span class=\"tag ok\">1순위</span>", `<span class="jp">博多区博多駅中央街1-1 アミュプラザ博多 くうてん10F</span> · <span class="num">092-409-3908</span><br>11:00~21:30(토 22:00까지) 연중무휴. <b>お子様御膳 680엔</b>(미니 우동·감자튀김·너겟·햄버그, 장난감 증정), 유아용 의자 있음(JR하카타시티 공식). 35석 카운터·테이블, 좌식 없음. 같은 층에 수유실(아뮤플라자 10층).`],
        ["다이후쿠 大福うどん <span class=\"tag sea\">아침</span>", "JR하카타시티 지하1층 博多1番街 · 일~목 7:00~21:30, 금·토 7:00~22:00 · 40석(카운터·테이블). 면이 속까지 부드럽다는 후기. 국물이 짜다는 후기가 있어 물을 조금 타서 먹이세요. 10/13 출발 전 아침으로 좋아요."],
        ["부시 BUSHI <span class=\"tag sea\">아침</span>", "<span class=\"jp\">博多駅前4-14-13 HEARTSバスステーション博多 1F</span> · 2026년 4월 개업 · 주말·공휴일 7:30~, 평일 8:00~(타베로그 기준) · 테이블·카운터·스탠딩 · <b>한국어 메뉴 있음</b>. 고보텐 700엔, かしわご飯 280엔."],
        ["이나바 因幡うどん", "숙성한 푹신한 면이 특징. 1番街점 평일 10:00~, 토·일·공휴일 9:00~(42석). <b>デイトス점은 전석 테이블</b>이라 유모차와 가기 편해요(토·일·공휴일 10:00~, 평일 11:00~). 둘 다 ‘아이 동반 OK’."],
        ["마키노 牧のうどん", "하카타 버스터미널 지하1층 · 10:00~23:00. 면 굵기 대신 <b>やわ(부드러움)·中·かた</b>를 고르는데 아기는 やわ. 면이 국물을 계속 빨아들여서 국물 주전자가 같이 나와요. 대부분 카운터, 안쪽에 테이블. 2025년 6월 후기 기준 10~15분 대기. 공식 메뉴의 お子様セット(620엔)가 이 점포에도 있는지는 미확인. <b>현금만</b>."],
        ["웨스트 ウエスト", "<span class=\"jp\">博多駅前2-20-15</span>(祇園역 5번 출구 근처) · 11:00~23:30 연중무휴 · 70석 1층이라 유모차 들어가기 쉬워 보여요. 키즈메뉴는 없고 미니 우동 520엔. 2015년 후기에 ‘아기의자 있고, 부탁하면 미지근하고 묽게 해 줬다’(현재 미확인). <b>카드 불가, QR결제만</b>."],
        ["다이치 大地のうどん", "<span class=\"jp\">博多駅前2-1-1 朝日ビル B2F</span> · 점심 12~14시 줄이 길고 저녁은 한산. 면이 쫄깃한 편이고 큰 고보텐이 명물이라 어른 취향. 현금(식권기)."],
        ["카로노우롱 かろのうろん", "<span class=\"jp\">上川端町2-1</span> · <span class=\"num\">092-291-6465</span> · 11:00~17:00(재료 소진 시 마감), 화 휴무 · 20석으로 좁고 대기 30분쯤(2025년 12월 후기) · 현금만, 실내 촬영 금지. 미취학 아이 입장 가능 여부가 확인되지 않아 <b>전화로 먼저 확인</b>하세요."]
      ] },

    { type: "text", title: "아기에게 주문할 때",
      html: `<ul>
<li><b>추천</b> · 素うどん/かけうどん(기본 우동), 마키노라면 やわ면. 丸天(어묵튀김)은 잘게 잘라서. かしわご飯(닭고기 밥)도 나눠 먹기 좋아요.</li>
<li><b>피할 것</b> · 明太子, 柚子胡椒, 테이블의 七味(고춧가루), 질기고 섬유질 많은 ごぼう天(우엉튀김), わかめ(미역), 月見(날달걀). 肉うどん 소고기는 잘게 잘라서.</li>
<li><b>온도·간</b> · 국물이 뜨겁고 짜요. 앞접시에 덜어 식히고 물을 조금 타 주세요. 아기용 가위를 챙기면 편합니다.</li>
<li><b>현금</b> · 마키노·다이치·카로노우롱은 현금만, 웨스트는 QR만이라 엔화 현금을 조금 들고 다니세요.</li>
<li>앞접시·아기 식기를 준다고 공식 확인된 곳은 없어요. 아기 숟가락·포크는 챙겨 가세요.</li></ul>` },

    { type: "phrases", title: "우동집에서",
      items: [
        { ko: "앞접시 주세요.", jp: "取り皿をください。", pron: "토리자라오 쿠다사이." },
        { ko: "아이 의자 있나요?", jp: "子ども用の椅子はありますか？", pron: "코도모요-노 이스와 아리마스카?" },
        { ko: "미지근하게 해 줄 수 있나요?", jp: "ぬるめにできますか？", pron: "누루메니 데키마스카?" },
        { ko: "면은 부드럽게 해 주세요.", jp: "麺はやわらかめでお願いします。", pron: "멘와 야와라카메데 오네가이시마스." },
        { ko: "파는 빼 주세요.", jp: "ネギ抜きでお願いします。", pron: "네기누키데 오네가이시마스." },
        { ko: "카드로 낼 수 있나요?", jp: "カードは使えますか？", pron: "카-도와 츠카에마스카?" }
      ] }
  ],
  sources: [
    { label: "JR博多シティ · 키즈메뉴 (와핫치 お子様御膳)", url: "https://www.jrhakatacity.com/kidsmenu/" },
    { label: "Hot Pepper · 博多うどん酒場 和八", url: "https://www.hotpepper.jp/strJ001232218/" },
    { label: "和八 · 공식 매장 정보", url: "https://www.wappachi.com/shopinfo.html" },
    { label: "じもハック · 和八 (2026-08)", url: "https://jimohack.fukuoka.jp/hakata/22445/" },
    { label: "博多1番街 · 大福うどん", url: "https://www.hakata-1bangai.com/floorguide/shop1.html" },
    { label: "Retty · 大福うどん", url: "https://retty.me/area/PRE40/ARE126/SUB12601/100000712090/" },
    { label: "note · 大福うどん 아침 후기 (2026-07)", url: "https://note.com/tabimogu5/n/n01c3343672fb" },
    { label: "ARNE · 博多うどんBUSHI (2026-05)", url: "https://arne.media/gourmet/584622/" },
    { label: "Tabelog · 博多うどんBUSHI", url: "https://tabelog.com/en/fukuoka/A4001/A400101/40073569/" },
    { label: "博多1番街 · 因幡うどん", url: "https://www.hakata-1bangai.com/floorguide/shop15.html" },
    { label: "JR博多シティ · 因幡うどん デイトス店", url: "https://www.jrhakatacity.com/floor/detail/?cd=000318" },
    { label: "Tabelog · 因幡うどん デイトス店", url: "https://tabelog.com/en/fukuoka/A4001/A400101/40005857/" },
    { label: "博多バスターミナル · 牧のうどん", url: "https://www.h-bt.jp/floor/shop62.html" },
    { label: "牧のうどん · 공식 메뉴", url: "https://www.makinoudon.jp/cont1/main.html" },
    { label: "Tabelog · 牧のうどん 博多バスターミナル店", url: "https://tabelog.com/en/fukuoka/A4001/A400101/40042204/" },
    { label: "Tabelog · 大地のうどん 博多駅ちかてん", url: "https://tabelog.com/en/fukuoka/A4001/A400101/40035066/" },
    { label: "ウエスト · 祇園店", url: "https://www.shop-west.jp/store/27.html" },
    { label: "4travel · ウエスト 아이 동반 후기", url: "https://4travel.jp/dm_shisetsu_tips/11754357" },
    { label: "かろのうろん · 메뉴", url: "https://karonouron.com/menu/en" },
    { label: "Tabelog · かろのうろん", url: "https://tabelog.com/en/fukuoka/A4001/A400102/40000027/" },
    { label: "캐널시티 · 能古うどん 휴업 안내", url: "https://canalcity.co.jp/shop/detail/10500602?tenant_cd=10500602" },
    { label: "なるほど福岡 · うどん平", url: "https://www.naruhodo-fukuoka.com/taira" },
    { label: "Hot Pepper · 博多あかちょこべ", url: "https://www.hotpepper.jp/strJ000796113/" }
  ]
});

/* ═════════════ 가볼 곳 · 아프리칸 사파리 vs 동식물원 ═════════════ */
GUIDE.sections.push({
  id: "safari", cat: "place", code: "P07", order: 7,
  ko: "아프리칸 사파리, 갈까?", short: "사파리 검토", jp: "九州自然動物公園 アフリカンサファリ", ro: "African Safari or City Zoo",
  lead: "‘후쿠오카 사파리’로 불리는 곳은 오이타현 우사시의 <b>규슈 자연동물공원 아프리칸 사파리</b> 한 곳이에요(후쿠오카현 안엔 사파리형 시설이 없습니다). 결론부터 말하면 <b>이번 일정엔 비추천</b>이고, 동물을 더 보고 싶으면 택시 17분 거리의 <b>후쿠오카시 동식물원</b>을 권합니다.",
  summary: "왕복 5~6시간·정글버스 현장 선착순이라 비추천. 대안은 시내 동식물원",
  keywords: ["사파리", "safari", "サファリ", "아프리칸 사파리", "アフリカンサファリ", "정글버스", "ジャングルバス", "동물원", "動物園", "동식물원", "動植物園", "오이타", "大分", "벳푸", "別府"],
  checked: "2026-10-05",
  blocks: [
    { type: "callout", tone: "danger", title: "이번엔 권하지 않는 이유",
      html: `<ul>
<li><b>멀어요.</b> 차 없이 편도 2.5~3시간, 왕복 5~6시간. 하루 10~11시간짜리 일정이 됩니다.</li>
<li><b>핵심인 정글버스(먹이 주기)는 온라인 예약이 없는 당일 현장 선착순</b>이고, 공식 사이트도 휴일 혼잡 시 못 탈 수 있다고 적어 둡니다. 10/10~12는 일본 3연휴.</li>
<li>23개월은 정글버스에서 <b>부모 무릎에 앉아 50분</b> 흔들리는 길을 가고, 유모차는 버스에 못 싣습니다.</li>
<li>12:30~14:30 낮잠이 이동 시간과 겹쳐요. 동물은 마린월드에서 이미 봅니다.</li>
<li>차 없이 가면 3인 하루 비용 약 3.8만~5.4만 엔.</li></ul>` },

    { type: "table", title: "아프리칸 사파리 vs 후쿠오카시 동식물원",
      head: ["", "아프리칸 사파리", "후쿠오카시 동식물원"],
      rows: [
        ["이동", "차 없이 편도 약 2.5~3시간", "<b>택시 약 17분, 약 1,870엔</b>(NAVITIME)"],
        ["10/10~12", "접수 8:50~16:00 · 개원 9:15~16:30 · 휴원 공지 없음", "9:00~17:00(입장 16:30까지) · <b>10/12 개원, 10/13 휴원</b>"],
        ["입장료", "어른 2,600 · 4세~중학생 1,500 · 3세 이하 무료(제3자 사이트 기준)", "어른 600 · 고교생 300 · <b>중학생 이하 무료</b>"],
        ["유모차", "대여 300엔 · 정글버스 반입 불가", "대여 330엔(2세 미만, 수량 한정)"],
        ["수유실", "종합안내소, 매점 アローザ 안", "동물원 입구, 식물원 緑の情報館 1층(비공식 출처)"],
        ["지형", "미확인", "언덕·급경사가 많음. 동물원~식물원 무료 슬로프카(약 1분)"],
        ["낮잠", "이동 중 차 안에서", "오전에 보고 숙소로 돌아와 낮잠"],
        ["3인 하루 비용", "약 3.8만~5.4만 엔 (차 없이)", "약 5,300엔 (택시 왕복 + 어른 입장 + 유모차)"]
      ] },

    { type: "gallery",
      images: [
        { src: "img/safari-junglebus.jpg", caption: "정글버스 철창 너머로 기린에게 먹이 주기", credit: "Gordon Cheung · CC BY 2.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Feeding_(32718898744).jpg" },
        { src: "img/safari-park.jpg", caption: "아프리칸 사파리의 코뿔소와 사슴", credit: "にほ さん · CC BY 2.0", srcUrl: "https://commons.wikimedia.org/wiki/File:%E4%B9%9D%E5%B7%9E%E8%87%AA%E7%84%B6%E5%8B%95%E7%89%A9%E5%85%AC%E5%9C%92%E3%82%A2%E3%83%95%E3%83%AA%E3%82%AB%E3%83%B3%E3%82%B5%E3%83%95%E3%82%A1%E3%83%AA1.jpg" },
        { src: "img/zoo-gate.jpg", caption: "후쿠오카시 동식물원 정문 (2023)", credit: "Hirho · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Gate_of_Fukuoka_Zoo_and_Botanical_Garden_1-1_Minami-k%C5%8Den_Ch%C5%AB%C5%8D-ku_Fukuoka_City_20230427.jpg" }
      ] },

    { type: "timeline", title: "대안 · 후쿠오카시 동식물원 반나절 (10/12 공휴일)",
      items: [
        { time: "09:10", title: "숙소에서 택시 (약 17분)" },
        { time: "09:30", title: "입장 · 유모차 대여(2세 미만, 330엔)", html: "<p>23개월이라 대여 대상이에요. 수량 한정이니 일찍.</p>" },
        { time: "11:45", title: "택시로 숙소 복귀", html: "<p>언덕이 많아 오래 걷기보다 짧고 굵게</p>" },
        { time: "12:30", title: "숙소 낮잠" }
      ],
      note: "월요일 휴원이고 월요일이 공휴일이면 다음 날 휴원이라, 10/12(월·공휴일)은 열고 10/13(화)은 닫아요. 9/30 공지로 경사면 공사 때문에 아시아코끼리 공개 장소가 바뀌었습니다." },

    { type: "text", title: "그래도 사파리에 가고 싶다면",
      html: `<p><b>아침 8:50 입장 접수에 맞춰 차로 가서, 정글버스는 ‘타면 좋고 아니면 그만’</b>으로 생각하는 게 현실적이에요.</p>
<ul>
<li><b>렌터카</b> · 福岡IC→別府湾スマートIC 1시간 31분, 통행료 3,580엔(ETC 휴일할인 2,510엔, 연휴 적용 여부 미확인). 이 IC는 ETC 차량 전용이고 공원까지 약 7분. 시내 이동 포함 편도 약 2시간. 렌트비·카시트 비용은 미확인.</li>
<li><b>JR + 택시</b> · 博多→別府 특급 소닉 최단 2시간 1분(정규 지정석 6,910엔, 넷 할인 2,950엔~). 별부역→공원 택시 약 23km·30~40분, 낮 요금 약 7,000~8,000엔(추정). 공원엔 대기 택시가 없고 호출하면 30분쯤 걸려요.</li>
<li><b>벳푸 출발 관광택시</b> · みなとタクシー 사파리 코스 3.5시간, 일반차 20,930엔(입장료·주차·고속도로 별도). 전화 예약 <span class="num">0977-23-5115</span>는 평일 9~17시만이라 <b>10/9(금)까지</b> 연락해야 해요. 카시트 여부 미확인.</li>
<li><b>하카타 출발 버스투어</b> · 마이리얼트립 상품 79,000원~(입장료 포함), 약 10시간, 07:40 하카타역 집합. 유아 무료 기준(12개월 이하 / 24개월 미만)이 상품마다 다르고, 무료면 좌석 없음. 카시트 없는 상품이 많아요.</li></ul>
<p><b>마이카 사파리</b>는 입장료만 내고 30~40분 돌지만 먹이를 주지 않아 동물이 잘 다가오지 않는다고 공식 FAQ에 적혀 있어요. 정글버스는 4세 이상 1,500엔·약 50분, 3세 이하는 무료지만 보호자 무릎. 2025년 5월부터 ‘차로 도착한 순서대로 판매, 도보 구매 불가’ 규칙이 생겨, 택시로 온 가족이 표를 어떻게 사는지는 전화(<span class="num">0978-48-2331</span>)로 확인이 필요합니다.</p>
<p>공원 안 걷는 구역(ふれあいゾーン)엔 모르모트(만지기), 토끼, 카피바라, 캥거루, 미어캣이 있고 먹이는 200엔. 레스토랑 サルビア에 어린이 메뉴가 있어요. 결제는 카드·교통카드·PayPay, 일부 매점은 현금만이고 원내 ATM은 없습니다.</p>` }
  ],
  sources: [
    { label: "아프리칸 사파리 · 이용 안내", url: "https://africansafari.co.jp/information/" },
    { label: "아프리칸 사파리 · 정글버스", url: "https://africansafari.co.jp/jungle-bus/" },
    { label: "아프리칸 사파리 · 정글버스 판매 규칙 변경 (2025-05)", url: "https://africansafari.co.jp/news/junglebus_20250510/" },
    { label: "아프리칸 사파리 · 마이카 사파리", url: "https://africansafari.co.jp/mycar/" },
    { label: "아프리칸 사파리 · FAQ", url: "https://africansafari.co.jp/faq/" },
    { label: "아프리칸 사파리 · 오시는 길", url: "https://africansafari.co.jp/access/" },
    { label: "우사시 · 규슈 자연동물공원 소개", url: "https://www.city.usa.oita.jp/tourist/touristspot/touristspot2/touristspot3/10181.html" },
    { label: "JR큐슈 · 후쿠오카↔오이타 넷 예약 할인", url: "https://www.jrkyushu.co.jp/railway/netyoyaku/route/oita/" },
    { label: "みなとタクシー · 관광택시", url: "https://minato-group.co.jp/sightseeing.html" },
    { label: "마이리얼트립 · 아프리칸 사파리 투어", url: "https://experiences.myrealtrip.com/products/4634494" },
    { label: "WAUG · 아프리칸 사파리 투어", url: "https://www.waug.com/ko/activities/140416" },
    { label: "후쿠오카시 동식물원 · 이용 안내", url: "https://zoo.city.fukuoka.lg.jp/general/" },
    { label: "후쿠오카시 동식물원 · 안내", url: "https://zoo.city.fukuoka.lg.jp/information/" },
    { label: "후쿠오카시 동식물원 · 코끼리 공개 장소 변경 (9/30)", url: "https://zoo.city.fukuoka.lg.jp/news/detail/1488" }
  ]
});

/* ═════════════ 아기와 함께 · 키즈카페 · 실내 놀이터 ═════════════ */
GUIDE.sections.push({
  id: "kidsplay", cat: "baby", code: "K02",
  ko: "키즈카페 · 실내 놀이터", short: "키즈카페", jp: "キッズカフェ・室内遊び場", ro: "Indoor Play for Toddlers",
  lead: "비 오는 날이나 남는 시간에 갈 실내 놀이터예요. 안판만 뮤지엄과 장난감 미술관은 <a href=\"#saved\">저장한 곳 점검</a>에 따로 있어요. <b>가장 가까운 곳은 캐널시티 안 스키즈 가든(도보 10분)</b>, 23개월에게 맞는 0~2세 전용 구역이 있는 곳은 <b>이온몰 후쿠오카 치큐노니와</b>입니다. 무료 공공 놀이방(子どもプラザ)도 있어요.",
  summary: "캐널시티 스키즈 가든, 치큐노니와, 무료 육아 플라자 3곳, 과학관 오야코 히로바",
  keywords: ["키즈카페", "キッズカフェ", "실내 놀이터", "室内遊び場", "놀이방", "비 오는 날", "雨", "볼풀", "스키즈", "スキッズガーデン", "치큐노니와", "ちきゅうのにわ", "子どもプラザ", "과학관", "科学館", "아소비파크", "あそびパーク", "키도키도"],
  checked: "2026-10-06",
  blocks: [
    { type: "say", items: [{"ko": "어른 2명, 한 살 아이 1명이에요.", "jp": "大人2人と1歳の子ども1人です。", "pron": "오토나 후타리토 잇사이노 코도모 히토리데스."}] },

    { type: "callout", title: "먼저 알아둘 것",
      html: `<ul>
<li>한국에서 유명한 <b>보네룬드 키도키도는 후쿠오카에 없어요</b>(리버레인점 2021년 2월 폐점).</li>
<li>일본 키즈카페는 대부분 <b>아이 요금 + 보호자 요금</b>을 따로 받고, 안에서 음식·기저귀 갈기가 안 되는 곳이 많아요. 들어가기 전에 기저귀를 갈고 가세요.</li>
<li>무료 육아 플라자는 대부분 <b>16시에 닫아서</b> 낮잠(12:30~14:30)을 생각하면 오전 10~12시가 맞아요.</li>
<li>입장 때 아이 나이를 확인하니(일본은 모자수첩) <b>아기 여권</b>을 챙기세요.</li></ul>` },

    { type: "table", title: "한눈에 보기 (숙소에서 가까운 순)",
      head: ["시설", "숙소에서", "10/10 토 · 11 일 · 12 월", "23개월 / 보호자 요금", "판정"],
      rows: [
        ["<b>스키즈 가든 캐널시티 하카타점</b>", "도보 약 10분", "3일 모두 10~21시", "30분 800엔(15분 연장 300엔) / 주말 500엔", `<span class="tag ok">추천</span>`],
        ["<b>하카타구 산노 코도모 플라자</b>", "택시 약 10분", "토 ○ · 일 휴관 · 월 ○", "무료", `<span class="tag sea">무료</span>`],
        ["<b>히가시하마 코도모 플라자</b> (유메타운 하카타)", "택시 10~15분", "3일 모두 ○", "무료", `<span class="tag sea">무료 · 일요일 OK</span>`],
        ["<b>주오구 코도모 플라자 ‘노비노비’</b> (텐진)", "지하철 15~20분", "3일 모두 ○ (10/13 휴관)", "무료", `<span class="tag sea">무료 · 18시까지</span>`],
        ["<b>후쿠오카시 과학관 ‘오야코 히로바’</b>", "지하철 나나쿠마선 약 25분", "3일 모두 ○ (10/13 휴관)", "무료", `<span class="tag sea">무료</span>`],
        ["<b>아소비 파크 플러스 마크이즈 모모치점</b>", "택시 약 20분", "3일 모두 10~19시", "주말 30분 800엔 / 1인 800엔", `<span class="tag">아기 구역은 18개월까지</span>`],
        ["<b>치큐노니와 후쿠오카점</b> (이온몰 후쿠오카)", "택시 25~30분", "3일 모두 10~20시", "휴일 1시간 1,300엔 / 1인 600엔", `<span class="tag ok">0~2세 전용 구역</span>`],
        ["<b>키즈랜드 US 아일랜드 아이점</b>", "택시 약 25분", "영업 추정", "1시간 800엔 / 1일 700엔", `<span class="tag">우선순위 낮음</span>`]
      ],
      note: "이동 시간은 지도상 거리로 잡은 추정치예요. 공공 플라자가 관광객도 받는지는 히가시하마(타 지역 거주자 OK)를 빼면 확인하지 못했어요." },

    { type: "items", wide: true, title: "가볼 만한 곳",
      items: [
        { name: "스키즈 가든 캐널시티 하카타점", jp: "スキッズガーデン キャナルシティ博多店 · 博多区住吉1-2-25 ビジネスセンタービル B1F", img: "img/kids-skidsgarden.jpg", credit: "スキッズガーデン 공식 브랜드 사진", srcUrl: "https://www.fantasy.co.jp/skidsgarden/",
          tags: [["도보 10분", "ok"], ["21시까지", "sea"], ["비 오는 날", ""]],
          html: `<p><b>영업</b> 10:00~21:00(최종 입장 20시), 연중무휴.</p>
<p><b>요금</b> 1세 이상 30분 800엔, 15분 연장마다 300엔, 0세 무료. 보호자는 평일 무료, <b>토·일·공휴일 500엔</b>(연장 없음). 캐널시티 안내에 여권을 보여 주면 아이 100엔 할인이 있어요. 아이 1명당 보호자 1명 무료가 브랜드 공통 규정이라 두 번째 보호자 요금은 현장 확인.</p>
<p><b>이용</b> 0~8세, 0~2세는 16세 이상 보호자 동반. 최대 2시간 30분. 휴대전화 번호 등록이 필요한데 한국 번호도 되는지는 미확인. 볼풀, 그물 정글, 장난감·역할놀이 코너. 0~2세 전용 구역은 명시돼 있지 않아요.</p>`,
          caution: "안에서 음식·기저귀 갈기·낮잠 금지. 수유실·기저귀대는 캐널시티 것을 쓰세요. 약 68평으로 작아서 연휴 오후엔 붐빌 수 있으니 10시 오픈에 맞추는 게 좋아요(추정).",
          link: "https://www.fantasy.co.jp/skidsgarden/shoplist/shop34383/", linkLabel: "공식 매장 페이지" },
        { name: "치큐노니와 후쿠오카점", jp: "ちきゅうのにわ 福岡店 · 糟屋郡粕屋町 イオンモール福岡 2F", img: "img/kids-chikyunoniwa.jpg", credit: "ちきゅうのにわ 공식 사진 (매장 미표기)", srcUrl: "https://www.fantasy.co.jp/chikyunoniwa/fukuoka/",
          tags: [["0~2세 베이비 가든", "ok"], ["택시 25~30분", ""], ["반나절", "sea"]],
          html: `<p><b>영업</b> 10:00~20:00(최종 입장 19:30).</p>
<p><b>휴일 요금</b> 아이 1시간 1,300엔, 3시간 1,700엔, 1일 2,000엔. 보호자 600엔.</p>
<p><b>아기</b> 볼풀과 교육 완구가 있는 <b>0~2세 전용 ‘베이비 가든’</b>이 있어 23개월에게 시설은 가장 잘 맞아요. 전철은 JR 갈아타고 사카도역에서 도보 15분이라 택시를 권합니다.</p>`,
          caution: "토·일·공휴일엔 음식 반입 불가(뚜껑 있는 음료만), 안에서 기저귀 갈기 불가. 주말 혼잡도는 미확인.",
          link: "https://www.fantasy.co.jp/chikyunoniwa/fukuoka/", linkLabel: "공식 매장 페이지" },
        { name: "후쿠오카시 과학관 · 오야코 히로바", jp: "福岡市科学館 おやこひろば · 中央区六本松4-2-1 4F", img: "img/kids-sciencemuseum.jpg", credit: "そらみみ · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Fukuoka_City_Science_Museum_20171103-3.jpg",
          tags: [["무료", "ok"], ["화요일 휴관", "signal"], ["한국어 리플릿", ""]],
          html: `<p>미취학 아이와 보호자용 무료 놀이 공간(4층). 관 전체는 9:30~21:30이고 오야코 히로바만의 운영 시간은 미확인. 5층 전시를 볼 때만 어른 510엔.</p>
<p><b>아기</b> 기저귀대, 수유 공간, 무료 유모차 대여. 음식은 4층 교류실과 6층 로비에서만. 지하철 나나쿠마선 六本松역 바로 앞이라 숙소 근처 櫛田神社前역에서 갈아타지 않고 가요.</p>`,
          link: "https://www.fukuokacity-kagakukan.jp/floorguide/4f.html", linkLabel: "공식 4층 안내" }
      ] },

    { type: "gallery",
      images: [
        { src: "img/kids-skidsgarden-price.jpg", caption: "스키즈 가든 캐널시티점 요금표 (0세 무료, 보호자 토·일·공휴일 500엔)", credit: "スキッズガーデン 공식 캡처 2026-10-06", srcUrl: "https://www.fantasy.co.jp/skidsgarden/shoplist/shop34383/" }
      ] },

    { type: "facts", title: "무료 육아 플라자 (子どもプラザ)",
      rows: [
        ["산노 코도모 플라자 ‘にっこりこ’", `<span class="jp">博多区山王1-13-10 博多市民センター 2F</span> · 10:00~16:00 · <b>일요일·매월 마지막 월요일 휴관</b>(10월은 일요일과 10/26) → 10/10 토·10/12 월 이용 가능. 무료, 예약 없음, 첫 방문 때 등록. 규모는 작아요.`],
        ["히가시하마 코도모 플라자", `<span class="jp">東区東浜1-1-1 ゆめタウン博多 2F</span> · 10:00~16:00 · 목요일·셋째 금요일 휴관 → 4일 모두 열어요. <b>타 지역 거주자도 이용 가능</b>, 이름만 적고 입장. 어른 양말 필수, 음식 금지, 기저귀는 가져가기. 몰에 수유실·기저귀대.`],
        ["주오구 코도모 플라자 ‘のびのび’", `<span class="jp">中央区今泉1-19-22 天神CLASS</span>(あいくる 안, 층은 5층·6층으로 안내가 엇갈려요) · 9:00~18:00 · 월요일(공휴일이면 다음 날)·말일 휴관 → 10/12 열고 10/13 닫아요. 0~6세와 보호자만. 텐진미나미역 1번 출구 도보 약 5분.`]
      ] },

    { type: "text", title: "짧게 · 참고만",
      html: `<ul>
<li><b>하카타 키즈 스테이션</b> · 하카타역 3·4번 승강장 끝, 쿠션 매트에서 열차 구경(무료, JR 이용객 외엔 입장권 150엔). 원래 기간 한정 설치라 <b>2026년 운영 여부 미확인</b>. JR 탈 때 보이면 들르는 정도.</li>
<li><b>아소비 파크 플러스(마크이즈 모모치)</b> · 6개월~12세 대상이지만 아기 전용 ‘베이비 테라스’는 18개월까지라 23개월은 못 써요. 안에 화장실·수유실이 없어요. 모모치 해변·후쿠오카 타워와 묶을 때만.</li>
<li><b>23개월에게 안 맞는 곳</b> · 라라포트의 키자니아(3~15세)·VS PARK, 마크이즈 닌자 파크(2세 이상, 미확인).</li>
<li>맑은 날엔 하카타역 옥상 <b>츠바메노모리 광장</b>(무료, 10:00~22:00, 미니 열차는 운행 종료).</li></ul>` },

    { type: "phrases", title: "놀이터 입구에서",
      items: [
        { ko: "어른 2명, 한 살(23개월) 아이 1명이에요.", jp: "大人2人と1歳の子ども1人です。", pron: "오토나 후타리토 잇사이노 코도모 히토리데스." },
        { ko: "나이는 여권으로 확인해도 되나요?", jp: "年齢はパスポートで確認できますか？", pron: "넨레-와 파스포-토데 카쿠닌 데키마스카?" },
        { ko: "어른도 양말이 필요한가요?", jp: "大人も靴下が必要ですか？", pron: "오토나모 쿠츠시타가 히츠요-데스카?" },
        { ko: "0~2세가 노는 구역이 있나요?", jp: "0〜2歳のエリアはありますか？", pron: "제로카라 니사이노 에리아와 아리마스카?" },
        { ko: "기저귀는 어디서 갈 수 있나요?", jp: "おむつはどこで替えられますか？", pron: "오무츠와 도코데 카에라레마스카?" }
      ] }
  ],
  sources: [
    { label: "보네룬드 · 리버레인 키도키도 폐점 공지", url: "https://www.bornelund.co.jp/page/hakata-riverainmall_2101" },
    { label: "스키즈 가든 · 캐널시티 하카타점", url: "https://www.fantasy.co.jp/skidsgarden/shoplist/shop34383/" },
    { label: "스키즈 가든 · 브랜드 이용 안내", url: "https://www.fantasy.co.jp/skidsgarden/" },
    { label: "캐널시티 · 스키즈 가든 (여권 할인)", url: "https://canalcity.co.jp/shop/detail/10100220?tenant_id=10100220" },
    { label: "하카타경제신문 · 스키즈 가든 개업", url: "https://hakata.keizai.biz/headline/4303/" },
    { label: "루루부 키즈 · 스키즈 가든 (2025)", url: "https://kids.rurubu.jp/article/161123/" },
    { label: "치큐노니와 · 후쿠오카점", url: "https://www.fantasy.co.jp/chikyunoniwa/fukuoka/" },
    { label: "이온몰 후쿠오카 · 오시는 길", url: "https://fukuoka-aeonmall.com/static/detail/access" },
    { label: "후쿠오카시 과학관 · 4층 안내", url: "https://www.fukuokacity-kagakukan.jp/floorguide/4f.html" },
    { label: "후쿠오카시 과학관 · 이용 안내", url: "https://www.fukuokacity-kagakukan.jp/use/" },
    { label: "いこーよ · 후쿠오카시 과학관", url: "https://iko-yo.net/facilities/92370" },
    { label: "산노 코도모 플라자 · 공식", url: "https://nikkorikoniko.wixsite.com/sannoukodomoplaza" },
    { label: "후쿠오카시 · 육아 플라자 안내", url: "https://www.city.fukuoka.lg.jp/kodomo-mirai/jigyo-tyosei/child/circles.html" },
    { label: "히가시하마 코도모 플라자 · 공식", url: "https://www.oz-com.jp/higashihama/" },
    { label: "유메타운 하카타 · 히가시하마 플라자", url: "https://www.izumi.jp/tenpo/hakata/shop/service/higashihamaplaza" },
    { label: "아이쿠루 · 주오구 코도모 플라자", url: "https://www.jidoukaikan-aikuru.or.jp/cp_index.php" },
    { label: "아소비 파크 플러스 · 마크이즈 모모치점", url: "https://bandainamco-am.co.jp/kids/asobiparkplus/loc/fukuoka-momochi.html" },
    { label: "아소비 파크 플러스 · FAQ", url: "https://bandainamco-am.co.jp/kids/asobiparkplus/faq/" },
    { label: "키즈랜드 US · 아일랜드 아이점", url: "https://kidslandus.com/shop/fukuoka-islandeye/" },
    { label: "JR큐슈 note · 하카타 키즈 스테이션 (2025-06)", url: "https://note.com/jrkyushu_tetsudo/n/n3f1028732279" }
  ]
});

/* ═════════════ 가볼 곳 · 다케오온센 당일치기 ═════════════ */
GUIDE.sections.push({
  id: "takeo", cat: "place", code: "P06", order: 6,
  ko: "다케오온센 당일치기", short: "다케오온센", jp: "武雄温泉 日帰り", ro: "Takeo Onsen Day Trip",
  lead: "사가현 다케오온센은 하카타에서 특급 리레이카모메로 <b>갈아타지 않고 약 1시간</b>이에요. 붉은 누문(楼門) 경내에 1시간 단위로 빌리는 <b>가족 전용탕</b>이 있어 아기와 온천하기 좋은 편입니다. 결론은 <b>10/12(월) 오전 반나절이면 조건부 추천</b>. 온천이 꼭 하고 싶은 게 아니면 건너뛰어도 돼요.",
  summary: "리레이카모메 1시간, 가족 전용탕(현장 선착순), 다케오 도서관, 반나절 일정과 비용",
  keywords: ["다케오", "武雄", "다케오온센", "武雄温泉", "온천", "温泉", "가족탕", "家族風呂", "貸切湯", "누문", "楼門", "다케오 도서관", "武雄市図書館", "미후네야마", "御船山楽園", "teamLab", "리레이카모메", "リレーかもめ", "사가", "佐賀"],
  checked: "2026-10-06",
  blocks: [
    { type: "say", items: [{"ko": "기저귀 못 뗀 아이와 가족탕에 들어갈 수 있나요?", "jp": "おむつの取れていない子どもと貸切湯に入れますか？", "pron": "오무츠노 토레테 이나이 코도모토 카시키리유니 하이레마스카?"}] },

    { type: "callout", tone: "warn", title: "가기 전에 꼭 확인할 것",
      html: `<ul>
<li><b>기저귀 찬 아기의 입욕 규정이 공식 페이지 어디에도 없어요.</b> 공중탕은 피하고 가족 전용탕에서 직접 씻기는 게 현실적이에요. 출발 전 다케오온센(<span class="num">0954-23-2001</span>)에 전화해서 아래 ‘크게 보기’ 문장으로 물어보세요.</li>
<li><b>누문 경내 가족 전용탕은 예약 불가, 현장 선착순</b>(10:00 오픈). 3연휴엔 대기가 생길 수 있어요(블로그 기준 20분 대기 후기). 예약이 되는 곳은 료칸 <b>扇屋</b> 전용탕(전화 예약).</li>
<li>리레이카모메는 JR큐슈가 3연휴 수요로 임시열차까지 넣었어요. 간다면 <b>지정석을 바로 예약</b>하세요.</li>
<li>미후네야마라쿠엔 단풍은 11월부터, teamLab 야간 전시는 2026년 개최 미확인이라 이번 일정과는 맞지 않아요.</li></ul>` },

    { type: "facts", title: "한눈에",
      rows: [
        ["열차", "특급 <b>리레이카모메</b> 博多 ↔ 武雄温泉 약 57~72분, 갈아타기 없음. 니시큐슈 신칸센은 다케오온센~나가사키 구간이라 상관없어요."],
        ["요금 (어른 편도)", "정가 자유석 3,130엔 · 지정석 3,660엔. <b>九州ネットきっぷ 2,400엔</b>(지정석·자유석 같은 값, QR 티켓리스, 카드 결제 시 출발 6분 전까지 구매)."],
        ["23개월", "무료(1세 이상 6세 미만, 어른 1명당 2명까지). 혼자 지정석을 쓸 때만 어린이 요금(넷 1,190엔)."],
        ["열차 안", "787계 화장실에 기저귀 교환대. 유모차 전용 공간은 공식 안내 없음(접어서 맨 뒷줄 좌석 뒤에 두는 게 흔한 방법, 비공식)."],
        ["역 → 누문", "北口에서 도보 약 15분, 택시 약 5분(기본요금 810엔 안팎, 추정). 역엔 엘리베이터·에스컬레이터·다목적실(수유실). 택시: 温泉タクシー <span class=\"num\">0954-23-6161</span>, 武雄タクシー <span class=\"num\">0954-23-1111</span>."],
        ["날씨 (사가 10월 평년)", "최고 24.3℃ · 최저 14.7℃"]
      ] },

    { type: "table", title: "리레이카모메 시간표 (10/11 · 10/12)",
      head: ["방향", "출발 → 도착"],
      rows: [
        ["<b>博多 → 武雄温泉</b>", `<span class="num">08:12→09:20 · 08:54→09:58 · <b>09:10→10:22 (임시)</b> · 09:32→10:37 · 10:03→11:00</span>`],
        ["<b>武雄温泉 → 博多</b>", `<span class="num">12:16→13:14 · <b>12:45→13:53 (임시)</b> · 13:15→14:14 · <b>13:47→14:53 (임시)</b> · 14:16→15:14 · 15:16→16:14 · <b>15:47→16:56 (임시)</b></span>`]
      ],
      note: "임시열차는 JR큐슈 가을 임시열차 계획(10/7~12 운행) 기준. 정기편 시각은 평일 날짜로 조회한 값이라 주말에도 같은지 출발 전에 JR큐슈 앱이나 역에서 확인하세요." },

    { type: "table", title: "아기와 온천하기 · 어디로?", anchor: "bath",
      head: ["곳", "형태", "주말·공휴일 요금", "시간", "아기"],
      rows: [
        ["<b>家老湯</b> (누문 경내)", "가족 전용탕, 어른 2명, 다다미 휴게실", "3,500엔 / 1시간", "10:00~23:00 (접수 22:00)", "현장 선착순 · 기저귀 규정 미확인"],
        ["<b>殿様湯</b> (누문 경내)", "가족 전용탕, 어른 5명, 대리석 욕조", "4,300엔 / 1시간", "10:00~23:00", "현장 선착순 · 기저귀 규정 미확인"],
        ["<b>柄崎亭</b> (누문 경내)", "가족 전용탕 3실, 각 어른 2명", "3,900엔 / 1시간", "10:00~23:00", "현장 선착순 · 기저귀 규정 미확인"],
        ["<b>扇屋</b> (료칸)", "전용탕 3실", "3,500엔 (2026/10/1~)", "12:00~22:00", `<span class="tag ok">전화 예약 가능</span> <span class="num">0954-22-3188</span>`],
        ["<b>京都屋</b> (료칸)", "당일 대욕장", "어른 1,000엔, 유아 무료", "13:00~", "공중탕이라 기저귀 아기는 어려울 수 있어요"],
        ["元湯 · 蓬莱湯 · 鷺乃湯", "공중탕", "500~740엔 (어린이 3세~ 250~370엔)", "6:30~", "3세 미만·기저귀 규정 공식 기재 없음"]
      ],
      note: "가족 전용탕 정원이 ‘어른 2명’ 기준이라 아기를 포함해도 되는지, 탕 안에서 수영용 기저귀를 써도 되는지도 미확인이에요. 御船山楽園ホテル 당일 온천은 중학생 이하 이용 불가라 뺐습니다." },

    { type: "gallery", title: "사진",
      images: [
        { src: "img/takeo-romon.jpg", caption: "다케오온센 누문(楼門). 1915년, 도쿄역을 설계한 다쓰노 긴고 작품", credit: "Viy4092 · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Takeo_Onsen_Romon_20230510.jpg" },
        { src: "img/takeo-library.jpg", caption: "다케오시 도서관", credit: "Asturio Cantabrio · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Takeo_City_Library_exterior_ac_(1).jpg" },
        { src: "img/takeo-kidslibrary.jpg", caption: "다케오시 어린이 도서관", credit: "Peka · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Takeo_Kids%27_Library_in_February_2024.jpg" },
        { src: "img/takeo-mifuneyama.jpg", caption: "미후네야마라쿠엔 (2015년 11월, 단풍철)", credit: "STA3816 · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Mifuneyama-rakuen_01.jpg" }
      ] },

    { type: "facts", title: "볼거리 · 먹거리",
      rows: [
        ["누문 · 신관", "누문 내부 견학회 9:00~10:00(접수 9:30까지), 500엔(元湯 입욕권 포함). 옆 신관(국가 중요문화재)은 9~18시 무료."],
        ["다케오시 도서관 · 어린이 도서관", "9~21시 연중무휴, 역에서 도보 15분·택시 5분. <b>수유실(기저귀 교환 침대, 분유 온수기), 다다미 아기 휴게실, 신발 벗고 노는 ‘えほんの山’, 유모차 대여.</b> 푸드코트에 이유식 반입 가능. 낮잠 장소로도 좋아요."],
        ["미후네야마라쿠엔", "8:00~17:00, 어른 500엔(미취학 요금 표기 없음). 급경사 언덕 2곳. 단풍 축제는 11/6~12/6이라 10/12엔 이르러요."],
        ["다케오 신사 · 큰 녹나무", "역에서 택시 5분. 본전 앞 계단, 대나무 숲길 약 3분. 노면 상태 미확인이라 아기띠 권장."],
        ["먹거리", "역 北口 カイロ堂 사가규 스키야키 도시락 1,890엔(열차에서 먹기 좋아요). 누문 근처 TKB AWARDS 다케오 버거(월요일 휴무, 공휴일 영업은 미확인)."]
      ] },

    { type: "timeline", title: "추천 일정 · 10/12(월) 반나절",
      items: [
        { time: "08:12", title: "하카타 출발 (리레이카모메)", html: "<p>지정석 미리 예약. 아침은 열차에서</p>" },
        { time: "09:20", title: "다케오온센 도착 → 택시 5분으로 누문", html: "<p>누문 앞에서 사진, 9:30까지 접수하면 누문 내부 견학도 가능</p>" },
        { time: "10:00", title: "가족 전용탕 오픈에 맞춰 줄 서기 (1시간)", tone: "warn", html: "<p>대기가 길면 예약 가능한 扇屋 전용탕(12:00~)으로 바꾸기</p>" },
        { time: "11:15", title: "점심 · 역 カイロ堂 도시락 사기" },
        { time: "12:45", title: "임시 리레이카모메로 출발 → 13:53 하카타", html: "<p>열차·유모차에서 낮잠</p>" }
      ],
      note: "B안: 온천 뒤 도서관 푸드코트에서 점심 → 아기 휴게실·유모차에서 낮잠 → 어린이 도서관 → 15:16 출발, 16:14 하카타. 하루가 길어져 저녁엔 숙소 근처에서 가볍게." },

    { type: "table", title: "비용 (어른 2 + 23개월)",
      head: ["항목", "금액"], numCols: [1],
      rows: [
        ["열차 왕복 (九州ネットきっぷ 4장)", "9,600엔"],
        ["가족 전용탕 1시간", "3,500~4,300엔"],
        ["택시 왕복 (역 ↔ 누문)", "약 1,600~2,000엔 (추정)"],
        ["점심", "약 3,000~5,000엔 (추정)"],
        ["<b>합계</b>", "<b>약 17,700~20,900엔</b>"]
      ],
      note: "정가 지정석이면 열차만 14,640엔. 아기 지정석을 따로 잡으면 +2,380엔. 성수기 지정석 가산 여부와 한국 카드로 JR큐슈 넷 예약 회원 가입이 되는지는 미확인." },

    { type: "phrases", title: "다케오에서",
      items: [
        { ko: "기저귀를 아직 못 뗀 두 살 전 아이와 가족 전용탕에 들어갈 수 있나요?", jp: "おむつの取れていない2歳前の子どもと貸切湯に入れますか？", pron: "오무츠노 토레테 이나이 니사이 마에노 코도모토 카시키리유니 하이레마스카?" },
        { ko: "가족 전용탕은 얼마나 기다려요?", jp: "貸切湯は何分待ちですか？", pron: "카시키리유와 난푼 마치데스카?" },
        { ko: "다케오온센 누문까지 가 주세요.", jp: "武雄温泉の楼門までお願いします。", pron: "타케오온센노 로-몬 마데 오네가이시마스." },
        { ko: "다케오시 도서관까지 가 주세요.", jp: "武雄市図書館までお願いします。", pron: "타케오시 토쇼칸 마데 오네가이시마스." }
      ] }
  ],
  sources: [
    { label: "JR큐슈 · 가을 임시열차 계획 (2026-08-21)", url: "https://www.jrkyushu.co.jp/common/inc/news/newtopics/__icsFiles/afieldfile/2026/08/21/20260821_Autumn_Temporary_Train_Operation_Plan.pdf" },
    { label: "ekitan · 리레이카모메 博多→武雄温泉 시각", url: "https://ekitan.com/transit/express/section/exm-114692/exs-114692001/sf-7930/st-7755" },
    { label: "JR큐슈 · 九州ネットきっぷ 요금표", url: "https://www.jrkyushu.co.jp/railway/ticket/rule/01/img/20250708kyushuticket.pdf" },
    { label: "JR큐슈 · 九州ネットきっぷ 안내", url: "https://www.jrkyushu-kippu.jp/fare/ticket/123" },
    { label: "JR큐슈 · 유아 요금", url: "https://www.jrkyushu.co.jp/train/kids/guardian/" },
    { label: "JR큐슈 · 열차 내 아기 설비", url: "https://www.jrkyushu.co.jp/train/kids/guardian/train_equipment/" },
    { label: "JR큐슈 · 武雄温泉역 구내도", url: "https://www.jrkyushu.co.jp/railway/station/__icsFiles/afieldfile/2023/03/30/takeo_kounaizu.pdf" },
    { label: "다케오시 관광협회 · 누문", url: "https://www.takeo-kk.net/sightseeing/001373.php" },
    { label: "다케오시 관광협회 · 元湯", url: "https://www.takeo-kk.net/spa/001331.php" },
    { label: "다케오시 관광협회 · 家老湯", url: "https://www.takeo-kk.net/spa/001345.php" },
    { label: "다케오시 관광협회 · 殿様湯", url: "https://www.takeo-kk.net/spa/001344.php" },
    { label: "다케오시 관광협회 · 柄崎亭", url: "https://www.takeo-kk.net/spa/001346.php" },
    { label: "扇屋 · 전용탕", url: "https://www.ougiya.com/facility/" },
    { label: "京都屋 · 당일 온천", url: "https://www.saga-kyotoya.jp/takeoonsen/" },
    { label: "御船山楽園ホテル · FAQ", url: "https://www.mifuneyama.co.jp/faq.html" },
    { label: "다케오시 도서관 · 어린이 도서관", url: "https://takeo.city-library.jp/introduction-kids.html" },
    { label: "다케오시 도서관 · 오시는 길", url: "https://takeo.city-library.jp/access/" },
    { label: "미후네야마라쿠엔 · 공식", url: "https://www.mifuneyamarakuen.jp/" },
    { label: "미후네야마라쿠엔 · 가을 단풍 축제", url: "https://www.mifuneyamarakuen.jp/autumn/" },
    { label: "teamLab · 미후네야마라쿠엔", url: "https://www.teamlab.art/jp/e/mifuneyamarakuen/" },
    { label: "다케오 신사 · 오시는 길", url: "https://takeo-jinjya.jp/access/" },
    { label: "カイロ堂", url: "https://kairodo.com/" },
    { label: "기상청 · 사가 평년값", url: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=85&block_no=47813" }
  ]
});

/* ═════════════ 먹을거리 · 엄마 아빠 카페 · 디저트 ═════════════ */
GUIDE.sections.push({
  id: "cafe", cat: "food", code: "F04", order: 4,
  ko: "엄마 아빠 카페 · 디저트", short: "카페·디저트", jp: "カフェ・スイーツ", ro: "Cafés & Sweets for Parents",
  lead: "엄마·아빠 취향의 스페셜티 커피와 디저트를 골랐어요. 숙소 걸어서 10분 안, 택시·지하철로 짧게, <b>아기 낮잠 동안 숙소에서 먹을 테이크아웃</b> 세 묶음입니다. 출국일 아침엔 숙소 바로 앞 <b>FUK COFFEE(8시 오픈)</b>가 딱 맞아요.",
  summary: "숙소 근처 카페 6곳, 택시권 5곳, 포장해서 숙소에서 먹을 디저트 4곳",
  keywords: ["카페", "cafe", "カフェ", "커피", "coffee", "コーヒー", "디저트", "スイーツ", "푸딩", "プリン", "젠자이", "ぜんざい", "파르페", "パフェ", "테이크아웃", "テイクアウト", "포장", "선물", "おみやげ", "통리몬", "通りもん", "치즈타르트", "애플파이", "아마오우", "あまおう", "FUK", "MUEN", "REC", "manu", "스타벅스", "鈴懸", "스즈카케"],
  checked: "2026-10-06",
  blocks: [
    { type: "say", items: [{"ko": "포장 돼요?", "jp": "テイクアウトできますか？", "pron": "테이쿠아우토 데키마스카?"}] },

    { type: "callout", title: "먼저 알아둘 것",
      html: `<ul>
<li><b>아이보리시 다이묘 본점(프렌치토스트)은 2023년 10월 폐점</b>. 하카타 한큐 지하1층 포장 매장만 남았어요.</li>
<li><b>RINGO 애플파이는 하카타역에 없고</b> 텐진 지하상가점 1곳뿐이에요.</li>
<li>10월은 생 아마오우(딸기) 철이 아니라 딸기 파르페는 거의 없어요. 아마오우 와라비모치 ‘博多あまび’는 10월에도 팔아요.</li>
<li>타베로그가 접속 차단돼 아이 동반·유모차 정보는 핫페퍼·공식 사이트 기준이고, 근거가 없으면 미확인으로 적었어요. 걷는 시간은 추정치입니다.</li></ul>` },

    { type: "table", title: "한눈에 보기",
      head: ["곳", "숙소에서", "10/10~13 영업", "대표 메뉴", "아기·유모차", "포장"],
      rows: [
        ["<b>FUK COFFEE</b> 祇園", "도보 5분", "매일 8~20시", "FUK 푸딩 550엔, 라테 650엔", "23석, 유모차 가능(미확인)", "O"],
        ["<b>MUEN COFFEE</b>", "도보 7분", "8:00 또는 8:30~19시", "말차 가든케이크 2,000엔", "42석, 미확인", "원두·구움과자"],
        ["<b>REC COFFEE</b> 博多マルイ", "도보 7~8분", "매일 10~21시", "스페셜티 라테", "50석, 백화점 안이라 이동 편함", "O"],
        ["<b>川端ぜんざい広場</b>", "도보 15분 · 택시 5분", "토·일·월 11~18시", "젠자이 700엔", "반야외 합석, 상점가 지붕 있음", "O (현금만)"],
        ["<b>博多 鈴懸本店</b>", "도보 15분", "카페 11~19시", "すずのパフェ 1,200엔", "미확인, 주말 대기 김", "O"],
        ["<b>DACOMECCA</b>", "도보 10~12분", "7 또는 8시~품절", "모닝 플레이트 550엔", "25석, 비좁음(추정)", "O · 포장 추천"],
        ["<b>manucoffee</b> 大名", "택시 10분", "매일 9~25시", "커피 소프트크림", "아이 가능, 48석", "O"],
        ["<b>COFFEE COUNTY</b>", "택시 10분", "10~18:30, 수 휴무", "핸드드립 600엔", "미확인", "O"],
        ["<b>스타벅스 오호리코엔점</b>", "지하철+도보 약 20분", "매일 7~21시", "호수 뷰 테라스", "공원 평지, 유모차 쉬움", "O"],
        ["<b>いちごや cafe TANNAL</b>", "택시 10~12분", "9~22시", "아메리칸 파르페 2,000엔", "아이 환영, 32석", "O"],
        ["<b>I'm donut?</b> 福岡店", "지하철 1정거장", "10시경~품절", "생도넛 100~400엔대", "11석", "포장 위주"]
      ] },

    { type: "items", wide: true, title: "숙소 근처 · 걸어서",
      items: [
        { name: "FUK COFFEE 기온점", jp: "FUK COFFEE 祇園店 · 博多区祇園町6-22", img: "img/cafe-fuk.jpg", credit: "FUK COFFEE 공식", srcUrl: "https://fuk-coffee.com/shop/fuk-coffee-2/",
          tags: [["도보 5분", "ok"], ["8시 오픈", "sea"], ["카드·PayPay", ""]],
          html: `<p>櫛田神社前역 1분, 숙소에서 가장 가까운 스페셜티 커피. ‘HAVE A GOOD FLIGHT’ 공항 콘셉트 매장이에요. 8:00~20:00, 정기휴무 표기 없음.</p>
<p><b>메뉴</b> 라테 650엔, FUK 푸딩 550엔, 푸딩+바닐라 아이스 670엔. 해외 관광객 줄이 꾸준하다는 2026년 9월 기사가 있어요. 23석, 유모차 가능(검색 결과 기준, 미확인).</p>
<p><b>언제</b> 10/13 출국 전 아침 커피, 또는 아침에 푸딩 포장해서 낮잠 시간에.</p>`,
          link: "https://fuk-coffee.com/shop/fuk-coffee-2/", linkLabel: "공식 매장 페이지" },
        { name: "MUEN COFFEE", jp: "博多区御供所町2-60 1F", img: "img/cafe-muen.jpg", credit: "にしてつニュース 캡처", srcUrl: "https://www.nishitetsu.jp/nishitetsu_news/spot_type/post-7409/",
          tags: [["도보 7분", "ok"], ["일본풍 모던", ""], ["금·토 23시까지", ""]],
          html: `<p>祇園역 1분. 일본식 모래정원(枯山水)을 본뜬 <b>말차 가든케이크 2,000엔</b>(수량 한정)이 명물이고 티라미수 680엔, 레드라테 700엔. 오픈은 8:00(2025-11 기사) 또는 8:30(2026-03 기사)으로 엇갈려요. 연중무휴, 금·토는 23시까지. 42석.</p>
<p>조용한 공간이라 부부 디저트 타임에 어울려요. 유모차·결제는 미확인.</p>`,
          link: "https://fukuoka-leapup.jp/gourmet/202603.74828", linkLabel: "2026년 3월 기사" },
        { name: "하카타 스즈카케 본점", jp: "博多 鈴懸本店 · 上川端町12-20 ふくぎん博多ビル1F", img: "img/cafe-suzukake-parfait.jpg", credit: "鈴懸 공식 · すずのパフェ", srcUrl: "https://www.suzukake.co.jp/shops/honten",
          tags: [["화과자 명가", ""], ["본점 한정 파르페", "sea"], ["카드 OK", ""]],
          html: `<p>中洲川端역 직결. 과자 매장 9~19시, 카페(茶舗) 11~19시(L.O. 18:30), 휴무는 1/1~2뿐, 예약 불가.</p>
<p><b>본점 한정 すずのパフェ 1,200엔</b>, 포장은 鈴乃最中 119엔부터. 평일 13:30에도 10팀 넘게 기다렸다는 후기가 있어 주말엔 더 길어요(대기 명단에 이름 적기).</p>
<p><b>묶기</b> 바로 근처 <b>카와바타 젠자이 히로바</b>(토·일·공휴일 11~18시, 젠자이 700엔, 현금만, 합석)와 같이 가면 좋고, 안판만 뮤지엄(리버레인)도 같은 동네예요.</p>`,
          link: "https://www.suzukake.co.jp/shops/honten", linkLabel: "공식 본점 페이지" }
      ] },

    { type: "gallery",
      images: [
        { src: "img/cafe-suzukake-chaho.jpg", caption: "스즈카케 본점 카페(茶舗)", credit: "鈴懸 공식", srcUrl: "https://www.suzukake.co.jp/shops/honten" },
        { src: "img/cafe-zenzai.jpg", caption: "카와바타 젠자이 히로바 입구. 안에 야마카사 장식 가마가 1년 내내 전시돼요", credit: "Hirho · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Kawabata_Zenzai_the_entrance_10-256_Kami-kawabatamachi_Hakata-ku_Fukuoka_20231204.jpg" }
      ] },

    { type: "facts", title: "숙소 근처 · 그 밖에",
      rows: [
        ["REC COFFEE 博多マルイ店", "博多駅中央街9-1 博多マルイ(KITTE博多 건물) 6층 · 매일 10~21시 · 50석 · 카드·Apple Pay. 휴일엔 붐벼 포장한 사례도 있어요. 비 오는 날이나 쇼핑 중간에."],
        ["川端ぜんざい広場", "上川端町10-254 카와바타 상점가 · <b>금·토·일·공휴일 11~18시</b>(3일 모두 영업) · 젠자이 700엔(관광공사 페이지의 450엔은 옛 가격으로 보여요) · 현금·식권기 · 6인 테이블 합석, 떡을 구워서 조금 기다려요. ‘일본에서 가장 달다’는 명물."],
        ["DACOMECCA", "博多駅前4-14-1 · 7시 또는 8시 오픈, 품절 시 마감 · 25석, 1인 1음료 · 휴일엔 오픈 20분 전에 35팀 줄. <b>빵을 포장해 숙소에서 먹는 쪽을 권해요.</b>"]
      ] },

    { type: "items", wide: true, title: "택시 · 지하철로 짧게",
      items: [
        { name: "스타벅스 후쿠오카 오호리코엔점", jp: "スターバックス 福岡大濠公園店 · 中央区大濠公園1-8", img: "img/cafe-starbucks-ohori.jpg", credit: "Hirho · CC BY 4.0 (2026-04)", srcUrl: "https://commons.wikimedia.org/wiki/File:Starbucks_Coffee_Fukuoka_%C5%8Chori_Park_The_N_side_%C5%8Chorik%C5%8Den_Ch%C5%AB%C5%8D-ku_Fukuoka_20260427.jpg",
          tags: [["유모차 쉬움", "ok"], ["호수 뷰", "sea"], ["7~21시", ""]],
          html: `<p>大濠公園역 5번 출구 도보 8분. 실내 41석 + 테라스 32석. 공원이 평지라 유모차 산책을 겸하기 가장 무난해요. 주말엔 밖까지 줄이 서요.</p>`,
          link: "https://store.starbucks.co.jp/detail-962/", linkLabel: "매장 정보" }
      ] },

    { type: "facts", title: "택시권 · 그 밖에",
      rows: [
        ["manucoffee 大名店", "大名1-1-3 石井ビル1F · 매일 9~25시 · 48석 · 아이 동반 가능, 카드·QR. 후쿠오카 대표 로스터 중 자리가 넉넉한 편. 2025-12 가격 개정이라 현재 가격 미확인."],
        ["COFFEE COUNTY Fukuoka", "高砂1-21-21 · 10:00~18:30, <b>수요일 휴무</b>(블로그엔 11~19:30) · 핸드드립 600엔, 라테 650엔, 브라질 푸딩 450엔. 구루메에서 시작한 라이트 로스트 전문점, 커피 애호가용."],
        ["いちごや cafe TANNAL 大名店", "大名1-3-14 · 9~22시(금·토 23시) · 32석, 아이 환영, 카드·Suica·PayPay. 6~11월은 생 아마오우 수확이 없어 일부 메뉴 중단 → 아마오우 파르페(3,200엔)는 10월에 없을 가능성이 높고, 아메리칸 파르페 2,000엔은 있어요. 이번엔 우선순위 낮음."],
        ["I'm donut? 福岡店", "渡辺通5-24-30(天神南역 1분) · 10시경 오픈~품절(오픈 시각 출처마다 달라 인스타 @i.m.donut 확인) · 주말 대기 60~80분 · 11석, 카드·QR. 오픈 전 줄 서서 포장 → 낮잠 시간에 숙소에서."]
      ] },

    { type: "items", title: "포장해서 숙소에서 · 낮잠 시간용",
      items: [
        { name: "博多通りもん (하카타 토리몬)", jp: "明月堂 博多駅マイング1号店 · 9~21시", img: "img/cafe-torimon.jpg", credit: "火国男児 · CC BY-SA 3.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Torimon(1).JPG",
          tags: [["6개 1,000엔", ""], ["유통기한 3~4주", "ok"]],
          html: `<p>하카타 대표 과자. 9개 1,500엔, 12개 2,000엔. 기한이 길어 선물용으로도 안전해요.</p>`,
          link: "https://www.meigetsudo.co.jp/store-map/ming01", linkLabel: "공식 매장" },
        { name: "博多あまび (하카타 아마비)", jp: "伊都きんぐ · 博多駅マイング 9~21시 / デイトス いっぴん通り 8~21시",
          tags: [["10월에도 판매", "ok"], ["약 1,620엔", ""], ["기한 2일", "signal"]],
          html: `<p>아마오우 딸기 와라비모치. 5월 말~11월 하순 한정이라 10월에 아마오우를 맛보는 현실적인 방법이에요. どらきんぐエース(도라야키)는 연중. 카드·PayPay, 면세 불가. 가격·기한은 블로그 기준(미확인).</p>`,
          link: "https://www.itoking.jp/shohin.html", linkLabel: "공식 상품" },
        { name: "BAKE 치즈타르트 · RINGO 애플파이", jp: "天神地下街 東4番街 / 西4番街 · 9~21시", img: "img/cafe-bake.jpg", credit: "BAKE 텐진 지하상가 · DoctorDoughnut · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Bake_cheese_tart_tenjin_chikagai.jpg",
          tags: [["치즈타르트 270엔", ""], ["애플파이 450엔", ""]],
          html: `<p>둘 다 텐진 지하상가. RINGO 갓 구운 커스터드 애플파이 1개 450엔·4개 1,716엔, BAKE 오리지널 치즈타르트 270엔(2025-10~). 텐진 쪽 일정(안판만·과학관 등)과 묶어서.</p>`,
          link: "https://www.tenchika.com/shop/ringo/", linkLabel: "RINGO 텐진 지하상가" },
        { name: "아이보리시 프렌치토스트 피낭시에", jp: "Ivorish 博多阪急店 B1F · 10~20시 · 포장 전용",
          tags: [["6개 1,296엔", ""], ["기한 15일 이상", "ok"]],
          html: `<p>폐점한 프렌치토스트 카페 대신 남은 포장 매장. 하카타역 직결 한큐 백화점 지하라 오가며 사기 좋아요.</p>`,
          link: "https://sucreyshopping.jp/ivorish", linkLabel: "공식" }
      ] },

    { type: "timeline", title: "이렇게 끼워 넣어 보면",
      items: [
        { time: "10/10", title: "토 · 체크인 뒤 FUK COFFEE 또는 MUEN COFFEE → 캐널시티" },
        { time: "10/11", title: "일 · 호빵맨 뮤지엄 옆 스즈카케 본점 과자 매장(9시~)에서 포장 → 라라포트" },
        { time: "10/12", title: "월 · 마린월드 다녀와서 낮잠 동안 숙소에서 博多あまび·통리몬" },
        { time: "10/13", title: "화 · 8:00 FUK COFFEE에서 출국 전 커피", tone: "warn" }
      ] },

    { type: "phrases", title: "카페에서",
      items: [
        { ko: "포장 돼요?", jp: "テイクアウトできますか？", pron: "테이쿠아우토 데키마스카?" },
        { ko: "어른 둘, 아기 하나예요.", jp: "大人2人と赤ちゃん1人です。", pron: "오토나 후타리토 아카짱 히토리데스." },
        { ko: "추천 메뉴는 뭐예요?", jp: "おすすめは何ですか？", pron: "오스스메와 난데스카?" },
        { ko: "얼마나 기다려야 해요?", jp: "どのくらい待ちますか？", pron: "도노쿠라이 마치마스카?" },
        { ko: "보냉제 넣어 주실 수 있나요?", jp: "保冷剤を入れてもらえますか？", pron: "호레-자이오 이레테 모라에마스카?" }
      ] }
  ],
  sources: [
    { label: "FUK COFFEE · 기온점", url: "https://fuk-coffee.com/shop/fuk-coffee-2/" },
    { label: "FUK COFFEE 기사 (2026-09)", url: "https://lunch.news-vouge.com/fuk-coffee/" },
    { label: "REC COFFEE · 博多マルイ店", url: "https://rec-coffee.com/en/pages/coffee-shop-hakata" },
    { label: "MUEN COFFEE · fanfun (2025-11)", url: "https://fanfun.jp/287851/" },
    { label: "MUEN COFFEE · leapup (2026-03)", url: "https://fukuoka-leapup.jp/gourmet/202603.74828" },
    { label: "MUEN COFFEE · にしてつニュース", url: "https://www.nishitetsu.jp/nishitetsu_news/spot_type/post-7409/" },
    { label: "川端ぜんざい広場 · 공식", url: "https://hakata.or.jp/zenzaihiroba/" },
    { label: "川端ぜんざい 기사 (2026-09)", url: "https://lunch.news-vouge.com/awabata-zenzai/" },
    { label: "博多 鈴懸本店 · 공식", url: "https://www.suzukake.co.jp/shops/honten" },
    { label: "鈴懸 기사 (2026-07)", url: "https://lunch.news-vouge.com/suzukake/" },
    { label: "DACOMECCA · 공식", url: "https://dacomecca.com/pages/shop/" },
    { label: "Retty · DACOMECCA", url: "https://retty.me/area/PRE40/ARE126/SUB12601/100001579939/" },
    { label: "manucoffee · 매장 목록", url: "https://www.manucoffee.com/shoplist/" },
    { label: "Hot Pepper · manucoffee 大名店", url: "https://www.hotpepper.jp/strJ001089930/" },
    { label: "COFFEE COUNTY · 공식", url: "https://coffeecounty.cc/" },
    { label: "스타벅스 · 오호리코엔점", url: "https://store.starbucks.co.jp/detail-962/" },
    { label: "いちごや cafe TANNAL · 공식", url: "https://isomoto-nouen.com/cafetannal.html" },
    { label: "Hot Pepper · いちごや cafe TANNAL", url: "https://www.hotpepper.jp/strJ004509970/" },
    { label: "I'm donut? · 대기 정보 (2026-02)", url: "https://kaiuntrip.co.jp/media/im-donut/" },
    { label: "明月堂 · 博多駅マイング1号店", url: "https://www.meigetsudo.co.jp/store-map/ming01" },
    { label: "伊都きんぐ · 매장", url: "https://www.itoking.jp/info.html" },
    { label: "伊都きんぐ · 상품", url: "https://www.itoking.jp/shohin.html" },
    { label: "Ivorish · 博多阪急店", url: "https://sucreyshopping.jp/ivorish" },
    { label: "Ivorish 福岡本店 폐점 (2024-01 기사)", url: "https://fukuokachuo.goguynet.jp/2024/01/23/ivorish-fukuokahonten-close/" },
    { label: "RINGO · 매장 목록", url: "https://ringo-applepie.com/shop/" },
    { label: "텐진 지하상가 · RINGO", url: "https://www.tenchika.com/shop/ringo/" },
    { label: "BAKE · 가격 공지", url: "https://bake-jp.com/info/info_20250901/" }
  ]
});

/* ═════════════ 가볼 곳 · 일본 느낌 나는 곳 ═════════════ */
GUIDE.sections.push({
  id: "japan", cat: "place", code: "P05", order: 5,
  ko: "일본 느낌 나는 곳", short: "신사·절·정원", jp: "神社・寺・庭園", ro: "Shrines, Temples & Gardens",
  lead: "숙소가 하카타 옛 시가지(博多旧市街) 한가운데라 <b>구시다 신사, 도초지 오층탑, 일본 정원 라쿠스이엔</b>이 전부 걸어서 10분 안이에요. 조금 멀리는 전철 30분의 <b>다자이후 텐만구</b>가 제일 무난합니다. 유모차 동선(계단·자갈)과 낮잠 시간 기준으로 정리했어요.",
  summary: "숙소 옆 옛 시가지 산책 루트, 다자이후, 오호리 공원 일본정원, 미야지다케 ‘빛의 길’(10/10~20)",
  keywords: ["일본", "일본스러운", "신사", "神社", "절", "寺", "정원", "庭園", "구시다", "櫛田", "야마카사", "山笠", "도초지", "東長寺", "오층탑", "대불", "조텐지", "承天寺", "쇼후쿠지", "聖福寺", "라쿠스이엔", "楽水園", "말차", "스미요시", "住吉", "다자이후", "太宰府", "텐만구", "天満宮", "오호리", "大濠", "후쿠오카성", "福岡城", "미야지다케", "宮地嶽", "빛의 길", "光の道", "야나가와", "柳川", "난조인", "南蔵院", "와불", "니시테츠", "西鉄"],
  checked: "2026-10-06",
  blocks: [
    { type: "say", items: [{"ko": "유모차로 갈 수 있는 길이 있나요?", "jp": "ベビーカーで行ける道はありますか？", "pron": "베비-카-데 이케루 미치와 아리마스카?"}] },

    { type: "callout", tone: "warn", title: "이번 여행 기간에 걸리는 것",
      html: `<ul>
<li><b>미야지다케 신사 ‘빛의 길(光の道)’ 10/10~10/20</b> · 석양이 참배길 끝에 일직선으로 지는 날. 여행 기간과 겹치지만 14시 정리권 → 16:30 자리 안내 → 일몰 17:50 전후라 낮잠·저녁 시간과 겹쳐요.</li>
<li><b>다자이후 텐만구 본전 정면 참배 재개(9/19)</b> · 124년 만의 대수리를 마치고 다시 열렸어요.</li>
<li><b>스미요시 신사 例大祭 10/12~14</b> · 10/10~12 南参道에서 잡화 시장. 10/13 流鏑馬(말 타고 활쏘기)는 출국일이라 못 봐요.</li>
<li><b>후쿠오카성 天守台는 12월 말까지 출입 금지</b>. 하카타 옛 시가지 라이트업 워크는 10/31~11/3이라 이번엔 없어요.</li></ul>` },

    { type: "table", title: "한눈에 보기",
      head: ["곳", "숙소에서", "23개월 기준", "한 줄"],
      rows: [
        ["<b>구시다 신사</b> + 가자리야마", "도보 약 10분", `<span class="tag ok">강추</span>`, "무료, 4:00~22:00. 높이 10m 넘는 야마카사 장식 가마를 1년 내내 전시"],
        ["<b>가와바타 상점가</b>", "구시다에서 3분", `<span class="tag ok">강추</span>`, "지붕 있는 아케이드, 비 와도 OK. 젠자이 광장의 ‘달리는 야마카사’"],
        ["<b>하카타 마치야 후루사토칸</b>", "구시다에서 3분", `<span class="tag sea">추천</span>`, "10~18시, 200엔. 옛 하카타 상가 주택"],
        ["<b>도초지</b> 오층탑 · 후쿠오카 대불", "도보 약 10분", `<span class="tag sea">추천</span>`, "9:00~16:45. 대불전은 2층 계단, 안은 촬영 금지"],
        ["<b>조텐지 · 博多千年門</b>", "도초지에서 7분", `<span class="tag sea">추천</span>`, "경내 출입은 제한, 포장된 조텐지 거리 산책"],
        ["<b>쇼후쿠지</b>", "도초지 북쪽", `<span class="tag">외관만</span>`, "일본 최초의 선종 사찰, 건물 내부 비공개"],
        ["<b>라쿠스이엔</b> 일본 정원", "도보 약 8분", `<span class="tag sea">추천</span>`, "100엔, 말차 1,100엔, <b>화요일 휴원</b>"],
        ["<b>스미요시 신사</b>", "라쿠스이엔에서 4분", `<span class="tag sea">추천</span>`, "무료, 10/12~14 例大祭"],
        ["<b>다자이후 텐만구</b>", "전철 약 30분", `<span class="tag ok">강추</span>`, "새로 단장한 본전, 단차 없는 길·수유실"],
        ["<b>오호리 공원 일본정원 · 후쿠오카성터</b>", "지하철 8분 + 도보", `<span class="tag sea">추천</span>`, "10/12 개원, 10/13 휴원. 공원이 평탄해 유모차 낮잠 산책"],
        ["<b>난조인</b> 와불", "JR 22~27분", `<span class="tag">조건부</span>`, "경사·계단 많음, 외국인 500엔"],
        ["<b>야나가와 뱃놀이</b>", "니시테츠 특급 약 50분", `<span class="tag">조건부</span>`, "기본 60~70분 배에 화장실 없음, 40분 코스 있음"],
        ["<b>미야지다케 신사 빛의 길</b>", "JR 24분 + 택시 5분", `<span class="tag">조건부</span>`, "기간은 맞지만 저녁·혼잡"],
        ["<b>이토시마 사쿠라이 후타미가우라</b>", "전철 28분 + 택시", `<span class="tag">조건부</span>`, "부부바위. 전철만으론 못 가고 멀어요"]
      ] },

    { type: "timeline", anchor: "walk", title: "하카타 옛 시가지 산책 · 오전 (약 3km, 1.5~2시간)",
      items: [
        { time: "09:00", title: "숙소 → 도초지 (0.8km, 10분)", html: "<p>개문 시간. 오층탑과 대불전(2층, 계단이라 유모차는 1층에). 깜깜한 ‘지옥·극락 순례’ 통로는 아기가 무서워할 수 있어요.</p>" },
        { time: "09:40", title: "조텐지 거리 · 博多千年門 (0.5km, 7분)", html: "<p>포장도로라 유모차 OK. 쇼후쿠지는 근처에서 외관만</p>" },
        { time: "10:00", title: "하카타 마치야 후루사토칸 (0.8km, 11분)", html: "<p>개관 시간. 200엔(미취학 무료로 추정, 미확인)</p>" },
        { time: "10:30", title: "구시다 신사 (0.2km, 3분)", html: "<p>가자리야마 앞에서 사진. 주통로는 휠체어 폭이지만 2cm 이상 단차가 있어요(현 배리어프리 정보).</p>" },
        { time: "11:00", title: "가와바타 상점가 · 젠자이 광장 (0.2km, 3분)", html: "<p>11시 개점. 젠자이 700엔, 현금만</p>", tone: "warn" },
        { time: "12:00", title: "숙소 복귀 (0.5km, 7분) → 낮잠" }
      ],
      note: "남쪽 루프는 따로: 숙소 → 라쿠스이엔(0.6km) → 스미요시 신사(0.3km) → 숙소(0.8km), 약 1.7km·1시간. 낮잠 뒤 라쿠스이엔 14:40 말차 회차에 맞추기 좋아요. 거리는 OpenStreetMap 도보 경로 기준 대략값." },

    { type: "items", title: "숙소 근처 · 걸어서",
      items: [
        { name: "구시다 신사", jp: "櫛田神社 · 博多区上川端町1-41", img: "img/jp-kushida.jpg", credit: "Hirho · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Kushida_Shrine_the_kazariyama_in_the_precincts_1-41_Kami-kawabatamachi_Hakata-ku_Fukuoka_20230801.jpg",
          tags: [["무료", "ok"], ["4:00~22:00", ""], ["출국일 아침도 OK", "sea"]],
          html: `<p>하카타의 수호 신사. 7월 기온 야마카사 축제의 장식 가마(飾り山笠)를 6월만 빼고 1년 내내 전시해요. 博多歴史館은 10~17시·300엔·월요일 휴관(공휴일이면 다음 날). 櫛田会館에 수유실·기저귀대가 있다는 정보가 있어요(비공식).</p>`,
          link: "https://www.crossroadfukuoka.jp/feature/kushidashrine", linkLabel: "후쿠오카현 관광 안내" },
        { name: "가와바타 상점가", jp: "川端通商店街 · 上川端町", img: "img/jp-kawabata.jpg", credit: "Hirho · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Kawabata_Shopping_Arcade_the_NW_entrance_Kami-kawabatamachi_Hakata-ku_Fukuoka_20231120.jpg",
          tags: [["지붕 있음", "ok"], ["비 와도 OK", ""]],
          html: `<p>구시다 신사에서 리버레인까지 이어지는 옛 아케이드. 젠자이 광장(금·토·일·공휴일 11~18시)엔 하카타에서 유일한 ‘달리는 가자리야마’가 전시돼요. 안판만 뮤지엄·스즈카케 본점과 같은 동네.</p>`,
          link: "https://hakata.or.jp/zenzaihiroba/", linkLabel: "젠자이 광장" },
        { name: "하카타 마치야 후루사토칸", jp: "博多町家ふるさと館 · 冷泉町", img: "img/jp-machiya.jpg", credit: "そらみみ · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Hakata-Machiya_Furusato_Museum_20170918.jpg",
          tags: [["10~18시", ""], ["200엔", ""]],
          html: `<p>메이지 시대 하카타 상인의 집을 옮겨 지은 작은 민속관. 짧게 보기 좋아요. 휴관은 넷째 월요일(10/26)이라 이번엔 영향 없어요. 내부 단차는 미확인.</p>`,
          link: "https://www.city.fukuoka.lg.jp/shicho/koho/fsdweb/reiwa8_dayori/0315/0709.html", linkLabel: "후쿠오카시 안내" },
        { name: "도초지 오층탑 · 후쿠오카 대불", jp: "東長寺 · 博多区御供所町2-4", img: "img/jp-tochoji.jpg", credit: "そらみみ · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Gojunoto_Tower_of_Tochoji_Temple.jpg",
          tags: [["9:00~16:45", ""], ["경내 무료", "ok"], ["대불전 계단", "signal"]],
          html: `<p>붉은 오층탑과 높이 10.8m의 목조 좌불(福岡大仏). 祇園역 바로 앞. 대불전 관람료는 블로그 기준 50엔(현재 금액 미확인), 대불전 안은 촬영 금지.</p>`,
          link: "https://www.hakata-yamakasa.net/discovery-hakata/touchoji/", linkLabel: "博多山笠ナビ 소개" },
        { name: "조텐지 · 하카타 천년문", jp: "承天寺 · 博多千年門", img: "img/jp-jotenji.jpg", credit: "Hirho · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Ch%C5%ABmon_of_J%C5%8Dten-ji_NE_from_J%C5%8Dten-ji_D%C5%8Dri_29-9_Hakata-eki-mae_1-ch%C5%8Dme_Hakata-ku_Fukuoka_20230907.jpg",
          tags: [["포장도로", "ok"], ["경내 출입 제한", "signal"]],
          html: `<p>우동·소바 발상지로 알려진 절. 신도 외 출입 불가라는 정보가 있어 돌 정원(洗濤庭)은 中門 밖에서 봐요. 앞의 조텐지 거리와 천년문은 유모차로 걷기 편해요. 근처 쇼후쿠지는 경내 산책만 가능(건물 내부 비공개).</p>`,
          link: "https://www.hakata-yamakasa.net/discovery-hakata/joutenji/", linkLabel: "博多山笠ナビ 소개" },
        { name: "라쿠스이엔 · 스미요시 신사", jp: "楽水園 · 住吉神社", img: "img/jp-rakusuien.jpg", credit: "Hirho · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Rakusui-en_the_pond_in_the_strolling_garden_Hakata-ku_Fukuoka_20241121_155752.jpg",
          tags: [["정원 100엔", ""], ["화요일 휴원", "signal"], ["말차 1,100엔", "sea"]],
          html: `<p><b>라쿠스이엔</b> 9~17시, 어른 100엔(미취학 무료). 말차 회차 10:00·10:40·11:20·14:00·14:40·15:20, 회당 8명, 당일 접수. 차석에선 촬영 자제. 정원 길은 자갈·디딤돌일 수 있어(미확인) 아기띠 권장.</p>
<p><b>스미요시 신사</b> 라쿠스이엔에서 4분, 무료, 접수 9~17시. 10/12~14 例大祭, 10/10~12 南参道 잡화 시장.</p>`,
          link: "https://rakusuien.fukuoka-teien.com/information/", linkLabel: "라쿠스이엔 공식" }
      ] },

    { type: "route", title: "다자이후 텐만구 가는 법 (버스 없이)", tags: [["전철", "sea"]],
      summary: [["약 45분", "환승 포함"], ["어른 480엔", "니시테츠 · 6세 미만 무료"]],
      steps: [
        { stop: "櫛田神社前역 (숙소 도보 2분)" },
        { mode: "subway", text: "나나쿠마선 1정거장", time: "약 2분" },
        { stop: "天神南역", note: "지하로 걸어서 니시테츠 후쿠오카(텐진)역" },
        { mode: "walk", text: "西鉄福岡(天神)역", time: "약 5~10분 (추정)" },
        { mode: "train", text: "<b>니시테츠 天神大牟田線</b> → 二日市 환승 → <b>太宰府線</b>", time: "약 29분 · 480엔", note: "2026년 4월 운임 개정 후 요금." },
        { stop: "太宰府역", note: "참배길(参道) 따라 도보 5분이면 텐만구" }
      ],
      note: "택시면 약 17km·30분, 5,000~6,000엔(블로그 기준 추정). 3연휴엔 8:30에 나서서 10시 전에 도착하고, 돌아오는 전철에서 낮잠 재우는 걸 권해요(경험칙)." },

    { type: "items", wide: true, title: "조금 멀리",
      items: [
        { name: "다자이후 텐만구", jp: "太宰府天満宮 · 太宰府市宰府4-7-1", img: "img/jp-dazaifu.jpg", credit: "ScribblingGeek · CC BY-SA 4.0 (대수리 전 사진)", srcUrl: "https://commons.wikimedia.org/wiki/File:Dazaifu_Tenmangu_Shrine_Honden_(Main_Prayer_Hall).jpg",
          tags: [["강추", "ok"], ["새 본전 (9/19~)", "sea"], ["수유실", ""]],
          html: `<p>학문의 신 스가와라노 미치자네를 모신 신사. 개문 6:30, 폐문 19:00. <b>단차 없는 경로</b>가 있고 휠체어를 무료로 빌려줘요. 수유실(기저귀대·온수) 9~16:30. 다이코바시(太鼓橋)는 계단이라 옆길로.</p>
<p>참배길엔 구운 떡 <b>우메가에모치</b>, 구마 겐고가 설계한 나무 격자 <b>스타벅스 다자이후 오모테산도점</b>(8~20시, 유모차 입장 미확인).</p>`,
          link: "https://www.dazaifutenmangu.or.jp/keidaiannai/toilet", linkLabel: "공식 경내 안내 (화장실·수유실)" },
        { name: "오호리 공원 일본정원 · 후쿠오카성터", jp: "大濠公園 日本庭園 · 舞鶴公園", img: "img/jp-ohori-garden.jpg", credit: "そらみみ · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Gate_of_Japanese_Garden_of_Ohori_Park.jpg",
          tags: [["평탄한 공원", "ok"], ["10/13 휴원", "signal"]],
          html: `<p>祇園역 → 大濠公園역 8분·260엔, 역에서 정원까지 약 1km(14분). 일본정원 10~4월 9~17시, 250엔(6세 미만 무료), 월요일 휴원(공휴일이면 다음 날) → <b>10/12 개원, 10/13 휴원</b>. 2027년 3월 31일부터 일시 휴원 예정.</p>
<p>후쿠오카성 천수대는 12월 말까지 출입 금지, 망루(潮見櫓)·성문(下之橋御門)은 밖에서 볼 수 있어요. 호숫가 스타벅스(<a href="#cafe">카페 페이지</a>)와 묶어 유모차 낮잠 산책 코스로.</p>`,
          link: "https://ohoriteien.jp/", linkLabel: "오호리 공원 일본정원 공식" },
        { name: "미야지다케 신사 ‘빛의 길’", jp: "宮地嶽神社 光の道 · 福津市", img: "img/jp-miyajidake.jpg", credit: "そらみみ · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Sunset_and_sando_of_Miyajidake_Shrine.jpg",
          tags: [["10/10~10/20", "signal"], ["조건부", ""]],
          html: `<p>석양이 바다까지 뻗은 참배길 끝으로 일직선으로 지는 장면. 일반 관람은 <b>14:00 정면 계단 옆에서 무료 정리권 → 16:30쯤 자리 안내</b>, 특별기원석은 유료 예약제. 일몰은 10/10 17:52, 10/12 17:49. 맑아야 보여요.</p>
<p>JR 博多 → 福間 24분·560엔, 역에서 택시 5분(900~1,000엔). 3연휴 혼잡 + 낮잠·저녁 시간이 겹쳐 아기와는 부담이 커요. 낮에 참배만 하는 건 가능. 유모차 경로 미확인.</p>`,
          link: "https://www.miyajidake.or.jp/", linkLabel: "미야지다케 신사 공식" },
        { name: "야나가와 뱃놀이", jp: "柳川 川下り", img: "img/jp-yanagawa.jpg", credit: "ブルーノ・プラス · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Yanagawa_kawakudari2.jpg",
          tags: [["반나절 이상", "signal"], ["조건부", ""]],
          html: `<p>사공이 노를 젓는 배로 수로를 도는 체험. 니시테츠 특급 약 50분·960엔. 다자이후+야나가와 왕복 전철+뱃삯 세트 「太宰府・柳川観光きっぷ」 어른 3,620엔(디지털).</p>
<p>기본 코스는 60~70분이고 배에 화장실이 없어요. 伯舟観光의 <b>40분 코스</b>는 0세부터, 2세 이하 무료, 어린이 구명조끼 있음, 탄 곳으로 돌아와요(역에서 거리 미확인). 3박 일정엔 부담이 커요.</p>`,
          link: "https://hakusyukankou.com/faq/", linkLabel: "伯舟観光 FAQ" }
      ] },

    { type: "gallery",
      images: [
        { src: "img/jp-dazaifu-starbucks.jpg", caption: "스타벅스 다자이후 텐만구 오모테산도점", credit: "Immanuelle · CC BY 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Starbucks_Coffee_Dazaifutenmangu_Omotesando_Store-1.jpg" },
        { src: "img/jp-sumiyoshi.jpg", caption: "스미요시 신사 본전", credit: "Saigen Jiro · CC0", srcUrl: "https://commons.wikimedia.org/wiki/File:Sumiyoshi-jinja_(Fukuoka)_honden.JPG" }
      ] },

    { type: "facts", title: "그 밖에 · 참고",
      rows: [
        ["난조인 와불", "JR 博多 → 城戸南蔵院前 22~27분·450엔, 역에서 3분. 9~17시(최종 16:45), <b>비거주 외국인 500엔</b>(19세 미만 무료), 복장 규정 있음. 경사가 급하지만 군데군데 엘리베이터가 있어 유모차로 겨우 돌았다는 후기."],
        ["고묘젠지 (돌 정원)", "다자이후역 도보 5분이지만 2018년부터 관람 중지라는 정보가 있고 현재 상태 미확인. 가려면 전화(092-922-4053) 먼저."],
        ["이토시마 후타미가우라", "祇園역 → 九大学研都市역 28분·530엔 + 택시 약 12km(요금 미확인), 또는 관광택시 4시간 22,240엔. 바위 사이로 해가 지는 건 6월이라 10월엔 해당 없음."]
      ] },

    { type: "text", title: "일정에 넣는다면",
      html: `<ul>
<li><b>이번 일정(호빵맨·라라포트 하루, 마린월드 하루)엔 다자이후가 들어갈 자리가 없어요.</b> 다음 여행 후보로 남겨 두세요.</li>
<li><b>10/10 체크인 뒤 15~17시</b> · 캐널시티와 구시다 신사를 묶거나 옛 시가지 북쪽 루프(도초지 대불전 16:45 마감). 라쿠스이엔 말차는 15:20이 마지막 회차.</li>
<li><b>10/13(화) 7:30~8:30</b> · 구시다 신사 아침 참배만(다른 곳은 대부분 문 열기 전). 8시 FUK COFFEE와 묶기 좋아요.</li></ul>` },

    { type: "phrases", title: "신사·절에서",
      items: [
        { ko: "사진 찍어도 되나요?", jp: "写真を撮ってもいいですか？", pron: "샤신오 톳테모 이-데스카?" },
        { ko: "유모차로 갈 수 있는 길이 있나요?", jp: "ベビーカーで行ける道はありますか？", pron: "베비-카-데 이케루 미치와 아리마스카?" },
        { ko: "고슈인(참배 도장) 부탁드려요.", jp: "御朱印をお願いします。", pron: "고슈인오 오네가이시마스." },
        { ko: "정리권은 어디서 받나요?", jp: "整理券はどこでもらえますか？", pron: "세-리켄와 도코데 모라에마스카?" },
        { ko: "말차 다음 회차는 몇 시예요?", jp: "お抹茶の次の回は何時ですか？", pron: "오맛차노 츠기노 카이와 난지데스카?" }
      ] }
  ],
  sources: [
    { label: "후쿠오카현 배리어프리 · 구시다 신사", url: "https://barrierfree.pref.fukuoka.jp/facilities/detail/7349a0c4-7b99-48ca-80b9-624026b668b1" },
    { label: "crossroad fukuoka · 구시다 신사", url: "https://www.crossroadfukuoka.jp/feature/kushidashrine" },
    { label: "川端ぜんざい広場 · 공식", url: "https://hakata.or.jp/zenzaihiroba/" },
    { label: "후쿠오카시 · 博多町家ふるさと館", url: "https://www.city.fukuoka.lg.jp/shicho/koho/fsdweb/reiwa8_dayori/0315/0709.html" },
    { label: "博多山笠ナビ · 東長寺", url: "https://www.hakata-yamakasa.net/discovery-hakata/touchoji/" },
    { label: "博多山笠ナビ · 承天寺", url: "https://www.hakata-yamakasa.net/discovery-hakata/joutenji/" },
    { label: "じゃらん · 聖福寺", url: "https://www.jalan.net/kankou/spt_40132ag2130015672/" },
    { label: "楽水園 · 공식 이용 안내", url: "https://rakusuien.fukuoka-teien.com/information/" },
    { label: "住吉神社 · 공식", url: "https://www.nihondaiichisumiyoshigu.jp/" },
    { label: "秋博 · 행사 일정", url: "https://hakata-akihaku.com/event" },
    { label: "博多旧市街ライトアップウォーク · 공식", url: "https://www.hakata-light.jp/" },
    { label: "니시테츠 · 2026년 운임 개정", url: "https://www.nishitetsu.jp/train/2026_unchin-kaitei-ninka/" },
    { label: "駅探 · 西鉄福岡(天神)→太宰府 운임", url: "https://ekitan.com/transit/fare/sf-7907/st-7785" },
    { label: "太宰府天満宮 · 화장실·수유실", url: "https://www.dazaifutenmangu.or.jp/keidaiannai/toilet" },
    { label: "太宰府天満宮 · 휠체어 대여", url: "https://www.dazaifutenmangu.or.jp/keidaiannai/wheelchair" },
    { label: "太宰府天満宮 본전 대수리 완료 (2026-09-30)", url: "https://www.folkart.co.jp/news/20260930161807_18051.html" },
    { label: "스타벅스 · 다자이후 오모테산도점", url: "https://store.starbucks.co.jp/detail-1058/" },
    { label: "오호리 공원 일본정원 · 공식", url: "https://ohoriteien.jp/" },
    { label: "YOKAナビ · 후쿠오카성 천수대 출입 제한", url: "https://yokanavi.com/news/274144" },
    { label: "宮地嶽神社 · 2026년 10월 빛의 길 공지", url: "https://www.miyajidake.or.jp/news/topics/%e3%80%90%e4%bb%a4%e5%92%8c8%e5%b9%b410%e6%9c%88-%e5%85%89%e3%81%ae%e9%81%93%e3%80%9c%e5%a4%95%e9%99%bd%e3%81%ae%e3%81%be%e3%81%a4%e3%82%8a%e3%80%9c%e3%80%91" },
    { label: "국립천문대 · 후쿠오카 일몰 시각 (2026-10)", url: "https://eco.mtk.nao.ac.jp/koyomi/dni/2026/s4110.html" },
    { label: "福津DMO · 미야지다케 오시는 길", url: "https://dmofukutsu.com/content/miyajidake-access/" },
    { label: "南蔵院 · 공식", url: "https://nanzoin.net/" },
    { label: "いこーよ · 南蔵院 유모차 후기", url: "https://iko-yo.net/facilities/29171/experiences" },
    { label: "西鉄 · 太宰府・柳川観光きっぷ", url: "https://www.ensen24.jp/kippu/1/" },
    { label: "柳川ネット · 뱃놀이", url: "https://www.yanagawa-net.com/features/5576/" },
    { label: "伯舟観光 · FAQ", url: "https://hakusyukankou.com/faq/" },
    { label: "糸島観光 · 桜井二見ヶ浦", url: "https://kanko-itoshima.jp/spot/sakuraihutamigaura/" },
    { label: "福岡交通 · 이토시마 관광택시", url: "https://www.fukuoka-kotsu.co.jp/tour/detail/12" }
  ]
});

/* ═════════════ 가볼 곳 · 호빵맨 뮤지엄 + 라라포트 ═════════════ */
GUIDE.sections.push({
  id: "lalaport", cat: "place", code: "P02", order: 2,
  ko: "호빵맨 뮤지엄 · 라라포트", short: "호빵맨·라라포트", jp: "アンパンマンミュージアム・ららぽーと福岡", ro: "Anpanman Museum & LaLaport",
  lead: "하루에 묶는 실내 코스예요. 오전엔 나카스 리버레인의 <b>호빵맨(안판만) 어린이 뮤지엄</b>, 택시 15~20분 이동해서 점심·낮잠·쇼핑은 <b>라라포트 후쿠오카</b>(아카짱혼포·건담). 날짜는 A안 10/11(일), 마린월드를 일요일로 옮기면 B안 10/12(월)이에요.",
  summary: "10/11(또는 10/12) 하루 코스: 호빵맨 뮤지엄 → 라라포트·아카짱혼포·건담, 표 사는 법, B안",
  keywords: ["호빵맨", "안판만", "アンパンマン", "anpanman", "뮤지엄", "리버레인", "リバレイン", "라라포트", "ららぽーと", "lalaport", "건담", "ガンダム", "아카짱혼포", "アカチャンホンポ", "장난감 미술관", "おもちゃ美術館", "면세", "免税"],
  checked: "2026-10-09",
  blocks: [
    { type: "say", items: [
      { ko: "웹 티켓을 샀어요.", jp: "ウェブチケットを買いました。", pron: "웨부 치켓토오 카이마시타." },
      { ko: "면세 되나요? 여권 여기 있어요.", jp: "免税できますか？パスポートです。", pron: "멘제- 데키마스카? 파스포-토데스." }
    ] },

    { type: "callout", tone: "ok", anchor: "where", title: "호빵맨 뮤지엄은 라라포트가 아니라 나카스(리버레인)에 있어요",
      html: `<ul>
<li><b>라라포트 후쿠오카</b>(博多区那珂, 택시 10~15분) · 아카짱혼포, 실물 크기 건담, 장난감 미술관, 베이비 휴게실. 호빵맨 시설은 없어요(라라포트 공식 시설 목록 기준).</li>
<li><b>후쿠오카 안판만(호빵맨) 어린이 뮤지엄</b>은 <b>하카타 리버레인 몰 5·6층</b>(지하철 中洲川端역 직결, 숙소에서 祇園역 → 1정거장 또는 택시 약 10분).</li>
<li><b>둘이 가깝진 않아요.</b> 리버레인은 숙소 북서쪽(직선 약 1.2km), 라라포트는 숙소 남동쪽(직선 약 3.7km)이라 서로 직선 약 4.6km예요. 그래도 <b>택시로 15~20분(약 2,000~2,500엔, 추정)</b>이라 하루에 묶을 수 있어요.</li>
<li>그래서 <b>10/11(일) 하루에 호빵맨 → 라라포트</b>로 묶었어요. 호빵맨이 이날만 9:30에 열어 오전을 넉넉히 쓰고, 라라포트에서 점심 → 유모차 낮잠 동안 아카짱혼포 쇼핑 → 건담 순서예요.</li></ul>` },

    { type: "table", anchor: "plan-b", title: "날짜 · A안과 B안",
      head: ["", "10/11 (일)", "10/12 (월·공휴일)"],
      rows: [
        ["<b>A안</b> (기본)", "호빵맨 9:30 개장 → 라라포트", "마린월드"],
        ["<b>B안</b> (10/12 날씨가 나쁠 때)", "마린월드", "호빵맨 10:00 개장 → 라라포트"]
      ],
      note: "기상청 10/8 17시 예보로는 10/11·12 둘 다 흐리고 가끔 맑음, 강수 30%(신뢰도 A)라 지금은 A안 그대로예요. <b>10/10 저녁(17시 발표) 예보를 보고</b> 10/12에 비가 들거나 강수확률이 50%를 넘으면 B안으로 바꾸세요. 호빵맨·라라포트는 전부 실내라 비 와도 괜찮고, 마린월드는 돌고래 쇼 관람석만 야외예요." },

    { type: "callout", tone: "warn", title: "B안으로 바꿀 수 있게 표는 결정한 뒤에 사세요",
      html: `<ul>
<li><b>호빵맨 웹티켓은 날짜 지정</b>이에요. 날짜 변경·환불 규정은 확인하지 못했으니 10/10 저녁에 날짜를 정하고 사세요. 온라인은 <b>당일 16시까지</b> 팔고 매표소 당일권도 있어요.</li>
<li>마린월드 온라인 티켓(asoview)도 날짜 지정이고 이용 당일 16:30 이후 취소 수수료 100%라, 현장 매표소에서 사도 돼요.</li>
<li>B안이면 호빵맨은 10/12 <b>10:00 개장</b>(9:30 개장은 10/11만). 아카짱혼포 아기의 날 페어는 10/12까지라 B안이어도 들어가요.</li>
<li>모츠나베 이치후지(10/10 17:00 예약)는 그대로예요.</li></ul>` },

    { type: "timeline", anchor: "days", title: "A안 · 10/11(일) 호빵맨 → 라라포트 (마린월드는 10/12)",
      items: [
        { time: "10/10", title: "토 · 체크인 → 캐널시티 → 17:00 모츠나베", html: "<p>15:00 체크인 → 16:00 캐널시티 분수쇼·캐릭터숍(<a href=\"#canal--route\">캐널시티 동선</a>) → 17:00 이치후지(토 17:00~23:30, 2시간제). 16시엔 지하1층 스테이지 미니라이브로 붐비니 1층 난간에서.</p>" },
        { time: "09:15", title: "10/11 일 · 숙소 → 호빵맨 뮤지엄", html: "<p>祇園역 6번 출구(엘리베이터) → 中洲川端역 1정거장, 또는 택시 약 10분. <b>이날만 9:30 개장</b>. 유모차는 5층에 맡기고 아기띠로.</p>" },
        { time: "11:30", title: "택시로 라라포트 (15~20분)", html: "<p>리버레인 앞에서 택시. 라라포트 택시 승강장은 버스터미널 안이라 돌아올 때도 같은 곳.</p>" },
        { time: "12:00", title: "3층 푸드코트 점심", html: "<p>아이와 앉기 좋은 좌식(小上がり) 자리. 식당·푸드코트는 11시부터.</p>" },
        { time: "12:45", title: "유모차 낮잠 · 아카짱혼포 쇼핑 (3층)", html: "<p>면세는 세전 5,000엔 이상·여권 필요. 베이비 휴게실은 2층이 가장 넓어요. 아기의 날 페어는 10/12까지.</p>", tone: "warn" },
        { time: "15:00", title: "건담 정각 연출 → 15:30 택시로 숙소", html: "<p>낮 연출은 10~18시 매시 정각(10/5~9 정비 뒤 재개 예정). 저녁은 숙소 근처에서 가볍게.</p>" },
        { time: "10/12", title: "월(공휴일) · 마린월드", html: "<p><a href=\"#marine--plan\">마린월드 추천 일정</a>: 택시로 가서 JR로 돌아오기, 열차에서 낮잠.</p>" },
        { time: "10/13", title: "화 · 아침 우동 → 9:30 공항으로", html: "<p>비 예보(60%)라 구시다 신사는 날씨 보고. 택시로 공항.</p>" }
      ],
      note: "장난감 미술관까지 가고 싶다면: 10/11 호빵맨을 빼고 오전 10:00 장난감 미술관 예약 → 아카짱혼포 → 푸드코트 점심 → 숙소 낮잠, 호빵맨은 10/10 15시 체크인 직후(최종 입장 16:00). 사흘 다 흐리고 가끔 맑음 예보라 날씨 때문에 순서를 바꿀 필요는 없어요. 10/11은 전부 실내, 마린월드도 쇼 관람석만 야외예요." },

    { type: "items", wide: true, anchor: "anpanman", title: "호빵맨(안판만) 어린이 뮤지엄",
      items: [
        { name: "후쿠오카 안판만 어린이 뮤지엄 in 몰", jp: "福岡アンパンマンこどもミュージアムinモール · 博多リバレインモール 5·6F", img: "img/place-riverain.jpg", credit: "博多リバレインモール · Geraldshields11 · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Hakata_Riverain_Mall.jpg",
          tags: [["1세부터 유료", "signal"], ["이유식 OK", "ok"], ["유모차 보관", ""]],
          html: `<p><b>영업</b> 10:00–17:00(최종 입장 16:00), <b>10/11(일)만 9:30 개장</b>. 휴관은 12/31·1/1과 점검일.</p>
<p><b>요금</b> 1세 이상 1인 2,000~2,200엔(날짜별 변동, 가격 캘린더 확인), 0세 무료 → 우리 가족 3명 6,000~6,600엔. 23개월은 유료예요.</p>
<p><b>표 사기</b> 날짜 지정 웹티켓(시간 지정 없음, 오픈~16시 아무 때나 입장). CLOUD PASS에서 팔고 <b>Klook 한국어 페이지</b>도 있어요. 처음엔 계정 만들기, 입장 땐 스마트폰 필요. 온라인은 <b>당일 16시까지</b>, 매표소 당일권도 있어요(현금·카드·QR). 당일 재입장 가능.</p>
<p><b>아기</b> 유모차는 안에 못 가지고 들어가고 5층에 보관. 이유식 반입 가능, 5층에 전자레인지·80℃ 온수.</p>
<p><b>가는 법</b> 지하철 공항선 祇園역(6번 출구 엘리베이터)에서 1정거장 中洲川端역. 택시면 약 10분.</p>`,
          caution: "10/10(토) 10:00~15:00에는 바로 앞 明治通り가 자전거 대회로 통제돼요. 이날 간다면 지하철로.",
          link: "https://www.fukuoka-anpanman.jp/", linkLabel: "공식 사이트" }
      ] },

    { type: "items", wide: true, anchor: "lalaport", title: "라라포트 후쿠오카 · 장난감 미술관",
      items: [
        { name: "후쿠오카 장난감 미술관", jp: "福岡おもちゃ美術館 · ららぽーと福岡 オーバル棟 1F", img: "img/place-toymuseum.jpg", credit: "공식 사이트 캡처", srcUrl: "https://art-play.or.jp/ftm/",
          tags: [["전원 사전예약", "danger"], ["0~2세 전용 공간", "ok"], ["가족 4,400엔", ""]],
          html: `<p>나무 장난감 체험 미술관. <b>0~2세와 보호자 전용 ‘赤ちゃん木育ひろば’</b>가 있어 23개월에게 딱 맞아요. 10:00–17:00, 10/10~13 휴관 공지 없음(10/20~22 정비 휴관).</p>
<p><b>요금(온라인)</b> 어른 1,600엔, 아이(6개월~초등) 1,200엔. 0~2세 무료 ‘赤ちゃんWeek’는 10/23~29라 이번엔 해당 없음.</p>
<p><b>입장</b> 신발 벗고, 어른도 양말 필수. 유모차는 건물 밖 보관소(화장실 앞은 지붕 있음). 체류 시간 제한 없음.</p>
<p><b>아기 시설</b> 아기 공간 안에 수유실 3실(온수)·기저귀 교환 코너(2024년 기사 기준). 쓴 기저귀는 가져가야 해요.</p>`,
          caution: "관내에 화장실이 없고 재입장은 화장실 갈 때만 돼요. 입장 전에 기저귀를 갈고 들어가세요. 이유식은 관내에서 못 먹고 분유·물·차만 가능.",
          link: "https://www.e-tix.jp/ftm/", linkLabel: "예약 페이지 (e-tix)" },
        { name: "라라포트 후쿠오카", jp: "ららぽーと福岡 · 博多区那珂6-23-1", img: "img/place-lalaport-gundam.jpg", credit: "라라포트 후쿠오카 공식 캡처 · ©創通・サンライズ", srcUrl: "https://mitsui-shopping-park.com/lalaport/fukuoka/event/2718166.html",
          tags: [["택시 10~15분", ""], ["베이비 휴게실 1·2·3층", "ok"]],
          html: `<p><b>영업</b> 매장 10:00–21:00, 식당·푸드코트 11:00–22:00.</p>
<p><b>가는 법</b> 택시 10~15분, 약 1,500~2,500엔(추정, 택시 승강장은 라라포트 버스터미널 안). JR은 博多→竹下 3분 200엔 + 도보 9분이라 유모차면 택시가 편해요.</p>
<p><b>아기</b> 베이비 휴게실(기저귀대·수유실·젖병 세척대·조유 온수기) 1·2·3층, 2층이 가장 넓어요(개인실 4). 3층 푸드코트에 아이와 앉기 좋은 좌식 자리. 푸드코트 아기의자는 미확인.</p>
<p><b>실물 크기 ν건담 연출</b> 낮 10:00~18:00 매시 정각, 밤 19:00 · 19:30 · 20:00 · 20:30 · 21:00. 10/5~9 정비 휴지(공식 페이지엔 재개일이 따로 적혀 있지 않아 10/10 재개는 예정으로 봐 주세요), 날씨에 따라 중지.</p>
<p><b>그 밖에</b> 4층 동물 카페 Moff animal cafe, 1·2층 オーバルパーク(무료). 키자니아(3~15세)·VS PARK는 23개월에겐 안 맞아요.</p>`,
          link: "https://mitsui-shopping-park.com/lalaport/fukuoka/service/baby.html", linkLabel: "베이비 휴게실 안내" }
      ] },

    { type: "facts", title: "아카짱혼포 두 곳",
      rows: [
        ["라라포트 후쿠오카점", "3층 · 10:00–21:00 · 10월 무휴 · 면세 · <span class=\"num\">092-501-0100</span>"],
        ["가든즈 지하야점", "東区千早3-6-37 ガーデンズ千早 본관 2층 · <b>9:00–20:00</b> · 10월 무휴 · 면세 · JR·니시테츠 千早역 도보 6분(博多→千早 JR 9분 270엔) · <span class=\"num\">092-665-6500</span>"],
        ["면세 조건", "세전 5,000엔 이상, 여권 지참 본인, 면세 수수료 1.1%, 종이 기저귀도 대상. 2026년 11월 환급 방식 도입 전이라 이번엔 매장에서 바로 면세."],
        ["아기의 날 페어", "10/2~10/12 전 매장. 10/10 한정 2,200엔 이상 구매 사은품은 앱 회원 한정(관광객 가능 여부 미확인)."],
        ["어느 쪽?", "라라포트에 갈 거라면 라라포트점 하나로 충분해요. 지하야점은 따로 가야 해서 아기와는 비효율적."]
      ] },

    { type: "phrases", title: "호빵맨 뮤지엄 · 라라포트에서",
      items: [
        { ko: "유모차는 어디에 맡기나요?", jp: "ベビーカーはどこに預けますか？", pron: "베비-카-와 도코니 아즈케마스카?" },
        { ko: "이유식 먹일 수 있는 곳이 있나요?", jp: "離乳食を食べられる場所はありますか？", pron: "리뉴-쇼쿠오 타베라레루 바쇼와 아리마스카?" },
        { ko: "라라포트 후쿠오카까지 가 주세요.", jp: "ららぽーと福岡までお願いします。", pron: "라라포-토 후쿠오카 마데 오네가이시마스." },
        { ko: "하카타 리버레인 몰까지 가 주세요.", jp: "博多リバレインモールまでお願いします。", pron: "하카타 리바레인 모-루 마데 오네가이시마스." },
        { ko: "베이비 휴게실은 어디예요?", jp: "ベビー休憩室はどこですか？", pron: "베비- 큐-케-시츠와 도코데스카?" }
      ] }
  ],
  sources: [
    { label: "안판만 뮤지엄 · 공식", url: "https://www.fukuoka-anpanman.jp/" },
    { label: "안판만 뮤지엄 · 10월 영업시간", url: "https://www.fukuoka-anpanman.jp/news/article/iqqctveqj7j9ucl5.html" },
    { label: "안판만 뮤지엄 · 웹티켓 안내 (CLOUD PASS·Klook)", url: "https://www.fukuoka-anpanman.jp/news/article/4491bqbb7sccwgsd.html" },
    { label: "안판만 뮤지엄 · Q&A", url: "https://www.fukuoka-anpanman.jp/qa/" },
    { label: "안판만 뮤지엄 · 오시는 길", url: "https://www.fukuoka-anpanman.jp/access/" },
    { label: "안판만 뮤지엄 · 10/10 교통 통제 안내", url: "https://www.fukuoka-anpanman.jp/news/article/xpmltnis4c58jz6k.html" },
    { label: "라라포트 후쿠오카 · 영업시간", url: "https://mitsui-shopping-park.com/lalaport/fukuoka/hour/" },
    { label: "라라포트 후쿠오카 · 엔터테인먼트 시설 목록", url: "https://mitsui-shopping-park.com/lalaport/fukuoka/special/entertainment/all/" },
    { label: "라라포트 후쿠오카 · 베이비 휴게실", url: "https://mitsui-shopping-park.com/lalaport/fukuoka/service/baby.html" },
    { label: "라라포트 후쿠오카 · ν건담 연출 스케줄", url: "https://mitsui-shopping-park.com/lalaport/fukuoka/event/2718166.html" },
    { label: "福岡おもちゃ美術館 · 이용 안내", url: "https://art-play.or.jp/ftm/info/" },
    { label: "福岡おもちゃ美術館 · 예약 (e-tix)", url: "https://www.e-tix.jp/ftm/" },
    { label: "아카짱혼포 라라포트 후쿠오카점", url: "https://stores.akachan.jp/282" },
    { label: "아카짱혼포 · 면세 안내", url: "https://www.akachan.jp/topics/tax_free_guide/Japanese/" },
    { label: "아카짱혼포 · 아기의 날 페어", url: "https://www.akachan.jp/akachannohi/" }
  ]
});

/* ═════════════ 먹을거리 · 하카타역 저녁 (아기랑) ═════════════ */
GUIDE.sections.push({
  id: "dinner", cat: "food", code: "F02", order: 2,
  ko: "하카타역 저녁 · 아기랑", short: "저녁 맛집", jp: "博多駅 子連れディナー", ro: "Toddler-friendly Dinner near Hakata",
  lead: "숙소에서 걸어서 10분 안의 저녁 식당이에요. 하카타역 아뮤플라자 9·10층 <b>くうてん</b>은 키즈메뉴·아기의자 있는 곳이 몰려 있고, 지친 날엔 <b>숙소 2층 레스토랑</b>이 이동 없이 갈 수 있어 편해요. 하카타 명물 <b>미즈타키(닭 전골)</b>는 국물이 순해서 아기와 나눠 먹기 좋아요.",
  summary: "くうてん 키즈메뉴 식당, 숙소 2층 그릴, 미즈타키(닭 전골), 아이 라멘",
  keywords: ["저녁", "夕食", "디너", "맛집", "식당", "레스토랑", "くうてん", "쿠텐", "미즈타키", "水炊き", "水たき", "딘타이펑", "鼎泰豊", "샤오롱바오", "햄버그", "ハンバーグ", "라멘", "ラーメン", "하나미도리", "華味鳥", "하마다야", "濵田屋", "Nine Doors"],
  checked: "2026-10-10",
  blocks: [
    { type: "say", items: [
      { ko: "아이 의자 있나요?", jp: "子ども用の椅子はありますか？", pron: "코도모요-노 이스와 아리마스카?" },
      { ko: "17시 반에 어른 2명, 아이 1명 예약할 수 있나요?", jp: "17時半に大人2名と子ども1名で予約できますか？", pron: "쥬-시치지한니 오토나 니메-토 코도모 이치메-데 요야쿠 데키마스카?" }
    ] },

    { type: "callout", tone: "warn", title: "먼저 알아둘 것",
      html: `<ul>
<li>3연휴라 <b>예약하거나 17:30 전에 도착</b>하세요. 대기 시간은 확인된 곳이 없어요.</li>
<li>くうてん의 <b>うまや(10층)는 리뉴얼 휴업, 10/29 재개</b>(캐널시티 うまや는 별도 매장).</li>
<li>미즈타키 명가 <b>水たき 長野</b>는 일·월(공휴일) 휴무에 전화 예약 필수, <b>とり田</b>도 예약 필수 인기점이라 이번엔 어려워요.</li>
<li>예약 사이트(TORETA·히토사라·resebook)가 해외 전화번호를 받는지는 미확인이에요. 안 되면 전화로.</li></ul>` },

    { type: "table", title: "한눈에 보기 (아기 친화도 순)",
      head: ["가게", "위치 · 숙소에서", "저녁 영업", "아기", "예약", "어른 1인"],
      rows: [
        ["<b>鼎泰豊</b> 딘타이펑", "AMU 9층 くうてん · 10~12분", "매일 ~22:00", "키즈 면·볶음밥 세트 각 1,100엔, 아기의자", "온라인은 코스만, 단품은 현장 대기", "2,500엔~"],
        ["<b>ぶどうの樹</b> 부도노키 (스테이크)", "AMU 10층 · 10~12분", "17:00~21:30", "키즈 뷔페 500엔·<b>3세 이하 무료</b>(저녁 적용 미확인), 아기의자", "히토사라 온라인·전화", "3,000엔~"],
        ["<b>Nine Doors</b> 나인도어즈 (그릴)", "<b>숙소 2층 · 0분</b>", "17:00~23:00", "유모차 입장, 소파석·개인실. 키즈메뉴·아기의자 미확인", "전화·一休", "5,000~6,000엔"],
        ["<b>グリル大宮</b> 그릴 오미야 (양식)", "AMU 9층 · 10~12분", "17:00~22:00(금·토·공휴일 전날 23:00)", "키즈 햄버그 세트 1,210엔, 아기의자", "미확인", "2,000엔~"],
        ["<b>博多水たき 濵田屋 くうてん</b> 하마다야", "AMU 10층 · 10~12분", "~22:00", "아이 동반 OK, <b>전기 조리(불꽃 없음)</b>, 아기의자 미확인", "전화·resebook", "세트 3,800엔~"],
        ["<b>博多華味鳥 KITTE博多</b> 하나미도리", "KITTE 9층 · 8~10분", "15:00~23:00", "유모차 입장 쉬움, 반개인실. 아기의자 미확인", "TORETA·전화", "코스 4,500엔~"],
        ["<b>釜のうさぎ</b> 가마노우사기 (솥밥)", "AMU 10층 · 10~12분", "~22:00", "어린이 런치 890엔(저녁 주문 미확인), 아기의자 3대", "미확인", "약 2,500엔"],
        ["<b>長浜ナンバーワン</b> 나가하마 넘버원 (라멘)", "데이토스 2층 · 10~12분", "미확인", "어린이 라멘(하프) 700엔, 아기의자", "미확인", "미확인"],
        ["<b>博多華味鳥 博多駅前店</b>", "博多駅前3-23-17 · 5~10분(추정)", "토 17~23시, 일·공휴일 17~22시", "아이 동반 OK, 테이블 개인실", "TORETA·전화", "코스 4,500엔~"]
      ],
      note: "‘아기의자·키즈메뉴’는 JR하카타시티 공식 키즈메뉴 목록과 각 공식·예약 사이트 기준이에요. くうてん 영업은 11:00~22:00이 기본." },

    { type: "facts", title: "가게별 메모",
      rows: [
        ["딘타이펑 <span class=\"tag ok\">1순위</span>", "샤오롱바오·볶음밥이 순해서 아기에게 무난. 코스(ゆたか 3,500엔)만 온라인 예약이라 단품이면 <b>17:30 전 도착</b> 권장. ☎ <span class=\"num\">092-477-2778</span>"],
        ["부도노키", "공식 키즈메뉴 목록에 ‘어린이 스테이크+뷔페 1,000엔, 어린이 뷔페 500엔, 3세 이하 무료’. 저녁에도 되는지 예약 때 확인. 카드·PayPay·교통카드. ☎ <span class=\"num\">092-409-6900</span>"],
        ["Nine Doors (숙소 2층)", "장작불 그릴 고기와 규슈 식재료. 2026-05 기사에 ‘아기 동반 환영, 유모차 입장, 소파석·완전 개인실’. <b>마린월드·라라포트 다녀와 지친 날</b> 엘리베이터만 타면 돼요. ☎ <span class=\"num\">092-260-9185</span>"],
        ["그릴 오미야", "햄버그는 아기 저녁으로 가장 안전한 축. 72석. ☎ <span class=\"num\">092-710-6116</span>"],
        ["하마다야 くうてん (미즈타키)", "테이블에 전기 조리기가 내장돼 불꽃이 없어 아기 옆에서도 안심. 저녁 세트 3,800엔, 마무리 죽(おじや) 330엔·밥 280엔 추가 가능. ‘냄비는 인원수만큼’이 원칙이라 아기도 인원에 들어가는지 예약 때 물어보세요. ☎ <span class=\"num\">092-292-3412</span>"],
        ["하나미도리 (미즈타키)", "KITTE점: 코스 4,500엔~, 미즈타키를 안 시키면 자릿세 600엔, 예약 15분 지나면 자동 취소. 역앞점: 106석, 테이블 개인실(4~12명), 근처 별관(博多駅前3-3-12)엔 개인실. ☎ KITTE <span class=\"num\">092-292-3346</span> · 역앞 <span class=\"num\">092-432-1801</span>"],
        ["가마노우사기", "쇠솥 밥과 다시 오차즈케. 순한 밥·국물이라 아기에게 좋아요. 어린이 메뉴를 저녁에도 주는지 전화로 확인. ☎ <span class=\"num\">092-260-8677</span>"],
        ["나가하마 넘버원 (라멘)", "아이와 하카타 라멘을 먹을 수 있는 몇 안 되는 확인된 곳. 돈코츠 국물이 짜니 면 위주로."],
        ["그 밖에 くうてん 키즈메뉴", "人形町今半 어린이 스키야키 정식 2,090엔(아기의자 수량 한정) · 焼肉チャンピオン 키즈 비빔밥 630엔 · めんたい料理 椒房庵 어린이 플레이트 1,300엔 · 四川飯店 어린이 플레이트 1,200엔 · スープストックトーキョー(AMU 지하1층) 키즈 세트 750엔 · 陶板焼き 俵屋(데이토스 지하1층) 키즈 햄버그 630엔. 저녁 영업시간은 미확인."]
      ] },

    { type: "text", title: "미즈타키 · 아기와 먹는 법",
      html: `<p>하카타식 닭 전골. 뽀얀 닭 육수에 닭고기·채소를 넣어 끓이고, 처음엔 <b>국물만 한 잔</b> 마시는 게 순서예요. 간이 거의 없는 국물이라 23개월도 식혀서 먹이기 좋고, 마지막 <b>죽(おじや)</b>은 아기 저녁으로 딱이에요. 폰즈(초간장)는 어른용.</p>` },

    { type: "timeline", title: "날짜별로 고르면",
      items: [
        { time: "10/10", title: "토 · 모츠나베 이치후지 17:00 (예약)", html: "<p><a href=\"#saved\">저장한 곳</a> 참고</p>" },
        { time: "10/11", title: "일 · A안(호빵맨·라라포트) 다녀와서 → 숙소 2층 Nine Doors 또는 くうてん 딘타이펑" },
        { time: "10/12", title: "월 · 마린월드 다녀와서 → くうてん 그릴 오미야·하마다야 미즈타키, 또는 우동", html: "<p><a href=\"#udon\">숙소 근처 우동집</a></p>" }
      ] },

    { type: "gallery",
      images: [
        { src: "img/dinner-hakata-ramen.jpg", caption: "하카타 라멘 (돈코츠). 아기는 면 위주로", credit: "vigorous_action · CC BY-SA 3.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Hakata_ramen.JPG" }
      ] },

    { type: "phrases", title: "저녁 식당에서",
      items: [
        { ko: "아이 의자 있나요?", jp: "子ども用の椅子はありますか？", pron: "코도모요-노 이스와 아리마스카?" },
        { ko: "아이는 인원에 포함돼요? (전골 주문)", jp: "子どもも人数に入りますか？", pron: "코도모모 닌즈-니 하이리마스카?" },
        { ko: "마지막에 죽(오지야) 해 주세요.", jp: "最後におじやをお願いします。", pron: "사이고니 오지야오 오네가이시마스." },
        { ko: "어린이 메뉴는 저녁에도 되나요?", jp: "お子様メニューは夜も頼めますか？", pron: "오코사마 메뉴-와 요루모 타노메마스카?" }
      ] }
  ],
  sources: [
    { label: "JR博多シティ · 키즈메뉴 목록", url: "https://www.jrhakatacity.com/kidsmenu/" },
    { label: "JR博多シティ · 鼎泰豊", url: "https://www.jrhakatacity.com/floor/detail/?cd=000217" },
    { label: "鼎泰豊 · 하카타 코스 예약", url: "https://d.rt-c.co.jp/hakata" },
    { label: "JR博多シティ · ぶどうの樹", url: "https://www.jrhakatacity.com/floor/detail/?cd=000233" },
    { label: "히토사라 · ぶどうの樹", url: "https://hitosara.com/0004028033/" },
    { label: "macaroni · 하카타 아이 동반 식당 (2026-05)", url: "https://macaro-ni.jp/176078?page=2" },
    { label: "一休 · Nine Doors Restaurant & Grill", url: "https://restaurant.ikyu.com/113521/" },
    { label: "Hot Pepper · Nine Doors", url: "https://www.hotpepper.jp/strJ001225067/" },
    { label: "JR博多シティ · グリル大宮", url: "https://www.jrhakatacity.com/floor/detail/?cd=000207" },
    { label: "JR博多シティ · 博多水たき 濵田屋", url: "https://www.jrhakatacity.com/floor/detail/?cd=000235" },
    { label: "濵田屋 くうてん · 공식", url: "https://mizutaki-hamadaya.jp/kooten/" },
    { label: "華味鳥 · KITTE博多店", url: "https://www.hanamidori.net/stores/0922923346/" },
    { label: "華味鳥 · 博多駅前店", url: "https://www.hanamidori.net/stores/0924321801/" },
    { label: "TORETA · 華味鳥 KITTE博多 예약", url: "https://yoyaku.toreta.in/kittehakata" },
    { label: "TORETA · 華味鳥 博多駅前 예약", url: "https://yoyaku.toreta.in/hakataekimaeten/" },
    { label: "JR博多シティ · 釜のうさぎ", url: "https://www.jrhakatacity.com/floor/detail/?cd=000487" }
  ]
});

/* ═════════════ 여행 일본어 · 일정 순서 회화 ═════════════ */
window.GUIDE.phrasebook = [
 {
  "type": "phrases",
  "title": "① 10/10 공항 · 입국",
  "items": [
   {
    "ko": "관광이에요. 3박 4일이에요.",
    "jp": "観光です。3泊4日です。",
    "pron": "칸코-데스. 산파쿠 욧카데스."
   },
   {
    "ko": "숙소는 더 블라섬 하카타 프리미어예요.",
    "jp": "ホテルはザ・ブラッサム博多プレミアです。",
    "pron": "호테루와 자 부랏사무 하카타 푸레미아데스."
   },
   {
    "ko": "신고할 물건은 없어요.",
    "jp": "申告するものはありません。",
    "pron": "신코쿠스루 모노와 아리마셍."
   },
   {
    "ko": "택시 승강장은 어디예요?",
    "jp": "タクシー乗り場はどこですか？",
    "pron": "타쿠시- 노리바와 도코데스카?"
   }
  ]
 },
 {
  "type": "phrases",
  "title": "② 숙소 · 체크인과 객실",
  "items": [
   {
    "ko": "체크인 부탁해요. 예약한 ○○입니다.",
    "jp": "チェックインをお願いします。予約した〇〇です。",
    "pron": "첵쿠인오 오네가이시마스. 요야쿠시타 ○○데스."
   },
   {
    "ko": "공용 전자레인지는 무료로 쓸 수 있나요?",
    "jp": "電子レンジは無料で使えますか？",
    "pron": "덴시렌지와 무료-데 츠카에마스카?"
   },
   {
    "ko": "변압기를 빌릴 수 있나요?",
    "jp": "変圧器を借りられますか？",
    "pron": "헨아츠키오 카리라레마스카?"
   },
   {
    "ko": "우산을 빌릴 수 있나요?",
    "jp": "傘を借りられますか？",
    "pron": "카사오 카리라레마스카?"
   },
   {
    "ko": "내일 아침 9시 반에 택시를 불러 주세요.",
    "jp": "明日の朝9時半にタクシーを呼んでください。",
    "pron": "아시타노 아사 쿠지한니 타쿠시-오 욘데 쿠다사이."
   }
  ]
 },
 {
  "type": "phrases",
  "title": "③ 10/10 캐널시티 · 저녁",
  "items": [
   {
    "ko": "분수쇼는 어디서 볼 수 있어요?",
    "jp": "噴水ショーはどこで見られますか？",
    "pron": "훈스이 쇼-와 도코데 미라레마스카?"
   },
   {
    "ko": "17시에 예약한 ○○입니다. 어른 둘, 아기 하나예요.",
    "jp": "17時に予約した〇〇です。大人2人と子ども1人です。",
    "pron": "쥬-시치지니 요야쿠시타 ○○데스. 오토나 후타리토 코도모 히토리데스."
   },
   {
    "ko": "아이 것은 맵지 않게 해 주세요.",
    "jp": "子どもの分は辛くしないでください。",
    "pron": "코도모노 분와 카라쿠 시나이데 쿠다사이."
   },
   {
    "ko": "계산해 주세요.",
    "jp": "お会計お願いします。",
    "pron": "오카이케- 오네가이시마스."
   }
  ]
 },
 {
  "type": "phrases",
  "title": "④ 10/11 호빵맨 뮤지엄 → 라라포트",
  "items": [
   {
    "ko": "웹 티켓을 샀어요. (QR 보여주며)",
    "jp": "ウェブチケットを買いました。",
    "pron": "웨부 치켓토오 카이마시타."
   },
   {
    "ko": "유모차는 어디에 맡기나요?",
    "jp": "ベビーカーはどこに預けますか？",
    "pron": "베비-카-와 도코니 아즈케마스카?"
   },
   {
    "ko": "이유식 먹일 수 있는 곳이 있나요?",
    "jp": "離乳食を食べられる場所はありますか？",
    "pron": "리뉴-쇼쿠오 타베라레루 바쇼와 아리마스카?"
   },
   {
    "ko": "라라포트 후쿠오카까지 가 주세요.",
    "jp": "ららぽーと福岡までお願いします。",
    "pron": "라라포-토 후쿠오카 마데 오네가이시마스."
   },
   {
    "ko": "면세 되나요? 여권 여기 있어요.",
    "jp": "免税できますか？パスポートです。",
    "pron": "멘제- 데키마스카? 파스포-토데스."
   },
   {
    "ko": "이 기저귀 빅 사이즈 있어요?",
    "jp": "このおむつのビッグサイズはありますか？",
    "pron": "코노 오무츠노 빗구 사이즈와 아리마스카?"
   },
   {
    "ko": "베이비 휴게실은 어디예요?",
    "jp": "ベビー休憩室はどこですか？",
    "pron": "베비- 큐-케-시츠와 도코데스카?"
   }
  ]
 },
 {
  "type": "phrases",
  "title": "⑤ 10/12 마린월드 · JR",
  "items": [
   {
    "ko": "물이 안 튀는 자리는 어디예요?",
    "jp": "水がかからない席はどこですか？",
    "pron": "미즈가 카카라나이 세키와 도코데스카?"
   },
   {
    "ko": "이 열차 가시이에 가요?",
    "jp": "この電車は香椎に行きますか？",
    "pron": "코노 덴샤와 카시-니 이키마스카?"
   },
   {
    "ko": "하카타역 가는 열차는 몇 번 홈이에요?",
    "jp": "博多駅行きは何番線ですか？",
    "pron": "하카타에키 유키와 난반센데스카?"
   },
   {
    "ko": "엘리베이터는 어디예요?",
    "jp": "エレベーターはどこですか？",
    "pron": "에레베-타-와 도코데스카?"
   }
  ]
 },
 {
  "type": "phrases",
  "title": "⑥ 편의점 · 교통카드",
  "items": [
   {
    "ko": "데워 주세요.",
    "jp": "温めてください。",
    "pron": "아타타메테 쿠다사이."
   },
   {
    "ko": "봉투는 필요 없어요.",
    "jp": "袋はいりません。",
    "pron": "후쿠로와 이리마셍."
   },
   {
    "ko": "숟가락 주세요.",
    "jp": "スプーンをください。",
    "pron": "스푸-응오 쿠다사이."
   },
   {
    "ko": "Suica로 낼게요.",
    "jp": "Suicaで払います。",
    "pron": "스이카데 하라이마스."
   },
   {
    "ko": "Suica에 충전해 주세요. 천 엔이요.",
    "jp": "Suicaにチャージお願いします。1,000円です。",
    "pron": "스이카니 챠-지 오네가이시마스. 센엔데스."
   }
  ]
 },
 {
  "type": "phrases",
  "title": "⑦ 10/13 체크아웃 · 출국",
  "items": [
   {
    "ko": "체크아웃할게요.",
    "jp": "チェックアウトお願いします。",
    "pron": "첵쿠아우토 오네가이시마스."
   },
   {
    "ko": "○○항공 카운터는 어디예요?",
    "jp": "〇〇航空のカウンターはどこですか？",
    "pron": "○○코-쿠-노 카운타-와 도코데스카?"
   },
   {
    "ko": "유모차를 탑승구까지 쓸 수 있나요?",
    "jp": "ベビーカーを搭乗口まで使えますか？",
    "pron": "베비-카-오 토-죠-구치마데 츠카에마스카?"
   }
  ]
 },
 {
  "type": "phrases",
  "title": "⑧ 급할 때",
  "items": [
   {
    "ko": "도와주세요!",
    "jp": "助けてください！",
    "pron": "타스케테 쿠다사이!"
   },
   {
    "ko": "아이를 잃어버렸어요.",
    "jp": "子どもが迷子になりました。",
    "pron": "코도모가 마이고니 나리마시타."
   },
   {
    "ko": "길을 잃었어요.",
    "jp": "道に迷いました。",
    "pron": "미치니 마요이마시타."
   },
   {
    "ko": "화장실은 어디예요?",
    "jp": "トイレはどこですか？",
    "pron": "토이레와 도코데스카?"
   }
  ]
 }
];

/* ═════════════ 이동 · 교통카드 Suica ═════════════ */
GUIDE.sections.push({
  id: "suica", cat: "move", code: "T02",
  ko: "Suica · 교통카드", short: "Suica", jp: "交通系ICカード", ro: "Using Suica in Fukuoka",
  lead: "가지고 계신 Suica는 <b>후쿠오카 지하철·JR큐슈·니시테츠 전철과 버스에서 그대로 쓸 수 있어요</b>(전국 교통카드 상호이용). 잔액 확인과 충전도 후쿠오카 역 발매기·편의점에서 됩니다. 23개월은 무료라 카드가 필요 없고, 어른은 1명당 카드 1장이에요.",
  summary: "후쿠오카에서 쓸 수 있는 곳, 잔액 확인, 충전, 유효기간 주의",
  keywords: ["Suica", "스이카", "スイカ", "교통카드", "IC카드", "ICカード", "충전", "チャージ", "잔액", "残高", "SUGOCA", "はやかけん", "nimoca", "지하철", "JR", "니시테츠"],
  checked: "2026-10-09",
  blocks: [
    { type: "say", items: [
      { ko: "Suica에 충전해 주세요. 천 엔이요.", jp: "Suicaにチャージお願いします。1,000円です。", pron: "스이카니 챠-지 오네가이시마스. 센엔데스." },
      { ko: "이 카드 잔액을 확인할 수 있나요?", jp: "このカードの残高を確認できますか？", pron: "코노 카-도노 잔다카오 카쿠닌 데키마스카?" }
    ] },

    { type: "table", title: "이번 일정에서 Suica가 되는 곳",
      head: ["교통수단", "Suica", "이번 일정"],
      rows: [
        ["<b>후쿠오카시 지하철</b> (공항선·나나쿠마선 등)", `<span class="tag ok">사용 가능</span>`, "공항↔하카타, 祇園↔中洲川端(호빵맨)"],
        ["<b>JR큐슈</b> (SUGOCA 지역: 가고시마본선·香椎線)", `<span class="tag ok">사용 가능</span>`, "마린월드 갈 때·올 때 JR(香椎 환승, 海ノ中道역 포함)"],
        ["<b>니시테츠 전철·버스</b> (nimoca 지역)", `<span class="tag ok">사용 가능</span>`, "이번엔 거의 안 써요(다자이후 갈 때 정도)"],
        ["<b>편의점·역 상점</b>", `<span class="tag ok">전자머니로 결제</span>`, "Suica 마크 있는 곳"],
        ["<b>택시</b>", `<span class="tag">차량마다 다름</span>`, "탈 때 IC 마크 확인, 아니면 카드·현금"],
        ["<b>특급 리레이카모메</b> (다케오온센)", `<span class="tag">특급권 따로</span>`, "갈 경우 넷 티켓 권장"]
      ],
      note: "한 번 탈 때 한 지역 안에서만 쓸 수 있고(지역을 넘는 승차 불가), Suica 오토차지는 규슈에선 안 돼요. JR큐슈 공식 안내 기준 다른 지역 카드도 개찰, 발매기 충전, 승차권 구입, 전자머니를 쓸 수 있어요." },

    { type: "facts", title: "잔액 확인하는 법",
      rows: [
        ["역 발매기", "아무 역 자동발매기·충전기에 카드를 넣거나 대면 잔액이 떠요. 잔액이 0엔이어도 확인 가능하고, 이용 내역 보기·인쇄도 돼요. <b>후쿠오카공항역에서 지하철 타기 전에</b> 확인하면 편해요."],
        ["개찰구", "찍고 지나갈 때 화면에 잔액이 잠깐 떠요(붐비면 놓치기 쉬움)."],
        ["편의점", "Suica로 결제하면 영수증에 잔액이 찍혀요."],
        ["모바일 Suica", "휴대폰 지갑에 넣은 Suica라면 앱에서 바로 보여요."]
      ] },

    { type: "facts", title: "충전하는 법",
      rows: [
        ["역 발매기·충전기", "후쿠오카 지하철·JR큐슈 역 발매기에서 <b>チャージ(입금)</b> 버튼 → 금액 선택 → 현금 투입. 1,000엔 단위, 카드 잔액 최대 20,000엔. 발매기 충전은 <b>현금</b>을 준비하세요."],
        ["편의점 계산대", "세븐일레븐·패밀리마트·로손 계산대에서 “Suicaにチャージお願いします” + 현금."],
        ["주의", "<b>海ノ中道역(마린월드)은 무인역이라 충전이 안 된다</b>는 정보가 있어요. 마린월드 가는 날 아침 하카타 쪽에서 미리 넉넉히 충전해 두세요(JR 어른 편도 560엔)."]
      ] },

    { type: "callout", tone: "warn", title: "카드 종류부터 확인하세요",
      html: `<ul>
<li><b>일반 Suica(초록 펭귄)</b> · 마지막으로 쓴 날부터 <b>10년</b> 안 쓰면 실효돼요. 오래 안 쓴 카드는 개찰구에서 막힐 수 있는데, 그럴 땐 역 직원에게 말하면 돼요.</li>
<li><b>Welcome Suica(빨간색, 관광객용)</b> · 유효기간이 <b>28일</b>이라 예전 여행 때 산 카드면 이미 못 써요. 남은 잔액도 환불이 안 돼요.</li>
<li>어른 두 명 중 한 명은 Suica, 다른 한 명은 지하철에서 해외 카드 터치결제(1장 = 1명)를 써도 돼요. JR(마린월드)에서도 쓰려면 역 발매기에서 승차권을 사거나 IC카드를 하나 더 준비하세요.</li></ul>` },

    { type: "phrases", title: "역·편의점에서",
      items: [
        { ko: "충전은 어디서 해요?", jp: "チャージはどこでできますか？", pron: "챠-지와 도코데 데키마스카?" },
        { ko: "카드가 개찰구에서 안 돼요.", jp: "カードが改札で使えません。", pron: "카-도가 카이사츠데 츠카에마셍." },
        { ko: "Suica로 낼게요.", jp: "Suicaで払います。", pron: "스이카데 하라이마스." }
      ] }
  ],
  sources: [
    { label: "JR큐슈 · 교통카드 상호이용 서비스", url: "https://www.jrkyushu.co.jp/sugoca/area/each/" },
    { label: "JR큐슈 · SUGOCA 이용 가능 지역", url: "https://www.jrkyushu.co.jp/sugoca/area/" },
    { label: "JR동일본 · Suica 규슈 지역 이용", url: "https://www.jreast.co.jp/en/suica/area/sugoca/index.html/" },
    { label: "후쿠오카시 지하철 · 터치결제·교통카드", url: "https://subway.city.fukuoka.lg.jp/topics/detail.php?id=1895" },
    { label: "JR동일본 FAQ · Suica 10년 실효", url: "https://jreastfaq.jreast.co.jp/faq/show/3635?category_id=28&site_domain=default" },
    { label: "Welcome Suica 유효기간 정리 (2026)", url: "https://selfguidejapan.com/blog/welcome-suica-2026" },
    { label: "위키백과 · 海ノ中道역 (충전 미취급)", url: "https://ja.wikipedia.org/wiki/%E6%B5%B7%E3%83%8E%E4%B8%AD%E9%81%93%E9%A7%85" }
  ]
});

/* ═════════════ 준비 · 날씨와 옷차림 ═════════════ */
GUIDE.sections.push({
  id: "weather", cat: "prep", code: "C02",
  ko: "날씨 · 옷차림", short: "날씨·옷", jp: "天気と服装", ro: "Weather & What to Wear",
  lead: "기상청 예보로는 <b>10/10~12 흐리고 가끔 맑음, 낮 최고 29℃</b>예요. 10월 평년(최고 23.7℃)보다 5℃쯤 높아서 <b>긴팔만 가져가면 낮에 더워요.</b> 반팔 위주로 챙기고 얇은 긴팔·가디건을 겹쳐 입는 걸 권해요. 출국일 10/13은 비 예보가 있어요.",
  summary: "기상청 예보(10/8 17시), 어른·아기 옷차림, 비 대비",
  keywords: ["날씨", "天気", "기온", "비", "雨", "우산", "옷", "옷차림", "服装", "반팔", "긴팔", "태풍", "台風", "예보"],
  checked: "2026-10-09",
  blocks: [
    { type: "say", items: [
      { ko: "우산을 빌릴 수 있나요?", jp: "傘を借りられますか？", pron: "카사오 카리라레마스카?" }
    ] },

    { type: "table", title: "후쿠오카 예보 (기상청 10/8 17시 발표)",
      head: ["날짜", "날씨", "최고", "최저", "강수확률", "신뢰도"], numCols: [2, 3, 4],
      rows: [
        ["<b>10/10 토</b>", "흐리고 가끔 맑음", "29℃", "21℃", "20%", "–"],
        ["<b>10/11 일</b>", "흐리고 가끔 맑음", "29℃", "21℃", "30%", "A (높음)"],
        ["<b>10/12 월 · 마린월드</b>", "흐리고 가끔 맑음", "29℃", "18℃", "30%", "A (높음)"],
        ["<b>10/13 화 · 출국</b>", "흐리고 한때 비", "27℃", "20℃", "60%", "C (낮음)"],
        ["참고 · 10월 평년", "–", "23.7℃", "16.0℃", "비 오는 날 6.8일", ""]
      ],
      note: "주간예보는 바뀔 수 있어요. 출발 당일과 매일 아침 기상청 예보를 다시 보세요. 태풍 28·29호는 일본 동쪽 먼 태평양(동경 146~158도)에서 북상 중이라 규슈엔 영향이 없어요(10/9 기준)." },

    { type: "facts", title: "옷 이렇게 챙기세요",
      rows: [
        ["결론", "<b>반팔 + 얇은 긴팔 둘 다.</b> 낮엔 반팔, 아침·저녁(18~21℃)과 실내 냉방·열차엔 얇은 긴팔이나 가디건을 걸치는 식."],
        ["어른", "반팔 티 2~3장, 얇은 긴팔 셔츠·가디건 1벌씩, 얇은 긴바지(유모차 끌고 많이 걸으니 편한 소재). 10/13엔 우산이나 얇은 방수 겉옷."],
        ["아기 (23개월)", "반팔 상의 하루 2벌(땀 많이 흘려요) + 얇은 긴팔 1~2벌, 얇은 긴바지·반바지 섞어서. 잠옷은 얇은 긴팔(객실 에어컨). 유모차 낮잠용 얇은 담요 하나(실내 냉방)."],
        ["마린월드 날 (10/12)", "쇼 관람석이 야외라 흐려도 햇볕이 세요. 모자·아기 선크림·물. 앞줄은 물이 튀니 아기 여벌 한 벌 더."],
        ["신발", "편한 운동화. 장난감 미술관·키즈카페는 신발 벗고 들어가니 양말 필수."],
        ["세탁", "숙소 4층 코인세탁기가 있어서 옷은 2~3일치만 가져가도 돼요."]
      ] },

    { type: "callout", tone: "warn", title: "10/13 비가 오면",
      html: `<ul>
<li>공항은 원래 택시로 가는 일정이라 영향이 적어요. 숙소 우산 대여가 있어요.</li>
<li>유모차 레인커버를 기내 가방 쪽에 두면 공항에서 꺼내기 편해요.</li>
<li>구시다 신사 아침 참배는 건너뛰고 하카타역 지하(1번가)에서 아침 우동으로.</li></ul>` }
  ],
  sources: [
    { label: "기상청 · 후쿠오카현 예보", url: "https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=400000" },
    { label: "기상청 · 태풍 정보", url: "https://www.jma.go.jp/bosai/map.html#contents=typhoon" },
    { label: "기상청 · 후쿠오카 평년값", url: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=82&block_no=47807" }
  ]
});

/* 홈 · 가장 많이 쓸 한마디 */
GUIDE.trip.keycards.push({ label: "가장 많이 쓸 한마디", big: "<span class=\"jp\">ベビーチェアはありますか？</span>",
  html: `<p>베비-체아와 아리마스카? (아기의자 있나요?) <button class="mini-btn" data-show="ベビーチェアはありますか？" data-sub="아기의자 있나요?">크게 보기</button></p><p><span class="jp">〇〇までお願いします。</span> ○○마데 오네가이시마스 (택시: ○○까지 가 주세요) · <a href="#phrases">일정별 일본어 전체</a></p>` });
GUIDE.trip.keycards.push({ label: "날씨 (기상청 10/8 17시 발표)", big: "흐리고 가끔 맑음 · 최고 29℃",
  html: `<p>10/10~12 강수 20~30%, 10/13 비 60%. 평년보다 5℃쯤 더워서 반팔 + 얇은 긴팔. 태풍은 규슈 영향 없음. <a href="#weather">날씨·옷차림</a></p>` });

/* ═════════════ 가볼 곳 · 캐널시티 하카타 ═════════════ */
GUIDE.sections.push({
  id: "canal", cat: "place", code: "P03", order: 3,
  ko: "캐널시티 하카타", short: "캐널시티", jp: "キャナルシティ博多", ro: "Canal City Hakata",
  lead: "숙소에서 걸어서 5~10분, 물길을 따라 건물이 둘러선 쇼핑몰이에요. 매시 정각 <b>분수쇼</b>, 키즈메뉴·아기의자 있는 식당, 캐릭터숍이 모여 있어서 도착일(10/10) 오후에 가볍게 가기 좋아요. 유모차는 무료로 빌려줘요.",
  summary: "분수쇼 시간, 아기의자·키즈메뉴 식당 8곳, 캐릭터숍, 10/10 오후 동선",
  keywords: ["캐널시티", "キャナルシティ", "canal city", "분수쇼", "噴水", "분수", "키즈메뉴", "お子様メニュー", "아기의자", "디즈니스토어", "산리오", "울트라맨", "지브리", "사보텐", "피에트로", "에그스앤띵스", "샤부요", "しゃぶ葉", "사이제리야", "라멘 스타디움"],
  checked: "2026-10-09",
  blocks: [
    { type: "say", items: [
      { ko: "키즈메뉴 있나요?", jp: "お子様メニューはありますか？", pron: "오코사마 메뉴-와 아리마스카?" },
      { ko: "분수쇼는 어디서 볼 수 있어요?", jp: "噴水ショーはどこで見られますか？", pron: "훈스이 쇼-와 도코데 미라레마스카?" }
    ] },

    { type: "callout", tone: "warn", title: "10/10 전후로 알아둘 것",
      html: `<ul>
<li><b>10/10(토) 16:00 지하1층 선플라자 스테이지에서 아이돌 미니라이브</b>(15:45 집합)가 있어 16시 분수쇼 때 스테이지 앞이 붐빌 거예요. 16시 쇼는 1층 난간에서, 17시·17:30 쇼를 스테이지 정면에서 보세요.</li>
<li><b>노스빌 2층 엘리베이터홀 화장실은 10/31까지 공사</b>라 같은 곳의 수유 공간도 못 쓸 수 있어요. 노스빌 지하1층 수유실(개인실·온수·어린이 화장실)을 쓰세요.</li>
<li>우동집 <b>能古うどん은 12월 하순까지 휴업</b>, 牛たん 仙台辺見은 10/1~11/30 휴업. 캐널시티 안엔 지금 영업 중인 우동 전문점이 없어요.</li>
<li><b>한국 간편결제 할인</b> · 카카오페이·토스페이·네이버페이로 한 번에 10,000엔 이상 결제하면 1,200엔 즉시 할인(10/1~2027/1/15, 쿠폰 미리 받기, 네이버페이는 쿠폰 불필요).</li></ul>` },

    { type: "table", title: "분수쇼 시간 (8/31~10/16)",
      head: ["시간대", "공연"],
      rows: [
        ["<b>낮</b>", `<span class="num">10:00 · 11:00 · 12:00 · 13:00 · 14:00 · 15:00 · <b>16:00 · 17:00 · 17:30</b></span> 음악에 맞춰 춤추는 분수`],
        ["<b>밤</b>", `<span class="num">18:00 · 18:30 · 19:30 · 20:30 · 21:30 · 22:00</span> 분수 · <span class="num">19:00 · 21:00</span> 건담 프로젝션(약 10분) · <span class="num">20:00</span> Imagination(약 5분)`]
      ],
      note: "지하1층 선플라자 스테이지. 스테이지 앞이 평지라 유모차로 보기 가장 편하고, 2·3층 난간 가운데는 통로가 좁아요. 쇼가 끝나기 2~3분 전에 엘리베이터 쪽으로 움직이면 덜 붐벼요(2026-07 블로그 팁)." },

    { type: "table", title: "아기랑 먹을 곳 (캐널시티 안)", anchor: "food",
      head: ["식당", "위치", "키즈메뉴", "아기의자", "영업 · 메모"],
      rows: [
        ["<b>とんかつ新宿さぼてん</b> 돈카츠 사보텐", "노스빌 지하1층", "있음 (가격 미확인)", "있음", "11:00~23:00 · 58석"],
        ["<b>ピエトロ</b> 피에트로 (파스타)", "노스빌 지하1층", "있음 · 파스타+피자·디저트 플레이트", "있음", "11:00~22:00(금·토 23:00) · 64석"],
        ["<b>電光石火</b> 덴코셋카 (오코노미야키)", "노스빌 지하1층", "아이들이 많이 먹는 메뉴: 치즈 오믈렛 650엔, 야키소바 880엔, 명란 야키우동 980엔", "미확인", "11:00~23:00 · 소파석·개인실, 넷 예약 불가"],
        ["<b>Eggs 'n Things</b> 에그스앤띵스", "이스트빌 2층 (9/4 오픈)", "키즈 팬케이크·로코모코 830엔(초등생 이하)", "있음", "9:00~21:00 · 58석, 오픈 한 달이라 대기 가능"],
        ["<b>しゃぶ葉</b> 샤부요 (샤부샤부 뷔페)", "센터워크 4층", "<b>유아 무료</b>, 카레우동 있음", "있음", "주말 10:30~23:00 · 이유식 반입 OK, 유모차 맡아 줌 · 124석"],
        ["<b>うまや</b> 우마야 (정식)", "센터워크 4층", "있음 (가격 미확인)", "공식 표기 없음", "<b>유모차째 입장 OK</b> · 좌식 24석 · 넷 예약 가능"],
        ["<b>サイゼリヤ</b> 사이제리야", "노스빌 1층", "공식 페이지엔 있음(체인 키즈세트 종료 보도가 있어 미확인)", "있음", "10:00~23:00 · 144석 · 가장 저렴"],
        ["<b>ラーメンスタジアム</b> 라멘 스타디움", "센터워크 5층", "「錦」 키즈메뉴+아기의자, 「たいそん」「チャーシュードリーム」 키즈메뉴", "「錦」「札幌みその」 있음", "11:00~23:00"]
      ],
      note: "‘키즈메뉴·아기의자’는 캐널시티 공식 매장 페이지 아이콘 기준이에요. 아이가 우동을 원하면 샤부요 카레우동이나 덴코셋카 명란 야키우동, 또는 하카타역 くうてん 와핫치(<a href=\"#udon\">우동집</a>). 가볍게는 지하1층 맥도날드·스타벅스(둘 다 키즈메뉴·아기의자)와 미스터도넛(이스트 1층)." },

    { type: "facts", title: "아기랑 둘러볼 곳",
      rows: [
        ["캐릭터숍 (10:00~21:00)", "센터워크 지하1층에 <b>울트라맨 월드 M78</b>(후쿠오카 유일 공식숍), <b>산리오 갤러리</b>(입구에 대형 키티), <b>どんぐり共和国</b>(지브리), 짱구 스토어, 점프숍. 사우스 지하1층 반다이남코 크로스 스토어(매장 안에 수유실)."],
        ["디즈니 스토어", "센터워크 2층 남쪽. 성 콘셉트 매장으로 일본에 3곳뿐인 디자인."],
        ["그 밖에", "사우스 1층 THE GUNDAM BASE, 4층 EVERYTHING MINECRAFT."],
        ["아동복", "Gap·GapKids(사우스 1층, 유모차째 들어가는 탈의실·색칠 코너), 무인양품(노스 3·4층), GLOBAL WORK·coca·LAKOLE(이스트 2·3층)."],
        ["키즈카페", "<a href=\"#kidsplay\">스키즈 가든</a>(비즈니스센터 지하1층, 10~21시, 아이 30분 800엔·주말 보호자 500엔)."],
        ["유모차 · 수유실", "유모차 무료 대여(생후 1개월~만 3세, 10:00~20:30, 센터워크 1층 종합안내소). 수유실은 노스빌 지하1층(개인실·온수·어린이 화장실)이 가장 좋아요. 베이비시트 있는 화장실은 노스빌 엘리베이터홀 쪽에 몰려 있어요."],
        ["지금은 없는 곳", "포켓몬, 햄리스, 보네룬드, 토미카·플라레일 카페는 2026년 공식 매장 목록에 없어요. 무민숍은 10/28 오픈이라 이번엔 못 가요."]
      ] },

    { type: "timeline", anchor: "route", title: "10/10(토) 16:00~18:30 추천 동선",
      items: [
        { time: "15:45", title: "숙소 출발 (도보 5~10분)", html: "<p>센터워크 1층 종합안내소에서 유모차 빌리기(필요하면)</p>" },
        { time: "16:00", title: "분수쇼 · 1층 난간에서", html: "<p>같은 시간 지하1층 스테이지 미니라이브로 붐벼요.</p>", tone: "warn" },
        { time: "16:15", title: "센터워크 지하1층 캐릭터숍", html: "<p>울트라맨·산리오·지브리</p>" },
        { time: "16:45", title: "노스빌 지하1층 수유실에서 기저귀" },
        { time: "17:00", title: "분수쇼 (라이브 끝났으면 지하1층 스테이지 정면)" },
        { time: "17:15", title: "저녁", html: "<p>예약한 모츠나베 이치후지(17:00, 숙소 쪽 도보 5분)로 가거나, 캐널시티 안에서 먹는다면 노스빌 지하1층 사보텐·피에트로(같은 층에 수유실), 유아 무료 샤부요(4층). 주말 대기는 미확인이라 17시대 초반 입장 권장.</p>" },
        { time: "18:30", title: "야간 분수 한 편 보고 귀가" }
      ],
      note: "이치후지를 10/10 17:00에 예약했다면 캐널시티는 16:00~16:50으로 짧게 보고, 저녁 후 18:30 야간 분수를 보러 다시 들러도 돼요(걸어서 5~10분)." },

    { type: "text", title: "그 밖의 이벤트 (10/10~12)",
      html: `<ul>
<li><b>10/11(일)</b> 4층 극장 ‘ウルトラヒーローズ THE LIVE’ 11:00·14:30, 4,300엔, 2세 이하는 보호자 1명당 1명 무릎 관람 무료. 이날은 호빵맨·라라포트 일정이라 참고만.</li>
<li><b>10/12(월)</b> 14:00 스테이지 패션쇼. 가을 미각 페어 10/9~11/3. 관 전체 할로윈 행사는 10/9 기준 공식 목록에 없어요.</li></ul>` },

    { type: "gallery", title: "사진",
      images: [
        { src: "img/canal-dancing-fountain.jpg", caption: "캐널시티 분수쇼", credit: "OKJaguar · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Dancing_fountains,_Canal_City,_Fukuoka,_Japan.jpg" },
        { src: "img/canal-night.jpg", caption: "밤의 캐널시티", credit: "そらみみ · CC BY-SA 4.0", srcUrl: "https://commons.wikimedia.org/wiki/File:Canal_City_Hakata_at_night_20170929.jpg" },
        { src: "img/canal-fountain-schedule.jpg", caption: "분수쇼 일정 (8/31~10/16)", credit: "canalcity.co.jp 캡처", srcUrl: "https://canalcity.co.jp/event/detail/40" }
      ] },

    { type: "phrases", title: "캐널시티에서",
      items: [
        { ko: "키즈메뉴 있나요?", jp: "お子様メニューはありますか？", pron: "오코사마 메뉴-와 아리마스카?" },
        { ko: "유모차 그대로 들어가도 되나요?", jp: "ベビーカーのまま入れますか？", pron: "베비-카-노 마마 하이레마스카?" },
        { ko: "몇 분 기다려요?", jp: "何分待ちですか？", pron: "난푼 마치데스카?" },
        { ko: "유모차를 빌리고 싶어요.", jp: "ベビーカーを借りたいです。", pron: "베비-카-오 카리타이데스." }
      ] }
  ],
  sources: [
    { label: "캐널시티 · 분수쇼 일정", url: "https://canalcity.co.jp/event/detail/40" },
    { label: "캐널시티 · 서비스(유모차·수유실)", url: "https://canalcity.co.jp/service/" },
    { label: "캐널시티 · 노스빌 2층 화장실 공사 안내", url: "https://canalcity.co.jp/information/detail/61" },
    { label: "캐널시티 · 10/10 스테이지 미니라이브", url: "https://canalcity.co.jp/event/detail/215" },
    { label: "캐널시티 · 울트라히어로즈 THE LIVE", url: "https://canalcity.co.jp/theater/detail/40" },
    { label: "캐널시티 · 10/12 패션쇼", url: "https://canalcity.co.jp/event/detail/191" },
    { label: "캐널시티 · 한국 간편결제 할인", url: "https://canalcity.co.jp/event/detail/150" },
    { label: "캐널시티 · 가을 미각 페어", url: "https://canalcity.co.jp/special/detail/autumnfair" },
    { label: "캐널시티 · 매장 카테고리", url: "https://canalcity.co.jp/shopsearch/category" },
    { label: "캐널시티 · とんかつ新宿さぼてん", url: "https://canalcity.co.jp/shop/detail/10500502" },
    { label: "캐널시티 · ピエトロ", url: "https://canalcity.co.jp/shop/detail/10500101" },
    { label: "Hot Pepper · 電光石火", url: "https://www.hotpepper.jp/strJ001265890/food/" },
    { label: "Eggs 'n Things · 博多", url: "https://www.eggsnthingsjapan.com/hakata" },
    { label: "Eggs 'n Things · 키즈메뉴 (PDF)", url: "https://www.eggsnthingsjapan.com/wp-content/uploads/kidsmenu.pdf" },
    { label: "しゃぶ葉 · 아이 동반 안내", url: "https://www.skylark.co.jp/en/syabuyo/child/" },
    { label: "캐널시티 · しゃぶ葉", url: "https://canalcity.co.jp/shop/detail/10440504" },
    { label: "Hot Pepper · うまや (유모차 입장)", url: "https://www.hotpepper.jp/strJ000553636/" },
    { label: "캐널시티 · サイゼリヤ", url: "https://canalcity.co.jp/shop/detail/10510001" },
    { label: "캐널시티 · ラーメンスタジアム 錦", url: "https://canalcity.co.jp/shop/detail/10750214" },
    { label: "캐널시티 · 무민숍 (10/28 오픈)", url: "https://canalcity.co.jp/shop/detail/opashop0089" }
  ]
});
