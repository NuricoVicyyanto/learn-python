export default {
  dir: 'fase-1',
  num: 1,
  label: 'Beginner',
  title: 'Beginner: Bahasa Inti',
  tagline: 'Menulis program utuh pertama',
  level: 'Beginner',
  duration: '4–5 minggu · 40–50 jam',
  intro:
    'Fase ini membangun kosakata dasar Python: nilai, kontrol alur, teks, kumpulan data, fungsi, error, file, dan modul. Setelah selesai, kamu bisa menulis program 200–400 baris tanpa menyalin kode orang lain.',
  goals: [
    'Menyelesaikan masalah kecil dengan kombinasi tipe data, kondisi, dan perulangan.',
    'Memecah program menjadi fungsi yang punya satu tanggung jawab jelas.',
    'Menyimpan dan membaca data dari file JSON atau teks.',
    'Menangani input pengguna yang salah tanpa membuat program berhenti.',
  ],
  modules: [
    {
      id: '1.1',
      slug: 'variabel-dan-tipe-data',
      title: 'Variabel & Tipe Data',
      duration: '4 jam',
      summary:
        'Nilai di Python punya tipe, dan tipe menentukan operasi apa yang masuk akal. Modul ini juga memperkenalkan konsep mutability yang akan sering muncul lagi.',
      goals: [
        'Mengenali int, float, str, bool, dan None serta kapan dipakai.',
        'Melakukan konversi tipe secara sadar, termasuk saat membaca input.',
        'Membedakan objek mutable dan immutable secara praktis.',
      ],
      topics: [
        { h: 'Tipe dasar', items: ['Bilangan bulat, desimal, dan keterbatasan float', 'String sebagai urutan karakter', 'Boolean dan nilai kebenaran', 'None sebagai penanda belum ada nilai'] },
        { h: 'Operasi', items: ['Aritmatika, pembagian bulat, modulo, pangkat', 'Perbandingan dan operator logika', 'Konversi eksplisit dengan int, float, str', 'Assignment ganda dan unpacking'] },
        { h: 'Mutability', items: ['Immutable: int, str, tuple', 'Mutable: list, dict, set', 'Efek samping saat dua variabel menunjuk objek yang sama'] },
      ],
      practice: [
        'Hitung indeks massa tubuh dari input tinggi dan berat, lalu bulatkan ke satu desimal.',
        'Tukar nilai dua variabel tanpa variabel bantu.',
      ],
      caseStudy: {
        title: 'Konverter satuan serbaguna',
        brief:
          'Buat program yang mengubah suhu, panjang, dan berat. Program harus menolak input bukan angka dengan pesan yang jelas.',
        steps: [
          'Tentukan tiga kategori konversi dan rumusnya.',
          'Baca input, konversi ke float, dan tangani kegagalan konversi.',
          'Tampilkan hasil dengan satuan asal dan tujuan.',
        ],
        deliverable: 'satu file konverter.py yang bisa mengubah minimal enam pasangan satuan.',
      },
      checklist: [
        'Bisa menjelaskan kenapa 0.1 + 0.2 tidak sama persis dengan 0.3.',
        'Tahu kapan memakai int dan kapan float.',
        'Bisa mengubah input pengguna menjadi angka dengan aman.',
        'Paham kenapa string tidak bisa diubah di tempat.',
      ],
    },
    {
      id: '1.2',
      slug: 'kontrol-alur',
      title: 'Kontrol Alur',
      duration: '4 jam',
      summary:
        'Program mulai mengambil keputusan dan mengulang pekerjaan. Fokusnya adalah menulis kondisi yang mudah dibaca dan loop yang pasti berhenti.',
      goals: [
        'Menyusun percabangan bertingkat tanpa membuat kode sulit dibaca.',
        'Memilih for atau while sesuai bentuk masalah.',
        'Menggunakan break, continue, dan else pada loop dengan tepat.',
      ],
      topics: [
        { h: 'Percabangan', items: ['if, elif, else', 'Kondisi bertingkat dan early return', 'Ternary untuk kasus sederhana', 'match case untuk banyak pilihan'] },
        { h: 'Perulangan', items: ['for dan range', 'while dan kondisi berhenti', 'break, continue, dan loop else', 'Loop bersarang dan batasannya'] },
        { h: 'Pola', items: ['Validasi input berulang', 'Menu interaktif', 'Akumulator dan pencacah'] },
      ],
      practice: [
        'Buat tebak angka dengan batas percobaan dan petunjuk terlalu besar atau kecil.',
        'Ubah rantai if panjang menjadi match case.',
      ],
      caseStudy: {
        title: 'Menu aplikasi interaktif',
        brief:
          'Bangun menu teks yang terus berjalan sampai pengguna memilih keluar. Setiap pilihan menjalankan aksi berbeda dan menangani input tidak valid.',
        steps: [
          'Rancang daftar menu dan aksi masing-masing.',
          'Gunakan loop utama dengan match case.',
          'Pastikan pilihan tidak dikenal tidak menghentikan program.',
        ],
        deliverable: 'menu.py dengan minimal empat aksi dan satu jalur keluar yang bersih.',
      },
      checklist: [
        'Bisa menjelaskan kapan while lebih tepat dari for.',
        'Tidak membuat loop tanpa kondisi berhenti yang jelas.',
        'Bisa membaca percabangan bertingkat dan menyederhanakannya.',
        'Tahu efek break pada loop bersarang.',
      ],
    },
    {
      id: '1.3',
      slug: 'string',
      title: 'String & Formatting',
      duration: '4 jam',
      summary:
        'Sebagian besar program berurusan dengan teks: input, file, log, dan laporan. Menguasai string membuat output jauh lebih rapi.',
      goals: [
        'Mengambil bagian string dengan indexing dan slicing.',
        'Memakai method string yang tepat tanpa menulis loop manual.',
        'Membuat output rapi dengan f-string dan format specifier.',
      ],
      topics: [
        { h: 'Dasar', items: ['Index, slice, dan langkah negatif', 'Immutability string', 'Escape character dan raw string'] },
        { h: 'Method penting', items: ['strip, split, join', 'replace, startswith, endswith', 'upper, lower, title, casefold', 'find dan count'] },
        { h: 'Formatting', items: ['f-string dan ekspresi di dalamnya', 'Format angka, persen, dan padding', 'Perataan teks untuk laporan tabel'] },
      ],
      practice: [
        'Rapikan nama lengkap dari input berantakan menjadi format Title Case.',
        'Buat tabel teks berisi nama barang, jumlah, dan harga yang rata kanan.',
      ],
      caseStudy: {
        title: 'Laporan penjualan teks',
        brief:
          'Diberikan data penjualan mentah berbentuk satu string per baris. Ubah menjadi laporan tabel dengan total di bagian bawah.',
        steps: [
          'Pisahkan setiap baris dengan split dan ambil kolomnya.',
          'Hitung total dan format sebagai rupiah.',
          'Cetak tabel dengan lebar kolom konsisten.',
        ],
        deliverable: 'laporan.py yang menerima file teks dan mencetak tabel rapi.',
      },
      checklist: [
        'Bisa membalik string dengan slicing.',
        'Tahu beda split tanpa argumen dan dengan argumen.',
        'Bisa memformat angka desimal dan persen.',
        'Tidak memakai penggabungan string di dalam loop besar.',
      ],
    },
    {
      id: '1.4',
      slug: 'struktur-data-dasar',
      title: 'Struktur Data Dasar',
      duration: '5 jam',
      summary:
        'List, tuple, set, dan dict adalah empat wadah utama. Memilih wadah yang tepat menyederhanakan banyak masalah.',
      goals: [
        'Memilih list, tuple, set, atau dict berdasarkan kebutuhan.',
        'Menambah, mengubah, menghapus, dan mencari elemen dengan efisien.',
        'Mengurutkan dan mentransformasi kumpulan data sederhana.',
      ],
      topics: [
        { h: 'List dan tuple', items: ['Membuat, menambah, menghapus', 'Indexing, slicing, dan salinan', 'Sorting dengan key', 'Tuple untuk data yang tidak berubah'] },
        { h: 'Set', items: ['Keunikan otomatis', 'Operasi himpunan: union, intersection, difference', 'Kapan set lebih cepat dari list'] },
        { h: 'Dict', items: ['Pasangan kunci dan nilai', 'get, keys, values, items', 'Iterasi dan update', 'Nested dict untuk data berlapis'] },
      ],
      practice: [
        'Hitung frekuensi kata dalam sebuah paragraf memakai dict.',
        'Cari irisan dua daftar nama tanpa loop bersarang.',
      ],
      caseStudy: {
        title: 'Daftar belanja pintar',
        brief:
          'Buat program daftar belanja yang mencegah duplikasi, menghitung total, dan mengelompokkan barang per kategori.',
        steps: [
          'Simpan barang sebagai dict berisi nama, harga, dan kategori.',
          'Gunakan set untuk mencegah nama barang ganda.',
          'Hitung subtotal per kategori dan total keseluruhan.',
        ],
        deliverable: 'belanja.py dengan fitur tambah, hapus, lihat, dan total.',
      },
      checklist: [
        'Tahu kapan tuple lebih tepat daripada list.',
        'Bisa mengurutkan list of dict dengan key.',
        'Paham kenapa pencarian di set lebih cepat daripada di list.',
        'Bisa mengakses nilai dict tanpa KeyError.',
      ],
    },
    {
      id: '1.5',
      slug: 'fungsi',
      title: 'Fungsi',
      duration: '5 jam',
      summary:
        'Fungsi adalah alat utama untuk mengendalikan kompleksitas. Modul ini menekankan fungsi kecil dengan nama jelas dan tanggung jawab tunggal.',
      goals: [
        'Menulis fungsi dengan parameter dan nilai balik yang jelas.',
        'Membedakan print dan return serta kapan memakai masing-masing.',
        'Memahami scope lokal, global, dan bahaya state global.',
      ],
      topics: [
        { h: 'Dasar', items: ['def, parameter, argumen, return', 'Fungsi tanpa return mengembalikan None', 'Docstring singkat'] },
        { h: 'Parameter', items: ['Posisional vs keyword', 'Nilai default dan jebakan objek mutable', 'Jumlah argumen dinamis dengan args dan kwargs'] },
        { h: 'Desain', items: ['Satu fungsi satu tanggung jawab', 'Nama berbasis kata kerja', 'Menghindari efek samping tersembunyi'] },
      ],
      practice: [
        'Pecah kalkulator 100 baris menjadi lima fungsi kecil.',
        'Tulis fungsi yang mengembalikan dua nilai sekaligus.',
      ],
      caseStudy: {
        title: 'Refactor kalkulator prosedural',
        brief:
          'Kamu diberi kalkulator yang seluruh logikanya berada di satu blok panjang. Pecah tanpa mengubah perilaku.',
        steps: [
          'Identifikasi tanggung jawab: baca input, validasi, hitung, tampilkan.',
          'Pindahkan setiap tanggung jawab ke fungsi sendiri.',
          'Tulis pemanggilan utama di dalam blok if __name__ == "__main__".',
        ],
        deliverable: 'kalkulator.py hasil refactor dengan fungsi pendek dan nama jelas.',
      },
      checklist: [
        'Bisa menjelaskan beda print dan return.',
        'Tahu kenapa default parameter berupa list berbahaya.',
        'Bisa menulis fungsi tanpa variabel global.',
        'Fungsi yang kamu tulis punya nama yang menjelaskan aksinya.',
      ],
    },
    {
      id: '1.6',
      slug: 'error-handling-dasar',
      title: 'Error Handling Dasar',
      duration: '3 jam',
      summary:
        'Program yang baik tidak hanya berjalan saat semuanya benar. Ia juga memberi pesan jelas saat menerima input salah atau kehilangan file.',
      goals: [
        'Menggunakan try, except, else, dan finally dengan tepat.',
        'Memilih exception yang spesifik, bukan menangkap semua error.',
        'Melempar error sendiri saat data tidak valid.',
      ],
      topics: [
        { h: 'Mekanisme', items: ['try dan except', 'else saat tidak ada error', 'finally untuk pembersihan', 'Rantai exception'] },
        { h: 'Jenis error', items: ['ValueError, TypeError, KeyError, FileNotFoundError', 'Menangkap terlalu luas dan akibatnya', 'raise untuk validasi'] },
        { h: 'Praktik', items: ['Pesan error yang membantu pengguna', 'Validasi di batas input', 'Membedakan error program dan error pengguna'] },
      ],
      practice: [
        'Ubah program pembagi yang crash menjadi program yang meminta input ulang.',
        'Buat validasi umur yang melempar ValueError dengan pesan jelas.',
      ],
      caseStudy: {
        title: 'Formulir input yang tahan salah ketik',
        brief:
          'Buat formulir pendaftaran sederhana yang meminta nama, umur, dan email. Semua input divalidasi dan kesalahan dijelaskan satu per satu.',
        steps: [
          'Tentukan aturan validasi tiap kolom.',
          'Tangkap error konversi dan validasi secara terpisah.',
          'Tampilkan ringkasan kesalahan tanpa menghentikan program.',
        ],
        deliverable: 'formulir.py yang tidak pernah crash karena input pengguna.',
      },
      checklist: [
        'Tidak memakai except polos tanpa alasan.',
        'Tahu kapan memakai finally.',
        'Bisa membedakan error yang harus ditangani dan yang harus dibiarkan.',
        'Pesan error yang kamu tulis bisa dipahami pengguna awam.',
      ],
    },
    {
      id: '1.7',
      slug: 'file-dan-path',
      title: 'File & Path',
      duration: '4 jam',
      summary:
        'Data yang hanya ada di memori hilang saat program ditutup. Modul ini mengajarkan cara menyimpan dan membaca data dengan aman.',
      goals: [
        'Membaca dan menulis file teks memakai with.',
        'Mengelola path dengan pathlib, bukan penggabungan string.',
        'Menangani file yang tidak ada atau encoding yang salah.',
      ],
      topics: [
        { h: 'Membaca dan menulis', items: ['Mode r, w, a, dan implikasinya', 'with sebagai context manager', 'Encoding utf-8 secara eksplisit'] },
        { h: 'Path', items: ['pathlib.Path', 'Path relatif dan absolut', 'Membuat folder dan mengecek keberadaan file'] },
        { h: 'Format data', items: ['Teks biasa dan baris baru', 'JSON untuk struktur bersarang', 'CSV untuk data tabular'] },
      ],
      practice: [
        'Buat log aktivitas yang menambahkan baris baru tanpa menghapus isi lama.',
        'Baca file CSV lalu tampilkan lima baris pertama.',
      ],
      caseStudy: {
        title: 'Jurnal harian',
        brief:
          'Buat aplikasi jurnal yang menyimpan entri per tanggal, bisa dibaca kembali, dan tidak rusak jika file belum ada.',
        steps: [
          'Simpan entri dalam file JSON per bulan.',
          'Tangani kondisi file belum ada sebagai daftar kosong.',
          'Tampilkan entri terbaru lebih dulu.',
        ],
        deliverable: 'jurnal.py dengan fitur tulis, baca semua, dan cari berdasarkan kata kunci.',
      },
      checklist: [
        'Selalu memakai with saat membuka file.',
        'Tahu kenapa encoding harus disebutkan.',
        'Bisa membedakan path relatif dan absolut.',
        'Tidak pernah menimpa file tanpa sengaja.',
      ],
    },
    {
      id: '1.8',
      slug: 'modul-dan-stdlib',
      title: 'Modul & Standard Library',
      duration: '4 jam',
      summary:
        'Python hadir dengan banyak modul siap pakai. Belajar membacanya jauh lebih berharga daripada menghafal.',
      goals: [
        'Mengimpor modul dan memilih bentuk import yang tepat.',
        'Memakai modul math, random, datetime, json, dan sys.',
        'Menulis script yang bisa dijalankan langsung maupun diimpor.',
      ],
      topics: [
        { h: 'Import', items: ['import, from, as', 'Namespace dan tabrakan nama', 'if __name__ == "__main__"'] },
        { h: 'Modul berguna', items: ['math dan random', 'datetime dan timedelta', 'json untuk pertukaran data', 'sys.argv untuk argumen terminal'] },
        { h: 'Menjelajah', items: ['Membaca dokumentasi modul', 'Mencoba di REPL', 'Melihat isi modul dengan dir dan help'] },
      ],
      practice: [
        'Buat program yang mencetak tanggal hari ini dalam format Indonesia.',
        'Simpan dan muat skor permainan dari file JSON.',
      ],
      caseStudy: {
        title: 'Pencatat skor permainan',
        brief:
          'Buat program yang menyimpan skor pemain, menampilkan peringkat, dan bertahan setelah program ditutup.',
        steps: [
          'Rancang struktur JSON berisi nama dan skor.',
          'Muat data saat mulai, simpan setiap kali ada skor baru.',
          'Urutkan dan tampilkan lima besar.',
        ],
        deliverable: 'skor.py dengan penyimpanan permanen dan papan peringkat.',
      },
      checklist: [
        'Bisa menjelaskan fungsi blok __main__.',
        'Tahu cara membaca dokumentasi modul standar.',
        'Bisa menyimpan struktur data ke JSON dan memuatnya kembali.',
        'Tidak menamai file sama dengan modul standar.',
      ],
    },
  ],
  project: {
    title: 'Expense Tracker CLI',
    desc: 'Proyek pertama yang menyatukan semua materi fase ini: input, validasi, struktur data, fungsi, file, dan modul. Tidak perlu framework apa pun.',
    requirements: [
      'Tambah pengeluaran berisi tanggal, kategori, nominal, dan catatan.',
      'Lihat daftar pengeluaran dengan filter kategori dan bulan.',
      'Hitung total keseluruhan serta total per kategori.',
      'Hapus pengeluaran berdasarkan ID.',
      'Data tersimpan di JSON dan tetap ada setelah program ditutup.',
      'Input tidak valid tidak boleh membuat program crash.',
      'Kode terpisah minimal menjadi main.py, storage.py, dan cli.py.',
    ],
    bonus: [
      'Ekspor laporan ke CSV.',
      'Anggaran bulanan dengan peringatan saat hampir habis.',
      'Perintah bantuan yang menjelaskan semua opsi.',
    ],
  },
  exit: [
    'Bisa menulis program 200–400 baris dari nol tanpa menyalin.',
    'Bisa menjelaskan alasan setiap struktur data yang dipilih.',
    'Program tidak crash karena input pengguna yang salah.',
    'Data bisa disimpan dan dimuat kembali dengan benar.',
  ],
  tips: [
    'Jangan mengejar kode pendek. Kejar kode yang jelas.',
    'Kalau sebuah fungsi butuh lebih dari satu layar, pecah.',
    'Biasakan mengetik ulang contoh, bukan copy-paste. Otot mengingat lebih baik dari mata.',
  ],
};
