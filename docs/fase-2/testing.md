---
title: "2.8 Testing dengan pytest"
sidebar_label: "2.8 Testing dengan pytest"
description: "Test bukan formalitas. Test adalah cara aman mengubah kode. Modul ini membangun kebiasaan menulis test sebelum atau sesudah fitur, bukan tidak sama sekali."
---

# 2.8 Testing dengan pytest

:::info Detail modul
**Fase 2 — Intermediate** · **Estimasi:** 6 jam
:::

Test bukan formalitas. Test adalah cara aman mengubah kode. Modul ini membangun kebiasaan menulis test sebelum atau sesudah fitur, bukan tidak sama sekali.

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

- Menulis test yang menguji perilaku, bukan implementasi.
- Memakai fixture dan parametrize untuk mengurangi duplikasi.
- Mengukur coverage dan memahami batasannya.

## Materi inti

### Dasar

- Struktur folder tests
- assert dan nama test
- Menjalankan test terpilih
- Arrange, Act, Assert

### Fitur pytest

- Fixture dan scope
- parametrize
- tmp_path untuk file
- monkeypatch dan mock

### Kualitas

- Test kasus batas dan error
- Coverage sebagai petunjuk, bukan target
- Test yang lambat dan rapuh

## Latihan terbimbing

1. Tulis test untuk fungsi validasi dengan minimal lima kasus batas.
2. Ganti tiga test duplikat dengan satu parametrize.

## Studi kasus: Test suite untuk lapisan penyimpanan

Tulis test menyeluruh untuk modul storage: simpan, muat, perbarui, hapus, dan file rusak. Tidak boleh menyentuh file asli pengguna.

**Langkah pengerjaan**

1. Gunakan tmp_path untuk file sementara.
2. Uji jalur sukses dan jalur gagal.
3. Pastikan coverage modul storage di atas 90 persen.

:::note Deliverable
tests/test_storage.py yang lulus dan laporan coverage.
:::

## Checklist

- [ ] Bisa menulis test tanpa membuka dokumentasi pytest.
- [ ] Tahu beda unit test dan integration test.
- [ ] Test yang gagal memberi pesan yang jelas.
- [ ] Tidak menguji detail internal yang tidak penting.

:::tip Catatan belajar
Setelah selesai, tulis lima baris di `catatan.md`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
