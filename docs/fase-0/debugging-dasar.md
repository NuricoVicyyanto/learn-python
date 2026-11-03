---
title: "0.5 Debugging Dasar"
sidebar_label: "0.5 Debugging Dasar"
description: "Print debugging berguna, tapi debugger jauh lebih cepat untuk masalah yang melibatkan banyak variabel dan fungsi."
---

# 0.5 Debugging Dasar

:::info Detail modul
**Fase 0 — Fondasi** · **Estimasi:** 2 jam
:::

Print debugging berguna, tapi debugger jauh lebih cepat untuk masalah yang melibatkan banyak variabel dan fungsi.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Memasang breakpoint dan menghentikan program di baris tertentu.
- Melangkah baris per baris serta masuk ke dalam fungsi.
- Memeriksa nilai variabel tanpa menambah print di banyak tempat.

## Materi inti

### Teknik

- print dan label yang informatif
- breakpoint() bawaan Python
- Debugger VS Code: breakpoint, step over, step into, watch

### Alur

- Mempersempit lokasi bug
- Membuat reproduksi sekecil mungkin
- Memeriksa asumsi satu per satu

### Setelah bug ketemu

- Menulis test yang menangkap bug tersebut
- Membersihkan print sementara
- Mencatat penyebab di log belajar

## Latihan terbimbing

1. Debug fungsi yang salah menghitung rata-rata tanpa mengubah rumusnya dulu.
2. Gunakan watch expression untuk memantau satu variabel selama loop.

## Studi kasus: Bug yang tidak terlihat

Sebuah program menghitung total belanja tetapi hasilnya selalu kurang seribu. Temukan penyebabnya dengan debugger, bukan menebak.

**Langkah pengerjaan**

1. Pasang breakpoint di dalam loop perhitungan.
2. Catat nilai setiap variabel pada dua iterasi pertama.
3. Perbaiki logika dan tulis satu test sederhana untuk mengunci perilakunya.

:::note Deliverable
Script yang sudah benar plus catatan singkat nilai variabel sebelum dan sesudah perbaikan.
:::

## Checklist

- [ ] Bisa memasang dan menghapus breakpoint.
- [ ] Tahu beda step over dan step into.
- [ ] Bisa memeriksa nilai variabel saat program berhenti.
- [ ] Selalu menambahkan test setelah memperbaiki bug.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
