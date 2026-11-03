---
title: "3.1 Type System & mypy"
sidebar_label: "3.1 Type System & mypy"
description: "Type hint bukan sekadar dokumentasi; ia bisa diperiksa mesin. Dengan mypy strict, banyak bug tertangkap sebelum kode dijalankan."
---

# 3.1 Type System & mypy

:::info Detail modul
**Fase 3 — Advanced** · **Estimasi:** 6 jam
:::

Type hint bukan sekadar dokumentasi; ia bisa diperiksa mesin. Dengan mypy strict, banyak bug tertangkap sebelum kode dijalankan.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menulis type hint untuk fungsi, koleksi, dan struktur data.
- Memakai Protocol, TypedDict, dan Literal sesuai kebutuhan.
- Menjalankan mypy strict dan menafsirkan errornya.

## Materi inti

### Dasar

- Anotasi parameter dan return
- Optional dan union
- Generic: list, dict, tuple
- Type alias

### Lanjutan

- Protocol untuk structural typing
- TypedDict untuk dict berskema
- Literal dan overload
- Variance secara praktis

### Alur kerja

- Bertahap dari longgar ke strict
- Ignore yang terdokumentasi
- Type hint di batas modul

## Latihan terbimbing

1. Tambahkan type hint lengkap pada package Inventory lalu jalankan mypy.
2. Ganti satu pengecekan runtime dengan Protocol yang diperiksa mypy.

## Studi kasus: Type-safe data layer

Definisikan kontrak data untuk API inventaris memakai TypedDict dan Protocol, lalu buktikan mypy menangkap kesalahan pemakaian.

**Langkah pengerjaan**

1. Tulis kontrak untuk request dan response.
2. Implementasikan dua backend berbeda dengan Protocol yang sama.
3. Tunjukkan contoh kode salah yang ditolak mypy.

:::note Deliverable
modul bertipe lengkap dan laporan mypy bersih.
:::

## Checklist

- [ ] Tahu beda Any dan object.
- [ ] Bisa menjelaskan kenapa Protocol lebih fleksibel dari inheritance.
- [ ] Tidak memakai type ignore tanpa alasan tertulis.
- [ ] Bisa membaca pesan error mypy yang panjang.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
