---
title: "4.2 Model Memori & Garbage Collector"
sidebar_label: "4.2 Model Memori & Garbage Collector"
description: "Memory leak di Python tetap mungkin, terutama lewat referensi yang tidak disadari. Modul ini mengajarkan cara melacaknya."
---

# 4.2 Model Memori & Garbage Collector

:::info Detail modul
**Fase 4 — Expert** · **Estimasi:** 7 jam
:::

Memory leak di Python tetap mungkin, terutama lewat referensi yang tidak disadari. Modul ini mengajarkan cara melacaknya.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menjelaskan reference counting dan generational GC.
- Mengukur alokasi memori dengan tracemalloc.
- Menemukan dan memutus siklus referensi.

## Materi inti

### Model

- Objek, tipe, dan refcount
- Arena dan pymalloc
- Generational GC
- Kapan GC berjalan

### Alat

- sys.getrefcount
- tracemalloc
- gc.get_objects
- objgraph dan memory profiler

### Pola

- Slots dan footprint objek
- Weakref untuk cache
- Siklus lewat closure dan callback
- Cache tanpa batas

## Latihan terbimbing

1. Buat contoh memory leak lewat cache global lalu perbaiki dengan weakref.
2. Bandingkan penggunaan memori class biasa dan class dengan slots.

## Studi kasus: Investigasi kebocoran memori

Sebuah worker menghabiskan memori perlahan sampai di-restart tiap jam. Temukan penyebab dan tulis perbaikannya.

**Langkah pengerjaan**

1. Reproduksi pertumbuhan memori dalam waktu singkat.
2. Ambil snapshot tracemalloc dan bandingkan.
3. Perbaiki sumber kebocoran dan buktikan memori stabil.

:::note Deliverable
laporan investigasi berisi snapshot sebelum dan sesudah.
:::

## Checklist

- [ ] Tahu kenapa refcount tidak menangani siklus.
- [ ] Bisa membaca snapshot tracemalloc.
- [ ] Tidak memakai cache tanpa batas di proses panjang.
- [ ] Paham kapan gc.collect manual berguna.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
