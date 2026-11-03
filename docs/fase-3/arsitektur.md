---
title: "3.11 Arsitektur & Design Pattern"
sidebar_label: "3.11 Arsitektur & Design Pattern"
description: "Pattern bukan tujuan, tapi kosakata. Kamu akan memakai pattern hanya ketika masalahnya benar-benar muncul."
---

# 3.11 Arsitektur & Design Pattern

:::info Detail modul
**Fase 3 — Advanced** · **Estimasi:** 6 jam
:::

Pattern bukan tujuan, tapi kosakata. Kamu akan memakai pattern hanya ketika masalahnya benar-benar muncul.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menerapkan pemisahan lapisan domain, aplikasi, dan infrastruktur.
- Menggunakan dependency injection untuk membuat kode mudah diuji.
- Mengenali kapan pattern justru menambah kerumitan.

## Materi inti

### Prinsip

- SOLID secara praktis
- Coupling dan cohesion
- Batas modul
- Dependency inversion

### Pattern

- Repository
- Unit of work
- Strategy
- Adapter
- Factory sederhana

### Praktik

- Struktur folder berlapis
- Ports and adapters
- Architecture decision record

## Latihan terbimbing

1. Pisahkan satu proyek menjadi lapisan domain, aplikasi, dan infrastruktur.
2. Ganti ketergantungan langsung ke database dengan interface.

## Studi kasus: Refactor berlapis

Ambil API dari modul sebelumnya dan pisahkan logika bisnis dari FastAPI serta SQLAlchemy tanpa mengubah perilaku.

**Langkah pengerjaan**

1. Tulis test karakterisasi lebih dulu.
2. Ekstrak use case dan interface repository.
3. Sambungkan kembali lewat dependency injection.

:::note Deliverable
struktur berlapis plus ADR yang menjelaskan keputusan.
:::

## Checklist

- [ ] Bisa menguji logika bisnis tanpa database.
- [ ] Tahu kapan satu lapisan tambahan tidak sepadan.
- [ ] Tidak memakai pattern hanya karena populer.
- [ ] Bisa menjelaskan alasan desain dalam satu halaman.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
