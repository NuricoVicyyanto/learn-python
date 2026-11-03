---
title: "1.4 Struktur Data Dasar"
sidebar_label: "1.4 Struktur Data Dasar"
description: "List, tuple, set, dan dict adalah empat wadah utama. Memilih wadah yang tepat menyederhanakan banyak masalah."
---

# 1.4 Struktur Data Dasar

:::info Detail modul
**Fase 1 — Beginner** · **Estimasi:** 5 jam
:::

List, tuple, set, dan dict adalah empat wadah utama. Memilih wadah yang tepat menyederhanakan banyak masalah.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Memilih list, tuple, set, atau dict berdasarkan kebutuhan.
- Menambah, mengubah, menghapus, dan mencari elemen dengan efisien.
- Mengurutkan dan mentransformasi kumpulan data sederhana.

## Materi inti

### List dan tuple

- Membuat, menambah, menghapus
- Indexing, slicing, dan salinan
- Sorting dengan key
- Tuple untuk data yang tidak berubah

### Set

- Keunikan otomatis
- Operasi himpunan: union, intersection, difference
- Kapan set lebih cepat dari list

### Dict

- Pasangan kunci dan nilai
- get, keys, values, items
- Iterasi dan update
- Nested dict untuk data berlapis

## Latihan terbimbing

1. Hitung frekuensi kata dalam sebuah paragraf memakai dict.
2. Cari irisan dua daftar nama tanpa loop bersarang.

## Studi kasus: Daftar belanja pintar

Buat program daftar belanja yang mencegah duplikasi, menghitung total, dan mengelompokkan barang per kategori.

**Langkah pengerjaan**

1. Simpan barang sebagai dict berisi nama, harga, dan kategori.
2. Gunakan set untuk mencegah nama barang ganda.
3. Hitung subtotal per kategori dan total keseluruhan.

:::note Deliverable
belanja.py dengan fitur tambah, hapus, lihat, dan total.
:::

## Checklist

- [ ] Tahu kapan tuple lebih tepat daripada list.
- [ ] Bisa mengurutkan list of dict dengan key.
- [ ] Paham kenapa pencarian di set lebih cepat daripada di list.
- [ ] Bisa mengakses nilai dict tanpa KeyError.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
