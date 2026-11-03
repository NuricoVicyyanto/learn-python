---
title: "2.2 Comprehension & Iterator"
sidebar_label: "2.2 Comprehension & Iterator"
description: "Comprehension membuat transformasi data lebih ringkas. Generator membuat kamu bisa memproses data besar tanpa memuat semuanya ke memori."
---

# 2.2 Comprehension & Iterator

:::info Detail modul
**Fase 2 — Intermediate** · **Estimasi:** 5 jam
:::

Comprehension membuat transformasi data lebih ringkas. Generator membuat kamu bisa memproses data besar tanpa memuat semuanya ke memori.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menulis comprehension yang tetap mudah dibaca.
- Membedakan list, generator, dan iterator.
- Membangun pipeline data dengan yield dan itertools.

## Materi inti

### Comprehension

- List, dict, dan set comprehension
- Filter dengan if
- Batas keterbacaan dan kapan memakai loop biasa

### Iterator

- Protokol iter dan next
- Generator function dengan yield
- Generator expression
- Habis sekali pakai

### itertools

- chain, islice, groupby
- product dan combinations
- Menghemat memori pada data besar

## Latihan terbimbing

1. Ubah loop bersarang menjadi comprehension lalu nilai keterbacaannya.
2. Buat generator yang membaca file besar baris per baris.

## Studi kasus: Pipeline data hemat memori

Proses file penjualan 2 GB: filter transaksi valid, hitung total per kota, lalu tulis ringkasan. RAM tidak boleh melebihi 200 MB.

**Langkah pengerjaan**

1. Buat generator pembaca baris.
2. Rangkai filter dan transformasi tanpa list perantara.
3. Tulis hasil agregasi ke file.

:::note Deliverable
pipeline.py plus bukti penggunaan memori dari tracemalloc.
:::

## Checklist

- [ ] Bisa menjelaskan kenapa generator tidak bisa diulang dua kali.
- [ ] Tahu kapan comprehension justru merusak keterbacaan.
- [ ] Bisa menulis generator tanpa menyimpan seluruh data.
- [ ] Paham beda iterable dan iterator.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
