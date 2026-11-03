---
title: "0.3 Git Dasar"
sidebar_label: "0.3 Git Dasar"
description: "Git menyimpan riwayat pekerjaanmu. Fokus modul ini bukan menghafal semua perintah, tapi kebiasaan commit kecil yang jelas."
---

# 0.3 Git Dasar

:::info Detail modul
**Fase 0 — Fondasi** · **Estimasi:** 3 jam
:::

Git menyimpan riwayat pekerjaanmu. Fokus modul ini bukan menghafal semua perintah, tapi kebiasaan commit kecil yang jelas.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Membuat repository dan melakukan commit pertama.
- Menulis pesan commit yang menjelaskan niat perubahan.
- Menggunakan .gitignore agar file sampah tidak masuk riwayat.

## Materi inti

### Alur dasar

- init, status, add, commit, log
- Area kerja vs staging area
- diff untuk melihat perubahan

### Kebiasaan baik

- Commit kecil dan sering
- Pesan commit berpola kata kerja
- Satu commit satu tujuan

### Kolaborasi

- Branch dan checkout
- Remote, push, dan pull
- Menyelesaikan konflik sederhana

## Latihan terbimbing

1. Commit script hello.py dalam tiga langkah: file kosong, isi, lalu perbaikan pesan.
2. Buat branch baru, ubah satu baris, lalu gabungkan kembali ke main.

## Studi kasus: Riwayat commit yang bisa dibaca orang lain

Kamu mewarisi folder berisi script berantakan. Ubah menjadi repo dengan riwayat yang menceritakan proses pengerjaan.

**Langkah pengerjaan**

1. Inisialisasi repo dan tambahkan .gitignore untuk venv serta file cache.
2. Pecah pekerjaan menjadi minimal lima commit bermakna.
3. Tampilkan git log --oneline dan pastikan urutannya logis.

:::note Deliverable
Repo dengan minimal lima commit dan pesan yang konsisten.
:::

## Checklist

- [ ] Bisa menjelaskan beda add dan commit.
- [ ] Tahu fungsi .gitignore dan pernah membuatnya.
- [ ] Bisa membaca git log dan git diff.
- [ ] Tidak pernah commit folder venv.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
