---
title: "3.3 Async & Asyncio"
sidebar_label: "3.3 Async & Asyncio"
description: "Async bukan cara membuat semua kode cepat. Ia alat untuk menunggu banyak operasi I/O secara bersamaan tanpa memblokir thread."
---

# 3.3 Async & Asyncio

:::info Detail modul
**Fase 3 — Advanced** · **Estimasi:** 8 jam
:::

Async bukan cara membuat semua kode cepat. Ia alat untuk menunggu banyak operasi I/O secara bersamaan tanpa memblokir thread.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menjelaskan event loop dan coroutine.
- Menjalankan banyak tugas I/O secara paralel dengan batas konkurensi.
- Menangani timeout, pembatalan, dan error pada task.

## Materi inti

### Dasar

- Coroutine dan await
- Event loop
- Task dan scheduling
- Kenapa async tidak membantu CPU-bound

### Pola

- gather dan TaskGroup
- Semaphore untuk batas konkurensi
- Timeout dan cancellation
- Antrean async

### Integrasi

- Async HTTP client
- Async database driver
- Mencampur kode sync dan async dengan aman

## Latihan terbimbing

1. Ambil 100 URL dengan batas 10 request bersamaan.
2. Tambahkan timeout dan laporkan request yang gagal.

## Studi kasus: Scraper async yang sopan

Bangun scraper yang mengambil data dari 200 halaman, membatasi konkurensi, menghormati timeout, dan menulis hasil secara bertahap.

**Langkah pengerjaan**

1. Implementasikan worker dengan semaphore dan retry.
2. Simpan hasil ke file saat selesai, bukan di akhir.
3. Ukur durasi total dan bandingkan dengan versi sinkron.

:::note Deliverable
scraper async plus tabel perbandingan waktu.
:::

## Checklist

- [ ] Tahu kapan async justru memperlambat.
- [ ] Tidak memanggil fungsi blocking di dalam coroutine.
- [ ] Bisa membatalkan task dengan bersih.
- [ ] Paham kenapa semaphore penting untuk API pihak ketiga.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
