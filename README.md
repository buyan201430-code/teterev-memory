# Проект «Школа силы» — память о Михаиле Михайловиче Тетереве

Рабочий репозиторий цифрового контура: архив, сбор свидетельств, подготовка книги и медиа.

**Полная спецификация:** [`SPECIFICATION.md`](SPECIFICATION.md)

**Ключевая формула:** *Ученик уходит не от тренера, а от отсутствия условий.*

---

## Как устроен поток

```
Отклик (форма / Telegram)
    → карточка в archive/cards/
    → факты FACT-... + пробелы gaps.md
    → верификация + разрешения (раздел 11 SPEC)
    → публикация на сайте
    → глава книги / ролик / подкаст
```

---

## 1. Куда класть сканы

### Газеты

| Что | Куда | Именование |
|-----|------|------------|
| Оригинал без правок | `newspapers/raw/` | `NP-{год}-{номер}_raw.tiff` |
| Обработанный (web) | `newspapers/processed/` | `NP-{год}-{номер}_proc.jpg` |
| Миниатюра | `newspapers/thumbnails/` | `NP-{год}-{номер}_thumb.jpg` |
| Расшифровка | `newspapers/transcripts/` | `NP-{год}-{номер}_transcript.md` |
| Краткая выжимка | `newspapers/transcripts/` | `NP-{год}-{номер}_summary.md` |

**Правила:**
- raw не редактировать — только сохранять;
- processed — обрезка, выравнивание, контраст для сайта;
- формат raw: TIFF/PNG, 300+ dpi;
- web: JPEG/WebP, max 2000px по длинной стороне.

### Фото и документы (не газеты)

| Тип | Куда |
|-----|------|
| Тренер | `photos/teterev/` |
| Зал, тренировки | `photos/gym/` |
| Ученики, группы | `photos/students/` |
| Соревнования | `photos/competitions/` |
| Город | `photos/blagoveshchensk/` |

Именование: `PHO-{год}-{номер}_{raw|proc}.{ext}`

### Интервью

| Что | Куда |
|-----|------|
| Запись | `interviews/raw/INT-{год}-{номер}_raw.m4a` |
| Расшифровка | `interviews/transcripts/INT-{год}-{номер}_transcript.md` |
| Согласие | `interviews/consents/INT-{год}-{number}_consent.md` |

---

## 2. Как создавать карточку газеты

1. **Получить скан** → положить в `newspapers/raw/`, присвоить ID: `NP-1987-001` (год + порядковый номер).
2. **Сделать processed + thumb** → `newspapers/processed/`, `thumbnails/`.
3. **Расшифровать** → `newspapers/transcripts/NP-..._transcript.md` (ручная; OCR помечать `source: ocr`).
4. **Скопировать шаблон** → [`archive/templates/newspaper-article.md`](archive/templates/newspaper-article.md).
5. **Сохранить карточку** → `archive/cards/newspapers/NP-1987-001.md`.
6. **Заполнить YAML:** id, дата, газета, пути к файлам, `verification_status`.
7. **Извлечь имена** → каждое имя в [`archive/people_second_pass.md`](archive/people_second_pass.md).
8. **Извлечь факты** → для каждой проверяемой цитаты создать `FACT-...` (см. ниже).
9. **Зафиксировать пробелы** → [`archive/gaps.md`](archive/gaps.md).
10. **Обновить** `archive/index.yaml` (когда появится).

---

## 3. Как заводить факт

Факт (`FACT-...`) — атом архива: одно проверяемое утверждение с источником.

1. Скопировать [`archive/templates/fact.md`](archive/templates/fact.md).
2. Сохранить в `archive/cards/facts/FACT-1987-001.md`.
3. Заполнить:
   - `statement` — одно предложение;
   - `source_id` — откуда (NP-, INT-, MEM-);
   - `source_quote` — дословная цитата;
   - `verification_status` — обычно `needs_review` или `verified` (если 2 источника);
   - `about_people` — связи со STU-.
4. Если факт подтверждает другой — указать в `verified_by`.
5. Если противоречит — `verification_status: disputed`, поле `contradicts`.

**Пример:** из NP-1987-001 извлечь FACT «Жданов назвал Тетерева первым и любимым тренером» → `source_id: NP-1987-001`.

---

## 4. Как заводить ученика

1. Скопировать [`archive/templates/student.md`](archive/templates/student.md).
2. ID: `STU-{фамилия}-{инициалы}` латиницей, напр. `STU-goloshumov-aa`.
3. Сохранить в `archive/cards/students/STU-goloshumov-aa.md`.
4. Заполнить связь с Тетеревым, годы, `first_trainer`, `favorite_trainer_mentioned`.
5. Указать `sources` — откуда знаем (NP-, INT-).
6. **Обновить** [`archive/people_second_pass.md`](archive/people_second_pass.md) → статус `карточка готова`.
7. **Закрыть пробел** в [`archive/gaps.md`](archive/gaps.md), если был.

Если известен только факт из газеты без контакта — карточка с `verification_status: needs_review`, контакты пустые.

---

## 5. Как фиксировать пробел

1. Открыть [`archive/gaps.md`](archive/gaps.md).
2. Добавить строку с новым `GAP-NNN`.
3. Указать: что известно, чего не хватает, связанные карточки, приоритет.
4. При закрытии — статус `resolved`, ссылка на карточку/интервью, дата. **Строку не удалять.**

Связь с поиском людей: если пробел = «найти человека» → дублировать в [`archive/people_second_pass.md`](archive/people_second_pass.md).

---

## 6. Как готовить материал к публикации на сайт

### Чеклист перед публикацией

- [ ] Карточка создана (NP- / STU- / MEM- / FACT- / INT-)
- [ ] `verification_status` проставлен осознанно
- [ ] **Разрешения** заполнены (см. SPECIFICATION.md §11):
  - `perm_website` = `yes` или `anonymous`
  - для фото — разрешение на изображённых
- [ ] processed-версия файла готова (не raw)
- [ ] Текст для сайта — `summary` или краткая карточка без лишних пометок редактора
- [ ] Бейдж на сайте: *подтверждено* / *со слов* / *требует проверки*
- [ ] Имена из материала — в `people_second_pass.md` (если ещё ищем)
- [ ] Пробелы — в `gaps.md`
- [ ] Пост в Telegram (#находка / #газета) + ссылка на страницу сайта

### Что публикуется где

| Материал | Раздел сайта | Условие |
|----------|--------------|---------|
| Газета | `/newspapers` | `publishable: true`, скан + расшифровка |
| Ученик | `/students` | `perm_website: yes`, карточка STU- |
| Воспоминание | `/memories` | `perm_website: yes` или `anonymous` |
| Факт / цитата | `/memories`, `/teterev` | FACT- + разрешение источника |
| Интервью (фрагмент) | `/memories`, `/media` | INT- + `perm_website` + `perm_audio`/`perm_video` |

### Что не публикуется

- `perm_website: no` — только в закрытом архиве;
- `needs_review` без редактора — можно показать с бейджем «требует проверки», но не как установленный факт;
- контакты людей — никогда на сайте;
- raw-сканы низкого качества — дождаться processed.

---

## Быстрые ссылки

| Файл | Назначение |
|------|------------|
| [`SPECIFICATION.md`](SPECIFICATION.md) | Полная спецификация |
| [`archive/gaps.md`](archive/gaps.md) | Пробелы |
| [`archive/people_second_pass.md`](archive/people_second_pass.md) | Кого ищем |
| [`archive/templates/`](archive/templates/) | Шаблоны карточек |

## ID-система

| Префикс | Тип |
|---------|-----|
| NP- | газетная статья |
| STU- | ученик |
| EVT- | событие |
| FACT- | факт |
| INT- | интервью |
| MEM- | воспоминание (форма) |
| PHO- | фото |
| GAP- | пробел |
| PSP- | запись в people_second_pass |

---

*Версия README: 1.0 — 28 июня 2026*
