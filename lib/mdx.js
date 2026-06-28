import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith('.mdx') || name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: {
          ...data,
          date: data.date ? new Date(data.date).toISOString() : null,
          readingTime: readingTime(content).text,
        },
      };
    })
    .sort((a, b) => {
      if (!a.frontmatter.date) return 1;
      if (!b.frontmatter.date) return -1;
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    });

  return posts;
}

export function getPostBySlug(slug) {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdPath = path.join(postsDirectory, `${slug}.md`);

  let fullPath;
  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    frontmatter: {
      ...data,
      date: data.date ? new Date(data.date).toISOString() : null,
      readingTime: readingTime(content).text,
    },
  };
}

export function getAllTags() {
  const posts = getAllPosts();
  const tagCount = {};

  posts.forEach((post) => {
    const tags = post.frontmatter.tags || [];
    tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCount)
    .map(([name, count]) => ({ name, slug: name.toLowerCase().replace(/\s+/g, '-'), count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag) {
  const posts = getAllPosts();
  return posts.filter((post) => {
    const tags = (post.frontmatter.tags || []).map((t) => t.toLowerCase().replace(/\s+/g, '-'));
    return tags.includes(tag.toLowerCase());
  });
}
