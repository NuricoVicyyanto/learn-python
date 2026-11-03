import fs from 'node:fs';
import path from 'node:path';
import fase0 from './data/fase-0.mjs';
import fase1 from './data/fase-1.mjs';
import fase2 from './data/fase-2.mjs';
import fase3 from './data/fase-3.mjs';
import fase4 from './data/fase-4.mjs';
import fase5 from './data/fase-5.mjs';

const root = path.resolve(import.meta.dirname, '..');
const docsDir = path.join(root, 'docs');

const phases = [fase0, fase1, fase2, fase3, fase4];

function write(file, content) {
  const target = path.join(docsDir, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content.trimStart(), 'utf8');
}

const frontmatter = (fields) =>
  [
    '---',
    ...Object.entries(fields).map(([k, v]) =>
      `${k}: ${typeof v === 'number' ? v : JSON.stringify(v)}`,
    ),
    '---',
    '',
  ].join('\n');

const bullets = (items) => items.map((i) => `- ${i}`).join('\n');

const numbered = (items) => items.map((i, n) => `${n + 1}. ${i}`).join('\n');

const topicSections = (topics) =>
  topics
    .map((t) => `### ${t.h}\n\n${bullets(t.items)}`)
    .join('\n\n');

function phaseIndex(phase) {
  const rows = phase.modules
    .map(
      (m) =>
        `| ${m.id} | [${m.title}](/docs/${phase.dir}/${m.slug}) | ${m.duration} |`,
    )
    .join('\n');

  return `${frontmatter({
    title: `Fase ${phase.num} — ${phase.title}`,
    sidebar_label: 'Ringkasan fase',
    sidebar_position: 0,
  })}
# Fase ${phase.num} — ${phase.title}

> ${phase.tagline}

:::info Ringkasan fase
**Level:** ${phase.level} · **Durasi:** ${phase.duration}
:::

${phase.intro}

## Tujuan fase

Setelah menyelesaikan fase ini, kamu mampu:

${bullets(phase.goals)}

## Peta modul

| Modul | Materi | Estimasi |
| --- | --- | --- |
${rows}

## Proyek akhir fase

### ${phase.project.title}

${phase.project.desc}

**Requirement wajib**

${bullets(phase.project.requirements)}

**Nilai tambah**

${bullets(phase.project.bonus)}

:::tip Aturan pengerjaan
Kerjakan proyek ini di folder terpisah dengan repository sendiri. Tulis README sebelum mulai menulis kode, lalu perbarui setiap kali ada keputusan penting.
:::

## Exit criteria

Kamu boleh lanjut ke fase berikutnya jika:

${bullets(phase.exit)}

## Tips dari fase ini

${bullets(phase.tips)}
`;
}

function modulePage(phase, mod) {
  return `${frontmatter({
    title: `${mod.id} ${mod.title}`,
    sidebar_label: `${mod.id} ${mod.title}`,
    description: mod.summary,
  })}
# ${mod.id} ${mod.title}

:::info Detail modul
**Fase ${phase.num} — ${phase.label}** · **Estimasi:** ${mod.duration}
:::

${mod.summary}

## Tujuan pembelajaran

Setelah menyelesaikan modul ini, kamu mampu:

${bullets(mod.goals)}

## Materi inti

${topicSections(mod.topics)}

## Latihan terbimbing

${numbered(mod.practice)}

## Studi kasus: ${mod.caseStudy.title}

${mod.caseStudy.brief}

**Langkah pengerjaan**

${numbered(mod.caseStudy.steps)}

:::note Deliverable
${mod.caseStudy.deliverable}
:::

## Checklist

${mod.checklist.map((c) => `- [ ] ${c}`).join('\n')}

:::tip Catatan belajar
Setelah selesai, tulis lima baris di \`catatan.md\`: apa yang dipelajari, bagian tersulit, dan satu hal yang masih belum jelas. Catatan ini yang membuat progresmu terlihat.
:::
`;
}

function trackPage(phase, track) {
  return `${frontmatter({
    title: `${track.title}`,
    sidebar_label: `${track.title}`,
    description: track.desc,
  })}
# ${track.title}

:::info Track spesialisasi
**Durasi:** ${track.duration} · **Fase ${phase.num}**
:::

${track.desc}

**Stack utama**

${track.stack.map((s) => `\`${s}\``).join(' · ')}

## Yang dipelajari

${topicSections(track.topics)}

## Proyek portofolio

${track.portfolio}

## Kriteria selesai

${bullets(track.exit)}

:::tip Bukti karya
Portofolio yang baik punya tiga hal: masalah nyata, keputusan teknis yang bisa dijelaskan, dan bukti bahwa karya itu berjalan. Rekam demo singkat dan tulis README yang jujur.
:::
`;
}

function phase5Index(phase) {
  const rows = phase.tracks
    .map(
      (t) =>
        `| [${t.title}](/docs/${phase.dir}/${t.slug}) | ${t.stack.slice(0, 3).join(', ')} | ${t.duration} |`,
    )
    .join('\n');

  return `${frontmatter({
    title: `Fase ${phase.num} — ${phase.title}`,
    sidebar_label: 'Ringkasan fase',
    sidebar_position: 0,
  })}
# Fase ${phase.num} — ${phase.title}

> ${phase.tagline}

:::info Ringkasan fase
**Level:** ${phase.level} · **Durasi:** ${phase.duration}
:::

${phase.intro}

## Cara memilih track

${numbered(phase.howToChoose)}

## Pilihan track

| Track | Stack awal | Estimasi |
| --- | --- | --- |
${rows}

:::warning Satu dulu, bukan semua
Menyentuh banyak track setengah-setengah tidak menghasilkan portofolio. Pilih satu, selesaikan proyeknya, baru pertimbangkan yang lain.
:::
`;
}

// Fase 0–4
for (const phase of phases) {
  write(`${phase.dir}/index.md`, phaseIndex(phase));
  for (const mod of phase.modules) {
    write(`${phase.dir}/${mod.slug}.md`, modulePage(phase, mod));
  }
}

// Fase 5 (track)
write(`${fase5.dir}/index.md`, phase5Index(fase5));
for (const track of fase5.tracks) {
  write(`${fase5.dir}/${track.slug}.md`, trackPage(fase5, track));
}

// Sidebar
const panduan = [
  ['panduan/cara-pakai', 'Cara pakai kurikulum'],
  ['panduan/rubrik', 'Rubrik penilaian'],
  ['panduan/struktur-repo', 'Struktur repo belajar'],
  ['panduan/jadwal', 'Jadwal & target waktu'],
];

const sidebarGroups = phases.map((phase) => {
  const items = phase.modules.map((m) => `        '${phase.dir}/${m.slug}',`);
  return `    {
      type: 'category',
      label: 'Fase ${phase.num} — ${phase.label}',
      link: { type: 'doc', id: '${phase.dir}/index' },
      collapsed: false,
      items: [
        '${phase.dir}/index',
${items.join('\n')}
      ],
    },`;
});

const fase5Group = `    {
      type: 'category',
      label: 'Fase 5 — Spesialisasi',
      link: { type: 'doc', id: 'fase-5/index' },
      collapsed: true,
      items: [
        'fase-5/index',
${fase5.tracks.map((t) => `        'fase-5/${t.slug}',`).join('\n')}
      ],
    },`;

const sidebars = `// File ini dihasilkan otomatis oleh scripts/generate-docs.mjs.
// Jalankan: npm run docs:generate
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  kurikulum: [
    'intro',
    {
      type: 'category',
      label: 'Panduan',
      collapsed: false,
      items: [
${panduan.map(([id]) => `        '${id}',`).join('\n')}
      ],
    },
${sidebarGroups.join('\n')}
${fase5Group}
  ],
};

export default sidebars;
`;

fs.writeFileSync(path.join(root, 'sidebars.js'), sidebars, 'utf8');

console.log('Docs berhasil dibuat.');
