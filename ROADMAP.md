# Roadmap Belajar Python: Beginner → Expert

> **Arsip.** Versi yang dipakai sehari-hari ada di situs dokumentasi (`npm start`).
> Isi di bawah ini adalah kerangka awal sebelum dipindahkan ke Docusaurus.

**Total estimasi:** 600–900 jam ≈ 9–12 bulan @ 15–20 jam/minggu.

---

## Cara pakai kerangka ini

1. **Jangan lompat fase.** Setiap fase punya *exit criteria* — kalau belum lulus, ulangi studi kasusnya.
2. **Aturan 40/40/20:** 40% baca/lihat materi, 40% nulis kode sendiri, 20% review + refactor + tulis catatan.
3. **Satu studi kasus = satu folder git** dengan `README.md` berisi: masalah, desain, cara jalanin, apa yang dipelajari.
4. **Tanpa AI saat latihan inti.** AI dipakai setelah kamu punya solusi sendiri, untuk membandingkan.
5. Setiap akhir fase: `/catatan/retro.md` — apa yang susah, apa yang belum paham, target fase berikutnya.

---

## Peta level

| Fase | Level | Fokus | Durasi | Output wajib |
|---|---|---|---|---|
| 0 | Fondasi | Environment, terminal, git, cara belajar | 1 minggu | Repo siap + 1 script jalan |
| 1 | Beginner | Sintaks, kontrol alur, fungsi, struktur data dasar | 4–5 minggu | 1 CLI app lengkap |
| 2 | Intermediate | OOP, modularisasi, file/data, testing | 6–8 minggu | 1 package + test suite |
| 3 | Advanced | Typing, async/concurrency, API, DB, CI/CD | 8–10 minggu | 1 layanan production-ready |
| 4 | Expert | Internals, performa, arsitektur, keamanan | 10–12 minggu | 1 proyek expert + writeup |
| 5 | Spesialisasi | Pilih 1–2 track karier | 6–10 minggu | 1 portofolio proyek |

---

# FASE 0 — Fondasi & Setup
**1 minggu · 10–15 jam · Exit: bisa bikin, jalanin, dan commit script Python**

| # | Modul | Materi inti | Studi kasus | Output |
|---|---|---|---|---|
| 0.1 | Lingkungan | Install Python 3.12+, `uv`/`venv`, VS Code + extension, interpreter vs terminal | Pasang 2 versi Python dan pindah versi via venv | `python --version` konsisten di 2 venv |
| 0.2 | Terminal & shell | `cd`, `ls`, `mkdir`, path, exit code, pipe, redirect, `&&` | Buat struktur folder proyek lewat terminal saja | Struktur folder jadi |
| 0.3 | Git dasar | `init`, `add`, `commit`, `log`, `diff`, `.gitignore`, branch | Commit pertama: script `hello.py` + `.gitignore` | 3 commit bermakna |
| 0.4 | Cara membaca error | Anatomi traceback, baca dari bawah ke atas, cari dokumentasi | Sengaja rusak 5 script, perbaiki dari traceback | `catatan/error-log.md` |
| 0.5 | Debugging dasar | `print` debug, `breakpoint()`, step over/into di VS Code | Debug script yang salah hitung | Screenshot/watch expression |

**Studi kasus fase:** `hello-env` — repo berisi `hello.py` yang menerima argumen nama, venv terpisah, `requirements.txt`, README cara jalanin, dan 3 commit.

---

# FASE 1 — Beginner: Bahasa Inti
**4–5 minggu · 40–50 jam · Exit: bisa menulis program 200–400 baris tanpa bantuan**

| # | Modul | Materi inti | Studi kasus mini |
|---|---|---|---|
| 1.1 | Variabel & tipe | `int`, `float`, `str`, `bool`, `None`, mutability, casting, operator, operator bitwise (kenalan) | Konversi satuan + validasi input |
| 1.2 | Kontrol alur | `if/elif/else`, ternary, `match/case`, `while`, `for`, `range`, `break/continue/else` | Menu interaktif dengan `match` |
| 1.3 | String | Indexing, slicing, method string, `f-string` (format spec), escape, multi-line | Laporan teks rata kanan + format rupiah |
| 1.4 | Struktur data dasar | `list`, `tuple`, `set`, `dict`; operasi CRUD, sorting, `min/max/sum` | Daftar belanja + hitung total |
| 1.5 | Fungsi | `def`, parameter, default, keyword arg, `return` vs `print`, scope, `global` | Pecah kalkulator jadi 5 fungsi |
| 1.6 | Error dasar | `try/except/else/finally`, raise, exception umum, validasi | Input umur/uang yang tahan input salah |
| 1.7 | File & path | `open`, mode, `with`, encoding, `pathlib`, baca/tulis teks | Log aktivitas harian ke file |
| 1.8 | Modul stdlib | `import`, `from`, `if __name__ == "__main__"`, `math`, `random`, `datetime`, `json`, `sys.argv` | Jam digital + simpan skor ke JSON |

**Studi kasus utama (wajib):** **Expense Tracker CLI**
- Tambah / lihat / hapus pengeluaran, filter per kategori & bulan, total per kategori.
- Data disimpan di JSON, input divalidasi, error tidak bikin program crash.
- Struktur: minimal 3 file (`main.py`, `storage.py`, `cli.py`).

**Exit criteria:** 5 studi kasus mini selesai + Expense Tracker jalan penuh + bisa jelaskan tiap baris kodenya.

---

# FASE 2 — Intermediate: Struktur & Rekayasa Kode
**6–8 minggu · 60–80 jam · Exit: bisa bikin package teruji, bukan cuma script**

| # | Modul | Materi inti | Studi kasus mini |
|---|---|---|---|
| 2.1 | Struktur data lanjutan | Big-O dasar, `collections` (`Counter`, `deque`, `defaultdict`, `namedtuple`), kapan pakai apa | Hitung frekuensi kata dari 1 juta baris |
| 2.2 | Comprehension & iterator | List/dict/set comp, generator expression, `yield`, lazy evaluation, `itertools` | Pipeline baca file besar tanpa habiskan RAM |
| 2.3 | Fungsi lanjutan | `*args/**kwargs`, lambda, closure, higher-order, decorator sederhana, `functools` | Decorator `@timer` + `@retry` |
| 2.4 | OOP | Class, `__init__`, instance vs class attr, `@property`, inheritance, composition, dunder, `dataclass` | Model `Akun`, `Transaksi`, `Budget` |
| 2.5 | Exception & context manager | Hierarki exception, custom exception, `with`, `contextlib` | Transaksi DB/file yang auto-rollback |
| 2.6 | Data & file | CSV, JSON, encoding, `pathlib`, `csv`/`json`, intro `sqlite3` | Import CSV → validasi → simpan SQLite |
| 2.7 | Struktur proyek | Package, `__init__.py`, layout `src/`, venv, `pyproject.toml`, dependency pinning | Refactor Expense Tracker jadi package |
| 2.8 | Testing | `pytest`, fixture, parametrize, mock, coverage, TDD loop | Test suite untuk `storage.py` |
| 2.9 | Kualitas kode | PEP 8, `ruff`, `black`, `pre-commit`, type hints dasar, docstring | Lint + format seluruh repo |
| 2.10 | Regex | Pattern, group, `re.match/search/findall/sub`, bahaya ReDoS | Parser log format custom |

**Studi kasus utama (wajib):** **Inventory System**
- OOP penuh, simpan ke SQLite, import/export CSV, laporan stok rendah.
- Custom exception, context manager, 30+ unit test, CI lint+test lokal via `pre-commit`.
- Refactor dari script prosedural → package `src/inventory/`.

**Exit criteria:** coverage ≥ 80%, `ruff` bersih, bisa jelaskan trade-off composition vs inheritance.

---

# FASE 3 — Advanced: Python di Dunia Nyata
**8–10 minggu · 80–100 jam · Exit: bisa kirim layanan ke production dengan CI/CD**

| # | Modul | Materi inti | Studi kasus mini |
|---|---|---|---|
| 3.1 | Type system | `typing`, generic, `Protocol`, `TypedDict`, `Literal`, `mypy` strict, variance | Type-safe layer untuk Inventory |
| 3.2 | Idiom Pythonic | EAFP vs LBYL, duck typing, `__slots__`, `match`, `pathlib` everywhere, anti-pattern | Audit & rewrite 200 baris kode "Java-style" |
| 3.3 | Async | `async/await`, event loop, `asyncio.gather`, `TaskGroup`, timeout, cancellation | 100 request HTTP paralel < 5 detik |
| 3.4 | Concurrency | `threading`, `multiprocessing`, `concurrent.futures`, GIL, kapan pakai apa | Benchmark I/O vs CPU-bound 3 pendekatan |
| 3.5 | Performance | `timeit`, `cProfile`, `py-spy`, `tracemalloc`, caching, algoritma > micro-optimize | Optimasi parser 5–10x + laporan before/after |
| 3.6 | Packaging & CLI | `pyproject.toml`, `build`, `twine`, semver, `typer`/`click`, entry point | Publish CLI ke (Test)PyPI |
| 3.7 | Logging & config | `logging` (handler, formatter, level), structured log, `pydantic-settings`, 12-factor | Config dev/staging/prod tanpa ubah kode |
| 3.8 | Database | `sqlite3` lanjut, SQLAlchemy 2.0, session, migration (`alembic`), N+1 | Repository pattern + migration |
| 3.9 | Web API | FastAPI, Pydantic validation, dependency injection, auth JWT, OpenAPI, error handling | CRUD API + auth + rate limit |
| 3.10 | CI/CD & container | GitHub Actions, matrix test, cache, Docker multi-stage, healthcheck | Pipeline: lint → test → build → push |
| 3.11 | Arsitektur | SOLID, layering, DI, ports & adapters, design pattern praktis | Refactor API jadi 3 layer terpisah |

**Studi kasus utama (wajib):** **"TaskFlow" — REST API production-ready**
- FastAPI + PostgreSQL + Alembic + JWT auth + pagination + rate limit.
- 60+ test (unit + integration), coverage ≥ 85%, mypy strict, Dockerfile, CI hijau.
- Deploy ke VPS/Fly.io/Render, ada `README` arsitektur + diagram.

**Exit criteria:** CI hijau, bisa jelaskan kenapa async tidak membantu CPU-bound, bisa baca flame graph.

---

# FASE 4 — Expert: Mesin & Skala
**10–12 minggu · 100–140 jam · Exit: bisa memperbaiki masalah yang tidak bisa diselesaikan Stack Overflow**

| # | Modul | Materi inti | Studi kasus mini |
|---|---|---|---|
| 4.1 | CPython internals | Pipeline compile → bytecode → eval loop, `dis`, `ast`, `compile()`, `__code__` | Baca & tulis bytecode transformer sederhana |
| 4.2 | Model memori | Refcount, generational GC, `tracemalloc`, `__slots__`, `weakref`, siklus referensi | Lacak & perbaiki memory leak nyata |
| 4.3 | Deskriptor & metaprogramming | Descriptor protocol, `__getattr__` vs `__getattribute__`, metaclass, `__init_subclass__`, decorator berlapis | Bikin mini ORM / validation framework |
| 4.4 | Native extension | `ctypes`, `cffi`, Cython, PyO3 (Rust), ABI stability | Percepat fungsi hot-path 10–50x |
| 4.5 | GIL & paralelisme modern | Free-threading (3.13+), subinterpreter, `nogil`, implikasi library | Uji scaling thread di 3.12 vs 3.14 |
| 4.6 | Performance engineering | Benchmark methodology, vectorization (`numpy`/`polars`), memory layout, cache locality | Capai target latency p99 di bawah SLA |
| 4.7 | Sistem terdistribusi | Broker (Redis/RabbitMQ), Celery/Arq, retry, idempotency, outbox, backpressure, DLQ | Worker queue yang aman dari duplikasi |
| 4.8 | Arsitektur skala besar | Modular monolith vs microservice, event-driven, CQRS ringan, observability (OpenTelemetry), SLO | Rancang arsitektur + ADR untuk 10x traffic |
| 4.9 | Keamanan | Secure coding, secret management, supply chain (`pip-audit`, SBOM), sandbox, pickle risk | Threat model + hardening satu service |
| 4.10 | Legacy & maintenance | Refactor brownfield, strangler pattern, migrasi versi, deprecation, code review | Migrasi proyek 2.7 → 3.13 bertahap |
| 4.11 | Open source & riset | Baca source CPython/library populer, RFC/PEP, kontribusi PR, benchmark publik | 1 PR merged ke proyek OSS |

**Studi kasus utama (pilih 1, wajib):**
1. **Mini framework** — web framework atau DI container dari nol, dengan test & dokumentasi.
2. **Native speedup** — ambil proyek Fase 3, profiling, lalu optimasi via Cython/Rust/PyO3 + benchmark report.
3. **Distributed pipeline** — queue + worker + retry + observability + chaos test.
4. **Legacy rescue** — ambil codebase OSS kecil, audit, refactor, naikkan coverage, tulis ADR.

**Exit criteria:** ada technical writeup 1500+ kata berisi keputusan, benchmark, dan trade-off; bisa jelaskan isi `dis` output dan kenapa GC butuh generasi.

---

# FASE 5 — Spesialisasi (pilih 1–2)
**6–10 minggu · Exit: 1 proyek portofolio yang layak dibayar**

| Track | Stack inti | Studi kasus |
|---|---|---|
| **Data / ML / AI** | `numpy`, `pandas`/`polars`, `matplotlib`, `scikit-learn`, `PyTorch`, MLOps dasar | Prediksi churn end-to-end + dashboard + model card |
| **Backend / Web** | FastAPI/Django, PostgreSQL, Redis, Docker, K8s dasar | SaaS multi-tenant kecil dengan billing mock |
| **Automation / DevOps** | `subprocess`, `boto3`, Ansible, Terraform CDK, pytest untuk infra | Auto-provision + auto-heal server |
| **Data Engineering** | Airflow/Dagster, dbt, Spark/Polars, Kafka | Batch + streaming pipeline dengan data quality check |
| **Desktop / GUI** | Tkinter/PySide6, threading di UI, packaging `.exe` | Aplikasi desktop dengan installer |
| **Embedded / IoT** | MicroPython, `pyserial`, MQTT, `gpiozero` | Sensor → broker → dashboard realtime |

**Exit criteria:** proyek jalan, ada README, demo (video/GIF), dan test. Ini yang dipakai untuk lamaran/portofolio.

---

## Rubrik penilaian tiap studi kasus

| Aspek | Bobot | Lulus jika |
|---|---|---|
| Fungsional | 40% | Semua requirement jalan, edge case ditangani |
| Kualitas kode | 20% | Terbaca, terpecah per fungsi/kelas, tanpa duplikasi besar |
| Testing | 15% | Ada test untuk logika inti + kasus error |
| Dokumentasi | 15% | README jelas, cara jalanin dari nol berhasil |
| Refleksi | 10% | `retro.md`: keputusan, kesulitan, next step |

**Aturan lulus fase:** semua studi kasus mini selesai + studi kasus utama skor ≥ 75% + exit criteria terpenuhi.

---

## Konvensi struktur repo

```
learn-python/
├── README.md
├── ROADMAP.md              # dokumen ini
├── 00-fondasi/
├── 01-beginner/
│   ├── 01-tipe-data/
│   │   ├── materi.md
│   │   ├── latihan.py
│   │   ├── solusi.py
│   │   └── catatan.md
│   └── proyek-expense-tracker/
├── 02-intermediate/
├── 03-advanced/
├── 04-expert/
├── 05-spesialisasi/
└── catatan/
    ├── error-log.md
    └── retro.md
```

---

## Target waktu realistis

| Bulan | Fase | Milestone |
|---|---|---|
| 1 | 0 + 1 | Expense Tracker CLI selesai |
| 2–3 | 2 | Inventory System + test suite |
| 4–5 | 3 | TaskFlow API + CI/CD + deploy |
| 6–7 | 4 | Proyek expert + writeup |
| 8–9 | 5 | Proyek portofolio + mulai apply |

> Kalau molor, potong **jumlah studi kasus mini**, jangan potong studi kasus utama.

---

## Referensi utama

- **Dokumentasi resmi Python** (tutorial → library reference → language reference)
- *Fluent Python* (Luciano Ramalho) — Fase 2–4
- *Python Cookbook* (Beazley & Jones) — Fase 2–3
- *CPython Internals* (Anthony Shaw) — Fase 4
- *Architecture Patterns with Python* (Percival & Gregory) — Fase 3–4
- Real Python, PyCon talks, PEP yang relevan
