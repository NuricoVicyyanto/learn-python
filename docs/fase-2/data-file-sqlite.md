---
title: "2.6 CSV, JSON & SQLite"
sidebar_label: "2.6 CSV, JSON & SQLite"
description: "Data nyata datang dalam berbagai format. Kamu akan belajar memilih format dan memindahkan data antaranya dengan aman."
---

# 2.6 CSV, JSON & SQLite

:::info Detail modul
**Fase 2 — Intermediate** · **Estimasi:** 5 jam
:::

Data nyata datang dalam berbagai format. Kamu akan belajar memilih format dan memindahkan data antaranya dengan aman.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Membaca dan menulis CSV dengan modul csv.
- Memvalidasi data sebelum menyimpannya.
- Menyimpan data ke SQLite dan menjalankan query dasar.

## Materi inti

### CSV

- Header, delimiter, quoting
- Membaca sebagai dict
- Menulis dengan newline yang benar

### JSON

- Struktur bersarang
- Serialisasi tipe khusus
- Perbedaan JSON dan dict Python

### SQLite

- Koneksi dan cursor
- Create, insert, select, update
- Parameter binding untuk keamanan
- Commit dan rollback

## Latihan terbimbing

1. Impor CSV penjualan ke SQLite lalu jalankan tiga query agregasi.
2. Ekspor hasil query kembali ke CSV.

## Studi kasus: Import data kotor

File CSV berisi baris duplikat, tanggal tidak konsisten, dan angka dengan pemisah ribuan. Bersihkan lalu simpan ke SQLite.

**Langkah pengerjaan**

1. Tentukan aturan pembersihan tiap kolom.
2. Catat baris yang ditolak beserta alasannya.
3. Simpan data bersih dan hasilkan laporan kualitas data.

:::note Deliverable
importer.py plus database dan laporan baris ditolak.
:::

## Checklist

- [ ] Tahu kenapa parameter binding mencegah SQL injection.
- [ ] Bisa membaca CSV tanpa bergantung pada pemisah koma.
- [ ] Paham kapan JSON lebih tepat dari CSV.
- [ ] Selalu menutup koneksi database.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
