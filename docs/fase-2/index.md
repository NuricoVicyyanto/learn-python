---
title: "Fase 2 — Intermediate: Struktur & Rekayasa Kode"
sidebar_label: "Ringkasan fase"
sidebar_position: 0
---

# Fase 2 — Intermediate: Struktur & Rekayasa Kode

> Dari script menjadi perangkat lunak

:::info Ringkasan fase
**Level:** Intermediate · **Durasi:** 6–8 minggu · 60–80 jam
:::

Di fase ini kamu berhenti menulis script sekali pakai. Kamu mulai merancang kelas, memecah proyek menjadi package, menulis test, dan menjaga kualitas kode dengan alat otomatis.

## Tujuan fase

Setelah menyelesaikan fase ini, kamu mampu:

- Merancang kelas dan modul dengan batas tanggung jawab yang jelas.
- Menulis test otomatis untuk logika inti dan kasus error.
- Mengolah data dari CSV, JSON, dan SQLite tanpa kode berantakan.
- Menjaga konsistensi gaya kode dengan lint dan formatter.

## Peta modul

| Modul | Materi | Estimasi |
| --- | --- | --- |
| 2.1 | [Struktur Data Lanjutan](/docs/fase-2/struktur-data-lanjutan) | 5 jam |
| 2.2 | [Comprehension & Iterator](/docs/fase-2/comprehension-dan-iterator) | 5 jam |
| 2.3 | [Fungsi Lanjutan & Decorator](/docs/fase-2/fungsi-lanjutan) | 6 jam |
| 2.4 | [Object-Oriented Programming](/docs/fase-2/oop) | 8 jam |
| 2.5 | [Exception & Context Manager](/docs/fase-2/exception-dan-context-manager) | 4 jam |
| 2.6 | [CSV, JSON & SQLite](/docs/fase-2/data-file-sqlite) | 5 jam |
| 2.7 | [Struktur Proyek & Packaging](/docs/fase-2/struktur-proyek) | 5 jam |
| 2.8 | [Testing dengan pytest](/docs/fase-2/testing) | 6 jam |
| 2.9 | [Kualitas Kode & Tooling](/docs/fase-2/kualitas-kode) | 4 jam |
| 2.10 | [Regular Expression](/docs/fase-2/regex) | 4 jam |

## Proyek akhir fase

### Inventory System

Proyek yang memaksa kamu memakai hampir semua materi fase ini sekaligus: OOP, SQLite, CSV, exception, packaging, test, dan tooling.

**Requirement wajib**

- Model barang, kategori, dan transaksi stok memakai class.
- Simpan data ke SQLite dengan operasi tambah, ubah, hapus, dan cari.
- Import dan ekspor data lewat CSV.
- Laporan stok rendah dan riwayat perubahan stok.
- Custom exception untuk aturan bisnis, misalnya stok tidak boleh negatif.
- Minimal 30 unit test dan coverage di atas 80 persen.
- Lint dan format bersih, pre-commit berjalan.
- Struktur package src yang bisa diinstal.

**Nilai tambah**

- Mode CLI interaktif dengan typer atau argparse.
- Migrasi skema database sederhana.
- Ekspor laporan ke Markdown.

:::tip Aturan pengerjaan
Kerjakan proyek ini di folder terpisah dengan repository sendiri. Tulis README sebelum mulai menulis kode, lalu perbarui setiap kali ada keputusan penting.
:::

## Exit criteria

Kamu boleh lanjut ke fase berikutnya jika:

- Bisa merancang kelas tanpa hierarki warisan yang dipaksakan.
- Proyek punya test yang benar-benar menangkap bug.
- Kode bisa dipasang dan dijalankan di mesin lain.
- Bisa menjelaskan trade-off desain yang kamu ambil.

## Tips dari fase ini

- Tulis test untuk bug sebelum memperbaikinya. Itu kebiasaan yang membedakan profesional dan pemula.
- Jangan menambah pattern atau abstraksi sebelum ada kebutuhan nyata.
- Kalau bingung memilih struktur, tulis dulu, lalu refactor setelah polanya terlihat.
