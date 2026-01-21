'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import CTAButton from '@/components/ui/CTAButton';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-dark"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header Bar */}
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <Image
                src="/images/logo.png"
                alt="Pictures With Magic"
                width={280}
                height={84}
                className="h-20 w-auto"
                priority
              />
            </Link>

            {/* Desktop: Navigation + CTA */}
            <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
              <Navigation />
              <CTAButton size="md" />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-primary hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        )}
      </header>
    </>
  );
}
