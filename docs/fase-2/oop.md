---
title: "2.4 Object-Oriented Programming"
sidebar_label: "2.4 Object-Oriented Programming"
description: "OOP dipakai saat data dan perilaku memang harus hidup bersama. Fokus modul ini adalah model yang jujur, bukan hierarki kelas yang dipaksakan."
---

# 2.4 Object-Oriented Programming

:::info Detail modul
**Fase 2 — Intermediate** · **Estimasi:** 8 jam
:::

OOP dipakai saat data dan perilaku memang harus hidup bersama. Fokus modul ini adalah model yang jujur, bukan hierarki kelas yang dipaksakan.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Merancang kelas dengan state dan perilaku yang koheren.
- Memilih composition atau inheritance berdasarkan masalah.
- Memakai dunder, property, dan dataclass secara tepat.

## Materi inti

### Dasar

- Class, instance, dan atribut
- Method dan self
- Constructor dan validasi awal

### Relasi

- Inheritance dan override
- super dan method resolution order
- Composition sebagai default
- Abstract base class

### Pythonic OOP

- Property untuk akses terkontrol
- Dunder penting: repr, eq, len, iter
- dataclass dan frozen
- Slots untuk efisiensi

## Latihan terbimbing

1. Modelkan Akun, Transaksi, dan Budget dengan relasi yang jelas.
2. Bandingkan implementasi inheritance dan composition untuk kasus yang sama.

## Studi kasus: Model domain keuangan

Rancang model untuk aplikasi keuangan pribadi: akun punya saldo, transaksi mengubah saldo, dan anggaran memantau batas kategori.

**Langkah pengerjaan**

1. Tentukan invarian yang harus selalu benar.
2. Implementasikan validasi di constructor dan property.
3. Tulis repr yang membantu debugging dan test perilaku.

:::note Deliverable
models.py dengan minimal tiga kelas dan test untuk invariannya.
:::

## Checklist

- [ ] Bisa menjelaskan kapan tidak perlu membuat kelas.
- [ ] Tahu beda atribut kelas dan instance.
- [ ] Bisa menjelaskan MRO secara sederhana.
- [ ] Tidak memakai inheritance hanya untuk berbagi kode.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
