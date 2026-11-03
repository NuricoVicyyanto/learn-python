export default {
  dir: 'fase-2',
  num: 2,
  label: 'Intermediate',
  title: 'Intermediate: Struktur & Rekayasa Kode',
  tagline: 'Dari script menjadi perangkat lunak',
  level: 'Intermediate',
  duration: '6–8 minggu · 60–80 jam',
  intro:
    'Di fase ini kamu berhenti menulis script sekali pakai. Kamu mulai merancang kelas, memecah proyek menjadi package, menulis test, dan menjaga kualitas kode dengan alat otomatis.',
  goals: [
    'Merancang kelas dan modul dengan batas tanggung jawab yang jelas.',
    'Menulis test otomatis untuk logika inti dan kasus error.',
    'Mengolah data dari CSV, JSON, dan SQLite tanpa kode berantakan.',
    'Menjaga konsistensi gaya kode dengan lint dan formatter.',
  ],
  modules: [
    {
      id: '2.1',
      slug: 'struktur-data-lanjutan',
      title: 'Struktur Data Lanjutan',
      duration: '5 jam',
      summary:
        'Modul collections menyediakan wadah yang lebih tepat untuk banyak masalah sehari-hari. Kamu juga mulai memikirkan biaya operasi.',
      goals: [
        'Memilih wadah berdasarkan kompleksitas operasi yang dominan.',
        'Memakai Counter, defaultdict, deque, dan namedtuple dengan tepat.',
        'Menjelaskan Big O secara informal untuk operasi umum.',
      ],
      topics: [
        { h: 'Kompleksitas', items: ['Konstan, linear, kuadratik', 'Biaya pencarian di list vs set vs dict', 'Kapan optimasi belum perlu'] },
        { h: 'collections', items: ['Counter untuk frekuensi', 'defaultdict untuk pengelompokan', 'deque untuk antrean', 'namedtuple untuk record ringan'] },
        { h: 'Pola', items: ['Mengelompokkan data', 'Menghitung frekuensi', 'Antrean dan riwayat terbatas'] },
      ],
      practice: [
        'Hitung sepuluh kata paling sering dari file teks besar.',
        'Kelompokkan transaksi per kategori memakai defaultdict.',
      ],
      caseStudy: {
        title: 'Analisis log satu juta baris',
        brief:
          'Diberikan file log besar. Hitung frekuensi level log, endpoint tersibuk, dan waktu respons rata-rata tanpa menghabiskan memori.',
        steps: [
          'Baca file baris per baris, jangan dimuat sekaligus.',
          'Gunakan Counter untuk frekuensi dan defaultdict untuk agregasi.',
          'Tampilkan sepuluh hasil teratas.',
        ],
        deliverable: 'log_analyzer.py yang selesai di bawah 10 detik untuk file 100 MB.',
      },
      checklist: [
        'Bisa menjelaskan kenapa cek keanggotaan di set cepat.',
        'Tahu kapan deque lebih tepat dari list.',
        'Bisa memilih wadah tanpa mencoba semua opsi.',
        'Tidak mengoptimasi sebelum mengukur.',
      ],
    },
    {
      id: '2.2',
      slug: 'comprehension-dan-iterator',
      title: 'Comprehension & Iterator',
      duration: '5 jam',
      summary:
        'Comprehension membuat transformasi data lebih ringkas. Generator membuat kamu bisa memproses data besar tanpa memuat semuanya ke memori.',
      goals: [
        'Menulis comprehension yang tetap mudah dibaca.',
        'Membedakan list, generator, dan iterator.',
        'Membangun pipeline data dengan yield dan itertools.',
      ],
      topics: [
        { h: 'Comprehension', items: ['List, dict, dan set comprehension', 'Filter dengan if', 'Batas keterbacaan dan kapan memakai loop biasa'] },
        { h: 'Iterator', items: ['Protokol iter dan next', 'Generator function dengan yield', 'Generator expression', 'Habis sekali pakai'] },
        { h: 'itertools', items: ['chain, islice, groupby', 'product dan combinations', 'Menghemat memori pada data besar'] },
      ],
      practice: [
        'Ubah loop bersarang menjadi comprehension lalu nilai keterbacaannya.',
        'Buat generator yang membaca file besar baris per baris.',
      ],
      caseStudy: {
        title: 'Pipeline data hemat memori',
        brief:
          'Proses file penjualan 2 GB: filter transaksi valid, hitung total per kota, lalu tulis ringkasan. RAM tidak boleh melebihi 200 MB.',
        steps: [
          'Buat generator pembaca baris.',
          'Rangkai filter dan transformasi tanpa list perantara.',
          'Tulis hasil agregasi ke file.',
        ],
        deliverable: 'pipeline.py plus bukti penggunaan memori dari tracemalloc.',
      },
      checklist: [
        'Bisa menjelaskan kenapa generator tidak bisa diulang dua kali.',
        'Tahu kapan comprehension justru merusak keterbacaan.',
        'Bisa menulis generator tanpa menyimpan seluruh data.',
        'Paham beda iterable dan iterator.',
      ],
    },
    {
      id: '2.3',
      slug: 'fungsi-lanjutan',
      title: 'Fungsi Lanjutan & Decorator',
      duration: '6 jam',
      summary:
        'Fungsi di Python adalah objek. Dari sifat itu lahir closure, higher-order function, dan decorator yang dipakai di hampir semua framework.',
      goals: [
        'Menggunakan args dan kwargs secara sadar.',
        'Menjelaskan closure dan kapan variabel luar tertangkap.',
        'Menulis decorator untuk logging, timing, dan retry.',
      ],
      topics: [
        { h: 'Fungsi sebagai nilai', items: ['Menyimpan fungsi di variabel', 'Mengirim fungsi sebagai argumen', 'Mengembalikan fungsi dari fungsi'] },
        { h: 'Closure', items: ['Variabel bebas dan scope', 'Late binding pada loop', 'functools.partial dan wraps'] },
        { h: 'Decorator', items: ['Decorator tanpa argumen', 'Decorator dengan argumen', 'Decorator berlapis', 'Decorator untuk caching dan retry'] },
      ],
      practice: [
        'Buat decorator yang mengukur waktu eksekusi dan mencetak nama fungsi.',
        'Buat decorator retry dengan jumlah percobaan dan jeda.',
      ],
      caseStudy: {
        title: 'Perpustakaan decorator mini',
        brief:
          'Bangun modul berisi tiga decorator siap pakai: timer, retry, dan cache sederhana. Semuanya harus mempertahankan nama serta docstring fungsi asli.',
        steps: [
          'Implementasikan timer memakai functools.wraps.',
          'Tambahkan retry dengan parameter jumlah percobaan.',
          'Buat cache berbasis dict dan jelaskan batasannya.',
        ],
        deliverable: 'decorators.py plus test untuk tiap decorator.',
      },
      checklist: [
        'Bisa menjelaskan kenapa functools.wraps penting.',
        'Tahu beda argumen posisional dan keyword.',
        'Bisa menulis closure tanpa mengubah variabel global.',
        'Paham risiko decorator yang menyembunyikan error.',
      ],
    },
    {
      id: '2.4',
      slug: 'oop',
      title: 'Object-Oriented Programming',
      duration: '8 jam',
      summary:
        'OOP dipakai saat data dan perilaku memang harus hidup bersama. Fokus modul ini adalah model yang jujur, bukan hierarki kelas yang dipaksakan.',
      goals: [
        'Merancang kelas dengan state dan perilaku yang koheren.',
        'Memilih composition atau inheritance berdasarkan masalah.',
        'Memakai dunder, property, dan dataclass secara tepat.',
      ],
      topics: [
        { h: 'Dasar', items: ['Class, instance, dan atribut', 'Method dan self', 'Constructor dan validasi awal'] },
        { h: 'Relasi', items: ['Inheritance dan override', 'super dan method resolution order', 'Composition sebagai default', 'Abstract base class'] },
        { h: 'Pythonic OOP', items: ['Property untuk akses terkontrol', 'Dunder penting: repr, eq, len, iter', 'dataclass dan frozen', 'Slots untuk efisiensi'] },
      ],
      practice: [
        'Modelkan Akun, Transaksi, dan Budget dengan relasi yang jelas.',
        'Bandingkan implementasi inheritance dan composition untuk kasus yang sama.',
      ],
      caseStudy: {
        title: 'Model domain keuangan',
        brief:
          'Rancang model untuk aplikasi keuangan pribadi: akun punya saldo, transaksi mengubah saldo, dan anggaran memantau batas kategori.',
        steps: [
          'Tentukan invarian yang harus selalu benar.',
          'Implementasikan validasi di constructor dan property.',
          'Tulis repr yang membantu debugging dan test perilaku.',
        ],
        deliverable: 'models.py dengan minimal tiga kelas dan test untuk invariannya.',
      },
      checklist: [
        'Bisa menjelaskan kapan tidak perlu membuat kelas.',
        'Tahu beda atribut kelas dan instance.',
        'Bisa menjelaskan MRO secara sederhana.',
        'Tidak memakai inheritance hanya untuk berbagi kode.',
      ],
    },
    {
      id: '2.5',
      slug: 'exception-dan-context-manager',
      title: 'Exception & Context Manager',
      duration: '4 jam',
      summary:
        'Error adalah bagian dari desain. Modul ini mengajarkan cara membuat hierarki error sendiri dan memastikan sumber daya selalu dibersihkan.',
      goals: [
        'Membuat custom exception yang bermakna.',
        'Menulis context manager dengan class maupun contextlib.',
        'Merancang transaksi yang aman saat gagal di tengah jalan.',
      ],
      topics: [
        { h: 'Hierarki', items: ['Membuat base exception aplikasi', 'Menambahkan konteks pada pesan', 'Exception chaining dengan from'] },
        { h: 'Context manager', items: ['Protokol enter dan exit', 'contextlib.contextmanager', 'Menangani error di dalam with', 'Keluar bersih saat exception'] },
        { h: 'Pola', items: ['Transaksi file dan database', 'Lock', 'Pengukuran waktu sementara'] },
      ],
      practice: [
        'Buat context manager yang mencatat durasi blok kode.',
        'Buat transaksi yang membatalkan perubahan jika terjadi exception.',
      ],
      caseStudy: {
        title: 'Transaksi aman untuk file data',
        brief:
          'Tulis modul yang menyimpan perubahan ke file hanya jika seluruh operasi berhasil. Jika gagal, file asli harus utuh.',
        steps: [
          'Tulis ke file sementara terlebih dahulu.',
          'Ganti file asli hanya setelah penulisan selesai.',
          'Pastikan file sementara dibersihkan saat error.',
        ],
        deliverable: 'atomic_store.py dengan context manager dan test kegagalan.',
      },
      checklist: [
        'Bisa membuat exception sendiri tanpa menangkap semua error.',
        'Tahu kapan memakai contextlib.contextmanager.',
        'Paham kenapa finally tetap jalan saat exception.',
        'Tidak pernah meninggalkan file terbuka.',
      ],
    },
    {
      id: '2.6',
      slug: 'data-file-sqlite',
      title: 'CSV, JSON & SQLite',
      duration: '5 jam',
      summary:
        'Data nyata datang dalam berbagai format. Kamu akan belajar memilih format dan memindahkan data antaranya dengan aman.',
      goals: [
        'Membaca dan menulis CSV dengan modul csv.',
        'Memvalidasi data sebelum menyimpannya.',
        'Menyimpan data ke SQLite dan menjalankan query dasar.',
      ],
      topics: [
        { h: 'CSV', items: ['Header, delimiter, quoting', 'Membaca sebagai dict', 'Menulis dengan newline yang benar'] },
        { h: 'JSON', items: ['Struktur bersarang', 'Serialisasi tipe khusus', 'Perbedaan JSON dan dict Python'] },
        { h: 'SQLite', items: ['Koneksi dan cursor', 'Create, insert, select, update', 'Parameter binding untuk keamanan', 'Commit dan rollback'] },
      ],
      practice: [
        'Impor CSV penjualan ke SQLite lalu jalankan tiga query agregasi.',
        'Ekspor hasil query kembali ke CSV.',
      ],
      caseStudy: {
        title: 'Import data kotor',
        brief:
          'File CSV berisi baris duplikat, tanggal tidak konsisten, dan angka dengan pemisah ribuan. Bersihkan lalu simpan ke SQLite.',
        steps: [
          'Tentukan aturan pembersihan tiap kolom.',
          'Catat baris yang ditolak beserta alasannya.',
          'Simpan data bersih dan hasilkan laporan kualitas data.',
        ],
        deliverable: 'importer.py plus database dan laporan baris ditolak.',
      },
      checklist: [
        'Tahu kenapa parameter binding mencegah SQL injection.',
        'Bisa membaca CSV tanpa bergantung pada pemisah koma.',
        'Paham kapan JSON lebih tepat dari CSV.',
        'Selalu menutup koneksi database.',
      ],
    },
    {
      id: '2.7',
      slug: 'struktur-proyek',
      title: 'Struktur Proyek & Packaging',
      duration: '5 jam',
      summary:
        'Proyek yang tumbuh perlu struktur. Kamu akan mengubah script menjadi package yang bisa dipasang dan diimpor dari mana saja.',
      goals: [
        'Menyusun layout src dan menjelaskan perannya.',
        'Mengelola dependensi lewat pyproject.toml.',
        'Memisahkan kode aplikasi, test, dan konfigurasi.',
      ],
      topics: [
        { h: 'Layout', items: ['Flat vs src layout', 'init dan batas package', 'Modul vs package', 'Tempat menyimpan data dan konfigurasi'] },
        { h: 'Dependensi', items: ['pyproject.toml', 'Dependency vs dev dependency', 'Version pinning', 'Lock file'] },
        { h: 'Entry point', items: ['Script console', 'Module execution dengan python -m', 'Versi dan metadata package'] },
      ],
      practice: [
        'Ubah proyek Expense Tracker menjadi package dengan layout src.',
        'Tambahkan entry point agar bisa dijalankan dengan satu perintah.',
      ],
      caseStudy: {
        title: 'Refactor menjadi package',
        brief:
          'Ambil proyek fase sebelumnya dan ubah menjadi package yang bisa diinstal di venv bersih, lengkap dengan perintah CLI.',
        steps: [
          'Pindahkan kode ke src/nama_package.',
          'Definisikan dependencies dan entry point di pyproject.toml.',
          'Uji instalasi di venv baru dan jalankan dari folder lain.',
        ],
        deliverable: 'package terinstal lokal dengan perintah CLI yang berfungsi.',
      },
      checklist: [
        'Bisa membuat package yang diimpor dari luar folder proyek.',
        'Tahu beda dependency runtime dan development.',
        'Tidak menyimpan kode di root tanpa struktur.',
        'Bisa menjelaskan isi pyproject.toml milikmu.',
      ],
    },
    {
      id: '2.8',
      slug: 'testing',
      title: 'Testing dengan pytest',
      duration: '6 jam',
      summary:
        'Test bukan formalitas. Test adalah cara aman mengubah kode. Modul ini membangun kebiasaan menulis test sebelum atau sesudah fitur, bukan tidak sama sekali.',
      goals: [
        'Menulis test yang menguji perilaku, bukan implementasi.',
        'Memakai fixture dan parametrize untuk mengurangi duplikasi.',
        'Mengukur coverage dan memahami batasannya.',
      ],
      topics: [
        { h: 'Dasar', items: ['Struktur folder tests', 'assert dan nama test', 'Menjalankan test terpilih', 'Arrange, Act, Assert'] },
        { h: 'Fitur pytest', items: ['Fixture dan scope', 'parametrize', 'tmp_path untuk file', 'monkeypatch dan mock'] },
        { h: 'Kualitas', items: ['Test kasus batas dan error', 'Coverage sebagai petunjuk, bukan target', 'Test yang lambat dan rapuh'] },
      ],
      practice: [
        'Tulis test untuk fungsi validasi dengan minimal lima kasus batas.',
        'Ganti tiga test duplikat dengan satu parametrize.',
      ],
      caseStudy: {
        title: 'Test suite untuk lapisan penyimpanan',
        brief:
          'Tulis test menyeluruh untuk modul storage: simpan, muat, perbarui, hapus, dan file rusak. Tidak boleh menyentuh file asli pengguna.',
        steps: [
          'Gunakan tmp_path untuk file sementara.',
          'Uji jalur sukses dan jalur gagal.',
          'Pastikan coverage modul storage di atas 90 persen.',
        ],
        deliverable: 'tests/test_storage.py yang lulus dan laporan coverage.',
      },
      checklist: [
        'Bisa menulis test tanpa membuka dokumentasi pytest.',
        'Tahu beda unit test dan integration test.',
        'Test yang gagal memberi pesan yang jelas.',
        'Tidak menguji detail internal yang tidak penting.',
      ],
    },
    {
      id: '2.9',
      slug: 'kualitas-kode',
      title: 'Kualitas Kode & Tooling',
      duration: '4 jam',
      summary:
        'Alat otomatis menghilangkan debat gaya kode. Waktumu lebih berharga untuk memikirkan desain.',
      goals: [
        'Mengonfigurasi ruff dan black dalam satu proyek.',
        'Memakai pre-commit agar masalah tertangkap sebelum commit.',
        'Menulis docstring dan type hint dasar yang berguna.',
      ],
      topics: [
        { h: 'Gaya', items: ['PEP 8 secara praktis', 'Penamaan yang konsisten', 'Panjang baris dan format otomatis'] },
        { h: 'Alat', items: ['ruff untuk lint dan fix', 'black untuk format', 'pre-commit hooks', 'Konfigurasi di pyproject.toml'] },
        { h: 'Dokumentasi', items: ['Docstring satu baris dan multi baris', 'Type hint dasar', 'Komentar menjelaskan mengapa, bukan apa'] },
      ],
      practice: [
        'Jalankan ruff pada proyek lama dan perbaiki semua temuan.',
        'Tambahkan pre-commit yang menjalankan lint, format, dan test cepat.',
      ],
      caseStudy: {
        title: 'Pintu kualitas otomatis',
        brief:
          'Pasang pipeline lokal yang menolak commit jika kode tidak lolos lint atau test. Tunjukkan bukti bahwa commit kotor benar-benar ditolak.',
        steps: [
          'Konfigurasi ruff, black, dan pytest di pre-commit.',
          'Buat commit yang sengaja melanggar aturan.',
          'Perbaiki dan tunjukkan commit bersih lolos.',
        ],
        deliverable: 'repo dengan .pre-commit-config.yaml dan bukti penolakan commit.',
      },
      checklist: [
        'Tahu beda lint dan format.',
        'Bisa menjelaskan setiap aturan yang dimatikan.',
        'Tidak mematikan alat hanya karena malas memperbaiki.',
        'Kode orang lain mudah kamu baca.',
      ],
    },
    {
      id: '2.10',
      slug: 'regex',
      title: 'Regular Expression',
      duration: '4 jam',
      summary:
        'Regex kuat untuk pola teks, tetapi juga mudah menjadi kode yang tidak bisa dibaca. Modul ini menekankan pola sederhana dan pengujian.',
      goals: [
        'Menulis pola untuk pencarian dan ekstraksi teks.',
        'Memakai grup, nama grup, dan substitusi.',
        'Mengenali risiko pola yang lambat pada input besar.',
      ],
      topics: [
        { h: 'Dasar', items: ['Karakter literal dan meta', 'Kelas karakter, kuantifier, anchor', 'Greedy vs non-greedy'] },
        { h: 'Fitur', items: ['Grup dan named group', 'findall, finditer, sub', 'Flag case-insensitive dan multiline'] },
        { h: 'Keamanan', items: ['ReDoS dan pola bersarang', 'Membatasi input', 'Kapan parser lebih tepat dari regex'] },
      ],
      practice: [
        'Ambil tanggal, level, dan pesan dari baris log.',
        'Validasi format email sederhana dan jelaskan batasannya.',
      ],
      caseStudy: {
        title: 'Parser log format custom',
        brief:
          'Log aplikasi punya format tidak standar. Ekstrak komponennya menjadi data terstruktur dan hitung statistik per level.',
        steps: [
          'Tulis pola dengan named group.',
          'Uji pada sepuluh baris contoh, termasuk baris rusak.',
          'Hasilkan ringkasan statistik dari hasil parsing.',
        ],
        deliverable: 'log_parser.py dengan test untuk baris valid dan tidak valid.',
      },
      checklist: [
        'Bisa menjelaskan arti setiap bagian polamu.',
        'Tahu kapan regex bukan alat yang tepat.',
        'Selalu menguji pola pada input nyata.',
        'Paham risiko pola yang bisa melambat eksponensial.',
      ],
    },
  ],
  project: {
    title: 'Inventory System',
    desc: 'Proyek yang memaksa kamu memakai hampir semua materi fase ini sekaligus: OOP, SQLite, CSV, exception, packaging, test, dan tooling.',
    requirements: [
      'Model barang, kategori, dan transaksi stok memakai class.',
      'Simpan data ke SQLite dengan operasi tambah, ubah, hapus, dan cari.',
      'Import dan ekspor data lewat CSV.',
      'Laporan stok rendah dan riwayat perubahan stok.',
      'Custom exception untuk aturan bisnis, misalnya stok tidak boleh negatif.',
      'Minimal 30 unit test dan coverage di atas 80 persen.',
      'Lint dan format bersih, pre-commit berjalan.',
      'Struktur package src yang bisa diinstal.',
    ],
    bonus: [
      'Mode CLI interaktif dengan typer atau argparse.',
      'Migrasi skema database sederhana.',
      'Ekspor laporan ke Markdown.',
    ],
  },
  exit: [
    'Bisa merancang kelas tanpa hierarki warisan yang dipaksakan.',
    'Proyek punya test yang benar-benar menangkap bug.',
    'Kode bisa dipasang dan dijalankan di mesin lain.',
    'Bisa menjelaskan trade-off desain yang kamu ambil.',
  ],
  tips: [
    'Tulis test untuk bug sebelum memperbaikinya. Itu kebiasaan yang membedakan profesional dan pemula.',
    'Jangan menambah pattern atau abstraksi sebelum ada kebutuhan nyata.',
    'Kalau bingung memilih struktur, tulis dulu, lalu refactor setelah polanya terlihat.',
  ],
};
