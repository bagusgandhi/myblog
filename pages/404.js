import Link from 'next/link';
import { FiHome } from 'react-icons/fi';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Page not found. The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-colors no-underline"
      >
        <FiHome size={16} />
        Back to Home
      </Link>
    </div>
  );
}
