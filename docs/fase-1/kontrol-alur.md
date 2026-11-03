---
title: "1.2 Kontrol Alur"
sidebar_label: "1.2 Kontrol Alur"
description: "Program mulai mengambil keputusan dan mengulang pekerjaan. Fokusnya adalah menulis kondisi yang mudah dibaca dan loop yang pasti berhenti."
---

# 1.2 Kontrol Alur

:::info Detail modul
**Fase 1 — Beginner** · **Estimasi:** 4 jam
:::

Program mulai mengambil keputusan dan mengulang pekerjaan. Fokusnya adalah menulis kondisi yang mudah dibaca dan loop yang pasti berhenti.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menyusun percabangan bertingkat tanpa membuat kode sulit dibaca.
- Memilih for atau while sesuai bentuk masalah.
- Menggunakan break, continue, dan else pada loop dengan tepat.

## Materi inti

### Percabangan

- if, elif, else
- Kondisi bertingkat dan early return
- Ternary untuk kasus sederhana
- match case untuk banyak pilihan

### Perulangan

- for dan range
- while dan kondisi berhenti
- break, continue, dan loop else
- Loop bersarang dan batasannya

### Pola

- Validasi input berulang
- Menu interaktif
- Akumulator dan pencacah

## Latihan terbimbing

1. Buat tebak angka dengan batas percobaan dan petunjuk terlalu besar atau kecil.
2. Ubah rantai if panjang menjadi match case.

## Studi kasus: Menu aplikasi interaktif

Bangun menu teks yang terus berjalan sampai pengguna memilih keluar. Setiap pilihan menjalankan aksi berbeda dan menangani input tidak valid.

**Langkah pengerjaan**

1. Rancang daftar menu dan aksi masing-masing.
2. Gunakan loop utama dengan match case.
3. Pastikan pilihan tidak dikenal tidak menghentikan program.

:::note Deliverable
menu.py dengan minimal empat aksi dan satu jalur keluar yang bersih.
:::

## Checklist

- [ ] Bisa menjelaskan kapan while lebih tepat dari for.
- [ ] Tidak membuat loop tanpa kondisi berhenti yang jelas.
- [ ] Bisa membaca percabangan bertingkat dan menyederhanakannya.
- [ ] Tahu efek break pada loop bersarang.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
