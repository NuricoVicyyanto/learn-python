---
title: "1.6 Error Handling Dasar"
sidebar_label: "1.6 Error Handling Dasar"
description: "Program yang baik tidak hanya berjalan saat semuanya benar. Ia juga memberi pesan jelas saat menerima input salah atau kehilangan file."
---

# 1.6 Error Handling Dasar

:::info Detail modul
**Fase 1 — Beginner** · **Estimasi:** 3 jam
:::

Program yang baik tidak hanya berjalan saat semuanya benar. Ia juga memberi pesan jelas saat menerima input salah atau kehilangan file.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menggunakan try, except, else, dan finally dengan tepat.
- Memilih exception yang spesifik, bukan menangkap semua error.
- Melempar error sendiri saat data tidak valid.

## Materi inti

### Mekanisme

- try dan except
- else saat tidak ada error
- finally untuk pembersihan
- Rantai exception

### Jenis error

- ValueError, TypeError, KeyError, FileNotFoundError
- Menangkap terlalu luas dan akibatnya
- raise untuk validasi

### Praktik

- Pesan error yang membantu pengguna
- Validasi di batas input
- Membedakan error program dan error pengguna

## Latihan terbimbing

1. Ubah program pembagi yang crash menjadi program yang meminta input ulang.
2. Buat validasi umur yang melempar ValueError dengan pesan jelas.

## Studi kasus: Formulir input yang tahan salah ketik

Buat formulir pendaftaran sederhana yang meminta nama, umur, dan email. Semua input divalidasi dan kesalahan dijelaskan satu per satu.

**Langkah pengerjaan**

1. Tentukan aturan validasi tiap kolom.
2. Tangkap error konversi dan validasi secara terpisah.
3. Tampilkan ringkasan kesalahan tanpa menghentikan program.

:::note Deliverable
formulir.py yang tidak pernah crash karena input pengguna.
:::

## Checklist

- [ ] Tidak memakai except polos tanpa alasan.
- [ ] Tahu kapan memakai finally.
- [ ] Bisa membedakan error yang harus ditangani dan yang harus dibiarkan.
- [ ] Pesan error yang kamu tulis bisa dipahami pengguna awam.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
