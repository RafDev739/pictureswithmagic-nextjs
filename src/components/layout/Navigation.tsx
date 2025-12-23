'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { mainNavigation, type NavItem } from '@/config/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav aria-label="Main navigation" className="flex items-center space-x-1">
      {mainNavigation.map((item) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link
            href={item.href}
            aria-current={isActive(item.href) ? 'page' : undefined}
            aria-expanded={item.submenu ? activeDropdown === item.label : undefined}
            className={`
              px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              ${
                isActive(item.href)
                  ? 'text-primary bg-primary/10'
                  : 'text-neutral-700 hover:text-primary hover:bg-neutral-100'
              }
              ${item.submenu ? 'flex items-center gap-1' : ''}
            `}
          >
            {item.label}
            {item.submenu && (
              <svg
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === item.label ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </Link>

          {/* Dropdown Menu with Extended Hover Zone */}
          {item.submenu && activeDropdown === item.label && (
            <>
              {/* Invisible bridge to prevent gap */}
              <div className="absolute left-0 right-0 h-2 bg-transparent" />

              <div
                role="menu"
                aria-label={`${item.label} submenu`}
                className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 animate-slide-down z-50"
              >
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    role="menuitem"
                    aria-current={isActive(subItem.href) ? 'page' : undefined}
                    className={`
                      block px-4 py-2 text-sm transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset
                      ${
                        isActive(subItem.href)
                          ? 'text-primary bg-primary/10 font-medium'
                          : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                      }
                    `}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </nav>
  );
}
