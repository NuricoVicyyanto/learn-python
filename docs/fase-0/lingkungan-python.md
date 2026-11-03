---
title: "0.1 Lingkungan & Instalasi Python"
sidebar_label: "0.1 Lingkungan & Instalasi Python"
description: "Memasang Python, mengenal virtual environment, dan menyiapkan editor. Ini fondasi yang menentukan apakah semua modul berikutnya berjalan lancar."
---

# 0.1 Lingkungan & Instalasi Python

:::info Detail modul
**Fase 0 — Fondasi** · **Estimasi:** 2 jam
:::

Memasang Python, mengenal virtual environment, dan menyiapkan editor. Ini fondasi yang menentukan apakah semua modul berikutnya berjalan lancar.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menjelaskan beda interpreter Python, virtual environment, dan package manager.
- Memasang Python 3.12 atau lebih baru dan memverifikasinya dari terminal.
- Membuat serta mengaktifkan virtual environment di Windows, Linux, dan macOS.

## Materi inti

### Konsep

- Kode sumber, interpreter, dan proses menjalankan file
- Versi Python dan mengapa proyek nyata sering mengunci versi
- Isolasi dependensi dengan virtual environment

### Praktik

- Instalasi dari python.org atau lewat uv
- Verifikasi dengan python --version dan where python
- Membuat venv: python -m venv .venv
- Aktivasi di Windows dan Unix
- pip install serta requirements.txt

### Editor

- VS Code dengan extension Python dan Pylance
- Memilih interpreter dari dalam VS Code
- Terminal terintegrasi dan tombol Run

## Latihan terbimbing

1. Buat folder latihan-0.1, lalu buat dua venv berbeda dan bandingkan isi folder site-packages.
2. Jalankan script yang mencetak versi Python dan lokasi interpreter, lalu simpan outputnya.

## Studi kasus: Dua versi Python, satu komputer

Kadang satu proyek butuh Python 3.11 dan proyek lain butuh 3.13. Kamu akan membuktikan bahwa dua venv bisa memakai versi berbeda tanpa saling mengganggu.

**Langkah pengerjaan**

1. Pasang dua versi Python (boleh lewat uv atau installer resmi).
2. Buat venv-a dan venv-b, masing-masing dengan versi berbeda.
3. Cetak sys.version di kedua venv dan bandingkan hasilnya.

:::note Deliverable
Folder latihan berisi dua venv, dua script versi, dan catatan singkat perbedaan output.
:::

## Checklist

- [ ] python --version dan pip --version jalan di terminal.
- [ ] Bisa membuat dan mengaktifkan venv tanpa melihat tutorial.
- [ ] Tahu cara memilih interpreter di VS Code.
- [ ] Tahu kenapa tidak boleh install package global untuk semua proyek.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
