---
title: "4.10 Legacy Code & Maintenance"
sidebar_label: "4.10 Legacy Code & Maintenance"
description: "Sebagian besar pekerjaan nyata adalah merawat kode lama. Keterampilan ini jarang diajarkan, tetapi paling dicari."
---

# 4.10 Legacy Code & Maintenance

:::info Detail modul
**Fase 4 — Expert** · **Estimasi:** 7 jam
:::

Sebagian besar pekerjaan nyata adalah merawat kode lama. Keterampilan ini jarang diajarkan, tetapi paling dicari.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menulis test karakterisasi untuk kode tanpa test.
- Merefactor bertahap dengan strangler pattern.
- Merencanakan migrasi versi Python tanpa menghentikan fitur.

## Materi inti

### Memahami kode

- Membaca alur dari entry point
- Test karakterisasi
- Menandai area berisiko
- Instrumentasi

### Refactor

- Langkah kecil yang selalu hijau
- Strangler pattern
- Feature flag
- Migrasi data

### Versi

- Deprecation dan peringatan
- Matriks dukungan versi
- Strategi upgrade dependency

## Latihan terbimbing

1. Ambil modul tanpa test dan tulis test karakterisasi untuk perilaku utamanya.
2. Ganti satu bagian kode lama dengan implementasi baru di balik flag.

## Studi kasus: Penyelamatan codebase

Pilih satu proyek open source kecil yang tertinggal beberapa versi Python. Naikkan versi, perbaiki test, dan dokumentasikan prosesnya.

**Langkah pengerjaan**

1. Jalankan test pada versi target dan catat kegagalan.
2. Perbaiki satu kategori kegagalan per commit.
3. Tambahkan CI matrix untuk mencegah regresi.

:::note Deliverable
fork yang hijau di versi baru plus catatan migrasi.
:::

## Checklist

- [ ] Tidak menulis ulang dari nol tanpa alasan kuat.
- [ ] Setiap refactor kecil dan bisa dibatalkan.
- [ ] Test lama tetap jadi acuan perilaku.
- [ ] Migrasi punya rencana rollback.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
