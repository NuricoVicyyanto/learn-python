---
title: "4.6 Performance Engineering"
sidebar_label: "4.6 Performance Engineering"
description: "Performa tingkat lanjut adalah soal metrik, bukan trik. Kamu akan bekerja dengan target latency, throughput, dan memori."
---

# 4.6 Performance Engineering

:::info Detail modul
**Fase 4 — Expert** · **Estimasi:** 7 jam
:::

Performa tingkat lanjut adalah soal metrik, bukan trik. Kamu akan bekerja dengan target latency, throughput, dan memori.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menentukan target performa yang terukur.
- Mengoptimasi dengan vectorization dan struktur data yang tepat.
- Membuat benchmark yang stabil dan bisa dipercaya.

## Materi inti

### Metodologi

- Baseline dan target
- Warmup dan variansi
- Benchmark di lingkungan mirip produksi
- p50, p95, p99

### Teknik

- Vectorization numpy dan polars
- Memory layout dan cache
- Batching
- Paralelisme data

### Analisis

- Flame graph
- Sampling profiler
- Bottleneck I/O vs CPU
- Trade-off biaya

## Latihan terbimbing

1. Ubah loop pandas menjadi operasi vectorized dan ukur hasilnya.
2. Buat benchmark yang stabil untuk fungsi dengan variansi tinggi.

## Studi kasus: Memenuhi target latency

Sebuah endpoint punya p99 di atas SLA. Turunkan tanpa menambah mesin, dengan bukti pengukuran di setiap langkah.

**Langkah pengerjaan**

1. Ukur p50, p95, dan p99 sebelum perubahan.
2. Profil endpoint dan identifikasi tiga penyebab utama.
3. Optimasi bertahap dan catat dampak tiap perubahan.

:::note Deliverable
laporan performa dengan grafik dan rekomendasi.
:::

## Checklist

- [ ] Selalu memakai distribusi, bukan rata-rata saja.
- [ ] Bisa menjelaskan mengapa benchmark lokal menyesatkan.
- [ ] Tahu batas vectorization untuk data kecil.
- [ ] Optimasi dihentikan saat target tercapai.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
