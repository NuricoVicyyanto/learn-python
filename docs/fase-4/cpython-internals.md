---
title: "4.1 CPython Internals"
sidebar_label: "4.1 CPython Internals"
description: "Dengan memahami compiler dan interpreter, pesan error, performa, dan perilaku aneh Python menjadi masuk akal."
---

# 4.1 CPython Internals

:::info Detail modul
**Fase 4 — Expert** · **Estimasi:** 8 jam
:::

Dengan memahami compiler dan interpreter, pesan error, performa, dan perilaku aneh Python menjadi masuk akal.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menjelaskan tahap tokenize, parse, compile, dan eksekusi.
- Membaca bytecode dengan dis dan menghubungkannya ke kode sumber.
- Menggunakan ast untuk menganalisis atau mengubah kode secara terprogram.

## Materi inti

### Pipeline

- Source ke AST
- Code object
- Frame dan evaluation loop
- Konstanta dan nama

### Bytecode

- dis dan opcode umum
- LOAD_FAST vs LOAD_GLOBAL
- Pengaruh versi Python
- Specializing interpreter 3.11+

### AST

- ast.parse dan walk
- Menulis transformer sederhana
- Risiko dan batasan

## Latihan terbimbing

1. Bandingkan bytecode fungsi dengan variabel lokal dan global.
2. Tulis linter mini yang mendeteksi pemanggilan print lewat AST.

## Studi kasus: Bytecode transformer

Bangun alat yang menambahkan logging otomatis pada setiap fungsi di sebuah modul, tanpa mengubah file sumber.

**Langkah pengerjaan**

1. Parse modul menjadi AST.
2. Sisipkan pemanggilan logging di awal setiap fungsi.
3. Compile ulang dan jalankan, lalu verifikasi perilakunya.

:::note Deliverable
transformer.py plus contoh modul yang berhasil diinstrumentasi.
:::

## Checklist

- [ ] Bisa menjelaskan isi code object.
- [ ] Bisa membaca dis untuk fungsi sederhana.
- [ ] Tahu kenapa akses lokal lebih cepat dari global.
- [ ] Paham batasan mengubah AST saat runtime.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
