---
title: "3.4 Concurrency & GIL"
sidebar_label: "3.4 Concurrency & GIL"
description: "Thread, process, dan async menyelesaikan masalah berbeda. Memilih yang salah membuat program lebih lambat dan lebih rumit."
---

# 3.4 Concurrency & GIL

:::info Detail modul
**Fase 3 — Advanced** · **Estimasi:** 6 jam
:::

Thread, process, dan async menyelesaikan masalah berbeda. Memilih yang salah membuat program lebih lambat dan lebih rumit.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menjelaskan peran GIL pada beban CPU dan I/O.
- Memilih threading, multiprocessing, atau async berdasarkan profil beban.
- Memakai concurrent.futures untuk kode yang mudah dibaca.

## Materi inti

### Model

- Proses vs thread
- GIL dan implikasinya
- I/O-bound vs CPU-bound
- Biaya komunikasi antar proses

### Alat

- threading dan Lock
- multiprocessing dan Pool
- concurrent.futures
- Queue untuk koordinasi

### Bahaya

- Race condition
- Deadlock
- Shared mutable state
- Overhead konkurensi berlebih

## Latihan terbimbing

1. Benchmark tugas I/O dan CPU dengan tiga pendekatan berbeda.
2. Perbaiki race condition pada counter bersama.

## Studi kasus: Laporan benchmark konkurensi

Buat tiga implementasi untuk dua jenis beban kerja, ukur waktunya, dan jelaskan kapan masing-masing unggul.

**Langkah pengerjaan**

1. Siapkan beban I/O dan beban CPU yang setara.
2. Jalankan versi sinkron, thread, process, dan async.
3. Susun tabel hasil beserta interpretasinya.

:::note Deliverable
benchmark.py dan laporan Markdown berisi kesimpulan.
:::

## Checklist

- [ ] Bisa menjelaskan GIL dalam dua kalimat.
- [ ] Tahu kenapa multiprocessing mahal untuk data besar.
- [ ] Bisa mengenali race condition dari kode.
- [ ] Selalu mengukur sebelum memilih model konkurensi.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
