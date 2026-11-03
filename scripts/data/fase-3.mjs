export default {
  dir: 'fase-3',
  num: 3,
  label: 'Advanced',
  title: 'Advanced: Python di Dunia Nyata',
  tagline: 'Kode yang berjalan di production',
  level: 'Advanced',
  duration: '8–10 minggu · 80–100 jam',
  intro:
    'Fase ini mengubah kamu dari penulis kode menjadi insinyur. Fokusnya: type system, konkurensi, performa, API, database, container, dan pipeline otomatis yang menjaga kualitas setiap perubahan.',
  goals: [
    'Merancang layanan web dengan validasi, autentikasi, dan database.',
    'Memilih model konkurensi yang tepat untuk beban I/O atau CPU.',
    'Mengukur dan memperbaiki performa berdasarkan data, bukan dugaan.',
    'Mengotomatiskan lint, test, build, dan deploy lewat CI/CD.',
  ],
  modules: [
    {
      id: '3.1',
      slug: 'type-system',
      title: 'Type System & mypy',
      duration: '6 jam',
      summary:
        'Type hint bukan sekadar dokumentasi; ia bisa diperiksa mesin. Dengan mypy strict, banyak bug tertangkap sebelum kode dijalankan.',
      goals: [
        'Menulis type hint untuk fungsi, koleksi, dan struktur data.',
        'Memakai Protocol, TypedDict, dan Literal sesuai kebutuhan.',
        'Menjalankan mypy strict dan menafsirkan errornya.',
      ],
      topics: [
        { h: 'Dasar', items: ['Anotasi parameter dan return', 'Optional dan union', 'Generic: list, dict, tuple', 'Type alias'] },
        { h: 'Lanjutan', items: ['Protocol untuk structural typing', 'TypedDict untuk dict berskema', 'Literal dan overload', 'Variance secara praktis'] },
        { h: 'Alur kerja', items: ['Bertahap dari longgar ke strict', 'Ignore yang terdokumentasi', 'Type hint di batas modul'] },
      ],
      practice: [
        'Tambahkan type hint lengkap pada package Inventory lalu jalankan mypy.',
        'Ganti satu pengecekan runtime dengan Protocol yang diperiksa mypy.',
      ],
      caseStudy: {
        title: 'Type-safe data layer',
        brief:
          'Definisikan kontrak data untuk API inventaris memakai TypedDict dan Protocol, lalu buktikan mypy menangkap kesalahan pemakaian.',
        steps: [
          'Tulis kontrak untuk request dan response.',
          'Implementasikan dua backend berbeda dengan Protocol yang sama.',
          'Tunjukkan contoh kode salah yang ditolak mypy.',
        ],
        deliverable: 'modul bertipe lengkap dan laporan mypy bersih.',
      },
      checklist: [
        'Tahu beda Any dan object.',
        'Bisa menjelaskan kenapa Protocol lebih fleksibel dari inheritance.',
        'Tidak memakai type ignore tanpa alasan tertulis.',
        'Bisa membaca pesan error mypy yang panjang.',
      ],
    },
    {
      id: '3.2',
      slug: 'idiom-pythonic',
      title: 'Idiom Pythonic',
      duration: '4 jam',
      summary:
        'Kode Python yang baik terasa sederhana. Modul ini membongkar kebiasaan yang dibawa dari bahasa lain dan menggantinya dengan idiom asli Python.',
      goals: [
        'Menerapkan EAFP dan duck typing dengan tepat.',
        'Mengenali anti-pattern umum pemula dan mantan pengguna bahasa lain.',
        'Menulis ulang kode verbose menjadi ringkas tanpa kehilangan kejelasan.',
      ],
      topics: [
        { h: 'Filosofi', items: ['Zen of Python', 'EAFP vs LBYL', 'Duck typing dan Protocol', 'Explicit lebih baik dari implicit'] },
        { h: 'Anti-pattern', items: ['Loop dengan index untuk akses nilai', 'Getter dan setter manual', 'If panjang untuk cek tipe', 'String concatenation di loop'] },
        { h: 'Perkakas', items: ['enumerate dan zip', 'Unpacking dan star expression', 'with untuk sumber daya', 'pathlib menggantikan os.path'] },
      ],
      practice: [
        'Refactor 200 baris kode bergaya Java menjadi idiom Python.',
        'Ganti pengecekan tipe manual dengan polymorphisme atau Protocol.',
      ],
      caseStudy: {
        title: 'Audit kode warisan',
        brief:
          'Diberikan modul yang berjalan benar tetapi sulit dibaca. Refactor tanpa mengubah perilaku, lalu buktikan dengan test.',
        steps: [
          'Tulis test karakterisasi untuk perilaku saat ini.',
          'Refactor bertahap dalam beberapa commit kecil.',
          'Bandingkan jumlah baris dan keterbacaan sebelum sesudah.',
        ],
        deliverable: 'modul hasil refactor plus test dan catatan perubahan.',
      },
      checklist: [
        'Tidak memakai range(len(...)) untuk mengakses nilai.',
        'Bisa menjelaskan EAFP dengan contoh nyata.',
        'Tahu kapan kode ringkas justru membingungkan.',
        'Refactor selalu didahului test.',
      ],
    },
    {
      id: '3.3',
      slug: 'async',
      title: 'Async & Asyncio',
      duration: '8 jam',
      summary:
        'Async bukan cara membuat semua kode cepat. Ia alat untuk menunggu banyak operasi I/O secara bersamaan tanpa memblokir thread.',
      goals: [
        'Menjelaskan event loop dan coroutine.',
        'Menjalankan banyak tugas I/O secara paralel dengan batas konkurensi.',
        'Menangani timeout, pembatalan, dan error pada task.',
      ],
      topics: [
        { h: 'Dasar', items: ['Coroutine dan await', 'Event loop', 'Task dan scheduling', 'Kenapa async tidak membantu CPU-bound'] },
        { h: 'Pola', items: ['gather dan TaskGroup', 'Semaphore untuk batas konkurensi', 'Timeout dan cancellation', 'Antrean async'] },
        { h: 'Integrasi', items: ['Async HTTP client', 'Async database driver', 'Mencampur kode sync dan async dengan aman'] },
      ],
      practice: [
        'Ambil 100 URL dengan batas 10 request bersamaan.',
        'Tambahkan timeout dan laporkan request yang gagal.',
      ],
      caseStudy: {
        title: 'Scraper async yang sopan',
        brief:
          'Bangun scraper yang mengambil data dari 200 halaman, membatasi konkurensi, menghormati timeout, dan menulis hasil secara bertahap.',
        steps: [
          'Implementasikan worker dengan semaphore dan retry.',
          'Simpan hasil ke file saat selesai, bukan di akhir.',
          'Ukur durasi total dan bandingkan dengan versi sinkron.',
        ],
        deliverable: 'scraper async plus tabel perbandingan waktu.',
      },
      checklist: [
        'Tahu kapan async justru memperlambat.',
        'Tidak memanggil fungsi blocking di dalam coroutine.',
        'Bisa membatalkan task dengan bersih.',
        'Paham kenapa semaphore penting untuk API pihak ketiga.',
      ],
    },
    {
      id: '3.4',
      slug: 'concurrency',
      title: 'Concurrency & GIL',
      duration: '6 jam',
      summary:
        'Thread, process, dan async menyelesaikan masalah berbeda. Memilih yang salah membuat program lebih lambat dan lebih rumit.',
      goals: [
        'Menjelaskan peran GIL pada beban CPU dan I/O.',
        'Memilih threading, multiprocessing, atau async berdasarkan profil beban.',
        'Memakai concurrent.futures untuk kode yang mudah dibaca.',
      ],
      topics: [
        { h: 'Model', items: ['Proses vs thread', 'GIL dan implikasinya', 'I/O-bound vs CPU-bound', 'Biaya komunikasi antar proses'] },
        { h: 'Alat', items: ['threading dan Lock', 'multiprocessing dan Pool', 'concurrent.futures', 'Queue untuk koordinasi'] },
        { h: 'Bahaya', items: ['Race condition', 'Deadlock', 'Shared mutable state', 'Overhead konkurensi berlebih'] },
      ],
      practice: [
        'Benchmark tugas I/O dan CPU dengan tiga pendekatan berbeda.',
        'Perbaiki race condition pada counter bersama.',
      ],
      caseStudy: {
        title: 'Laporan benchmark konkurensi',
        brief:
          'Buat tiga implementasi untuk dua jenis beban kerja, ukur waktunya, dan jelaskan kapan masing-masing unggul.',
        steps: [
          'Siapkan beban I/O dan beban CPU yang setara.',
          'Jalankan versi sinkron, thread, process, dan async.',
          'Susun tabel hasil beserta interpretasinya.',
        ],
        deliverable: 'benchmark.py dan laporan Markdown berisi kesimpulan.',
      },
      checklist: [
        'Bisa menjelaskan GIL dalam dua kalimat.',
        'Tahu kenapa multiprocessing mahal untuk data besar.',
        'Bisa mengenali race condition dari kode.',
        'Selalu mengukur sebelum memilih model konkurensi.',
      ],
    },
    {
      id: '3.5',
      slug: 'performance',
      title: 'Profiling & Optimasi',
      duration: '6 jam',
      summary:
        'Optimasi tanpa pengukuran adalah tebakan. Kamu akan belajar menemukan hot path, mengukur dampak perubahan, dan berhenti saat cukup.',
      goals: [
        'Mengukur waktu dengan timeit dan profil dengan cProfile.',
        'Membaca flame graph dan menemukan fungsi penyebab lambat.',
        'Memilih optimasi algoritmik sebelum micro-optimization.',
      ],
      topics: [
        { h: 'Pengukuran', items: ['timeit dan variansi', 'cProfile dan pstats', 'py-spy untuk proses berjalan', 'tracemalloc untuk memori'] },
        { h: 'Optimasi', items: ['Kompleksitas algoritma', 'Caching dan memoization', 'Struktur data yang tepat', 'Vectorization dasar'] },
        { h: 'Disiplin', items: ['Baseline dan target', 'Benchmark sebelum sesudah', 'Menghindari premature optimization'] },
      ],
      practice: [
        'Profil parser CSV dan temukan tiga fungsi paling mahal.',
        'Optimasi satu fungsi hingga minimal dua kali lebih cepat.',
      ],
      caseStudy: {
        title: 'Optimasi 5x dengan bukti',
        brief:
          'Ambil program lambat dari proyek sebelumnya. Tingkatkan performa minimal lima kali tanpa mengubah output.',
        steps: [
          'Ukur baseline dan simpan output sebagai acuan.',
          'Profil, identifikasi bottleneck, lalu ubah satu hal per iterasi.',
          'Sajikan tabel sebelum dan sesudah beserta penjelasan.',
        ],
        deliverable: 'kode optimasi, benchmark, dan writeup singkat.',
      },
      checklist: [
        'Tidak mengoptimasi tanpa angka baseline.',
        'Bisa membaca output cProfile.',
        'Tahu kapan caching menimbulkan bug.',
        'Bisa menjelaskan trade-off kecepatan dan keterbacaan.',
      ],
    },
    {
      id: '3.6',
      slug: 'packaging-cli',
      title: 'Packaging & CLI',
      duration: '5 jam',
      summary:
        'Agar kode dipakai orang lain, ia harus mudah dipasang dan dijalankan. Kamu akan membangun CLI profesional dan mempublikasikannya.',
      goals: [
        'Membangun wheel dan source distribution.',
        'Membuat CLI dengan typer atau click.',
        'Mengelola versi dan menulis changelog.',
      ],
      topics: [
        { h: 'Build', items: ['pyproject.toml modern', 'python -m build', 'Memeriksa isi wheel', 'Versioning semantik'] },
        { h: 'CLI', items: ['typer atau click', 'Argumen, opsi, dan help', 'Exit code dan pesan error', 'Konfigurasi lewat environment'] },
        { h: 'Distribusi', items: ['TestPyPI lalu PyPI', 'README sebagai halaman package', 'Lisensi'] },
      ],
      practice: [
        'Bungkus salah satu proyek menjadi perintah CLI.',
        'Build wheel lalu pasang di venv bersih.',
      ],
      caseStudy: {
        title: 'Publikasikan CLI ke TestPyPI',
        brief:
          'Rilis satu perintah CLI yang berguna, lengkap dengan dokumentasi, versi, dan changelog.',
        steps: [
          'Rapikan metadata package dan README.',
          'Build lalu unggah ke TestPyPI.',
          'Pasang dari index tersebut dan uji dari folder lain.',
        ],
        deliverable: 'package terpasang dari TestPyPI dan tautan halamannya.',
      },
      checklist: [
        'Bisa menjelaskan isi wheel.',
        'Tahu beda argumen dan opsi CLI.',
        'CLI memberi exit code yang benar.',
        'Versi mengikuti aturan yang konsisten.',
      ],
    },
    {
      id: '3.7',
      slug: 'logging-config',
      title: 'Logging & Configuration',
      duration: '5 jam',
      summary:
        'Print tidak cukup di production. Log yang terstruktur dan konfigurasi yang rapi membuat masalah bisa dilacak tanpa menebak.',
      goals: [
        'Mengonfigurasi logging dengan handler dan formatter.',
        'Menghasilkan log terstruktur yang mudah dicari.',
        'Memisahkan konfigurasi dari kode untuk tiap environment.',
      ],
      topics: [
        { h: 'Logging', items: ['Logger, handler, formatter, level', 'Log anak dan propagasi', 'Log terstruktur JSON', 'Korelasi request ID'] },
        { h: 'Konfigurasi', items: ['Environment variable', 'pydantic-settings', 'File konfigurasi per environment', 'Rahasia tidak masuk repo'] },
        { h: 'Operasional', items: ['Rotasi log', 'Level yang tepat', 'Menghindari log berisi data sensitif'] },
      ],
      practice: [
        'Ganti semua print pada satu proyek dengan logging berlevel.',
        'Buat konfigurasi dev dan prod yang hanya berbeda lewat environment.',
      ],
      caseStudy: {
        title: 'Observability untuk layanan kecil',
        brief:
          'Tambahkan logging terstruktur dan konfigurasi environment pada API sederhana, lalu buktikan log bisa melacak satu request dari awal sampai akhir.',
        steps: [
          'Tambahkan request ID pada setiap log.',
          'Pisahkan konfigurasi dev, test, dan prod.',
          'Tunjukkan contoh log untuk request sukses dan gagal.',
        ],
        deliverable: 'API dengan logging JSON dan file konfigurasi terpisah.',
      },
      checklist: [
        'Tidak memakai print untuk informasi operasional.',
        'Tahu kapan level debug, info, warning, dan error.',
        'Rahasia tidak pernah masuk kode atau log.',
        'Bisa melacak satu request lewat log.',
      ],
    },
    {
      id: '3.8',
      slug: 'database',
      title: 'Database & SQLAlchemy',
      duration: '6 jam',
      summary:
        'Aplikasi nyata menyimpan data di database relasional. Kamu akan memakai ORM tanpa melupakan SQL dan memahami biaya query.',
      goals: [
        'Memodelkan tabel dan relasi dengan SQLAlchemy 2.0.',
        'Mengelola sesi dan transaksi dengan benar.',
        'Menjalankan migrasi skema memakai Alembic.',
      ],
      topics: [
        { h: 'Dasar', items: ['Tabel, kolom, tipe, constraint', 'Relasi satu ke banyak dan banyak ke banyak', 'Index'] },
        { h: 'ORM', items: ['Model deklaratif', 'Session dan unit of work', 'Query modern dengan select', 'Eager loading dan masalah N+1'] },
        { h: 'Operasi', items: ['Alembic migration', 'Seed data', 'Connection pool', 'Transaksi dan rollback'] },
      ],
      practice: [
        'Buat skema inventaris dengan tiga tabel dan relasi.',
        'Tulis query yang menghindari N+1 lalu bandingkan jumlah query.',
      ],
      caseStudy: {
        title: 'Lapisan repository',
        brief:
          'Pisahkan akses database dari logika bisnis memakai repository pattern, lengkap dengan migrasi dan test memakai database sementara.',
        steps: [
          'Definisikan interface repository.',
          'Implementasikan versi SQLAlchemy.',
          'Uji dengan SQLite in-memory atau container Postgres.',
        ],
        deliverable: 'repository.py, migrasi Alembic, dan test integrasi.',
      },
      checklist: [
        'Bisa menulis SQL manual untuk query yang kamu buat.',
        'Tahu apa itu masalah N+1.',
        'Tidak membuka sesi database di banyak tempat.',
        'Migrasi selalu bisa dijalankan dari database kosong.',
      ],
    },
    {
      id: '3.9',
      slug: 'web-api',
      title: 'Web API dengan FastAPI',
      duration: '8 jam',
      summary:
        'Modul ini menyatukan validasi, database, autentikasi, dan dokumentasi otomatis menjadi satu layanan yang layak dipakai.',
      goals: [
        'Membangun endpoint CRUD dengan validasi Pydantic.',
        'Menerapkan autentikasi token dan otorisasi dasar.',
        'Menangani error secara konsisten dan mendokumentasikan API.',
      ],
      topics: [
        { h: 'Dasar', items: ['Routing dan dependency injection', 'Request dan response model', 'Status code dan error handler', 'Dokumentasi OpenAPI otomatis'] },
        { h: 'Keamanan', items: ['Hashing password', 'JWT dan expiry', 'Otorisasi berbasis peran', 'Rate limiting'] },
        { h: 'Kualitas', items: ['Pagination dan filtering', 'Test client', 'Struktur folder layanan', 'Versioning API'] },
      ],
      practice: [
        'Buat endpoint CRUD dengan validasi dan pagination.',
        'Tambahkan autentikasi lalu uji endpoint terlindungi.',
      ],
      caseStudy: {
        title: 'API inventaris dengan autentikasi',
        brief:
          'Bangun API yang memungkinkan pengguna terdaftar mengelola barang miliknya sendiri, dengan batas akses yang jelas.',
        steps: [
          'Rancang skema request dan response.',
          'Implementasikan endpoint dan aturan otorisasi.',
          'Tulis test untuk jalur sukses, gagal, dan akses terlarang.',
        ],
        deliverable: 'API berjalan dengan dokumentasi otomatis di /docs.',
      },
      checklist: [
        'Tidak mengembalikan stack trace ke pengguna.',
        'Bisa menjelaskan beda autentikasi dan otorisasi.',
        'Semua input divalidasi di batas API.',
        'Endpoint punya test untuk kasus gagal.',
      ],
    },
    {
      id: '3.10',
      slug: 'ci-cd-container',
      title: 'CI/CD & Docker',
      duration: '6 jam',
      summary:
        'Kalau langkah rilis masih manual, cepat atau lambat akan salah. Modul ini membuat setiap perubahan diuji dan dibangun otomatis.',
      goals: [
        'Menulis workflow GitHub Actions untuk lint, test, dan build.',
        'Membuat image Docker multi-stage yang kecil.',
        'Menyiapkan deployment dengan healthcheck dan environment.',
      ],
      topics: [
        { h: 'CI', items: ['Trigger, job, step', 'Matrix versi Python', 'Cache dependency', 'Artefak dan status check'] },
        { h: 'Docker', items: ['Dockerfile dasar', 'Multi-stage build', 'Non-root user', 'docker compose untuk lokal'] },
        { h: 'CD', items: ['Environment dan secret', 'Healthcheck', 'Rollback sederhana', 'Smoke test setelah deploy'] },
      ],
      practice: [
        'Buat workflow yang menjalankan lint dan test pada setiap push.',
        'Build image dan turunkan ukurannya dengan multi-stage.',
      ],
      caseStudy: {
        title: 'Pipeline lengkap',
        brief:
          'Sambungkan repo ke CI yang menjalankan lint, test, build image, dan deploy ke lingkungan staging secara otomatis.',
        steps: [
          'Tulis workflow dengan cache dan matrix.',
          'Build image dan jalankan container di job terpisah.',
          'Tambahkan smoke test setelah deploy.',
        ],
        deliverable: 'file workflow hijau dan image yang bisa dijalankan.',
      },
      checklist: [
        'CI gagal saat test gagal, bukan hanya saat build gagal.',
        'Image tidak berisi tool development.',
        'Secret tidak pernah ditulis di workflow.',
        'Bisa menjelaskan setiap langkah pipeline.',
      ],
    },
    {
      id: '3.11',
      slug: 'arsitektur',
      title: 'Arsitektur & Design Pattern',
      duration: '6 jam',
      summary:
        'Pattern bukan tujuan, tapi kosakata. Kamu akan memakai pattern hanya ketika masalahnya benar-benar muncul.',
      goals: [
        'Menerapkan pemisahan lapisan domain, aplikasi, dan infrastruktur.',
        'Menggunakan dependency injection untuk membuat kode mudah diuji.',
        'Mengenali kapan pattern justru menambah kerumitan.',
      ],
      topics: [
        { h: 'Prinsip', items: ['SOLID secara praktis', 'Coupling dan cohesion', 'Batas modul', 'Dependency inversion'] },
        { h: 'Pattern', items: ['Repository', 'Unit of work', 'Strategy', 'Adapter', 'Factory sederhana'] },
        { h: 'Praktik', items: ['Struktur folder berlapis', 'Ports and adapters', 'Architecture decision record'] },
      ],
      practice: [
        'Pisahkan satu proyek menjadi lapisan domain, aplikasi, dan infrastruktur.',
        'Ganti ketergantungan langsung ke database dengan interface.',
      ],
      caseStudy: {
        title: 'Refactor berlapis',
        brief:
          'Ambil API dari modul sebelumnya dan pisahkan logika bisnis dari FastAPI serta SQLAlchemy tanpa mengubah perilaku.',
        steps: [
          'Tulis test karakterisasi lebih dulu.',
          'Ekstrak use case dan interface repository.',
          'Sambungkan kembali lewat dependency injection.',
        ],
        deliverable: 'struktur berlapis plus ADR yang menjelaskan keputusan.',
      },
      checklist: [
        'Bisa menguji logika bisnis tanpa database.',
        'Tahu kapan satu lapisan tambahan tidak sepadan.',
        'Tidak memakai pattern hanya karena populer.',
        'Bisa menjelaskan alasan desain dalam satu halaman.',
      ],
    },
  ],
  project: {
    title: 'TaskFlow API',
    desc: 'Layanan manajemen tugas yang production-ready. Ini proyek portofolio pertama yang layak ditunjukkan ke perekrut.',
    requirements: [
      'FastAPI dengan CRUD tugas, proyek, dan label.',
      'PostgreSQL sebagai database, migrasi lewat Alembic.',
      'Autentikasi JWT dan otorisasi per pemilik data.',
      'Validasi input dengan Pydantic dan error response konsisten.',
      'Pagination, filtering, dan sorting.',
      'Rate limit sederhana dan logging terstruktur.',
      '60 test unit serta integrasi, coverage minimal 85 persen.',
      'mypy strict dan ruff bersih.',
      'Dockerfile multi-stage dan docker compose untuk lokal.',
      'CI GitHub Actions: lint, test, build, dan smoke test.',
      'Deploy ke Render, Fly.io, atau VPS, dengan README arsitektur.',
    ],
    bonus: [
      'Endpoint statistik dan laporan mingguan.',
      'Notifikasi email async.',
      'OpenTelemetry tracing.',
    ],
  },
  exit: [
    'Bisa membangun layanan yang berjalan di internet dan diuji otomatis.',
    'Bisa menjelaskan kapan async, thread, atau process dipakai.',
    'Bisa menemukan bottleneck dari data profiling.',
    'Bisa memisahkan logika bisnis dari framework dan database.',
  ],
  tips: [
    'Jangan menambahkan Docker, CI, dan arsitektur berlapis sekaligus di hari pertama. Tambahkan satu per satu setelah fitur dasar jalan.',
    'Deploy lebih awal, walau masih jelek. Umpan balik dari lingkungan nyata tidak bisa digantikan.',
    'Simpan keputusan desain dalam ADR singkat. Enam bulan lagi kamu akan berterima kasih.',
  ],
};
