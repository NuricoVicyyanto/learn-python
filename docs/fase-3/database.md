---
title: "3.8 Database & SQLAlchemy"
sidebar_label: "3.8 Database & SQLAlchemy"
description: "Aplikasi nyata menyimpan data di database relasional. Kamu akan memakai ORM tanpa melupakan SQL dan memahami biaya query."
---

# 3.8 Database & SQLAlchemy

:::info Detail modul
**Fase 3 — Advanced** · **Estimasi:** 6 jam
:::

Aplikasi nyata menyimpan data di database relasional. Kamu akan memakai ORM tanpa melupakan SQL dan memahami biaya query.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Memodelkan tabel dan relasi dengan SQLAlchemy 2.0.
- Mengelola sesi dan transaksi dengan benar.
- Menjalankan migrasi skema memakai Alembic.

## Materi inti

### Dasar

- Tabel, kolom, tipe, constraint
- Relasi satu ke banyak dan banyak ke banyak
- Index

### ORM

- Model deklaratif
- Session dan unit of work
- Query modern dengan select
- Eager loading dan masalah N+1

### Operasi

- Alembic migration
- Seed data
- Connection pool
- Transaksi dan rollback

## Latihan terbimbing

1. Buat skema inventaris dengan tiga tabel dan relasi.
2. Tulis query yang menghindari N+1 lalu bandingkan jumlah query.

## Studi kasus: Lapisan repository

Pisahkan akses database dari logika bisnis memakai repository pattern, lengkap dengan migrasi dan test memakai database sementara.

**Langkah pengerjaan**

1. Definisikan interface repository.
2. Implementasikan versi SQLAlchemy.
3. Uji dengan SQLite in-memory atau container Postgres.

:::note Deliverable
repository.py, migrasi Alembic, dan test integrasi.
:::

## Checklist

- [ ] Bisa menulis SQL manual untuk query yang kamu buat.
- [ ] Tahu apa itu masalah N+1.
- [ ] Tidak membuka sesi database di banyak tempat.
- [ ] Migrasi selalu bisa dijalankan dari database kosong.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
