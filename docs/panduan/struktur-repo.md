---
title: Struktur Repo Belajar
sidebar_label: Struktur repo belajar
sidebar_position: 3
description: Konvensi folder, penamaan file, commit, dan template README untuk setiap proyek.
---

# Struktur Repo Belajar

Satu repository untuk seluruh perjalanan belajar membuat progres terlihat. Struktur yang konsisten juga melatih kebiasaan yang dipakai di tempat kerja.

## Struktur yang disarankan

```text
learn-python/
├── README.md
├── catatan/
│   ├── error-log.md
│   ├── retro.md
│   └── penilaian-expense-tracker.md
├── 00-fondasi/
│   └── 01-lingkungan/
│       ├── latihan/
│       ├── studi-kasus/
│       └── catatan.md
├── 01-beginner/
│   ├── 01-tipe-data/
│   ├── 02-kontrol-alur/
│   └── proyek-expense-tracker/
├── 02-intermediate/
├── 03-advanced/
├── 04-expert/
└── 05-spesialisasi/
```

## Aturan penamaan

| Jenis | Pola | Contoh |
| --- | --- | --- |
| Folder fase | `NN-nama-fase` | `03-advanced` |
| Folder modul | `NN-nama-modul` | `05-performance` |
| File Python | `snake_case.py` | `log_analyzer.py` |
| Test | `test_<modul>.py` | `test_storage.py` |
| Catatan | `catatan.md` | `catatan.md` |
| Proyek | `proyek-<nama>` | `proyek-taskflow` |

## Isi satu folder modul

```text
05-performance/
├── materi.md          # ringkasan pribadi, bukan salinan
├── latihan.py         # jawaban latihan terbimbing
├── studi-kasus/
│   ├── README.md
│   └── ...
└── catatan.md         # refleksi lima baris
```

## Konvensi commit

Gunakan pola `tipe: ringkasan singkat`.

| Tipe | Dipakai untuk |
| --- | --- |
| `feat` | Fitur baru |
| `fix` | Perbaikan bug |
| `refactor` | Perubahan struktur tanpa mengubah perilaku |
| `test` | Menambah atau memperbaiki test |
| `docs` | Dokumentasi dan catatan |
| `chore` | Tooling, dependency, konfigurasi |

Contoh:

```text
feat: tambah filter kategori pada expense tracker
test: tambah kasus batas untuk validasi nominal
refactor: pisahkan storage dari cli
```

Aturan tambahan:

- Satu commit satu tujuan.
- Jangan commit virtual environment atau file data besar.
- Commit terakhir sebelum istirahat harus hijau.

## Template README proyek

Setiap proyek wajib punya README dengan isi berikut:

```markdown
# Nama Proyek

Satu paragraf: masalah apa yang diselesaikan dan untuk siapa.

## Demo
Screenshot, GIF, atau perintah singkat.

## Cara menjalankan
Langkah dari nol: clone, buat venv, install, jalankan.

## Fitur
- ...

## Keputusan desain
- Kenapa memakai struktur ini
- Alternatif yang ditolak dan alasannya

## Testing
Cara menjalankan test dan coverage saat ini.

## Batasan yang diketahui
- ...

## Yang dipelajari
- ...
```

## Template catatan error

```markdown
## 2026-01-15 — KeyError saat memuat konfigurasi

**Konteks:** ...
**Pesan error:** ...
**Penyebab:** ...
**Perbaikan:** ...
**Pelajaran:** ...
```

## File yang tidak boleh masuk Git

```gitignore
.venv/
__pycache__/
*.pyc
.pytest_cache/
.ruff_cache/
.env
*.sqlite3
data/mentah/
```

## Branch

Untuk belajar sendiri, commit langsung ke `main` boleh. Mulai fase 3, biasakan:

- `main` selalu hijau.
- Fitur dikerjakan di branch `feat/nama-fitur`.
- Gabungkan lewat pull request ke diri sendiri, lalu review diff sebelum merge.

Kebiasaan ini terasa berlebihan sekarang, tetapi akan sangat membantu saat bekerja dalam tim.
