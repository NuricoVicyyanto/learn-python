---
title: "Fase 4 — Expert: Mesin & Skala"
sidebar_label: "Ringkasan fase"
sidebar_position: 0
---

# Fase 4 — Expert: Mesin & Skala

> Memahami apa yang terjadi di balik kode

:::info Ringkasan fase
**Level:** Expert · **Durasi:** 10–12 minggu · 100–140 jam
:::

Fase ini bukan tentang menghafal lebih banyak library. Fokusnya adalah memahami cara Python bekerja, mengukur batasnya, dan mengambil keputusan arsitektur yang bertahan saat beban dan tim bertambah.

## Tujuan fase

Setelah menyelesaikan fase ini, kamu mampu:

- Menjelaskan perjalanan kode dari sumber sampai bytecode yang dieksekusi.
- Mendiagnosis masalah memori, performa, dan konkurensi pada sistem nyata.
- Merancang sistem terdistribusi dengan penanganan kegagalan yang eksplisit.
- Menilai dan memperbaiki codebase besar tanpa menghentikan pengembangan.

## Peta modul

| Modul | Materi | Estimasi |
| --- | --- | --- |
| 4.1 | [CPython Internals](/docs/fase-4/cpython-internals) | 8 jam |
| 4.2 | [Model Memori & Garbage Collector](/docs/fase-4/memori-dan-gc) | 7 jam |
| 4.3 | [Descriptor & Metaprogramming](/docs/fase-4/descriptor-metaprogramming) | 7 jam |
| 4.4 | [Native Extension & FFI](/docs/fase-4/native-extension) | 8 jam |
| 4.5 | [GIL & Paralelisme Modern](/docs/fase-4/gil-dan-paralelisme-modern) | 6 jam |
| 4.6 | [Performance Engineering](/docs/fase-4/performance-engineering) | 7 jam |
| 4.7 | [Sistem Terdistribusi](/docs/fase-4/sistem-terdistribusi) | 8 jam |
| 4.8 | [Arsitektur Skala Besar](/docs/fase-4/arsitektur-skala-besar) | 7 jam |
| 4.9 | [Keamanan Aplikasi Python](/docs/fase-4/keamanan) | 6 jam |
| 4.10 | [Legacy Code & Maintenance](/docs/fase-4/legacy-dan-maintenance) | 7 jam |
| 4.11 | [Open Source & Riset](/docs/fase-4/open-source-dan-riset) | 6 jam |

## Proyek akhir fase

### Proyek Expert (pilih satu)

Tidak ada proyek tunggal di fase ini. Pilih satu jalur yang paling dekat dengan tujuan kariermu dan kerjakan sampai tuntas dengan bukti teknis.

**Requirement wajib**

- Opsi A — Mini framework: web framework atau DI container dari nol, dengan test dan dokumentasi.
- Opsi B — Native speedup: optimasi proyek fase 3 memakai Cython atau Rust, dengan benchmark.
- Opsi C — Distributed pipeline: queue, worker, retry, observability, dan chaos test.
- Opsi D — Legacy rescue: audit dan refactor codebase open source kecil, plus ADR.
- Semua opsi wajib punya technical writeup minimal 1500 kata.
- Writeup memuat keputusan, alternatif yang ditolak, benchmark, dan pelajaran.
- Kode punya test, CI, dan dokumentasi cara menjalankan.

**Nilai tambah**

- Presentasikan di komunitas lokal atau meetup.
- Publikasikan sebagai package atau artikel teknis.
- Tambahkan profil beban dan hasil uji ketahanan.

:::tip Aturan pengerjaan
Kerjakan proyek ini di folder terpisah dengan repository sendiri. Tulis README sebelum mulai menulis kode, lalu perbarui setiap kali ada keputusan penting.
:::

## Exit criteria

Kamu boleh lanjut ke fase berikutnya jika:

- Bisa menjelaskan cara Python mengeksekusi kode dan mengelola memori.
- Bisa mendiagnosis masalah produksi tanpa menebak.
- Bisa merancang sistem dengan batas dan kegagalan yang eksplisit.
- Punya satu karya teknis mendalam yang bisa dipertanggungjawabkan.

## Tips dari fase ini

- Kedalaman mengalahkan jumlah proyek. Satu proyek expert lebih bernilai dari sepuluh tutorial.
- Tulis apa yang kamu pelajari. Menulis memaksa kamu menemukan lubang pemahaman.
- Kalau macet, kembali ke sumber primer: kode CPython, PEP, dan dokumentasi resmi.
