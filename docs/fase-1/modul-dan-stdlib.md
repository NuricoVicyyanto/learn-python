---
title: "1.8 Modul & Standard Library"
sidebar_label: "1.8 Modul & Standard Library"
description: "Python hadir dengan banyak modul siap pakai. Belajar membacanya jauh lebih berharga daripada menghafal."
---

# 1.8 Modul & Standard Library

:::info Detail modul
**Fase 1 — Beginner** · **Estimasi:** 4 jam
:::

Python hadir dengan banyak modul siap pakai. Belajar membacanya jauh lebih berharga daripada menghafal.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Mengimpor modul dan memilih bentuk import yang tepat.
- Memakai modul math, random, datetime, json, dan sys.
- Menulis script yang bisa dijalankan langsung maupun diimpor.

## Materi inti

### Import

- import, from, as
- Namespace dan tabrakan nama
- if __name__ == "__main__"

### Modul berguna

- math dan random
- datetime dan timedelta
- json untuk pertukaran data
- sys.argv untuk argumen terminal

### Menjelajah

- Membaca dokumentasi modul
- Mencoba di REPL
- Melihat isi modul dengan dir dan help

## Latihan terbimbing

1. Buat program yang mencetak tanggal hari ini dalam format Indonesia.
2. Simpan dan muat skor permainan dari file JSON.

## Studi kasus: Pencatat skor permainan

Buat program yang menyimpan skor pemain, menampilkan peringkat, dan bertahan setelah program ditutup.

**Langkah pengerjaan**

1. Rancang struktur JSON berisi nama dan skor.
2. Muat data saat mulai, simpan setiap kali ada skor baru.
3. Urutkan dan tampilkan lima besar.

:::note Deliverable
skor.py dengan penyimpanan permanen dan papan peringkat.
:::

## Checklist

- [ ] Bisa menjelaskan fungsi blok __main__.
- [ ] Tahu cara membaca dokumentasi modul standar.
- [ ] Bisa menyimpan struktur data ke JSON dan memuatnya kembali.
- [ ] Tidak menamai file sama dengan modul standar.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
