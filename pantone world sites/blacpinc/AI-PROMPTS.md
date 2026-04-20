# BLAC PINC — AI prompts · статус

Станом на 2026-04-20. Для кожного фото:
- ✅ згенеровано і лежить у правильному місці
- ❌ ще треба згенерити

Всі промпти оптимізовано під Midjourney / Nano Banana / FLUX / Gemini з негативними директивами проти рандомних облич.

---

## 1. SHOP (`assets/shop/`)

| Файл | Статус |
|---|---|
| `absolute-zero-box.png` | ✅ |
| `ceramic-mug.png` | ✅ |
| `fancard-set.png` | ✅ |
| `keyring-set.png` | ✅ |
| `tote-bag.png` | ✅ |
| `tour-longsleeve.png` | ✅ |
| `tour-tee-white.png` | ✅ |
| `hwaza-debut-pack.jpg` | ❌ **треба** |
| `tour-hoodie.jpg` | ❌ **треба** |

### ❌ `hwaza-debut-pack.jpg` (1200×1200)
```
Product flat-lay photography of a K-pop debut bundle.
Contents visible:
  — 1 photobook lying face-up with an ABSTRACT TYPOGRAPHIC COVER — Warm Rose
    (#ff78b4) solid background, large "HWAZA" text in bold Syne typography,
    small Korean "화자" in italic below, tiny Pantone chip. NO FACE on cover,
    NO PHOTO of a person.
  — 1 round hand mirror with engraved text "4TH MEMBER · 2026"
  — a stack of 8 fancards showing only abstract pink gradients (no faces),
    fanned out
  — a folded piece of translucent tissue paper with hot pink tour logo stamp
All items arranged on matte black surface, shot from directly above,
warm studio lighting, Saint Laurent Rive Droite stationery aesthetic,
minimalist composition, 1:1 square, 1200x1200.
Negative: no people, no faces, no portraits of humans.
```

### ❌ `tour-hoodie.jpg` (1200×1200)
```
Oversized black hoodie product shot, front print "PINK VENOM²" in bold Syne typeface,
hot pink (#ff2c7a) puff ink print, Saint Laurent tag on the hem, laid flat on matte
black surface, soft shadow, K-pop merch photography, minimalist composition,
centered, 1:1, 1200x1200.
Negative: no people, no faces, no mannequin.
```

---

## 2. HERO + SOCIAL (`assets/`)

| Файл | Статус |
|---|---|
| `hero.png` | ✅ (посилання в CSS оновлено на .png) |
| `og.jpg` (1200×630 social share) | ❌ опційно |

### ❌ `og.jpg` (опційно, для соц-шерінга)
```
Social media banner: huge bold white text "BLAC PINC" in Syne typography
on pure black background, a single hot pink (#ff2c7a) dot after the name,
subtle Korean characters "블랙핑크" in italic below in dark grey, minimalist,
1200x630.
Negative: no people, no photographs.
```

---

## 3. VIDEOS (`assets/videos/`)

| Файл | Статус |
|---|---|
| `mv-pinkvenom2.png` | ✅ |
| `dance-practice.png` | ✅ |
| `jisue-concept.png` | ✅ |
| `tokyo-recap.png` | ✅ |
| `rozay-vlog.png` | ✅ |
| `jenie-behind.jpg` | ❌ **треба** |

### ❌ `jenie-behind.jpg` (1600×900)

**Варіант A — з character reference (якщо завантажиш `assets/members/jenie.jpg` як референс):**
```
Behind-the-scenes documentary still using the uploaded reference image as character identity.
The SAME woman from the reference sits backstage in total black outfit,
hair in a high ponytail, applying hot pink lipstick in a handheld mirror.
Warm tungsten backstage lighting, monitors and rack of costumes blurred behind her.
35mm documentary photography, wide 16:9, 1600x900.
Preserve exact facial features of the reference.
```

**Варіант B — БЕЗ людей (stilllife backstage, гарантовано працює):**
```
K-pop backstage behind-the-scenes still life, NO PEOPLE, NO FIGURES.
Open vanity table: a handheld mirror laying face-up, hot pink lipstick uncapped,
empty chair with a black bomber jacket thrown over the backrest, a coffee cup,
earpiece on the table, monitors with scrolling setlist blurred in background.
Warm tungsten backstage lighting. Documentary 35mm, wide 16:9, 1600x900.
Negative: no people, no figures, no hands, no humans.
```

---

## 4. ALBUM (`assets/album/`)

| Файл | Статус |
|---|---|
| `pink-venom-2-cover.jpg` | ✅ |

---

## 5. PHOTOBOOK (`assets/photobook/`)

| Файл | Статус |
|---|---|
| `a.png` — JISUE cover | ✅ |
| `b.png` — JENIE cover | ✅ (не використовується зараз, є як архів) |
| `c.png` — ROZAY cover | ✅ |
| `d.png` — LIZAH cover | ✅ |

---

## 6. MEMBERS (`assets/members/`)

| Файл | Статус |
|---|---|
| `hwaza.jpg` | ✅ |
| `jenie.jpg` | ✅ |
| `jisue.jpg` | ✅ |
| `lizah.jpg` | ✅ |
| `rozay.jpg` | ✅ |

---

## 7. TOUR (`assets/tour/`)

| Файл | Статус |
|---|---|
| `seoul.png` | ✅ |
| `tokyo.png` | ✅ |
| `paris.png` | ✅ |

*Не використовуються в HTML зараз, але є як матеріал для майбутніх tour-карток.*

---

## 8. NEWS (`assets/news/`)

| Файл | Статус |
|---|---|
| `preorder.png` | ✅ |
| `paris-waiver.png` | ✅ |
| `photobook.png` | ✅ |

*Не використовуються в HTML зараз, але є як матеріал для тизерів на news-сторінці.*

---

## ПІДСУМОК · залишилося згенерити

Усі shop / videos / hero ✅ зроблені.

**Опційно:**
- `assets/og.jpg` (1200×630) — соц-шерінг

Після генерації просто кинь файл у ту папку з тим іменем — HTML вже налаштований.
