---
title: "3.6 Packaging & CLI"
sidebar_label: "3.6 Packaging & CLI"
description: "Agar kode dipakai orang lain, ia harus mudah dipasang dan dijalankan. Kamu akan membangun CLI profesional dan mempublikasikannya."
---

# 3.6 Packaging & CLI

:::info Detail modul
**Fase 3 — Advanced** · **Estimasi:** 5 jam
:::

Agar kode dipakai orang lain, ia harus mudah dipasang dan dijalankan. Kamu akan membangun CLI profesional dan mempublikasikannya.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Membangun wheel dan source distribution.
- Membuat CLI dengan typer atau click.
- Mengelola versi dan menulis changelog.

## Materi inti

### Build

- pyproject.toml modern
- python -m build
- Memeriksa isi wheel
- Versioning semantik

### CLI

- typer atau click
- Argumen, opsi, dan help
- Exit code dan pesan error
- Konfigurasi lewat environment

### Distribusi

- TestPyPI lalu PyPI
- README sebagai halaman package
- Lisensi

## Latihan terbimbing

1. Bungkus salah satu proyek menjadi perintah CLI.
2. Build wheel lalu pasang di venv bersih.

## Studi kasus: Publikasikan CLI ke TestPyPI

Rilis satu perintah CLI yang berguna, lengkap dengan dokumentasi, versi, dan changelog.

**Langkah pengerjaan**

1. Rapikan metadata package dan README.
2. Build lalu unggah ke TestPyPI.
3. Pasang dari index tersebut dan uji dari folder lain.

:::note Deliverable
package terpasang dari TestPyPI dan tautan halamannya.
:::

## Checklist

- [ ] Bisa menjelaskan isi wheel.
- [ ] Tahu beda argumen dan opsi CLI.
- [ ] CLI memberi exit code yang benar.
- [ ] Versi mengikuti aturan yang konsisten.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
