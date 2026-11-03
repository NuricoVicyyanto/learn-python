---
title: "2.5 Exception & Context Manager"
sidebar_label: "2.5 Exception & Context Manager"
description: "Error adalah bagian dari desain. Modul ini mengajarkan cara membuat hierarki error sendiri dan memastikan sumber daya selalu dibersihkan."
---

# 2.5 Exception & Context Manager

:::info Detail modul
**Fase 2 — Intermediate** · **Estimasi:** 4 jam
:::

Error adalah bagian dari desain. Modul ini mengajarkan cara membuat hierarki error sendiri dan memastikan sumber daya selalu dibersihkan.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Membuat custom exception yang bermakna.
- Menulis context manager dengan class maupun contextlib.
- Merancang transaksi yang aman saat gagal di tengah jalan.

## Materi inti

### Hierarki

- Membuat base exception aplikasi
- Menambahkan konteks pada pesan
- Exception chaining dengan from

### Context manager

- Protokol enter dan exit
- contextlib.contextmanager
- Menangani error di dalam with
- Keluar bersih saat exception

### Pola

- Transaksi file dan database
- Lock
- Pengukuran waktu sementara

## Latihan terbimbing

1. Buat context manager yang mencatat durasi blok kode.
2. Buat transaksi yang membatalkan perubahan jika terjadi exception.

## Studi kasus: Transaksi aman untuk file data

Tulis modul yang menyimpan perubahan ke file hanya jika seluruh operasi berhasil. Jika gagal, file asli harus utuh.

**Langkah pengerjaan**

1. Tulis ke file sementara terlebih dahulu.
2. Ganti file asli hanya setelah penulisan selesai.
3. Pastikan file sementara dibersihkan saat error.

:::note Deliverable
atomic_store.py dengan context manager dan test kegagalan.
:::

## Checklist

- [ ] Bisa membuat exception sendiri tanpa menangkap semua error.
- [ ] Tahu kapan memakai contextlib.contextmanager.
- [ ] Paham kenapa finally tetap jalan saat exception.
- [ ] Tidak pernah meninggalkan file terbuka.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
