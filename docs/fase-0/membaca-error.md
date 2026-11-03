---
title: "0.4 Membaca Traceback"
sidebar_label: "0.4 Membaca Traceback"
description: "Pemula sering menutup terminal saat melihat error. Di sini kamu belajar memperlakukan traceback sebagai petunjuk, bukan hukuman."
---

# 0.4 Membaca Traceback

:::info Detail modul
**Fase 0 — Fondasi** · **Estimasi:** 2 jam
:::

Pemula sering menutup terminal saat melihat error. Di sini kamu belajar memperlakukan traceback sebagai petunjuk, bukan hukuman.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Membaca traceback dari baris terbawah ke atas.
- Mengenali error umum: SyntaxError, NameError, TypeError, KeyError, IndexError.
- Mencari solusi dari pesan error tanpa menebak-nebak.

## Materi inti

### Anatomi error

- File, baris, dan potongan kode
- Jenis exception dan pesannya
- Urutan pemanggilan fungsi

### Error umum

- Salah ketik nama variabel
- Tipe tidak cocok saat operasi
- Index atau key yang tidak ada
- Indentasi tidak konsisten

### Strategi

- Baca pesan terakhir lebih dulu
- Isolasi baris bermasalah
- Membaca dokumentasi resmi

## Latihan terbimbing

1. Rusak satu script dengan lima cara berbeda, lalu perbaiki satu per satu.
2. Tulis ulang pesan error dengan bahasamu sendiri sebelum memperbaiki.

## Studi kasus: Klinik error

Diberikan lima script rusak. Tugasmu mendiagnosis penyebabnya hanya dari traceback, lalu menuliskan solusinya.

**Langkah pengerjaan**

1. Jalankan tiap script dan catat jenis exception serta barisnya.
2. Tulis dugaan penyebab sebelum mengubah kode.
3. Perbaiki dan jelaskan perubahan dalam satu paragraf per kasus.

:::note Deliverable
catatan/error-log.md berisi lima kasus, penyebab, dan solusi.
:::

## Checklist

- [ ] Bisa menunjuk baris penyebab dari traceback.
- [ ] Tahu beda SyntaxError dan TypeError.
- [ ] Tidak lagi menghapus kode acak saat error muncul.
- [ ] Punya kebiasaan membaca pesan error sampai habis.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
