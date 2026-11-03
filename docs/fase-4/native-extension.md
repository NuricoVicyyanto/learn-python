---
title: "4.4 Native Extension & FFI"
sidebar_label: "4.4 Native Extension & FFI"
description: "Saat Python tidak cukup cepat, jawabannya sering bukan menulis ulang semuanya, melainkan memindahkan hot path ke kode native."
---

# 4.4 Native Extension & FFI

:::info Detail modul
**Fase 4 — Expert** · **Estimasi:** 8 jam
:::

Saat Python tidak cukup cepat, jawabannya sering bukan menulis ulang semuanya, melainkan memindahkan hot path ke kode native.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Memanggil library C lewat ctypes atau cffi.
- Membangun extension dengan Cython atau PyO3.
- Mengukur keuntungan nyata dibanding biaya kompleksitas.

## Materi inti

### FFI

- ctypes untuk library dinamis
- cffi dan binding
- Marshalling tipe
- Penanganan error

### Extension

- Struktur extension C
- Cython: tipe statis dan build
- PyO3 dan maturin
- ABI dan distribusi wheel

### Keputusan

- Overhead pemanggilan
- Vectorization numpy sebagai alternatif
- Biaya build dan maintenance

## Latihan terbimbing

1. Bungkus satu fungsi C sederhana lewat ctypes.
2. Percepat fungsi hot path dengan Cython lalu bandingkan.

## Studi kasus: Hot path 10x lebih cepat

Ambil fungsi paling mahal dari proyek fase sebelumnya, pindahkan ke native, dan buktikan peningkatan performa tanpa mengubah API Python.

**Langkah pengerjaan**

1. Ukur baseline dan siapkan test kesetaraan hasil.
2. Implementasikan versi native.
3. Benchmark dan dokumentasikan trade-off build.

:::note Deliverable
modul native, benchmark, dan panduan build.
:::

## Checklist

- [ ] Tahu risiko segmentation fault dari kode native.
- [ ] Selalu menguji kesetaraan hasil.
- [ ] Mempertimbangkan numpy sebelum menulis C.
- [ ] Bisa menjelaskan dampak ke proses distribusi wheel.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
