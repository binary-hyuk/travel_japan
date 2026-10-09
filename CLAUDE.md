# 작업 안내 (Claude용)

후쿠오카 가족여행 가이드. 정적 SPA이고 GitHub Pages(main 루트)로 배포돼요.

## 구조
- `index.html`: 엔진(렌더러·검색·해시 라우팅 `#섹션id--anchor`·체크리스트·서비스워커 등록). 내용 수정 때는 보통 건드릴 일 없음.
- `content.js`: 내용 전부(`window.GUIDE`). 홈 일정은 `GUIDE.trip.days`, 페이지는 `GUIDE.sections.push({ id, blocks: [...] })`, 여행 일본어는 `window.GUIDE.phrasebook`(JSON 배열).
- `tools/build.py`: `sw.js`(오프라인 캐시 버전)와 `dist/` 오프라인 zip 생성.

## 수정 → 배포
1. `content.js`를 고친다. 파일이 커서(2,600줄+) 필요한 부분만 정확히 바꾼다.
2. 검증: `node -e "const vm=require('vm');const c={};c.window=c;vm.createContext(c);vm.runInContext(require('fs').readFileSync('content.js','utf8'),c);console.log(c.GUIDE.sections.length)"`
3. `python tools/build.py` (꼭 실행. 안 하면 휴대폰 홈 화면 앱이 새 버전을 안 받음)
4. commit → `git push origin main` → Pages 자동 빌드(1~2분)
5. 가능하면 `gh release upload offline dist/fukuoka-guide-offline.zip --clobber --repo binary-hyuk/travel_japan` (gh 인증 없으면 생략)

## 지켜야 할 것
- 체크리스트 체크 상태는 항목의 **보이는 글자**로 저장돼요. 문구를 바꾸면 그 항목 체크가 풀리니 꼭 필요할 때만, 바꾸면 사용자에게 알려 주기. 링크만 감싸는 건 괜찮음.
- 일본어로만 된 식당·장소 이름엔 한국어(또는 영어)를 같이 적기. 식당엔 구글맵/타베로그 링크.
- 23개월 아기 동반: 버스·페리 제외, 마린월드는 택시 말고 JR.
- 사실 확인이 안 된 건 ‘미확인’으로 적기. 답은 한국어로.

## 현재 일정 (2026-10-10 기준)
- 10/10(토) 11:10 도착 → 오후 호빵맨 뮤지엄(리버레인, 도보/지하철) → 17:00 모츠나베 이치후지(예약) → 캐널시티 야간 쇼(선택)
- 10/11(일) 마린월드(JR, 가시이 환승)
- 10/12(월·공휴일) 라라포트 하루(10:00 장난감 미술관 예약 → 점심·낮잠·아카짱혼포 → 건담·미니 열차 → 15:30 키와미야)
- 10/13(화) 아침 우동 → 9:30 택시로 공항, 12:10 출발
- 10/11 비 예보(강수 50%+)면 10/11과 10/12만 맞바꿈. 호빵맨은 10/10 고정.
- 숙소: THE BLOSSOM HAKATA Premier(博多駅前2-8-12)
