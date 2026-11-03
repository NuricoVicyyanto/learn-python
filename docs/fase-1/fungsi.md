---
title: "1.5 Fungsi"
sidebar_label: "1.5 Fungsi"
description: "Fungsi adalah alat utama untuk mengendalikan kompleksitas. Modul ini menekankan fungsi kecil dengan nama jelas dan tanggung jawab tunggal."
---

# 1.5 Fungsi

:::info Detail modul
**Fase 1 — Beginner** · **Estimasi:** 5 jam
:::

Fungsi adalah alat utama untuk mengendalikan kompleksitas. Modul ini menekankan fungsi kecil dengan nama jelas dan tanggung jawab tunggal.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menulis fungsi dengan parameter dan nilai balik yang jelas.
- Membedakan print dan return serta kapan memakai masing-masing.
- Memahami scope lokal, global, dan bahaya state global.

## Materi inti

### Dasar

- def, parameter, argumen, return
- Fungsi tanpa return mengembalikan None
- Docstring singkat

### Parameter

- Posisional vs keyword
- Nilai default dan jebakan objek mutable
- Jumlah argumen dinamis dengan args dan kwargs

### Desain

- Satu fungsi satu tanggung jawab
- Nama berbasis kata kerja
- Menghindari efek samping tersembunyi

## Latihan terbimbing

1. Pecah kalkulator 100 baris menjadi lima fungsi kecil.
2. Tulis fungsi yang mengembalikan dua nilai sekaligus.

## Studi kasus: Refactor kalkulator prosedural

Kamu diberi kalkulator yang seluruh logikanya berada di satu blok panjang. Pecah tanpa mengubah perilaku.

**Langkah pengerjaan**

1. Identifikasi tanggung jawab: baca input, validasi, hitung, tampilkan.
2. Pindahkan setiap tanggung jawab ke fungsi sendiri.
3. Tulis pemanggilan utama di dalam blok if __name__ == "__main__".

:::note Deliverable
kalkulator.py hasil refactor dengan fungsi pendek dan nama jelas.
:::

## Checklist

- [ ] Bisa menjelaskan beda print dan return.
- [ ] Tahu kenapa default parameter berupa list berbahaya.
- [ ] Bisa menulis fungsi tanpa variabel global.
- [ ] Fungsi yang kamu tulis punya nama yang menjelaskan aksinya.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
