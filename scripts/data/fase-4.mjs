export default {
  dir: 'fase-4',
  num: 4,
  label: 'Expert',
  title: 'Expert: Mesin & Skala',
  tagline: 'Memahami apa yang terjadi di balik kode',
  level: 'Expert',
  duration: '10–12 minggu · 100–140 jam',
  intro:
    'Fase ini bukan tentang menghafal lebih banyak library. Fokusnya adalah memahami cara Python bekerja, mengukur batasnya, dan mengambil keputusan arsitektur yang bertahan saat beban dan tim bertambah.',
  goals: [
    'Menjelaskan perjalanan kode dari sumber sampai bytecode yang dieksekusi.',
    'Mendiagnosis masalah memori, performa, dan konkurensi pada sistem nyata.',
    'Merancang sistem terdistribusi dengan penanganan kegagalan yang eksplisit.',
    'Menilai dan memperbaiki codebase besar tanpa menghentikan pengembangan.',
  ],
  modules: [
    {
      id: '4.1',
      slug: 'cpython-internals',
      title: 'CPython Internals',
      duration: '8 jam',
      summary:
        'Dengan memahami compiler dan interpreter, pesan error, performa, dan perilaku aneh Python menjadi masuk akal.',
      goals: [
        'Menjelaskan tahap tokenize, parse, compile, dan eksekusi.',
        'Membaca bytecode dengan dis dan menghubungkannya ke kode sumber.',
        'Menggunakan ast untuk menganalisis atau mengubah kode secara terprogram.',
      ],
      topics: [
        { h: 'Pipeline', items: ['Source ke AST', 'Code object', 'Frame dan evaluation loop', 'Konstanta dan nama'] },
        { h: 'Bytecode', items: ['dis dan opcode umum', 'LOAD_FAST vs LOAD_GLOBAL', 'Pengaruh versi Python', 'Specializing interpreter 3.11+'] },
        { h: 'AST', items: ['ast.parse dan walk', 'Menulis transformer sederhana', 'Risiko dan batasan'] },
      ],
      practice: [
        'Bandingkan bytecode fungsi dengan variabel lokal dan global.',
        'Tulis linter mini yang mendeteksi pemanggilan print lewat AST.',
      ],
      caseStudy: {
        title: 'Bytecode transformer',
        brief:
          'Bangun alat yang menambahkan logging otomatis pada setiap fungsi di sebuah modul, tanpa mengubah file sumber.',
        steps: [
          'Parse modul menjadi AST.',
          'Sisipkan pemanggilan logging di awal setiap fungsi.',
          'Compile ulang dan jalankan, lalu verifikasi perilakunya.',
        ],
        deliverable: 'transformer.py plus contoh modul yang berhasil diinstrumentasi.',
      },
      checklist: [
        'Bisa menjelaskan isi code object.',
        'Bisa membaca dis untuk fungsi sederhana.',
        'Tahu kenapa akses lokal lebih cepat dari global.',
        'Paham batasan mengubah AST saat runtime.',
      ],
    },
    {
      id: '4.2',
      slug: 'memori-dan-gc',
      title: 'Model Memori & Garbage Collector',
      duration: '7 jam',
      summary:
        'Memory leak di Python tetap mungkin, terutama lewat referensi yang tidak disadari. Modul ini mengajarkan cara melacaknya.',
      goals: [
        'Menjelaskan reference counting dan generational GC.',
        'Mengukur alokasi memori dengan tracemalloc.',
        'Menemukan dan memutus siklus referensi.',
      ],
      topics: [
        { h: 'Model', items: ['Objek, tipe, dan refcount', 'Arena dan pymalloc', 'Generational GC', 'Kapan GC berjalan'] },
        { h: 'Alat', items: ['sys.getrefcount', 'tracemalloc', 'gc.get_objects', 'objgraph dan memory profiler'] },
        { h: 'Pola', items: ['Slots dan footprint objek', 'Weakref untuk cache', 'Siklus lewat closure dan callback', 'Cache tanpa batas'] },
      ],
      practice: [
        'Buat contoh memory leak lewat cache global lalu perbaiki dengan weakref.',
        'Bandingkan penggunaan memori class biasa dan class dengan slots.',
      ],
      caseStudy: {
        title: 'Investigasi kebocoran memori',
        brief:
          'Sebuah worker menghabiskan memori perlahan sampai di-restart tiap jam. Temukan penyebab dan tulis perbaikannya.',
        steps: [
          'Reproduksi pertumbuhan memori dalam waktu singkat.',
          'Ambil snapshot tracemalloc dan bandingkan.',
          'Perbaiki sumber kebocoran dan buktikan memori stabil.',
        ],
        deliverable: 'laporan investigasi berisi snapshot sebelum dan sesudah.',
      },
      checklist: [
        'Tahu kenapa refcount tidak menangani siklus.',
        'Bisa membaca snapshot tracemalloc.',
        'Tidak memakai cache tanpa batas di proses panjang.',
        'Paham kapan gc.collect manual berguna.',
      ],
    },
    {
      id: '4.3',
      slug: 'descriptor-metaprogramming',
      title: 'Descriptor & Metaprogramming',
      duration: '7 jam',
      summary:
        'Fitur inilah yang membuat ORM, validasi, dan framework terasa seperti sihir. Kamu akan membongkar mekanismenya dan membangun versi sederhana.',
      goals: [
        'Menjelaskan descriptor protocol dan urutan pencarian atribut.',
        'Menggunakan metaclass dan init_subclass secara terukur.',
        'Membangun API deklaratif tanpa menyembunyikan terlalu banyak.',
      ],
      topics: [
        { h: 'Atribut', items: ['getattr dan getattribute', 'Descriptor data vs non-data', 'Property sebagai descriptor', 'Slots'] },
        { h: 'Metaprogramming', items: ['Metaclass', 'init_subclass', 'Class decorator', 'Registri otomatis'] },
        { h: 'Risiko', items: ['Kode sulit di-debug', 'Benturan dengan tooling', 'Kompatibilitas versi'] },
      ],
      practice: [
        'Implementasikan field validator dengan descriptor.',
        'Buat registri plugin otomatis lewat init_subclass.',
      ],
      caseStudy: {
        title: 'Mini ORM deklaratif',
        brief:
          'Bangun lapisan model yang memungkinkan deklarasi field dan validasi, lalu hasilkan query dasar dari metadata kelas.',
        steps: [
          'Gunakan descriptor untuk field bertipe.',
          'Kumpulkan metadata lewat init_subclass.',
          'Hasilkan query insert dan select sederhana.',
        ],
        deliverable: 'mini_orm.py dengan contoh model dan test.',
      },
      checklist: [
        'Bisa menjelaskan urutan pencarian atribut.',
        'Tahu kapan descriptor berlebihan.',
        'Metaclass dipakai hanya jika alternatif lebih buruk.',
        'API hasil metaprogramming tetap mudah dipahami pengguna.',
      ],
    },
    {
      id: '4.4',
      slug: 'native-extension',
      title: 'Native Extension & FFI',
      duration: '8 jam',
      summary:
        'Saat Python tidak cukup cepat, jawabannya sering bukan menulis ulang semuanya, melainkan memindahkan hot path ke kode native.',
      goals: [
        'Memanggil library C lewat ctypes atau cffi.',
        'Membangun extension dengan Cython atau PyO3.',
        'Mengukur keuntungan nyata dibanding biaya kompleksitas.',
      ],
      topics: [
        { h: 'FFI', items: ['ctypes untuk library dinamis', 'cffi dan binding', 'Marshalling tipe', 'Penanganan error'] },
        { h: 'Extension', items: ['Struktur extension C', 'Cython: tipe statis dan build', 'PyO3 dan maturin', 'ABI dan distribusi wheel'] },
        { h: 'Keputusan', items: ['Overhead pemanggilan', 'Vectorization numpy sebagai alternatif', 'Biaya build dan maintenance'] },
      ],
      practice: [
        'Bungkus satu fungsi C sederhana lewat ctypes.',
        'Percepat fungsi hot path dengan Cython lalu bandingkan.',
      ],
      caseStudy: {
        title: 'Hot path 10x lebih cepat',
        brief:
          'Ambil fungsi paling mahal dari proyek fase sebelumnya, pindahkan ke native, dan buktikan peningkatan performa tanpa mengubah API Python.',
        steps: [
          'Ukur baseline dan siapkan test kesetaraan hasil.',
          'Implementasikan versi native.',
          'Benchmark dan dokumentasikan trade-off build.',
        ],
        deliverable: 'modul native, benchmark, dan panduan build.',
      },
      checklist: [
        'Tahu risiko segmentation fault dari kode native.',
        'Selalu menguji kesetaraan hasil.',
        'Mempertimbangkan numpy sebelum menulis C.',
        'Bisa menjelaskan dampak ke proses distribusi wheel.',
      ],
    },
    {
      id: '4.5',
      slug: 'gil-dan-paralelisme-modern',
      title: 'GIL & Paralelisme Modern',
      duration: '6 jam',
      summary:
        'Python 3.13 membuka jalan free-threading. Modul ini membahas peluang dan risiko saat GIL tidak lagi menjadi batas.',
      goals: [
        'Menjelaskan mekanisme GIL dan alasan historisnya.',
        'Menguji perilaku thread pada build free-threading.',
        'Menilai kesiapan library yang dipakai.',
      ],
      topics: [
        { h: 'GIL', items: ['Cara kerja dan interval switch', 'Dampak ke beban CPU', 'Kenapa I/O tetap terbantu'] },
        { h: 'Masa depan', items: ['Free-threading di 3.13+', 'Subinterpreter', 'Perubahan pada C extension', 'Status ekosistem'] },
        { h: 'Uji', items: ['Benchmark thread pada dua build', 'Deteksi race condition', 'Migrasi bertahap'] },
      ],
      practice: [
        'Jalankan benchmark CPU-bound pada Python biasa dan free-threading.',
        'Cari library populer yang belum siap free-threading.',
      ],
      caseStudy: {
        title: 'Uji kesiapan free-threading',
        brief:
          'Nilai satu proyekmu: apakah ia mendapat keuntungan dari free-threading, dan apa yang rusak jika GIL dihilangkan?',
        steps: [
          'Jalankan test suite pada build free-threading.',
          'Benchmark bagian CPU-bound dengan beberapa thread.',
          'Tulis rekomendasi migrasi beserta risikonya.',
        ],
        deliverable: 'laporan kesiapan berisi hasil test dan benchmark.',
      },
      checklist: [
        'Bisa menjelaskan GIL tanpa mitos.',
        'Tahu kenapa free-threading belum otomatis lebih cepat.',
        'Memahami risiko race condition pada kode C.',
        'Tidak menyarankan migrasi tanpa pengukuran.',
      ],
    },
    {
      id: '4.6',
      slug: 'performance-engineering',
      title: 'Performance Engineering',
      duration: '7 jam',
      summary:
        'Performa tingkat lanjut adalah soal metrik, bukan trik. Kamu akan bekerja dengan target latency, throughput, dan memori.',
      goals: [
        'Menentukan target performa yang terukur.',
        'Mengoptimasi dengan vectorization dan struktur data yang tepat.',
        'Membuat benchmark yang stabil dan bisa dipercaya.',
      ],
      topics: [
        { h: 'Metodologi', items: ['Baseline dan target', 'Warmup dan variansi', 'Benchmark di lingkungan mirip produksi', 'p50, p95, p99'] },
        { h: 'Teknik', items: ['Vectorization numpy dan polars', 'Memory layout dan cache', 'Batching', 'Paralelisme data'] },
        { h: 'Analisis', items: ['Flame graph', 'Sampling profiler', 'Bottleneck I/O vs CPU', 'Trade-off biaya'] },
      ],
      practice: [
        'Ubah loop pandas menjadi operasi vectorized dan ukur hasilnya.',
        'Buat benchmark yang stabil untuk fungsi dengan variansi tinggi.',
      ],
      caseStudy: {
        title: 'Memenuhi target latency',
        brief:
          'Sebuah endpoint punya p99 di atas SLA. Turunkan tanpa menambah mesin, dengan bukti pengukuran di setiap langkah.',
        steps: [
          'Ukur p50, p95, dan p99 sebelum perubahan.',
          'Profil endpoint dan identifikasi tiga penyebab utama.',
          'Optimasi bertahap dan catat dampak tiap perubahan.',
        ],
        deliverable: 'laporan performa dengan grafik dan rekomendasi.',
      },
      checklist: [
        'Selalu memakai distribusi, bukan rata-rata saja.',
        'Bisa menjelaskan mengapa benchmark lokal menyesatkan.',
        'Tahu batas vectorization untuk data kecil.',
        'Optimasi dihentikan saat target tercapai.',
      ],
    },
    {
      id: '4.7',
      slug: 'sistem-terdistribusi',
      title: 'Sistem Terdistribusi',
      duration: '8 jam',
      summary:
        'Jaringan gagal, pesan datang dua kali, dan worker mati di tengah tugas. Sistem yang baik menganggap kegagalan sebagai hal normal.',
      goals: [
        'Merancang worker queue yang idempoten.',
        'Menerapkan retry, backoff, dan dead letter queue.',
        'Mengamati alur kerja lintas service.',
      ],
      topics: [
        { h: 'Dasar', items: ['Message broker dan queue', 'At-least-once vs exactly-once', 'Idempotency key', 'Outbox pattern'] },
        { h: 'Ketahanan', items: ['Retry dengan backoff', 'Circuit breaker', 'Timeout dan deadline', 'Dead letter queue'] },
        { h: 'Operasi', items: ['Distributed tracing', 'Korelasi log', 'Backpressure', 'Rekonsiliasi data'] },
      ],
      practice: [
        'Buat worker yang aman menerima pesan duplikat.',
        'Tambahkan DLQ dan metrik kegagalan.',
      ],
      caseStudy: {
        title: 'Pipeline tugas tahan gangguan',
        brief:
          'Bangun sistem yang memproses pesanan lewat queue, tetap benar saat worker mati, dan bisa dipulihkan setelah broker restart.',
        steps: [
          'Rancang idempotency key dan state machine tugas.',
          'Implementasikan retry serta DLQ.',
          'Uji dengan mematikan worker di tengah proses.',
        ],
        deliverable: 'worker, producer, dan skenario uji kegagalan.',
      },
      checklist: [
        'Tidak pernah mengasumsikan pesan hanya datang sekali.',
        'Semua operasi penting punya idempotency.',
        'Bisa menjelaskan arti exactly-once secara realistis.',
        'Punya cara menemukan tugas yang macet.',
      ],
    },
    {
      id: '4.8',
      slug: 'arsitektur-skala-besar',
      title: 'Arsitektur Skala Besar',
      duration: '7 jam',
      summary:
        'Keputusan arsitektur punya biaya jangka panjang. Modul ini melatih cara memilih antara kesederhanaan dan skalabilitas.',
      goals: [
        'Membandingkan modular monolith dan microservice secara jujur.',
        'Merancang batas modul berdasarkan domain.',
        'Menentukan SLO dan strategi observability.',
      ],
      topics: [
        { h: 'Bentuk sistem', items: ['Modular monolith', 'Microservice dan biayanya', 'Event-driven', 'CQRS ringan'] },
        { h: 'Batas', items: ['Bounded context', 'Kontrak antar modul', 'Migrasi bertahap', 'Data ownership'] },
        { h: 'Operasi', items: ['SLO dan error budget', 'OpenTelemetry', 'Kapasitas dan scaling', 'Runbook'] },
      ],
      practice: [
        'Rancang arsitektur untuk kenaikan trafik sepuluh kali.',
        'Tulis ADR berisi dua opsi dan alasan memilih salah satunya.',
      ],
      caseStudy: {
        title: 'Rancangan untuk 10x trafik',
        brief:
          'Diberikan sistem monolithic sederhana dan proyeksi pertumbuhan. Buat rencana arsitektur enam bulan ke depan tanpa over-engineering.',
        steps: [
          'Petakan bottleneck saat ini.',
          'Usulkan tiga perubahan berurutan berdasarkan dampak.',
          'Definisikan SLO dan cara memantaunya.',
        ],
        deliverable: 'dokumen arsitektur dan ADR yang bisa dipertahankan dalam review.',
      },
      checklist: [
        'Tidak memilih microservice tanpa alasan organisasi.',
        'Bisa menjelaskan biaya operasional tiap komponen.',
        'SLO ditulis dalam angka, bukan harapan.',
        'Rencana migrasi bertahap dan bisa dibatalkan.',
      ],
    },
    {
      id: '4.9',
      slug: 'keamanan',
      title: 'Keamanan Aplikasi Python',
      duration: '6 jam',
      summary:
        'Keamanan bukan fitur tambahan di akhir. Ia keputusan yang muncul di setiap lapisan, dari dependensi sampai serialisasi data.',
      goals: [
        'Mengidentifikasi risiko umum pada aplikasi Python.',
        'Mengamankan supply chain dependensi.',
        'Menghindari pola berbahaya seperti unpickle data tak tepercaya.',
      ],
      topics: [
        { h: 'Kode', items: ['Validasi input dan output encoding', 'Injeksi SQL dan command', 'Path traversal', 'Deserialisasi berbahaya'] },
        { h: 'Supply chain', items: ['pip-audit', 'Pin dan hash dependency', 'SBOM', 'Tanda tangan artefak'] },
        { h: 'Operasi', items: ['Manajemen secret', 'Least privilege', 'Rotasi kredensial', 'Sandbox dan pembatasan resource'] },
      ],
      practice: [
        'Audit dependensi satu proyek dan perbaiki temuan kritis.',
        'Tulis threat model sederhana untuk API milikmu.',
      ],
      caseStudy: {
        title: 'Hardening satu layanan',
        brief:
          'Lakukan review keamanan pada API TaskFlow: dependensi, rahasia, input berbahaya, dan konfigurasi container.',
        steps: [
          'Jalankan pemindai dependensi dan catat temuan.',
          'Uji tiga skenario serangan umum.',
          'Terapkan perbaikan dan tulis checklist keamanan.',
        ],
        deliverable: 'laporan audit dan daftar perbaikan yang sudah diterapkan.',
      },
      checklist: [
        'Tidak memakai eval atau pickle untuk data eksternal.',
        'Secret tidak pernah masuk repo.',
        'Dependensi diperiksa berkala.',
        'Bisa menjelaskan model ancaman aplikasimu.',
      ],
    },
    {
      id: '4.10',
      slug: 'legacy-dan-maintenance',
      title: 'Legacy Code & Maintenance',
      duration: '7 jam',
      summary:
        'Sebagian besar pekerjaan nyata adalah merawat kode lama. Keterampilan ini jarang diajarkan, tetapi paling dicari.',
      goals: [
        'Menulis test karakterisasi untuk kode tanpa test.',
        'Merefactor bertahap dengan strangler pattern.',
        'Merencanakan migrasi versi Python tanpa menghentikan fitur.',
      ],
      topics: [
        { h: 'Memahami kode', items: ['Membaca alur dari entry point', 'Test karakterisasi', 'Menandai area berisiko', 'Instrumentasi'] },
        { h: 'Refactor', items: ['Langkah kecil yang selalu hijau', 'Strangler pattern', 'Feature flag', 'Migrasi data'] },
        { h: 'Versi', items: ['Deprecation dan peringatan', 'Matriks dukungan versi', 'Strategi upgrade dependency'] },
      ],
      practice: [
        'Ambil modul tanpa test dan tulis test karakterisasi untuk perilaku utamanya.',
        'Ganti satu bagian kode lama dengan implementasi baru di balik flag.',
      ],
      caseStudy: {
        title: 'Penyelamatan codebase',
        brief:
          'Pilih satu proyek open source kecil yang tertinggal beberapa versi Python. Naikkan versi, perbaiki test, dan dokumentasikan prosesnya.',
        steps: [
          'Jalankan test pada versi target dan catat kegagalan.',
          'Perbaiki satu kategori kegagalan per commit.',
          'Tambahkan CI matrix untuk mencegah regresi.',
        ],
        deliverable: 'fork yang hijau di versi baru plus catatan migrasi.',
      },
      checklist: [
        'Tidak menulis ulang dari nol tanpa alasan kuat.',
        'Setiap refactor kecil dan bisa dibatalkan.',
        'Test lama tetap jadi acuan perilaku.',
        'Migrasi punya rencana rollback.',
      ],
    },
    {
      id: '4.11',
      slug: 'open-source-dan-riset',
      title: 'Open Source & Riset',
      duration: '6 jam',
      summary:
        'Cara tercepat naik level adalah membaca kode orang hebat dan berkontribusi. Modul ini membuka pintu itu.',
      goals: [
        'Membaca source code library populer secara terarah.',
        'Membaca PEP dan mengikuti diskusi desain bahasa.',
        'Mengirim pull request yang layak diterima.',
      ],
      topics: [
        { h: 'Membaca kode', items: ['Mulai dari test dan dokumentasi', 'Ikuti satu alur eksekusi', 'Gunakan git blame dan history'] },
        { h: 'Standar', items: ['PEP 8, 484, 621, 517', 'Proses Python Enhancement Proposal', 'Diskusi di mailing list dan GitHub'] },
        { h: 'Kontribusi', items: ['Memilih issue pemula', 'Menulis test dan changelog', 'Etika review dan komunikasi'] },
      ],
      practice: [
        'Telusuri satu fitur di library populer dari dokumentasi sampai implementasi.',
        'Perbaiki typo dokumentasi atau tambahkan test kecil di proyek OSS.',
      ],
      caseStudy: {
        title: 'Pull request pertama',
        brief:
          'Kirim satu kontribusi nyata ke proyek open source, sekecil apa pun, dan lalui proses review sampai merged.',
        steps: [
          'Pilih proyek yang kamu pakai dan issue berlabel pemula.',
          'Diskusikan pendekatan sebelum menulis kode.',
          'Kirim PR dengan test dan deskripsi jelas.',
        ],
        deliverable: 'tautan PR yang merged atau review yang substantif.',
      },
      checklist: [
        'Tidak takut membaca source code library.',
        'Tahu cara mengikuti diskusi desain bahasa.',
        'PR selalu menyertakan alasan dan test.',
        'Bisa menerima review tanpa mengambil pribadi.',
      ],
    },
  ],
  project: {
    title: 'Proyek Expert (pilih satu)',
    desc: 'Tidak ada proyek tunggal di fase ini. Pilih satu jalur yang paling dekat dengan tujuan kariermu dan kerjakan sampai tuntas dengan bukti teknis.',
    requirements: [
      'Opsi A — Mini framework: web framework atau DI container dari nol, dengan test dan dokumentasi.',
      'Opsi B — Native speedup: optimasi proyek fase 3 memakai Cython atau Rust, dengan benchmark.',
      'Opsi C — Distributed pipeline: queue, worker, retry, observability, dan chaos test.',
      'Opsi D — Legacy rescue: audit dan refactor codebase open source kecil, plus ADR.',
      'Semua opsi wajib punya technical writeup minimal 1500 kata.',
      'Writeup memuat keputusan, alternatif yang ditolak, benchmark, dan pelajaran.',
      'Kode punya test, CI, dan dokumentasi cara menjalankan.',
    ],
    bonus: [
      'Presentasikan di komunitas lokal atau meetup.',
      'Publikasikan sebagai package atau artikel teknis.',
      'Tambahkan profil beban dan hasil uji ketahanan.',
    ],
  },
  exit: [
    'Bisa menjelaskan cara Python mengeksekusi kode dan mengelola memori.',
    'Bisa mendiagnosis masalah produksi tanpa menebak.',
    'Bisa merancang sistem dengan batas dan kegagalan yang eksplisit.',
    'Punya satu karya teknis mendalam yang bisa dipertanggungjawabkan.',
  ],
  tips: [
    'Kedalaman mengalahkan jumlah proyek. Satu proyek expert lebih bernilai dari sepuluh tutorial.',
    'Tulis apa yang kamu pelajari. Menulis memaksa kamu menemukan lubang pemahaman.',
    'Kalau macet, kembali ke sumber primer: kode CPython, PEP, dan dokumentasi resmi.',
  ],
};
