import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socials = [
  { href: 'https://github.com/bagusgandhi', icon: FiGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/bagus-gandhi-pratama', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'mailto:bagusgandhi4@gmail.com', icon: FiMail, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Bagus Gandhi Pratama. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-yellow transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
