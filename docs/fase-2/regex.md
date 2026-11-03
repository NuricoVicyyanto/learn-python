---
title: "2.10 Regular Expression"
sidebar_label: "2.10 Regular Expression"
description: "Regex kuat untuk pola teks, tetapi juga mudah menjadi kode yang tidak bisa dibaca. Modul ini menekankan pola sederhana dan pengujian."
---

# 2.10 Regular Expression

:::info Detail modul
**Fase 2 — Intermediate** · **Estimasi:** 4 jam
:::

Regex kuat untuk pola teks, tetapi juga mudah menjadi kode yang tidak bisa dibaca. Modul ini menekankan pola sederhana dan pengujian.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menulis pola untuk pencarian dan ekstraksi teks.
- Memakai grup, nama grup, dan substitusi.
- Mengenali risiko pola yang lambat pada input besar.

## Materi inti

### Dasar

- Karakter literal dan meta
- Kelas karakter, kuantifier, anchor
- Greedy vs non-greedy

### Fitur

- Grup dan named group
- findall, finditer, sub
- Flag case-insensitive dan multiline

### Keamanan

- ReDoS dan pola bersarang
- Membatasi input
- Kapan parser lebih tepat dari regex

## Latihan terbimbing

1. Ambil tanggal, level, dan pesan dari baris log.
2. Validasi format email sederhana dan jelaskan batasannya.

## Studi kasus: Parser log format custom

Log aplikasi punya format tidak standar. Ekstrak komponennya menjadi data terstruktur dan hitung statistik per level.

**Langkah pengerjaan**

1. Tulis pola dengan named group.
2. Uji pada sepuluh baris contoh, termasuk baris rusak.
3. Hasilkan ringkasan statistik dari hasil parsing.

:::note Deliverable
log_parser.py dengan test untuk baris valid dan tidak valid.
:::

## Checklist

- [ ] Bisa menjelaskan arti setiap bagian polamu.
- [ ] Tahu kapan regex bukan alat yang tepat.
- [ ] Selalu menguji pola pada input nyata.
- [ ] Paham risiko pola yang bisa melambat eksponensial.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
