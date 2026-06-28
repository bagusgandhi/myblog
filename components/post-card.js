import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function PostCard({ post }) {
  const { slug, frontmatter } = post;
  const { title, excerpt, date, tags, readingTime, coverImage } = frontmatter;

  return (
    <article className="group relative py-6 first:pt-0">
      <div className="flex gap-4">
        {/* Thumbnail */}
        {coverImage && (
          <div className="hidden sm:block flex-shrink-0 w-32 h-24 relative rounded-lg overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="flex-1 flex flex-col gap-2">
          {/* Date & Reading Time */}
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            {date && (
              <time dateTime={date}>
                {format(new Date(date), 'd MMM yyyy', { locale: id })}
              </time>
            )}
            {readingTime && (
              <>
                <span>·</span>
                <span>{readingTime}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-accent dark:group-hover:text-yellow transition-colors">
            <Link href={`/posts/${slug}`} className="no-underline">
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h2>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-gray-600 dark:text-gray-400 line-clamp-2 text-sm">
              {excerpt}
            </p>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="relative z-10 text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent-dark dark:bg-yellow/10 dark:text-yellow hover:bg-accent/20 dark:hover:bg-yellow/20 transition-colors no-underline"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
