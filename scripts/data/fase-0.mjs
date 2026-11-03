export default {
  dir: 'fase-0',
  num: 0,
  label: 'Fondasi',
  title: 'Fondasi & Setup',
  tagline: 'Siapkan alat kerja sebelum menulis kode',
  level: 'Pemula total',
  duration: '1 minggu · 10–15 jam',
  intro:
    'Fase ini tidak mengajarkan sintaks Python secara mendalam. Tujuannya satu: memastikan kamu punya lingkungan kerja yang rapi, bisa menjalankan file Python, membaca pesan error, dan menyimpan pekerjaan dengan Git. Semua fase berikutnya bergantung pada fase ini.',
  goals: [
    'Memasang Python dan memilih interpreter yang benar di editor.',
    'Menggunakan terminal untuk berpindah folder, menjalankan program, dan membaca output.',
    'Menyimpan pekerjaan dengan Git memakai commit yang bermakna.',
    'Membaca traceback dan menemukan baris penyebab error.',
  ],
  modules: [
    {
      id: '0.1',
      slug: 'lingkungan-python',
      title: 'Lingkungan & Instalasi Python',
      duration: '2 jam',
      summary:
        'Memasang Python, mengenal virtual environment, dan menyiapkan editor. Ini fondasi yang menentukan apakah semua modul berikutnya berjalan lancar.',
      goals: [
        'Menjelaskan beda interpreter Python, virtual environment, dan package manager.',
        'Memasang Python 3.12 atau lebih baru dan memverifikasinya dari terminal.',
        'Membuat serta mengaktifkan virtual environment di Windows, Linux, dan macOS.',
      ],
      topics: [
        { h: 'Konsep', items: ['Kode sumber, interpreter, dan proses menjalankan file', 'Versi Python dan mengapa proyek nyata sering mengunci versi', 'Isolasi dependensi dengan virtual environment'] },
        { h: 'Praktik', items: ['Instalasi dari python.org atau lewat uv', 'Verifikasi dengan python --version dan where python', 'Membuat venv: python -m venv .venv', 'Aktivasi di Windows dan Unix', 'pip install serta requirements.txt'] },
        { h: 'Editor', items: ['VS Code dengan extension Python dan Pylance', 'Memilih interpreter dari dalam VS Code', 'Terminal terintegrasi dan tombol Run'] },
      ],
      practice: [
        'Buat folder latihan-0.1, lalu buat dua venv berbeda dan bandingkan isi folder site-packages.',
        'Jalankan script yang mencetak versi Python dan lokasi interpreter, lalu simpan outputnya.',
      ],
      caseStudy: {
        title: 'Dua versi Python, satu komputer',
        brief:
          'Kadang satu proyek butuh Python 3.11 dan proyek lain butuh 3.13. Kamu akan membuktikan bahwa dua venv bisa memakai versi berbeda tanpa saling mengganggu.',
        steps: [
          'Pasang dua versi Python (boleh lewat uv atau installer resmi).',
          'Buat venv-a dan venv-b, masing-masing dengan versi berbeda.',
          'Cetak sys.version di kedua venv dan bandingkan hasilnya.',
        ],
        deliverable: 'Folder latihan berisi dua venv, dua script versi, dan catatan singkat perbedaan output.',
      },
      checklist: [
        'python --version dan pip --version jalan di terminal.',
        'Bisa membuat dan mengaktifkan venv tanpa melihat tutorial.',
        'Tahu cara memilih interpreter di VS Code.',
        'Tahu kenapa tidak boleh install package global untuk semua proyek.',
      ],
    },
    {
      id: '0.2',
      slug: 'terminal-dan-shell',
      title: 'Terminal & Shell',
      duration: '2 jam',
      summary:
        'Terminal adalah antarmuka utama developer. Di modul ini kamu berlatih navigasi folder, manipulasi file, dan membaca exit code.',
      goals: [
        'Berpindah folder dan memeriksa isi direktori dengan percaya diri.',
        'Membuat, menyalin, memindahkan, dan menghapus file lewat terminal.',
        'Memahami exit code, pipe, dan redirect.',
      ],
      topics: [
        { h: 'Navigasi', items: ['pwd, cd, ls atau dir', 'Path relatif vs absolut', 'Karakter khusus dan spasi pada nama file'] },
        { h: 'Operasi file', items: ['mkdir, cp, mv, rm', 'Melihat isi file dengan cat, head, tail', 'Mencari file dengan find atau glob'] },
        { h: 'Alur data', items: ['Redirect output ke file', 'Pipe antar perintah', 'Exit code dan arti 0 vs bukan 0'] },
      ],
      practice: [
        'Buat struktur folder proyek Python lengkap hanya dengan terminal.',
        'Cari semua file .py di folder latihan lalu hitung jumlahnya lewat pipe.',
      ],
      caseStudy: {
        title: 'Membangun kerangka proyek dari nol',
        brief:
          'Kamu mendapat spesifikasi struktur folder proyek dan harus membuatnya tanpa membuka file explorer.',
        steps: [
          'Buat folder src, tests, docs, dan data.',
          'Buat file kosong main.py, config.py, dan README.md.',
          'Tampilkan struktur akhir dengan perintah tree atau alternatifnya.',
        ],
        deliverable: 'Screenshot atau output terminal berisi struktur folder yang diminta.',
      },
      checklist: [
        'Tidak panik saat terminal menampilkan path panjang.',
        'Bisa menjelaskan arti exit code 1.',
        'Bisa memindahkan file tanpa GUI.',
        'Tahu beda rm dan rm -r serta risikonya.',
      ],
    },
    {
      id: '0.3',
      slug: 'git-dasar',
      title: 'Git Dasar',
      duration: '3 jam',
      summary:
        'Git menyimpan riwayat pekerjaanmu. Fokus modul ini bukan menghafal semua perintah, tapi kebiasaan commit kecil yang jelas.',
      goals: [
        'Membuat repository dan melakukan commit pertama.',
        'Menulis pesan commit yang menjelaskan niat perubahan.',
        'Menggunakan .gitignore agar file sampah tidak masuk riwayat.',
      ],
      topics: [
        { h: 'Alur dasar', items: ['init, status, add, commit, log', 'Area kerja vs staging area', 'diff untuk melihat perubahan'] },
        { h: 'Kebiasaan baik', items: ['Commit kecil dan sering', 'Pesan commit berpola kata kerja', 'Satu commit satu tujuan'] },
        { h: 'Kolaborasi', items: ['Branch dan checkout', 'Remote, push, dan pull', 'Menyelesaikan konflik sederhana'] },
      ],
      practice: [
        'Commit script hello.py dalam tiga langkah: file kosong, isi, lalu perbaikan pesan.',
        'Buat branch baru, ubah satu baris, lalu gabungkan kembali ke main.',
      ],
      caseStudy: {
        title: 'Riwayat commit yang bisa dibaca orang lain',
        brief:
          'Kamu mewarisi folder berisi script berantakan. Ubah menjadi repo dengan riwayat yang menceritakan proses pengerjaan.',
        steps: [
          'Inisialisasi repo dan tambahkan .gitignore untuk venv serta file cache.',
          'Pecah pekerjaan menjadi minimal lima commit bermakna.',
          'Tampilkan git log --oneline dan pastikan urutannya logis.',
        ],
        deliverable: 'Repo dengan minimal lima commit dan pesan yang konsisten.',
      },
      checklist: [
        'Bisa menjelaskan beda add dan commit.',
        'Tahu fungsi .gitignore dan pernah membuatnya.',
        'Bisa membaca git log dan git diff.',
        'Tidak pernah commit folder venv.',
      ],
    },
    {
      id: '0.4',
      slug: 'membaca-error',
      title: 'Membaca Traceback',
      duration: '2 jam',
      summary:
        'Pemula sering menutup terminal saat melihat error. Di sini kamu belajar memperlakukan traceback sebagai petunjuk, bukan hukuman.',
      goals: [
        'Membaca traceback dari baris terbawah ke atas.',
        'Mengenali error umum: SyntaxError, NameError, TypeError, KeyError, IndexError.',
        'Mencari solusi dari pesan error tanpa menebak-nebak.',
      ],
      topics: [
        { h: 'Anatomi error', items: ['File, baris, dan potongan kode', 'Jenis exception dan pesannya', 'Urutan pemanggilan fungsi'] },
        { h: 'Error umum', items: ['Salah ketik nama variabel', 'Tipe tidak cocok saat operasi', 'Index atau key yang tidak ada', 'Indentasi tidak konsisten'] },
        { h: 'Strategi', items: ['Baca pesan terakhir lebih dulu', 'Isolasi baris bermasalah', 'Membaca dokumentasi resmi'] },
      ],
      practice: [
        'Rusak satu script dengan lima cara berbeda, lalu perbaiki satu per satu.',
        'Tulis ulang pesan error dengan bahasamu sendiri sebelum memperbaiki.',
      ],
      caseStudy: {
        title: 'Klinik error',
        brief:
          'Diberikan lima script rusak. Tugasmu mendiagnosis penyebabnya hanya dari traceback, lalu menuliskan solusinya.',
        steps: [
          'Jalankan tiap script dan catat jenis exception serta barisnya.',
          'Tulis dugaan penyebab sebelum mengubah kode.',
          'Perbaiki dan jelaskan perubahan dalam satu paragraf per kasus.',
        ],
        deliverable: 'catatan/error-log.md berisi lima kasus, penyebab, dan solusi.',
      },
      checklist: [
        'Bisa menunjuk baris penyebab dari traceback.',
        'Tahu beda SyntaxError dan TypeError.',
        'Tidak lagi menghapus kode acak saat error muncul.',
        'Punya kebiasaan membaca pesan error sampai habis.',
      ],
    },
    {
      id: '0.5',
      slug: 'debugging-dasar',
      title: 'Debugging Dasar',
      duration: '2 jam',
      summary:
        'Print debugging berguna, tapi debugger jauh lebih cepat untuk masalah yang melibatkan banyak variabel dan fungsi.',
      goals: [
        'Memasang breakpoint dan menghentikan program di baris tertentu.',
        'Melangkah baris per baris serta masuk ke dalam fungsi.',
        'Memeriksa nilai variabel tanpa menambah print di banyak tempat.',
      ],
      topics: [
        { h: 'Teknik', items: ['print dan label yang informatif', 'breakpoint() bawaan Python', 'Debugger VS Code: breakpoint, step over, step into, watch'] },
        { h: 'Alur', items: ['Mempersempit lokasi bug', 'Membuat reproduksi sekecil mungkin', 'Memeriksa asumsi satu per satu'] },
        { h: 'Setelah bug ketemu', items: ['Menulis test yang menangkap bug tersebut', 'Membersihkan print sementara', 'Mencatat penyebab di log belajar'] },
      ],
      practice: [
        'Debug fungsi yang salah menghitung rata-rata tanpa mengubah rumusnya dulu.',
        'Gunakan watch expression untuk memantau satu variabel selama loop.',
      ],
      caseStudy: {
        title: 'Bug yang tidak terlihat',
        brief:
          'Sebuah program menghitung total belanja tetapi hasilnya selalu kurang seribu. Temukan penyebabnya dengan debugger, bukan menebak.',
        steps: [
          'Pasang breakpoint di dalam loop perhitungan.',
          'Catat nilai setiap variabel pada dua iterasi pertama.',
          'Perbaiki logika dan tulis satu test sederhana untuk mengunci perilakunya.',
        ],
        deliverable: 'Script yang sudah benar plus catatan singkat nilai variabel sebelum dan sesudah perbaikan.',
      },
      checklist: [
        'Bisa memasang dan menghapus breakpoint.',
        'Tahu beda step over dan step into.',
        'Bisa memeriksa nilai variabel saat program berhenti.',
        'Selalu menambahkan test setelah memperbaiki bug.',
      ],
    },
  ],
  project: {
    title: 'hello-env',
    desc: 'Proyek pembuka untuk membuktikan lingkungan kerjamu siap. Tidak ada logika rumit di sini; yang dinilai adalah kerapian setup.',
    requirements: [
      'Script hello.py menerima nama lewat argumen dan menampilkan sapaan.',
      'Virtual environment terpisah dan tidak ikut masuk Git.',
      'Ada requirements.txt, meskipun isinya kosong atau hanya satu package.',
      'README menjelaskan cara memasang dan menjalankan proyek dari nol.',
      'Minimal tiga commit dengan pesan yang jelas.',
    ],
    bonus: [
      'Tambahkan opsi --uppercase untuk mengubah sapaan menjadi huruf besar.',
      'Tambahkan penanganan saat nama tidak diberikan.',
    ],
  },
  exit: [
    'Bisa membuat proyek Python dari nol tanpa menyalin perintah dari tutorial.',
    'Bisa menjalankan, menghentikan, dan men-debug script di editor.',
    'Repo punya riwayat commit yang rapi dan .gitignore yang benar.',
    'Tidak takut lagi melihat traceback.',
  ],
  tips: [
    'Jangan mengoleksi banyak editor atau package manager sekaligus. Pilih satu, kuasai dulu.',
    'Kalau ada perintah yang tidak dipahami, jalankan dengan --help sebelum menyalin dari internet.',
    'Simpan semua error yang pernah kamu temui beserta solusinya. Itu akan jadi catatan pribadi paling berguna.',
  ],
};
