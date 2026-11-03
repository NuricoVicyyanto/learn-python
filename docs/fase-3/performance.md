---
title: "3.5 Profiling & Optimasi"
sidebar_label: "3.5 Profiling & Optimasi"
description: "Optimasi tanpa pengukuran adalah tebakan. Kamu akan belajar menemukan hot path, mengukur dampak perubahan, dan berhenti saat cukup."
---

# 3.5 Profiling & Optimasi

:::info Detail modul
**Fase 3 — Advanced** · **Estimasi:** 6 jam
:::

Optimasi tanpa pengukuran adalah tebakan. Kamu akan belajar menemukan hot path, mengukur dampak perubahan, dan berhenti saat cukup.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Mengukur waktu dengan timeit dan profil dengan cProfile.
- Membaca flame graph dan menemukan fungsi penyebab lambat.
- Memilih optimasi algoritmik sebelum micro-optimization.

## Materi inti

### Pengukuran

- timeit dan variansi
- cProfile dan pstats
- py-spy untuk proses berjalan
- tracemalloc untuk memori

### Optimasi

- Kompleksitas algoritma
- Caching dan memoization
- Struktur data yang tepat
- Vectorization dasar

### Disiplin

- Baseline dan target
- Benchmark sebelum sesudah
- Menghindari premature optimization

## Latihan terbimbing

1. Profil parser CSV dan temukan tiga fungsi paling mahal.
2. Optimasi satu fungsi hingga minimal dua kali lebih cepat.

## Studi kasus: Optimasi 5x dengan bukti

Ambil program lambat dari proyek sebelumnya. Tingkatkan performa minimal lima kali tanpa mengubah output.

**Langkah pengerjaan**

1. Ukur baseline dan simpan output sebagai acuan.
2. Profil, identifikasi bottleneck, lalu ubah satu hal per iterasi.
3. Sajikan tabel sebelum dan sesudah beserta penjelasan.

:::note Deliverable
kode optimasi, benchmark, dan writeup singkat.
:::

## Checklist

- [ ] Tidak mengoptimasi tanpa angka baseline.
- [ ] Bisa membaca output cProfile.
- [ ] Tahu kapan caching menimbulkan bug.
- [ ] Bisa menjelaskan trade-off kecepatan dan keterbacaan.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
