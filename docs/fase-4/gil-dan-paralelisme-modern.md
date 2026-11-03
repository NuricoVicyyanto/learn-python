---
title: "4.5 GIL & Paralelisme Modern"
sidebar_label: "4.5 GIL & Paralelisme Modern"
description: "Python 3.13 membuka jalan free-threading. Modul ini membahas peluang dan risiko saat GIL tidak lagi menjadi batas."
---

# 4.5 GIL & Paralelisme Modern

:::info Detail modul
**Fase 4 — Expert** · **Estimasi:** 6 jam
:::

Python 3.13 membuka jalan free-threading. Modul ini membahas peluang dan risiko saat GIL tidak lagi menjadi batas.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menjelaskan mekanisme GIL dan alasan historisnya.
- Menguji perilaku thread pada build free-threading.
- Menilai kesiapan library yang dipakai.

## Materi inti

### GIL

- Cara kerja dan interval switch
- Dampak ke beban CPU
- Kenapa I/O tetap terbantu

### Masa depan

- Free-threading di 3.13+
- Subinterpreter
- Perubahan pada C extension
- Status ekosistem

### Uji

- Benchmark thread pada dua build
- Deteksi race condition
- Migrasi bertahap

## Latihan terbimbing

1. Jalankan benchmark CPU-bound pada Python biasa dan free-threading.
2. Cari library populer yang belum siap free-threading.

## Studi kasus: Uji kesiapan free-threading

Nilai satu proyekmu: apakah ia mendapat keuntungan dari free-threading, dan apa yang rusak jika GIL dihilangkan?

**Langkah pengerjaan**

1. Jalankan test suite pada build free-threading.
2. Benchmark bagian CPU-bound dengan beberapa thread.
3. Tulis rekomendasi migrasi beserta risikonya.

:::note Deliverable
laporan kesiapan berisi hasil test dan benchmark.
:::

## Checklist

- [ ] Bisa menjelaskan GIL tanpa mitos.
- [ ] Tahu kenapa free-threading belum otomatis lebih cepat.
- [ ] Memahami risiko race condition pada kode C.
- [ ] Tidak menyarankan migrasi tanpa pengukuran.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
