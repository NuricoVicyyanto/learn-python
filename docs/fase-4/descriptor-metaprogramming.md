---
title: "4.3 Descriptor & Metaprogramming"
sidebar_label: "4.3 Descriptor & Metaprogramming"
description: "Fitur inilah yang membuat ORM, validasi, dan framework terasa seperti sihir. Kamu akan membongkar mekanismenya dan membangun versi sederhana."
---

# 4.3 Descriptor & Metaprogramming

:::info Detail modul
**Fase 4 — Expert** · **Estimasi:** 7 jam
:::

Fitur inilah yang membuat ORM, validasi, dan framework terasa seperti sihir. Kamu akan membongkar mekanismenya dan membangun versi sederhana.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menjelaskan descriptor protocol dan urutan pencarian atribut.
- Menggunakan metaclass dan init_subclass secara terukur.
- Membangun API deklaratif tanpa menyembunyikan terlalu banyak.

## Materi inti

### Atribut

- getattr dan getattribute
- Descriptor data vs non-data
- Property sebagai descriptor
- Slots

### Metaprogramming

- Metaclass
- init_subclass
- Class decorator
- Registri otomatis

### Risiko

- Kode sulit di-debug
- Benturan dengan tooling
- Kompatibilitas versi

## Latihan terbimbing

1. Implementasikan field validator dengan descriptor.
2. Buat registri plugin otomatis lewat init_subclass.

## Studi kasus: Mini ORM deklaratif

Bangun lapisan model yang memungkinkan deklarasi field dan validasi, lalu hasilkan query dasar dari metadata kelas.

**Langkah pengerjaan**

1. Gunakan descriptor untuk field bertipe.
2. Kumpulkan metadata lewat init_subclass.
3. Hasilkan query insert dan select sederhana.

:::note Deliverable
mini_orm.py dengan contoh model dan test.
:::

## Checklist

- [ ] Bisa menjelaskan urutan pencarian atribut.
- [ ] Tahu kapan descriptor berlebihan.
- [ ] Metaclass dipakai hanya jika alternatif lebih buruk.
- [ ] API hasil metaprogramming tetap mudah dipahami pengguna.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
