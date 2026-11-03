---
title: "2.1 Struktur Data Lanjutan"
sidebar_label: "2.1 Struktur Data Lanjutan"
description: "Modul collections menyediakan wadah yang lebih tepat untuk banyak masalah sehari-hari. Kamu juga mulai memikirkan biaya operasi."
---

# 2.1 Struktur Data Lanjutan

:::info Detail modul
**Fase 2 — Intermediate** · **Estimasi:** 5 jam
:::

Modul collections menyediakan wadah yang lebih tepat untuk banyak masalah sehari-hari. Kamu juga mulai memikirkan biaya operasi.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Memilih wadah berdasarkan kompleksitas operasi yang dominan.
- Memakai Counter, defaultdict, deque, dan namedtuple dengan tepat.
- Menjelaskan Big O secara informal untuk operasi umum.

## Materi inti

### Kompleksitas

- Konstan, linear, kuadratik
- Biaya pencarian di list vs set vs dict
- Kapan optimasi belum perlu

### collections

- Counter untuk frekuensi
- defaultdict untuk pengelompokan
- deque untuk antrean
- namedtuple untuk record ringan

### Pola

- Mengelompokkan data
- Menghitung frekuensi
- Antrean dan riwayat terbatas

## Latihan terbimbing

1. Hitung sepuluh kata paling sering dari file teks besar.
2. Kelompokkan transaksi per kategori memakai defaultdict.

## Studi kasus: Analisis log satu juta baris

Diberikan file log besar. Hitung frekuensi level log, endpoint tersibuk, dan waktu respons rata-rata tanpa menghabiskan memori.

**Langkah pengerjaan**

1. Baca file baris per baris, jangan dimuat sekaligus.
2. Gunakan Counter untuk frekuensi dan defaultdict untuk agregasi.
3. Tampilkan sepuluh hasil teratas.

:::note Deliverable
log_analyzer.py yang selesai di bawah 10 detik untuk file 100 MB.
:::

## Checklist

- [ ] Bisa menjelaskan kenapa cek keanggotaan di set cepat.
- [ ] Tahu kapan deque lebih tepat dari list.
- [ ] Bisa memilih wadah tanpa mencoba semua opsi.
- [ ] Tidak mengoptimasi sebelum mengukur.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
