'use client';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
      My Portfolio
    </Link>
  );
} 