---
title: "3.10 CI/CD & Docker"
sidebar_label: "3.10 CI/CD & Docker"
description: "Kalau langkah rilis masih manual, cepat atau lambat akan salah. Modul ini membuat setiap perubahan diuji dan dibangun otomatis."
---

# 3.10 CI/CD & Docker

:::info Detail modul
**Fase 3 — Advanced** · **Estimasi:** 6 jam
:::

Kalau langkah rilis masih manual, cepat atau lambat akan salah. Modul ini membuat setiap perubahan diuji dan dibangun otomatis.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menulis workflow GitHub Actions untuk lint, test, dan build.
- Membuat image Docker multi-stage yang kecil.
- Menyiapkan deployment dengan healthcheck dan environment.

## Materi inti

### CI

- Trigger, job, step
- Matrix versi Python
- Cache dependency
- Artefak dan status check

### Docker

- Dockerfile dasar
- Multi-stage build
- Non-root user
- docker compose untuk lokal

### CD

- Environment dan secret
- Healthcheck
- Rollback sederhana
- Smoke test setelah deploy

## Latihan terbimbing

1. Buat workflow yang menjalankan lint dan test pada setiap push.
2. Build image dan turunkan ukurannya dengan multi-stage.

## Studi kasus: Pipeline lengkap

Sambungkan repo ke CI yang menjalankan lint, test, build image, dan deploy ke lingkungan staging secara otomatis.

**Langkah pengerjaan**

1. Tulis workflow dengan cache dan matrix.
2. Build image dan jalankan container di job terpisah.
3. Tambahkan smoke test setelah deploy.

:::note Deliverable
file workflow hijau dan image yang bisa dijalankan.
:::

## Checklist

- [ ] CI gagal saat test gagal, bukan hanya saat build gagal.
- [ ] Image tidak berisi tool development.
- [ ] Secret tidak pernah ditulis di workflow.
- [ ] Bisa menjelaskan setiap langkah pipeline.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
