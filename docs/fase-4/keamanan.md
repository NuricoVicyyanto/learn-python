---
title: "4.9 Keamanan Aplikasi Python"
sidebar_label: "4.9 Keamanan Aplikasi Python"
description: "Keamanan bukan fitur tambahan di akhir. Ia keputusan yang muncul di setiap lapisan, dari dependensi sampai serialisasi data."
---

# 4.9 Keamanan Aplikasi Python

:::info Detail modul
**Fase 4 — Expert** · **Estimasi:** 6 jam
:::

Keamanan bukan fitur tambahan di akhir. Ia keputusan yang muncul di setiap lapisan, dari dependensi sampai serialisasi data.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Mengidentifikasi risiko umum pada aplikasi Python.
- Mengamankan supply chain dependensi.
- Menghindari pola berbahaya seperti unpickle data tak tepercaya.

## Materi inti

### Kode

- Validasi input dan output encoding
- Injeksi SQL dan command
- Path traversal
- Deserialisasi berbahaya

### Supply chain

- pip-audit
- Pin dan hash dependency
- SBOM
- Tanda tangan artefak

### Operasi

- Manajemen secret
- Least privilege
- Rotasi kredensial
- Sandbox dan pembatasan resource

## Latihan terbimbing

1. Audit dependensi satu proyek dan perbaiki temuan kritis.
2. Tulis threat model sederhana untuk API milikmu.

## Studi kasus: Hardening satu layanan

Lakukan review keamanan pada API TaskFlow: dependensi, rahasia, input berbahaya, dan konfigurasi container.

**Langkah pengerjaan**

1. Jalankan pemindai dependensi dan catat temuan.
2. Uji tiga skenario serangan umum.
3. Terapkan perbaikan dan tulis checklist keamanan.

:::note Deliverable
laporan audit dan daftar perbaikan yang sudah diterapkan.
:::

## Checklist

- [ ] Tidak memakai eval atau pickle untuk data eksternal.
- [ ] Secret tidak pernah masuk repo.
- [ ] Dependensi diperiksa berkala.
- [ ] Bisa menjelaskan model ancaman aplikasimu.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
