---
title: "1.1 Variabel & Tipe Data"
sidebar_label: "1.1 Variabel & Tipe Data"
description: "Nilai di Python punya tipe, dan tipe menentukan operasi apa yang masuk akal. Modul ini juga memperkenalkan konsep mutability yang akan sering muncul lagi."
---

# 1.1 Variabel & Tipe Data

:::info Detail modul
**Fase 1 — Beginner** · **Estimasi:** 4 jam
:::

Nilai di Python punya tipe, dan tipe menentukan operasi apa yang masuk akal. Modul ini juga memperkenalkan konsep mutability yang akan sering muncul lagi.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Mengenali int, float, str, bool, dan None serta kapan dipakai.
- Melakukan konversi tipe secara sadar, termasuk saat membaca input.
- Membedakan objek mutable dan immutable secara praktis.

## Materi inti

### Tipe dasar

- Bilangan bulat, desimal, dan keterbatasan float
- String sebagai urutan karakter
- Boolean dan nilai kebenaran
- None sebagai penanda belum ada nilai

### Operasi

- Aritmatika, pembagian bulat, modulo, pangkat
- Perbandingan dan operator logika
- Konversi eksplisit dengan int, float, str
- Assignment ganda dan unpacking

### Mutability

- Immutable: int, str, tuple
- Mutable: list, dict, set
- Efek samping saat dua variabel menunjuk objek yang sama

## Latihan terbimbing

1. Hitung indeks massa tubuh dari input tinggi dan berat, lalu bulatkan ke satu desimal.
2. Tukar nilai dua variabel tanpa variabel bantu.

## Studi kasus: Konverter satuan serbaguna

Buat program yang mengubah suhu, panjang, dan berat. Program harus menolak input bukan angka dengan pesan yang jelas.

**Langkah pengerjaan**

1. Tentukan tiga kategori konversi dan rumusnya.
2. Baca input, konversi ke float, dan tangani kegagalan konversi.
3. Tampilkan hasil dengan satuan asal dan tujuan.

:::note Deliverable
satu file konverter.py yang bisa mengubah minimal enam pasangan satuan.
:::

## Checklist

- [ ] Bisa menjelaskan kenapa 0.1 + 0.2 tidak sama persis dengan 0.3.
- [ ] Tahu kapan memakai int dan kapan float.
- [ ] Bisa mengubah input pengguna menjadi angka dengan aman.
- [ ] Paham kenapa string tidak bisa diubah di tempat.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
