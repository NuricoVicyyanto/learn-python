---
title: "3.9 Web API dengan FastAPI"
sidebar_label: "3.9 Web API dengan FastAPI"
description: "Modul ini menyatukan validasi, database, autentikasi, dan dokumentasi otomatis menjadi satu layanan yang layak dipakai."
---

# 3.9 Web API dengan FastAPI

:::info Detail modul
**Fase 3 — Advanced** · **Estimasi:** 8 jam
:::

Modul ini menyatukan validasi, database, autentikasi, dan dokumentasi otomatis menjadi satu layanan yang layak dipakai.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Membangun endpoint CRUD dengan validasi Pydantic.
- Menerapkan autentikasi token dan otorisasi dasar.
- Menangani error secara konsisten dan mendokumentasikan API.

## Materi inti

### Dasar

- Routing dan dependency injection
- Request dan response model
- Status code dan error handler
- Dokumentasi OpenAPI otomatis

### Keamanan

- Hashing password
- JWT dan expiry
- Otorisasi berbasis peran
- Rate limiting

### Kualitas

- Pagination dan filtering
- Test client
- Struktur folder layanan
- Versioning API

## Latihan terbimbing

1. Buat endpoint CRUD dengan validasi dan pagination.
2. Tambahkan autentikasi lalu uji endpoint terlindungi.

## Studi kasus: API inventaris dengan autentikasi

Bangun API yang memungkinkan pengguna terdaftar mengelola barang miliknya sendiri, dengan batas akses yang jelas.

**Langkah pengerjaan**

1. Rancang skema request dan response.
2. Implementasikan endpoint dan aturan otorisasi.
3. Tulis test untuk jalur sukses, gagal, dan akses terlarang.

:::note Deliverable
API berjalan dengan dokumentasi otomatis di /docs.
:::

## Checklist

- [ ] Tidak mengembalikan stack trace ke pengguna.
- [ ] Bisa menjelaskan beda autentikasi dan otorisasi.
- [ ] Semua input divalidasi di batas API.
- [ ] Endpoint punya test untuk kasus gagal.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
