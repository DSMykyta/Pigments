# AI-PROMPTS · Spectrum-Ball / FISB site photos

Єдиний довідник промптів для генерації всіх зображень, що потрібні на сайті `pigment-sport/`. Кожен промпт написаний як готовий текст для вставки у Midjourney / Flux / Stable Diffusion / DALL-E.

---

## GLOBAL STYLE GUIDE (застосовується до всіх фото)

**Якщо генератор підтримує глобальні налаштування — встановити ці параметри:**

- **Style:** photojournalism, sports photography, high detail, Canon R5 50mm f/1.4, natural lighting
- **Mood:** epic, cinematic, high-stakes professional sport
- **No text overlays** в самому зображенні (усі тексти додаємо в HTML поверх)
- **Avoid:** cartoon, anime, 3D render look, CGI, uncanny faces, text in image, watermarks, artifacts

**Референс матчу:** `assets/TokyoOni-VS-LAPhenix.png` — стиль усіх матчевих фото має бути в тому ж напрямку: реалістична спортивна фотографія, вечірнє освітлення арени, глядачі на фоні не в фокусі, LED-панелі з брендингом арени.

---

## 🏀 HANDSPORTS — основні візуальні деталі (важливо!)

**Форма гравців** (схожа на баскетбольну):
- Безрукавка-джерсі кольору команди, з номером гравця спереду і ззаду
- Короткі шорти кольору команди
- Низькі кросівки (на зразок баскетбольних)

**Критична деталь — КОМПРЕСІЙНІ РУКАВА:**
Кожен гравець носить компресійні рукава на обох руках (від плеча до зап'ястка). **Колір рукавів = колір Hue-ролі гравця**, а НЕ команди:

| Позиція | Hue | Колір рукавів |
|---|---|---|
| **Strike** | H 0° (Attack) | яскраво-червоний `#cc3b2a` |
| **Mend** | H 30° (Flesh) | оранжевий `#e08a3a` |
| **Pulse** | H 60° (Influence) | жовтий `#d4a820` |
| **Read** | H 120° (Mind) | зелений `#2a8a3a` |
| **Rush** | H 240° (Move) | синій `#2a6aa8` |
| **Shift** | H 300° (Change) | фіолетовий `#6a3a8a` |
| **Hold** | Grey | нейтральний сірий `#7a7a76` |

Це дозволяє ідентифікувати позицію гравця на полі одразу.

**Поле/корт:** нейтральний паркет (не кольоровий), два баскетбольні кошики висотою 3м, арена схожа на баскетбольну.

**М'яч:** гладкий, матовий, білий або металік, ~22 см у діаметрі (трохи більший за баскетбольний).

---

## 📋 ФОТО #1 · HERO MAIN (✅ вже є)

**Файл:** `assets/TokyoOni-VS-LAPhenix.png` ✅
**Використовується на:** `pigment-sport.html` (hero)

Існуюче фото. Референс для всіх інших матчевих фото.

---

## 📋 ФОТО #2 · HERO SIDE "NEXT UP"

**Файл:** `assets/hero-next-up.png`
**Розмір:** 800×450 (16:9)
**Використовується на:** `pigment-sport.html` (hero side card "Next Up")

**Prompt:**
```
Dramatic close-up of a Spectrum-Ball player in burgundy Tokyo Oni jersey with gold oni-mask patterns, jersey number 14 visible, green compression sleeves on both arms (he plays Read position, H 120° Mind domain), holding a white matte ball in right hand, looking intensely at the camera from the side. Background: blurred sold-out Tokyo Arena at night, LED ring lights reflecting off the polished hardwood court. Moody cinematic lighting, teal and burgundy color grading, shallow depth of field. Shot style: NBA player portrait for game preview. No text, no watermarks. Photojournalistic realism, Canon R5 50mm.
```

---

## 📋 ФОТО #3 · HERO SIDE "PLAY ZONE INTRO"

**Файл:** `assets/hero-playzone.png`
**Розмір:** 800×450 (16:9)

**Prompt:**
```
Birds-eye view of a Spectrum-Ball court mid-game, 14 players (7 vs 7) visible from above on neutral wooden hardwood court 40m x 20m with two baskets on either end, 6-meter three-point arc painted white. Players wearing jerseys of two opposing teams (one in burgundy-gold, other in green-yellow), each player has differently-colored compression sleeves visible — some red, some orange, some blue, some green, some purple, some grey — denoting their positions. A small neutral Mend-zone 2x2 meters behind each basket. Wide aerial angle, cinematic, natural arena lighting from above. No text. Photojournalistic style.
```

---

## 📋 ФОТО #4-7 · TOP STORIES (4 фото)

**Файли:** `assets/news/story-1.png` ... `story-4.png`
**Розмір:** 1200×675 (16:9), big; `1000×625` (16:10) small
**Використовується на:** `pigment-sport.html` (top stories grid)

### Story 1 (big) — "Перша перемога Madrid Matadors у Tokyo Dome"
```
Wide shot of Madrid Matadors team celebrating after surprise victory on Tokyo Arena court. Four players wearing red-and-black jerseys with bull-horn crest, hugging near center court, one of them (Strike position, red compression sleeves) hoisting the white matte Spectrum-Ball ball overhead. Behind them, Tokyo Oni players in burgundy jerseys walking away dejected. Sold-out arena crowd blurred in background with Tokyo Arena LED ring. Evening lighting, cinematic, confetti just starting to fall. Photojournalism style, no text.
```

### Story 2 — "Oni вирвали овертайм у Shanghai Royals"
```
Slow-motion freeze: Tokyo Oni Strike player (burgundy jersey #14, red compression sleeves) mid-air releasing a three-point shot at the buzzer. Defender from Shanghai Royals (purple jersey, blue compression sleeves — Rush position) arriving a split-second too late with hand outstretched. Arena clock in background shows 00:00.4. Dramatic overhead LED lighting, motion blur on defender. Photojournalism, Tokyo Arena setting. No text.
```

### Story 3 — "LA Photons шукають Rush на сезон 2027"
```
LA Photons head coach Marcus Reid in green-yellow team polo, early 50s, mixed-race American, standing on court during warmup, arms crossed, studying a clipboard. Two Photons players in background stretching in green-yellow jerseys with blue compression sleeves (Rush position). Crypto.com Arena LA, practice session, overhead lighting, daylight filtering from above. Candid documentary style photograph. No text.
```

### Story 4 — "Taipei Sun — штраф за Tier 3 у резерві"
```
Empty yellow Taipei Sun team bench at a Spectrum-Ball arena, overhead official PMS-certified spectrograph (a console-like device with a colored lens array) pointing at one of the jerseys draped over a chair. A dark-suited FISB official with clipboard standing nearby, taking notes. Mood: investigative, serious. Overhead arena lights dimmed. Cinematic side angle, desaturated palette. No text.
```

---

## 📋 ФОТО #8-10 · INSIDE FISB (3 фото)

**Файли:** `assets/inside/fisb-1.png`, `fisb-2.png`, `fisb-3.png`
**Розмір:** 900×600 (3:2)

### Inside 1 — "Як FISB став офіційним з 2024"
```
Exterior shot of FISB headquarters building in Tokyo, modern glass façade with large black FISB logo, sunset golden hour lighting, slight upward angle, people in business attire walking in/out of entrance. Architecture: Scandinavian minimalism meets Japanese precision, three stories, concrete and glass. Photojournalism style. No text.
```

### Inside 2 — "PMS × FISB: спільний протокол спектрографії"
```
Pantone Matching System lab interior: sterile white room, a professional spectrograph device (large console with color lens array) with a Spectrum-Ball player jersey laid flat on scanning bed. PMS technician in white lab coat with Pantone logo, adjusting the scanner. Monitor showing HSV color readout on wall. Clinical blue lighting. Photojournalism, editorial magazine quality. No text.
```

### Inside 3 — "Жінки і чоловіки в одній лізі"
```
Mixed-gender Spectrum-Ball team group portrait on court at Tokyo Arena, 7 players standing in a line, 4 men and 3 women, all wearing same team jerseys (burgundy Tokyo Oni), different compression sleeve colors for different positions (red, orange, yellow, green, blue, purple, grey sleeves — one each). Confident posed portrait, looking at camera, slight lean. Arena lights behind them as soft bokeh. Epic team photo mood. Photojournalism. No text.
```

---

## 📋 ФОТО #11-18 · TEAM CRESTS (8 команд)

**Файли:** `assets/teams/tokyo-oni-crest.png`, `osaka-flame-crest.png`, etc.
**Розмір:** 512×512 (1:1), transparent PNG бажано
**Стиль:** vector-style logo, bold flat design, sports crest

### 11. Tokyo Oni 🇯🇵
**File:** `assets/teams/tokyo-oni-crest.png`
```
Sports team logo: stylized Japanese Oni (demon) mask in profile, three-quarter view, roaring mouth with fangs, single horn, deep burgundy (#cc3b2a) with gold (#d4a820) trim outline, on white background. Minimalist vector design, thick clean lines, flat colors, inspired by NBA team crest style meets Japanese traditional mask. No text. Center composition.
```

### 12. Osaka Flame 🇯🇵
**File:** `assets/teams/osaka-flame-crest.png`
```
Sports team logo: stylized roaring flame with a kanji "炎" (flame) hidden in its curves, orange-red gradient (#e08a3a to #cc3b2a) on white background. Vector-style flat logo, sharp edges, dynamic upward motion, NBA-style team crest design. No text. (1:1)
```

### 13. Shanghai Royals 🇨🇳
**File:** `assets/teams/shanghai-royals-crest.png`
```
Sports team logo: stylized imperial Chinese dragon coiling around a crown, royal purple (#6a3a8a) with gold trim, on white background. Vector flat design, regal, aggressive stance, NBA-style team crest. No text. (1:1)
```

### 14. Taipei Sun 🇹🇼
**File:** `assets/teams/taipei-sun-crest.png`
```
Sports team logo: stylized sun disc with eight radiating rays (ref Taiwan flag sun), bright gold (#d4a820) with black outline, on white background. Vector minimalist design, geometric precision, NBA-style team crest. No text. (1:1)
```

### 15. Bangkok Prisms 🇹🇭
**File:** `assets/teams/bangkok-prisms-crest.png`
```
Sports team logo: stylized triangular prism splitting light into rainbow, the prism body in deep green (#2a8a3a), rainbow beam emerging bright. Vector flat design with clear refraction, NBA-style team crest. On white background. No text. (1:1)
```

### 16. Berlin Kollektiv 🇩🇪
**File:** `assets/teams/berlin-kollektiv-crest.png`
```
Sports team logo: stylized Brandenburg Gate silhouette in bold geometric style, with a violet (#6a3a8a) Spectrum-Ball ball over the top, on white background. Vector minimalist flat design, industrial feel, NBA-style team crest. No text. (1:1)
```

### 17. LA Photons 🇺🇸
**File:** `assets/teams/la-photons-crest.png`
```
Sports team logo: stylized phoenix bird rising with wings spread, holding a white glowing ball in claws, bright green (#2a8a3a) and yellow (#d4a820) feathers, on white background. Vector flat design, dynamic pose, NBA-style team crest. No text. (1:1)
```

### 18. Madrid Matadors 🇪🇸
**File:** `assets/teams/madrid-matadors-crest.png`
```
Sports team logo: stylized matador cape (muleta) forming a red wave around a stylized bull silhouette, bright red (#cc3b2a) with black accents, on white background. Vector flat design, Spanish art deco influence, NBA-style team crest. No text. (1:1)
```

---

## 📋 ФОТО #19-26 · TEAM ROSTER GROUP PHOTOS (8 команд)

**Файли:** `assets/teams/tokyo-oni-group.png` etc.
**Розмір:** 1200×900 (4:3)
**Використовується на:** сторінках команд

### 19. Tokyo Oni group
**File:** `assets/teams/tokyo-oni-group.png`
```
Tokyo Oni team roster group photo at Tokyo Arena: 12 players standing and kneeling in NBA-style team photo arrangement, all in burgundy-gold jerseys with Tokyo Oni oni-mask crest. Each player has different compression sleeve colors by position: one player in red sleeves (Strike, jersey #14), one in orange (Mend), one in yellow (Pulse), one in green (Read, captain, #7), one in blue (Rush), one in purple (Shift), one in grey (Hold, goalkeeper, #0). Bench players behind them. Head coach Ryō Nakashima, 50s Japanese man in burgundy polo, standing in center. Studio-lit team photo, professional sports photography, proud confident poses. No text. (4:3)
```

(Повторіть подібний шаблон для кожної з 7 інших команд, замінюючи кольори форми і деталі.)

---

## 📋 ФОТО #27-33 · PLAYER PORTRAITS (7 стартових Tokyo Oni)

**Файли:** `assets/players/tokyo-oni-[position].png`
**Розмір:** 800×1000 (4:5), portrait
**Використовується на:** team page player cards + player detail pages

### 27. Nobuaki Saito · Strike (#14, H 2°)
**File:** `assets/players/nobuaki-saito.png`
```
Dramatic low-angle portrait of 22-year-old Japanese male Spectrum-Ball player, tall 188cm athletic build, short black hair, serious focused expression looking slightly off-camera. Wearing Tokyo Oni burgundy sleeveless jersey with "14" in gold, bright red compression sleeves on both arms (Strike / Attack position). Holding a white Spectrum-Ball ball under one arm. Background: dark arena with burgundy team-color studio gradient. Professional sports photography, NBA player portrait style, cut-out ready with transparent-friendly background. No text. Strong rim lighting, dramatic shadows.
```

### 28. Yui Okamura · Mend (#12, H 34°)
**File:** `assets/players/yui-okamura.png`
```
Dramatic low-angle portrait of 28-year-old Japanese woman Spectrum-Ball player, 172cm lean athletic build, dark shoulder-length hair tied back, serious focused expression looking slightly off-camera. Wearing Tokyo Oni burgundy sleeveless jersey with "12" in gold, orange compression sleeves on both arms (Mend / Flesh position). Holding a white Spectrum-Ball ball under one arm. Background: dark arena with burgundy team-color studio gradient. Professional sports photography, NBA player portrait style, cut-out ready with transparent-friendly background. No text. Strong rim lighting, dramatic shadows.
```

### 29. Kenta Mori · Pulse (#21, H 58°)
**File:** `assets/players/kenta-mori.png`
```
Dramatic low-angle portrait of 26-year-old Japanese male Spectrum-Ball player, 180cm athletic build, short dark hair, serious focused expression looking slightly off-camera. Wearing Tokyo Oni burgundy sleeveless jersey with "21" in gold, yellow compression sleeves on both arms (Pulse / Influence position). Holding a white Spectrum-Ball ball under one arm. Background: dark arena with burgundy team-color studio gradient. Professional sports photography, NBA player portrait style, cut-out ready with transparent-friendly background. No text. Strong rim lighting, dramatic shadows.
```

### 30. Ryō Nakashima · Read · Captain (#7, H 118°)
**File:** `assets/players/ryo-nakashima.png`
```
Dramatic low-angle portrait of 31-year-old Japanese male Spectrum-Ball player, 183cm athletic build, short dark hair with slight gray at temples, serious focused expression looking slightly off-camera. Wearing Tokyo Oni burgundy sleeveless jersey with "7" in gold and a small captain "C" patch on left chest, green compression sleeves on both arms (Read / Mind position). Holding a white Spectrum-Ball ball under one arm. Background: dark arena with burgundy team-color studio gradient. Professional sports photography, NBA player portrait style, cut-out ready with transparent-friendly background. No text. Strong rim lighting, dramatic shadows.
```

### 31. Mei Tachibana · Rush (#11, H 242°)
**File:** `assets/players/mei-tachibana.png`
```
Dramatic low-angle portrait of 24-year-old Japanese woman Spectrum-Ball player, 168cm lean fast build, short athletic haircut, serious focused expression looking slightly off-camera. Wearing Tokyo Oni burgundy sleeveless jersey with "11" in gold, blue compression sleeves on both arms (Rush / Movement position). Holding a white Spectrum-Ball ball under one arm. Background: dark arena with burgundy team-color studio gradient. Professional sports photography, NBA player portrait style, cut-out ready with transparent-friendly background. No text. Strong rim lighting, dramatic shadows.
```

### 32. Takumi Ueda · Shift (#2, H 298°)
**File:** `assets/players/takumi-ueda.png`
```
Dramatic low-angle portrait of 25-year-old Japanese male Spectrum-Ball player, 181cm athletic build, spiked dark hair, serious focused expression looking slightly off-camera. Wearing Tokyo Oni burgundy sleeveless jersey with "2" in gold, purple compression sleeves on both arms (Shift / Change position). Holding a white Spectrum-Ball ball under one arm. Background: dark arena with burgundy team-color studio gradient. Professional sports photography, NBA player portrait style, cut-out ready with transparent-friendly background. No text. Strong rim lighting, dramatic shadows.
```

### 33. Hana Inoue · Hold · Goalkeeper (#0, H grey)
**File:** `assets/players/hana-inoue.png`
```
Dramatic low-angle portrait of 27-year-old Japanese woman Spectrum-Ball player, 178cm tall powerful build, tight athletic hair bun, serious focused expression looking slightly off-camera. Wearing Tokyo Oni burgundy sleeveless jersey with "0" in gold, neutral grey compression sleeves on both arms (Hold / Grey goalkeeper). Holding a white Spectrum-Ball ball under one arm. Background: dark arena with burgundy team-color studio gradient. Professional sports photography, NBA player portrait style, cut-out ready with transparent-friendly background. No text. Strong rim lighting, dramatic shadows.
```

### 33b. Daichi Kurosawa · Bench Strike (#23, H 355°) — rising star, 18
**File:** `assets/players/daichi-kurosawa.png`
```
Dramatic low-angle portrait of 18-year-old Japanese male Spectrum-Ball player rising-star rookie, 184cm lean athletic build, messy dark hair, serious focused expression looking slightly off-camera. Wearing Tokyo Oni burgundy sleeveless jersey with "23" in gold, bright red compression sleeves on both arms (Bench Strike / Attack position). Holding a white Spectrum-Ball ball under one arm. Background: dark arena with burgundy team-color studio gradient. Professional sports photography, NBA player portrait style, cut-out ready with transparent-friendly background. No text. Strong rim lighting, dramatic shadows.
```

---

## 📋 ФОТО #34-41 · ARENAS (8 команд)

**Файли:** `assets/arenas/tokyo-arena.png` etc.
**Розмір:** 1200×800 (3:2)

### 34. Tokyo Arena
**File:** `assets/arenas/tokyo-arena.png`
```
Exterior dusk shot of Tokyo Arena, modern glass-and-steel architecture, circular geometry, giant LED screens displaying "TOKYO ONI" in Japanese, lit from within, crowd entering for evening game, Tokyo skyline in background. Wide-angle photojournalism. No text overlays.
```

### 35. Kyocera Dome (Osaka Flame)
**File:** `assets/arenas/kyocera-dome.png`
```
Exterior of Kyocera Dome Osaka at sunset, iconic dome architecture, warm orange light catching the roof, flame-orange banners outside for Osaka Flame home game. Wide-angle architectural photo. No text overlays.
```

### 36. Pudong Arena (Shanghai Royals)
**File:** `assets/arenas/pudong-arena.png`
```
Exterior night shot of Pudong Arena Shanghai, futuristic glass-tower architecture with curved facade, royal purple LED lighting wrapping the building, Shanghai Pudong skyline with Oriental Pearl Tower reflected in the glass. Crowd entering for evening Shanghai Royals game. Wide-angle architectural photo. No text overlays.
```

### 37. Taipei Arena (Taipei Sun)
**File:** `assets/arenas/taipei-arena.png`
```
Exterior evening shot of Taipei Arena, iconic circular geometry with white concrete ribs, bright gold-yellow LED banners for Taipei Sun home game lit against the Taipei city skyline with Taipei 101 tower in background, scooters parked nearby. Wide-angle architectural photo. No text overlays.
```

### 38. IMPACT Arena (Bangkok Prisms)
**File:** `assets/arenas/impact-arena.png`
```
Exterior sunset shot of IMPACT Arena Bangkok, modern geometric architecture with slanted glass roof, deep-green prism-pattern LED banners for Bangkok Prisms home game, tropical palm trees framing the entrance, humid golden-hour atmosphere. Wide-angle architectural photo. No text overlays.
```

### 39. Mercedes-Benz Arena Berlin (Berlin Kollektiv)
**File:** `assets/arenas/mercedes-arena-berlin.png`
```
Exterior night shot of Mercedes-Benz Arena Berlin, modern rounded-rectangular architecture with glass facade, violet LED lighting for Berlin Kollektiv home game, Spree river with city lights reflected in foreground water. Wide-angle architectural photo. No text overlays.
```

### 40. Crypto.com Arena (LA Photons)
**File:** `assets/arenas/crypto-arena-la.png`
```
Exterior dusk shot of Crypto.com Arena Los Angeles, iconic circular glass architecture, LA Downtown skyline in background, green-and-yellow phoenix banners for LA Photons home game, palm trees silhouetted against orange California sunset sky. Wide-angle architectural photo. No text overlays.
```

### 41. WiZink Center (Madrid Matadors)
**File:** `assets/arenas/wizink-center.png`
```
Exterior evening shot of WiZink Center Madrid, modern oval architecture with illuminated facade, red-and-black banners for Madrid Matadors home game, Madrid city lights in background, Spanish Mediterranean night atmosphere. Wide-angle architectural photo. No text overlays.
```

---

## 📋 ФОТО #42-46 · STORE PRODUCTS (5 товарів)

**Файли:** `assets/store/jersey-tokyo.png`, `jersey-la.png`, `ball.png`, `scarf.png`, `rulebook.png`
**Розмір:** 600×600 (1:1), product shot on clean background

### 42. Tokyo Oni home jersey
**File:** `assets/store/jersey-tokyo-oni.png`
```
Product photo: folded Tokyo Oni burgundy-and-gold sleeveless Spectrum-Ball jersey with "14" and "SAITO" printed in gold, oni-mask crest embroidered left chest, on clean light grey studio background. E-commerce product shot, centered composition, soft shadows. No text overlays beyond jersey print.
```

### 43. LA Photons away jersey
**File:** `assets/store/jersey-la-photons.png`
```
Product photo: folded LA Photons green-and-yellow sleeveless Spectrum-Ball jersey with "08" in yellow, phoenix crest embroidered left chest, on clean light grey studio background. E-commerce product shot. No text overlays.
```

### 44. FISB Official Ball 2026
**File:** `assets/store/fisb-ball.png`
```
Product photo: single white matte Spectrum-Ball ball, 22cm diameter, slightly larger than basketball, subtle FISB and Spectrum-Ball emboss on one panel, on clean white studio background with soft shadow. Hero product shot, centered. No text except ball emboss.
```

### 45. Spectrum Cup 2026 scarf
**File:** `assets/store/spectrum-cup-scarf.png`
```
Product photo: folded yellow Spectrum Cup 2026 fan scarf, knitted texture with six color bands (red, orange, yellow, green, blue, purple) at each end and "SPECTRUM CUP 2026" woven in center, on clean light grey studio background. Product catalog shot. No other text.
```

### 46. FISB Rulebook 2026 (hardcover)
**File:** `assets/store/fisb-rulebook.png`
```
Product photo: hardcover book from 3/4 angle, black cover with embossed FISB logo in green foil and "RULEBOOK 2026" below, on clean light grey studio background. Editorial product shot, soft directional lighting. No additional text.
```

---

## 📋 ФОТО #27A-33C · CINEMATIC ACTION SHOTS 16:9 (8 гравців Tokyo Oni)

**Розмір:** 1600×900 (16:9)
**Формат:** кінематографічні ігрові фото, player page hero fallback + bio highlights
**Локація (однакова для всіх):** нейтральний темний студійний фон з кармазиновим градієнтом (як на портретах). Без арени, без трибун, без публіки, без LED-банерів.
**Стиль:** cinematic sports photography, shallow depth of field, motion-frozen key moment, Canon R5 85mm f/1.4, high dynamic range, Christopher Nolan sports-drama mood. All photos use the white matte Spectrum-Ball ball.

**Універсальний шаблон:** одиночне кадрове фото гравця у русі з білим Spectrum-Ball м'ячем, ніяких інших людей у кадрі (ні партнерів, ні суперників). Background: dark studio with burgundy team-color gradient, cut-out ready. Cinematic, shallow DOF.

### 27A. Nobuaki Saito · Strike — action 16:9
**File:** `assets/players/nobuaki-saito-action.png`
```
Cinematic wide shot 16:9 of 22-year-old Japanese Spectrum-Ball player Nobuaki Saito alone on the court, mid-air jumping for a three-point shot, right arm fully extended upward releasing the white Spectrum-Ball ball off his fingertips, left arm spread for balance, both legs bent back. Tokyo Oni burgundy-gold sleeveless jersey #14, bright red compression sleeves on both arms. Background: dark studio with burgundy team-color gradient, cut-out ready. Solo athlete, no other players visible. Frozen peak-action moment, dramatic rim lighting, shallow depth of field, cinematic color grade. No text. (16:9)
```

### 28A. Yui Okamura · Mend — action 16:9
**File:** `assets/players/yui-okamura-action.png`
```
Cinematic wide shot 16:9 of 28-year-old Japanese Spectrum-Ball player Yui Okamura alone on the court, crouched low in a quick side-step with the white Spectrum-Ball ball cradled in her right hand, left arm extended for balance, hair motion-blurred behind her. Tokyo Oni burgundy-gold sleeveless jersey #12, orange compression sleeves on both arms. Background: dark studio with burgundy team-color gradient, cut-out ready. Solo athlete, no other players visible. Dynamic mid-dribble moment, cinematic rim lighting, shallow depth of field. No text. (16:9)
```

### 29A. Kenta Mori · Pulse — action 16:9
**File:** `assets/players/kenta-mori-action.png`
```
Cinematic wide shot 16:9 of 26-year-old Japanese Spectrum-Ball player Kenta Mori alone on the court, feet planted in a wide balanced stance, both hands holding the white Spectrum-Ball ball at shoulder level as if preparing a long pass, head turned sideways. Tokyo Oni burgundy-gold sleeveless jersey #21, yellow compression sleeves on both arms. Background: dark studio with burgundy team-color gradient, cut-out ready. Solo athlete, no other players visible. Frozen pre-release moment, cinematic lighting, shallow depth of field. No text. (16:9)
```

### 30A. Ryō Nakashima · Read · Captain — action 16:9
**File:** `assets/players/ryo-nakashima-action.png`
```
Cinematic wide shot 16:9 of 31-year-old Japanese Spectrum-Ball captain Ryō Nakashima alone on the court, mid-stride with the white Spectrum-Ball ball tucked to his side, eyes scanning the empty arena as if reading a play. Tokyo Oni burgundy-gold sleeveless jersey #7 with captain "C" patch, green compression sleeves on both arms. Background: dark studio with burgundy team-color gradient, cut-out ready. Solo athlete, no other players visible. Commanding mid-motion, cinematic lighting, shallow depth of field. No text. (16:9)
```

### 31A. Mei Tachibana · Rush — action 16:9
**File:** `assets/players/mei-tachibana-action.png`
```
Cinematic wide shot 16:9 of 24-year-old Japanese Spectrum-Ball player Mei Tachibana alone on the court, sprinting full speed with the white Spectrum-Ball ball held close to her chest, knees high, hair blown back by motion. Tokyo Oni burgundy-gold sleeveless jersey #11, blue compression sleeves on both arms. Background: dark studio with burgundy team-color gradient, cut-out ready. Solo athlete, no other players visible. Motion-frozen action, cinematic lighting, shallow depth of field. No text. (16:9)
```

### 32A. Takumi Ueda · Shift — action 16:9
**File:** `assets/players/takumi-ueda-action.png`
```
Cinematic wide shot 16:9 of 25-year-old Japanese Spectrum-Ball player Takumi Ueda alone on the court, mid-crossover dribble, the white Spectrum-Ball ball low at his ankles bouncing through his legs, body angled sideways, slight mischievous smirk, one hand down guiding the ball. Tokyo Oni burgundy-gold sleeveless jersey #2, purple compression sleeves on both arms. Background: dark studio with burgundy team-color gradient, cut-out ready. Solo athlete, no other players visible. Kinetic action moment, cinematic lighting, shallow depth of field. No text. (16:9)
```

### 33A. Hana Inoue · Hold · Goalkeeper — action 16:9
**File:** `assets/players/hana-inoue-action.png`
```
Cinematic wide shot 16:9 of 27-year-old Japanese Spectrum-Ball goalkeeper Hana Inoue alone on the court in front of the basket, arms wide in defensive stance with knees slightly bent, reaching up on tiptoe to block the white Spectrum-Ball ball frozen in mid-air just inches from her outstretched fingertips. Tokyo Oni burgundy-gold sleeveless jersey #0, grey compression sleeves on both arms. Background: dark studio with burgundy team-color gradient, cut-out ready. Solo athlete, no other players visible. Commanding defensive pose, cinematic lighting, shallow depth of field. No text. (16:9)
```

### 33B. Daichi Kurosawa · Bench Strike (rising star, 18) — action 16:9
**File:** `assets/players/daichi-kurosawa-action.png`
```
Cinematic wide shot 16:9 of 18-year-old Japanese Spectrum-Ball rookie Daichi Kurosawa alone on the court, mid-sprint with the white Spectrum-Ball ball in his right hand, about to pull up for a jump shot. Raw explosive energy in his stride. Tokyo Oni burgundy-gold sleeveless jersey #23, bright red compression sleeves on both arms. Background: dark studio with burgundy team-color gradient, cut-out ready. Solo athlete, no other players visible. Rookie breakthrough moment, cinematic lighting, dynamic shallow depth of field. No text. (16:9)
```

---

## 📋 ФОТО #47 · ROSTER ACTION CUTOUT (для player.html)

**Файли:** `assets/players/nobuaki-action.png` (cut-out)
**Розмір:** 800×1000 (4:5), white background PNG

```
Dynamic action cut-out of 22-year-old Japanese male Spectrum-Ball player Nobuaki Saito mid-jump, releasing a three-point shot, right arm fully extended upward with white ball on fingertips, left arm spread for balance, legs bent mid-air. Wearing Tokyo Oni burgundy sleeveless jersey #14 in gold, red compression sleeves (Strike). Subtle red energy trail behind the ball (pigment activation). Silhouette-style cut-out with white background. Style: NBA player silhouette for team pages. Photojournalistic realism. No text.
```

---

## 📋 ФОТО #48-49 · HERO SIDE CARDS (2)

Див. #2 і #3 вище. Вже описано.

---

## 📝 ЗАГАЛЬНІ ПОРАДИ ПО ГЕНЕРАЦІЇ

1. **Не обмежуйтесь одним генератором** — для облич люди → Midjourney v6, для арен → Flux, для продуктів → DALL-E 3
2. **Для облич**: додайте `--style raw` у Midjourney і `realistic portrait` для уникнення уявленого "AI-look"
3. **Розміри**: можна згенерувати більше і кропнути в Photoshop — краще так, ніж стискати
4. **Збереження**: усі PNG без метадати (через `optipng` або Squoosh) для швидшого завантаження сайту
5. **Наіменування файлів**: строго як у `assets/*.png` у HTML — інакше зображення не відобразяться

---

## ✅ ЧЕКЛИСТ ФАЙЛІВ

- [x] `assets/TokyoOni-VS-LAPhenix.png` (hero main)
- [x] `assets/ThePhenix-VS-TheGriffen.png` (backup/alternate)
- [ ] `assets/hero-next-up.png`
- [ ] `assets/hero-playzone.png`
- [ ] `assets/news/story-1.png` ... `story-4.png`
- [ ] `assets/inside/fisb-1.png` ... `fisb-3.png`
- [ ] `assets/teams/<team>-crest.png` (8)
- [ ] `assets/teams/<team>-group.png` (8)
- [ ] `assets/players/tokyo-oni-<position>.png` (7 starters)
- [ ] `assets/players/nobuaki-action.png` (cut-out)
- [ ] `assets/arenas/<arena>.png` (8)
- [ ] `assets/store/jersey-tokyo.png`, `jersey-la.png`, `ball.png`, `scarf.png`, `rulebook.png`

**Всього потрібно згенерувати: ~48 зображень.**
