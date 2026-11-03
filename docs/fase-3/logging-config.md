---
title: "3.7 Logging & Configuration"
sidebar_label: "3.7 Logging & Configuration"
description: "Print tidak cukup di production. Log yang terstruktur dan konfigurasi yang rapi membuat masalah bisa dilacak tanpa menebak."
---

# 3.7 Logging & Configuration

:::info Detail modul
**Fase 3 — Advanced** · **Estimasi:** 5 jam
:::

Print tidak cukup di production. Log yang terstruktur dan konfigurasi yang rapi membuat masalah bisa dilacak tanpa menebak.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Mengonfigurasi logging dengan handler dan formatter.
- Menghasilkan log terstruktur yang mudah dicari.
- Memisahkan konfigurasi dari kode untuk tiap environment.

## Materi inti

### Logging

- Logger, handler, formatter, level
- Log anak dan propagasi
- Log terstruktur JSON
- Korelasi request ID

### Konfigurasi

- Environment variable
- pydantic-settings
- File konfigurasi per environment
- Rahasia tidak masuk repo

### Operasional

- Rotasi log
- Level yang tepat
- Menghindari log berisi data sensitif

## Latihan terbimbing

1. Ganti semua print pada satu proyek dengan logging berlevel.
2. Buat konfigurasi dev dan prod yang hanya berbeda lewat environment.

## Studi kasus: Observability untuk layanan kecil

Tambahkan logging terstruktur dan konfigurasi environment pada API sederhana, lalu buktikan log bisa melacak satu request dari awal sampai akhir.

**Langkah pengerjaan**

1. Tambahkan request ID pada setiap log.
2. Pisahkan konfigurasi dev, test, dan prod.
3. Tunjukkan contoh log untuk request sukses dan gagal.

:::note Deliverable
API dengan logging JSON dan file konfigurasi terpisah.
:::

## Checklist

- [ ] Tidak memakai print untuk informasi operasional.
- [ ] Tahu kapan level debug, info, warning, dan error.
- [ ] Rahasia tidak pernah masuk kode atau log.
- [ ] Bisa melacak satu request lewat log.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
