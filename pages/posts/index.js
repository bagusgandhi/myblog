import { getAllPosts, getAllTags } from '../../lib/mdx';
import PostCard from '../../components/post-card';
import Link from 'next/link';

export async function getStaticProps() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return {
    props: {
      posts,
      tags,
      meta: {
        title: 'Blog',
        description: 'Articles, tutorials, dan catatan tentang web development, cloud computing, dan teknologi.',
        type: 'website',
      },
    },
  };
}

export default function Posts({ posts, tags }) {
  return (
    <div>
      {/* Header */}
      <div className="pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Blog
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Articles, tutorials, dan catatan tentang web development, cloud computing, dan teknologi.
        </p>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pb-8">
          {tags.map((tag) => (
            <Link
              key={tag.slug}
              href={`/tags/${tag.slug}`}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-accent/10 hover:text-accent-dark dark:hover:bg-yellow/10 dark:hover:text-yellow transition-colors no-underline"
            >
              #{tag.name} <span className="text-gray-400">({tag.count})</span>
            </Link>
          ))}
        </div>
      )}

      {/* Posts */}
      {posts.length > 0 ? (
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 py-12 text-center">
          Belum ada post. Segera hadir!
        </p>
      )}
    </div>
  );
}
