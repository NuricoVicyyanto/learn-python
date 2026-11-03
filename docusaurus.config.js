// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Belajar Python',
  tagline: 'Kurikulum siswa dari beginner sampai expert',
  favicon: 'img/logo.svg',

  url: 'https://nuricovicyyanto.github.io',
  baseUrl: '/learn-python/',

  organizationName: 'NuricoVicyyanto',
  projectName: 'learn-python',

  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'kurikulum-v1',
        content:
          'Kurikulum v1 · kerangka pembelajaran aktif. Materi mendalam ditambahkan bertahap.',
        backgroundColor: '#FFF3C4',
        textColor: '#1F2937',
        isCloseable: true,
      },
      navbar: {
        title: 'Belajar Python',
        logo: {
          alt: 'Logo Belajar Python',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'kurikulum',
            position: 'left',
            label: 'Kurikulum',
          },
          {
            to: '/docs/panduan/cara-pakai',
            label: 'Cara pakai',
            position: 'left',
          },
          {
            to: '/docs/panduan/jadwal',
            label: 'Jadwal',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Kurikulum',
            items: [
              { label: 'Mulai di sini', to: '/docs/intro' },
              { label: 'Fase 0 — Fondasi', to: '/docs/fase-0/' },
              { label: 'Fase 1 — Beginner', to: '/docs/fase-1/' },
              { label: 'Fase 2 — Intermediate', to: '/docs/fase-2/' },
            ],
          },
          {
            title: 'Lanjutan',
            items: [
              { label: 'Fase 3 — Advanced', to: '/docs/fase-3/' },
              { label: 'Fase 4 — Expert', to: '/docs/fase-4/' },
              { label: 'Fase 5 — Spesialisasi', to: '/docs/fase-5/' },
            ],
          },
          {
            title: 'Panduan',
            items: [
              { label: 'Cara pakai kurikulum', to: '/docs/panduan/cara-pakai' },
              { label: 'Rubrik penilaian', to: '/docs/panduan/rubrik' },
              { label: 'Struktur repo', to: '/docs/panduan/struktur-repo' },
            ],
          },
        ],
        copyright: `Dibuat untuk pembelajaran siswa · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'bash', 'json', 'diff', 'toml', 'yaml'],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
