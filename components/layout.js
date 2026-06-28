import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const siteMetadata = {
  title: 'Bagus Gandhi Pratama',
  description: 'Full Stack Engineer - Personal Blog & Portfolio',
  siteUrl: 'https://bagusgandhi.web.id',
  image: '/img/bagus-gandhi-pratama.png',
  twitterHandle: '@nlfkng',
};

export default function Layout({ children }) {
  const router = useRouter();
  const meta = children?.props?.meta || {};

  const title = meta.title
    ? `${meta.title} | ${siteMetadata.title}`
    : siteMetadata.title;
  const description = meta.description || siteMetadata.description;
  const image = meta.image || siteMetadata.image;
  const url = `${siteMetadata.siteUrl}${router.asPath}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content={meta.type || 'website'} />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Article metadata */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={router.asPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
