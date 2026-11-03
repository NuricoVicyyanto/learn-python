---
title: "Fase 0 — Fondasi & Setup"
sidebar_label: "Ringkasan fase"
sidebar_position: 0
---

# Fase 0 — Fondasi & Setup

> Siapkan alat kerja sebelum menulis kode

:::info Ringkasan fase
**Level:** Pemula total · **Durasi:** 1 minggu · 10–15 jam
:::

Fase ini tidak mengajarkan sintaks Python secara mendalam. Tujuannya satu: memastikan kamu punya lingkungan kerja yang rapi, bisa menjalankan file Python, membaca pesan error, dan menyimpan pekerjaan dengan Git. Semua fase berikutnya bergantung pada fase ini.

## Tujuan fase

Setelah menyelesaikan fase ini, kamu mampu:

- Memasang Python dan memilih interpreter yang benar di editor.
- Menggunakan terminal untuk berpindah folder, menjalankan program, dan membaca output.
- Menyimpan pekerjaan dengan Git memakai commit yang bermakna.
- Membaca traceback dan menemukan baris penyebab error.

## Peta modul

| Modul | Materi | Estimasi |
| --- | --- | --- |
| 0.1 | [Lingkungan & Instalasi Python](/docs/fase-0/lingkungan-python) | 2 jam |
| 0.2 | [Terminal & Shell](/docs/fase-0/terminal-dan-shell) | 2 jam |
| 0.3 | [Git Dasar](/docs/fase-0/git-dasar) | 3 jam |
| 0.4 | [Membaca Traceback](/docs/fase-0/membaca-error) | 2 jam |
| 0.5 | [Debugging Dasar](/docs/fase-0/debugging-dasar) | 2 jam |

## Proyek akhir fase

### hello-env

Proyek pembuka untuk membuktikan lingkungan kerjamu siap. Tidak ada logika rumit di sini; yang dinilai adalah kerapian setup.

**Requirement wajib**

- Script hello.py menerima nama lewat argumen dan menampilkan sapaan.
- Virtual environment terpisah dan tidak ikut masuk Git.
- Ada requirements.txt, meskipun isinya kosong atau hanya satu package.
- README menjelaskan cara memasang dan menjalankan proyek dari nol.
- Minimal tiga commit dengan pesan yang jelas.

**Nilai tambah**

- Tambahkan opsi --uppercase untuk mengubah sapaan menjadi huruf besar.
- Tambahkan penanganan saat nama tidak diberikan.

:::tip Aturan pengerjaan
Kerjakan proyek ini di folder terpisah dengan repository sendiri. Tulis README sebelum mulai menulis kode, lalu perbarui setiap kali ada keputusan penting.
:::

## Exit criteria

Kamu boleh lanjut ke fase berikutnya jika:

- Bisa membuat proyek Python dari nol tanpa menyalin perintah dari tutorial.
- Bisa menjalankan, menghentikan, dan men-debug script di editor.
- Repo punya riwayat commit yang rapi dan .gitignore yang benar.
- Tidak takut lagi melihat traceback.

## Tips dari fase ini

- Jangan mengoleksi banyak editor atau package manager sekaligus. Pilih satu, kuasai dulu.
- Kalau ada perintah yang tidak dipahami, jalankan dengan --help sebelum menyalin dari internet.
- Simpan semua error yang pernah kamu temui beserta solusinya. Itu akan jadi catatan pribadi paling berguna.
