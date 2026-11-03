---
title: "2.3 Fungsi Lanjutan & Decorator"
sidebar_label: "2.3 Fungsi Lanjutan & Decorator"
description: "Fungsi di Python adalah objek. Dari sifat itu lahir closure, higher-order function, dan decorator yang dipakai di hampir semua framework."
---

# 2.3 Fungsi Lanjutan & Decorator

:::info Detail modul
**Fase 2 — Intermediate** · **Estimasi:** 6 jam
:::

Fungsi di Python adalah objek. Dari sifat itu lahir closure, higher-order function, dan decorator yang dipakai di hampir semua framework.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menggunakan args dan kwargs secara sadar.
- Menjelaskan closure dan kapan variabel luar tertangkap.
- Menulis decorator untuk logging, timing, dan retry.

## Materi inti

### Fungsi sebagai nilai

- Menyimpan fungsi di variabel
- Mengirim fungsi sebagai argumen
- Mengembalikan fungsi dari fungsi

### Closure

- Variabel bebas dan scope
- Late binding pada loop
- functools.partial dan wraps

### Decorator

- Decorator tanpa argumen
- Decorator dengan argumen
- Decorator berlapis
- Decorator untuk caching dan retry

## Latihan terbimbing

1. Buat decorator yang mengukur waktu eksekusi dan mencetak nama fungsi.
2. Buat decorator retry dengan jumlah percobaan dan jeda.

## Studi kasus: Perpustakaan decorator mini

Bangun modul berisi tiga decorator siap pakai: timer, retry, dan cache sederhana. Semuanya harus mempertahankan nama serta docstring fungsi asli.

**Langkah pengerjaan**

1. Implementasikan timer memakai functools.wraps.
2. Tambahkan retry dengan parameter jumlah percobaan.
3. Buat cache berbasis dict dan jelaskan batasannya.

:::note Deliverable
decorators.py plus test untuk tiap decorator.
:::

## Checklist

- [ ] Bisa menjelaskan kenapa functools.wraps penting.
- [ ] Tahu beda argumen posisional dan keyword.
- [ ] Bisa menulis closure tanpa mengubah variabel global.
- [ ] Paham risiko decorator yang menyembunyikan error.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
