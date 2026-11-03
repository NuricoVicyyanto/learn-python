---
title: "4.7 Sistem Terdistribusi"
sidebar_label: "4.7 Sistem Terdistribusi"
description: "Jaringan gagal, pesan datang dua kali, dan worker mati di tengah tugas. Sistem yang baik menganggap kegagalan sebagai hal normal."
---

# 4.7 Sistem Terdistribusi

:::info Detail modul
**Fase 4 — Expert** · **Estimasi:** 8 jam
:::

Jaringan gagal, pesan datang dua kali, dan worker mati di tengah tugas. Sistem yang baik menganggap kegagalan sebagai hal normal.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Merancang worker queue yang idempoten.
- Menerapkan retry, backoff, dan dead letter queue.
- Mengamati alur kerja lintas service.

## Materi inti

### Dasar

- Message broker dan queue
- At-least-once vs exactly-once
- Idempotency key
- Outbox pattern

### Ketahanan

- Retry dengan backoff
- Circuit breaker
- Timeout dan deadline
- Dead letter queue

### Operasi

- Distributed tracing
- Korelasi log
- Backpressure
- Rekonsiliasi data

## Latihan terbimbing

1. Buat worker yang aman menerima pesan duplikat.
2. Tambahkan DLQ dan metrik kegagalan.

## Studi kasus: Pipeline tugas tahan gangguan

Bangun sistem yang memproses pesanan lewat queue, tetap benar saat worker mati, dan bisa dipulihkan setelah broker restart.

**Langkah pengerjaan**

1. Rancang idempotency key dan state machine tugas.
2. Implementasikan retry serta DLQ.
3. Uji dengan mematikan worker di tengah proses.

:::note Deliverable
worker, producer, dan skenario uji kegagalan.
:::

## Checklist

- [ ] Tidak pernah mengasumsikan pesan hanya datang sekali.
- [ ] Semua operasi penting punya idempotency.
- [ ] Bisa menjelaskan arti exactly-once secara realistis.
- [ ] Punya cara menemukan tugas yang macet.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
