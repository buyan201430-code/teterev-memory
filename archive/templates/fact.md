---
id: FACT-YYYY-NNN
record_type: fact
statement: "Формулировка факта одним предложением"
statement_detail: null              # развёрнутая формулировка, если нужна

# Источник
source_type: newspaper              # newspaper | interview | memory | photo | document | oral
source_id: NP-YYYY-NNN              # NP-..., INT-..., MEM-..., PHO-...
source_quote: null                  # дословная цитата-основание
source_location: null               # стр., минута записи, абзац

# Связи
about_people: []                      # STU-..., PER-...
about_events: []                      # EVT-...
related_facts: []                     # FACT-... (подтверждает / противоречит)
book_chapters: []                     # «Первый тренер», «Те, кто ушёл», ...

# Достоверность
verification_status: needs_review     # verified | oral | needs_review | disputed | unverified
verified_by: []                       # FACT-... или source_id второго источника
contradicts: []                       # FACT-... при disputed
verification_notes: ""

# Публикация
publishable: false
published_on_site: false
perm_website: null                    # yes | no | anonymous — из источника
perm_book: null
perm_video: null
perm_audio: null

created: YYYY-MM-DD
updated: YYYY-MM-DD
created_by: ""
tags: []
---

# FACT-YYYY-NNN — Краткая формулировка

## Утверждение

> [Факт одним предложением]

## Основание

| Поле | Значение |
|------|----------|
| Источник | [[NP-YYYY-NNN]] / [[INT-YYYY-NNN]] |
| Тип | newspaper / interview / ... |
| Цитата | «...» |
| Статус | needs_review |

## Контекст

Почему этот факт важен для проекта. К какой главе книги относится.

## Подтверждения

| ID | Источник | Статус |
|----|----------|--------|
| — | — | — |

## Противоречия

| ID | Другая версия | Статус |
|----|---------------|--------|
| — | — | — |

## Использование

- [ ] Сайт (/memories, /teterev)
- [ ] Книга — глава «...»
- [ ] YouTube
- [ ] Подкаст
- [ ] Хронология (/timeline)

## История изменений

| Дата | Изменение | Автор |
|------|-----------|-------|
| YYYY-MM-DD | Создан | |
