---
title: "Fase 3 — Advanced: Python di Dunia Nyata"
sidebar_label: "Ringkasan fase"
sidebar_position: 0
---

# Fase 3 — Advanced: Python di Dunia Nyata

> Kode yang berjalan di production

:::info Ringkasan fase
**Level:** Advanced · **Durasi:** 8–10 minggu · 80–100 jam
:::

Fase ini mengubah kamu dari penulis kode menjadi insinyur. Fokusnya: type system, konkurensi, performa, API, database, container, dan pipeline otomatis yang menjaga kualitas setiap perubahan.

## Tujuan fase

Setelah menyelesaikan fase ini, kamu mampu:

- Merancang layanan web dengan validasi, autentikasi, dan database.
- Memilih model konkurensi yang tepat untuk beban I/O atau CPU.
- Mengukur dan memperbaiki performa berdasarkan data, bukan dugaan.
- Mengotomatiskan lint, test, build, dan deploy lewat CI/CD.

## Peta modul

| Modul | Materi | Estimasi |
| --- | --- | --- |
| 3.1 | [Type System & mypy](/docs/fase-3/type-system) | 6 jam |
| 3.2 | [Idiom Pythonic](/docs/fase-3/idiom-pythonic) | 4 jam |
| 3.3 | [Async & Asyncio](/docs/fase-3/async) | 8 jam |
| 3.4 | [Concurrency & GIL](/docs/fase-3/concurrency) | 6 jam |
| 3.5 | [Profiling & Optimasi](/docs/fase-3/performance) | 6 jam |
| 3.6 | [Packaging & CLI](/docs/fase-3/packaging-cli) | 5 jam |
| 3.7 | [Logging & Configuration](/docs/fase-3/logging-config) | 5 jam |
| 3.8 | [Database & SQLAlchemy](/docs/fase-3/database) | 6 jam |
| 3.9 | [Web API dengan FastAPI](/docs/fase-3/web-api) | 8 jam |
| 3.10 | [CI/CD & Docker](/docs/fase-3/ci-cd-container) | 6 jam |
| 3.11 | [Arsitektur & Design Pattern](/docs/fase-3/arsitektur) | 6 jam |

## Proyek akhir fase

### TaskFlow API

Layanan manajemen tugas yang production-ready. Ini proyek portofolio pertama yang layak ditunjukkan ke perekrut.

**Requirement wajib**

- FastAPI dengan CRUD tugas, proyek, dan label.
- PostgreSQL sebagai database, migrasi lewat Alembic.
- Autentikasi JWT dan otorisasi per pemilik data.
- Validasi input dengan Pydantic dan error response konsisten.
- Pagination, filtering, dan sorting.
- Rate limit sederhana dan logging terstruktur.
- 60 test unit serta integrasi, coverage minimal 85 persen.
- mypy strict dan ruff bersih.
- Dockerfile multi-stage dan docker compose untuk lokal.
- CI GitHub Actions: lint, test, build, dan smoke test.
- Deploy ke Render, Fly.io, atau VPS, dengan README arsitektur.

**Nilai tambah**

- Endpoint statistik dan laporan mingguan.
- Notifikasi email async.
- OpenTelemetry tracing.

:::tip Aturan pengerjaan
Kerjakan proyek ini di folder terpisah dengan repository sendiri. Tulis README sebelum mulai menulis kode, lalu perbarui setiap kali ada keputusan penting.
:::

## Exit criteria

Kamu boleh lanjut ke fase berikutnya jika:

- Bisa membangun layanan yang berjalan di internet dan diuji otomatis.
- Bisa menjelaskan kapan async, thread, atau process dipakai.
- Bisa menemukan bottleneck dari data profiling.
- Bisa memisahkan logika bisnis dari framework dan database.

## Tips dari fase ini

- Jangan menambahkan Docker, CI, dan arsitektur berlapis sekaligus di hari pertama. Tambahkan satu per satu setelah fitur dasar jalan.
- Deploy lebih awal, walau masih jelek. Umpan balik dari lingkungan nyata tidak bisa digantikan.
- Simpan keputusan desain dalam ADR singkat. Enam bulan lagi kamu akan berterima kasih.
