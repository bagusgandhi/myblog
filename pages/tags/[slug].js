import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { getAllTags, getPostsByTag } from '../../lib/mdx';
import PostCard from '../../components/post-card';

export async function getStaticPaths() {
  const tags = getAllTags();
  const paths = tags.map((tag) => ({
    params: { slug: tag.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = getPostsByTag(slug);
  const tags = getAllTags();
  const currentTag = tags.find((t) => t.slug === slug);

  return {
    props: {
      posts,
      tagName: currentTag?.name || slug,
      tagCount: currentTag?.count || 0,
      meta: {
        title: `Posts tagged "${currentTag?.name || slug}"`,
        description: `All posts tagged with ${currentTag?.name || slug}`,
        type: 'website',
      },
    },
  };
}

export default function TagPage({ posts, tagName, tagCount }) {
  return (
    <div>
      {/* Back */}
      <Link
        href="/posts"
        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-yellow transition-colors mb-8 no-underline"
      >
        <FiArrowLeft size={14} />
        All posts
      </Link>

      {/* Header */}
      <div className="pb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          <span className="text-accent dark:text-yellow">#</span>{tagName}
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {tagCount} {tagCount === 1 ? 'post' : 'posts'} with this tag
        </p>
      </div>

      {/* Posts */}
      {posts.length > 0 ? (
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 py-12 text-center">
          No posts found with this tag.
        </p>
      )}
    </div>
  );
}
