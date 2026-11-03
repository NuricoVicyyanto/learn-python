---
title: Rubrik Penilaian
sidebar_label: Rubrik penilaian
sidebar_position: 2
description: Cara menilai studi kasus dan menentukan apakah kamu boleh naik fase.
---

# Rubrik Penilaian

Nilai dirimu sendiri dengan jujur. Rubrik ini mencegah dua kesalahan umum: merasa sudah bisa padahal belum, dan terus mengulang padahal sudah layak lanjut.

## Bobot penilaian

| Aspek | Bobot | Yang dinilai |
| --- | --- | --- |
| Fungsional | 40% | Semua requirement jalan, termasuk kasus batas |
| Kualitas kode | 20% | Keterbacaan, pemisahan tanggung jawab, tanpa duplikasi besar |
| Testing | 15% | Test untuk logika inti dan jalur error |
| Dokumentasi | 15% | README, cara menjalankan, keputusan desain |
| Refleksi | 10% | Catatan proses, kesulitan, dan rencana perbaikan |

**Ambang lulus: 75 dari 100.**

## Skala tiap aspek

### Fungsional

| Skor | Kriteria |
| --- | --- |
| 0 | Tidak berjalan |
| 1 | Sebagian fitur berjalan, sering crash |
| 2 | Semua fitur utama berjalan, kasus batas diabaikan |
| 3 | Semua fitur berjalan, input salah ditangani |
| 4 | Semua fitur berjalan, perilaku terdefinisi untuk kasus ekstrem |

### Kualitas kode

| Skor | Kriteria |
| --- | --- |
| 0 | Satu file raksasa, nama tidak jelas |
| 1 | Ada fungsi, tetapi banyak duplikasi dan state global |
| 2 | Terstruktur, sebagian nama masih kabur |
| 3 | Modul dan fungsi punya tanggung jawab jelas |
| 4 | Mudah diubah tanpa takut merusak bagian lain |

### Testing

| Skor | Kriteria |
| --- | --- |
| 0 | Tidak ada test |
| 1 | Test hanya jalur sukses |
| 2 | Ada test jalur error, cakupan terbatas |
| 3 | Logika inti teruji, termasuk kasus batas |
| 4 | Test menjadi dokumentasi perilaku dan mudah dipercaya |

### Dokumentasi

| Skor | Kriteria |
| --- | --- |
| 0 | Tidak ada README |
| 1 | README hanya judul |
| 2 | Cara menjalankan tertulis tetapi tidak lengkap |
| 3 | Instalasi, penggunaan, dan struktur dijelaskan |
| 4 | Plus keputusan desain dan batasan yang diketahui |

### Refleksi

| Skor | Kriteria |
| --- | --- |
| 0 | Tidak ada catatan |
| 1 | Catatan sangat umum |
| 2 | Menyebut kesulitan tanpa analisis |
| 3 | Menjelaskan penyebab dan solusi |
| 4 | Menarik pelajaran yang bisa dipakai di proyek berikutnya |

## Lembar penilaian proyek

Salin ke `catatan/penilaian-<proyek>.md`:

```markdown
# Penilaian: <nama proyek>

Tanggal: ...
Fase: ...

| Aspek | Skor (0-4) | Bobot | Nilai |
| --- | --- | --- | --- |
| Fungsional | | 40% | |
| Kualitas kode | | 20% | |
| Testing | | 15% | |
| Dokumentasi | | 15% | |
| Refleksi | 10% | | |

Total: ... / 100

## Tiga hal terbaik
1.
2.
3.

## Tiga hal yang harus diperbaiki
1.
2.
3.

## Keputusan
- [ ] Lulus, lanjut fase berikutnya
- [ ] Perbaiki lalu nilai ulang
```

## Aturan naik fase

Kamu boleh lanjut jika:

1. Semua modul fase sudah diceklis.
2. Proyek akhir fase mendapat minimal 75.
3. Kamu bisa menjelaskan proyek itu selama lima menit tanpa membaca kode.
4. Tidak ada requirement wajib yang dilewati.

:::warning Jangan menilai berdasarkan jumlah baris
Kode panjang bukan tanda kemajuan. Kode pendek yang jelas dan teruji lebih bernilai.
:::
