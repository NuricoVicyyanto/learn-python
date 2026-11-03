---
title: "3.2 Idiom Pythonic"
sidebar_label: "3.2 Idiom Pythonic"
description: "Kode Python yang baik terasa sederhana. Modul ini membongkar kebiasaan yang dibawa dari bahasa lain dan menggantinya dengan idiom asli Python."
---

# 3.2 Idiom Pythonic

:::info Detail modul
**Fase 3 — Advanced** · **Estimasi:** 4 jam
:::

Kode Python yang baik terasa sederhana. Modul ini membongkar kebiasaan yang dibawa dari bahasa lain dan menggantinya dengan idiom asli Python.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menerapkan EAFP dan duck typing dengan tepat.
- Mengenali anti-pattern umum pemula dan mantan pengguna bahasa lain.
- Menulis ulang kode verbose menjadi ringkas tanpa kehilangan kejelasan.

## Materi inti

### Filosofi

- Zen of Python
- EAFP vs LBYL
- Duck typing dan Protocol
- Explicit lebih baik dari implicit

### Anti-pattern

- Loop dengan index untuk akses nilai
- Getter dan setter manual
- If panjang untuk cek tipe
- String concatenation di loop

### Perkakas

- enumerate dan zip
- Unpacking dan star expression
- with untuk sumber daya
- pathlib menggantikan os.path

## Latihan terbimbing

1. Refactor 200 baris kode bergaya Java menjadi idiom Python.
2. Ganti pengecekan tipe manual dengan polymorphisme atau Protocol.

## Studi kasus: Audit kode warisan

Diberikan modul yang berjalan benar tetapi sulit dibaca. Refactor tanpa mengubah perilaku, lalu buktikan dengan test.

**Langkah pengerjaan**

1. Tulis test karakterisasi untuk perilaku saat ini.
2. Refactor bertahap dalam beberapa commit kecil.
3. Bandingkan jumlah baris dan keterbacaan sebelum sesudah.

:::note Deliverable
modul hasil refactor plus test dan catatan perubahan.
:::

## Checklist

- [ ] Tidak memakai range(len(...)) untuk mengakses nilai.
- [ ] Bisa menjelaskan EAFP dengan contoh nyata.
- [ ] Tahu kapan kode ringkas justru membingungkan.
- [ ] Refactor selalu didahului test.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
