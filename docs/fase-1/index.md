---
title: "Fase 1 — Beginner: Bahasa Inti"
sidebar_label: "Ringkasan fase"
sidebar_position: 0
---

# Fase 1 — Beginner: Bahasa Inti

> Menulis program utuh pertama

:::info Ringkasan fase
**Level:** Beginner · **Durasi:** 4–5 minggu · 40–50 jam
:::

Fase ini membangun kosakata dasar Python: nilai, kontrol alur, teks, kumpulan data, fungsi, error, file, dan modul. Setelah selesai, kamu bisa menulis program 200–400 baris tanpa menyalin kode orang lain.

## Tujuan fase

Setelah menyelesaikan fase ini, kamu mampu:

- Menyelesaikan masalah kecil dengan kombinasi tipe data, kondisi, dan perulangan.
- Memecah program menjadi fungsi yang punya satu tanggung jawab jelas.
- Menyimpan dan membaca data dari file JSON atau teks.
- Menangani input pengguna yang salah tanpa membuat program berhenti.

## Peta modul

| Modul | Materi | Estimasi |
| --- | --- | --- |
| 1.1 | [Variabel & Tipe Data](/docs/fase-1/variabel-dan-tipe-data) | 4 jam |
| 1.2 | [Kontrol Alur](/docs/fase-1/kontrol-alur) | 4 jam |
| 1.3 | [String & Formatting](/docs/fase-1/string) | 4 jam |
| 1.4 | [Struktur Data Dasar](/docs/fase-1/struktur-data-dasar) | 5 jam |
| 1.5 | [Fungsi](/docs/fase-1/fungsi) | 5 jam |
| 1.6 | [Error Handling Dasar](/docs/fase-1/error-handling-dasar) | 3 jam |
| 1.7 | [File & Path](/docs/fase-1/file-dan-path) | 4 jam |
| 1.8 | [Modul & Standard Library](/docs/fase-1/modul-dan-stdlib) | 4 jam |

## Proyek akhir fase

### Expense Tracker CLI

Proyek pertama yang menyatukan semua materi fase ini: input, validasi, struktur data, fungsi, file, dan modul. Tidak perlu framework apa pun.

**Requirement wajib**

- Tambah pengeluaran berisi tanggal, kategori, nominal, dan catatan.
- Lihat daftar pengeluaran dengan filter kategori dan bulan.
- Hitung total keseluruhan serta total per kategori.
- Hapus pengeluaran berdasarkan ID.
- Data tersimpan di JSON dan tetap ada setelah program ditutup.
- Input tidak valid tidak boleh membuat program crash.
- Kode terpisah minimal menjadi main.py, storage.py, dan cli.py.

**Nilai tambah**

- Ekspor laporan ke CSV.
- Anggaran bulanan dengan peringatan saat hampir habis.
- Perintah bantuan yang menjelaskan semua opsi.

:::tip Aturan pengerjaan
Kerjakan proyek ini di folder terpisah dengan repository sendiri. Tulis README sebelum mulai menulis kode, lalu perbarui setiap kali ada keputusan penting.
:::

## Exit criteria

Kamu boleh lanjut ke fase berikutnya jika:

- Bisa menulis program 200–400 baris dari nol tanpa menyalin.
- Bisa menjelaskan alasan setiap struktur data yang dipilih.
- Program tidak crash karena input pengguna yang salah.
- Data bisa disimpan dan dimuat kembali dengan benar.

## Tips dari fase ini

- Jangan mengejar kode pendek. Kejar kode yang jelas.
- Kalau sebuah fungsi butuh lebih dari satu layar, pecah.
- Biasakan mengetik ulang contoh, bukan copy-paste. Otot mengingat lebih baik dari mata.
