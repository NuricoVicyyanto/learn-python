---
title: "4.8 Arsitektur Skala Besar"
sidebar_label: "4.8 Arsitektur Skala Besar"
description: "Keputusan arsitektur punya biaya jangka panjang. Modul ini melatih cara memilih antara kesederhanaan dan skalabilitas."
---

# 4.8 Arsitektur Skala Besar

:::info Detail modul
**Fase 4 — Expert** · **Estimasi:** 7 jam
:::

Keputusan arsitektur punya biaya jangka panjang. Modul ini melatih cara memilih antara kesederhanaan dan skalabilitas.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Membandingkan modular monolith dan microservice secara jujur.
- Merancang batas modul berdasarkan domain.
- Menentukan SLO dan strategi observability.

## Materi inti

### Bentuk sistem

- Modular monolith
- Microservice dan biayanya
- Event-driven
- CQRS ringan

### Batas

- Bounded context
- Kontrak antar modul
- Migrasi bertahap
- Data ownership

### Operasi

- SLO dan error budget
- OpenTelemetry
- Kapasitas dan scaling
- Runbook

## Latihan terbimbing

1. Rancang arsitektur untuk kenaikan trafik sepuluh kali.
2. Tulis ADR berisi dua opsi dan alasan memilih salah satunya.

## Studi kasus: Rancangan untuk 10x trafik

Diberikan sistem monolithic sederhana dan proyeksi pertumbuhan. Buat rencana arsitektur enam bulan ke depan tanpa over-engineering.

**Langkah pengerjaan**

1. Petakan bottleneck saat ini.
2. Usulkan tiga perubahan berurutan berdasarkan dampak.
3. Definisikan SLO dan cara memantaunya.

:::note Deliverable
dokumen arsitektur dan ADR yang bisa dipertahankan dalam review.
:::

## Checklist

- [ ] Tidak memilih microservice tanpa alasan organisasi.
- [ ] Bisa menjelaskan biaya operasional tiap komponen.
- [ ] SLO ditulis dalam angka, bukan harapan.
- [ ] Rencana migrasi bertahap dan bisa dibatalkan.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
