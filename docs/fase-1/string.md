---
title: "1.3 String & Formatting"
sidebar_label: "1.3 String & Formatting"
description: "Sebagian besar program berurusan dengan teks: input, file, log, dan laporan. Menguasai string membuat output jauh lebih rapi."
---

# 1.3 String & Formatting

:::info Detail modul
**Fase 1 — Beginner** · **Estimasi:** 4 jam
:::

Sebagian besar program berurusan dengan teks: input, file, log, dan laporan. Menguasai string membuat output jauh lebih rapi.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Mengambil bagian string dengan indexing dan slicing.
- Memakai method string yang tepat tanpa menulis loop manual.
- Membuat output rapi dengan f-string dan format specifier.

## Materi inti

### Dasar

- Index, slice, dan langkah negatif
- Immutability string
- Escape character dan raw string

### Method penting

- strip, split, join
- replace, startswith, endswith
- upper, lower, title, casefold
- find dan count

### Formatting

- f-string dan ekspresi di dalamnya
- Format angka, persen, dan padding
- Perataan teks untuk laporan tabel

## Latihan terbimbing

1. Rapikan nama lengkap dari input berantakan menjadi format Title Case.
2. Buat tabel teks berisi nama barang, jumlah, dan harga yang rata kanan.

## Studi kasus: Laporan penjualan teks

Diberikan data penjualan mentah berbentuk satu string per baris. Ubah menjadi laporan tabel dengan total di bagian bawah.

**Langkah pengerjaan**

1. Pisahkan setiap baris dengan split dan ambil kolomnya.
2. Hitung total dan format sebagai rupiah.
3. Cetak tabel dengan lebar kolom konsisten.

:::note Deliverable
laporan.py yang menerima file teks dan mencetak tabel rapi.
:::

## Checklist

- [ ] Bisa membalik string dengan slicing.
- [ ] Tahu beda split tanpa argumen dan dengan argumen.
- [ ] Bisa memformat angka desimal dan persen.
- [ ] Tidak memakai penggabungan string di dalam loop besar.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
