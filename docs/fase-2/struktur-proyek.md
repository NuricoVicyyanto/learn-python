---
title: "2.7 Struktur Proyek & Packaging"
sidebar_label: "2.7 Struktur Proyek & Packaging"
description: "Proyek yang tumbuh perlu struktur. Kamu akan mengubah script menjadi package yang bisa dipasang dan diimpor dari mana saja."
---

# 2.7 Struktur Proyek & Packaging

:::info Detail modul
**Fase 2 — Intermediate** · **Estimasi:** 5 jam
:::

Proyek yang tumbuh perlu struktur. Kamu akan mengubah script menjadi package yang bisa dipasang dan diimpor dari mana saja.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menyusun layout src dan menjelaskan perannya.
- Mengelola dependensi lewat pyproject.toml.
- Memisahkan kode aplikasi, test, dan konfigurasi.

## Materi inti

### Layout

- Flat vs src layout
- init dan batas package
- Modul vs package
- Tempat menyimpan data dan konfigurasi

### Dependensi

- pyproject.toml
- Dependency vs dev dependency
- Version pinning
- Lock file

### Entry point

- Script console
- Module execution dengan python -m
- Versi dan metadata package

## Latihan terbimbing

1. Ubah proyek Expense Tracker menjadi package dengan layout src.
2. Tambahkan entry point agar bisa dijalankan dengan satu perintah.

## Studi kasus: Refactor menjadi package

Ambil proyek fase sebelumnya dan ubah menjadi package yang bisa diinstal di venv bersih, lengkap dengan perintah CLI.

**Langkah pengerjaan**

1. Pindahkan kode ke src/nama_package.
2. Definisikan dependencies dan entry point di pyproject.toml.
3. Uji instalasi di venv baru dan jalankan dari folder lain.

:::note Deliverable
package terinstal lokal dengan perintah CLI yang berfungsi.
:::

## Checklist

- [ ] Bisa membuat package yang diimpor dari luar folder proyek.
- [ ] Tahu beda dependency runtime dan development.
- [ ] Tidak menyimpan kode di root tanpa struktur.
- [ ] Bisa menjelaskan isi pyproject.toml milikmu.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
