---
title: "1.7 File & Path"
sidebar_label: "1.7 File & Path"
description: "Data yang hanya ada di memori hilang saat program ditutup. Modul ini mengajarkan cara menyimpan dan membaca data dengan aman."
---

# 1.7 File & Path

:::info Detail modul
**Fase 1 — Beginner** · **Estimasi:** 4 jam
:::

Data yang hanya ada di memori hilang saat program ditutup. Modul ini mengajarkan cara menyimpan dan membaca data dengan aman.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Membaca dan menulis file teks memakai with.
- Mengelola path dengan pathlib, bukan penggabungan string.
- Menangani file yang tidak ada atau encoding yang salah.

## Materi inti

### Membaca dan menulis

- Mode r, w, a, dan implikasinya
- with sebagai context manager
- Encoding utf-8 secara eksplisit

### Path

- pathlib.Path
- Path relatif dan absolut
- Membuat folder dan mengecek keberadaan file

### Format data

- Teks biasa dan baris baru
- JSON untuk struktur bersarang
- CSV untuk data tabular

## Latihan terbimbing

1. Buat log aktivitas yang menambahkan baris baru tanpa menghapus isi lama.
2. Baca file CSV lalu tampilkan lima baris pertama.

## Studi kasus: Jurnal harian

Buat aplikasi jurnal yang menyimpan entri per tanggal, bisa dibaca kembali, dan tidak rusak jika file belum ada.

**Langkah pengerjaan**

1. Simpan entri dalam file JSON per bulan.
2. Tangani kondisi file belum ada sebagai daftar kosong.
3. Tampilkan entri terbaru lebih dulu.

:::note Deliverable
jurnal.py dengan fitur tulis, baca semua, dan cari berdasarkan kata kunci.
:::

## Checklist

- [ ] Selalu memakai with saat membuka file.
- [ ] Tahu kenapa encoding harus disebutkan.
- [ ] Bisa membedakan path relatif dan absolut.
- [ ] Tidak pernah menimpa file tanpa sengaja.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
