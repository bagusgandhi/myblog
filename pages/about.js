import Image from 'next/image';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'About',
        description: 'Full Stack Engineer dengan pengalaman membangun dan mengoptimalkan sistem skala produksi di sektor telekomunikasi dan pertambangan.',
        type: 'website',
      },
    },
  };
}

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'PT Ucoal Sumberdaya',
    period: 'Mei 2025 - Sekarang',
    techStack: 'Next.js, React Native, NestJS, Go, Python, PHP, Docker, PostgreSQL, SQL Server',
    description: 'Memimpin inisiatif Digital Transformation dengan merancang dan mengembangkan sistem inti operasional pertambangan secara end-to-end.',
    highlights: [
      'Legal Integrated System (LIS) - Sistem paperless yang memangkas waktu approval dari beberapa hari menjadi <1 hari',
      'Fuel Management System - Dashboard analitik konsumsi BBM untuk identifikasi inefisiensi dan potensi fraud',
      'Coal Hauling System - Tracking distribusi batu bara real-time menggunakan QR-based identification',
    ],
  },
  {
    role: 'Full Stack Engineer',
    company: 'PT Datasintesa Teknologi Nusantara',
    period: 'Februari 2024 - Mei 2025',
    techStack: 'Next.js, NestJS, Python, Docker, PostgreSQL',
    description: 'Berkontribusi dalam pengembangan Operation Support System (OSS) BAKTI KOMINFO untuk monitoring infrastruktur telekomunikasi nasional.',
    highlights: [
      'Monitoring BTS untuk ribuan tower di seluruh Indonesia secara real-time',
      'Code refactoring yang meningkatkan performa dan maintainability',
      'REST API design menggunakan NestJS dan Python untuk integrasi multi-system',
    ],
  },
  {
    role: 'Full Stack Engineer',
    company: 'PT Widya Informasi Nusantara',
    period: 'Agustus 2022 - Februari 2024',
    techStack: 'Next.js, Vue.js, NestJS, Python, Laravel, Raspberry Pi, Docker, PostgreSQL',
    description: 'Mengembangkan berbagai produk berbasis web dan AI, fokus pada sistem otomasi dan monitoring.',
    highlights: [
      'Widya Notulensi - Platform notulensi otomatis berbasis AI untuk online meeting',
      'QHSE Monitoring System - Sistem keselamatan kerja IoT-based dengan alarm otomatis',
      'CI/CD pipeline implementation untuk otomasi deployment',
    ],
  },
  {
    role: 'Technical Hosting & WordPress Developer',
    company: 'CV Billion Technology (Jagoweb.com)',
    period: 'September 2017 - Juli 2022',
    techStack: 'WHMCS, Linux, cPanel, MySQL, WordPress, PHP, SEO',
    description: 'Mengelola server hosting untuk ratusan klien dan membangun situs web dengan optimasi SEO.',
    highlights: [],
  },
];

const skills = {
  Languages: ['TypeScript', 'JavaScript', 'PHP', 'Python', 'Go'],
  Frontend: ['React', 'Next.js', 'Vue.js', 'React Native'],
  Backend: ['NestJS', 'Node.js', 'Laravel', 'Odoo'],
  Database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  'Cloud & DevOps': ['GCP', 'AWS', 'Docker', 'Linux', 'CI/CD', 'Cloudflare'],
  Tools: ['BullMQ', 'n8n', 'Dialogflow', 'Google Analytics'],
};

const certifications = [
  {
    title: 'Google Cloud Platform: Associate Cloud Engineer',
    description: 'Sertifikasi untuk deployment aplikasi, monitoring operasi, dan pengelolaan solusi cloud infrastructure.',
  },
  {
    title: 'Cloud Computing - Bangkit Academy (2022)',
    description: 'Program didukung Google, GoTo, dan Traveloka. Fokus Cloud Computing & Google Cloud Platform.',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pb-12">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <Image
            className="rounded-xl"
            src="/img/bagus-gandhi-pratama.png"
            alt="Bagus Gandhi Pratama"
            width={120}
            height={120}
            priority
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Bagus Gandhi Pratama
            </h1>
            <p className="mt-1 text-lg text-accent dark:text-yellow font-medium">
              Full Stack Engineer
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
              Full Stack Engineer dengan pengalaman membangun dan mengoptimalkan sistem skala produksi di sektor telekomunikasi dan pertambangan. Menguasai pengembangan backend scalable dan frontend modern, dengan rekam jejak meningkatkan performa sistem serta menekan biaya infrastruktur.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://github.com/bagusgandhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-yellow no-underline"
              >
                <FiGithub size={16} /> github.com/bagusgandhi
              </a>
              <a
                href="https://linkedin.com/in/bagus-gandhi-pratama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-yellow no-underline"
              >
                <FiLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-white dark:border-gray-950" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-accent dark:text-yellow font-medium">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {exp.period}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 font-mono">
                  {exp.techStack}
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>
                {exp.highlights.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Education
        </h2>
        <div className="pl-6 border-l-2 border-gray-200 dark:border-gray-700 relative">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-white dark:border-gray-950" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Informatika (S1)
          </h3>
          <p className="text-accent dark:text-yellow font-medium">
            Universitas Teknologi Digital Indonesia
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            2019 - 2024 (Kelas Karyawan) | IPK: 3.35
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Skripsi: Pengembangan Aplikasi ChatBot Sebagai Layanan Live Chat Berbasis Website Menggunakan Dialogflow API
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Certifications
        </h2>
        <div className="space-y-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
