import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { getAllPosts } from '../lib/mdx';
import PostCard from '../components/post-card';

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 5);

  return {
    props: {
      posts,
      meta: {
        title: null,
        description: 'Personal Blog & Portfolio by Bagus Gandhi Pratama - Full Stack Engineer',
        type: 'website',
      },
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-8">
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I&apos;m{' '}
              <span className="text-accent dark:text-yellow">
                Bagus Gandhi
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              Full Stack Engineer yang suka membangun produk digital. Menulis tentang web development, cloud, dan teknologi.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-colors no-underline"
              >
                About Me
                <FiArrowRight size={16} />
              </Link>
              <a
                href="https://github.com/bagusgandhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
              >
                <FiGithub size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/bagus-gandhi-pratama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              className="rounded-full"
              src="/img/bagus-gandhi-pratama.png"
              alt="Bagus Gandhi Pratama"
              width={180}
              height={180}
              priority
            />
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Posts
          </h2>
          <Link
            href="/posts"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent dark:text-accent-light hover:text-accent-dark dark:hover:text-accent no-underline"
          >
            View all
            <FiArrowRight size={14} />
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 py-8 text-center">
            Belum ada post. Segera hadir!
          </p>
        )}
      </section>
    </>
  );
}
