---
id: INT-YYYY-NNN
record_type: interview
title: "Интервью с [ФИО]"

# Информант
informant_name: "Фамилия Имя Отчество"
informant_id: STU-surname-ii         # если есть карточка ученика
relation_to_teterev: "ученик"        # ученик | родственник | коллега | журналист | другой
training_years: null

# Запись
interview_date: YYYY-MM-DD
interview_format: phone              # phone | video | in_person | written | telegram
interview_duration_min: null
interviewer: ""
recording_raw: interviews/raw/INT-YYYY-NNN_raw.m4a
transcript: interviews/transcripts/INT-YYYY-NNN_transcript.md
consent_file: interviews/consents/INT-YYYY-NNN_consent.md

# Извлечённые материалы
facts_extracted: []                  # FACT-...
memories_created: []                 # MEM-...
students_updated: []                 # STU-...

# Разрешения (раздел 11 SPECIFICATION.md)
permissions:
  perm_website: null                 # yes | no | anonymous
  perm_book: null
  perm_video: null
  perm_audio: null
  perm_name: null                    # full_name | first_name_only | anonymous | no
  perm_recontact: null               # yes | no | via_messenger_only
consent_date: YYYY-MM-DD
consent_format: telegram             # signature | telegram | email | verbal_recorded

# Достоверность
verification_status: oral            # oral по умолчанию для интервью
verification_notes: ""

# Публикация
publishable: false
published_on_site: false
published_excerpt: null

created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: []
---

# INT-YYYY-NNN — Интервью с [ФИО]

## Краткое содержание

3–5 предложений: о чём говорили, главные темы, ценность для проекта.

## Информант

| Поле | Значение |
|------|----------|
| Имя | ... |
| Связь с Тетеревым | ученик / ... |
| Годы занятий | ... |
| Карточка | [[STU-...]] |

## Параметры записи

| Поле | Значение |
|------|----------|
| Дата | YYYY-MM-DD |
| Формат | phone / video / ... |
| Длительность | N мин |
| Интерviewer | ... |
| Файл | `interviews/raw/INT-YYYY-NNN_raw.m4a` |
| Расшифровка | [[transcripts/INT-YYYY-NNN_transcript.md]] |

## Ключевые цитаты

> «...»
> — [ФИО], INT-YYYY-NNN, [минута]

> «...»

## Извлечённые факты

| FACT ID | Утверждение | Статус |
|---------|-------------|--------|
| FACT-... | ... | oral |

## Разрешения

См. `interviews/consents/INT-YYYY-NNN_consent.md`.

| Канал | Разрешено |
|-------|-----------|
| Сайт | yes / no / anonymous |
| Книга | ... |
| Видео | ... |
| Аудио | ... |
| Имя | ... |
| Повторный контакт | ... |

## Связанные материалы

- [[STU-...]] — карточка ученика
- [[MEM-...]] — воспоминание
- [[FACT-...]] — факты

## Заметки для книги

<!-- В какую главу пойдёт, что нужно перепроверить -->

## История изменений

| Дата | Изменение | Автор |
|------|-----------|-------|
| YYYY-MM-DD | Проведено интервью | |
