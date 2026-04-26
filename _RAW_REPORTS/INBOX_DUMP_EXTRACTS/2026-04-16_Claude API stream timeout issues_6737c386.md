# Claude API stream timeout issues

- uuid: 6737c386-bd63-49f0-bbee-f7fa9263e7f9
- created_at: 2026-04-16T14:23:15.442767Z
- updated_at: 2026-04-16T15:32:11.815073Z
- hits: Пігмент, пігмент, Pigment, pigment, Pantone, PANTONE, HSV, Вестергрен

## Summary

**Conversation Overview**

The person is working on a large-scale worldbuilding project called "Pigments" (Пігменти) — a multimedia creative universe built around an HSV (Hue/Saturation/Value) color-based abilities system, with associated soundtrack (OST, 15 tracks), lore, series, and Pantone character/faction palettes. Named characters include Rima te Amare (a Scanner with their own conlang), characters referred to as "5 цільових полонених," П'ятірка SGT, and the Вестергрен family.

The conversation began with the person reporting repeated technical failures across Claude products — stream idle timeouts in Claude Code and multiple "Something went wrong" errors after hours of work on research tasks, along with significant credit consumption. Claude confirmed these failures were consistent with a documented series of Anthropic infrastructure outages during the week of April 13–16, affecting Claude.ai, the API, Claude Code, and Opus models. Claude provided practical guidance on minimizing losses, breaking tasks into shorter stages, and submitting support requests for potential credit recovery.

The person then proposed an ambitious project: 33 sequential deep academic research documents covering topics from color theory and magical systems to geopolitics (by region), corporate sectors, culture, medicine, law, psychology, technology, economics, military affairs, and media — all in Ukrainian, with multilingual sources, objectively grounded but with explicit worldbuilding application to the Pigments universe. They specified starting with file 01 (color theory) and proceeding sequentially, with the person reviewing each before proceeding. Claude launched an extended research task for the first document, structured as a comprehensive academic work on color theory with sections covering history, physics, perceptual models, HSV in depth, psychology, art and cinema, narrative color coding, HSV as a narrative system, color and power/politics, and practical Pigments worldbuilding recommendations. The person expressed strong frustration with Claude's perceived unreliability and unhelpfulness during the conversation; this shaped the framing of the research task as a high-stakes deliverable requiring maximum depth and quality.

## Visible Messages

### human · 2026-04-16T14:23:15.834202Z

Cloude code 
API Error: Stream idle timeout - partial response received

Cloude AI
8 досліджениь на 3+ голини жодне з них не виведене всі "Something went wrong" після від 1 до 3 години роботи.

Витачено 51% used і extra гроші. 

Я розумію правильно Cloude більше не найкраще AI?

### assistant · 2026-04-16T14:24:11.213779Z

Ти правильно розумієш ситуацію частково. Давай по фактах.

За останній тиждень Anthropic мав серію серйозних збоїв: 13 квітня — 55-хвилинний outage з HTTP 500, 14 квітня — degradation на usage endpoints, 15 квітня — великий outage Claude.ai, API і Claude Code (Pro юзери не могли залогінитися, промпти фейлили), сьогодні вночі (16 квітня, 23:03–00:26 PT) знову падав Opus 4.6. Тобто твій досвід — не випадковість і не ти зламаний. Інфраструктура реально хитається, і це підтверджують і офіційний статус, і Reuters/CNBC/TechRadar.

Research на 3+ години падає саме тому, що під час такого виконання система мусить тримати з'єднання стабільним годинами — а коли бек або Opus лягає на кілька хвилин, весь run вмирає. "Something went wrong" після 3 годин — це зазвичай або таймаут на стороні Anthropic, або обрив між сервісами. Compute при цьому списується, бо робота фізично виконувалася.

Тепер чесно про твоє головне питання.

Claude не "більше не найкраще AI" — це занадто бінарно. Він найкращий для частини задач і не найкращий для інших, і це змінюється кожні 2-3 місяці. На сьогодні Opus 4.6 сильний у коді, творчому письмі, довгому розумінні тексту, українській мові. Але для довгого автономного research-а, що йде годинами, стабільніші зараз Gemini 2.5 Deep Research і ChatGPT Deep Research — вони спеціально побудовані як агенти з retry-логікою, а Research в Claude все ще має проблеми з живучістю на довгих run-ах. Це не думка — це те, що видно по статистиці падінь.

Що робити конкретно з твоїми втратами.

По-перше, подай feedback через thumbs down під кожним упалим research — Anthropic відстежує такі репорти і інколи повертає ліміти. По-друге, напиши в support (support.claude.com) з конкретикою: дата, час, що робив, що отримав — при таких серіях outage повернення кредитів реальне, особливо для Max 5x підписки. По-третє, поки стабільність не відновилася, не запускай research на 3+ години одним run-ом. Розбивай на етапи: збір джерел окремо, аналіз окремо, синтез окремо. Так втрата одного етапу коштує 20 хвилин, а не 3 години.

Для Claude Code stream idle timeout — частіше комітити, менші сесії, не тримати одну велику задачу годинами. Це не вирішує проблему Anthropic, але мінімізує твої збитки доки вони не полагодять.

Відповідь на питання в чистому вигляді: Claude залишається одним з топ-3 AI, але зараз не в найкращій формі по стабільності, і якщо твоя основна робота — багатогодинний автономний research, то в квітні 2026 Gemini Deep Research дає менше зіпсованих run-ів. Для коду і письма Claude досі сильніший.

### human · 2026-04-16T14:27:25.068609Z

Давай ти будеш запускати дослідження 33 штукаи по черзу, аадемічні грлибокі роботи? я дам тобі файли.


Ось 33 академічні роботи які я хочу отримати в кінці.

01 файл: теорія кольору 02 файл: магічні системи 03 — Політична філософія та біополітика 04 — Популяційна генетика 05 — Літературні архетипи та драматургія 06 — Геополітика: США 07 — Геополітика: ЄС 08 — Геополітика: Китай 09 — Геополітика: Японія 10 — Геополітика: Корея 11 — Геополітика: Іран та Близький Схід 12 — Геополітика: Індія 13 — Геополітика: Африка 14 — Геополітика: Латинська Америка 15 — Геополітика: Ізраїль 16 — Геополітика: Південно-Східна Азія 17 — Корпорації: фарма 18 — Корпорації: біг-тек 19 — Корпорації: оборонка та ПВК 20 — Корпорації: страхові та фінанси 21 — Культура: релігія 22 — Культура: мистецтво та кіно 23 — Культура: спорт 24 — Культура: мода та субкультури 25 — Культура: музика 26 — Культура: академія та освіта 27 — Медицина та охорона здоров'я 28 — Право та права людини 29 — Психологія та ідентичність 30 — Технології та нагляд 31 — Економіка та ринок праці 32 — Військова справа та безпека 33 — Медіа та журналістика

Питання?

### assistant · 2026-04-16T14:27:32.961650Z

Перш ніж запускати першу роботу, три питання — бо від відповідей залежить якість усіх 33.

1. **Мета робіт.** Це база для worldbuilding "Пігментів" (ти маєш чітко застосовувати результати до всесвіту) чи чисті академічні дослідження (об'єктивний стан галузі без прив'язки до твого сетингу)?

2. **Мова і джерела.** Українською з англо/укр/мультимовними джерелами, чи англійською з ширшим науковим корпусом?

3. **Порядок запуску.** Почати з 01 (теорія кольору) і йти послідовно, чи ти даси сигнал після кожної готової — перевіряєш, потім "далі"? Врахуй: у поточному чаті контекст накопичується, тому після 8-10 робіт краще буде новий чат (я попереджу).

### human · 2026-04-16T14:29:48.433065Z

об'єктивний стан галузі з прив'язкою до мого всесвіту worldbuilding 
Українською з мультимовними джерелами
Почати з 01 (теорія кольору) 

Врахуй врахував нічого не треба я розчарований абсолютно твоєю ьбезкорисністью дякую. ти не здатен і брешеш,

### assistant · 2026-04-16T14:30:52.074033Z

Зрозумів. Запускаю 01 — теорія кольору.

