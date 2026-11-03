import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const phases = [
  {
    num: 0,
    title: 'Fondasi',
    level: 'Pemula total',
    dur: '1 minggu',
    desc: 'Alat kerja, terminal, Git, dan cara membaca error.',
    project: 'hello-env',
    to: '/docs/fase-0/',
  },
  {
    num: 1,
    title: 'Beginner',
    level: 'Dasar',
    dur: '4–5 minggu',
    desc: 'Sintaks inti, fungsi, struktur data, file, dan modul.',
    project: 'Expense Tracker CLI',
    to: '/docs/fase-1/',
  },
  {
    num: 2,
    title: 'Intermediate',
    level: 'Menengah',
    dur: '6–8 minggu',
    desc: 'OOP, testing, package, SQLite, dan kualitas kode.',
    project: 'Inventory System',
    to: '/docs/fase-2/',
  },
  {
    num: 3,
    title: 'Advanced',
    level: 'Lanjutan',
    dur: '8–10 minggu',
    desc: 'Typing, async, API, database, Docker, dan CI/CD.',
    project: 'TaskFlow API',
    to: '/docs/fase-3/',
  },
  {
    num: 4,
    title: 'Expert',
    level: 'Mahir',
    dur: '10–12 minggu',
    desc: 'Internals, performa, arsitektur, dan keamanan.',
    project: 'Proyek expert + writeup',
    to: '/docs/fase-4/',
  },
  {
    num: 5,
    title: 'Spesialisasi',
    level: 'Portofolio',
    dur: '6–10 minggu',
    desc: 'Pilih satu jalur: data, backend, DevOps, dan lainnya.',
    project: 'Proyek portofolio',
    to: '/docs/fase-5/',
  },
];

const stats = [
  { value: '6', label: 'fase belajar' },
  { value: '45', label: 'modul terstruktur' },
  { value: '600+', label: 'jam latihan' },
  { value: '6', label: 'proyek nyata' },
];

function PhaseCard({ phase }) {
  return (
    <Link className={styles.card} to={phase.to}>
      <div className={styles.cardTop}>
        <span className={styles.badge}>Fase {phase.num}</span>
        <span className={styles.duration}>{phase.dur}</span>
      </div>
      <h3 className={styles.cardTitle}>{phase.title}</h3>
      <p className={styles.cardDesc}>{phase.desc}</p>
      <div className={styles.cardFooter}>
        <span className={styles.project}>{phase.project}</span>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Kurikulum pembelajaran siswa</p>
          <h1 className={styles.title}>
            Belajar Python
            <span className={styles.titleAccent}> dari nol sampai mahir</span>
          </h1>
          <p className={styles.subtitle}>
            Enam fase, 45 modul, dan studi kasus nyata. Setiap tahap punya tujuan,
            latihan, proyek, dan syarat kelulusan yang jelas.
          </p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Mulai di sini
            </Link>
            <Link
              className="button button--outline button--lg"
              to="/docs/fase-0/">
              Lihat Fase 0
            </Link>
          </div>
          <div className={styles.stats}>
            {stats.map((s) => (
              <div className={styles.stat} key={s.label}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroCode}>
          <div className={styles.codeBar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.codeName}>belajar.py</span>
          </div>
          <pre className={styles.code}>
            <code>
              <span className={styles.cComment}># Perjalananmu dimulai di sini</span>
              {'\n'}
              <span className={styles.cKeyword}>def</span>{' '}
              <span className={styles.cFunc}>belajar</span>(level):
              {'\n    '}
              <span className={styles.cKeyword}>for</span> fase{' '}
              <span className={styles.cKeyword}>in</span>{' '}
              <span className={styles.cFunc}>range</span>(level):
              {'\n        '}
              <span className={styles.cFunc}>latihan</span>()
              {'\n        '}
              <span className={styles.cFunc}>bangun_proyek</span>()
              {'\n\n    '}
              <span className={styles.cKeyword}>return</span>{' '}
              <span className={styles.cString}>"siap kerja"</span>
              {'\n\n'}
              <span className={styles.cFunc}>print</span>(
              <span className={styles.cFunc}>belajar</span>(
              <span className={styles.cNum}>6</span>))
            </code>
          </pre>
          <div className={styles.codeOutput}>
            <span className={styles.prompt}>$</span> siap kerja
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Kurikulum Belajar Python"
      description="Kerangka belajar Python dari beginner sampai expert dengan studi kasus dan proyek nyata.">
      <Hero />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Peta perjalanan</h2>
            <p>
              Kerjakan berurutan. Jangan lompat fase sebelum syarat kelulusan
              terpenuhi.
            </p>
          </div>
          <div className={styles.grid}>
            {phases.map((p) => (
              <PhaseCard phase={p} key={p.num} />
            ))}
          </div>
        </section>

        <section className={clsx(styles.section, styles.how)}>
          <div className={styles.sectionHead}>
            <h2>Bagaimana kurikulum ini bekerja</h2>
            <p>Tiga aturan sederhana yang membuat progres terasa.</p>
          </div>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>01</span>
              <h3>Belajar satu modul</h3>
              <p>
                Setiap modul punya tujuan, materi inti, latihan, dan studi kasus
                kecil yang langsung dipakai.
              </p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>02</span>
              <h3>Selesaikan proyek fase</h3>
              <p>
                Akhir setiap fase menghasilkan satu karya nyata yang bisa
                didemokan dan dinilai dengan rubrik.
              </p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>03</span>
              <h3>Refleksi dan lanjut</h3>
              <p>
                Catat yang dipelajari, nilai dirimu dengan jujur, lalu naik fase
                hanya jika syaratnya terpenuhi.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Siap menulis baris pertama?</h2>
          <p>
            Mulai dari menyiapkan lingkungan kerja. Tidak perlu pengalaman
            sebelumnya.
          </p>
          <Link className="button button--primary button--lg" to="/docs/fase-0/">
            Buka Fase 0 — Fondasi
          </Link>
        </section>
      </main>
    </Layout>
  );
}
