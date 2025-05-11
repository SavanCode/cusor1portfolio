// src/components/layout/Header.tsx
'use client';

import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 
                        dark:bg-gray-900/80">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <Navigation />
            <ThemeToggle />
          </div>
        </nav>
      </header>
    )
  }