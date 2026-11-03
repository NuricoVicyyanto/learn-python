---
title: "2.9 Kualitas Kode & Tooling"
sidebar_label: "2.9 Kualitas Kode & Tooling"
description: "Alat otomatis menghilangkan debat gaya kode. Waktumu lebih berharga untuk memikirkan desain."
---

# 2.9 Kualitas Kode & Tooling

:::info Detail modul
**Fase 2 — Intermediate** · **Estimasi:** 4 jam
:::

Alat otomatis menghilangkan debat gaya kode. Waktumu lebih berharga untuk memikirkan desain.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Mengonfigurasi ruff dan black dalam satu proyek.
- Memakai pre-commit agar masalah tertangkap sebelum commit.
- Menulis docstring dan type hint dasar yang berguna.

## Materi inti

### Gaya

- PEP 8 secara praktis
- Penamaan yang konsisten
- Panjang baris dan format otomatis

### Alat

- ruff untuk lint dan fix
- black untuk format
- pre-commit hooks
- Konfigurasi di pyproject.toml

### Dokumentasi

- Docstring satu baris dan multi baris
- Type hint dasar
- Komentar menjelaskan mengapa, bukan apa

## Latihan terbimbing

1. Jalankan ruff pada proyek lama dan perbaiki semua temuan.
2. Tambahkan pre-commit yang menjalankan lint, format, dan test cepat.

## Studi kasus: Pintu kualitas otomatis

Pasang pipeline lokal yang menolak commit jika kode tidak lolos lint atau test. Tunjukkan bukti bahwa commit kotor benar-benar ditolak.

**Langkah pengerjaan**

1. Konfigurasi ruff, black, dan pytest di pre-commit.
2. Buat commit yang sengaja melanggar aturan.
3. Perbaiki dan tunjukkan commit bersih lolos.

:::note Deliverable
repo dengan .pre-commit-config.yaml dan bukti penolakan commit.
:::

## Checklist

- [ ] Tahu beda lint dan format.
- [ ] Bisa menjelaskan setiap aturan yang dimatikan.
- [ ] Tidak mematikan alat hanya karena malas memperbaiki.
- [ ] Kode orang lain mudah kamu baca.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
