import { useEffect } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import { getAllPosts, getPostBySlug } from '../../lib/mdx';

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { notFound: true };
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeCodeTitles, [rehypePrism, { ignoreMissing: true }]],
    },
  });

  return {
    props: {
      post: {
        slug: post.slug,
        frontmatter: post.frontmatter,
        source: mdxSource,
      },
      meta: {
        title: post.frontmatter.title,
        description: post.frontmatter.excerpt || '',
        type: 'article',
        date: post.frontmatter.date,
        image: post.frontmatter.coverImage || null,
      },
    },
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bagusgandhi.web.id';

export default function Post({ post }) {
  const { frontmatter, source, slug } = post;
  const postUrl = `${siteUrl}/posts/${slug}`;

  useEffect(() => {
    const d = document;
    const s = d.createElement('script');
    s.src = 'https://bagusgandhi.disqus.com/embed.js';
    s.setAttribute('data-timestamp', Date.now().toString());
    (d.head || d.body).appendChild(s);

    return () => {
      // cleanup on unmount
      const disqusThread = d.getElementById('disqus_thread');
      if (disqusThread) disqusThread.innerHTML = '';
    };
  }, [slug]);

  return (
    <article>
      {/* Back link */}
      <Link
        href="/posts"
        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-yellow transition-colors mb-8 no-underline"
      >
        <FiArrowLeft size={14} />
        Back to posts
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
          {frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
          {frontmatter.date && (
            <span className="inline-flex items-center gap-1.5">
              <FiCalendar size={14} />
              <time dateTime={frontmatter.date}>
                {format(new Date(frontmatter.date), 'd MMMM yyyy', { locale: id })}
              </time>
            </span>
          )}
          {frontmatter.readingTime && (
            <span className="inline-flex items-center gap-1.5">
              <FiClock size={14} />
              {frontmatter.readingTime}
            </span>
          )}
        </div>

        {/* Tags */}
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent-dark dark:bg-yellow/10 dark:text-yellow no-underline"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Cover Image */}
      {frontmatter.coverImage && (
        <div className="relative w-full h-64 sm:h-80 mb-8 rounded-xl overflow-hidden">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote {...source} />
      </div>

      {/* Share Buttons */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
          Share this post
        </p>
        <div className="flex items-center gap-3">
          <TwitterShareButton url={postUrl} title={frontmatter.title}>
            <TwitterIcon size={36} round />
          </TwitterShareButton>
          <FacebookShareButton url={postUrl} quote={frontmatter.title}>
            <FacebookIcon size={36} round />
          </FacebookShareButton>
          <LinkedinShareButton url={postUrl} title={frontmatter.title}>
            <LinkedinIcon size={36} round />
          </LinkedinShareButton>
          <WhatsappShareButton url={postUrl} title={frontmatter.title}>
            <WhatsappIcon size={36} round />
          </WhatsappShareButton>
        </div>
      </div>

      {/* Disqus Comments */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div id="disqus_thread"></div>
      </div>
    </article>
  );
}
