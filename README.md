# bagusgandhi.web.id

Personal blog & portfolio built with Next.js 14, MDX, and Tailwind CSS. Deployed on Vercel.

## Features

- 📝 Markdown/MDX-based blog posts
- 🎨 Modern UI with dark/light mode
- 🔍 SEO optimized with meta tags, sitemap, and structured data
- ⚡ Static site generation for fast performance
- 🏷️ Tag-based post categorization
- 📱 Fully responsive design
- 🎯 Code syntax highlighting with Prism

## Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Styling**: Tailwind CSS + Typography plugin
- **Content**: MDX with gray-matter frontmatter
- **Deployment**: Vercel
- **Icons**: React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Writing Posts

Create a new `.mdx` file in `content/posts/`:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
excerpt: "A brief description"
tags: ["tag1", "tag2"]
coverImage: "/img/optional-cover.jpg"
---

Your content here...
```

## Project Structure

```
├── content/
│   └── posts/          # Markdown blog posts
├── components/         # React components
├── lib/
│   └── mdx.js         # Markdown utilities
├── pages/
│   ├── about.js       # About/CV page
│   ├── posts/         # Blog listing and detail
│   └── tags/          # Tag-based filtering
├── public/            # Static assets
└── styles/            # Global styles
```

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://bagusgandhi.web.id
SITE_URL=https://bagusgandhi.web.id
```

## Deploy on Vercel

Push to GitHub and connect the repository to [Vercel](https://vercel.com). No additional configuration needed.
