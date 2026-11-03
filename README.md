# Belajar Python

Situs dokumentasi kurikulum belajar Python dari **beginner sampai expert**, dibangun dengan [Docusaurus](https://docusaurus.io/).

## Menjalankan secara lokal

```bash
npm install
npm start
```

Situs terbuka di `http://localhost:3000`.

## Perintah

| Perintah | Fungsi |
| --- | --- |
| `npm start` | Menjalankan server development dengan hot reload |
| `npm run build` | Membuat build produksi ke folder `build/` |
| `npm run serve` | Menyajikan hasil build secara lokal |
| `npm run docs:generate` | Menghasilkan ulang halaman docs dari data kurikulum |
| `npm run clear` | Menghapus cache Docusaurus |

## Struktur

```text
docs/                   # halaman kurikulum (hasil generate + panduan manual)
  intro.md
  panduan/              # cara pakai, rubrik, struktur repo, jadwal
  fase-0/ ... fase-5/   # halaman fase dan modul
scripts/
  data/fase-*.mjs       # sumber konten kurikulum
  generate-docs.mjs     # generator halaman docs + sidebar
src/
  pages/index.js        # landing page
  css/custom.css        # tema
sidebars.js             # dihasilkan otomatis oleh generator
ROADMAP.md              # arsip kerangka awal (versi web adalah acuan)
```

## Menambah atau mengubah materi

1. Edit file di `scripts/data/fase-*.mjs`.
2. Jalankan `npm run docs:generate`.
3. Cek hasilnya di `docs/` dan jalankan `npm start`.

Jangan mengedit `docs/fase-*` atau `sidebars.js` secara langsung karena akan tertimpa saat generator dijalankan. Halaman di `docs/intro.md` dan `docs/panduan/` boleh diedit manual.

## Isi kurikulum

- **Fase 0** — Fondasi: environment, terminal, Git, debugging.
- **Fase 1** — Beginner: sintaks, kontrol alur, fungsi, struktur data, file.
- **Fase 2** — Intermediate: OOP, testing, SQLite, packaging, tooling.
- **Fase 3** — Advanced: typing, async, API, database, Docker, CI/CD.
- **Fase 4** — Expert: CPython internals, memori, performa, arsitektur, keamanan.
- **Fase 5** — Spesialisasi: data/ML, backend, DevOps, data engineering, desktop, IoT.

Setiap modul berisi tujuan pembelajaran, materi inti, latihan, studi kasus, dan checklist. Setiap fase diakhiri proyek nyata dengan rubrik penilaian.
